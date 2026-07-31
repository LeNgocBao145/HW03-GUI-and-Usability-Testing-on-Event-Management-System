# REPORT

## Task 1 — GUI Checklist

**Scenario A** — **Admin creates and manages events**. Function group: the event lifecycle on 
the admin side.

- (A1) Events list with status filters and notification dots.

    ![alt text](screens/ScreenA1.png)

    ## Checklist Execution — ScreenA1

Totals: Evaluated 61 | Pass 52 | Fail 9 | N/A 0

| GUI No | Checkpoints | Status | Notes / Image |
| :--- | :--- | :---: | :--- |
| 1.01 | Do primary colors and color schemes comply with the Design System / Brand Guidelines? | PASS |  |
| 1.02 | Are font families, font sizes, and font weights consistent across the typography hierarchy (Heading, Subtitle, Body)? | PASS |  |
| 1.03 | Does color contrast between text and background meet accessibility standards (WCAG AA - minimum 4.5:1)? | PASS |  |
| 1.04 | Are margins, padding, and spacing between elements/components consistent throughout the interface? | PASS |  |
| 1.05 | Do icons share a consistent style (outline/filled), size, and visual meaning? | PASS |  |
| 1.06 | Is the system logo placed in the standard position (top-left corner) and linked back to the homepage? | PASS |  |
| 1.07 | Are spelling, grammar, and terminology accurate and consistent across the UI? | PASS |  |
| 1.08 | Does capitalization (title case, sentence case, button labels) follow the design specifications? | PASS |  |
| 1.09 | Are images and banners sharp, properly proportioned, and free from distortion or stretching across various screen resolutions? | PASS |  |
| 1.10 | Is the UI layout responsive and clean across standard screen sizes (Desktop, Tablet, Mobile) without broken layout? | PASS |  |
| 1.11 | Are buttons of the same type (Primary, Secondary, Danger, Disabled) visually and styled consistently? | PASS |  |
| 1.12 | Does Light/Dark Mode (if applicable) transition smoothly and display the correct color palette? | PASS |  |
| 1.13 | Does the interface support switching between English and Vietnamese (i18n) without breaking layout (text truncation, overflow, wrapping)? | PASS |  |
| 1.14 | Do interactive elements have proper ARIA labels / semantic roles and are correctly announced by screen readers? | PASS |  |
| 1.15 | Are tooltips, contextual help, or documentation links available for complex or unfamiliar features (Nielsen: Help & Documentation)? | FAIL | No tooltips or contextual help are provided for the filter funnel icons on the EVENT TYPES and TIME column headers, nor for the notification dot badges on events, leaving users without guidance on their function. |
| 2.01 | Does every input field have a clear, legible, and properly aligned label? | PASS |  |
| 2.02 | Are required fields clearly marked (e.g., red asterisk )? | PASS |  |
| 2.03 | Does the password mask function correctly, and is a show/hide password toggle available? | PASS |  |
| 2.04 | Does the email field validate correct email format (regex check) on blur or submit? | PASS |  |
| 2.05 | Do phone number / currency / age fields restrict input to numeric values and enforce length limits? | PASS |  |
| 2.06 | Do data fields validate minimum and maximum length limits (Min/Max length)? | PASS |  |
| 2.07 | Do text fields automatically trim leading and trailing whitespace? | PASS |  |
| 2.08 | Does the form sanitize/block malicious special characters (XSS/SQL injection) or display appropriate validation errors? | PASS |  |
| 2.09 | Are default values and placeholders in input fields/dropdowns meaningful and helpful? | FAIL | The search input inside the EVENT TYPES column filter dropdown displays "Search events..." as its placeholder — identical to the main page search bar. This is misleading: users are filtering by event category, not searching for events. The placeholder provides no contextual hint about what to type (e.g., "Search event types..." or "Filter by category..."). (Nielsen #4: Consistency and Standards). |
| 2.10 | Do dropdown select boxes display all options clearly and support search filtering for long lists? | PASS |  |
| 2.11 | Do checkboxes and radio buttons have a sufficiently large clickable area (including the label)? | PASS |  |
| 2.12 | Does the Tab key navigate through fields in a logical top-to-bottom, left-to-right order (Tab order)? | PASS |  |
| 2.13 | Does the file upload control validate file type and size limits, support drag-and-drop, and show upload progress? | PASS |  |
| 2.14 | Does the rich-text editor toolbar (bold, italic, list, link, image) work correctly and sanitize pasted content? | PASS |  |
| 2.15 | Are validation error messages placed directly next to/below the related field (not only in a toast or summary block)? | PASS |  |
| 3.01 | Is the navigation bar / header / sidebar displayed consistently across all pages? | PASS |  |
| 3.02 | Is the active menu item clearly highlighted so users know their current location? | PASS |  |
| 3.03 | Does the breadcrumb navigation accurately display hierarchy and allow clicking back to parent pages? | FAIL | No breadcrumb navigation is visible on the Events Management page. The page only shows the heading "Events" with no hierarchy link (e.g., "Dashboard > Events Management"), leaving users without context of their current location in the app. |
| 3.04 | Does the scrollbar appear only when content exceeds screen dimensions and scroll smoothly? | PASS |  |
| 3.05 | Does a 'Back to top' button appear when scrolling down and function correctly? | FAIL | No 'Back to top' button is visible on the Events Management page when scrolling down through a long list of events. |
| 3.06 | Does pagination or infinite scroll correctly display page numbers, total records, and navigate smoothly? | PASS |  |
| 3.07 | Are hyperlinks clearly identifiable (color change/underline on hover) and pointing to correct URLs? | PASS |  |
| 3.08 | Do external links open in a new tab (`target="blank"`) to avoid interrupting the user flow? | PASS |  |
| 3.09 | Is the search bar easily accessible, supporting autosuggestion and a clear-search button? | FAIL | The search bar on the Events Management page has no visible 'clear' (×) button to reset the search query. Users must manually select and delete text to clear the search. |
| 3.10 | Do browser Back/Forward buttons work as expected and preserve relevant page state? | PASS |  |
| 3.11 | Do pop-up modals / dialogs feature a close button (X), close on Esc key, or close on clicking the overlay? | PASS |  |
| 3.12 | Do tabs switch content correctly, clearly indicate the active tab, and preserve unsaved state when possible? | PASS |  |
| 3.13 | Does drag-and-drop reordering (lists, Kanban cards, etc.) work smoothly and persist the new order after page refresh? | PASS |  |
| 3.14 | Do deep links (direct URLs to a specific page/tab/filter) load the correct state, and is that state preserved on page reload? | PASS |  |
| 3.15 | Are table/list filter controls consolidated in a visible and immediately accessible location (e.g., a filter bar or panel above the table), rather than being scattered across scrollable column headers that require horizontal scrolling to discover? | FAIL | The Events Management table embeds filter controls (funnel icons) inside 7+ column headers (EVENT TYPES, PUBLIC, ACADEMIC CONTEXT, CAMPUS, LECTURERS, STUDENTS, TIME). Because the table is wider than the viewport, these controls are only reachable after horizontal scrolling. Users who do not scroll will not discover that ACADEMIC CONTEXT, CAMPUS, LECTURERS, STUDENTS filters exist at all. There is no consolidated filter panel that shows all available filters at once. |
| 3.16 | Do data table column headers support click-to-sort (ascending/descending) with a visible sort indicator (e.g., ▲▼ arrows), and does the sorted state persist during pagination? | FAIL | No column in the Events Management table is sortable. Column headers have no sort arrows, no hover affordance indicating they are clickable for sorting, and clicking them produces no action. Users cannot sort events by name, date, status, or any attribute — forcing them to scroll through all pages to find a specific record. |
| 4.02 | Does keyboard focus state (Tab key) show a distinct focus ring/outline on active elements? | FAIL | The Tab key focus ring on interactive elements (e.g., "All Status", "All Time" filter buttons) is very faint — only a thin, low-contrast border is shown. The focus indicator does not meet WCAG 2.1 SC 2.4.11 (Focus Appearance) which requires a minimum focus ring area and contrast, making keyboard navigation difficult for users with low vision. |
| 4.03 | Is the disabled state for buttons and inputs visually distinct (greyed out) and non-interactive? | PASS |  |
| 4.04 | Are loading indicators (spinners / skeleton screens) displayed immediately during data fetching or background tasks? | PASS |  |
| 4.05 | Are success toast notifications/alerts concise, clear, and automatically dismissed after 3-5 seconds? | PASS |  |
| 4.06 | Do error messages provide clear context, explain the cause, and guide the user on how to fix the issue? | PASS |  |
| 4.07 | Does an empty state (e.g., empty cart, no search results) show helpful graphics and a clear Call to Action (CTA)? | FAIL | When a search query returns no results, the table body is completely blank — no illustration, no explanatory message (e.g., "No events found"), and no CTA button (e.g., "Clear search" or "Create new event"). Users are left with an empty white table and no guidance. |
| 4.08 | Does an offline / network error state display a friendly message with a 'Retry' option? | PASS |  |
| 4.09 | Is a confirmation modal displayed prior to executing destructive/critical actions (Delete, Cancel Order, Log out)? | PASS |  |
| 4.10 | Do submit buttons prevent double-clicking / debouncing to avoid sending duplicate requests? | PASS |  |
| 4.11 | Does a progress bar display an accurate percentage for long-running operations (file uploads, import/export)? | PASS |  |
| 4.12 | Do badges/counters (notifications, cart count, unread items) update accurately and promptly? | PASS |  |
| 4.13 | Are status colors (e.g., green = success, red = error, yellow = warning) used consistently and meaningfully system-wide? | PASS |  |
| 4.14 | Do real-time updates (WebSocket/polling) reflect on screen without requiring a manual page refresh? | PASS |  |
| 4.15 | Is an "Undo" option available for a short grace period after reversible destructive actions (Shneiderman: easy reversal of actions)? | PASS |  |


- (A3) Registration & Roles configuration panel — Max Slots / Waitlist / additional role.

    ![alt text](screens/ScreenA3.png)    

- (A4) Review Students approval — status colours.

    ![alt text](screens/ScreenA4.png)

### Why AI Missed These Checklist Items

The following items were added to the shared checklist after being discovered through manual human inspection, because the AI model failed to flag them during its automated review. The root causes are explained below.

---

#### 3.15 — Filter controls scattered in column headers (not consolidated)

**Principle mapping:**
- **Nielsen #6 (Recognition rather than recall):** Users must be able to see all available filter options without scrolling; forcing users to scroll horizontally to discover hidden filters increases cognitive load.
- **Norman — Discoverability:** Controls must be visible and their affordance immediately clear. Filter buttons embedded beyond the viewport boundary are invisible by default.
- **Shneiderman Golden Rule #4 (Design dialogs to yield closure):** Grouping all filter controls together allows users to understand the complete set of available filters and act on them efficiently.

**IA dimension: IA-03 Navigation & Layout** — Filter access is a navigation/wayfinding concern: it determines how users move through a dataset to reach the records they need.

**Why AI missed it:**
The AI inspection prompt focused on evaluating individual, visible-on-load UI elements. It did not include an explicit instruction to *audit the holistic discoverability of all filter controls as a group*. The EMS Events Management table has an unusually wide column structure (14+ columns) that extends far beyond the default viewport — a characteristic specific to this interface that screenshot-based static analysis would miss. The AI evaluated only what was visible in each captured frame and did not reason about what interactive controls might be hidden off-screen. AI agents tend to overlook features that require multi-step scroll exploration to discover.

---

#### 3.16 — No column sorting in the data table

**Principle mapping:**
- **Nielsen #7 (Flexibility and efficiency of use):** Power users rely on sorting to quickly locate records without paging through all results.
- **Shneiderman Golden Rule #6 (Permit easy reversal of actions):** Toggling sort direction (ascending ↔ descending) must be predictable and immediately reversible via a second click.
- **Norman — Feedback:** No visual affordance (sort arrows, cursor change) on column headers means users cannot even *discover* that sorting is unavailable, leaving them no recourse.

**IA dimension: IA-03 Navigation & Layout** — Column sorting is a data-navigation mechanism that organises the user's view of information, functionally equivalent to pagination and filtering in how it helps users find specific records.

**Why AI missed it:**
Column sorting is a *missing feature* — there are no broken elements, error states, or visual anomalies to trigger detection. AI models performing visual screenshot analysis default to checking what **is present** rather than auditing for **absent-but-expected interactive affordances**. Sorting was also not listed in the original 59-item shared checklist, so the model received no explicit prompt signal to look for it. This reflects a characteristic blind spot: AI tends to overlook interactions that should exist but don't (sorting, drag-to-reorder, keyboard shortcuts, right-click context menus) unless the evaluation prompt explicitly enumerates them.

## Task 2 — User Testing with 5 Real Users

## Task 3 — Cross-Browser / Cross-Platform

| ID | Device Type | OS | Browser | Result | Notes | Screenshot |
| :---: | :---: | :---: | :---: | :--- | :--- | :---: |
| **C1** | Desktop | Windows 11 | Google Chrome | | | |
| **C2** | Desktop | macOS | Safari | | | |
| **C3** | Desktop | Windows 10 | Microsoft Edge | | | |
| **C4** | Tablet | iOS (iPadOS) | Firefox | | | |
| **C5** | Phone | Android | Samsung Internet | | | |


## Why this skill exists
Task 1B requires marking **every** item of a >40-item shared checklist as Passed/Failed
for **each** of ≥3 screens. Re-printing the full checklist (with reasoning) every time
is expensive and repetitive. This skill evaluates every item internally but only
**emits the FAILs** as a small JSON diff; a script then merges that diff onto a full
checklist template so nothing required by the grading rubric is lost.

Two optimizations are combined here — they are complementary, not alternatives:
- **Output-side (diff-only JSON):** cuts what the model has to *write* — this is the
  80–90% token saving, and it's fully under this skill's control.
- **Input-side (structural context):** the checklist text itself is parsed into
  `checklist_master.json` **once** and referenced by ID afterward, instead of being
  re-pasted into every prompt. Note: this is *not* the same thing as Anthropic API
  prompt caching (`cache_control` breakpoints) — that's a server-side API feature you
  cannot invoke from inside a chat/agent tool like Copilot. What you *can* control from
  here is simply "don't re-send text you already have on disk," which gets you most of
  the same benefit for free.

## REFERENCE

https://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/

https://blog.uxtweak.com/user-experience-questionnaire/