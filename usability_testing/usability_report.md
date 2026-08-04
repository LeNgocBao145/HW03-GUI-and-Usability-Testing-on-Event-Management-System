# Usability Report

## 1. Executive Summary

Two main-session summaries covered the Scenario B journey from event discovery through registration. One summary records unassisted completion and one records reaching the final state after task-directed help, producing a reported full-success rate of 50.0% and assisted-completion rate of 100%. Mean summary time was 8:02.5 and mean SUS was 70.0. Participant responses repeatedly identified specialised role terminology and weak post-submit acknowledgement. Save Event confusion and no-results recovery were isolated participant reports.

## 2. Study Objective

Evaluate whether prospective EMS attendees can discover an upcoming event, understand its details, select an appropriate attendee role, submit registration, and identify the resulting status across B1-B3.

## 3. Scope

- B1 - Home / Events Listing
- B2 - Event Detail
- B3 - Registration Form
- Flow: B1 -> B2 -> B3
- Current dataset: one excluded pilot plus two main sessions (P01-P02)
- Out of scope: admin flows, cross-browser verification, and performance measurement

## 4. Task Scenario

"You want to attend an upcoming EMS event. Find a suitable event from the event listing, review its details, and complete the registration process using the attendee role you would actually use. Tell me when you believe the registration has been recorded."

Timing ended when the participant identified the resulting registration status or abandoned the task. Post-task SUS and probes were excluded from task time.

## 5. Methodology

The moderated think-aloud protocol used the definitions in `observation_template.md`. The aggregated analysis retains outcomes and behavioural counts, while the repository retains the SUS and probe responses for each participant. Detailed session notes and screen/audio recordings are not included because no recordings were captured. Three profile/account screenshots with masked emails are indexed in `private_evidence_manifest.md`; they support account/environment traceability only and do not support the behavioural findings or calculated metrics.

Calculations use P01-P02 only and do not generalise beyond the completed sessions.

## 6. Pilot Test

The pilot was Partially Completed in 7:40 with two errors, four hesitations, one help request, one intervention, two recoveries, and SUS 67.5. It exposed ambiguous task wording, an undefined timing endpoint, and incomplete moderator instructions. The task now says "attendee role you would actually use"; timing stops when the resulting status is identified; the moderator stops the timer before SUS and records task-directed help separately. Pilot metrics are excluded from P01-P02 aggregates.

## 7. Participants

The study used two participants with varied profiles:

| ID | Profile | Experience | Outcome |
|---|---|---|---|
| P01 | Student event-goer | Regular web user | Completed |
| P02 | Infrequent web user | Limited event-platform experience | Partially Completed after intervention |

Personally identifiable information is kept outside the public repository.

Consent is confirmed for PILOT, P01, and P02, with consent artifacts stored privately.

## 8. Task Metrics

| Metric | P01 | P02 | Aggregate |
|---|---:|---:|---:|
| Outcome | Completed | Partial | 1/2 full success (50.0%) |
| Time | 6:45 | 9:20 | Mean 8:02.5; median 8:02.5 |
| Errors | 1 | 2 | Total 3; mean 1.50 |
| Hesitations | 3 | 5 | Total 8; mean 4.00 |
| Help requests | 0 | 1 | Total 1; mean 0.50 |
| Interventions | 0 | 1 | Total 1; mean 0.50 |
| Recoveries | 1 | 1 | Total 2; mean 1.00 |

These behavioural values are human-confirmed summaries and are not independently verifiable from raw timelines or start/end timestamps. The summaries record that both participants reached the final Pending review state and that P02 required task-directed assistance; reported assisted completion is therefore 100% while reported strict full success is 50.0%.

## 9. SUS Results

| ID | Adjusted total | SUS score |
|---|---:|---:|
| P01 | 31 | 77.5 |
| P02 | 25 | 62.5 |
| **Mean** |  | **70.0** |
| **Median** |  | **70.0** |

The observed range was 62.5-77.5. SUS values describe the two completed main sessions.

## 10. Key Observations

1. P01 and P02 reported reduced confidence because the persistent Pending review state was not accompanied by a separate success acknowledgement.
2. P01 and P02 reported that the Commander-style role terminology was unfamiliar or did not sound like an attendee category.
3. P01 reported treating Save Event as a registration action.
4. P02 reported needing help to recover from an empty search because no direct Reset or Show all events action was apparent.

## 11. Ranked Usability Findings

| Rank | ID | Finding | Session support | Severity 0-4 | Justification | Screenshot Ref |
|---:|---|---|---|---:|---|---|
| 1 | UT-B3-001 | Registration submission lacks a salient immediate acknowledgement. | P01, P02 responses | 2 | Recurred in 2/2 responses and reduced confidence. Cross-method support for `GUI-B3-FC-005`; not submitted separately. | `screenshots/ScreenB3/evidences/ScreenB3_live_13_registration_pending_after_double_click.png` |
| 2 | UT-B3-002 | Specialised attendee-role terminology increases interpretation effort. | P01, P02 responses | 2 | Recurred in 2/2 responses and increased interpretation effort. | `screenshots/ScreenB3/evidences/ScreenB3_live_03_role_selected.png` |
| 3 | UT-B1-001 | Empty results provide no direct reset action. | P02 response | 2 | Reported help was needed in 1/2 sessions. Cross-method support for `GUI-B1-FC-006`; not submitted separately. | `screenshots/ScreenB1/evidences/ScreenB1_live_04_empty_results.png` |
| 4 | UT-B2-001 | Save Event competes with Register in the action hierarchy. | P01 response | 2 | One participant reported treating Save Event as a registration action. | `screenshots/ScreenB3/evidences/ScreenB3_live_02_registration_form_desktop.png`; `screenshots/ScreenB3/evidences/ScreenB3_live_12_role_selected_before_submit.png` |

## 12. Bugs vs Usability Issues

The four ranked records concern comprehension, action hierarchy, feedback, and recovery. `UT-B3-001` and `UT-B1-001` are cross-method support for existing GUI findings and were not submitted as separate duplicates. `UT-B3-002` and `UT-B2-001` are unique, human-reviewed usability findings and were submitted through Google Forms on 2026-08-04.

## 13. Prioritised Recommendations

1. Add an accessible success toast or inline confirmation immediately after registration, while retaining the persistent Pending review status.
2. Replace or explain specialised role labels using attendee-centred plain language and concise descriptions.
3. Add Reset search / Show all events to the no-results state and display active search/filter criteria together.
4. Make Register the visually dominant B2 action and style Save Event as a clearly secondary bookmark action.
5. Expand the sample to reassess frequency, SUS, and severity across the required participant count.

## 14. Study Limitations

- Only two main sessions are included; the assignment requires five participants.
- Small-sample recurrence and proposed severity may change materially when the sample is expanded.
- No screen or audio recordings were captured; media coverage is limited to masked profile/account screenshots.

## 15. Conclusion

The repository retains the Pilot summary, P01-P02 SUS and probe responses, human-confirmed behavioural summaries, four usability-analysis records, and reproducible aggregate arithmetic. The behavioural source events are not independently verifiable because detailed notes and recordings are not retained. The current two-session sample does not satisfy the assignment's five-participant coverage requirement.
