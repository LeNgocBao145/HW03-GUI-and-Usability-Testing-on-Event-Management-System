# Test recipes — per item (Mode · steps · P/F criteria)

Mode: 🤖 Auto (objective signal) · 🔧 Semi (tool stages/gathers, human judges) · 👤 Manual.
For 🤖/🔧 items the script id in **[brackets]** points to `scripts.md`.
Verdict is always the tester's (§12).

<!-- IA01 -->
## IA-01 — General UI standards

### IA01-01 grid/overflow — 🔧 [overflow]
Steps: set width 1366px, run **[overflow]** to detect elements wider than viewport. Then eyeball column alignment.
P: no horizontal overflow beyond borders + columns aligned. F: overflow / visibly misaligned blocks.

### IA01-02 spacing — 🔧 [spacing]
Steps: run **[spacing]** to dump padding/margin of main blocks. Judge whether they follow one system (4/8px grid).
P: consistent spacing scale. F: random ad-hoc gaps.

### IA01-03 typography — 🔧 [fonts]
Steps: run **[fonts]** to count distinct font-family / sizes. Judge hierarchy (heading vs body).
P: 1–2 font families, clear size hierarchy. F: many random fonts/sizes.

### IA01-04 color palette — 🔧 [colors]
Steps: run **[colors]** to list distinct colors + counts. Judge whether accents used in the right role, not overused.
P: coherent limited palette. F: color chaos / accent misused.

### IA01-05 contrast — 🔧 [contrast]
Steps: DevTools → inspect text → color picker shows **Contrast ratio** vs AA. Prefer picker over **[contrast]** script (script mis-parses `lab()`/`oklab()` — false fails). Check white-text-on-color buttons (Export/Add/pagination).
P: ≥4.5:1 normal text, ≥3:1 large. F: below threshold. NOTE known false positives.

### IA01-06 icon consistency — 👤
Steps: compare the same-function icon/button across ≥2 screens.
P: identical look/behavior. F: same function drawn differently.

### IA01-07 EN/VI switch — 🔧 [i18nkeys]
Steps: switch language; run **[i18nkeys]** to find raw keys (`something.key`) / untranslated. Eyeball mixed-language.
P: fully translated, no raw keys. F: raw key / mixed language.

### IA01-08 VI no breakage — 🔧 [overflow]
Steps: switch to VI, re-run **[overflow]**; look for clipped/overflowing labels & buttons.
P: layout holds. F: clip/overflow from longer VI strings.

### IA01-09 empty state — 👤
Steps: force an empty collection (search a non-matching string / filter to zero rows).
P: message + suggested action shown. F: blank/white area or broken grid.

### IA01-10 loading state — 👤
Steps: DevTools → Network → throttle Slow 3G, reload/trigger fetch.
P: skeleton/spinner shown. F: frozen blank with no indicator. (spinner-only still P.)

### IA01-11 locale format — 👤
Steps: read any date/number/currency.
P: locale-appropriate (dd/mm/yyyy etc.). F: wrong/mixed format.

### IA01-12 image ratio/alt — 🤖 [alt] + 👤
Steps: run **[alt]** to auto-list `<img>` missing alt (objective). Eyeball ratios (4:3 thumb, 24:9 banner) for distortion.
P: content images have alt + no distortion. F: missing alt / squashed image.

### IA01-13 responsive — 🔧 [overflow]
Steps: Device Toolbar → tablet & phone widths; re-run **[overflow]**; verify functions still reachable.
P: scales sensibly, functions usable (table may scroll-x). F: breakage / lost functions.

### IA01-14 table sort/sticky — 👤
Steps: click sortable headers; scroll a long list.
P: sorts correctly + header stays sticky + columns clear. F: no sort where expected / header scrolls away.

### IA01-15 table heavy data — 👤
Steps: enter very long text in a row; select multiple rows; view a zero-row table.
P: long text truncates/wraps cleanly, multi-select clear, empty state shown. F: layout break (e.g. avatar deforms), broken grid.

<!-- IA02 -->
## IA-02 — Forms

### IA02-01 label↔input — 🤖 [labels] + 👤
Steps: run **[labels]** to auto-list inputs with no associated `<label for>`/`aria-label` (objective). Confirm placeholders aren't used as the only label.
P: every field has a real label. F: input without label / placeholder-as-label.

### IA02-02 required marked — 🔧 [required]
Steps: run **[required]** to list `required` inputs; check each shows a visible `*`/"bắt buộc".
P: required fields visibly marked. F: required but no visual marker.

### IA02-03 validation constraints — 👤
Steps: enter invalid email / out-of-range number / bad length; submit.
P: correct constraint enforced. F: accepts invalid / wrong rule.

### IA02-04 error placement — 👤
Steps: trigger a field error.
P: message next to the failing field. F: all errors lumped top/bottom.

### IA02-05 error meaningful — 👤
Steps: read the error text.
P: human-readable + says how to fix. F: raw code / vague ("Failed to fetch", "Error 400").

### IA02-06 date/time validation — 👤
Steps: set start after end / a past timestamp.
P: blocked with clear message. F: accepts invalid range.

### IA02-07 image upload — 👤
Steps: upload wrong format/oversized, then a valid image.
P: validates + errors + preview on valid. F: no validation / no preview.

### IA02-08 rich-text editor — 👤
Steps: apply bold/list/link; save; reopen.
P: formatting applies + persists. F: buttons no-op / lost on save.

### IA02-09 input retained on fail — 👤
Steps: fill form, cause validation fail, submit.
P: entered data kept. F: form wiped.

### IA02-10 confirm/undo on leave — 👤
Steps: start editing, then close/navigate away / backdrop click.
P: confirm or undo offered before losing data. F: silent data loss.

### IA02-11 anti double-submit — 👤
Steps: submit and watch the button.
P: button disables/loads while submitting. F: clickable repeatedly → dupes.

### IA02-12 keyboard/focus in form — 🔧 [focusring]
Steps: Tab through fields (order), Enter to submit; run **[focusring]** to spot elements killing focus outline.
P: logical Tab order + Enter submits + visible focus. F: bad order / no focus ring / Enter broken.

### IA02-13 config defaults/constraints — 👤
Steps: inspect toggles (role, Max Slots, Waitlist); try invalid (Max Slots ≤ 0).
P: sane defaults + invalid blocked. F: bad default / accepts invalid.

<!-- IA03 -->
## IA-03 — Navigation

### IA03-01 menu/sidebar highlight — 👤
Steps: open each section; observe active-item highlight.
P: all items labeled + current highlighted. F: no active indicator / cryptic labels.

### IA03-02 breadcrumb — 👤
Steps: go one level deep; check breadcrumb reflects location + click a crumb to go back.
P: correct path + crumbs navigate. F: wrong/static crumbs. (NA if no breadcrumb in app.)

### IA03-03 tabs — 👤
Steps: click each tab.
P: correct content + active tab distinct. F: wrong content / active indistinct.

### IA03-04 back/return + context — 👤
Steps: set context (page 3 / filter), open item, hit Back (app + browser).
P: returns to right screen, filter/page kept. F: wrong screen / context reset.

### IA03-05 drag-reorder — 👤
Steps: drag a row/item to reorder.
P: smooth + drop cue + order persists. F: janky / no cue / not saved. (NA if none.)

### IA03-06 deep link — 🔧 [deeplink]
Steps: paste the target URL in a fresh tab + F5 (see **[deeplink]** notes; login redirect that returns to URL is OK).
P: URL returns correct content. F: forced to home/dashboard after auth.

### IA03-07 nav consistency — 👤
Steps: move across pages; watch menu/header/button positions.
P: stable positions. F: elements jump around.

### IA03-08 emergency exit — 👤
Steps: open dialog/multi-step; try Esc / Cancel / close.
P: clear exit works. F: trapped / no cancel.

### IA03-09 affordance hover/focus — 🔧 [cursorcheck] + 👤
Steps: hover buttons (cursor→pointer? color change?); run **[cursorcheck]** to list clickable elements missing `cursor:pointer`; Tab to see focus.
P: looks clickable + hover + focus. F: no pointer/hover/focus signals.

### IA03-10 pagination/scroll context — 👤
Steps: paginate/scroll, open detail, return.
P: works + context kept. F: resets to page 1 / top.

### IA03-11 keyboard nav — 🔧 [focusring] + 👤
Steps: Tab through whole target; check reach-all + logical order + visible focus; run **[focusring]**.
P: all reachable, order logical, focus visible. F: unreachable items / illogical order / no focus.

<!-- IA04 -->
## IA-04 — Feedback / State

> Almost every IA-04 item is *behaviour after an action*, so a script cannot judge it at paste
> time. `../scripts/ia04.js` covers the whole group in two phases: **Phase A** decides 05/06/07/08
> statically, **Phase B** arms a toast + `fetch` monitor and waits for you to act (01/02/09/10/11).
> Arm the monitor **before** you submit, or the evidence is gone.

### IA04-01 action feedback — 🔧 [feedbackmonitor]
Steps: arm the monitor, then perform save/create/delete/assign; watch for toast/message.
P: clear success/failure feedback (console prints `[TOAST #n]`). F: no feedback at all (0 toast lines after a *successful* action — confirm the action really succeeded first).

### IA04-02 toast duration — 🔧 [feedbackmonitor]
Steps: trigger a toast; read the `[TOAST gone] after X.Xs` line, and try to dismiss it manually.
P: ≥4s or dismissable. F: vanishes too fast (<3s and no close button). (NA if no toast at all → ref IA04-01.)

### IA04-03 destructive confirm — 🔧 [statuscolor] + 👤
Steps: the script lists every destructive-looking button it found (Delete/Block/Reset/Revoke…); click each.
P: confirm dialog stating consequences. F: acts immediately, no confirm. (NA if the script finds none — a form modal with only Save/Cancel.)

### IA04-04 confirm button clarity — 👤
Steps: inspect the confirm dialog buttons.
P: primary vs cancel distinct, dangerous action not the easy default. F: ambiguous / dangerous is default or auto-focused.

### IA04-05 badges — 🔧 [statuscolor] + 👤
Steps: the script counts badges/chips/counters; then change state that a badge counts and watch it update.
P: correct + updates. F: stale/wrong count. (NA if the script finds 0.)

### IA04-06 progress bar — 🔧 [statuscolor] + 👤
Steps: the script looks for `progress` / `[role=progressbar]`; if present, run an operation with progress (export/review).
P: reflects real progress. F: frozen / 0→100 jump. (NA if the script finds 0.)

### IA04-07 status colors — 🔧 [statuscolor]
Steps: run the script — it groups every status label by the colour pair it uses.
P: each label always uses one colour pair (script reports 0 clashes). F: the same label rendered in different colours. (NA if no status labels.)
Still human: confirm the *meaning* matches other screens (green = good everywhere, not green = danger here).

### IA04-08 not color alone — 🔧 [statuscolor]
Steps: run the script — it flags small coloured dots with no adjacent text and no `aria-label`/`title`.
P: text/icon accompanies colour (`colour-ONLY = 0`). F: colour-only indicators exist.
Limitation: SVG icons, `::before` pseudo-elements, and border-colour signals are invisible to the script — check those by eye.

### IA04-09 real-time — 🔧 [feedbackmonitor]
Steps: arm the monitor; do an action; after the `[RES] … 200` line, check the list/state updates without F5 (and 2-tab test if applicable).
P: auto-updates. F: needs manual F5.

### IA04-10 system error message — 🔧 [offline] + [feedbackmonitor]
Steps: load target online, then DevTools → Network → **Offline** (do NOT F5 — that shows Chrome's dino page, invalid). Trigger a server call (see **[offline]**).
P: friendly message + next step. F: raw error ("Failed to fetch") / frozen / silent. The monitor prints `[RAW ERROR SHOWN TO USER]` when a technical string reaches the DOM.

### IA04-11 state after action — 🔧 [feedbackmonitor]
Steps: perform an action that changes a visible value (publish, change role); compare the row afterwards.
P: list/detail reflects new data correctly. F: stale/wrong state.
