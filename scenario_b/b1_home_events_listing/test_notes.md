# Test Notes - B1 Home Events Listing

## Execution Context

- Execution date: 2026-08-03
- Execution mode: Live Verification
- SUT URL: https://prod-dev.ems-fitus.cloud/dashboard
- Browser: Codex In-app Browser
- Browser version: Not exposed by the browser runtime
- Operating system: Windows 11 Home 10.0.26200
- Device: Lenovo 82S0, x64 laptop
- Primary screen resolution: 2560 x 1600
- Default B1 viewport: 1241 x 912
- Responsive viewports: 768 x 1024 and 390 x 844

## Authentication

- Authentication status: Successful
- Dashboard status: Fully loaded
- B1 status: Events listing available at `/dashboard`
- Account verification: The authenticated account shown by EMS matched the supplied test-account email.
- Credential handling: Credentials were read from `.local/ems_credentials.txt`, used only for authentication verification, omitted from all outputs, and cleared from browser-session memory after execution.

## Live Session Evidence

Evidence files are stored under `screenshots/ScreenB1/evidences/`. Dynamic checks also use the tester observations recorded below because a single screenshot cannot demonstrate an interaction sequence by itself.

| Evidence ID | File | Captured State |
|---|---|---|
| LIVE-B1-00 | `ScreenB1_live_00_loading.png` | Dashboard loading overlay, skeleton state, and spinner |
| LIVE-B1-01 | `ScreenB1_live_01_desktop_loaded.png` | Fully loaded desktop B1 listing |
| LIVE-B1-02 | `ScreenB1_live_02_filter_expanded.png` | Expanded advanced filter panel and campus options |
| LIVE-B1-03 | `ScreenB1_live_03_search_filtered.png` | Search filtered to one matching event |
| LIVE-B1-04 | `ScreenB1_live_04_empty_results.png` | Search with no matching events |
| LIVE-B1-05 | `ScreenB1_live_05_pagination_page_2.png` | Page 2 pagination and footer at the bottom of B1 |
| LIVE-B1-06 | `ScreenB1_live_06_ongoing_before_reload.png` | Ongoing status selected before reload |
| LIVE-B1-07 | `ScreenB1_live_07_after_reload.png` | B1 after reload, with status state reset |
| LIVE-B1-08 | `ScreenB1_live_08_vietnamese.png` | Vietnamese B1 interface |
| LIVE-B1-09 | `ScreenB1_live_09_tablet_768x1024.png` | Tablet viewport |
| LIVE-B1-10 | `ScreenB1_live_10_mobile_390x844.png` | Mobile viewport with overlapping Filters control |
| LIVE-B1-11 | `ScreenB1_live_11.png` | Dashboard state used alongside tester notes for design, contrast, capitalization, browser navigation, and refresh observations |
| LIVE-B1-12 | `ScreenB1_live_12.png` | Keyboard focus ring and Tab-order verification |
| LIVE-B1-13 | `ScreenB1_live_13.png` | Hyperlink navigation to the expected external destination |
| LIVE-B1-14 | `ScreenB1_live_14_pointer_style_not_change_on_hovering_button.png` | Observed control without a clear hover-style change |
| LIVE-B1-15 | `ScreenB1_live_15_offline.png` | Offline Mode test showing the browser's generic error page |

## Live Observations

- EMS opened an authenticated event dashboard and the active account matched the supplied test account.
- Direct navigation to `/dashboard` loaded the Events listing and displayed a loading state before event data appeared.
- The logo links to `/dashboard`; Events is highlighted in the primary navigation.
- The filter panel expands and exposes date, campus, and registration-availability controls.
- The campus selector displayed All campuses, Cho Quan Campus, and Linh Trung Campus.
- Search filtered the listing to one exact matching event.
- No autosuggestion list or dedicated clear-search control appeared during search.
- The Clear all filters action did not clear the entered search query.
- The no-results state displayed a graphic and explanatory message without an actionable CTA.
- Page 2 loaded a different set of eight cards and was visibly selected.
- Pagination text displayed `Showing 1 of 44 events` on page 1 and `Showing 9 of 44 events` on page 2.
- Back to top animated from the bottom of the page to scroll position 0.
- Upcoming, Ongoing, and Ended each loaded distinct event results and displayed a selected style when clicked.
- Selecting Ongoing and reloading `/dashboard` reset the state and left no clearly selected status control.
- English and Vietnamese switching completed without horizontal overflow at the default viewport.
- The document `lang` attribute remained `en` after the visible interface switched to Vietnamese.
- Pagination previous/next arrow buttons did not expose accessible names in the live DOM.
- The interactive user menu was exposed as a generic element rather than a button.
- External HTTP links inspected in the footer and social controls use a new tab with `noopener noreferrer`.
- Tablet and mobile layouts had no horizontal document overflow.
- At mobile width, a floating Filters control overlapped the first event card/status area.
- The tester re-verified Design System alignment, WCAG AA contrast, and capitalization as PASS, with `LIVE-B1-11` referenced as the visible Dashboard state.
- Keyboard Tab order and a distinct focus ring were verified with `LIVE-B1-12`.
- Hyperlink navigation reached the expected destination, and the tester recorded hover identification as verified with `LIVE-B1-13`.
- Browser Back/Forward behavior was re-verified as working through tester interaction, with `LIVE-B1-11` showing the resulting Dashboard state.
- The observed category control did not show a clear visual change on hover in `LIVE-B1-14`.
- The Offline Mode test showed the browser's generic `ERR_INTERNET_DISCONNECTED` page instead of an EMS-friendly error message with a Retry option in `LIVE-B1-15`.
- The tester observed that event data updated only after a manual reload rather than automatically; `LIVE-B1-11` shows the resulting Dashboard state.

## Re-verification Status

- All previously recorded Not Executed checkpoints now have tester results.
- No applicable B1 checkpoint remains Not Executed.
- All screenshot filenames referenced by the B1 execution documents are present.

Five observations were promoted, classified, assigned severity, and submitted through Google Forms: GUI-B1-FC-001, GUI-B1-FC-002, GUI-B1-FC-005, GUI-B1-FC-006, and GUI-B1-FC-008. The other four observations remain Finding Candidates only.
