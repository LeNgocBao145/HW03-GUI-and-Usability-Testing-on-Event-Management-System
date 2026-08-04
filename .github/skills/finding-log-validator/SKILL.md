# finding-log-validator

## Purpose

Validate finding candidates, confirmed bugs, and usability findings throughout the HW03 workflow without fabricating evidence or prematurely promoting observations into final findings.

The skill supports two execution modes:

1. Candidate Review Mode
2. Submission Reconciliation Mode

---

## Supported Modes

### Mode 1 — Candidate Review

Use immediately after GUI checklist execution.

This mode validates Finding Candidates produced from:

- failed GUI checkpoints
- tester observations
- checklist execution notes
- supporting screenshots

This mode determines whether a candidate is:

- Valid Candidate
- Needs More Evidence
- Rejected
- Duplicate

This mode does not require:

- Google Form submission
- final severity
- final Bug or Usability classification

### Mode 2 — Submission Reconciliation

Use after findings have been confirmed and entered into the aggregated findings log.

This mode validates:

- finding completeness
- finding type
- severity format
- screenshot references
- Google Form reconciliation
- consistency with reports

---

## When to Use

Use Candidate Review Mode when:

- `gui-checklist-execution` has produced Finding Candidates
- one or more checklist items are marked Failed
- candidate evidence exists
- the tester wants to decide whether a candidate should proceed to the findings log

Use Submission Reconciliation Mode when:

- findings already exist in `bug_and_usability_findings_log.md`
- findings have been classified
- Google Form submissions are being checked
- final QA is being performed before submission

---

## When Not to Use

Do not use this skill when:

- no candidate or confirmed finding exists
- there are no real observations
- evidence is entirely missing
- someone expects the skill to invent findings
- someone expects the skill to fabricate Google Form submissions
- someone expects automatic severity decisions without human review

---

## Required Inputs

### Candidate Review Mode

Required:

- selected screen ID
- selected Finding Candidate ID
- related checklist checkpoint
- real observation
- existing evidence reference
- tester notes
- screen-level checklist execution
- screen-level execution summary

Optional:

- reproduction notes
- browser console observations
- additional screenshots
- screenshot evidence

### Submission Reconciliation Mode

Required:

- `findings/bug_and_usability_findings_log.md`
- `findings/google_form_submission_log.md`
- screenshot references
- related report sections

Optional:

- bug report template
- usability finding template
- usability report
- checklist execution files

---

## Source Files

### Candidate Sources

- `scenario_b/b1_home_events_listing/checklist_execution.md`
- `scenario_b/b1_home_events_listing/test_notes.md`
- `scenario_b/b1_home_events_listing/execution_summary.md`
- `scenario_b/b2_event_detail/checklist_execution.md`
- `scenario_b/b2_event_detail/test_notes.md`
- `scenario_b/b2_event_detail/execution_summary.md`
- `scenario_b/b3_registration_form/checklist_execution.md`
- `scenario_b/b3_registration_form/test_notes.md`
- `scenario_b/b3_registration_form/execution_summary.md`
- `screenshots/ScreenB1/`
- `screenshots/ScreenB1/evidences/`
- `screenshots/ScreenB2/evidences/`
- `screenshots/ScreenB3/`
- `gui_checklist.md`
- `docs/checklist_coverage_matrix.md`

### Submission Sources

- `findings/bug_and_usability_findings_log.md`
- `findings/google_form_submission_log.md`
- `findings/bug_report_template.md`
- `findings/usability_finding_template.md`
- `usability_testing/usability_report.md`
- `scenario_b/*/checklist_execution.md`

---

# Mode 1 Workflow — Candidate Review

## Phase 1 — Candidate Discovery

1. Read the selected screen's:
   - `checklist_execution.md`
   - `test_notes.md`
   - `execution_summary.md`
2. Identify every Finding Candidate.
3. Verify that the candidate has:
   - a unique candidate ID
   - a related checkpoint
   - a concrete observation
   - an evidence reference

Do not create missing candidates automatically.

---

## Phase 2 — Checkpoint Mapping

For each candidate:

1. Verify that the referenced GUI checkpoint exists in `gui_checklist.md`.
2. Verify that the checkpoint applies to the selected screen according to:
   - `docs/checklist_coverage_matrix.md`
   - the screen description
3. Determine whether the candidate accurately represents the failed checkpoint.
4. Flag incorrect or overly broad checkpoint mappings.

---

## Phase 3 — Evidence Validation

For each candidate verify:

- the referenced file exists
- the evidence depicts the claimed state
- the screenshot is relevant to the candidate
- the tester notes match the evidence
- the observation is direct rather than speculative

Do not infer evidence from filenames alone.

If evidence is insufficient, assign:

`Needs More Evidence`

Do not mark the candidate as Valid.

---

## Phase 4 — Reproducibility Review

Determine whether the candidate includes enough information to reproduce or reobserve the issue.

Check for:

- starting screen or precondition
- relevant user action
- observed result
- affected component
- environment
- SUT URL

Allowed reproducibility status:

- Reproducible
- Partially Reproducible
- Not Reproducible
- Not Yet Re-tested

Do not claim reproducibility unless the available records support it.

---

## Phase 5 — Duplicate Review

Compare candidates using:

- same checkpoint
- same screen
- same observed issue
- same root symptom
- same evidence

Decisions:

- Unique
- Possible Duplicate
- Confirmed Duplicate

Do not merge or delete candidates without human confirmation.

---

## Phase 6 — Candidate Decision

Assign exactly one decision:

### Valid Candidate

Use when:

- the observation is concrete
- the checkpoint mapping is correct
- evidence exists and supports the observation
- the conclusion does not exceed the evidence

### Needs More Evidence

Use when:

- an observation exists
- the issue may be valid
- evidence is missing, weak, or incomplete

### Rejected

Use when:

- the evidence contradicts the claim
- the candidate is based only on speculation
- the candidate does not represent a failed checkpoint
- the claimed issue is expected behavior
- the candidate cannot be supported

### Duplicate

Use when:

- another candidate already captures the same issue

Candidate Review Mode must not assign final severity unless explicitly requested and confirmed by the human reviewer.

---

## Mode 1 Expected Output

For every candidate, produce:

| Candidate ID | Screen | Checkpoint | Observation | Evidence Status | Mapping Status | Reproducibility | Duplicate Status | Decision | Required Action |
|---|---|---|---|---|---|---|---|---|---|

Also produce:

- Total Candidate Count
- Valid Candidate Count
- Needs More Evidence Count
- Rejected Candidate Count
- Duplicate Candidate Count
- Missing Evidence Report
- Mapping Issues
- Manual Review List

Do not modify findings logs before human confirmation.

---

# Mode 2 Workflow — Submission Reconciliation

## Phase 1 — ID Validation

1. Verify every finding ID is present.
2. Verify every finding ID is unique.
3. Verify naming consistency across:
   - findings log
   - Google Form log
   - report
   - evidence references

---

## Phase 2 — Type Validation

Verify that `Type` is exactly one of:

- Bug
- Usability

Do not infer a type when the row is incomplete.

Flag unclassified findings for manual review.

---

## Phase 3 — Severity Validation

For Bug findings, allow:

- Critical
- High
- Medium
- Low

For Usability findings, allow:

- 0
- 1
- 2
- 3
- 4

Rules:

- Do not mix bug severity text and usability severity numbers.
- The non-applicable severity field must be blank.
- Do not invent severity values.
- Severity must be human-reviewed.

---

## Phase 4 — Required Field Validation

Verify:

- ID
- Scenario / Screen
- Type
- Description
- Steps / Heuristic
- Expected
- Actual
- Relevant severity
- Suggested Fix
- Screenshot Ref
- Status

Google Form timestamp may remain missing until submission occurs.

---

## Phase 5 — Evidence Validation

Verify that:

- screenshot references resolve
- the evidence supports the finding
- evidence belongs to the correct screen
- references are not placeholder values
- a finding is not considered valid solely because a filename is listed

---

## Phase 6 — Google Form Reconciliation

Compare:

- `bug_and_usability_findings_log.md`
- `google_form_submission_log.md`

Report:

- findings missing from Google Form log
- Google Form entries missing from findings log
- mismatched IDs
- missing timestamps
- inconsistent student email
- duplicate form records

Do not invent form metadata.

---

## Phase 7 — Report Consistency

Verify that confirmed findings appearing in:

- `usability_report.md`
- `main_report.md`
- checklist execution files

are consistent with the aggregated findings log.

Report discrepancies only.

Do not rewrite reports automatically.

---

## Mode 2 Expected Output

- Duplicate IDs
- Missing fields
- Type mismatches
- Severity mismatches
- Missing screenshots
- Invalid evidence references
- Findings absent from Google Form log
- Google Form entries absent from findings log
- Report inconsistencies
- Manual Review List
- Proposed corrections

---

## Validation Rules

- Never accept duplicate IDs.
- Never fabricate observations.
- Never fabricate evidence.
- Never fabricate bugs or usability findings.
- Never infer missing screenshots from filenames.
- Never promote a candidate into a confirmed finding without human confirmation.
- Never invent Google Form timestamps.
- Never modify counts to satisfy assignment requirements.
- Never silently correct user-authored content.

---

## Evidence Rules

- Every confirmed finding must be grounded in a real observation.
- Evidence references must resolve to real files or explicit evidence locations.
- Screenshot content must support the claimed issue.
- Placeholder evidence is incomplete evidence.
- Evidence and notes must record the exact SUT URL used where applicable.
- Absence of a reported issue is not proof that a checkpoint passed.

---

## Prohibited Behavior

- Do not create missing findings.
- Do not create fake reproduction steps.
- Do not create fake severity values.
- Do not fabricate screenshots.
- Do not fabricate form records.
- Do not alter findings merely to satisfy grading counts.
- Do not edit any file before human confirmation.
- Do not automatically delete duplicate candidates.

---

## Human-Confirmation Checkpoint

Before editing any file, present:

- files proposed for modification
- candidate decisions
- confirmed finding corrections
- missing evidence
- Google Form mismatches
- duplicate candidates or findings

Ask the human reviewer to approve the proposed changes.

---

## Example Invocation — Candidate Review

`Run finding-log-validator in Candidate Review Mode for B1 using the current checklist execution, tester notes, execution summary, failed evidence, and ScreenB1 screenshots. Produce draft validation results only.`

---

## Example Invocation — Submission Reconciliation

`Run finding-log-validator in Submission Reconciliation Mode using the findings log, Google Form submission log, report files, and screenshot references. Produce draft corrections only.`

---

## Failure and Missing-Data Handling

### Empty Candidate Set

Return:

- Total Candidates: 0
- No candidates validated
- No files modified

### Missing Evidence

Assign:

`Needs More Evidence`

Do not reject automatically unless the claim is unsupported.

### Missing Checklist Item

Stop validation for that candidate and report an invalid checkpoint reference.

### Missing Findings Log

Candidate Review Mode may continue.

Submission Reconciliation Mode must stop.

### Missing Google Form Log

Continue structural finding validation but mark reconciliation as incomplete.

### Invalid Screenshot Reference

Flag for manual review.

Do not infer file existence.

### Conflicting Information

Report the conflict.

Do not silently select one source as correct.
