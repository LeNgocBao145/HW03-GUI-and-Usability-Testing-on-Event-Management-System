# Test Notes - B3 Registration Form

## Execution Context

- Execution date: 2026-08-04
- Execution mode: Live Verification
- SUT URL: https://prod-dev.ems-fitus.cloud/events/125
- Browser: Codex In-app Browser
- Browser version: Not exposed by the browser runtime
- Operating system: Windows 11 Home 10.0.26200
- Device: Lenovo 82S0, x64 laptop
- Primary screen resolution: 2560 x 1600
- Default B3 viewport: 1280 x 720
- Responsive viewports: 768 x 1024 and 390 x 844

## Authentication

- Authentication status: Successful through the existing EMS session
- Dashboard status: Fully loaded
- Account access observed: Lecturer registration controls were available
- Credential handling: Credentials were read from `.local/ems_credentials.txt`, were not printed or recorded, and did not require resubmission because the session was already authenticated.

## Navigation Summary

- The session began at the authenticated Dashboard.
- Event `125`, `Germany above anything`, was selected because it was open for registration and exposed a complete Lecturer registration form.
- The concrete B3 URL was `https://prod-dev.ems-fitus.cloud/events/125`.
- Initial execution stopped before registration submission. Follow-up human authorization permitted registration, duplicate-submit, dialog, cancellation, and undo verification.
- The created registration was cancelled after verification, restoring the initial unregistered state.

## Live Session Evidence

Evidence files are stored under `screenshots/ScreenB3/evidences/`. Dynamic checks also use the live observations below because screenshots alone cannot demonstrate every state transition.

| Evidence ID | File | Captured State |
|---|---|---|
| LIVE-B3-01 | `ScreenB3_live_01_dashboard_authenticated.png` | Authenticated Dashboard before opening B3 |
| LIVE-B3-02 | `ScreenB3_live_02_registration_form_desktop.png` | Full desktop Registration Form in the unselected state |
| LIVE-B3-03 | `ScreenB3_live_03_role_selected.png` | Commander selected, counter updated, and Register enabled |
| LIVE-B3-04 | `ScreenB3_live_04_keyboard_focus.png` | Visible checkbox focus state during keyboard verification |
| LIVE-B3-05 | `ScreenB3_live_05_validation_disabled.png` | Role deselected, validation guidance visible, and Register disabled |
| LIVE-B3-06 | `ScreenB3_live_06_role_card_hover.png` | Role card during hover verification |
| LIVE-B3-07 | `ScreenB3_live_07_tablet_768x1024.png` | Tablet layout |
| LIVE-B3-08 | `ScreenB3_live_08_mobile_390x844.png` | Mobile Registration Form viewport |
| LIVE-B3-09 | `ScreenB3_live_09_vietnamese.png` | Vietnamese interface |
| LIVE-B3-10 | `ScreenB3_live_10_loading_state.png` | Loading spinner during direct-page reload |
| LIVE-B3-11 | `ScreenB3_live_11_deep_link_reload.png` | Registration Form after direct URL reload |
| LIVE-B3-12 | `ScreenB3_live_12_role_selected_before_submit.png` | Role selected immediately before authorized submission |
| LIVE-B3-13 | `ScreenB3_live_13_registration_pending_after_double_click.png` | Single Pending registration after deliberate double-click |
| LIVE-B3-14 | `ScreenB3_live_14_cancel_confirmation_dialog.png` | Cancellation confirmation dialog |
| LIVE-B3-15 | `ScreenB3_live_15_dialog_escape_dismissal_started.png` | Dialog state immediately after Escape dismissal began |
| LIVE-B3-16 | `ScreenB3_live_16_dialog_closed_by_escape.png` | Pending registration after the dialog closed |
| LIVE-B3-17 | `ScreenB3_live_17_cancellation_processing.png` | Cancellation processing state |
| LIVE-B3-18 | `ScreenB3_live_18_cancellation_completed_no_undo.png` | Restored unregistered form with no Undo action |

## Live Observations

- The Dashboard and B3 were available through an authenticated EMS session with Lecturer registration access.
- Event `125` showed one Lecturer role named `commander`, registration statistics, selection guidance, and a disabled Register button.
- Selecting the checkbox changed the counter from `Selected 0/100 lecturer roles` to `Selected 1/100 lecturer roles`, hid the guidance, and enabled Register.
- Clicking the full role card deselected the checkbox, restored the guidance, and disabled Register.
- The role card measured approximately 1102 x 124 pixels at the default viewport, providing a substantially larger target than the 16 x 16 checkbox.
- Repeated Tab input did not move focus away from `Select commander` despite later focusable controls being present.
- The checkbox displayed a distinct cyan focus ring and browser outline.
- The role card showed no observed computed-style change on hover.
- The English countdown displayed `Event starts in 8 day(s)`.
- Desktop, tablet, and mobile layouts had no horizontal document overflow.
- English and Vietnamese switching completed without visible clipping or horizontal overflow.
- After switching to Vietnamese, visible content was Vietnamese while the document `lang` remained `en`. After switching back to English, visible content was English while `lang` remained `vi`.
- The interactive user menu was a keyboard-focusable `SPAN` without a semantic role.
- The role card used `div[role="button"]` while containing a native checkbox.
- The header logo linked to `/dashboard` and used `object-fit: contain`.
- Reloading `/events/125` first displayed a centered loading spinner and then restored the same registration form and role.
- Registered, Pending, and Approved statistics used distinct blue, yellow, and green visual treatments.
- The human reviewer confirmed Design System alignment, visible contrast, and capitalization as PASS.
- A deliberate double-click on Register created one Pending registration. Registered and Pending each increased from 0 to 1 only once, and the form changed to the single Pending state.
- No success toast, alert, status message, or live-region notification was observed immediately after registration or after the state settled.
- Selecting Cancel registration displayed a confirmation dialog with Close, Cancel, and Confirm cancel registration controls.
- Escape dismissed the confirmation dialog after its closing animation completed.
- Confirming cancellation restored the unregistered form and returned Registered and Pending to 0.
- No Undo button or link appeared immediately after cancellation or after the state settled.
- The human reviewer confirmed that offline behavior matches B1/B2: the browser's generic `ERR_INTERNET_DISCONNECTED` page appears instead of an EMS-friendly Retry state.
- The human reviewer confirmed that B3 registration updates require manual reload rather than appearing automatically.

## Re-verification Status

- 34 checkpoints are applicable to B3.
- 26 applicable checkpoints passed and 8 failed.
- No applicable B3 checkpoint remains Not Executed.
- All eight FAIL rows have live screenshot, DOM/interaction, or explicit Human Review support.
- No failed checkpoint is being confirmed from missing evidence.

## Candidate Review Outcome

- Human Review accepted the existing evidence as sufficient; no additional evidence is required.
- GUI-B3-FC-001 and GUI-B3-FC-006 are Validated Duplicates. Their cross-screen relationships were accepted because they describe the same system-level problems, and the B3 IDs are retained for traceability.
- GUI-B3-FC-002, GUI-B3-FC-003, GUI-B3-FC-004, GUI-B3-FC-005, GUI-B3-FC-007, and GUI-B3-FC-008 are Valid Candidates after Human Review.
- The cross-screen overlap in GUI-B3-FC-002 is accepted while preserving its B3-specific role-card semantics.
- The cross-screen relationship for GUI-B3-FC-007 is accepted while preserving its B3 registration-state traceability.
- No candidate was rejected, and no candidate remains Needs More Evidence.

## Promotion Outcome

- Human Review approved promotion of all eight B3 IDs to `findings/bug_and_usability_findings_log.md`.
- Bug classification: GUI-B3-FC-001, GUI-B3-FC-002, GUI-B3-FC-003, and GUI-B3-FC-007.
- Usability classification: GUI-B3-FC-004, GUI-B3-FC-005, GUI-B3-FC-006, and GUI-B3-FC-008.
- GUI-B3-FC-001 and GUI-B3-FC-006 retain their accepted duplicate relationships for cross-screen traceability.
- Human Review assigned Bug Severity Low and Usability Severity 1 to every promoted B3 finding.
- Google Form submission was intentionally not performed; no timestamp, student email, or form-entry metadata was created.
