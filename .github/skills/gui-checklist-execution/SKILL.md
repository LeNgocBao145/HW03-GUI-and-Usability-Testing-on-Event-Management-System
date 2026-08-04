# gui-checklist-execution

## Purpose

Execute the approved shared GUI checklist against exactly one selected EMS screen in Scenario B using real observations only.

The skill coordinates checklist execution, evidence tracking, tester notes, execution summaries, and finding candidates while ensuring that no GUI test result is fabricated.

---

# Responsibilities

This skill is responsible for:

- determining which checklist items apply to the selected screen
- guiding GUI checklist execution
- preparing updates for screen-level execution documents
- tracking missing evidence
- identifying potential findings
- maintaining execution summaries

This skill is NOT responsible for:

- deciding final bug severity
- generating bug reports
- modifying the shared GUI checklist
- inventing observations
- inventing screenshots
- inventing Pass/Fail results

---

# When to use

Use this skill when executing GUI checklist testing for exactly one screen.

Supported screens:

- B1 Home Events Listing
- B2 Event Detail
- B3 Registration Form

Typical workflow:

Screen Description

↓

GUI Checklist Coverage Matrix

↓

GUI Checklist Execution

↓

Human Observation

↓

Execution Documents

↓

Finding Validation

---

# When NOT to use

Do not use this skill when:

- creating or editing gui_checklist.md
- updating checklist_coverage_matrix.md
- performing usability analysis
- validating compatibility testing
- creating final bug reports
- multiple screens are requested simultaneously

---

# Required Inputs

The following inputs are required.

## Mandatory

- selected screen ID

One of:

- B1
- B2
- B3

- gui_checklist.md

- docs/checklist_coverage_matrix.md

- screen_description.md of the selected screen

- tester observations

- tester notes

- exact SUT URL

## Optional

- screenshot references

- screenshot evidence

- browser version

- operating system

- device information

---

# Source Files

Shared

- gui_checklist.md
- docs/checklist_coverage_matrix.md

B1

- scenario_b/b1_home_events_listing/screen_description.md
- scenario_b/b1_home_events_listing/checklist_execution.md
- scenario_b/b1_home_events_listing/test_notes.md
- scenario_b/b1_home_events_listing/execution_summary.md

B2

- scenario_b/b2_event_detail/screen_description.md
- scenario_b/b2_event_detail/checklist_execution.md
- scenario_b/b2_event_detail/test_notes.md
- scenario_b/b2_event_detail/execution_summary.md
- screenshots/ScreenB2/evidences/

B3

- scenario_b/b3_registration_form/screen_description.md
- scenario_b/b3_registration_form/checklist_execution.md
- scenario_b/b3_registration_form/test_notes.md
- scenario_b/b3_registration_form/execution_summary.md

---

# Execution Workflow

## Phase 1

Preparation

1. Verify selected screen.
2. Verify required files exist.
3. Load GUI checklist.
4. Load coverage matrix.
5. Load screen description.

---

## Phase 2

Applicability Analysis

For every GUI checkpoint:

Determine:

- Applicable
- N/A

Never invent applicability.

Use only:

- coverage matrix
- screen description

---

## Phase 3

Execution

For every applicable checkpoint:

Review:

- tester observation
- screenshot
- notes

Then propose exactly one result.

Allowed values:

- Passed
- Failed
- Not Executed

Never infer Passed because no issue was mentioned.

---

## Phase 4

Evidence Validation

For every Failed item verify:

- screenshot reference
- observation
- tester note

If evidence is incomplete

↓

mark

Missing Evidence

instead of confirming Failure.

---

## Phase 5

Finding Candidate Detection

Every confirmed Failed item becomes

Finding Candidate

Include:

- checkpoint
- description
- evidence
- suggested finding ID

Do NOT classify as bug.

---

## Phase 6

Execution Summary

Generate statistics.

Example

Applicable

31

Passed

27

Failed

3

Not Executed

1

N/A

14

Finding Candidates

GUI-001

GUI-002

---

# Validation Rules

Never

- invent observations
- invent screenshots
- invent URLs
- invent Pass
- invent Fail

Passed requires

real observation.

Failed requires

real observation
+
evidence.

N/A requires

coverage matrix supports it.

Not Executed requires

missing execution
or
missing evidence.

---

# Output Files

## 1

Draft

checklist_execution.md

Update only applicable rows.

---

## 2

Draft

test_notes.md

Append:

- observations
- unresolved questions
- evidence references

---

## 3

Draft

execution_summary.md

Include

- statistics
- finding candidates
- missing evidence
- deferred verification

---

## 4

Missing Evidence Report

List

checkpoint

↓

missing evidence

↓

recommended action

---

## 5

Finding Candidate Report

List

checkpoint

↓

description

↓

evidence

↓

suggested finding ID

---

# Human Confirmation

Pause.

Display:

Files to update

Example

- checklist_execution.md
- test_notes.md
- execution_summary.md

Ask

Do you want to apply these updates?

Never update files before confirmation.

---

# Expected Output

Return

1.

Applicability Summary

2.

Draft checklist_execution.md

3.

Draft test_notes.md

4.

Draft execution_summary.md

5.

Missing Evidence Report

6.

Finding Candidate Report

7.

Human Confirmation Request

---

# Failure Handling

Invalid Screen

↓

Request B1/B2/B3

Missing Checklist

↓

Stop

Missing Coverage Matrix

↓

Stop

Missing Screen Description

↓

Stop

Missing Observation

↓

Return

Not Executed

Missing Screenshot

↓

Return

Missing Evidence

Never convert it into Failed.

---

# Example Invocation

Run gui-checklist-execution

Screen:

B1

Inputs:

- gui_checklist.md
- checklist_coverage_matrix.md
- screen_description.md
- tester observations
- tester notes
- screenshot references
- SUT URL

Prepare draft updates only.

Wait for confirmation before modifying any file.
