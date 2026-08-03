# GUI Testing Checklist

**GUI ID:** 01

**GUI Name:** Comprehensive GUI Testing Checklist

**GUI Detail:** Comprehensive User Interface testing checklist covering 4 key aspects: General UI Standards, Forms & Inputs, Navigation & Layout, and Feedback & State

---

| GUI No | Checkpoints | Passed | Failed | Notes |
| :--- | :--- | :---: | :---: | :--- |
| **1.00** | **IA-01: GENERAL UI STANDARDS** | | | |
| 1.01 | Do primary colors and color schemes comply with the Design System / Brand Guidelines? | | | |
| 1.02 | Are font families, font sizes, and font weights consistent across the typography hierarchy (Heading, Subtitle, Body)? | | | |
| 1.03 | Does color contrast between text and background meet accessibility standards (WCAG AA - minimum 4.5:1)? | | | |
| 1.04 | Are margins, padding, and spacing between elements/components consistent throughout the interface? | | | |
| 1.05 | Do icons share a consistent style (outline/filled), size, and visual meaning? | | | |
| 1.06 | Is the system logo placed in the standard position (top-left corner) and linked back to the homepage? | | | |
| 1.07 | Are spelling, grammar, and terminology accurate and consistent across the UI? | | | |
| 1.08 | Does capitalization (title case, sentence case, button labels) follow the design specifications? | | | |
| 1.09 | Are images and banners sharp, properly proportioned, and free from distortion or stretching across various screen resolutions? | | | |
| 1.10 | Is the UI layout responsive and clean across standard screen sizes (Desktop, Tablet, Mobile) without broken layout? | | | |
| 1.11 | Are buttons of the same type (Primary, Secondary, Danger, Disabled) visually and styled consistently? | | | |
| 1.12 | Does Light/Dark Mode (if applicable) transition smoothly and display the correct color palette? | | | |
| 1.13 | Does the interface support switching between English and Vietnamese (i18n) without breaking layout (text truncation, overflow, wrapping)? | | | |
| 1.14 | Do interactive elements have proper ARIA labels / semantic roles and are correctly announced by screen readers? | | | |
| 1.15 | Are tooltips, contextual help, or documentation links available for complex or unfamiliar features (Nielsen: Help & Documentation)? | | | |
| **2.00** | **IA-02: FORMS & INPUTS** | | | |
| 2.01 | Does every input field have a clear, legible, and properly aligned label? | | | |
| 2.02 | Are required fields clearly marked (e.g., red asterisk *)? | | | |
| 2.03 | Does the password mask function correctly, and is a show/hide password toggle available? | | | |
| 2.04 | Does the email field validate correct email format (regex check) on blur or submit? | | | |
| 2.05 | Do phone number / currency / age fields restrict input to numeric values and enforce length limits? | | | |
| 2.06 | Do data fields validate minimum and maximum length limits (Min/Max length)? | | | |
| 2.07 | Do text fields automatically trim leading and trailing whitespace? | | | |
| 2.08 | Does the form sanitize/block malicious special characters (XSS/SQL injection) or display appropriate validation errors? | | | |
| 2.09 | Are default values and placeholders in input fields/dropdowns meaningful and helpful? | | | |
| 2.10 | Do dropdown select boxes display all options clearly and support search filtering for long lists? | | | |
| 2.11 | Do checkboxes and radio buttons have a sufficiently large clickable area (including the label)? | | | |
| 2.12 | Does the Tab key navigate through fields in a logical top-to-bottom, left-to-right order (Tab order)? | | | |
| 2.13 | Does the file upload control validate file type and size limits, support drag-and-drop, and show upload progress? | | | |
| 2.14 | Does the rich-text editor toolbar (bold, italic, list, link, image) work correctly and sanitize pasted content? | | | |
| 2.15 | Are validation error messages placed directly next to/below the related field (not only in a toast or summary block)? | | | |
| **3.00** | **IA-03: NAVIGATION & LAYOUT** | | | |
| 3.01 | Is the navigation bar / header / sidebar displayed consistently across all pages? | | | |
| 3.02 | Is the active menu item clearly highlighted so users know their current location? | | | |
| 3.03 | Does the breadcrumb navigation accurately display hierarchy and allow clicking back to parent pages? | | | |
| 3.04 | Does the scrollbar appear only when content exceeds screen dimensions and scroll smoothly? | | | |
| 3.05 | Does a 'Back to top' button appear when scrolling down and function correctly? | | | |
| 3.06 | Does pagination or infinite scroll correctly display page numbers, total records, and navigate smoothly? | | | |
| 3.07 | Are hyperlinks clearly identifiable (color change/underline on hover) and pointing to correct URLs? | | | |
| 3.08 | Do external links open in a new tab (`target="_blank"`) to avoid interrupting the user flow? | | | |
| 3.09 | Is the search bar easily accessible, supporting autosuggestion and a clear-search button? | | | |
| 3.10 | Do browser Back/Forward buttons work as expected and preserve relevant page state? | | | |
| 3.11 | Do pop-up modals / dialogs feature a close button (X), close on Esc key, or close on clicking the overlay? | | | |
| 3.12 | Do tabs switch content correctly, clearly indicate the active tab, and preserve unsaved state when possible? | | | |
| 3.13 | Does drag-and-drop reordering (lists, Kanban cards, etc.) work smoothly and persist the new order after page refresh? | | | |
| 3.14 | Do deep links (direct URLs to a specific page/tab/filter) load the correct state, and is that state preserved on page reload? | | | |
| 3.15 | Are table/list filter controls consolidated in a visible and immediately accessible location (e.g., a filter bar or panel above the table), rather than being scattered across scrollable column headers that require horizontal scrolling to discover? | | | |
| 3.16 | Do data table column headers support click-to-sort (ascending/descending) with a visible sort indicator (e.g., ▲▼ arrows), and does the sorted state persist during pagination? | | | |
| **4.00** | **IA-04: FEEDBACK & STATE** | | | |
| 4.01 | Do hover states on buttons, links, and cards provide clear visual feedback? | | | |
| 4.02 | Does keyboard focus state (Tab key) show a distinct focus ring/outline on active elements? | | | |
| 4.03 | Is the disabled state for buttons and inputs visually distinct (greyed out) and non-interactive? | | | |
| 4.04 | Are loading indicators (spinners / skeleton screens) displayed immediately during data fetching or background tasks? | | | |
| 4.05 | Are success toast notifications/alerts concise, clear, and automatically dismissed after 3-5 seconds? | | | |
| 4.06 | Do error messages provide clear context, explain the cause, and guide the user on how to fix the issue? | | | |
| 4.07 | Does an empty state (e.g., empty cart, no search results) show helpful graphics and a clear Call to Action (CTA)? | | | |
| 4.08 | Does an offline / network error state display a friendly message with a 'Retry' option? | | | |
| 4.09 | Is a confirmation modal displayed prior to executing destructive/critical actions (Delete, Cancel Order, Log out)? | | | |
| 4.10 | Do submit buttons prevent double-clicking / debouncing to avoid sending duplicate requests? | | | |
| 4.11 | Does a progress bar display an accurate percentage for long-running operations (file uploads, import/export)? | | | |
| 4.12 | Do badges/counters (notifications, cart count, unread items) update accurately and promptly? | | | |
| 4.13 | Are status colors (e.g., green = success, red = error, yellow = warning) used consistently and meaningfully system-wide? | | | |
| 4.14 | Do real-time updates (WebSocket/polling) reflect on screen without requiring a manual page refresh? | | | |
| 4.15 | Is an "Undo" option available for a short grace period after reversible destructive actions (Shneiderman: easy reversal of actions)? | | | |

## References

1. Nielsen, J. (1994). 10 Usability Heuristics for User Interface Design. Nielsen Norman Group.

    - Link: https://www.nngroup.com/articles/ten-usability-heuristics/

2. Norman, D. (2013). The Design of Everyday Things: Revised and Expanded Edition. Basic Books.

    - Link: https://jnd.org/the-design-of-everyday-things-revised-and-expanded-edition/

3. Shneiderman, B., Plaisant, C., Cohen, M., Jacobs, S., Elmqvist, N., & Diakopoulos, N. (2016). Designing the User Interface: Strategies for Effective Human-Computer Interaction (6th Edition). Pearson.

    - Link: https://www.cs.umd.edu/users/ben/goldenrules.html

4. HCMUS Faculty of Information Technology. S13_GUI Testing & Usability Testing.pdf (CSC13003 Software Testing).  
    - Slide Reference Details:

        - Slide 11–14: Common GUI Bugs (Validation, Mandatory fields, Focus order, Data Currency, Synchronization).

        - Slide 16: Low Level - Checklist Testing (Layout, Alignment, Typography, Colors, Labels).

        - Slide 17–18: Navigation Testing (Menus, Breadcrumbs, Links, Form Navigation).

        - Slide 26: Challenges in GUI Testing (Localization & Internationalization).