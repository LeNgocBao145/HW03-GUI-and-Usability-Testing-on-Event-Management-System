---
name: cross-platform-verifier
description: Per-screen cross-platform compatibility verification against Task 3's coverage floor (>=3 OS families, >=5 browsers, all 3 device classes, per screen). Validates screenshot coverage in cross_platform_screenshots/ BEFORE evaluating, ingests screenshots by filename convention (device_os_browser_screenID.ext), then compares each against a baseline and reports a token-minimal diff merged back into Report.md's per-screen matrix. Use when the user asks to verify cross-platform consistency for a screen, or has just added screenshots. Does NOT run tests on BrowserStack/LambdaTest or any device farm - read-only over screenshots you already captured.
---

# Cross-Platform Verifier

## The exact requirement this skill is checking against
Per screen, the matrix must exercise, **at least once each**:
- **3 operating system families** (e.g. Windows, macOS, and Android or iOS -
  Windows 10 and Windows 11 count as the same family)
- **5 distinct browsers** (Chrome, Firefox, Safari, Edge, Opera or Samsung Internet)
- **all 3 device classes** (desktop, tablet, phone)

Not every 3x5x3 combination is required - just every OS, every browser, every
device class covered somewhere in that screen's matrix. Every cell needs a
screenshot; every screenshot needs an **MSSV@...edu.vn overlay**; every rendering
Fail needs a short defect note. This applies **separately to each of your 3
screens** - a coverage pass on Screen A1 says nothing about A3 or A4.

## Step 0 - Parse the matrix once (structural context)
`Report.md` should hold one table per screen, each under its own heading
(`### Screen A1`, `### Screen A3`, ...). Don't assume a filename - accept
`--report <file>` from the user.
```
python scripts/merge_crossplatform_results.py init --report Report.md --out agent_artifacts/cross-platform-verifier/crossplatform_master.json
```
This parses every screen's table in one pass; refer to rows by (screen, ID)
afterward instead of re-pasting tables.

## Step 1 - Validate coverage BEFORE evaluating anything (mandatory gate)
For the screen you're about to work on:
```
python scripts/merge_crossplatform_results.py validate-coverage --screen A1 --screenshot-dir cross_platform_screenshots
```
This checks the **actual files present** (parsed from their `device_os_browser_screenID`
filenames) against the 3-OS/5-browser/3-device-class floor above, and flags any
filename that doesn't match the naming convention. If it fails, **stop and tell the
user what's missing** - don't proceed to evaluate a screen that can't pass the
rubric no matter how well the images are read. If your screenshots use a different
naming convention, edit `FILENAME_RE`/`*_MAP` in `scripts/screenshot_parser.py`
(one script, not scattered logic).

This script cannot verify the MSSV overlay itself (that needs actually looking at
the image, not just its filename) - when you get to Step 2 and open each
screenshot, explicitly check the overlay is present and legible, and flag any
image where it's missing or unreadable.

## Step 2 - Ingest screenshots into the matrix
```
python scripts/merge_crossplatform_results.py ingest-screenshots --screen A1 --master agent_artifacts/cross-platform-verifier/crossplatform_master.json --screenshot-dir cross_platform_screenshots --out agent_artifacts/cross-platform-verifier/prefill_A1.json
```
This matches each matrix row's (Device Type, OS, Browser) to a screenshot by
filename and fills the Screenshot column. It reports rows with **no matching
file** (a matrix cell you haven't captured yet) and files that don't match **any**
row (captured but not accounted for in the template - add a row or it was a
mistake). It does **not** decide Pass/Fail automatically — that still requires
actually looking at each image.

## Step 3 - Compare each row against the baseline (internal, per image)
- Confirm the baseline row with the user if not obvious (default: the first
  Desktop/primary-browser row, e.g. `C1`).
- Actually open each screenshot. Look for: overflow, element overlap, broken
  layout/wrapping, unreadable text, non-responsive controls - these are the exact
  defect categories the report needs, so classify using them, not free text.
- Confirm the MSSV overlay is visible in each image (see Step 1's note).
- Never claim "Pass" for a screenshot you haven't actually looked at.

## Step 4 - Emit diff-only JSON
Only rows that differ from baseline go in `results`; everything else is implied
`"Pass"`. A `defect_type` is required whenever `result` is `"Fail"`
(the merge script warns if you omit it):
```json
{
  "baseline": "C1",
  "totals": {"evaluated": 5, "pass": 4, "fail": 1},
  "results": {
    "C4": {"result": "Fail", "defect_type": "overlap", "notes": "Sidebar overlaps main content on iPadOS Firefox", "severity": 2}
  }
}
```

## Step 5 - Human review gate (mandatory)
Show the "Fail" rows in chat and ask the user to confirm/correct/add before
writing anything - same rule as the other checklist-style skills.

## Step 6 - Merge, render, and log
```
python scripts/merge_crossplatform_results.py apply --screen A1 --master agent_artifacts/cross-platform-verifier/prefill_A1.json --diff agent_artifacts/cross-platform-verifier/diff_A1.json --out agent_artifacts/cross-platform-verifier/results_A1.json
python scripts/merge_crossplatform_results.py render --results agent_artifacts/cross-platform-verifier/results_A1.json --out agent_artifacts/cross-platform-verifier/Report_A1_matrix.md
```
Paste the rendered block under that screen's `### Screen A1` heading in `Report.md`.
For each confirmed "Fail" row, offer to append a Bug & Usability Findings
Log entry via `_shared/scripts/bug_log_appender.py` (ask Bug vs Usability +
severity - don't guess). One git commit per screen's verification pass.

## Repeat Steps 1-6 for every screen
Coverage, ingestion, evaluation, and totals are all scoped per screen - running
this once does not cover your other two screens.

## Non-negotiable rules
- Never skip Step 1's coverage gate - a screen that fails it cannot produce a
  compliant matrix no matter what happens after.
- Never claim a platform is "Consistent" (or mark an MSSV overlay present) without
  having actually looked at its screenshot.
- Never fabricate a row/ID that isn't in that screen's matrix table.
- Never restate the whole matrix or all "Consistent" rows in chat output.
- Never attempt to reach out to BrowserStack/LambdaTest/any device-farm API -
  explicitly out of scope.
