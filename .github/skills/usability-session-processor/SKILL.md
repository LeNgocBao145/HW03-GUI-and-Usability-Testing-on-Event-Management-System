# usability-session-processor

## Purpose

Process one real usability-testing session for Scenario B and prepare a confirmed update for the matching participant response summary.

## When to use

- When one pilot or main participant session has been completed
- When supported metrics, responses, and evidence references are available
- When preparing a clean participant-session summary from real observed data

## When not to use

- When participant details are missing or unverified
- When the session has not yet occurred
- When trying to aggregate across multiple sessions
- When someone expects missing values to be invented

## Required inputs

- participant ID
- session date
- start time
- end time
- completion status
- observed errors
- hesitation count
- help requests
- moderator interventions
- real participant quotes
- SUS or UEQ-S responses
- evidence references

## Source files

- `usability_testing/participant_table.md`
- `usability_testing/observation_template.md`
- `usability_testing/participants/P01/questionnaire_raw.md`
- `usability_testing/participants/P01/probe_answers.md`
- `usability_testing/participants/P02/questionnaire_raw.md`
- `usability_testing/participants/P02/probe_answers.md`
- `usability_testing/pilot_session.md`
- `usability_testing/sus_questionnaire.md`

## Step-by-step workflow

1. Validate that the participant ID is present.
2. Confirm whether the session is `Pilot` or `Main`.
3. Confirm that any contact information is masked.
4. Calculate task duration only from supplied start and end times.
5. Record task success as one of:
   - `Completed`
   - `Partial`
   - `Failed`
6. Summarize only the supplied errors, hesitations, help requests, and interventions.
7. Calculate SUS only when all required SUS responses are supplied.
8. Mark missing values as `Missing`, not zero.
9. Separate:
   - direct observation
   - participant quote
   - analyst interpretation
10. Prepare a session completeness check and proposed update.
11. Ask for human confirmation before writing to the matching participant file.

## Validation rules

- Do not infer a participant type if `Pilot` or `Main` is not provided.
- Do not calculate duration if start or end time is missing.
- Do not calculate SUS from partial answers.
- Do not convert missing values to `0`.
- Do not merge multiple sessions into one participant file.

## Evidence rules

- Treat placeholder notes as incomplete evidence.
- Use only masked participant identifiers in repository-visible files.
- Keep quotes verbatim only when they were actually supplied.
- Link any session summary to real evidence references where available.

## Prohibited behavior

- Never fabricate participants, contacts, quotes, timings, or SUS responses.
- Never invent completion status, errors, or hesitations.
- Never write session data without human confirmation.

## Expected output

- session completeness check
- calculated metrics
- observation summary
- missing data
- candidate usability issues
- human-confirmation request

## Human-confirmation checkpoint

Pause before updating the matching participant session file and ask the human reviewer to confirm the derived metrics and summary.

## Example invocation

Placeholder example:

`Run usability-session-processor for participant P03 using the supplied session date, start/end time, notes, masked quote excerpts, SUS responses, and evidence refs TODO.`

## Failure and missing-data handling

- If the participant ID is missing, stop and request it.
- If masked contact status cannot be verified, flag privacy review.
- If timestamps are incomplete, report duration as `Missing`.
- If SUS data is partial, report `Missing` instead of a score.
