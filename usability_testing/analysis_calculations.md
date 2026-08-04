# Usability Analysis Calculations

## Source Completeness

| Session | Type | Timeline | Start / end | Outcome and counts | SUS | Probes 8/8 | Evidence |
|---|---|---|---|---|---|---|---|
| PILOT | Pilot | Not retained | Summary only | Summary only / Not independently verifiable | Score summary only | Pilot summary only | Pilot summary; `UT-PROFILE-PILOT-01` |
| P01 | Main | Not retained | Summary only | Summary only / Not independently verifiable | 10/10 | Complete | Questionnaire and probes; `UT-PROFILE-P01-01` |
| P02 | Main | Not retained | Summary only | Summary only / Not independently verifiable | 10/10 | Complete | Questionnaire and probes; `UT-PROFILE-P02-01` |

The pilot is excluded from every aggregate below. P01-P02 behavioural values are human-confirmed summaries, not values independently reproducible from raw timelines or start/end timestamps.

Profile screenshot IDs resolve through `private_evidence_manifest.md`. They support account/environment traceability only and are not sources for the calculated task or SUS metrics.

## Human-Confirmed Main-Session Summary Dataset

| ID | Outcome | Seconds | Errors | Hesitations | Help | Interventions | Recoveries | SUS |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| P01 | Completed | 405 | 1 | 3 | 0 | 0 | 1 | 77.5 |
| P02 | Partially Completed | 560 | 2 | 5 | 1 | 1 | 1 | 62.5 |

## Calculations

- Full task success: 1 Completed / 2 sessions x 100 = **50.0%**.
- Assisted completion: both participants reached the final status / 2 sessions x 100 = **100%**.
- Total time: 405 + 560 = **965 seconds (16:05)**.
- Mean time: 965 / 2 = **482.5 seconds (8:02.5)**.
- Median time: median of 405 and 560 = **482.5 seconds (8:02.5)**.
- Total errors: 1 + 2 = **3**; mean = **1.50 per session**.
- Total hesitations: 3 + 5 = **8**; mean = **4.00 per session**.
- Total help requests: 1; mean = **0.50 per session**.
- Total interventions: 1; mean = **0.50 per session**.
- Total recoveries: 2; mean = **1.00 per session**.
- Mean SUS: (77.5 + 62.5) / 2 = **70.0**.
- Median SUS: **70.0**; observed range: **62.5-77.5**.

## Recurrence Matrix

| Candidate issue | P01 | P02 | Frequency | Classification |
|---|:---:|:---:|---:|---|
| Weak post-submit acknowledgement | Yes | Yes | 2/2 | Recurring pattern |
| Specialised attendee-role terminology | Yes | Yes | 2/2 | Recurring pattern |
| Save Event competes with Register | Yes | Not supported | 1/2 supported | Isolated participant statement |
| No direct recovery from empty results | No | Yes | 1/2 | Isolated observation |

## Analysis Boundary

- Only two completed main sessions are included, so the assignment's five-participant coverage is incomplete.
- Behavioural outcomes and counts are summary only / not independently verifiable.
- Frequencies and severity values are based on the completed sessions and should not be generalised beyond the observed sample.
