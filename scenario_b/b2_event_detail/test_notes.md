# Test Notes - B2 Event Detail

## Execution Context

- Execution date: 2026-08-03
- Execution mode: Live Verification
- SUT URL: https://prod-dev.ems-fitus.cloud/events/104
- Browser: Codex In-app Browser
- Browser version: Not exposed by the browser runtime
- Operating system: Windows 11 Home 10.0.26200
- Device: Lenovo 82S0, x64 laptop
- Primary screen resolution: 2560 x 1600
- Default B2 viewport: 1241 x 912
- Responsive viewports: 768 x 1024 and 390 x 844

## Authentication

- Authentication status: Successful
- Dashboard status: Fully loaded
- B2 status: Event Detail available at `/events/104`
- Account verification: The authenticated account matched the supplied test-account email and displayed the Lecturer role.
- Credential handling: Credentials were read from `.local/ems_credentials.txt`, used only for authentication verification, and omitted from all outputs.

## Live Session Evidence

Evidence files are stored under `screenshots/ScreenB2/evidences/`. Dynamic checks also use the tester observations recorded below because a single screenshot cannot demonstrate an interaction sequence by itself.

| Evidence ID | File | Captured State |
|---|---|---|
| LIVE-B2-01 | `ScreenB2_live_01_desktop_loaded.png` | Fully loaded desktop B2 Event Detail |
| LIVE-B2-02 | `ScreenB2_live_02_full_page.png` | Full-page Event Detail content and scrolling context |
| LIVE-B2-03 | `ScreenB2_live_03_tablet_768x1024.png` | Tablet viewport and English countdown wording |
| LIVE-B2-04 | `ScreenB2_live_04_mobile_390x844.png` | Mobile viewport |
| LIVE-B2-05 | `ScreenB2_live_05_vietnamese.png` | Vietnamese B2 interface |
| LIVE-B2-06 | `ScreenB2_live_06_hover_baseline.png` | Save Event before hover |
| LIVE-B2-07 | `ScreenB2_live_07_hover_save_event.png` | Save Event during hover |
| LIVE-B2-08 | `ScreenB2_live_08_keyboard_focus.png` | Keyboard focus on the language switcher |
| LIVE-B2-09 | `ScreenB2_live_09_deep_link_reload.png` | Event Detail after direct URL reload |
| LIVE-B2-10 | `ScreenB2_live_10_link_hover_baseline.png` | User Guide before hover |
| LIVE-B2-11 | `ScreenB2_live_11_link_hover_user_guide.png` | User Guide during hover |
| LIVE-B2-12 | `ScreenB2_live_12_loading_state.png` | Event Detail loading spinner and pending content area |

## Live Observations

- EMS opened an authenticated Dashboard, and the active account matched the supplied Lecturer test account.
- The literal `/events/:id` URL did not identify a concrete event. Event `104` was selected from the available listing and exposed the standard Event Detail layout.
- An initially selected event at `/events/68` became unavailable during the session. That unavailable state was not used as evidence of a B2 defect.
- Event `104` loaded with its cover, title, Upcoming badge, save action, tags, date cards, location, slot availability, detailed content, sharing action, registration roles, and footer.
- The Events item remained highlighted in the primary navigation, and the FIT HCMUS logo linked to `/dashboard`.
- English countdowns displayed `Event starts in 12 day(s)` and `Registration opens in 6 day(s)`.
- Desktop, tablet, and mobile layouts had no horizontal document overflow.
- English and Vietnamese switching completed without horizontal overflow or visible text clipping.
- The document `lang` attribute remained `en` after the visible interface switched to Vietnamese.
- The interactive user menu was a keyboard-focusable `SPAN` without a semantic role.
- Repeated Tab and Shift+Tab inputs did not move focus away from the language switcher, even though later focusable controls were present.
- The language switcher displayed a distinct orange focus outline.
- Save Event and Back to Events produced no observed computed-style change on hover.
- User Guide pointed to `/manual`, but no color or underline change appeared on hover.
- Fourteen inspected external links used a new tab with `noopener noreferrer`.
- Vertical scrolling worked, and no unnecessary horizontal scrollbar appeared.
- Reloading `/events/104` preserved the same URL, page title, and event heading without an Event Not Found state.
- The tester re-verified Design System alignment, WCAG AA contrast, and capitalization as PASS through human review.
- Browser Back/Forward behavior was re-verified as working through tester interaction.
- A visible loading spinner appeared while Event Detail content was pending in `LIVE-B2-12`.
- Offline behavior was re-executed using Chrome DevTools Offline mode. The browser displayed its generic `ERR_INTERNET_DISCONNECTED` page rather than an EMS-friendly message with a Retry option.
- The tester previously observed that event updates appeared only after a manual reload rather than updating automatically.

## Candidate Review Re-execution

- GUI-B2-FC-003 was re-executed. The tester confirmed the keyboard-navigation observation and completed human review without requiring another repository evidence file.
- GUI-B2-FC-006 was re-executed using Chrome DevTools Offline mode. The observed browser error state and exact simulation method are recorded in these notes.
- GUI-B2-FC-007 was re-executed, but no reliable real-time update could be triggered. The human reviewer explicitly approved promotion without additional evidence.
- GUI-B2-FC-004 and GUI-B2-FC-005 remain separate candidates because they cover different component groups and checkpoints.

## Re-verification Status

- All previously recorded Not Executed checkpoints now have tester results.
- No applicable B2 checkpoint remains Not Executed.
- All screenshot filenames referenced by the B2 execution documents are present.
- No missing screenshot file was used to support a FAIL result.

All seven B2 candidates received explicit human approval for promotion to the findings log. Type and severity remain unassigned pending human classification, and no Google Form metadata has been created.
