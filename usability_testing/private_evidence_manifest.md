# Private Evidence Manifest

- Raw contacts must be stored privately.
- Only masked contacts may appear in the repository.
- Repository files should contain references only.
- Evidence must remain verifiable for TA review.
- Participants may not be fabricated.

## Current Dataset

| Session | Private contact | Consent artifact | Repository artifacts | Profile screenshot ref |
|---|---|---|---|---|
| PILOT | Not included in repository | Confirmed; stored privately | `pilot_session.md` | `UT-PROFILE-PILOT-01` |
| P01 | Not included in repository | Confirmed; stored privately | `participants/P01/questionnaire_raw.md` and `probe_answers.md` | `UT-PROFILE-P01-01` |
| P02 | Not included in repository | Confirmed; stored privately | `participants/P02/questionnaire_raw.md` and `probe_answers.md` | `UT-PROFILE-P02-01` |

## Screenshot Evidence

| Evidence ID | Session mapping | Repository path | Directly supports | Privacy status |
|---|---|---|---|---|
| `UT-PROFILE-PILOT-01` | PILOT | `../screenshots/usability_testing_evidences/pilot_user_profile.jpg` | An EMS profile page and a Lecturer account role are visible. | Email masked; account display name remains visible for participant verification. |
| `UT-PROFILE-P01-01` | P01 | `../screenshots/usability_testing_evidences/p1_user_profile.jpg` | An authenticated mobile EMS menu and the current SUT hostname are visible. | Email masked; account display name remains visible for participant verification. |
| `UT-PROFILE-P02-01` | P02 | `../screenshots/usability_testing_evidences/p2_user_profile.jpg` | A mobile EMS profile page, Lecturer role, and current SUT hostname are visible. | Email masked; account display name remains visible for participant verification. |

The PILOT/P01/P02 mapping follows the tester-supplied filenames. Email masking was manually verified for all three screenshots. These screenshots support profile/account and environment traceability only. They do not independently prove consent, participant identity, task outcome, timing, behavioural counts, SUS responses, probe answers, or usability findings.

Keep storage references private and do not expose identifiable participant data.
