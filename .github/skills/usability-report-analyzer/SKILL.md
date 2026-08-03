---
name: usability-report-analyzer
description: Turn Maze session-export data (PDF/CSV) plus manually-recorded video observations into a Usability Report - computes standard 10-item SUS scores, merges severity-ranked findings (Bug vs Usability), and renders the final report markdown. Use when the user has finished watching their 5 Maze session recordings and has findings to compile, or has a Maze export to parse. Does NOT watch video itself and does NOT design the test scenario or recruit participants - those stay human tasks.
---

# Usability Report Analyzer

**SUS vs UEQ-S**: this skill assumes SUS (10 items, alternating positive/negative
wording, standard formula). If you're actually using UEQ-S (8 items, 4 dimensions),
say so explicitly before running `sus_calculator.py` — it hard-rejects anything
that isn't exactly 10 answers so a mismatched scale never silently produces a
wrong-but-plausible-looking number.

## Step 0 — Extract structured data from the Maze export
The Maze PDF/CSV is *raw form output*, not structured JSON. Read it directly and hand-build `agent_artifacts/usability-report-analyzer/session_data.json`:
```json
{
  "participants": [
    {
      "id": "P1", "name_masked": "P.V.N.D", "contact_masked": "0347***718",
      "role": "student", "task_success": "Completed",
      "time_on_task_seconds": 190, "error_hesitation_count": 2,
      "sus_answers": [4, 2, 4, 2, 3, 2, 4, 2, 3, 3]
    }
  ]
}
```
- Mask contact info yourself if the export didn't already (middle 4 digits/chars).
- `error_hesitation_count` here is a best-effort estimate from open-text answers
  in the export — flag it as an estimate; the authoritative count comes from
  Step 2 (watching the actual video).
- If the PDF is large/many pages, converting it once with `marker`/`MinerU`/
  `markitdown` first can make extraction easier — optional, not required for a
  6-response export like this one.
- Use exactly 5 real participants for the final numbers; a 6th "extra" response
  or a pilot session doesn't count toward Task 2's n=5.

## Step 1 — Compute SUS and task metrics (deterministic)
```
python scripts/sus_calculator.py --session agent_artifacts/usability-report-analyzer/session_data.json --out agent_artifacts/usability-report-analyzer/sus_results.json
```
This never eyeballs the score — it's the textbook 10-item formula, tested
against known inputs. It also warns (doesn't block) if fewer than 5 participants
are present.

## Step 2 — Findings come from YOU watching the videos, not from this skill
Maze doesn't expose recordings to any tool here, and even if a link existed, an
agent can't watch video. After you review each session recording, fill in
`agent_artifacts/usability-report-analyzer/manual_findings.json`:
```json
{
  "findings": [
    {
      "id": "F1",
      "description": "Role dropdown doesn't visibly show the selected value",
      "affected_participants": ["P2", "P4"],
      "severity": 3,
      "type": "Bug",
      "evidence": "Both users clicked the dropdown 2-3 times unsure if it registered",
      "recommendation": "Show the selected role as a filled badge in the trigger",
      "screenshot_ref": "user_testing_evidence/P2_role_dropdown.png"
    }
  ]
}
```
- `severity` 0-4, `type` exactly `"Bug"` or `"Usability"` — decide this yourself
  from what you saw, the skill won't guess it for you.
- Group findings that recur across participants into ONE entry with multiple
  `affected_participants` rather than duplicating — that's what "group similar
  pain points" in the rubric means.
- If you want help turning rough notes into this shape (e.g. you jotted "P2 and
  P4 both confused by role dropdown, ~3 clicks each" in your own words), that
  paraphrasing is something the agent CAN do — just don't let it invent a
  finding you didn't actually observe.

## Step 3 — Human review gate (mandatory)
Before rendering, show the findings list + computed metrics back to the user
and ask for confirmation/correction — same rule as every other skill in this
pipeline.

## Step 4 — Render the report
```
python scripts/generate_usability_report.py --session agent_artifacts/usability-report-analyzer/session_data.json --sus agent_artifacts/usability-report-analyzer/sus_results.json --findings agent_artifacts/usability-report-analyzer/manual_findings.json --scenario agent_artifacts/usability-report-analyzer/scenario.txt --out agent_artifacts/usability-report-analyzer/Usability_Report.md
```
`agent_artifacts/usability-report-analyzer/scenario.txt` is your one/two-sentence goal-oriented task statement (Task 2
§Phase 1 — not step-by-step instructions). The script hard-fails if a finding
is missing a required field or has an invalid severity/type, rather than
rendering an incomplete report silently.

- **IMPORTANT**: Ensure the generated `Usability_Report.md` includes a section detailing the individual **SUS / UEQ-S responses** (including individual item answers, score, and grade for each participant). If `generate_usability_report.py` does not generate this automatically, you MUST append it manually to the markdown file.


## Step 5 — Review, confirm, and log findings

1. The script outputs agent_artifacts/usability-report-analyzer/findings_for_log.json
2. Display findings to the user → ask: "Append these N findings to bug_and_usability_findings_log.md?"
3. If user ACCEPTS:
   - Provide instructions to append via bug_log_appender.py for each finding
   - OR create a helper script that loops through agent_artifacts/usability-report-analyzer/findings_for_log.json and calls 
     bug_log_appender.py for each one
4. If user REJECTS:
   - Stop. Do not append.

## Non-negotiable rules
- Never invent a finding, a participant, or a metric that wasn't actually in
  the data or reported by the user after watching the video.
- Never guess severity or Bug-vs-Usability classification without the user's
  input — this requires judgment from someone who watched the session.
- Never compute SUS from anything other than exactly 10 standard SUS items —
  if the scale looks like UEQ-S, stop and ask.
- Never leave contact info unmasked in the rendered report.
- Never claim 5 participants if fewer than 5 real (non-pilot) sessions exist.

