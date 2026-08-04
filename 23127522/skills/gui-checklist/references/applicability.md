# Applicability matrix — which items apply per target type

Legend: **✔** = test it · **NA** = pre-mark N/A with the standard reason below.
When an item is applicable but the widget genuinely doesn't exist on that specific screen, mark it NA at test time with a screen-specific reason.

## Matrix (page/modal × content, plus action-flow)

| Item | page-list | page-form | page-detail | modal-form | modal-confirm | action-flow | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IA01-01 grid/overflow | ✔ | ✔ | ✔ | ✔ | ✔ | NA | modal: check dialog box, not full page |
| IA01-02 spacing | ✔ | ✔ | ✔ | ✔ | ✔ | NA | |
| IA01-03 typography | ✔ | ✔ | ✔ | ✔ | ✔ | NA | |
| IA01-04 color palette | ✔ | ✔ | ✔ | ✔ | ✔ | NA | |
| IA01-05 contrast | ✔ | ✔ | ✔ | ✔ | ✔ | NA | |
| IA01-06 icon consistency | ✔ | ✔ | ✔ | ✔ | NA | NA | confirm dialog too small to judge cross-screen; action-flow has one control only |
| IA01-07 EN/VI switch | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | action-flow: the **artifact's** headers/content — no raw keys, diacritics intact |
| IA01-08 VI no breakage | ✔ | ✔ | ✔ | ✔ | ✔ | NA | |
| IA01-09 empty state | ✔ | NA | ✔ | NA | NA | ✔ | action-flow: filter to zero rows, then act — warn, or silently emit an empty artifact? |
| IA01-10 loading state | ✔ | ✔ | ✔ | ✔ | NA | ✔ | action-flow: throttle Slow 3G, then act |
| IA01-11 locale format | ✔ | ✔ | ✔ | ✔ | NA | ✔ | action-flow: dates/numbers **inside the artifact** vs on screen |
| IA01-12 image ratio/alt | ✔ | ✔ | ✔ | ✔ | NA | NA | only if images present |
| IA01-13 responsive | ✔ | ✔ | ✔ | ✔ | ✔ | NA | |
| IA01-14 table sort/sticky | ✔ | NA | NA | NA | NA | NA | data-table only |
| IA01-15 table heavy data | ✔ | NA | NA | NA | NA | NA | data-table only |
| IA02-01…10, 12, 13 forms | NA | ✔ | NA | ✔ | NA | NA | action-flow has no fields — unless it opens a config dialog (see below) |
| IA02-11 anti double-submit | NA | ✔ | NA | ✔ | NA | ✔ | action-flow: double-click the trigger — two artifacts / two requests? |
| IA03-01 menu/sidebar | ✔ | ✔ | ✔ | NA | NA | NA | modal has no sidebar |
| IA03-02 breadcrumb | ✔ | ✔ | ✔ | NA | NA | NA | modal/action-flow doesn't change route |
| IA03-03 tabs | ✔ | ✔ | ✔ | ✔ | NA | NA | only if the target has tabs |
| IA03-04 back/return | ✔ | ✔ | ✔ | NA | NA | NA | modal uses close, see IA03-08 |
| IA03-05 drag-reorder | ✔ | ✔ | ✔ | ✔ | NA | NA | only if reorder exists |
| IA03-06 deep link | ✔ | ✔ | ✔ | NA | NA | NA | modal/action-flow has no own URL |
| IA03-07 nav consistency | ✔ | ✔ | ✔ | NA | NA | NA | |
| IA03-08 emergency exit | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | action-flow: can a long-running operation be cancelled? |
| IA03-09 affordance hover/focus | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | action-flow: the trigger control itself |
| IA03-10 pagination/scroll ctx | ✔ | NA | ✔ | NA | NA | NA | list context only |
| IA03-11 keyboard nav | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | modal: also focus trap (see modal-extra); action-flow: reach + activate trigger by keyboard |
| IA04-01 action feedback | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | **the core item for action-flow** |
| IA04-02 toast duration | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | NA if no toast appears at all → ref IA04-01 |
| IA04-03 destructive confirm | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | NA for read-only flows (export/print); ✔ for destructive ones (bulk delete, revoke all) |
| IA04-04 confirm button clarity | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | pairs with IA04-03 — same NA rule |
| IA04-05 badges | ✔ | ✔ | ✔ | NA | NA | NA | only if badges present |
| IA04-06 progress bar | ✔ | ✔ | ✔ | ✔ | NA | ✔ | action-flow is where a progress bar is most expected |
| IA04-07 status colors | ✔ | ✔ | ✔ | ✔ | NA | ✔ | only if status shown |
| IA04-08 not color alone | ✔ | ✔ | ✔ | ✔ | NA | ✔ | pairs with IA04-07 |
| IA04-09 real-time | ✔ | ✔ | ✔ | ✔ | NA | ✔ | NA for read-only flows that change no state |
| IA04-10 system error msg | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | **the core item for action-flow** |
| IA04-11 state after action | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | action-flow: does the **artifact** match the data on screen? |

## The `action-flow` profile

Some targets are neither a page nor a modal. An **action-flow** is a single control on a host
screen that triggers an operation whose result lands **outside the UI** — Export to Excel,
Download PDF, Print, Send invitation emails, Bulk import. C4 (Export to Excel) is one.

Two naive scopings both fail:
- Grading only what's visible → ~44 NAs, a checklist run with no content.
- Grading the whole host page → copies the host screen's verdicts, i.e. fabricated evidence
  for a target you didn't separately test.

So scope an action-flow to three things and write the scope into the result file:
1. **The trigger control** and its states (affordance, keyboard reach, disable/loading, double-click).
2. **UI response during and after** the operation (progress, toast, error on failure — the IA-04 core).
3. **Fidelity of the artifact** to what's on screen (row count vs the current filter, column
   completeness, date/number locale, translated headers, no raw i18n keys).

Everything about the host page's layout and navigation is **NA with a scope reason**, because it
was already graded on the host screen's own run.

Testing notes specific to action-flow:
- **The artifact is the evidence.** Open the downloaded file and compare it against the screen.
  Record the on-screen count *before* acting so IA04-11 has something to compare to.
- **Offline test (IA04-10):** go Network → Offline and click the trigger — do **not** F5.
  A completely silent failure (no file, no message) is an F, and a worse one than a raw
  error string, because the user gets no signal that anything went wrong.
- **Client-side generation.** If the artifact is built in the browser (SheetJS etc.) there is no
  network request, so Offline proves nothing about the server path. `scripts/ia04.js` hooks
  `URL.createObjectURL` and prints `[FILE TAI VE] tao o CLIENT (Blob)` when this is the case.
- **If the flow opens a config dialog first** (date range, column picker), test that dialog as a
  separate `modal-form` target and let the full IA-02 suite apply there.

## Standard NA reasons (Vietnamese, for the Note column)
- Forms NA on list/detail: `Màn <X> không có form nhập liệu; test đầy đủ ở màn form`
- Data-table NA: `Màn <X> không phải data-table`
- Modal route NA (breadcrumb/deep-link/back/sidebar): `Modal không đổi route/không có URL riêng; điều hướng test ở màn cha`
- No-widget NA: `Màn <X> không có <widget>` (e.g. progress bar, badge, image)
- Toast duration when no toast: `Không có toast nào xuất hiện nên không đánh giá được thời lượng — xem IA04-01`
- **Action-flow scope NA:** `Đã đánh giá ở <màn cha>; ngoài phạm vi luồng <tên hành động>`
- **Action-flow no-form NA:** `Luồng <tên hành động> không có form nhập liệu — bấm là chạy ngay, không có dialog cấu hình`
