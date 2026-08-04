# submission-readiness-audit

## Purpose

Audit the repository before final submission and report what is complete, incomplete, missing, or unverifiable.

## When to use

- Before packaging the final submission
- When checking whether required structure and evidence are present
- When a human wants a blocker list without changing repository content

## When not to use

- When someone wants files auto-filled to appear complete
- When the repository is still intentionally at scaffold stage and no evidence has been collected
- When there is no need for an audit report

## Required inputs

- repository tree
- required HW03 structure
- evidence files and report files
- optional final PDF exports and ZIP package name

## Source files

- `README.md`
- `gui_checklist.md`
- `scenario_b/`
- `usability_testing/`
- `compatibility_testing/`
- `findings/`
- `docs/`
- `.github/skills/`
- `demo_videos/agent_skill_demo_links.md`
- `exports/pdf/`
- `exports/final_submission/`

## Step-by-step workflow

1. Check structural compliance:
   - `README.md` exists
   - `gui_checklist.md` exists at repository root
   - `gui_checklist.md` includes more than 40 checklist items or clearly incomplete placeholders
   - all four interface aspects exist
   - reference sources exist
   - AI prompts exist
   - human-added items and AI gaps exist
   - B1, B2, and B3 directories exist
   - usability-testing files exist
   - compatibility-testing files exist
   - findings logs exist
   - AI Audit Report exists
   - AI Critique exists
   - Git commit log exists
   - Agent Skills exist
   - demo video link file exists
   - PDF exports exist when final
   - final ZIP naming convention is correct
2. Check evidence compliance:
   - checklist execution contains real results
   - every failed checklist item has evidence
   - one pilot participant exists
   - five real main participants exist
   - SUS or UEQ-S responses exist
   - usability metrics are calculated
   - compatibility coverage is complete for every screen
   - every executed compatibility row has a screenshot
   - every executed test artifact records the exact SUT URL used at the time of execution
   - Google Form submissions are logged
   - demo links are real
   - required PDFs exist and are non-empty
3. Separate audit outcomes into:
   - `Complete`
   - `Incomplete`
   - `Missing`
   - `Cannot verify`
4. Report blockers and recommended next actions.

## Validation rules

- A folder alone does not count as completed evidence.
- A placeholder file counts as incomplete.
- The audit must not modify repository content.
- Full compliance must not be declared when evidence cannot be verified.

## Evidence rules

- Verify with actual file contents where possible.
- Treat TODO-only or placeholder content as incomplete.
- Distinguish missing evidence from unverifiable evidence.
- For current operational guidance, use `https://prod-dev.ems-fitus.cloud/` for new test executions unless the human tester has manually verified a different active endpoint.

## Prohibited behavior

- Never change repository content.
- Never declare full compliance without verifiable real evidence.
- Never hide privacy, credential, or evidence warnings.

## Expected output

- structural compliance table
- evidence compliance table
- missing deliverables
- privacy warnings
- credential warnings
- final submission blockers
- recommended next actions

## Human-confirmation checkpoint

No content-writing confirmation is needed because this skill produces an audit report only, but the human reviewer should confirm before acting on any destructive remediation plan.

## Example invocation

Placeholder example:

`Run submission-readiness-audit on the current HW03 repository and classify each required deliverable as Complete, Incomplete, Missing, or Cannot verify.`

## Failure and missing-data handling

- If a required path is absent, classify it as `Missing`.
- If a file exists but still contains placeholders, classify it as `Incomplete`.
- If evidence may exist outside the repository and cannot be checked here, classify it as `Cannot verify`.
