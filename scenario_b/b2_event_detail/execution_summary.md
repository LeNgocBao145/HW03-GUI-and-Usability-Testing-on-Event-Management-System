# Execution Summary - B2 Event Detail

## Scope

- Screen: B2 - Event Detail
- SUT URL: https://prod-dev.ems-fitus.cloud/events/104
- Execution date: 2026-08-03
- Execution mode: Live Verification
- Authentication: Successful; authenticated account matched the supplied test account and displayed the Lecturer role
- Evidence basis: live browser observations, live DOM inspection, and session screenshots

## Applicability Summary

| Area | Applicable | N/A |
|---|---:|---:|
| IA-01 General UI Standards | 14 | 1 |
| IA-02 Forms and Inputs | 1 | 14 |
| IA-03 Navigation and Layout | 7 | 9 |
| IA-04 Feedback and State | 6 | 9 |
| Total | 28 | 33 |

## Result Statistics

| Result | Count |
|---|---:|
| PASS | 21 |
| FAIL | 7 |
| N/A | 33 |
| Not Executed | 0 |
| Total checkpoints | 61 |

The seven FAIL rows received explicit human approval for promotion to the findings log. Type and severity remain pending human review.

## Live Verification Summary

- Authentication and the active Lecturer test account were verified without recording credentials.
- A representative Upcoming event was opened at `/events/104` and exposed the standard B2 Event Detail components.
- Event content, responsive layouts, language switching, keyboard behavior, hover states, scrolling, external-link configuration, and direct reload were exercised.
- Desktop, tablet, and mobile layouts had no horizontal document overflow.
- A direct reload preserved event `104`, its page title, and its event heading.
- The previously deferred design, contrast, capitalization, browser-navigation, loading, offline, and real-time-update checks were re-verified by the tester.
- A loading spinner was captured while Event Detail content was pending.
- Offline behavior was re-executed using Chrome DevTools Offline mode.
- A reliable real-time update could not be triggered during candidate re-execution; the human reviewer explicitly approved GUI-B2-FC-007 for promotion without additional evidence.
- No applicable B2 checkpoint remains Not Executed.
- Live evidence screenshots are persisted under `screenshots/ScreenB2/evidences/` and indexed in `test_notes.md`.

## Missing Evidence Report

No referenced screenshot file is missing. Interaction-dependent results for browser navigation, offline behavior, and real-time refresh behavior additionally rely on the tester observations recorded in `test_notes.md`.

## Promoted Findings Report

### GUI-B2-FC-001 - Countdown Text Uses Placeholder-Style Plural Grammar

- Checkpoint: 1.07
- Observation: English countdowns display `Event starts in 12 day(s)` and `Registration opens in 6 day(s)`.
- Evidence: `screenshots/ScreenB2/evidences/ScreenB2_live_02_full_page.png` and `screenshots/ScreenB2/evidences/ScreenB2_live_03_tablet_768x1024.png`
- Promotion status: Promoted to findings log - Pending Type and Severity Review

### GUI-B2-FC-002 - Accessibility Semantics Are Incomplete

- Checkpoint: 1.14
- Observation: The user menu is a focusable `SPAN` without a semantic role, and the document language remains `en` in Vietnamese mode.
- Evidence: `screenshots/ScreenB2/evidences/ScreenB2_live_05_vietnamese.png`, `screenshots/ScreenB2/evidences/ScreenB2_live_08_keyboard_focus.png`, and live DOM observation
- Promotion status: Promoted to findings log - Pending Type and Severity Review

### GUI-B2-FC-003 - Keyboard Focus Does Not Advance Beyond the Language Switcher

- Checkpoint: 2.12
- Observation: Repeated Tab and Shift+Tab actions remain on the language switcher despite additional focusable controls being present.
- Evidence: `screenshots/ScreenB2/evidences/ScreenB2_live_08_keyboard_focus.png`, keyboard notes, and completed human re-execution
- Validation status: Valid Candidate after human review
- Promotion status: Promoted to findings log - Pending Type and Severity Review

### GUI-B2-FC-004 - User Guide Link Lacks Visual Hover Feedback

- Checkpoint: 3.07
- Observation: User Guide points to `/manual`, but its color and underline do not change on hover.
- Evidence: `screenshots/ScreenB2/evidences/ScreenB2_live_10_link_hover_baseline.png`, `screenshots/ScreenB2/evidences/ScreenB2_live_11_link_hover_user_guide.png`, and live computed-style observation
- Duplicate decision: Keep separate from GUI-B2-FC-005 because it covers hyperlink feedback in the event navigation/content context.
- Promotion status: Promoted to findings log - Pending Type and Severity Review

### GUI-B2-FC-005 - Tested Buttons Lack Visual Hover Feedback

- Checkpoint: 4.01
- Observation: Save Event and Back to Events show no observed color, border, shadow, opacity, or transform change on hover.
- Evidence: `screenshots/ScreenB2/evidences/ScreenB2_live_06_hover_baseline.png`, `screenshots/ScreenB2/evidences/ScreenB2_live_07_hover_save_event.png`, and live computed-style observation
- Duplicate decision: Keep separate from GUI-B2-FC-004 because it covers button controls and different user interactions.
- Promotion status: Promoted to findings log - Pending Type and Severity Review

### GUI-B2-FC-006 - Offline State Falls Back to the Browser Error Page

- Checkpoint: 4.08
- Observation: Offline simulation displayed the browser's generic `ERR_INTERNET_DISCONNECTED` page rather than an EMS-friendly message with a Retry option.
- Evidence: Chrome DevTools Offline-mode re-execution recorded in `test_notes.md`
- Validation status: Valid Candidate after human review
- Promotion status: Promoted to findings log - Pending Type and Severity Review

### GUI-B2-FC-007 - Event Updates Require a Manual Reload

- Checkpoint: 4.14
- Observation: The tester previously observed updates only after a manual reload, but no reliable real-time update could be triggered during re-execution.
- Evidence: tester observation recorded in `test_notes.md`; controlled update evidence is pending
- Validation status: Promoted by explicit human approval without additional evidence
- Promotion status: Promoted to findings log - Pending Type and Severity Review

## Verification Completion

All 28 applicable B2 checkpoints now have a PASS or FAIL result. No applicable checkpoint remains Not Executed.
