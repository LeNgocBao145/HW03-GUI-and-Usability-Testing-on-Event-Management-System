# Prompt Logs — HW03/HW04 GUI & Usability Testing on EMS

Student name: Ong Khánh Vinh
Student ID: 23127522
Class: 23KTPM1
Assignment: HW03/HW04 — GUI & Usability Testing on EMS (Scenario C — Admin user management)
AI tool used: Claude Opus 5 in Claude Code (VSCode extension)
Timezone: Asia/Saigon, UTC+07:00
Target under test: https://prod-dev.ems-fitus.cloud/dashboard/admin/users

## Timestamp Note

The exact chat timestamp for each user message is not exposed inside this Claude Code workspace. The log below preserves the chronological order of the interaction and uses Git commit timestamps, screenshot file mtimes, and script file mtimes as anchors. Times marked "session order" are reconstructed from conversation order rather than from a raw chat export. The session ran across two working days (2026-07-28/29 setup, 2026-08-04 execution) and was compacted once when it exceeded the context window, so entries 1–7 are reconstructed from the session summary plus the artifacts they produced, while entries 8–15 come from the live transcript.

## Scope Note (HW03 §12)

Every P/F/NA verdict in `Task1B_Checklist_Run_ScenarioC.md` was observed and stated by the student on the live EMS app. The AI's role was limited to: building the reusable checklist runner, generating instrumentation scripts, presenting objective script output, and transcribing the student's stated verdicts into the required format. Where the student had not yet observed an item, the AI left the cell **blank** rather than filling it — visible in the 2 C4 items still open at the end of this log. Any prompt where the AI was asked to "pass the rest" was answered only for items the student had confirmed observing.

## Chronological Prompt Log

| No. | Date and time | Prompt summary | AI output summary | Evidence / files |
| ---: | --- | --- | --- | --- |
| 1 | 2026-07-28 14:08 | Initialise the HW04 working folder and start the shared GUI checklist. | Scaffolded the folder structure and the deliverable stubs for Scenario C. | commit `04ea691` |
| 2 | 2026-07-29 07:56 | Build the shared IA-01…IA-04 GUI checklist covering general UI, forms, navigation, and feedback/state. | Produced the 50-item checklist (IA-01: 15, IA-02: 13, IA-03: 11, IA-04: 11) mapped to Nielsen N1–N10, Norman No1–No6, Shneiderman S1–S8, and WCAG 2.1 AA. | `Checklist_GUI_EMS_IA01-IA04.md`, commit `0dbba0f` |
| 3 | 2026-07-29, session order | Package the checklist run as a reusable skill instead of re-deriving the procedure per screen. | Created the `gui-checklist` skill: `SKILL.md` (run procedure, §12 guardrail, target-type profiles) plus `applicability.md`, `test-recipes.md`, `scripts.md`, `modal-extra-checks.md`, `output-format.md`. | `.claude/skills/gui-checklist/` |
| 4 | 2026-08-04, session order | Run the checklist on C1 (Users list) and record findings. | Walked all 50 items with DevTools/console evidence; student's verdicts recorded as 31 P / 4 F / 15 NA. Logged findings 001 (avatar deformed), 002 (missing `cursor:pointer`), 003 (no success toast). | `Task1B_Checklist_Run_ScenarioC.md` C1 section; `bugs/C01_IA01-15.png` (01:21), `bugs/C01_IA03-09.png` (15:14), `bugs/C02_IA04-10.png` (15:55) |
| 5 | 2026-08-04, session order | Make the batch scripts emit a per-item verdict line instead of raw dumps, so a run is faster to read. | Rewrote `ia01.js`, `ia02.js`, `ia03.js` to print `=> IA0X-YY : P/F/NA/? — reason`, a `console.table` summary, an F list, and ready-to-paste Task1B rows. `?` explicitly means "the script cannot decide — the tester must observe". | `scripts/ia01.js`, `ia02.js`, `ia03.js` (mtime 18:49) |
| 6 | 2026-08-04, session order | Run the checklist on C2 (Assign Role / edit-user modal). | Built `c02.js`, a composite runner tuned for the modal; student's verdicts recorded as 22 P / 7 F / 21 NA. Logged findings 004–009: raw "Failed to fetch", long-text overflow, unmarked required fields, silent data loss on close, swapped placeholders, modal missing accessible name. | `Task1B` C2 section; `scripts/c02.js` (17:17); `bugs/C02_*.png` (17:54–18:43) |
| 7 | 2026-08-04, session order | Finish the last two blank C2 items and log the focus-trap defect. | IA02-12 = P (no positive `tabindex`, Enter submits correctly). IA03-11 = F: Tab past "Lưu thay đổi" escapes to the sidebar; background not covered by `inert`/`aria-hidden`, 37 focusable elements still exposed. Added finding 010 (sev 3). | `Bug_Usability_Findings_Log.md` finding 010 |
| 8 | 2026-08-04, session order | "Không có toast, 02 thì NA như C01 / 07: Trạng thái nhất quán" — report the remaining C2 IA-04 observations. | Recorded IA04-01 = F (no toast after save, same defect as C1), IA04-02 = NA (no toast exists to time), IA04-07 = P (status colours consistent). | `Task1B` C2 section |
| 9 | 2026-08-04, session order | "IA04 pass hết các số còn lại" — pass the remaining IA-04 items. | Filled IA04-08/09/11 = P for C2, limited to the items the student had confirmed observing. | `Task1B` C2 section |
| 10 | 2026-08-04, session order | "trong skill của bạn thì chưa có ia04, tôi không biết tại sao?" — why is there no ia04 script? | A correct catch. Root cause: IA-04 logic had been written inline in `c02.js` and never extracted, and `SKILL.md` had never referenced any batch script at all. Built `ia04.js` as a deliberately **two-phase** runner (Phase A decides 05/06/07/08 statically; Phase B arms a toast + `fetch` monitor and waits for the tester to act), then wired all five scripts into `SKILL.md` and corrected the mode counts from estimates to the verified 2 Auto / 23 Semi / 25 Manual. | `scripts/ia04.js` (mtime 20:01); `SKILL.md` "Batch runner scripts"; `scripts.md` `[statuscolor]` + `[feedbackmonitor]` sections |
| 11 | 2026-08-04, session order | "ở C04 thì tôi phải làm như thế nào khi trên web thì nó chỉ có một nút export, trên xlsx thì mới có thông tin" — how do I test C4 when the page has one button and the data is in the downloaded file? | Diagnosed C4 as an **action flow**, not a screen — no existing target-type profile fitted it. Explained why both naive scopings fail (grading only what's visible → ~44 empty NAs; grading the whole host page → copying C1's verdicts, i.e. fabricated evidence). Proposed scoping C4 to the trigger control, the UI response, and the fidelity of the produced `.xlsx`, and wrote that scope statement into the deliverable. | `Task1B` C4 scope header |
| 12 | 2026-08-04, session order | Report C4 observations and paste the `ia04.js` console output for interpretation. | Reading the pasted output revealed a **real bug in the AI's own script**: the log showed `[NET] 201 [object Request]` but zero `[REQ]/[RES]` lines, because the app calls `fetch(new Request(url,{method}))`, leaving `a[1]` undefined, so a POST was misread as GET and suppressed. Fixed with a `reqInfo()` helper and hardened the monitor across three transport paths (`fetch`/`Request`, `XMLHttpRequest`, client-side `URL.createObjectURL` Blob). Also traced stray `[NET]` noise to a leftover `c02.js` run and advised F5 before re-running. | `scripts/ia04.js` `reqInfo()`; Node unit test of 4 call shapes |
| 13 | 2026-08-04 20:16 | Fill the C4 rows from the reported observations. | Filled 44 rows: IA01-07 = P (readable `.xlsx` headers, no raw i18n keys, diacritics intact), IA01-11 = P, IA04-07/08 = P, IA04-01 = F (no toast), IA04-10 = F (offline export fails with no file and no message), plus scope-based NAs. Added findings 011–013 and the `action-flow` profile to `applicability.md`/`SKILL.md`. Left 6 items blank and asked the student to disambiguate three unclear notes rather than guessing. | commit `12cd879`; `bugs/C04_IA04-01.png` (20:33), `bugs/C04_IA04-10.png` (20:35) |
| 14 | 2026-08-04 20:59 | "11 --> Đổi thành Pass" — IA04-11 is a Pass after retest. | Flipped C4 IA04-11 from F to P (exported file does match the on-screen/filtered data), withdrew finding 013 (incomplete export), and recomputed every affected count. | commit `091695c` |
| 15 | 2026-08-04, session order | "IA01 có gì để test đâu, nó chỉ là một button thôi và IA03-09 thì là F thì là không có pointer" — there is nothing to test for IA01, and IA03-09 fails on the missing pointer. | Set IA01-09/10 and IA03-08 = NA with scope reasons (a single instant-action button has no list region, no loading phase, and no multi-step flow to exit). Set IA03-09 = F, and rather than opening a new finding, widened finding 002 to cover C1 + C2 + C4 since it is one systemic defect at the shared component layer. | `Task1B` C4 section; `Bug_Usability_Findings_Log.md` finding 002 |
| 16 | 2026-08-04, session order | Create this prompt log. | Reconstructed the session from the transcript, the compaction summary, Git history, and file mtimes. | `prompt_logs.md` |
| 17 | 2026-08-04, session order | "ttf" (renamed a mislabeled screenshot after an audit request) — check for undeclared bugs and unfilled Task1B rows. | Audit found: `bugs/C01_IA04-10.png` was mislabeled — its finding (004) is a C2 defect, so the file was renamed to `C02_IA04-10.png` and every reference updated. Confirmed no NA row was missing a reason and no P/F row was missing a Note. | `bugs/C02_IA04-10.png` (renamed) |
| 18 | 2026-08-04, session order | "IA02-11: Không disable, xuất ra 2 file luôn / IA03-11: Tab được" — the last two C4 items observed. | IA02-11 = F: clicking Export twice does not disable the button and produces two duplicate files — logged as finding 013. IA03-11 = P: the Export button is reachable and activatable by keyboard. Task1B is now 150/150 items filled across all three screens, 0 blank. | `Task1B` C4 section; `Bug_Usability_Findings_Log.md` finding 013 |

## Result at the End of This Log

| Screen | Items run | Passed | Failed | N/A |
| --- | ---: | ---: | ---: | ---: |
| C1 — Users list | 50 | 31 | 4 | 15 |
| C2 — Assign Role / edit user modal | 50 | 22 | 7 | 21 |
| C4 — Export to Excel (action flow) | 50 | 6 | 4 | 40 |
| **Total** | **150** | **59** | **15** | **76** |

13 findings logged (C1: 3, C2: 7, C4: 3). All 150 checklist items across the three screens are filled — no item was left blank or guessed.

## Notes on AI Reliability Observed During This Session

- **The AI's own instrumentation was wrong once and it mattered.** `ia04.js` silently swallowed a successful POST because of an incorrect assumption about `fetch` call shapes. It was caught only because the raw console output was pasted back for review — not by the AI re-reading its own code. Script output is evidence only after the script itself has been validated against a real request.
- **A missing capability was found by the student, not the AI.** The skill had no `ia04.js` and no reference to any batch script; the AI had been using scripts it had never documented. Prompt 10 exposed both gaps.
- **The 50-item schema does not fit every target.** C4 is an action flow whose result lands outside the UI, and forcing it into a page/modal profile would have produced either an empty run or duplicated verdicts. The fix was a new profile, documented in `applicability.md`, not a bent verdict.
- **Blank is a valid state.** Per §12 the AI left unobserved items empty and said so in the summary table, instead of inferring them from the other two screens.
