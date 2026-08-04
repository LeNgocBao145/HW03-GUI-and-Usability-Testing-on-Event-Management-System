# Modal extra checks — mapped onto existing item IDs

Modals get extra scrutiny, but **no new item IDs**. The 50-item schema stays fixed; each modal-specific check folds into an existing item's verdict and Note.

Start with **[modalaudit]** in `scripts.md` (run it while the modal is open) — it reports semantics, focus trap, scroll lock, and fit in one table. Then do the manual checks below.

| Modal check | Folds into | Mode | How to test | F signal |
| --- | --- | --- | --- | --- |
| **Focus trap** — Tab cycles inside the modal, never escapes to the page behind | IA03-11 (and IA02-12 for forms) | 🔧 [modalaudit] + 👤 | Open modal, press Tab past the last control | Focus jumps to sidebar/table behind the overlay |
| **Esc closes** | IA03-08 | 👤 | Press Esc | Nothing happens / modal trapped |
| **Backdrop click doesn't silently discard input** | IA02-10 (+ IA03-08) | 👤 | Type into a field, click the dim area outside | Modal closes and typed data lost without any confirm |
| **Focus restored to trigger on close** | IA03-11 | 👤 | Note which button opened it; close; press Tab once | Focus lands at page top / nowhere (keyboard user loses place) |
| **Background scroll locked** | IA01-01 | 🔧 [modalaudit] | Scroll wheel while modal open | Page behind scrolls under the overlay |
| **Modal fits viewport / scrolls internally** | IA01-01, IA01-13 | 🔧 [modalaudit] | Check at 1366px and phone width | Modal taller/wider than screen with buttons unreachable |
| **Dialog semantics** (`role="dialog"`, `aria-modal`, accessible name) | IA03-11 | 🔧 [modalaudit] | Read the audit table | No role/aria-modal/label → screen readers can't announce it |
| **Close affordances present** (X + Cancel) | IA03-08, IA03-09 | 👤 | Look for both X and Cancel | Only one ambiguous way out |
| **Destructive confirm wording + button order** | IA04-03, IA04-04 | 👤 | Trigger Delete/Block | Consequences not stated, or dangerous button is the default/primary position |
| **Error inside modal stays visible & near the field** | IA02-04, IA04-10 | 👤 | Cause a validation error and a network error | Error only in console, or raw text like `Failed to fetch` |
| **Submit disabled while saving** | IA02-11 | 👤 | Click save and watch the button | Repeated clicks fire duplicate requests |

## Notes for the runner
- For `modal-confirm` targets, **IA04-03 and IA04-04 are the point of the test** — spend the most effort there.
- If the modal has its own URL (some apps route modals), then IA03-06 deep link becomes **applicable** instead of NA — verify by checking whether the address bar changed when the modal opened.
- Record modal findings in the Note of the mapped item, prefixed so the cause is traceable, e.g.
  `Modal: Tab thoát ra ngoài modal (thiếu focus trap)` on IA03-11.
