# Checklist Execution - B1 Home Events Listing

Execution Date: 2026-08-03
Tester: Codex live verification session
SUT URL: https://prod-dev.ems-fitus.cloud/dashboard
Execution Mode: Live Verification

## Execution Environment

- Browser: Codex In-app Browser
- Browser Version: Not exposed by the browser runtime
- Operating System: Windows 11 Home 10.0.26200
- Device: Lenovo 82S0, x64 laptop
- Primary Screen Resolution: 2560 x 1600
- Default B1 Viewport: 1241 x 912
- Responsive Viewports: 768 x 1024 tablet and 390 x 844 mobile

Authentication succeeded. The authenticated EMS account matched the supplied test-account email, the Dashboard loaded fully, and the Events listing was verified at `/dashboard`. Credential values are not recorded in this document.

Live evidence screenshots are saved under `screenshots/ScreenB1/evidences/`. The evidence filenames below map directly to the captured B1 states. Dynamic checks also use the tester observations recorded in `test_notes.md`.

## IA-01 General UI Standards

| GUI | Result | Evidence | Notes |
|---|---|---|---|
| 1.01 | PASS | ScreenB1_live_11.png | UI library and FITUS logo. |
| 1.02 | PASS | ScreenB1_live_01_desktop_loaded.png; ScreenB1_live_02_filter_expanded.png | Heading, body, label, and button typography displayed a consistent visible hierarchy. |
| 1.03 | PASS | ScreenB1_live_11.png | Comprehensive WCAG AA contrast measurements. |
| 1.04 | FAIL | ScreenB1_live_10_mobile_390x844.png | At the mobile viewport, a floating Filters control overlaps the first event card/status area. See GUI-B1-FC-002. |
| 1.05 | PASS | ScreenB1_live_01_desktop_loaded.png; live DOM observation | Navigation, filter, status, and category icons use consistent visual treatments within their component groups. |
| 1.06 | PASS | ScreenB1_live_01_desktop_loaded.png; live DOM observation | The FIT HCMUS logo is at the top-left and links to `/dashboard`. |
| 1.07 | FAIL | ScreenB1_live_05_pagination_page_2.png; live DOM observation | Pagination says `Showing 1 of 44 events` on page 1 and `Showing 9 of 44 events` on page 2 while eight cards are displayed per page. See GUI-B1-FC-001. |
| 1.08 | PASS | ScreenB1_live_11.png | Capitalization compared with an approved content specification. |
| 1.09 | PASS | ScreenB1_live_01_desktop_loaded.png; ScreenB1_live_09_tablet_768x1024.png; ScreenB1_live_10_mobile_390x844.png | Visible event and spotlight images remained proportioned without horizontal stretching at desktop, tablet, and mobile sizes. |
| 1.10 | FAIL | ScreenB1_live_09_tablet_768x1024.png; ScreenB1_live_10_mobile_390x844.png | Layout reflowed without horizontal overflow, but the mobile Filters control overlaps event-card content. See GUI-B1-FC-002. |
| 1.11 | PASS | ScreenB1_live_01_desktop_loaded.png; ScreenB1_live_02_filter_expanded.png | Buttons of the same visible type use consistent shape, border, color, and label treatment. |
| 1.13 | PASS | ScreenB1_live_08_vietnamese.png; live DOM observation | English and Vietnamese switching completed without horizontal overflow or visible text clipping at the default viewport. |
| 1.14 | FAIL | ScreenB1_live_05_pagination_page_2.png; ScreenB1_live_08_vietnamese.png; live DOM observation | Pagination arrow buttons lack accessible names, the interactive user menu is exposed as a generic element, and the document language remains `en` in Vietnamese mode. See GUI-B1-FC-003. |
| 1.15 | PASS | ScreenB1_live_01_desktop_loaded.png; live DOM observation | User guide is available in the top navigation and links to `/manual`. |

## IA-02 Forms and Inputs

| GUI | Result | Evidence | Notes |
|---|---|---|---|
| 2.01 | PASS | ScreenB1_live_02_filter_expanded.png | Date, campus, and registration-availability controls display clear, aligned labels. |
| 2.09 | PASS | ScreenB1_live_01_desktop_loaded.png; ScreenB1_live_02_filter_expanded.png | Search, date, campus, and registration controls provide descriptive placeholders or defaults. |
| 2.10 | PASS | ScreenB1_live_02_filter_expanded.png; live DOM observation | The short campus dropdown clearly displayed All campuses, Cho Quan Campus, and Linh Trung Campus. Search within this short list was not required. |
| 2.12 | PASS | ScreenB1_live_12.png | The controlled browser advanced focus reliably with Tab, so logical keyboard order confirmed. |

## IA-03 Navigation and Layout

| GUI | Result | Evidence | Notes |
|---|---|---|---|
| 3.01 | PASS | ScreenB1_live_01_desktop_loaded.png; ScreenB1_live_05_pagination_page_2.png | The header, top navigation, category navigation, and footer remained consistently displayed across B1 states. |
| 3.02 | PASS | ScreenB1_live_01_desktop_loaded.png | Events is visibly highlighted in the top navigation. |
| 3.04 | PASS | ScreenB1_live_05_pagination_page_2.png; live interaction | The page scrollbar corresponded to overflowing content and animated smoothly during back-to-top execution. |
| 3.05 | PASS | ScreenB1_live_05_pagination_page_2.png; live interaction | Back to top appeared at the bottom and returned scroll position from 8780 to 0. |
| 3.06 | FAIL | ScreenB1_live_05_pagination_page_2.png; live DOM observation | Page navigation works, but the pagination summary reports only the starting index rather than the visible result range. See GUI-B1-FC-001. |
| 3.07 | PASS | ScreenB1_live_13.png | Correct internal URLs were observed, and visual hyperlink hover treatment conclusively verified. |
| 3.08 | PASS | Live DOM observation | All observed external footer and social links use `target="_blank"` with `rel="noopener noreferrer"`. |
| 3.09 | FAIL | ScreenB1_live_03_search_filtered.png; ScreenB1_live_04_empty_results.png; live interaction | Search filters results, but no autosuggestion or dedicated clear-search control appeared; Clear all filters did not clear the query. See GUI-B1-FC-004. |
| 3.10 | PASS | ScreenB1_live_11.png | EMS Back/Forward result worked. |
| 3.12 | FAIL | ScreenB1_live_06_ongoing_before_reload.png; ScreenB1_live_07_after_reload.png; live interaction | Status tabs switch content and show the selected state during interaction, but reload resets the selection and leaves no clearly active status indicator. See GUI-B1-FC-005. |
| 3.14 | FAIL | ScreenB1_live_06_ongoing_before_reload.png; ScreenB1_live_07_after_reload.png; live interaction | `/dashboard` loads directly, but the selected Ongoing state is not encoded in the URL or preserved after reload. See GUI-B1-FC-005. |
| 3.15 | PASS | ScreenB1_live_01_desktop_loaded.png; ScreenB1_live_02_filter_expanded.png | Search, status, and advanced filters are consolidated above the event list. |

## IA-04 Feedback and State

| GUI | Result | Evidence | Notes |
|---|---|---|---|
| 4.01 | FAIL | ScreenB1_live_14_pointer_style_not_change_on_hovering_button.png | Pointer movement did not produce a clear visual hover-style change on the observed control. See GUI-B1-FC-007. |
| 4.02 | PASS | ScreenB1_live_12.png | Focus-ring behavior confirmed. |
| 4.04 | PASS | ScreenB1_live_00_loading.png; live interaction | A loading overlay, skeleton state, and spinner appeared immediately while Dashboard event data was fetched. |
| 4.07 | FAIL | ScreenB1_live_04_empty_results.png; live DOM observation | The no-results state displays a graphic and explanatory text but no actionable CTA to clear the search or restore events. See GUI-B1-FC-006. |
| 4.08 | FAIL | ScreenB1_live_15_offline.png | The Offline Mode test displayed the browser's generic `ERR_INTERNET_DISCONNECTED` page rather than an EMS-friendly message with a Retry option. See GUI-B1-FC-008. |
| 4.13 | PASS | ScreenB1_live_01_desktop_loaded.png; ScreenB1_live_06_ongoing_before_reload.png | Upcoming, ongoing, ended, registration, and opening-soon states use distinct and consistent visible colors. |
| 4.14 | FAIL | ScreenB1_live_11.png; tester observation | Event updates appeared only after a manual reload rather than updating automatically. See GUI-B1-FC-009. |

## N/A Checkpoints

The coverage matrix marks these checkpoints as not applicable to B1:

1.12; 2.02-2.08; 2.11; 2.13-2.15; 3.03; 3.11; 3.13; 3.16; 4.03; 4.05; 4.06; 4.09-4.12; 4.15.

## Statistics

| Category | Count |
|---|---:|
| Total checkpoints | 61 |
| Applicable to B1 | 37 |
| PASS | 25 |
| FAIL | 12 |
| N/A | 24 |
| Not Executed | 0 |

The twelve FAIL rows map to nine Finding Candidates: GUI-B1-FC-001 through GUI-B1-FC-009.
