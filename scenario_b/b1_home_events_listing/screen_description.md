# Screen ID

B1

# Screen Name

Home / Events Listing (Dashboard)

# Purpose

Allow authenticated users to browse, search, filter, and discover available events before viewing event details.

# Entry Conditions

- User has successfully signed in.
- User is redirected to the dashboard.

# Exit Conditions

- User opens an event detail page.
- User navigates to another module using the top navigation.

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

## Spotlight Event

- Featured event banner
- Event image
- Event title
- Event description
- Event location
- Event schedule
- Event status badge (e.g. Ended)
- "View details" button

## Event Search and Filters

The search and filtering area is located above the event list.

### Search

- Search box for event titles

### Status Filters

- Upcoming
- Ongoing
- Ended

Only one status filter appears to be active at a time.

### Advanced Filter

The **Filters** button expands an inline filter panel below the search area.

Observed filter controls include:

- Event Date
  - From date picker
  - To date picker
- Campus selector (dropdown)
- Registration Availability selector (dropdown)

The panel is displayed inside a dedicated filter container beneath the toolbar.

An active-filter counter badge is displayed beside the Filters button.

## Category Sidebar

The left sidebar provides category-based navigation.

Observed features:

- Expand / Collapse button
- Scrollable sidebar
- Expandable category groups
- Nested category items

Observed category groups include:

- Movement & Campaign Activities
- Academic Context
- Special Program
- Academic Year
- Semester
- Other Activities

### Collapsed Sidebar

The sidebar supports a collapsed mode.

When collapsed:

- Only navigation icons remain visible.
- Category labels are hidden.
- The event list gains additional horizontal space.
- A dedicated expand button is available to restore the full sidebar.

## Event Cards

Each event card may contain:

- Cover image
- Event title
- Short description
- Event time
- Event location
- Registration status
- Event tags
- Program / Academic year / Semester tags
- Campus tag
- Participant quota
- Lecturer quota
- Student quota
- Save button

## Pagination

The event list includes:

- Page size selector
- Pagination information
- Page navigation controls

## Floating Action Buttons

The bottom-right corner contains floating action buttons.

Observed buttons include:

- Share
- Scroll to top

## Footer

The page footer contains:

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

- Browse featured events.
- Search events by title.
- Filter events by status.
- Expand the advanced filter panel.
- Collapse the advanced filter panel.
- Select an event date range.
- Select a campus.
- Select registration availability.
- Browse event categories.
- Expand category groups.
- Collapse category groups.
- Collapse the sidebar.
- Expand the sidebar.
- Scroll through the category list.
- Scroll through the event list.
- Open an event.
- View event details.
- Save an event.

# Expected Navigation

Observed navigation destinations:

- Event Detail
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
- Event service
- Category service
- Search service
- Filtering service
- User profile service
- Notification service

# Evidence References

Screenshots

- ScreenB1_overview_1st_half.png
- ScreenB1_overview_2nd_half.png
- ScreenB1_filter_panel_expanded.png
- ScreenB1_sidebar_collapsed.png

Environment

- Windows 11
- Google Chrome
- https://prod-dev.ems-fitus.cloud/dashboard

Observation Date

2026-08-03

# Actual Behavior Observations

Observed:

- The user is authenticated.
- The Events page is active.
- A Spotlight Event section is displayed.
- A featured event includes an image, title, description, location, schedule and a "View details" action.
- A search box is available.
- Status filters (Upcoming, Ongoing, Ended) are visible.
- A Filters button with an active-filter counter is displayed.
- Selecting the Filters button expands an advanced filter panel.
- The expanded filter panel contains date, campus and registration availability controls.
- A collapsible category sidebar is present.
- The sidebar supports both expanded and collapsed modes.
- In collapsed mode, only navigation icons remain visible.
- Category groups can be expanded and collapsed.
- The sidebar is vertically scrollable.
- Multiple event cards are displayed in a grid layout.
- Event cards display registration quotas for different participant roles.
- Event cards display category and campus tags.
- Event cards include a Save action.
- Pagination controls are displayed at the bottom of the event list.
- A page-size selector is available.
- Floating action buttons are visible in the bottom-right corner.
- The page footer displays contact information, useful links and FIT-HCMUS branding.
- Language switching is available.
- Notification and profile icons are visible.

Not yet observed or verified:

- Loading state
- Empty search result
- Empty category
- Empty event list
- Error state
- Applying advanced filters
- Resetting filters
- Invalid date-range validation
- Search execution
- Save confirmation
- Registration flow
- Responsive behaviour
- Keyboard accessibility
- Screen-reader behaviour