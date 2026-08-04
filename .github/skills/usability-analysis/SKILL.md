# usability-analysis

## Purpose

Aggregate five real main usability sessions for Scenario B into a proposed update for `usability_report.md`.

## When to use

- When five main participant datasets exist
- When preparing aggregate metrics and recurring findings
- When synthesizing usability evidence into the report

## When not to use

- When fewer than five main sessions are available
- When only the pilot session exists
- When the source sessions are still placeholders
- When someone expects missing values to be treated as zero

## Required inputs

- five real main-session files
- optional pilot-session file
- SUS or UEQ-S data
- observation evidence
- candidate findings

## Source files

- `usability_testing/usability_report.md`
- `usability_testing/pilot_session.md`
- `usability_testing/participants/P01/questionnaire_raw.md`
- `usability_testing/participants/P01/probe_answers.md`
- `usability_testing/participants/P02/questionnaire_raw.md`
- `usability_testing/participants/P02/probe_answers.md`
- `usability_testing/analysis_calculations.md`
- `usability_testing/participant_table.md`
- `usability_testing/sus_questionnaire.md`
- `findings/bug_and_usability_findings_log.md`

## Step-by-step workflow

1. Verify that five main participant sessions exist.
2. Do not count the pilot session as one of the five main participants.
3. Identify missing or incomplete sessions.
4. Calculate:
   - task success rate
   - mean task time
   - median task time
   - total and mean errors
   - total and mean hesitations
   - mean SUS or UEQ-S
5. Do not treat missing values as zero.
6. Group recurring pain points across participants.
7. Cite participant IDs for recurring findings.
8. Separate:
   - isolated functional bugs
   - systemic usability issues
9. Rank usability findings using severity `0-4`.
10. Write justification for each severity proposal.
11. Generate prioritized recommendations.
12. Ask for human review before updating `usability_report.md`.

## Validation rules

- The pilot participant must not inflate the five-user count.
- Mean and median calculations must ignore missing values rather than replacing them.
- Recurring findings must cite actual participant IDs.
- Severity proposals need written justification.

## Evidence rules

- Use only supplied real sessions.
- Treat placeholder files as incomplete.
- Distinguish raw observation from analyst interpretation.
- Do not create findings where evidence does not support them.

## Prohibited behavior

- Never fabricate session data.
- Never fabricate findings or severity values.
- Never claim systemic usability issues without repeated evidence.
- Never update `usability_report.md` without human confirmation.

## Expected output

- data-completeness report
- aggregate metrics
- recurring pain points
- proposed severity rankings
- recommendations
- missing evidence
- human-confirmation request

## Human-confirmation checkpoint

Pause before writing to `usability_report.md` and ask the human reviewer to confirm metrics, findings, and severity justifications.

## Example invocation

Placeholder example:

`Run usability-analysis using the five confirmed main-session files, optional pilot notes, SUS data, and candidate findings TODO.`

## Failure and missing-data handling

- If fewer than five main sessions exist, report incomplete coverage and stop short of final aggregation.
- If values are missing, show the gap explicitly.
- If recurring issues cannot be supported by participant evidence, classify them as unconfirmed.
