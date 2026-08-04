# Output format — exactly how to record results

## 1. Task1B result row
File: `23127522/Task1B_Checklist_Run_ScenarioC.md`, inside the section for the screen being tested.

```
| <ITEM-ID> | <mục kiểm tiếng Việt — giữ nguyên, không sửa> | <P|F|NA> | <Note> |
```

Rules:
- Column 2 (the Vietnamese check text) is **never edited** — only columns 3 and 4 change.
- Notes are written in **Vietnamese**.
- **F ⇒ Note is mandatory**: what happened + why it fails. Include the screenshot path.
- **NA ⇒ Note gives the reason** (use the standard reasons in `applicability.md`).
- **P ⇒ Note optional**; add one only when the pass needs a caveat (e.g. `Bảng cuộn ngang trên mobile nhưng xem đủ cột/chức năng`).
- Leave the cell **blank** if the tester has not observed it yet — never guess (§12).

### Editing safely
The three screen sections (C1 / C2 / C4) contain **identical row text**, so a naive find-and-replace hits 3 matches. When editing, anchor the edit on an adjacent row that is already filled in for that screen, or include enough surrounding rows to make the match unique.

## 2. Bug Log row
File: `23127522/Bug_Usability_Findings_Log.md`. One row per finding, IDs sequential (`001`, `002`, …).

```
| <NNN> | C — <SCREEN> (<name>) | Bug\|Usability | <mô tả hiện tượng> | Repro: <các bước>. Heuristic: <N#/No#/S#/WCAG + tên> | <0-4> | <đề xuất sửa> | bugs/<SCREEN>_<ITEMID>.png | <HH:MM dd/mm/yyyy> |
```

- **Type**: `Bug` = behaves incorrectly / breaks. `Usability` = works but hurts the user (e.g. missing `cursor:pointer`).
- **Severity**: `0` none · `1` cosmetic · `2` minor · `3` major · `4` catastrophe.
- **Heuristic**: cite the codes from the shared checklist's Source column for that item, with the name spelled out.
- **Form submit time**: filled in **after** the tester submits the Google Form (https://forms.gle/CJQFQCAXcsDbXDMM9). Every finding must be reported **twice** — form + this log — and the counts must match.

### Worked examples already in the log
| ID | Item | Type | Sev | Why that severity |
| --- | --- | --- | --- | --- |
| 001 | IA01-15 | Bug | 2 | avatar deforms with long text — visual break, data still usable |
| 002 | IA03-09 | Usability | 1 | missing `cursor:pointer` — cosmetic affordance gap |
| 003 | IA04-01 | Bug | 3 | no success toast — user cannot tell if the action worked |
| 004 | IA04-10 | Bug | 2 | raw `Failed to fetch` — error surfaced but unfriendly |

## 3. Screenshot naming
```
23127522/bugs/<SCREEN>_<ITEMID>.png      e.g. bugs/C01_IA01-15.png
```
- `bugs/` holds **failure evidence** (one per F item).
- `screenshots/` holds the **whole-screen overview** shots referenced at the top of each section (`C01.png`, `C02.png`, `C04.png`).
- Keep the item ID in the filename matching the item it proves — a mismatch (e.g. naming an IA04-10 shot `C01_IA04-11.png`) is confusing at grading time.

## 4. Summary table
At the end of the Task1B file, update counts per screen:

```
| Màn hình | Số mục chạy | Passed | Failed | N/A |
| C1       | 50          | <n>    | <n>    | <n> |
```
`Passed + Failed + N/A` must equal 50 for a fully-run screen. Recount from the section table rather than incrementing by memory.

## 5. Session close-out
After finishing a screen, report to the tester:
1. Counts P / F / NA.
2. The list of F items with their Note summaries.
3. Which Bug Log rows were added and what is still missing (screenshot file, form submit time).
4. Any item left **blank** and why (not yet observed) — so nothing silently looks "covered".
