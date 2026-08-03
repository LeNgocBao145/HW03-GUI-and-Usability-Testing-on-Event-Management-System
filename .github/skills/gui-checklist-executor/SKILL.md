---
name: gui-checklist-executor
description: Execute a GUI/Usability markdown checklist against EMS screen screenshots/DOM, emitting a minimal PASS/FAIL JSON diff and logging findings into the Section 7 Bug Log. High reusability with configurable paths.
---

# GUI Checklist Executor

# Parameters & Defaults

| Parameter | Flag | Default |
|-----------|------|---------|
| Checklist File | `--checklist` | `GUI_Checklist.md` or user-provided |
| Master JSON | `--master` | `agent_artifacts/gui-checklist-executor/checklist_master.json` |
| Screens Dir | `--screens-dir` | `screens/` |
| Evidence Dir | `--evidence-dir` | `failed_gui_checklist_screenshots/` |
| Bug Log File | `--log-file` | `agent_artifacts/bug-channel-submitter/bug_and_usability_findings_log.md` |

# Execution Logic

## Step 0 — Discover Scenario & Reference Targets
1. Read `Report.md` or `README.md` to identify the active scenario and its required target screens (e.g., `ScreenA1`, `ScreenA3`). If unclear, ask the user.
2. Verify that reference target images exist under `<SCREENS_DIR>/<ScreenID>.png`. These images serve as your visual destination maps.
3. Initialize or verify `checklist_master.json`:
   `python scripts/merge_checklist_results.py init --checklist <CHECKLIST_FILE> --out agent_artifacts/gui-checklist-executor/checklist_master.json`

## Step 1 — Live Navigation, Step-Tracking & Evidence Gathering
For each target screen in the scenario:
1. **Tool Discovery:** Inspect available MCP tools for browser automation (e.g., Playwright). If missing, **HALT** and ask for permission to install/configure it.
2. **Authentication:** Check the root `.env` file for `ADMIN_EMAIL` and `ADMIN_PASSWORD`. If missing or incomplete, interactively prompt the user to provide them and automatically save/update the `.env` file.
3. **Journey & Step Tracking:** 
   - Use the browser automation tool to open the live URL (e.g., `https://prod-dev.ems-fitus.cloud/`).
   - Log in and **actively navigate** through menus/actions until the live view matches the reference target image (`<SCREENS_DIR>/<ScreenID>.png`).
   - **Record the exact real-world action sequence** taken to reach this screen (e.g., `1. Login as admin. 2. Click Events tab. 3. Open ScreenA1`). This sequence will form the basis for bug reproduction steps (`steps`).
4. **Capture Evidence:** Take element-level or cropped screenshots of any identified UI/usability failures directly from the live page.

## Step 2 — Evaluate Checklist Items (Internal)
- Evaluate each item from `<MASTER_JSON>` as `PASS`, `FAIL`, or `N/A`.
- Keep evaluation reasoning internal; do not enumerate PASS items in chat.

## Step 3 — Emit Minimal Diff JSON
Output ONLY the JSON diff for failed items:

```json
{
  "screen": "<ScreenID>",
  "scenario": "<ScenarioID>",
  "totals": {"evaluated": 43, "pass": 39, "fail": 4, "na": 0},
  "results": {
    "1.01": {
      "ia": "IA-01",
      "status": "FAIL",
      "reason": "Primary color does not match design system palette",
      "severity": 2,
      "type": "Usability",
      "steps": "1. Open screen. 2. Observe header button color.",
      "fix": "Update CSS primary color variable."
    }
  }
}
```

## Step 4 — Human Review Gate (Mandatory)
1. Display the FAIL list as a short Markdown summary table in chat.
2. Ask the user to confirm, edit, or reject any findings before writing results to disk.

## Step 5 — Persist Results & Bug Log
Upon user confirmation:

1. Save diff to `<DIFF_FILE>.json`.
2. Merge results:
```bash
python scripts/merge_checklist_results.py apply --checklist <MASTER_JSON> --diff <DIFF_FILE>.json --out screen_results/<ScreenID>.json
```
3. Render report table:
```bash
python scripts/merge_checklist_results.py render --results screen_results/<ScreenID>.json --out Report_<ScreenID>_checklist.md
```
4. Prompt user to crop evidence images to `<EVIDENCE_DIR>/<ScreenID>_<item_id>.png`.
5. For each confirmed FAIL, execute the logger to append entry to Section 7 Bug Log:
```bash
python scripts/merge_checklist_results.py append-bug --log-file <LOG_FILE> --bug-id BUG-<ScreenID>-<ID> --screen <ScreenID> --type <Bug|Usability> --description "<reason>" --steps "<steps>" --severity <0-4> --fix "<fix>" --image-path "<EVIDENCE_DIR>/<ScreenID>_<item_id>.png"
```

# Non-Negotiable Rules
- Do NOT invent items not in the checklist master file.
- Do NOT skip Step 4 Human Review Gate.
- Do NOT hardcode file paths; respect user-provided file names and directories.
- Always generate standard 9-column entries for the Section 7 Bug Log.
