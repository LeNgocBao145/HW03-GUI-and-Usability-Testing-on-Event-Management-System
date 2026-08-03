#!/usr/bin/env python3
"""
merge_crossplatform_results.py — per-screen cross-platform matrix pipeline.

Report.md is expected to hold ONE matrix table per screen, each under its own
heading, e.g.:

    ### Screen A1
    | ID | Device Type | OS | Browser | Result | Notes | Screenshot |
    ...
    ### Screen A3
    | ID | Device Type | OS | Browser | Result | Notes | Screenshot |
    ...

Subcommands:
  init              - parse every "### Screen <ID>" table in Report.md once into
                       crossplatform_master.json (keyed by screen).
  validate-coverage - BEFORE asking the model to evaluate anything: check that
                       cross_platform_screenshots/ actually has enough distinct
                       OS families / browsers / device classes for a screen, per
                       Task 3's coverage floor. Run this first, every time.
  ingest-screenshots - match existing screenshots to a screen's matrix rows by
                       filename (device_os_browser_screenID.ext), filling the
                       Screenshot column and flagging rows with no matching file.
                       Does NOT decide Pass/Fail — that still needs an actual look
                       at each image.
  apply             - merge a diff-only AI result (only rows with Fail/defect)
                       onto the full per-screen matrix.
  render            - turn the full per-screen result set back into the matrix's
                       markdown table shape, ready to paste under that screen's
                       heading in Report.md.

Usage:
  python merge_crossplatform_results.py init --report Report.md --out crossplatform_master.json
  python merge_crossplatform_results.py validate-coverage --screen A1 --screenshot-dir cross_platform_screenshots
  python merge_crossplatform_results.py ingest-screenshots --screen A1 --master crossplatform_master.json --screenshot-dir cross_platform_screenshots --out prefill_A1.json
  python merge_crossplatform_results.py apply --screen A1 --master crossplatform_master.json --diff diff_A1.json --out results_A1.json
  python merge_crossplatform_results.py render --results results_A1.json --out Report_A1_matrix.md
"""
import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent.parent / "_shared" / "scripts"))
sys.path.insert(0, str(Path(__file__).resolve().parent))
import table_diff as td  # noqa: E402
import screenshot_parser as sp  # noqa: E402

COLUMN_ALIASES = {
    "id": {"id"},
    "device_type": {"device type", "device"},
    "os": {"os", "operating system"},
    "browser": {"browser"},
    "result": {"result"},
    "notes": {"notes", "note"},
    "screenshot": {"screenshot", "screenshot(s)", "evidence"},
}
DEFAULT_STATUS = {"result": "Pass", "notes": ""}
STATUS_VALUES = {"pass": "Pass", "fail": "Fail"}
DEFECT_TYPES = {"overflow", "overlap", "broken_layout", "unreadable_text", "non_responsive_control", "other"}


def normalize_agent_artifact_path(path_str: str, skill_dir: str) -> str:
    path = Path(path_str)
    if path.is_absolute():
        return str(path)
    if path.parent == Path("."):
        return str(Path("agent_artifacts") / skill_dir / path)
    return str(path)


def cmd_init(args):
    args.out = normalize_agent_artifact_path(args.out, "cross-platform-verifier")
    report_text = Path(args.report).read_text(encoding="utf-8")
    sections = td.iter_heading_sections(report_text, r"^Screen\s+(\S+)")
    if not sections:
        raise SystemExit(
            "No '### Screen <ID>' headings found in the report. Each of your 3 "
            "screens needs its own heading + matrix table (see this skill's SKILL.md)."
        )

    screens = {}
    for heading_text, section_md in sections:
        import re
        m = re.search(r"Screen\s+(\S+)", heading_text, re.I)
        screen_id = m.group(1)
        rows = td.parse_table(section_md, COLUMN_ALIASES, id_col="id")
        screens[screen_id] = {"count": len(rows), "items": rows}

    td.save_json({"source": args.report, "screens": screens}, args.out)
    print(f"Parsed {len(screens)} screen(s): {list(screens)} -> {args.out}")


def cmd_validate_coverage(args):
    parsed, errors = sp.scan_screenshot_dir(args.screenshot_dir, screen=args.screen)

    print(f"=== Coverage check: Screen {args.screen} ===")
    if errors:
        print(f"\n⚠ {len(errors)} file(s) didn't match the naming convention "
              f"(these are IGNORED, not counted toward coverage):")
        for e in errors:
            print(f"  - {e}")

    if not parsed:
        print(f"\n✗ No correctly-named screenshots found for Screen {args.screen} in "
              f"{args.screenshot_dir}. Nothing to evaluate yet.")
        sys.exit(1)

    report = sp.check_coverage(parsed)
    print(f"\nScreenshots found: {report['screenshot_count']}")
    print(f"OS families covered ({len(report['os_families_covered'])}/{sp.REQUIRED_OS_FAMILIES} required): "
          f"{report['os_families_covered']} {'✓' if report['os_families_ok'] else '✗ NOT ENOUGH'}")
    print(f"Browsers covered ({len(report['browsers_covered'])}/{sp.REQUIRED_BROWSERS} required): "
          f"{report['browsers_covered']} {'✓' if report['browsers_ok'] else '✗ NOT ENOUGH'}")
    print(f"Device classes covered: {report['device_classes_covered']} "
          f"{'✓' if report['device_classes_ok'] else '✗ MISSING: ' + str(report['missing_device_classes'])}")

    if report["all_requirements_met"]:
        print(f"\n✓ Screen {args.screen} meets Task 3's coverage floor. Safe to proceed.")
    else:
        print(f"\n✗ Screen {args.screen} does NOT meet Task 3's coverage floor yet. "
              f"Capture more screenshots before running the evaluation — otherwise "
              f"the matrix will be incomplete regardless of how well the images are read.")
        sys.exit(1)


def cmd_ingest_screenshots(args):
    args.out = normalize_agent_artifact_path(args.out, "cross-platform-verifier")
    master = td.load_json(args.master)
    if args.screen not in master["screens"]:
        raise SystemExit(f"Screen {args.screen!r} not found in {args.master}. "
                          f"Known screens: {list(master['screens'])}")
    rows = master["screens"][args.screen]["items"]

    parsed, errors = sp.scan_screenshot_dir(args.screenshot_dir, screen=args.screen)
    if errors:
        print(f"⚠ {len(errors)} misnamed file(s) skipped — see validate-coverage for details.", file=sys.stderr)

    # Index screenshots by (device_type, os, browser) for matching against matrix rows.
    by_combo = {(r["device_type"], r["os"], r["browser"]): r["filename"] for r in parsed}

    matched, unmatched_rows, leftover_files = 0, [], set(by_combo)
    for row in rows:
        combo = (row["device_type"], row["os"], row["browser"])
        fname = by_combo.get(combo)
        if fname:
            row["screenshot"] = f"{args.screenshot_dir}/{fname}"
            matched += 1
            leftover_files.discard(combo)
        else:
            unmatched_rows.append(row["id"])

    print(f"Matched {matched}/{len(rows)} matrix rows to screenshots for Screen {args.screen}.")
    if unmatched_rows:
        print(f"⚠ Rows with NO matching screenshot (matrix says this device/OS/browser "
              f"combo should exist, no file found): {unmatched_rows}")
    if leftover_files:
        print(f"⚠ Screenshot(s) found that don't match any row in the matrix template "
              f"— either add a row for them or they were captured by mistake: {sorted(leftover_files)}")

    td.save_json({"screen": args.screen, "items": rows}, args.out)
    print(f"Prefilled matrix -> {args.out} (Screenshot column filled where matched; "
          f"Result/Notes still need actual evaluation of each image, not just filename matching)")


def cmd_apply(args):
    args.out = normalize_agent_artifact_path(args.out, "cross-platform-verifier")
    prefilled = td.load_json(args.master)  # accepts either the raw master or ingest-screenshots' output
    rows = prefilled.get("items") or prefilled["screens"][args.screen]["items"]
    diff = td.load_json(args.diff)

    diff_results = diff.get("results", {})
    for row_id, override in diff_results.items():
        if override.get("result") == "Fail" and "defect_type" not in override:
            print(f"WARNING: {row_id} is marked 'Fail' with no defect_type "
                  f"(expected one of {sorted(DEFECT_TYPES)}) — the report needs this per §6.",
                  file=sys.stderr)

    full_rows = td.apply_diff(rows, diff, id_col="id", default_status=DEFAULT_STATUS)

    totals_actual = td.compute_totals(full_rows, "result", STATUS_VALUES)
    totals_claimed = diff.get("totals", {})
    if totals_claimed and totals_claimed != totals_actual:
        print(f"WARNING: diff totals {totals_claimed} don't match recomputed "
              f"totals {totals_actual} — check the model didn't skip a row.", file=sys.stderr)

    out = {"screen": args.screen, "baseline": diff.get("baseline"), "totals": totals_actual, "results": full_rows}
    td.save_json(out, args.out)
    print(f"Merged matrix for Screen {args.screen} -> {args.out} ({totals_actual})")


def cmd_render(args):
    args.out = normalize_agent_artifact_path(args.out, "cross-platform-verifier")
    data = td.load_json(args.results)

    def screenshot_cell(row):
        path = row.get("screenshot", "").strip()
        return f"![]({path})" if path else ""

    columns = [
        ("ID", lambda r: f"**{r['id']}**"),
        ("Device Type", "device_type"),
        ("OS", "os"),
        ("Browser", "browser"),
        ("Result", "result"),
        ("Notes", lambda r: (r.get("notes", "") + (f" [{r['defect_type']}]" if r.get("defect_type") else "")).strip()),
        ("Screenshot", screenshot_cell),
    ]
    table_md = td.render_markdown_table(data["results"], columns)
    totals = data["totals"]
    header = (f"### Screen {data.get('screen', '(unset)')}\n\n"
              f"Baseline: **{data.get('baseline', '(unset)')}**  \n"
              f"Totals: evaluated {totals['evaluated']}, "
              f"pass {totals.get('pass', 0)}, "
              f"fail {totals.get('fail', 0)}\n\n")
    Path(args.out).write_text(header + table_md, encoding="utf-8")
    print(f"Rendered matrix -> {args.out}")


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="command", required=True)

    p = sub.add_parser("init")
    p.add_argument("--report", required=True, help="Markdown file with one '### Screen <ID>' table per screen")
    p.add_argument("--out", required=True)
    p.set_defaults(func=cmd_init)

    p = sub.add_parser("validate-coverage")
    p.add_argument("--screen", required=True)
    p.add_argument("--screenshot-dir", required=True)
    p.set_defaults(func=cmd_validate_coverage)

    p = sub.add_parser("ingest-screenshots")
    p.add_argument("--screen", required=True)
    p.add_argument("--master", required=True, help="crossplatform_master.json from init")
    p.add_argument("--screenshot-dir", required=True)
    p.add_argument("--out", required=True)
    p.set_defaults(func=cmd_ingest_screenshots)

    p = sub.add_parser("apply")
    p.add_argument("--screen", required=True)
    p.add_argument("--master", required=True, help="master or ingest-screenshots output for this screen")
    p.add_argument("--diff", required=True)
    p.add_argument("--out", required=True)
    p.set_defaults(func=cmd_apply)

    p = sub.add_parser("render")
    p.add_argument("--results", required=True)
    p.add_argument("--out", required=True)
    p.set_defaults(func=cmd_render)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
