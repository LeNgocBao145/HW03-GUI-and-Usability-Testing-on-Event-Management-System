#!/usr/bin/env python3
"""
bug_log_appender.py — standalone, dependency-free appender for
bug_and_usability_findings_log.md.

Deliberately has ZERO imports from table_diff.py or any skill's own scripts.
The contract with callers is just: "give me a JSON record with these fields,
I'll append one row." Any skill (gui-checklist-executor, cross-platform-verifier,
a future usability-report-analyzer, ...) can call this via subprocess without
depending on the other skill's internals — that's what keeps this reusable
without coupling them together.

Record schema (finding.json):
{
  "scenario": "A",                     // scenario or screen/row identifier
  "screen": "ScreenA1",                // or a matrix row ID like "C4"
  "type": "Bug",                       // "Bug" | "Usability" — never guessed, always confirmed by the user
  "description": "...",
  "steps_or_heuristic": "...",
  "severity": 2,                       // 0-4
  "suggested_fix": "...",
  "screenshot_ref": "failed_gui_checklist_screenshots/ScreenA1_1.01.png",
  "form_timestamp": ""                 // filled in by hand after submitting the §7 form; leave blank until then
}

Usage:
  python bug_log_appender.py --log bug_and_usability_findings_log.md --record finding.json
"""
import argparse
import json
import re
from pathlib import Path

HEADER = ("| ID | Scenario/Screen | Type | Description | Steps/Heuristic | "
          "Severity | Suggested Fix | Screenshot Ref | Form Submission Timestamp |")
SEPARATOR = "| --- | --- | --- | --- | --- | --- | --- | --- | --- |"


def next_id(log_text: str) -> str:
    ids = re.findall(r"\|\s*BUG-(\d+)\s*\|", log_text)
    n = max((int(i) for i in ids), default=0) + 1
    return f"BUG-{n:03d}"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--log", required=True, help="bug_and_usability_findings_log.md (created if missing)")
    ap.add_argument("--record", required=True, help="path to a finding.json following the schema above")
    args = ap.parse_args()

    record = json.loads(Path(args.record).read_text(encoding="utf-8"))
    required = ["scenario", "screen", "type", "description", "steps_or_heuristic", "severity",
                "suggested_fix", "screenshot_ref"]
    missing = [k for k in required if k not in record]
    if missing:
        raise SystemExit(f"finding.json is missing required field(s): {missing}")
    if record["type"] not in ("Bug", "Usability"):
        raise SystemExit(f"'type' must be exactly 'Bug' or 'Usability', got {record['type']!r} — "
                          f"don't guess this, ask the user.")

    log_path = Path(args.log)
    if log_path.exists():
        text = log_path.read_text(encoding="utf-8")
        if HEADER not in text:
            text += f"\n\n{HEADER}\n{SEPARATOR}\n"
    else:
        text = f"# Bug & Usability Findings Log\n\n{HEADER}\n{SEPARATOR}\n"

    row_id = next_id(text)
    row = (f"| {row_id} | {record['scenario']}/{record['screen']} | {record['type']} | "
           f"{record['description']} | {record['steps_or_heuristic']} | {record['severity']} | "
           f"{record['suggested_fix']} | ![]({record['screenshot_ref']}) | "
           f"{record.get('form_timestamp', '')} |\n")

    log_path.write_text(text.rstrip("\n") + "\n" + row, encoding="utf-8")
    print(f"Appended {row_id} -> {args.log}")


if __name__ == "__main__":
    main()
