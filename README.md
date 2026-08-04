# HW03 - GUI & Usability Testing on EMS

## Student Information

| Field | Value |
| --- | --- |
| Student Name | Nguyen Minh Khoi |
| Student ID | 23127070 |
| Student Email | nmkhoi232@clc.fitus.edu.vn |
| Class | 23KTPM1 |
| Group | 4 |

## Selected Scope

- Scenario B - User registers to attend an event
- B1 - Home / Events Listing
- B2 - Event Detail
- B3 - Registration Form
- End-to-end flow: `B1 -> B2 -> B3`

The three screens cover event discovery, event-information review, attendee-role selection, registration, status feedback, and cancellation.

## Account and Privacy Rules

- The tester used an individual EMS account rather than the shared Admin account.
- Credentials are stored only under `.local/`, which is ignored by Git.
- Participant contacts remain private; repository-visible contact details and screenshots are masked.
- Missing participants, recordings, environment metadata, and execution results were not fabricated.

## SUT Environment History

| Environment | URL | Status | Notes |
| --- | --- | --- | --- |
| Previous ngrok endpoint | https://promoter-starboard-prude.ngrok-free.dev/ | Offline | Historical endpoint; returned `ERR_NGROK_3200` |
| Current EMS endpoint | https://prod-dev.ems-fitus.cloud/ | Used | Manually reached during GUI, usability, and compatibility sessions on 2026-08-03 and 2026-08-04 |

All test evidence must record the exact SUT URL used at the time of execution. The current endpoint was verified during the recorded sessions, but its availability should be checked again before any new execution.

## Repository Structure

- `gui_checklist.md`: shared 61-item GUI checklist and reference sources.
- `scenario_b/`: B1-B3 scope, descriptions, checklist executions, notes, and summaries.
- `screenshots/`: GUI and masked usability evidence.
- `usability_testing/`: study plan, pilot, P01-P02 responses, calculations, and report.
- `compatibility_testing/`: test plan, 15-row matrix, environment log, report, and evidence.
- `findings/`: consolidated findings and Google Form submission reconciliation.
- `docs/`: main report, AI Audit, AI Critique, prompt log, and supporting documentation.
- `.github/skills/`: nine reusable Agent Skills.
- `demo_videos/`: Agent Skill demonstration link.
- `exports/`: PDF and final-submission export location.
- `req/`: supplied English/Vietnamese requirements and EMS introduction materials.

## Deliverables Checklist

### Task 1 - GUI Checklist and Execution

- [x] Consolidated shared GUI checklist in `gui_checklist.md`
- [x] 61 reviewed checklist items across IA-01 through IA-04
- [x] Reference sources included in `gui_checklist.md`
- [x] AI interaction register retained in `docs/prompt_log.md`
- [ ] Exact original checklist-generation prompts embedded in `gui_checklist.md` - not retained
- [ ] Item-level human-added and AI-gap provenance - not retained
- [x] Checklist execution and summaries for B1, B2, and B3
- [x] GUI evidence directories and referenced screenshots
- [x] Confirmed GUI findings and Google Form reconciliation

### Task 2 - User Testing

- [x] Goal-based task scenario and moderated test plan
- [x] One pilot session
- [x] Two real main participant summaries with masked profiles
- [ ] Five real main participants - intentionally not completed; reduced-sample tradeoff accepted
- [x] P01-P02 raw SUS responses and probe answers
- [x] Reproducible two-session aggregate calculations
- [x] Usability Report with findings and recommendations
- [ ] Detailed raw timelines and screen/audio recordings - not captured; summary-only limitation accepted

### Task 3 - Compatibility Testing

- [x] 15-row compatibility matrix covering B1-B3
- [x] Five cloud-environment sessions attempted and reconciled
- [x] Compatibility evidence retained for completed, failed, and state-blocked observations
- [x] One confirmed compatibility finding submitted to Google Forms
- [x] Accepted evidence attribution using the visible authenticated Gmail identity
- [ ] Five-browser execution - Chrome, Safari, and Firefox completed; Edge and Samsung Internet not completed
- [ ] Fully completed B3 execution in ENV-01, ENV-04, and ENV-05 - state/provider blocked and not re-executed

### Findings, AI, and Submission

- [x] Aggregated Bug & Usability Findings Log
- [x] 23/23 unique findings recorded as submitted to Google Forms
- [x] AI Audit Report Markdown
- [x] AI Critique Markdown - 264 words
- [x] Main Report Markdown
- [x] Nine Agent Skills
- [x] YouTube Agent Skill demonstration link
- [x] Text Git commit log export through commit `4592766`
- [x] Main Report PDF
- [x] AI Audit Report PDF
- [x] AI Critique PDF
- [x] Self-assessed grade - `070`
- [x] Final ZIP package - `exports/final_submission/23127070_HW03_AI_GUIUsability_EMS_070.zip`

## Test Summary

### GUI Checklist

| Metric | Value |
| --- | ---: |
| Checklist items | 61 |
| Screens | 3 |
| Total per-screen assessments | 183 |
| Applicable assessments | 99 |
| PASS | 72 |
| FAIL | 27 |
| N/A | 84 |
| Not Executed | 0 |

### Usability Testing

| Metric | Value |
| --- | --- |
| Participants retained | 1 pilot + 2 main participants |
| Full task success | 1/2 - 50.0% |
| Assisted completion | 2/2 - 100% |
| Mean/median task time | 8:02.5 |
| Mean/median SUS | 70.0 |
| Errors / hesitations | 3 / 8 |
| Ranked usability-analysis records | 4 |
| Evidence boundary | Summary only; no detailed timeline or recording |

### Compatibility Testing

| Metric | Value |
| --- | ---: |
| Matrix rows | 15 |
| Environment sessions attempted | 5/5 |
| Pass | 7 |
| Fail | 3 |
| Not Executed | 5 |
| Recorded operating systems | 3 - Windows, Android, iOS |
| Executed browsers | 3 - Chrome, Safari, Firefox |
| Recorded device classes | 3 - Desktop, Tablet, Phone |
| Compatibility findings | 1 |

### Findings and Supporting Artifacts

| Metric | Value |
| --- | ---: |
| Findings-log rows | 25 |
| Unique submitted findings | 23 |
| Bug findings | 12 |
| Unique usability findings | 11 |
| Cross-method support records | 2 |
| Agent Skills | 9 |
| Demo videos | 1 |

## Accepted Limitations

- Task 2 uses two main participants rather than the required five; no additional participant data will be reconstructed.
- Task 2 behavioral values are human-confirmed summaries without detailed timelines or recordings.
- Task 3 completed three browsers rather than five and retains five `Not Executed` rows.
- The compatibility evidence uses a human-approved Gmail identity witness rather than the requested student-ID overlay.
- ENV-03 B1-B3 evidence records the same Android blank-screen blocker because none of the target screens could be reached.
- Some dynamic GUI findings rely on explicit human review rather than screen-specific sequence captures.
- The exact original checklist-generation prompt and per-message AI timestamps were not retained.

## Key Documents

- [Main Report](docs/main_report.md)
- [AI Audit Report](docs/ai_audit_report.md)
- [AI Critique](docs/ai_critique.md)
- [Prompt Log](docs/prompt_log.md)
- [Usability Report](usability_testing/usability_report.md)
- [Compatibility Report](compatibility_testing/compatibility_report.md)
- [Findings Log](findings/bug_and_usability_findings_log.md)
- [Google Form Submission Log](findings/google_form_submission_log.md)
- [Git Commit Log](docs/git_commit_log.txt)
- [Final Submission Manifest](docs/submission_manifest.md)
- [Agent Skill Demo](demo_videos/agent_skill_demo_links.md)

## Self-Assessment Table

| No. | Criteria | Maximum | Self-Assessed Grade |
| --- | --- | ---: | ---: |
| 1a | Shared checklist (>40 items) + sources + AI prompts | 15 | 10 |
| 1b | Checklist execution on >=3 screens + bug reports | 15 | 15 |
| 2 | User testing with 5 real users + Usability Report | 25 | 10 |
| 3 | Cross-browser / cross-platform matrix | 25 | 15 |
| 4 | Google Form submissions + aggregated findings log | 10 | 10 |
| 5 | Agent Skills + demo videos | 10 | 10 |
|  | **Total** | **100** | **70** |

The conservative self-assessment reflects the documented Task 1A provenance gap, reduced Task 2 sample, and accepted Task 3 coverage/evidence tradeoffs.

## Final Submission Filename

`23127070_HW03_AI_GUIUsability_EMS_070.zip`

The self-assessed grade must be a three-digit value from `000` to `100`.
