# Checklist Execution - B2 Event Detail

Execution Date: 2026-08-03
Tester: Codex live verification session
SUT URL: https://prod-dev.ems-fitus.cloud/events/104
Execution Mode: Live Verification

## Execution Environment

- Browser: Codex In-app Browser
- Browser Version: Not exposed by the browser runtime
- Operating System: Windows 11 Home 10.0.26200
- Device: Lenovo 82S0, x64 laptop
- Primary Screen Resolution: 2560 x 1600
- Default B2 Viewport: 1241 x 912
- Responsive Viewports: 768 x 1024 tablet and 390 x 844 mobile

Authentication succeeded. The authenticated EMS account matched the supplied test-account email, displayed the Lecturer role, and the Event Detail screen was verified at `/events/104`. Credential values are not recorded in this document.

Live evidence screenshots are saved under `screenshots/ScreenB2/evidences/`. The evidence filenames below map directly to the captured B2 states. Dynamic checks also use the tester observations recorded in `test_notes.md`.

## IA-01 General UI Standards

| GUI | Result | Evidence | Notes |
|---|---|---|---|
| 1.01 | PASS | Human Reviewed | Approved Design System or Brand Guidelines baseline. |
| 1.02 | PASS | ScreenB2_live_01_desktop_loaded.png | Headings, labels, body text, and supporting text displayed a consistent visible hierarchy. |
| 1.03 | PASS | Human Reviewed | WCAG AA contrast measurements performed during this session. |
| 1.04 | PASS | ScreenB2_live_01_desktop_loaded.png; ScreenB2_live_03_tablet_768x1024.png; ScreenB2_live_04_mobile_390x844.png | Spacing remained visually consistent at desktop, tablet, and mobile viewports. |
| 1.05 | PASS | ScreenB2_live_01_desktop_loaded.png; live DOM observation | Navigation, event-information, save, and share icons used consistent visual treatments. |
| 1.06 | PASS | ScreenB2_live_01_desktop_loaded.png; live DOM observation | The FIT HCMUS logo appeared at the top-left and linked to `/dashboard`. |
| 1.07 | FAIL | ScreenB2_live_02_full_page.png; ScreenB2_live_03_tablet_768x1024.png | English countdowns displayed `Event starts in 12 day(s)` and `Registration opens in 6 day(s)`. See GUI-B2-FC-001. |
| 1.08 | PASS | Human Reviewed | Approved capitalization or content specification was available. |
| 1.09 | PASS | ScreenB2_live_01_desktop_loaded.png; ScreenB2_live_03_tablet_768x1024.png; ScreenB2_live_04_mobile_390x844.png | The event cover remained proportioned without visible stretching across tested viewports. |
| 1.10 | PASS | ScreenB2_live_01_desktop_loaded.png; ScreenB2_live_03_tablet_768x1024.png; ScreenB2_live_04_mobile_390x844.png | Desktop, tablet, and mobile layouts remained usable without horizontal document overflow. |
| 1.11 | PASS | ScreenB2_live_01_desktop_loaded.png; ScreenB2_live_02_full_page.png | Back, save, share, and disabled registration actions were visually distinguishable by type and consistently styled. |
| 1.13 | PASS | ScreenB2_live_05_vietnamese.png; live DOM observation | English and Vietnamese switching completed without horizontal overflow or visible text clipping. |
| 1.14 | FAIL | ScreenB2_live_05_vietnamese.png; ScreenB2_live_08_keyboard_focus.png; live DOM observation | The focusable user menu was a `SPAN` without a semantic role, and the document language remained `en` in Vietnamese mode. See GUI-B2-FC-002. |
| 1.15 | PASS | ScreenB2_live_01_desktop_loaded.png; live DOM observation | User Guide was visible in the top navigation and linked to `/manual`. |

## IA-02 Forms and Inputs

| GUI | Result | Evidence | Notes |
|---|---|---|---|
| 2.12 | FAIL | ScreenB2_live_08_keyboard_focus.png; keyboard notes; human re-execution | Repeated Tab and Shift+Tab actions remained on the language button although additional focusable controls were present. See GUI-B2-FC-003. |

## IA-03 Navigation and Layout

| GUI | Result | Evidence | Notes |
|---|---|---|---|
| 3.01 | PASS | ScreenB2_live_01_desktop_loaded.png; ScreenB2_live_02_full_page.png | The standard EMS header, navigation, and footer remained consistently displayed on Event Detail. |
| 3.02 | PASS | ScreenB2_live_01_desktop_loaded.png | Events was visibly highlighted as the active primary navigation item. |
| 3.04 | PASS | ScreenB2_live_02_full_page.png; live interaction | Vertical scrolling was available because content exceeded the viewport; no unnecessary horizontal scrollbar was observed. |
| 3.07 | FAIL | ScreenB2_live_10_link_hover_baseline.png; ScreenB2_live_11_link_hover_user_guide.png; live computed-style observation | User Guide pointed to `/manual`, but its color and underline did not change on hover. See GUI-B2-FC-004. |
| 3.08 | PASS | ScreenB2_live_02_full_page.png; live DOM observation | Fourteen inspected external links used `target="_blank"` with `rel="noopener noreferrer"`. |
| 3.10 | PASS | Live interaction | EMS Back/Forward result worked. |
| 3.14 | PASS | ScreenB2_live_09_deep_link_reload.png; live interaction | Reloading `/events/104` preserved the URL, page title, and event heading without an Event Not Found state. |

## IA-04 Feedback and State

| GUI | Result | Evidence | Notes |
|---|---|---|---|
| 4.01 | FAIL | ScreenB2_live_06_hover_baseline.png; ScreenB2_live_07_hover_save_event.png; live computed-style observation | Save Event and Back to Events showed no observed color, border, shadow, opacity, or transform change on hover. See GUI-B2-FC-005. |
| 4.02 | PASS | ScreenB2_live_08_keyboard_focus.png | The focused language button displayed a distinct orange outline. |
| 4.04 | PASS | ScreenB2_live_12_loading_state.png | A visible loading spinner appeared while Event Detail content was pending. |
| 4.08 | FAIL | Chrome DevTools Offline mode; tester observation | Offline simulation displayed the browser's generic `ERR_INTERNET_DISCONNECTED` page rather than an EMS-friendly message with a Retry option. See GUI-B2-FC-006. |
| 4.13 | PASS | ScreenB2_live_01_desktop_loaded.png | The Upcoming badge used consistent status styling on the listing and detail flow observed during navigation. |
| 4.14 | FAIL | Tester observation; explicit human promotion approval | Event updates previously appeared only after a manual reload. Re-execution could not trigger a reliable real-time update, and the human reviewer explicitly approved GUI-B2-FC-007 for promotion without additional evidence. |

## N/A Checkpoints

The coverage matrix marks these checkpoints as not applicable to B2:

1.12; 2.01-2.11; 2.13-2.15; 3.03; 3.05; 3.06; 3.09; 3.11-3.13; 3.15; 3.16; 4.03; 4.05-4.07; 4.09-4.12; 4.15.

## Statistics

| Category | Count |
|---|---:|
| Total checkpoints | 61 |
| Applicable to B2 | 28 |
| PASS | 21 |
| FAIL | 7 |
| N/A | 33 |
| Not Executed | 0 |

The seven FAIL rows map to GUI-B2-FC-001 through GUI-B2-FC-007, all explicitly approved for promotion. Bug findings use severity Low, Usability findings use severity 1, and Google Form submission remains pending.
