# Checklist Execution - B3 Registration Form

Execution Date: 2026-08-04
Tester: Codex live verification session
SUT URL: https://prod-dev.ems-fitus.cloud/events/125
Execution Mode: Live Verification

## Execution Environment

- Browser: Codex In-app Browser
- Browser Version: Not exposed by the browser runtime
- Operating System: Windows 11 Home 10.0.26200
- Device: Lenovo 82S0, x64 laptop
- Primary Screen Resolution: 2560 x 1600
- Default B3 Viewport: 1280 x 720
- Responsive Viewports: 768 x 1024 tablet and 390 x 844 mobile

Authentication succeeded through the existing EMS session. The Dashboard loaded fully, and the active account displayed Lecturer registration access. Credentials were read from `.local/ems_credentials.txt`, were not printed or recorded, and did not require resubmission because the session was already authenticated.

Event `125` was selected from the Dashboard because it exposed the complete Lecturer registration form. The initial execution stopped before submission; follow-up human authorization permitted registration, duplicate-submit, confirmation-dialog, cancellation, and undo verification. The registration was cancelled after testing, restoring the initial unregistered state. Live evidence screenshots are saved under `screenshots/ScreenB3/evidences/`.

## IA-01 General UI Standards

| GUI | Result | Evidence | Notes |
|---|---|---|---|
| 1.01 | PASS | Human Review | The human reviewer confirmed that the observed colors and visual scheme comply with the expected Design System and brand treatment. |
| 1.02 | PASS | ScreenB3_live_02_registration_form_desktop.png; live DOM observation | Event title, section heading, role heading, labels, counters, and button text displayed a consistent visible hierarchy. |
| 1.03 | PASS | Human Review | The human reviewer confirmed the visible text/background contrast as acceptable for the approved B3 interface. |
| 1.04 | PASS | ScreenB3_live_02_registration_form_desktop.png; ScreenB3_live_08_mobile_390x844.png | Registration sections, role statistics, guidance, and actions maintained consistent spacing without visible overlap. |
| 1.05 | PASS | ScreenB3_live_02_registration_form_desktop.png; ScreenB3_live_08_mobile_390x844.png | Header, information-card, role, notification, sharing, and back-to-top icons used consistent visual treatments within their groups. |
| 1.06 | PASS | ScreenB3_live_02_registration_form_desktop.png; live DOM observation | The FIT HCMUS logo appeared at the top-left and linked to `/dashboard`. |
| 1.07 | FAIL | ScreenB3_live_02_registration_form_desktop.png; live DOM observation | The countdown displayed `Event starts in 8 day(s)`, which uses placeholder-style plural grammar. See GUI-B3-FC-001. |
| 1.08 | PASS | Human Review | The human reviewer confirmed capitalization against the expected B3 content presentation. |
| 1.09 | PASS | ScreenB3_live_02_registration_form_desktop.png; ScreenB3_live_07_tablet_768x1024.png; ScreenB3_live_08_mobile_390x844.png; live DOM observation | Header and footer logos remained sharp and proportioned; the header logo used `object-fit: contain`. |
| 1.10 | PASS | ScreenB3_live_02_registration_form_desktop.png; ScreenB3_live_07_tablet_768x1024.png; ScreenB3_live_08_mobile_390x844.png | Desktop, tablet, and mobile layouts had no horizontal document overflow or observed component overlap. |
| 1.11 | PASS | ScreenB3_live_02_registration_form_desktop.png; ScreenB3_live_05_validation_disabled.png | Back, save, registration, and disabled button states used visually distinct and internally consistent treatments. |
| 1.13 | PASS | ScreenB3_live_09_vietnamese.png; live DOM observation | English and Vietnamese content switched without horizontal overflow, clipping, or observed layout breakage at the default viewport. |
| 1.14 | FAIL | ScreenB3_live_04_keyboard_focus.png; ScreenB3_live_09_vietnamese.png; live DOM observation | The document `lang` value lagged behind the visible locale, the focusable user menu was a `SPAN` without a semantic role, and the role card nested a checkbox inside a `div[role="button"]`. See GUI-B3-FC-002. |

## IA-02 Forms and Inputs

| GUI | Result | Evidence | Notes |
|---|---|---|---|
| 2.11 | PASS | ScreenB3_live_03_role_selected.png; ScreenB3_live_05_validation_disabled.png; live interaction | Clicking the full 1102 x 124 role card selected and deselected the associated 16 x 16 checkbox. |
| 2.12 | FAIL | ScreenB3_live_04_keyboard_focus.png; live keyboard observation | Repeated Tab input did not advance focus away from the role checkbox. See GUI-B3-FC-003. |
| 2.15 | PASS | ScreenB3_live_05_validation_disabled.png; live interaction | `Please tick a role before submitting registration.` appeared directly below the role selection area and immediately above the disabled Register button. |

## IA-03 Navigation and Layout

| GUI | Result | Evidence | Notes |
|---|---|---|---|
| 3.01 | PASS | ScreenB3_live_01_dashboard_authenticated.png; ScreenB3_live_02_registration_form_desktop.png | Header, primary navigation, and footer remained consistent between the Dashboard and B3. |
| 3.02 | PASS | ScreenB3_live_02_registration_form_desktop.png | Events remained visibly highlighted in the primary navigation. |
| 3.04 | PASS | ScreenB3_live_02_registration_form_desktop.png; ScreenB3_live_08_mobile_390x844.png; live interaction | Vertical scrolling corresponded to overflowing content, and no unnecessary horizontal scrollbar appeared. |
| 3.11 | PASS | ScreenB3_live_14_cancel_confirmation_dialog.png; ScreenB3_live_16_dialog_closed_by_escape.png; live interaction | The cancellation dialog displayed a Close button and action buttons, and Escape dismissed it after the closing animation completed. |
| 3.14 | PASS | ScreenB3_live_11_deep_link_reload.png; live interaction | Reloading `/events/125` preserved the URL and loaded the same registration form and `commander` role without an Event Not Found state. |

## IA-04 Feedback and State

| GUI | Result | Evidence | Notes |
|---|---|---|---|
| 4.01 | FAIL | ScreenB3_live_06_role_card_hover.png; live computed-style observation | The interactive role card showed no observed background, border, shadow, opacity, or transform change on hover. See GUI-B3-FC-004. |
| 4.02 | PASS | ScreenB3_live_04_keyboard_focus.png; live DOM observation | The focused checkbox displayed a distinct cyan ring and browser focus outline. |
| 4.03 | PASS | ScreenB3_live_05_validation_disabled.png; live DOM observation | The Register button used reduced opacity, was visibly greyed out, and had the native disabled property until a role was selected. |
| 4.04 | PASS | ScreenB3_live_10_loading_state.png; live interaction | A centered loading spinner appeared immediately while Event Detail and registration data were fetched after reload. |
| 4.05 | FAIL | ScreenB3_live_13_registration_pending_after_double_click.png; live DOM observation | Registration reached `Pending review`, but no success toast, alert, status message, or live-region notification appeared immediately or after the state settled. See GUI-B3-FC-005. |
| 4.06 | PASS | ScreenB3_live_05_validation_disabled.png | The guidance clearly explained that a role must be selected before registration can be submitted. |
| 4.08 | FAIL | Human Review; behavior reconciled with B1/B2 offline verification | The human reviewer confirmed that B3 falls back to the browser's generic `ERR_INTERNET_DISCONNECTED` page rather than an EMS-friendly message with Retry. See GUI-B3-FC-006. |
| 4.09 | PASS | ScreenB3_live_14_cancel_confirmation_dialog.png; live interaction | Selecting Cancel registration displayed a confirmation dialog before the registration was cancelled. |
| 4.10 | PASS | ScreenB3_live_12_role_selected_before_submit.png; ScreenB3_live_13_registration_pending_after_double_click.png; live interaction | A deliberate double-click created one Pending registration and incremented Registered and Pending only once. |
| 4.12 | PASS | ScreenB3_live_03_role_selected.png; ScreenB3_live_05_validation_disabled.png; live interaction | The selected-role counter updated immediately between `Selected 0/100` and `Selected 1/100`. |
| 4.13 | PASS | ScreenB3_live_02_registration_form_desktop.png; live DOM observation | Registered, Pending, and Approved statistics used distinct blue, yellow, and green treatments. |
| 4.14 | FAIL | Human Review; behavior reconciled with B1/B2 real-time verification | The human reviewer confirmed that B3 updates require manual reload rather than appearing automatically. See GUI-B3-FC-007. |
| 4.15 | FAIL | ScreenB3_live_17_cancellation_processing.png; ScreenB3_live_18_cancellation_completed_no_undo.png; live DOM observation | Cancellation completed and restored the unregistered form, but no Undo action appeared immediately or after the state settled. See GUI-B3-FC-008. |

## N/A Checkpoints

The coverage matrix marks these checkpoints as not applicable to B3:

1.12; 1.15; 2.01-2.10; 2.13; 2.14; 3.03; 3.05-3.10; 3.12; 3.13; 3.15; 3.16; 4.07; 4.11.

## Statistics

| Category | Count |
|---|---:|
| Total checkpoints | 61 |
| Applicable to B3 | 34 |
| PASS | 26 |
| FAIL | 8 |
| N/A | 27 |
| Not Executed | 0 |

The eight FAIL rows map to GUI-B3-FC-001 through GUI-B3-FC-008. The authorized registration was cancelled after verification, restoring the initial unregistered state.
