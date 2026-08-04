# Usability Task Scenario

## Study Objective

Evaluate whether target users can:

- discover a suitable upcoming event
- understand the event information
- select an appropriate registration role
- submit the registration
- identify the resulting registration status

## Participant-Facing Scenario

"Imagine that you want to attend an upcoming technology or professional-skills event. Use EMS to find a suitable event, review its information, register using the attendee role you would actually use, and verify that your registration has been recorded."

The moderator must not provide click-by-click instructions.

## Starting Point

- Start from the authenticated Events dashboard.
- Use `https://prod-dev.ems-fitus.cloud/` for the planned session unless the approved SUT changes.
- Verify the exact SUT URL manually before the session and record the URL actually used.
- Use an authenticated participant test account with no credentials exposed in repository files.
- Confirm that at least one suitable upcoming event has open registration.

## Completion Criteria

1. A suitable event is found.
2. The event detail is reviewed.
3. An appropriate registration role is selected.
4. The registration is submitted.
5. The resulting registration status is identified.

Stop timing when the participant identifies the resulting registration status, or when the participant abandons the task. Post-task questions are outside time on task.

## Task Outcome Definitions

- **Completed:** All completion criteria are met without task-directing moderator intervention.
- **Partially Completed:** Some completion criteria are met, but the participant does not complete the full goal.
- **Failed:** The participant cannot meet the task goal or reaches an incorrect terminal state.
- **Abandoned:** The participant chooses to stop before reaching a terminal task state.
- **Invalid Session:** Results cannot be used because required consent, test conditions, or reliable measurement is absent.

## Target Screens

- B1 - Home / Events Listing
- B2 - Event Detail
- B3 - Registration Form

## Exclusions

- Admin tasks
- Cross-browser testing
- Moderator-assisted completion unless the assistance is documented
