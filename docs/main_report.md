# Cover Information

TODO

# Assignment Information

TODO

# Student and Group Information

TODO

# Scenario B and Screen Selection

Reference [scope_and_screen_selection.md](../scenario_b/scope_and_screen_selection.md).

# B1-B3 End-to-End Flow

`B1 -> B2 -> B3`

# Account and Test Preconditions

- Use the tester's own EMS account.
- Do not share the account across group members.
- Do not commit passwords or credentials.
- Do not use the shared Admin account for B1-B3 user-side testing.
- Current SUT for new test executions: `https://prod-dev.ems-fitus.cloud/`
- All test evidence must record the exact SUT URL used at the time of execution.
- Do not claim the current SUT is operational unless it has been manually verified.

# Task 1A - Shared GUI Checklist

## Checklist Overview

Reference [Shared GUI Checklist](../gui_checklist.md).

## Checklist Design Process

TODO

## Interface Aspect Coverage

TODO

## Reference Sources

Reference the "Reference Sources" section in [gui_checklist.md](../gui_checklist.md).

## AI Prompts

Reference the "AI Prompts Used to Generate and Refine the Checklist" section in [gui_checklist.md](../gui_checklist.md).

## Human Review

TODO

## Human-Added Items and AI Gaps

Reference the corresponding section in [gui_checklist.md](../gui_checklist.md).

# Task 1B - Checklist Execution

## B1 Execution

Reference [scenario_b/b1_home_events_listing/checklist_execution.md](../scenario_b/b1_home_events_listing/checklist_execution.md).

## B2 Execution

Reference [scenario_b/b2_event_detail/checklist_execution.md](../scenario_b/b2_event_detail/checklist_execution.md).

## B3 Execution

Reference [scenario_b/b3_registration_form/checklist_execution.md](../scenario_b/b3_registration_form/checklist_execution.md).

## Failed Evidence

TODO

## Bug Reports

Reference [bug_and_usability_findings_log.md](../findings/bug_and_usability_findings_log.md).

# Task 2 - User Testing

## Test Plan

Reference [usability_test_plan.md](../usability_testing/usability_test_plan.md).

## Pilot Session

Reference [pilot_session.md](../usability_testing/pilot_session.md).

## Participants

Reference [participant_table.md](../usability_testing/participant_table.md).

## Moderated Sessions

The current Task 2 draft contains one pilot summary and two main-session summaries (P01-P02). Consent is confirmed and stored privately for all three people. No screen or audio recordings were captured, and detailed session notes are not retained; behavioural values are therefore summary only / not independently verifiable. The repository retains participant responses and three profile/account screenshots with masked emails indexed in [private_evidence_manifest.md](../usability_testing/private_evidence_manifest.md). Profile screenshots support account/environment traceability only.

## Metrics

Across the P01-P02 summaries, reported strict full task success was 50.0% (1/2); both summaries reach the final status, while P02 records task-directed help. Mean and median summary time were 8:02.5. The summaries contain 3 errors, 8 hesitations, 1 help request, 1 intervention, and 2 recoveries. The aggregate arithmetic is reproducible, but the source events are not independently verifiable. Detailed calculations are in [analysis_calculations.md](../usability_testing/analysis_calculations.md).

## SUS or UEQ-S

Reference [sus_questionnaire.md](../usability_testing/sus_questionnaire.md).

## Usability Findings

Reference [usability_report.md](../usability_testing/usability_report.md).

## Severity Analysis

Four usability-analysis records were human-reviewed at severity 2: weak post-submit acknowledgement (P01-P02 responses), specialised role terminology (P01-P02 responses), absent no-results recovery action (P02 response), and competition between Save Event and Register (P01 response). The acknowledgement and no-results records are cross-method support for existing GUI findings and will not be submitted separately.

## Recommendations

Priorities are to add accessible registration-success feedback, clarify attendee-role names, provide a direct reset action in the empty-results state, and make Register visually primary over Save Event.

# Task 3 - Cross-Browser / Cross-Platform

## Test Plan

Reference [compatibility_test_plan.md](../compatibility_testing/compatibility_test_plan.md).

## Compatibility Matrix

Reference [compatibility_matrix.md](../compatibility_testing/compatibility_matrix.md).

## Environment Log

Reference [environment_log.md](../compatibility_testing/environment_log.md).

## Results for B1

All five environment sessions were executed for B1: 3 Pass, 1 Fail, and 1 state-blocked Not Executed outcome. ENV-02 (Windows 10 / Chrome tablet-sized viewport), ENV-04 (iPhone 14 / Safari), and ENV-05 (Galaxy S20 / Firefox) passed. ENV-03 failed because the Android device rendered the EMS login route blank. ENV-01 ran but was blocked before the SUT loaded.

## Results for B2

All five environment sessions were executed for B2: 3 Pass, 1 Fail, and 1 state-blocked Not Executed outcome. Event Detail layout, controls, navigation, and scrolling passed in ENV-02, ENV-04, and ENV-05. ENV-03 failed when the Android device rendered the login route blank before B2 could be reached, and ENV-01 ran but was blocked before SUT load.

## Results for B3

All five environment sessions were executed for B3: 1 Pass, 1 Fail, and 3 state-blocked Not Executed outcomes. ENV-02 passed the registration-state and cancel-dialog checks. ENV-03 failed when the Android device rendered the login route blank. ENV-04 and ENV-05 rendered the registration area but did not expose an actionable registration state, while ENV-01 ran but was blocked before SUT load.

## Compatibility Findings

`CP-ENV03-FC-001` is a confirmed Low Bug for the blank EMS login screen observed on TestingBot Galaxy S10 / Android 10 / Chrome. It was submitted to Google Forms on 2026-08-04 at 23:01:37 +07:00. Across all 15 rows, the reconciled totals are 7 Pass, 3 Fail, and 5 Not Executed. Edge and Samsung Internet coverage remains missing after environment substitutions; ENV-02 is viewport emulation rather than a physical tablet.

# Bug & Usability Findings Submission

Reference [google_form_submission_log.md](../findings/google_form_submission_log.md).

All 23 unique confirmed findings were submitted through Google Forms on 2026-08-04. The aggregated log contains 12 Bug findings and 11 unique Usability findings. `UT-B3-001` and `UT-B1-001` remain cross-method support records and are not submitted separately because their canonical GUI findings were already submitted.

# Agent Skills

Reference `.github/skills/`.

# Demo Videos

Reference [agent_skill_demo_links.md](../demo_videos/agent_skill_demo_links.md).

# AI Usage Declaration

TODO

# AI Audit Report Appendix

Reference [ai_audit_report.md](./ai_audit_report.md).

# AI Critique Appendix

Reference [ai_critique.md](./ai_critique.md).

# Git Commit Log

Reference [git_commit_log.txt](./git_commit_log.txt).

# Self-Assessment

Reference the self-assessment table in [README.md](../README.md).

# References

Reference [gui_checklist.md](../gui_checklist.md) and the supplied `req/` materials.
