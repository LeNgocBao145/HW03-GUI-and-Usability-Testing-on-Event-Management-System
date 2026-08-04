---
name: usability-report-generator
description: Generate or update the HW03 Task 2 usability report from confirmed processed sessions for P01-P05, the separate pilot record, SUS data, evidence references, and confirmed findings. Use when Codex must audit study completeness, calculate traceable aggregate usability metrics, synthesize cross-participant observations, distinguish bugs from usability issues, or prepare a final report draft without inventing missing sessions, statistics, findings, severity, or conclusions.
---

# Usability Report Generator

## Objective

Build a traceable draft of `usability_testing/usability_report.md` from confirmed real sessions. Keep the pilot separate, expose incomplete data, and preserve the report's sixteen-section structure.

Use `participant-session-processor` first for each completed participant session.

## Canonical Sources

Read:

- `usability_testing/usability_test_plan.md`
- `usability_testing/task_scenario.md`
- `usability_testing/participant_list.md`
- `usability_testing/participant_recruitment.md`
- `usability_testing/pilot_session.md`
- `usability_testing/pilot/pilot_findings.md`
- `usability_testing/pilot/recommended_revisions.md`
- `usability_testing/participants/P01/`
- `usability_testing/participants/P02/`
- `usability_testing/participants/P03/`
- `usability_testing/participants/P04/`
- `usability_testing/participants/P05/`
- `usability_testing/sus_questionnaire.md`
- `usability_testing/usability_report.md`
- `findings/bug_and_usability_findings_log.md`
- `docs/main_report.md`

Use raw files only to verify traceability. Prefer confirmed processed-session values for aggregation.

## Readiness Gate

1. Verify that one real pilot session exists and is excluded from main metrics.
2. Verify that P01-P05 are five distinct real main participants outside the class.
3. Verify consent and privacy status without exposing private artifacts.
4. Verify that each included session has an allowed task outcome and exact SUT URL.
5. Verify that each metric traces to a real source.
6. Identify placeholders, missing sessions, duplicate participant IDs, and conflicting values.

If fewer than five valid main sessions exist, produce an incomplete draft and readiness report. Do not present the report as final.

## Aggregation Rules

### Participant Set

- Aggregate only P01-P05.
- Never include `PILOT` in participant counts, success rate, timing, behavior counts, or SUS aggregates.
- Exclude invalid sessions from quantitative denominators and state each exclusion.
- Do not replace missing values with zero.

### Task Metrics

- **Success rate:** completed main sessions divided by main sessions with a valid recorded outcome. Treat `Partially Completed`, `Failed`, and `Abandoned` as not completed, and disclose the numerator and denominator.
- **Mean time:** arithmetic mean of valid main-session task times using one stated unit.
- **Median time:** middle valid time after sorting, or the mean of the two middle values for an even count.
- **Behavior totals:** sum only recorded error, hesitation, help-request, intervention, and recovery counts.
- **Behavior means:** divide each total by the number of participants with a recorded value for that metric.
- **Mean SUS:** arithmetic mean of valid complete SUS scores only. Report how many scores were included.

Show the source participant IDs and denominator for every aggregate. Do not calculate a metric when its inputs cannot be reconciled.

### Observation Frequency

- Count frequency by distinct main participants who exhibited the issue, not by repeated mentions in one session.
- Cite participant IDs and evidence references.
- Separate direct observations from participant opinions and analyst interpretation.
- Describe a problem as systemic only when repeated participant evidence supports that conclusion.

## Findings Reconciliation

1. Compare session-level candidate issues with `findings/bug_and_usability_findings_log.md`.
2. Separate functional bugs from usability issues.
3. Preserve confirmed finding IDs and classifications.
4. Do not create confirmed findings from raw observations.
5. Do not assign or change final severity without human approval.
6. For usability severity, use only the 0-4 scale and preserve the non-applicable bug-severity field as blank.
7. Report possible duplicates and cross-screen relationships without merging them automatically.

## Report Workflow

Prepare content for every section in the existing scaffold:

1. Executive Summary
2. Study Objective
3. Scope
4. Task Scenario
5. Methodology
6. Pilot Test
7. Participants
8. Task Metrics
9. SUS Results
10. Key Observations
11. Ranked Usability Findings
12. Bugs vs Usability Issues
13. Prioritised Recommendations
14. Study Limitations
15. Conclusion
16. Evidence Index

Use `TODO` or `Missing` rather than drafting unsupported facts. Recommendations must trace to supported observations or confirmed findings.

## Required Draft Output

Return before editing:

- phase-readiness status
- participant inclusion and exclusion table
- missing-data and conflict report
- metric calculation table with source IDs, numerator or inputs, denominator, and result
- SUS validation and calculation table
- recurring-observation table
- findings reconciliation table
- evidence gaps
- draft report sections
- files proposed for modification

State whether the draft is `Final-ready` or `Incomplete`. Pause and ask for explicit human confirmation before modifying any file.

## Apply Mode

After explicit confirmation:

1. Re-read the report and every approved source.
2. Recalculate all metrics.
3. Apply only the confirmed draft to `usability_testing/usability_report.md`.
4. Update `docs/main_report.md` only when the human explicitly approves that additional file.
5. Preserve unrelated user-authored text and current findings-log classifications.
6. Verify all participant IDs, calculations, evidence paths, headings, and unresolved placeholders.
7. Report updated files and remaining human inputs.

## Safety Rules

- Never fabricate participants, contacts, consent, sessions, timestamps, metrics, SUS responses, quotes, observations, evidence, findings, severity, recommendations, or conclusions.
- Never count the pilot as a main participant.
- Never infer zero from missing data.
- Never treat a placeholder or filename as proof.
- Never expose private participant data or credentials.
- Never claim the current SUT is operational unless a human tester verified it.
- Never modify files before human confirmation.

## Example Invocation

`Run usability-report-generator using the confirmed P01-P05 processed sessions and pilot artifacts. Prepare a traceable report draft, list missing inputs, and pause before applying changes.`
