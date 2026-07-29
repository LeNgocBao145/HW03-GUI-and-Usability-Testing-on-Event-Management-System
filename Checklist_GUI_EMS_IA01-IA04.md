# Shared GUI Checklist — EMS (Event Management System)

**Scope:** Task 1 Part A (HW03). A reusable checklist for all four scenarios A–D, covering all four interface aspects **IA-01…IA-04**.
**Total items:** 48 (IA-01: 13 · IA-02: 13 · IA-03: 11 · IA-04: 11).

## How to use
- For each screen tested, mark every item **Passed (P)** / **Failed (F)** / **N/A** (not applicable to that screen).
- A **Failed** item must have a reason recorded in the **Notes** column and a screenshot attached.
- The **Source** column maps back to the origin heuristic: **N#** = Nielsen's 10 Usability Heuristics; **No#** = Norman's 6 principles (visibility, feedback, constraints, mapping, consistency, affordance); **S#** = Shneiderman's 8 Golden Rules; **WCAG** = accessibility criteria.

## Result table (template per screen)

| Item ID | P/F/NA | Notes (required if Failed) | Screenshot |
| --- | --- | --- | --- |
| IA01-01 |  |  |  |
| ... |  |  |  |

---

## IA-01 — General UI Standards
*(layout, alignment, typography, color, consistency, i18n EN/VI, empty/loading)*

| ID | Check item | Source |
| --- | --- | --- |
| IA01-01 | Consistent grid layout; blocks are evenly aligned, no misaligned columns, no overflow beyond borders at standard width (1366px). | No5, S1 |
| IA01-02 | Spacing (padding/margin) between elements is uniform, following one shared spacing system. | No5, S1 |
| IA01-03 | Consistent typography: font size, weight, line-height follow a heading/body hierarchy; no random mix of multiple fonts. | N4, S1 |
| IA01-04 | Consistent color palette; brand and accent colors used in their correct roles, not overused. | N4, No5 |
| IA01-05 | Text/background color contrast meets at least WCAG AA (4.5:1 for normal text, 3:1 for large text). | WCAG, N4 |
| IA01-06 | Icons and buttons with the same function look the same across all screens (consistency & standards). | N4, S1 |
| IA01-07 | EN/VI language switch works; all strings are translated, with no mixed-language text or raw translation keys (`i18n.key`). | N2 |
| IA01-08 | After switching to VI, the layout does not break due to longer strings (buttons, labels, headings are not clipped/overflowing). | N2, No5 |
| IA01-09 | **Empty** state shows a clear message + suggested action (e.g. "No events yet — Create a new event"), not just a blank screen. | N1, N10 |
| IA01-10 | **Loading** state has an indicator (skeleton/spinner); the user knows the system is working. | N1, No2 |
| IA01-11 | Dates, numbers, and currency display in a consistent, locale-appropriate format (e.g. dd/mm/yyyy dates). | N4, No5 |
| IA01-12 | Images (thumbnail 4:3, banner 24:9) keep their correct aspect ratio, not distorted/broken; content images have alt text. | WCAG, N8 |
| IA01-13 | Responsive UI: layout scales sensibly on desktop/tablet/phone, no breakage at breakpoints. | N8, No5 |

---

## IA-02 — Forms
*(label, validation, error placement, required fields, upload, rich-text editor)*

| ID | Check item | Source |
| --- | --- | --- |
| IA02-01 | Every input field has a clear **label** correctly associated with the input (placeholder is not used as a label). | N6, WCAG |
| IA02-02 | Required fields are clearly marked (a `*` or the word "required") before submit. | N1, No3 |
| IA02-03 | Validation checks the correct constraints (email format, numbers, length, valid dates). | N5, No3 |
| IA02-04 | Error messages appear **next to the failing field**, not just lumped in one place at the top/bottom of the form. | N1, N9 |
| IA02-05 | Error text is meaningful and states how to fix it (e.g. "End date must be after start date"), not a raw error code. | N9 |
| IA02-06 | Date/time validation: blocks a start date after the end date, blocks past timestamps when invalid. | N5, No3 |
| IA02-07 | Image upload (thumbnail/banner): validates format & size, reports errors on invalid input, and shows a preview when valid. | N1, N9 |
| IA02-08 | The rich-text editor works correctly: formatting buttons (bold, list, link…) take effect and content is saved/displayed correctly. | N7, No6 |
| IA02-09 | Input is retained when validation fails; the form is not wiped clean forcing re-entry. | N5, S6 |
| IA02-10 | Confirmation/undo is available when leaving an unfinished form or performing an action that destroys entered data. | N3, S6 |
| IA02-11 | The submit button is disabled or shows loading while submitting to prevent double-submit. | N1, No2 |
| IA02-12 | Keyboard navigation in the form follows the correct order (Tab), Enter submits sensibly, focus is clearly visible. | WCAG, S3 |
| IA02-13 | Config toggles (student/lecturer/guest, Max Slots, Waitlist) have clear defaults and valid constraints (e.g. Max Slots > 0). | No3, N5 |

---

## IA-03 — Navigation
*(menu, breadcrumb, tab, sidebar, drag-and-drop reorder, back/return button, deep link)*

| ID | Check item | Source |
| --- | --- | --- |
| IA03-01 | Menu/sidebar shows all items with understandable labels; the currently selected item is clearly **highlighted**. | N1, No1 |
| IA03-02 | Breadcrumb (if present) reflects the current location correctly and allows navigating back. | N1, No4 |
| IA03-03 | Tabs (e.g. Pending/Resolved, Draft/Publish) switch to the correct content; the active tab is clearly distinguished. | N1, No1 |
| IA03-04 | The **Back/Return** button returns to the correct previous screen, without losing data or jumping to the wrong context. | N3, S6 |
| IA03-05 | Drag-and-drop reorder (if present) works smoothly, gives a visual cue of the drop position, and saves the correct order. | No2, S2 |
| IA03-06 | **Deep link**: opening a specific event/page URL directly returns the correct content (does not force a redirect to the home page). | N7, No4 |
| IA03-07 | Navigation is consistent across pages: menu position, header, and action buttons do not move around. | N4, S1 |
| IA03-08 | Clear "emergency exit" is available: close a dialog, cancel an action, exit a multi-step flow. | N3 |
| IA03-09 | Navigation buttons/links have clear affordance (look clickable) and visible hover/focus states. | No6, S3 |
| IA03-10 | Pagination / scrolling of long lists works correctly; context is kept when returning from a detail page. | N7, S2 |
| IA03-11 | Keyboard navigation works throughout menu/tab/link; focus order is logical, with a skip-link where appropriate. | WCAG, S3 |

---

## IA-04 — Feedback / State
*(toast, badge, confirmation dialog, progress bar, status color, real-time)*

| ID | Check item | Source |
| --- | --- | --- |
| IA04-01 | After each action (save, delete, publish, assign role…) there is clear **feedback** (toast/message) reporting success/failure. | N1, No2 |
| IA04-02 | Toast/message stays long enough to read, or can be dismissed manually; it does not disappear too quickly. | N1 |
| IA04-03 | Destructive/irreversible actions (Delete, Block, Reset Password) have a **confirmation dialog** that states the consequences. | N5, S4 |
| IA04-04 | The confirmation dialog clearly distinguishes the primary action button from cancel; the dangerous button is not the easy-to-mis-click default. | N5, No3 |
| IA04-05 | **Badges** (notification dot, counts, tab count) show the correct figures and update when state changes. | N1, No1 |
| IA04-06 | **Progress bar** (participant review, export…) reflects real progress accurately, not frozen nor jumping 0→100. | N1, No2 |
| IA04-07 | **Status colors** are consistent and meaningful (e.g. green = active/resolved, red = blocked/failed, yellow = pending). | N4, No5 |
| IA04-08 | Color is not the only way status is conveyed — text/icon is included so colorblind users can still distinguish it. | WCAG, N4 |
| IA04-09 | **Real-time** updates (check-in log, request status) reflect accurately and promptly, without a manual F5. | N1, No2 |
| IA04-10 | System error messages (network loss, timeout, 500) are shown in a friendly way and suggest the next step. | N9 |
| IA04-11 | State after an action reflects the correct data (e.g. after Publish, the event moves to the correct status in the list). | N1, No2 |

---

## References (attach on submission)
- Nielsen, J. *10 Usability Heuristics for User Interface Design* (N1–N10).
- Norman, D. *The Design of Everyday Things* — 6 principles (visibility, feedback, constraints, mapping, consistency, affordance).
- Shneiderman, B. *Eight Golden Rules of Interface Design* (S1–S8).
- WCAG 2.1 (AA) — color contrast, alt text, keyboard navigation, not relying on color alone.
- Course slides: *GUI + Usability + Compatibility Testing (AI-First, Combined).*

## Notes on items AI commonly misses (team additions)
The following items typically do not appear in raw AI output and were added by the team — state the reason on submission:
- **Accessibility / WCAG** (IA01-05, IA01-12, IA02-12, IA03-11, IA04-08): AI tends to focus on "visible" UI and skip contrast, alt text, and keyboard nav.
- **i18n EN/VI layout breakage** (IA01-08): AI generates a generic "multi-language support" item and rarely catches overflow/clipping when VI strings are longer — specific to bilingual EMS.
- **Not relying on color alone** (IA04-08): usually folded into "status colors" without a separate requirement for colorblind users.
- **EMS-specific** (IA01-12 the 4:3/24:9 ratios, IA02-13 Max Slots/Waitlist, IA04-09 real-time check-in log): AI does not know EMS-specific constraints unless given the interface context.
