# Execution Summary - B3 Registration Form

## Scope

- Screen: B3 - Registration Form
- SUT URL: https://prod-dev.ems-fitus.cloud/events/125
- Execution date: 2026-08-04
- Execution mode: Live Verification
- Authentication: Successful through the existing EMS session; Lecturer registration access was observed
- Navigation: Dashboard to representative active event `125`, stopping at the Registration Form before submission
- Evidence basis: live browser observations, live DOM inspection, interaction notes, and session screenshots

## Applicability Summary

| Area | Applicable | N/A |
|---|---:|---:|
| IA-01 General UI Standards | 13 | 2 |
| IA-02 Forms and Inputs | 3 | 12 |
| IA-03 Navigation and Layout | 5 | 11 |
| IA-04 Feedback and State | 13 | 2 |
| Total | 34 | 27 |

## Result Statistics

| Result | Count |
|---|---:|
| PASS | 26 |
| FAIL | 8 |
| N/A | 27 |
| Not Executed | 0 |
| Total checkpoints | 61 |

All eight B3 candidates were explicitly approved for promotion to the findings log. Type classification and Low/1 severity are recorded there, and all eight were submitted through Google Forms on 2026-08-04.

## Live Verification Summary

- Authentication and Lecturer registration access were verified without exposing credentials.
- Event `125` exposed the complete role-selection form and was used as the representative B3 screen.
- Role selection, deselection, validation guidance, counter updates, disabled state, keyboard behavior, focus state, hover feedback, language switching, responsive layouts, loading state, and direct URL reload were exercised.
- The role counter updated immediately and the Register button enabled only while a role was selected.
- Desktop, tablet, and mobile layouts had no horizontal overflow or observed component overlap.
- Reloading `/events/125` displayed a loading spinner and restored the same form and role.
- Follow-up human authorization permitted registration and cancellation verification.
- A deliberate double-click created one Pending registration and updated the counters only once.
- No success notification appeared after registration.
- The cancellation confirmation dialog appeared before the destructive action and closed with Escape.
- Confirming cancellation restored the original unregistered state, but no Undo action appeared.
- Design System alignment, contrast, capitalization, offline behavior, and real-time update behavior were reconciled through explicit Human Review.
- Evidence screenshots are persisted under `screenshots/ScreenB3/evidences/` and indexed in `test_notes.md`.

## Missing Evidence Report

No applicable B3 checkpoint remains Not Executed, and every referenced evidence file exists. The human reviewer accepted the current screenshot, DOM/interaction, and cross-screen evidence as sufficient; no additional evidence is required for candidate review. The 1.01, 1.03, 1.08, 4.08, and 4.14 conclusions rely on explicit Human Review.

## Finding Candidate Report

### GUI-B3-FC-001 - Countdown Uses Placeholder-Style Plural Grammar

- Checkpoint: 1.07
- Observation: The English countdown displayed `Event starts in 8 day(s)`.
- Evidence: `screenshots/ScreenB3/evidences/ScreenB3_live_02_registration_form_desktop.png` and live DOM observation
- Duplicate status: Confirmed cross-screen duplicate of GUI-B2-FC-001; accepted as the same system problem and retained for B3 traceability
- Status: Submitted to Google Form - Validated Duplicate - Bug Severity Low

### GUI-B3-FC-002 - Accessibility Semantics and Language Metadata Are Incomplete

- Checkpoint: 1.14
- Observation: The document `lang` value lagged behind the displayed locale, the user menu was a focusable `SPAN` without a semantic role, and the role card nested a checkbox within `div[role="button"]`.
- Evidence: `screenshots/ScreenB3/evidences/ScreenB3_live_04_keyboard_focus.png`, `screenshots/ScreenB3/evidences/ScreenB3_live_09_vietnamese.png`, and live DOM observation
- Duplicate status: The shared header and language observations overlap GUI-B1-FC-003 and GUI-B2-FC-002; the B3 role-card semantics remain screen-specific
- Status: Submitted to Google Form - Bug Severity Low

### GUI-B3-FC-003 - Keyboard Focus Does Not Advance Beyond the Role Checkbox

- Checkpoint: 2.12
- Observation: Repeated Tab actions remained on `Select commander` instead of advancing to the next available control.
- Evidence: `screenshots/ScreenB3/evidences/ScreenB3_live_04_keyboard_focus.png` and repeated keyboard observations
- Status: Submitted to Google Form - Bug Severity Low

### GUI-B3-FC-004 - Registration Role Card Lacks Visual Hover Feedback

- Checkpoint: 4.01
- Observation: The role card produced no observed color, border, shadow, opacity, or transform change on hover.
- Evidence: `screenshots/ScreenB3/evidences/ScreenB3_live_05_validation_disabled.png`, `screenshots/ScreenB3/evidences/ScreenB3_live_06_role_card_hover.png`, and live computed-style observation
- Status: Submitted to Google Form - Usability Severity 1

### GUI-B3-FC-005 - Registration Completes Without a Success Notification

- Checkpoint: 4.05
- Observation: Registration reached `Pending review`, but no success toast, alert, status message, or live-region notification appeared.
- Evidence: `screenshots/ScreenB3/evidences/ScreenB3_live_13_registration_pending_after_double_click.png` and live DOM observation
- Status: Submitted to Google Form - Usability Severity 1

### GUI-B3-FC-006 - Offline State Falls Back to the Browser Error Page

- Checkpoint: 4.08
- Observation: Human Review confirmed that B3 displays the browser's generic `ERR_INTERNET_DISCONNECTED` page rather than an EMS-friendly message with Retry.
- Evidence: Human Review reconciled with the B1/B2 offline verification record
- Duplicate status: Confirmed cross-screen duplicate of GUI-B1-FC-008 and GUI-B2-FC-006; accepted as the same system problem and retained for B3 traceability
- Status: Submitted to Google Form - Validated Duplicate - Usability Severity 1

### GUI-B3-FC-007 - Registration Updates Require a Manual Reload

- Checkpoint: 4.14
- Observation: Human Review confirmed that B3 updates require manual reload rather than appearing automatically.
- Evidence: Human Review reconciled with the B1/B2 real-time update verification record
- Cross-screen relationship: Accepted as related to GUI-B1-FC-009 and GUI-B2-FC-007 while retaining B3 registration-state traceability
- Status: Submitted to Google Form - Bug Severity Low

### GUI-B3-FC-008 - Cancellation Provides No Undo Action

- Checkpoint: 4.15
- Observation: Cancellation restored the unregistered form, but no Undo button or link appeared immediately or after the state settled.
- Evidence: `screenshots/ScreenB3/evidences/ScreenB3_live_17_cancellation_processing.png`, `screenshots/ScreenB3/evidences/ScreenB3_live_18_cancellation_completed_no_undo.png`, and live DOM observation
- Status: Submitted to Google Form - Usability Severity 1

## Candidate Review Decision Summary

| Decision | Count | Candidates |
|---|---:|---|
| Valid Candidate | 6 | GUI-B3-FC-002, GUI-B3-FC-003, GUI-B3-FC-004, GUI-B3-FC-005, GUI-B3-FC-007, GUI-B3-FC-008 |
| Validated Duplicate | 2 | GUI-B3-FC-001, GUI-B3-FC-006 |
| Needs More Evidence | 0 | None |
| Rejected | 0 | None |

Duplicate relationships were explicitly accepted because they describe the same system-level problems across screens. A subsequent Human Review decision promoted all eight B3 IDs while retaining duplicate traceability.

## Promotion Outcome

| Type | Count | Severity | Candidates |
|---|---:|---|---|
| Bug | 4 | Low | GUI-B3-FC-001, GUI-B3-FC-002, GUI-B3-FC-003, GUI-B3-FC-007 |
| Usability | 4 | 1 | GUI-B3-FC-004, GUI-B3-FC-005, GUI-B3-FC-006, GUI-B3-FC-008 |

- Promotion status: All eight B3 IDs are present in `findings/bug_and_usability_findings_log.md`.
- Duplicate handling: GUI-B3-FC-001 and GUI-B3-FC-006 remain separate B3 traceability rows linked to the same system-level problems recorded for B1/B2.
- Severity: All Bug findings are Low; all Usability findings are 1, as explicitly confirmed by Human Review.
- Google Form: All eight B3 findings submitted on 2026-08-04; timestamps and reconciliation metadata are recorded in `findings/bug_and_usability_findings_log.md` and `findings/google_form_submission_log.md`.

## Verification Completion

All 34 applicable B3 checkpoints now have a PASS or FAIL result. No applicable checkpoint remains Not Executed. Candidate Review, promotion, classification, severity assignment, and Google Form reconciliation are complete for all eight B3 IDs. The authorized registration was cancelled after verification, restoring the initial unregistered state.
