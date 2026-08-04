# Usability Test Plan

## Objective

Evaluate the usability of Scenario B across B1-B3 for event discovery, detail review, and registration completion.

## SUT Environment

- Current EMS endpoint for new test executions: `https://prod-dev.ems-fitus.cloud/`
- All test evidence must record the exact SUT URL used at the time of execution.
- Do not state that this endpoint is operational unless the session runner manually verifies it.

## Selected Screens B1-B3

- B1 - Home / Events Listing
- B2 - Event Detail
- B3 - Registration Form

## Target Users

- university students, lecturers, and guests who may discover and register for academic or professional events
- people with ordinary web-browsing experience, including first-time EMS users
- users able to select an attendee role and interpret a pending registration state

## Goal-Based Task Scenario

"You want to attend an upcoming EMS event. Find a suitable event from the event listing, review its details, and complete the registration process using the attendee role you would actually use. Tell me when you believe the registration has been recorded."

## Pilot Session

One pilot participant is required before the five main participant sessions. The current repository contains the completed pilot record.

## Participant Recruitment

Recruit real participants outside the class who match the target user profile and provide consent.

The current draft uses two main-session summaries (P01-P02). Consent is confirmed for PILOT, P01, and P02; personally identifiable recruitment and consent records remain private.

## Moderation Approach

Moderated sessions.

## Think-Aloud Method

Participants should verbalize expectations, confusion, decisions, and recovery attempts while completing the task.

## Consent

Collect consent before observing or storing session evidence. Keep private consent artifacts outside the public repository.

## Metrics

- task success: Completed / Partial / Failed
- time on task
- error count
- hesitation count
- requests for help
- moderator intervention
- SUS or UEQ-S score
- open-ended responses

## Post-Task Questionnaire

Use SUS or UEQ-S and open-ended follow-up probes.

## Open-Ended Probes

Ask about the easiest and most confusing steps, information sufficiency, role-selection clarity, recovery, perceived speed, confidence that registration succeeded, and the first desired improvement. Use the exact questions in `probe_questions.md`.

## Data Analysis

Aggregate verified session data and separate observations from inference. Calculate metrics from the completed records and do not generalise beyond the observed sessions.

## Severity Scale 0-4

Use severity 0-4 for usability findings.

## Privacy and Evidence Handling

Store only masked participant details in the repository and keep raw contacts private. Three profile/account screenshots with masked emails are indexed in `private_evidence_manifest.md` for PILOT, P01, and P02. They must not be treated as proof of task behaviour, consent, timings, SUS responses, or usability findings.

## Limitations

- Only two main sessions are included, although the assignment requires five participants.
- Behavioural outcomes and counts are summary only and are not independently verifiable because detailed session notes are not retained.
- Findings may change when the sample is expanded.
- No screen or audio recordings were captured. The retained media is limited to three masked profile/account screenshots.
