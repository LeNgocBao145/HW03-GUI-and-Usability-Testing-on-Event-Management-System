# Screen ID

B2

# Screen Name

Event Detail

# Purpose

Allow authenticated users to view detailed information about a selected event before deciding whether to participate.

# Entry Conditions

- User is authenticated.
- User selects an event from the Events Listing page (B1).

# Exit Conditions

- User returns to the Events Listing page.
- User navigates to another module using the top navigation bar.

# Main UI Components

## Top Navigation Bar

- EMS logo
- Events menu (selected)
- Calendar
- Saved Events
- User Guide
- Language switcher
- Notification icon
- User profile menu

## Back Navigation

- Back to events button

## Event Overview

The upper section provides an overview of the selected event.

Observed components include:

- Event status badge
- Event cover image
- Event title
- Organizer / event owner
- Save event button
- Important update banner
- Event tags

Observed tags include:

- Event category
- Academic program
- Academic year / semester
- Campus

## Event Information

The event information section displays information cards containing:

### Event Date

- From
- To
- Countdown until the event

### Registration Period

- Registration start
- Registration end

### Check-in Period

- Check-in start
- Check-in end

### Location

- Event location

### Slot Availability

- Available student slots

## Detailed Content

The page contains a Detailed content section describing the event.

## Registration Information

The page displays registration-related information, including:

- Registration roles
- Registration statistics
- Registration status summary

## Share Event

- Share event button

## Footer

The footer contains:

- FIT-HCMUS branding
- Contact information
- Faculty office address
- Email
- Telephone
- Admission hotline
- Useful links
- Social media links
- Online visitor counter

# Main User Actions

- Return to the Events Listing page.
- Read event overview.
- Read important announcements.
- Review event information.
- Review registration period.
- Review check-in period.
- Review event location.
- Review slot availability.
- Read detailed event description.
- Review registration information.
- Save the event.
- Share the event.

# Expected Navigation

Observed navigation includes:

- Back to Events Listing
- Calendar
- Saved Events
- User Guide
- User Profile
- Language switch

# Relevant Interface Aspects

- IA-01 General UI
- IA-03 Navigation
- IA-04 Feedback / State

# Dependencies

- Authentication service
- Event service
- User profile service
- Notification service
- Sharing service

# Evidence References

Screenshots

- ScreenB2_event_detail.png
- `screenshots/ScreenB2/evidences/`

Environment

- Windows 11
- Google Chrome
- https://prod-dev.ems-fitus.cloud/events/104

Observation Date

- 2026-08-03

# Actual Behavior Observations

## General

- The user is authenticated.
- The Events module is active.
- A Back to events button is available.

## Event Overview

- A large event cover image is displayed.
- Event title is displayed.
- Organizer information is displayed.
- A Save event button is available.
- An Important update banner is displayed.
- Multiple event tags are displayed.

## Event Information

Separate information cards display:

- Event date
- Registration period
- Check-in period
- Event location
- Slot availability

## Detailed Content

- A Detailed content section is displayed.

## Registration Information

- Registration information is displayed below the event description.
- Multiple registration roles are presented.
- Registration statistics are displayed for each role.

## Other

- A Share event button is displayed.
- The page footer contains contact information and useful links.

# Live Verification Status

## Verified

- Loading state displayed a visible spinner while Event Detail content was pending.
- Responsive behavior was checked at desktop, tablet, and mobile viewports without horizontal document overflow.
- Keyboard navigation and focus behavior were exercised; the language switcher retained focus during the recorded Tab sequence.
- Offline behavior was exercised with Chrome DevTools Offline mode and fell back to the browser's generic error page.
- English and Vietnamese layouts were observed.

## Not Yet Observed or Verified

- Save event confirmation
- Share event behavior
- Screen-reader announcement behavior
- Reliable real-time update behavior
