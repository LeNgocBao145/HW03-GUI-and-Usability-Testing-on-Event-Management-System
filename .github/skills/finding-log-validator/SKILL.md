# finding-log-validator

## Purpose

Validate bug and usability findings before submission and compare them against Google Form logging.

## When to use

- When reviewing the findings log for completeness and consistency
- When checking whether findings were also logged in the Google Form tracking file
- When preparing final QA before submission

## When not to use

- When findings have not yet been collected
- When screenshot references are absent
- When someone expects missing findings to be auto-created

## Required inputs

- `bug_and_usability_findings_log.md`
- `google_form_submission_log.md`
- screenshot references
- related report sections

## Source files

- `findings/bug_and_usability_findings_log.md`
- `findings/google_form_submission_log.md`
- `findings/bug_report_template.md`
- `findings/usability_finding_template.md`
- `usability_testing/usability_report.md`
- `scenario_b/*/checklist_execution.md`

## Step-by-step workflow

1. Verify that every finding ID is unique.
2. Verify that `Type` is either:
   - `Bug`
   - `Usability`
3. For `Bug` findings, validate textual severity:
   - `Critical`
   - `High`
   - `Medium`
   - `Low`
4. For `Usability` findings, validate severity `0-4`.
5. Ensure the non-applicable severity field is blank.
6. Verify required fields:
   - screen
   - description
   - steps or heuristic
   - expected
   - actual
   - suggested fix
   - screenshot reference
7. Verify that screenshot references exist.
8. Match findings against Google Form records.
9. Report findings without submission timestamps.
10. Prepare a manual-review list before any corrections.

## Validation rules

- Do not mix bug severity text with usability severity numbers in the same row.
- Do not accept duplicate IDs.
- Do not infer missing screenshots from filenames alone.
- Do not alter counts by inventing entries.

## Evidence rules

- Findings must be grounded in real observations.
- Screenshot references must resolve to real files or explicit evidence references.
- Placeholder findings logs are incomplete, not valid.

## Prohibited behavior

- Never fabricate bugs or usability findings.
- Never invent Google Form timestamps.
- Never create or alter findings merely to satisfy counts.
- Never correct log entries without human confirmation.

## Expected output

- duplicate IDs
- missing fields
- severity mismatches
- missing screenshots
- findings not found in Google Form log
- Google Form entries not found in findings log

## Human-confirmation checkpoint

Pause before editing any findings or submission-log rows and ask the human reviewer to confirm the proposed corrections.

## Example invocation

Placeholder example:

`Run finding-log-validator on the findings log, Google Form submission log, and referenced screenshot paths TODO.`

## Failure and missing-data handling

- If the findings log is empty, report no validated findings.
- If Google Form metadata is missing, mark reconciliation as incomplete.
- If screenshot refs cannot be resolved, flag the findings for manual review.
