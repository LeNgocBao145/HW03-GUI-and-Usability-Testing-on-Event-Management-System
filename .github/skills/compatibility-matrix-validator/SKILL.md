# compatibility-matrix-validator

## Purpose

Validate cross-browser and cross-platform coverage for B1, B2, and B3 without inventing test execution evidence.

## When to use

- When reviewing `compatibility_matrix.md`
- When checking screenshot completeness and environment coverage
- When preparing a gap report before final submission

## When not to use

- When compatibility testing has not been executed yet
- When screenshots are unavailable
- When someone expects automatic Pass/Fail rewrites

## Required inputs

- `compatibility_matrix.md`
- `environment_log.md`
- screenshot references
- evidence directories
- the exact SUT URL shown in each executed test record

## Source files

- `compatibility_testing/compatibility_matrix.md`
- `compatibility_testing/environment_log.md`
- `compatibility_testing/evidence_naming_convention.md`
- `compatibility_testing/evidence/b1_home_events_listing/`
- `compatibility_testing/evidence/b2_event_detail/`
- `compatibility_testing/evidence/b3_registration_form/`

## Step-by-step workflow

1. For each screen, verify coverage of three selected operating systems.
2. Verify coverage of five selected browsers.
3. Verify coverage of:
   - `Desktop`
   - `Tablet`
   - `Phone`
4. Verify that every executed row has a screenshot reference.
5. Verify that every `Fail` row includes a defect note.
6. Verify that each screenshot record indicates:
   - EMS URL visible
   - OS identified
   - browser identified
   - device or resolution identified
   - assignment identity witness visible or absence accurately explained
7. Check whether screenshot references exist.
8. Compare matrix rows with the environment log.
9. Flag rows that require manual review.

## Validation rules

- Do not infer environment information from filenames alone.
- Do not mark a row executed without evidence.
- Do not modify `Pass` or `Fail` automatically.
- An environment session may be executed while an individual row remains `Not Executed` because the SUT or required state was blocked; report these separately.
- Provider metadata not shown during execution must be labeled `Not exposed by platform`, not inferred.
- Coverage is incomplete until OS, browser, device class, and evidence are all verified.

## Evidence rules

- Screenshot existence must be verified from actual references, not assumptions.
- Placeholder evidence directories count as incomplete.
- Direct evidence must be separated from filename-based hints.
- All test evidence must record the exact SUT URL used at the time of execution.

## Prohibited behavior

- Never fabricate BrowserStack, LambdaTest, emulator, or physical-device runs.
- Never fabricate screenshots.
- Never change test results merely to satisfy coverage counts.

## Expected output

- coverage status for B1
- coverage status for B2
- coverage status for B3
- missing browser/OS/device coverage
- missing screenshots
- invalid evidence references
- rows requiring manual review

## Human-confirmation checkpoint

Pause before proposing any matrix corrections that would alter row content and ask the human reviewer to confirm the intended edits.

## Example invocation

Placeholder example:

`Run compatibility-matrix-validator on the compatibility matrix, environment log, and screenshot references currently stored in compatibility_testing/evidence/.`

## Failure and missing-data handling

- If a screenshot reference is missing, flag the row as unverified.
- If the environment log is incomplete, report `Cannot verify`.
- If a file path is present but the screenshot cannot be found, treat the evidence as missing.
