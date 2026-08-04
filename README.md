# HW03 - GUI & Usability Testing on EMS

## Student Information

- Student Name:
- Student ID:
- Student Email:
- Class:
- Group:

## Selected Scope

- Scenario B - User registers to attend an event
- B1 - Home / Events Listing
- B2 - Event Detail
- B3 - Registration Form

## End-to-End Flow

`B1 -> B2 -> B3`

## Account Requirements

- The tester must register and use their own EMS account.
- The account must not be shared with other group members.
- Credentials must not be committed to Git.
- The shared Admin account must not be used for B1-B3 user-side testing.

## SUT Environment History

| Environment | URL | Status | Notes |
|---|---|---|---|
| Previous ngrok endpoint | https://promoter-starboard-prude.ngrok-free.dev/ | Offline | Returned ERR_NGROK_3200 |
| Current EMS endpoint | https://prod-dev.ems-fitus.cloud/ | Current | Use for all new test executions |

All test evidence must record the exact SUT URL used at the time of execution.

The current EMS endpoint has been updated for repository guidance, but it must not be treated as operational until manually verified during real testing.

## Repository Structure

- `docs/`: main report, AI documentation, prompt log, self-assessment notes, and commit log placeholder.
- `scenario_b/`: scope definition plus per-screen description, checklist execution, and screen test notes.
- `usability_testing/`: test plan, recruitment, scripts, participant responses, evidence manifest, and usability report.
- `compatibility_testing/`: compatibility plan, matrix, environment log, naming rules, and screenshot evidence folders.
- `findings/`: aggregated bug/usability logs and Google Form tracking.
- `.github/skills/`: Agent Skill scaffolds for repeatable, non-fabricating workflows.
- `demo_videos/`: YouTube demo link tracker for Agent Skills.
- `exports/`: PDF export guidance and final submission packaging folder.
- `req/`: supplied assignment references and background materials.
- `screens/`: existing repository content preserved for manual review.

## Deliverables Checklist

- [x] Consolidated shared GUI checklist in `gui_checklist.md`
- [x] More than 40 reviewed checklist items
- [x] Reference sources included in `gui_checklist.md`
- [ ] AI prompts included in `gui_checklist.md`
- [ ] Human-added items and AI-gap explanations included in `gui_checklist.md`
- [x] Checklist execution on B1
- [x] Checklist execution on B2
- [x] Checklist execution on B3
- [x] Failed-item screenshots
- [x] Bug reports
- [x] Pilot usability session
- [ ] Five real user sessions
- [x] SUS or UEQ-S responses
- [x] Usability Report
- [ ] Compatibility matrix
- [ ] Screenshot for every executed compatibility cell
- [x] Google Form submissions
- [x] Aggregated findings log
- [ ] AI Audit Report
- [x] AI Critique
- [ ] Git commit log
- [x] Agent Skills
- [ ] YouTube demo links
- [x] Main Report Markdown
- [ ] Main Report PDF
- [ ] AI Audit Report PDF
- [ ] AI Critique PDF
- [ ] Final ZIP package

## Test Summary

| Metric | Value |
|---|---:|
| Checklist items designed | 61 |
| Checklist items reviewed | 61 |
| Checklist items executed | 99 applicable across B1-B3; 183 total assessments including 84 N/A |
| Passed | 72 |
| Failed | 27 |
| Not Executed | 0 |
| Bugs found | 12 confirmed findings |
| Usability findings | 11 unique: 9 GUI + 2 unique Task 2; 2 additional cross-method support records |
| Severity 0 findings | 0 |
| Severity 1 findings | 7 unique GUI findings |
| Severity 2 findings | 4 unique findings: 2 GUI with Task 2 support + 2 unique Task 2; 2 additional cross-method support records |
| Severity 3 findings | 0 |
| Severity 4 findings | 0 |
| Real participants | 3 total: 1 pilot + 2/5 required main participants |
| Google Form submissions | 23/23 unique findings submitted; 2 cross-method duplicates not submitted separately |
| Compatibility execution | 5/5 environment sessions executed; 7 Pass, 3 Fail, 5 state-blocked Not Executed rows |
| Demo videos | 0/7 |

## Self-Assessment Table

| No. | Criteria | Grade | Self-Assessed Grade |
|---|---|---:|---:|
| 1a | Shared checklist (>40 items) + sources + AI prompts | 15 | |
| 1b | Checklist execution on >=3 screens + bug reports | 15 | |
| 2 | User testing with 5 real users + Usability Report | 25 | |
| 3 | Cross-browser / cross-platform matrix | 25 | |
| 4 | Google Form submissions + aggregated findings log | 10 | |
| 5 | Agent Skills + demo videos | 10 | |
|  | Total | 100 | |

## Final Submission Filename

`<StudentID>_HW03_AI_GUIUsability_EMS_<SelfAssessedGrade>.zip`
