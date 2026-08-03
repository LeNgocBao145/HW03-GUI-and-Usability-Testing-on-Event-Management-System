# gui-checklist-execution

## Purpose

Apply the approved shared GUI checklist from `gui_checklist.md` to one selected EMS screen in Scenario B without fabricating results.

## When to use

- When evaluating B1, B2, or B3 against the shared GUI checklist
- When preparing proposed updates for one screen's `checklist_execution.md`
- When the tester has real observations, notes, and evidence references ready

## When not to use

- When the shared checklist itself needs to be authored or revised
- When no real screen observations exist yet
- When trying to update multiple screens in one pass
- When evidence is missing and someone expects invented Pass/Fail results

## Required inputs

- selected screen ID: `B1`, `B2`, or `B3`
- `gui_checklist.md`
- the selected screen description file
- real screen observations
- screenshot references when available
- tester notes
- the exact SUT URL used during the observed execution

## Source files

- `gui_checklist.md`
- `scenario_b/b1_home_events_listing/screen_description.md`
- `scenario_b/b1_home_events_listing/checklist_execution.md`
- `scenario_b/b2_event_detail/screen_description.md`
- `scenario_b/b2_event_detail/checklist_execution.md`
- `scenario_b/b3_registration_form/screen_description.md`
- `scenario_b/b3_registration_form/checklist_execution.md`
- optional supporting notes in the matching `test_notes.md`

## Step-by-step workflow

1. Read `gui_checklist.md`.
2. Verify that each checklist item being considered exists in the shared checklist.
3. Read the selected screen's description file.
4. Determine whether each checklist item is applicable to the selected screen.
5. Request or review real observations for applicable items.
6. For each applicable item, propose one result only:
   - `Passed`
   - `Failed`
   - `N/A`
   - `Not executed`
7. For every proposed `Failed` result, include:
   - a concrete failure explanation
   - an evidence reference
   - a finding ID
8. Prepare an applicability summary and missing-evidence list.
9. Ask for human confirmation before writing to the selected `checklist_execution.md`.
10. Update only the chosen screen's execution file after confirmation.
11. Never modify the shared checklist while executing it.

## Validation rules

- Never mark `Passed` merely because no issue was mentioned.
- Never mark `Failed` without a concrete observation.
- Use `N/A` only when the item genuinely does not apply to the selected screen.
- Use `Not executed` when evidence is incomplete or the check was not actually performed.
- Verify that the checklist item exists before proposing an update.

## Evidence rules

- Treat placeholder files as incomplete evidence.
- Failed items require screenshot references or another concrete evidence reference.
- Distinguish direct observation from tester inference.
- If evidence is missing, list the gap instead of guessing the outcome.
- All test evidence must record the exact SUT URL used at the time of execution.

## Prohibited behavior

- Never fabricate test executions.
- Never fabricate Pass or Fail results.
- Never fabricate screenshots.
- Never fabricate bugs or usability findings.
- Never update a screen execution file without human confirmation.

## Expected output

- applicability summary
- proposed checklist updates
- missing evidence list
- findings that must be logged
- human-confirmation request

## Human-confirmation checkpoint

Pause before editing the target `checklist_execution.md` and ask the human reviewer to confirm the proposed row updates.

## Example invocation

Placeholder example:

`Run gui-checklist-execution for B2 using the shared checklist, the B2 screen description, my tester notes, and screenshot refs TODO.`

## Failure and missing-data handling

- If the selected screen ID is invalid, stop and request a valid one.
- If the checklist file is missing, report that the skill cannot proceed.
- If observations are incomplete, return `Not executed` proposals and a missing-data list.
- If a failed item has no evidence reference, flag it for manual completion instead of writing it.
