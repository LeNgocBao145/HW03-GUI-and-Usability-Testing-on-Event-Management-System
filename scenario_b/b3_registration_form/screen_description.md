# Screen ID

B3

# Screen Name

Event Registration State

# Purpose

Allow authenticated users to review the current registration status of an event after submitting a registration request and manage an existing registration.

# Entry Conditions

- User is authenticated.
- User is viewing an Event Detail page.
- The user has submitted an event registration.

# Exit Conditions

- User cancels the registration.
- User returns to the Events Listing page.
- User navigates to another module using the top navigation bar.

# Main UI Components

## Registration Status

The registration section reflects the current registration state.

Observed components include:

- Registration status badge (e.g. Pending review)
- Selected role counter
- Highlighted selected registration roles

## Registration Roles

Each registration role displays:

- Role checkbox
- Role description (if available)
- Registered count
- Pending count
- Confirmed count
- Waitlisted count

Selected roles are visually highlighted.

## Registration Action

Depending on the registration state, the page displays:

- Cancel Registration button

## Confirmation Dialog

When cancelling a registration, a confirmation dialog appears.

Observed dialog components:

- Dialog title
- Confirmation message
- Cancel button
- Cancel registration button
- Close (X) button

## Footer

The footer remains visible when no dialog is displayed.

# Main User Actions

- Review registration status.
- Review selected roles.
- Review registration statistics.
- Cancel an existing registration.
- Close the confirmation dialog.
- Confirm registration cancellation.

# Expected Navigation

Observed navigation includes:

- Return to Event Detail
- Back to Events Listing
- Calendar
- Saved Events
- User Guide
- User Profile
- Language switch

# Relevant Interface Aspects

- IA-01 General UI
- IA-02 Forms
- IA-03 Navigation
- IA-04 Feedback / State

# Dependencies

- Authentication service
- Registration service
- Event service
- User profile service
- Notification service

# Evidence References

Screenshots

- ScreenB3_not_registered.png
- ScreenB3_registered.png
- ScreenB3_cancel_dialog.png
- `screenshots/ScreenB3/evidences/ScreenB3_live_12_role_selected_before_submit.png`
- `screenshots/ScreenB3/evidences/ScreenB3_live_13_registration_pending_after_double_click.png`
- `screenshots/ScreenB3/evidences/ScreenB3_live_14_cancel_confirmation_dialog.png`
- `screenshots/ScreenB3/evidences/ScreenB3_live_16_dialog_closed_by_escape.png`
- `screenshots/ScreenB3/evidences/ScreenB3_live_17_cancellation_processing.png`
- `screenshots/ScreenB3/evidences/ScreenB3_live_18_cancellation_completed_no_undo.png`

Environment

- Windows 11
- Google Chrome
- https://prod-dev.ems-fitus.cloud/events/:id

Observation Date

- 2026-08-03

# Actual Behavior Observations

## Registration Status

Observed:

- After registration, the page displays a "Pending review" status badge.
- The selected role counter is updated.
- Selected roles are highlighted with a different background colour.
- Registration statistics are updated after registration.

## Registration Action

Observed:

- The Register button is replaced with a Cancel Registration button.
- Registration can be managed without leaving the Event Detail page.

## Confirmation Dialog

Observed:

- Selecting Cancel Registration opens a confirmation dialog.
- The background page is dimmed.
- The dialog asks the user to confirm cancellation.
- The dialog contains:
  - Cancel button
  - Cancel Registration button
  - Close (X) button

## Follow-up Live Verification

Observed on 2026-08-04:

- Selecting a role enables Register and updates the selected-role counter.
- A deliberate Register double-click creates one Pending registration and increments the registration counters only once.
- No success toast or equivalent notification appears after registration.
- Selecting Cancel registration opens the confirmation dialog before cancellation.
- Escape closes the confirmation dialog after its closing animation completes.
- Confirming cancellation restores the unregistered form and resets the counters.
- No Undo action appears after cancellation.
- Desktop, tablet, and mobile layouts display without horizontal document overflow.
- A loading spinner appears while registration data is fetched after reload.
- Keyboard focus is visible, but repeated Tab input does not advance beyond the role checkbox.
- Human Review confirmed Design System alignment, contrast, capitalization, offline behavior, and real-time update behavior.

# Remaining Unobserved States

- Registration cancellation failure
- Pending review approval flow
- Waitlist transition
- Screen-reader announcement output beyond DOM semantics
