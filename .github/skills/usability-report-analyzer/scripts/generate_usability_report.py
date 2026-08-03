#!/usr/bin/env python3
"""
generate_usability_report.py — assembles the Task 2 Usability Report from three
JSON inputs. This script only formats; it never invents a metric or a finding —
if a required input is missing a field, it errors out rather than guessing.

Inputs:
  --session   session_data.json   (from sus_calculator.py's input — participants + task metrics)
  --sus       sus_results.json    (from sus_calculator.py's output)
  --findings  manual_findings.json (YOU fill this after watching the Maze session videos)
  --scenario  a text file with the one/two-sentence goal-oriented task scenario

manual_findings.json:
{
  "findings": [
    {
      "id": "F1",
      "description": "Role dropdown doesn't visibly show the selected value after picking",
      "affected_participants": ["P2", "P4"],
      "severity": 3,
      "type": "Bug",                 // "Bug" | "Usability" — you decide, watching the video
      "evidence": "Both users clicked the dropdown 2-3 times unsure if the selection registered",
      "recommendation": "Show the selected role as a filled badge inside the trigger, not just in the open list",
      "screenshot_ref": "user_testing_evidence/P2_role_dropdown.png"
    }
  ]
}

Usage:
  python generate_usability_report.py --session session_data.json --sus sus_results.json --findings manual_findings.json --scenario scenario.txt --out Usability_Report.md
"""
import argparse
import json
from pathlib import Path

REQUIRED_FINDING_FIELDS = ["id", "description", "affected_participants", "severity", "type",
                            "evidence", "recommendation", "screenshot_ref"]


def render_participant_table(participants: list) -> str:
    lines = ["| ID | Name | Role | Contact | Task Success | Time on Task (s) | Errors/Hesitations |",
             "| --- | --- | --- | --- | --- | --- | --- |"]
    for p in participants:
        lines.append(f"| {p['id']} | {p['name_masked']} | {p['role']} | {p['contact_masked']} | "
                      f"{p['task_success']} | {p['time_on_task_seconds']} | {p['error_hesitation_count']} |")
    return "\n".join(lines)


def render_metrics_table(sus: dict) -> str:
    return (
        "| Metric | Value |\n"
        "| --- | --- |\n"
        f"| Task success rate | {sus['task_success_rate']}% |\n"
        f"| Mean time on task | {sus['mean_time_on_task_seconds']} s |\n"
        f"| Mean errors/hesitations | {sus['mean_error_hesitation_count']} |\n"
        f"| Mean SUS score | {sus['mean_sus']} ({sus['mean_grade']}) |\n"
    )


def render_findings(findings: list) -> str:
    for f in findings:
        missing = [k for k in REQUIRED_FINDING_FIELDS if k not in f]
        if missing:
            raise SystemExit(f"Finding {f.get('id', '?')} is missing required field(s) {missing} — "
                              f"fill these in from the video before generating the report.")
        if f["type"] not in ("Bug", "Usability"):
            raise SystemExit(f"Finding {f['id']}: type must be 'Bug' or 'Usability', got {f['type']!r}.")
        if not (0 <= f["severity"] <= 4):
            raise SystemExit(f"Finding {f['id']}: severity must be 0-4, got {f['severity']}.")

    ranked = sorted(findings, key=lambda f: f["severity"], reverse=True)
    blocks = []
    for f in ranked:
        affected = ", ".join(f["affected_participants"])
        blocks.append(
            f"### {f['id']} — {f['description']} (Severity {f['severity']}, {f['type']})\n\n"
            f"**Affected participants:** {affected}\n\n"
            f"**Evidence:** {f['evidence']}\n\n"
            f"**Recommendation:** {f['recommendation']}\n\n"
            f"![]({f['screenshot_ref']})\n"
        )
    return "\n".join(blocks)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--session", required=True)
    ap.add_argument("--sus", required=True)
    ap.add_argument("--findings", required=True)
    ap.add_argument("--scenario", required=True, help="text file with the scenario statement")
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    session = json.loads(Path(args.session).read_text(encoding="utf-8"))
    sus = json.loads(Path(args.sus).read_text(encoding="utf-8"))
    findings_data = json.loads(Path(args.findings).read_text(encoding="utf-8"))
    scenario_text = Path(args.scenario).read_text(encoding="utf-8").strip()

    participants = session["participants"]
    if len(participants) < 5:
        print(f"WARNING: report is being generated with only {len(participants)} participant(s); "
              f"Task 2 requires 5.")

    findings = findings_data.get("findings", [])
    recs_ordered = sorted(findings, key=lambda f: f["severity"], reverse=True)

    report = f"""# Usability Report

## Scenario
{scenario_text}

## Participants (n={len(participants)})
{render_participant_table(participants)}

## Metrics
{render_metrics_table(sus)}

## Findings (ranked by severity)
{render_findings(findings)}

## Prioritised Recommendations
{chr(10).join(f"{i+1}. **[{f['id']}, Sev {f['severity']}]** {f['recommendation']}" for i, f in enumerate(recs_ordered))}
"""

    Path(args.out).write_text(report, encoding="utf-8")
    print(f"Usability Report written -> {args.out} ({len(findings)} findings, mean SUS {sus['mean_sus']})")


if __name__ == "__main__":
    main()
