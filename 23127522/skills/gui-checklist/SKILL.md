---
name: gui-checklist
description: Run the shared EMS GUI checklist (IA-01…IA-04, 50 items) against any screen or modal. Selects the applicable item profile by target type, guides tester through auto/semi/manual checks, and fills Task1B + Bug Log in the required format. Use when testing an EMS screen for HW03/HW04 usability.
---

# GUI Checklist Runner (EMS — IA-01…IA-04)

Run one usability test session for **one target** (a screen or a modal) using the shared 50-item checklist, then record the results.

## HARD RULE (HW03 §12) — read first
Execution evidence (P/F/NA verdicts) is the **tester's own work**. This skill **never invents or guesses a verdict**, for any mode — not even 🤖 Auto items. For every item the skill:
1. Runs the tool/script or gives the manual steps.
2. Presents the **objective signal** (script output, DevTools reading) or the observation criteria.
3. **Asks the human tester** for the verdict, or records the verdict the tester states.

If the tester has not observed an item, leave it **blank** — do not fill it.

## Inputs to collect before running
- **Screen code** (e.g. `C1`, `C2`, `C4`) and human name.
- **Target type** — two axes:
  - Container: `page` | `modal`
  - Content: `list` | `form` | `detail` | `confirm`
  - Common combos: `page-list`, `page-form`, `page-detail`, `modal-form`, `modal-confirm`.
  - Plus `action-flow` — a single trigger control whose result lands **outside** the UI
    (Export to Excel, Download PDF, Print, bulk send). Neither a page nor a modal; scope it to
    the trigger + the UI response + the fidelity of the produced artifact. See `applicability.md`.
- **Live URL** of the target.
- Where to write results (default: `23127522/Task1B_Checklist_Run_ScenarioC.md`).

## Procedure
1. **Resolve the profile.** Read `references/applicability.md`, find the target type, get the list of which of the 50 items are `applicable` vs pre-`NA` for this type. Pre-NA items get `NA` + the standard reason from that file.
2. **If the target is a modal**, also read `references/modal-extra-checks.md` — apply the modal sub-checks onto their mapped item IDs (focus trap, Esc-close, backdrop, focus restore, scroll-lock).
3. **Walk applicable items in ID order.** Fastest path: run the four batch scripts
   (`scripts/ia01.js` … `ia04.js`) and work through their verdict lines. For any item the
   script marks `?`, read its row in `references/test-recipes.md` to get:
   - **Mode**: 🤖 Auto · 🔧 Semi · 👤 Manual
   - the test steps / P/F criteria.
   - For 🤖/🔧 items, pull the matching snippet from `references/scripts.md`, present it for the tester to run, and show them how to read the output.
   - For 👤 items, give the interaction script and the pass/fail criteria.
4. **Record the verdict the tester gives** (P/F/NA) into the result table using `references/output-format.md`.
5. **On every F**: require a Note (reason), prompt the tester to save a screenshot as `bugs/<SCREEN>_<ITEMID>.png`, and add a row to `23127522/Bug_Usability_Findings_Log.md` per the output format. Remind them to submit the Google Form and record the submit time.
6. **Update the summary table** (P/F/NA counts per screen) at the end of the Task1B file.

## Batch runner scripts (fastest path)
Instead of pasting snippets one item at a time, run one script per IA group. Each prints
a **per-item verdict line** (`=> IA0X-YY : P/F/NA/? — reason`), a `console.table` summary,
a list of the F items, and ready-to-paste Task1B rows. `?` means *the script cannot decide —
the tester must observe*; it is never written to the file as a verdict.

| Script | Covers | When to run |
|---|---|---|
| `scripts/ia01.js` | IA01-01…15 (general UI) | any target; auto-scopes to the open modal if there is one |
| `scripts/ia02.js` | IA02-01…13 (forms) | any target; emits all-NA if the target has no fields |
| `scripts/ia03.js` | IA03-01…11 (navigation) | any target; pre-NAs nav items when scope is a modal |
| `scripts/ia04.js` | IA04-01…11 (feedback & state) | any target — **see the two-phase note below** |
| `scripts/c02.js` | all four IAs, tuned for the C2 Edit-user modal | example of a screen-specific composite |

**IA-04 is two-phase and different from the others.** Feedback/state can only be observed
*after* an action, so `ia04.js`:
- **Phase A (static, on paste)** — decides IA04-05/06/07/08 and lists destructive buttons for 03/04.
- **Phase B (monitor, stays running)** — hooks `MutationObserver` + `window.fetch`, then waits.
  The tester must now **act for real** (submit, go Offline and submit, click a destructive
  button). The console prints `[TOAST #n]`, `[TOAST bien mat] sau X.Xs`, `[REQ]/[RES]`, and
  `[LOI THO HIEN CHO USER]`. These lines are the evidence for IA04-01/02/09/10/11.
- Run `__ia04stop()` when done — it un-hooks `fetch`, restores the observer, and reprints the summary.
- Because it patches `window.fetch`, **always call `__ia04stop()` before leaving the page**;
  re-pasting the script auto-stops a previous monitor first.

Scope detection in all scripts: `document.querySelector('[role=dialog],[aria-modal=true],dialog[open]')`
— if a modal is open they audit the modal, otherwise the whole page. Open the modal *before* pasting.

## Mode legend
- 🤖 **Auto** — a script/DevTools gives an objective true/false or number; tester records it. (2 items)
- 🔧 **Semi** — a script/DevTools stages the condition or gathers data; **the human judges**. (23 items)
- 👤 **Manual** — pure interaction + human eye; no script substitute. (25 items)

Per group (counted from `test-recipes.md`, not estimated):

| Group | 🤖 Auto | 🔧 Semi | 👤 Manual | Total |
|---|---|---|---|---|
| IA-01 general UI | 1 | 8 | 6 | 15 |
| IA-02 forms | 1 | 2 | 10 | 13 |
| IA-03 navigation | 0 | 3 | 8 | 11 |
| IA-04 feedback/state | 0 | 10 | 1 | 11 |
| **All** | **2** | **23** | **25** | **50** |

Note IA-04's shape: 10 of 11 items are 🔧, but the "semi" part is only *instrumentation* —
the monitor records what happened, the tester still has to perform the action. No IA-04 item
can be settled without touching the app.

## Reference files
- `references/applicability.md` — which items apply per target type; standard NA reasons.
- `references/test-recipes.md` — per-item Mode + steps + P/F criteria (all 50).
- `references/scripts.md` — copy-paste console scripts & DevTools steps, grouped by IA item.
- `scripts/ia01.js`, `ia02.js`, `ia03.js`, `ia04.js` — batch runners, one per IA group (see above).
- `scripts/c02.js` — composite runner for the C2 Edit-user modal.
- `references/modal-extra-checks.md` — modal-only checks mapped to existing item IDs.
- `references/output-format.md` — exact Task1B row, Bug Log row, and screenshot naming.

## Do / Don't
- ✅ Present script output verbatim; explain how to read it.
- ✅ Flag known false positives (e.g. contrast script mis-parses `lab()`/`oklab()`).
- ✅ Keep the 50-item schema fixed; modal checks map onto existing IDs, never new IDs.
- ❌ Never write a P/F/NA the tester did not state.
- ❌ Never mark an item F without a Note + screenshot path + Bug Log row.
