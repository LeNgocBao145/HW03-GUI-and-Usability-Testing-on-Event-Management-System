#!/usr/bin/env python3
"""
merge_checklist_results.py
Companion script for the gui-checklist-executor skill.

Subcommands:
  init        - Parse any markdown table checklist into a JSON master file.
  apply       - Merge diff JSON onto master JSON to create full per-screen results.
  render      - Export per-screen JSON back into a markdown table.
  append-bug  - Append a confirmed bug/usability finding to Bug Log (§7 compliant).
"""
import argparse
import json
import re
import sys
from datetime import datetime
from pathlib import Path


def normalize_agent_artifact_path(path_str: str, skill_dir: str) -> str:
    path = Path(path_str)
    if path.is_absolute():
        return str(path)
    if path.parent == Path("."):
        return str(Path("agent_artifacts") / skill_dir / path)
    return str(path)


def parse_markdown_table(md_text: str):
    """Parses various Markdown pipe table formats for checklist items."""
    COLUMN_ALIASES = {
        "id": {"id", "gui no", "gui id", "item id", "no", "no.", "#"},
        "ia": {"ia", "aspect", "category", "interface aspect"},
        "item": {"item", "checkpoints", "description", "checklist item", "checklist description"},
    }

    lines = [l.strip() for l in md_text.splitlines() if l.strip().startswith("|")]
    if len(lines) < 2:
        raise ValueError("No markdown pipe table found in the checklist file.")

    def split_row(row):
        return [c.strip() for c in row.strip().strip("|").split("|")]

    header = [h.lower() for h in split_row(lines[0])]

    col_index = {}
    for key, aliases in COLUMN_ALIASES.items():
        for i, h in enumerate(header):
            # Clean header string from bold or formatting
            clean_h = re.sub(r"\*|_", "", h).strip()
            if clean_h in aliases:
                col_index[key] = i
                break

    if "id" not in col_index or "item" not in col_index:
        raise ValueError(f"Required columns (ID, Item/Checkpoints) not identified in header: {header}")

    items = []
    current_ia = "IA-01"

    for row in lines[2:]:  # Skip header and separator
        cells = split_row(row)
        if len(cells) <= max(col_index.values()):
            continue

        raw_id = re.sub(r"\*|_", "", cells[col_index["id"]]).strip()
        raw_item = cells[col_index["item"]].strip()

        # Check if this row is an Aspect/Category Header (e.g., **1.00** | **IA-01: GENERAL UI STANDARDS**)
        ia_match = re.search(r"(IA-\d+[^|*]*)", raw_item) or re.search(r"(IA-\d+[^|*]*)", raw_id)
        if ia_match:
            current_ia = ia_match.group(1).split(":")[0].strip()
            continue

        # Ignore empty rows or non-numeric item IDs
        if not raw_id or not re.match(r"^\d+\.\d+", raw_id):
            continue

        # Extract IA if explicitly defined in a column
        row_ia = cells[col_index["ia"]].strip() if "ia" in col_index else current_ia
        row_ia = re.sub(r"\*|_", "", row_ia).strip()

        items.append({
            "id": raw_id,
            "ia": row_ia if row_ia else current_ia,
            "item": re.sub(r"\*|_", "", raw_item).strip()
        })

    if not items:
        raise ValueError("Parsed the table but found zero valid item rows.")
    return items


def cmd_init(args):
    args.out = normalize_agent_artifact_path(args.out, "gui-checklist-executor")
    md_text = Path(args.checklist).read_text(encoding="utf-8")
    items = parse_markdown_table(md_text)
    out = {"source": args.checklist, "count": len(items), "items": items}
    Path(args.out).parent.mkdir(parents=True, exist_ok=True)
    Path(args.out).write_text(json.dumps(out, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Parsed {len(items)} checklist items -> {args.out}")


def cmd_apply(args):
    args.out = normalize_agent_artifact_path(args.out, "gui-checklist-executor")
    master = json.loads(Path(args.checklist).read_text(encoding="utf-8"))
    diff = json.loads(Path(args.diff).read_text(encoding="utf-8"))

    diff_results = diff.get("results", {})
    full_results = []
    for item in master["items"]:
        item_id = item["id"]
        override = diff_results.get(item_id)
        if override:
            status = override.get("status", "FAIL")
            reason = override.get("reason", "")
            severity = override.get("severity")
        else:
            status = "PASS"
            reason = ""
            severity = None

        full_results.append({
            "id": item_id,
            "ia": item["ia"],
            "item": item["item"],
            "status": status,
            "reason": reason,
            "severity": severity
        })

    totals_actual = {
        "evaluated": len(full_results),
        "pass": sum(1 for r in full_results if r["status"] == "PASS"),
        "fail": sum(1 for r in full_results if r["status"] == "FAIL"),
        "na": sum(1 for r in full_results if r["status"] == "N/A")
    }

    out = {
        "screen": diff.get("screen"),
        "scenario": diff.get("scenario"),
        "totals": totals_actual,
        "results": full_results
    }
    Path(args.out).parent.mkdir(parents=True, exist_ok=True)
    Path(args.out).write_text(json.dumps(out, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Merged full checklist for '{out['screen']}' -> {args.out} ({totals_actual})")


def cmd_render(args):
    args.out = normalize_agent_artifact_path(args.out, "gui-checklist-executor")
    data = json.loads(Path(args.results).read_text(encoding="utf-8"))
    lines = [
        f"## Checklist Execution — {data.get('screen', '(unnamed screen)')}",
        "",
        f"Totals: Evaluated {data['totals']['evaluated']} | Pass {data['totals']['pass']} | Fail {data['totals']['fail']} | N/A {data['totals']['na']}",
        "",
        "| GUI No | Checkpoints | Status | Notes / Image |",
        "| :--- | :--- | :---: | :--- |"
    ]
    for r in data["results"]:
        note = r["reason"] if r["status"] == "FAIL" else ""
        lines.append(f"| {r['id']} | {r['item']} | {r['status']} | {note} |")

    Path(args.out).parent.mkdir(parents=True, exist_ok=True)
    Path(args.out).write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Rendered table -> {args.out}")


def _format_steps(steps: str) -> str:
    """Convert '1. foo 2. bar 3. baz' into '1. foo<br>2. bar<br>3. baz' for table cells."""
    # Split on numbered-step boundaries like " 2. ", " 3. " etc.
    formatted = re.sub(r"\s+(\d+\.\s)", r"<br>\1", steps.strip())
    return formatted


def cmd_append_bug(args):
    """Appends a single finding into the Section 7 Bug & Usability Findings Log."""
    log_path = Path(args.log_file)
    header = (
        "# Section 7 — Bug and Usability Findings Log\n\n"
        "| ID | Screen | Type | Description | "
        "Reproduction Steps / Heuristic | Severity (0–4) | Suggested Fix | Evidence Image | Logged At |\n"
        "| :--- | :--- | :--- | :--- | :--- | :---: | :--- | :---: | :--- |\n"
    )

    if not log_path.exists() or log_path.stat().st_size == 0:
        log_path.parent.mkdir(parents=True, exist_ok=True)
        log_path.write_text(header, encoding="utf-8")

    timestamp = datetime.now().strftime("%Y-%m-%d")
    img_ref = f"![{args.bug_id}]({args.image_path})" if args.image_path else "N/A"
    steps_formatted = _format_steps(args.steps)

    row = (
        f"| {args.bug_id} | {args.screen} | {args.type} | {args.description} | "
        f"{steps_formatted} | {args.severity} | {args.fix} | {img_ref} | {timestamp} |\n"
    )

    with open(log_path, "a", encoding="utf-8") as f:
        f.write(row)
    print(f"Appended bug {args.bug_id} to {args.log_file}")


def main():
    raw_desc = argparse.RawDescriptionHelpFormatter
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=raw_desc)
    sub = parser.add_subparsers(dest="command", required=True)

    # Init
    p_init = sub.add_parser("init", help="Parse markdown checklist into master JSON")
    p_init.add_argument("--checklist", default="GUI_Checklist.md", help="Path to input markdown checklist")
    p_init.add_argument("--out", default="checklist_master.json", help="Path to output master JSON")
    p_init.set_defaults(func=cmd_init)

    # Apply
    p_apply = sub.add_parser("apply", help="Merge diff JSON into full checklist JSON")
    p_apply.add_argument("--checklist", default="checklist_master.json")
    p_apply.add_argument("--diff", required=True)
    p_apply.add_argument("--out", required=True)
    p_apply.set_defaults(func=cmd_apply)

    # Render
    p_render = sub.add_parser("render", help="Render full checklist JSON to Markdown table")
    p_render.add_argument("--results", required=True)
    p_render.add_argument("--out", required=True)
    p_render.set_defaults(func=cmd_render)

    # Append Bug
    p_bug = sub.add_parser("append-bug", help="Append finding to Section 7 Bug Log")
    p_bug.add_argument("--log-file", default="agent_artifacts/bug-channel-submitter/bug_and_usability_findings_log.md")
    p_bug.add_argument("--bug-id", required=True)
    p_bug.add_argument("--screen", required=True)
    p_bug.add_argument("--type", choices=["Bug", "Usability"], required=True)
    p_bug.add_argument("--description", required=True)
    p_bug.add_argument("--steps", required=True)
    p_bug.add_argument("--severity", type=int, choices=range(0, 5), required=True)
    p_bug.add_argument("--fix", default="N/A")
    p_bug.add_argument("--image-path", default="")
    p_bug.set_defaults(func=cmd_append_bug)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()