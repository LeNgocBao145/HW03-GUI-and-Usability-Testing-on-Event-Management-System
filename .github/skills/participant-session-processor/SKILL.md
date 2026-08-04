---
name: participant-session-processor
description: Process one completed HW03 usability session for PILOT or P01-P05 from raw observation notes, SUS responses, probe answers, and evidence references. Use when real session artifacts are available and Codex must validate privacy and completeness, calculate supported session metrics, prepare a traceable processed-session draft, or apply that draft after explicit human confirmation without fabricating missing data.
---

# Participant Session Processor

## Objective

Convert one real moderated usability session into a consistent, privacy-safe processed session record. Keep raw observations distinct from calculated values and analyst interpretations.

Do not aggregate participants or generate the final usability report with this skill.

## Canonical Sources

Read the study rules before processing a session:

- `usability_testing/task_scenario.md`
- `usability_testing/moderator_guide.md`
- `usability_testing/observation_template.md`
- `usability_testing/sus_questionnaire.md`
- `usability_testing/probe_questions.md`
- `usability_testing/participant_list.md`
- `usability_testing/private_evidence_manifest.md`

For a main participant, read only the selected participant's raw files:

- `usability_testing/participants/<P01-P05>/raw_notes.md`
- `usability_testing/participants/<P01-P05>/questionnaire_raw.md`
- `usability_testing/participants/<P01-P05>/probe_answers.md`

For the pilot, use `usability_testing/pilot/session_record.md` and any real pilot evidence. Never count the pilot as P01-P05.

## Readiness Check

1. Confirm the participant ID is exactly `PILOT` or `P01` through `P05`.
2. Confirm the session type matches the ID.
3. Confirm consent is explicitly recorded. Do not infer consent.
4. Confirm the session occurred and the source is not still a blank template.
5. Confirm the exact SUT URL and execution environment are recorded.
6. Identify missing values and source conflicts before calculating anything.
7. Check repository-visible content for unmasked contacts, credentials, or other unnecessary identifiers.

If consent is absent or cannot be verified, stop processing and request human review. If other fields are incomplete, continue only with supported values and mark each gap `Missing`.

## Processing Workflow

### 1. Preserve Source Meaning

- Preserve participant quotes verbatim only when present in the raw session record.
- Do not turn moderator notes into participant quotes.
- Do not silently resolve conflicting timestamps, counts, outcomes, or evidence references.
- Label content as `Direct Observation`, `Participant Statement`, `Calculated Metric`, or `Analyst Interpretation`.

### 2. Validate Task Outcome

Use only these outcomes from `task_scenario.md`:

- `Completed`
- `Partially Completed`
- `Failed`
- `Abandoned`
- `Invalid Session`

Do not infer success from the absence of an error. Record task-directed moderator help when interpreting the outcome.

### 3. Calculate Session Metrics

- Calculate time on task only when valid start and end times exist. Report the source timestamps and any timezone or date-rollover ambiguity.
- Use explicit event records to reconcile error, hesitation, help-request, intervention, and recovery counts.
- Do not replace a missing count with zero.
- Keep technical interruptions separate from participant errors unless the raw record explicitly supports both classifications.

Calculate SUS only when all ten responses are integers from 1 through 5:

1. For odd-numbered items, subtract 1 from the response.
2. For even-numbered items, subtract the response from 5.
3. Sum the ten adjusted values.
4. Multiply the adjusted total by 2.5.

If any response is missing or invalid, set the adjusted total and SUS score to `Missing` and list the affected items.

### 4. Validate Evidence

- Verify that each referenced repository file exists.
- Verify evidence relevance from content when it can be inspected; a filename alone is not proof.
- Preserve private recording references without copying raw recordings or identities into Git.
- Record the exact SUT URL used at execution time.
- Mark unavailable or unverifiable evidence explicitly.

### 5. Identify Candidate Issues

List only candidate usability issues or functional bugs directly supported by the session. Include the screen, observation, participant ID, evidence reference, and whether the observation is isolated or potentially recurring.

Do not assign a confirmed finding ID, final severity, or systemic conclusion. Do not promote a candidate into `findings/bug_and_usability_findings_log.md`.

### 6. Prepare the Draft

Prepare, but do not initially write:

- a session completeness table
- a privacy check
- validated task outcome
- source and derived metrics
- SUS calculation trace or missing-item report
- direct observations and participant statements
- candidate issues
- evidence validation results
- proposed `processed_session.md` content adjacent to the selected participant's raw files
- any proposed participant-list status update

For the pilot, propose updates only to the pilot artifacts and keep all P01-P05 metrics unchanged.

## Required Draft Output

Return:

| Field | Source | Value | Status | Notes |
|---|---|---|---|---|

Also return:

- completeness status: `Complete`, `Incomplete`, or `Invalid`
- privacy issues
- missing human inputs
- source conflicts
- evidence gaps
- candidate issues
- files proposed for modification

Pause and ask for explicit human confirmation before modifying any file.

## Apply Mode

After explicit confirmation:

1. Re-read every target file to detect intervening edits.
2. Apply only the approved draft.
3. Preserve raw notes and raw questionnaire answers.
4. Do not overwrite unrelated user-authored content.
5. Recalculate metrics from source values and verify the written result.
6. Report files changed and unresolved gaps.

## Safety Rules

- Never fabricate a participant, contact, consent record, timestamp, outcome, metric, quote, response, observation, screenshot, recording, or finding.
- Never print or store credentials.
- Never expose unmasked participant data in repository-visible files.
- Never treat placeholders as evidence.
- Never merge multiple sessions into one record.
- Never count the pilot among P01-P05.
- Never modify files before human confirmation.

## Example Invocation

`Run participant-session-processor for P03 using the current raw notes, SUS responses, probe answers, and evidence references. Prepare draft updates only and pause for confirmation.`

