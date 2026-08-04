# Execution Summary - B1 Home Events Listing

## Scope

- Screen: B1 - Home Events Listing
- SUT URL: https://prod-dev.ems-fitus.cloud/dashboard
- Execution date: 2026-08-03
- Execution mode: Live Verification
- Authentication: Successful; authenticated account matched the supplied test account
- Evidence basis: live browser observations, live DOM inspection, and session screenshots

## Applicability Summary

| Area | Applicable | N/A |
|---|---:|---:|
| IA-01 General UI Standards | 14 | 1 |
| IA-02 Forms and Inputs | 4 | 11 |
| IA-03 Navigation and Layout | 12 | 4 |
| IA-04 Feedback and State | 7 | 8 |
| Total | 37 | 24 |

## Result Statistics

| Result | Count |
|---|---:|
| PASS | 25 |
| FAIL | 12 |
| N/A | 24 |
| Not Executed | 0 |
| Total checkpoints | 61 |

The twelve FAIL rows describe nine consolidated Finding Candidates. Human Review promoted five candidates to confirmed findings; those five were classified, assigned severity, and submitted through Google Forms. The remaining four observations retain Finding Candidate status only.

## Live Verification Summary

- Authentication and the active test account were verified without storing credentials.
- B1 loaded fully and displayed a real loading state before event data appeared.
- Filters, campus options, search, empty results, status tabs, pagination, scrolling, back-to-top, language switching, external-link configuration, and responsive layouts were exercised.
- The previously deferred design, contrast, capitalization, keyboard, hover, browser-navigation, offline, and real-time-update checks were re-verified by the tester.
- No applicable B1 checkpoint remains Not Executed.
- Live evidence screenshots are persisted under `screenshots/ScreenB1/evidences/` and indexed in `test_notes.md`.

## Missing Evidence Report

No referenced screenshot file is missing. Interaction-dependent checks such as browser navigation and real-time refresh behavior additionally rely on the tester observations recorded in `test_notes.md`.

## Finding Candidate Report

### GUI-B1-FC-001 - Pagination Summary Does Not Show the Visible Range

- Checkpoints: 1.07, 3.06
- Observation: Page 1 displays eight cards with `Showing 1 of 44 events`; page 2 displays eight cards with `Showing 9 of 44 events`.
- Evidence: `screenshots/ScreenB1/evidences/ScreenB1_live_05_pagination_page_2.png` and live DOM observation
- Status: Submitted to Google Form - Bug Severity Low

### GUI-B1-FC-002 - Mobile Filter Control Overlaps Event Content

- Checkpoints: 1.04, 1.10
- Observation: At 390 x 844, a floating Filters control overlaps the first event card/status area.
- Evidence: `screenshots/ScreenB1/evidences/ScreenB1_live_10_mobile_390x844.png`
- Status: Submitted to Google Form - Bug Severity Low

### GUI-B1-FC-003 - Accessibility Semantics Are Incomplete

- Checkpoint: 1.14
- Observation: Pagination arrow buttons lack accessible names, the user-menu interaction is exposed as a generic element, and the document language remains `en` in Vietnamese mode.
- Evidence: `screenshots/ScreenB1/evidences/ScreenB1_live_05_pagination_page_2.png`, `screenshots/ScreenB1/evidences/ScreenB1_live_08_vietnamese.png`, and live DOM observation
- Classification: Finding Candidate only

### GUI-B1-FC-004 - Search Lacks Expected Discovery and Clear Controls

- Checkpoint: 3.09
- Observation: Search filters results, but no autosuggestion or dedicated clear-search control appeared; Clear all filters did not clear the query.
- Evidence: `screenshots/ScreenB1/evidences/ScreenB1_live_03_search_filtered.png`, `screenshots/ScreenB1/evidences/ScreenB1_live_04_empty_results.png`, and live interaction
- Classification: Finding Candidate only

### GUI-B1-FC-005 - Status State Is Not Preserved on Reload

- Checkpoints: 3.12, 3.14
- Observation: Status switching works, but selecting Ongoing and reloading `/dashboard` resets the state and leaves no clearly active status indicator.
- Evidence: `screenshots/ScreenB1/evidences/ScreenB1_live_06_ongoing_before_reload.png` and `screenshots/ScreenB1/evidences/ScreenB1_live_07_after_reload.png`
- Status: Submitted to Google Form - Bug Severity Low

### GUI-B1-FC-006 - Empty Results Provide No Actionable CTA

- Checkpoint: 4.07
- Observation: The no-results state provides a graphic and explanatory message but no action for clearing the search or restoring the event list.
- Evidence: `screenshots/ScreenB1/evidences/ScreenB1_live_04_empty_results.png`
- Status: Submitted to Google Form - Usability Severity 2

### GUI-B1-FC-007 - Hover Feedback Is Not Visually Distinct

- Checkpoint: 4.01
- Observation: The observed category control did not show a clear visual change when hovered.
- Evidence: `screenshots/ScreenB1/evidences/ScreenB1_live_14_pointer_style_not_change_on_hovering_button.png`
- Classification: Finding Candidate only

### GUI-B1-FC-008 - Offline State Falls Back to the Browser Error Page

- Checkpoint: 4.08
- Observation: The Offline Mode test displayed the browser's generic `ERR_INTERNET_DISCONNECTED` page rather than an EMS-friendly message with a Retry option.
- Evidence: `screenshots/ScreenB1/evidences/ScreenB1_live_15_offline.png`
- Status: Submitted to Google Form - Usability Severity 1

### GUI-B1-FC-009 - Event Updates Require a Manual Reload

- Checkpoint: 4.14
- Observation: The tester observed that event data updated only after a manual reload rather than automatically.
- Evidence: tester observation and resulting Dashboard state in `screenshots/ScreenB1/evidences/ScreenB1_live_11.png`
- Classification: Finding Candidate only

## Verification Completion

All 37 applicable B1 checkpoints now have a PASS or FAIL result. No applicable checkpoint remains Not Executed.

Google Form reconciliation is complete for GUI-B1-FC-001, GUI-B1-FC-002, GUI-B1-FC-005, GUI-B1-FC-006, and GUI-B1-FC-008. GUI-B1-FC-003, GUI-B1-FC-004, GUI-B1-FC-007, and GUI-B1-FC-009 remain unpromoted Finding Candidates.
