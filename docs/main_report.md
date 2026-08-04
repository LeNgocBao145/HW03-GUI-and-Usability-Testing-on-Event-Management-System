# HW03 - GUI and Usability Testing on EMS

## Cover Information

| Field | Value |
| --- | --- |
| Student | Nguyen Minh Khoi |
| Student ID | 23127070 |
| Class / Cohort | 23KTPM1 |
| Course | CS423 / CSC15003 - Software Testing |
| Assignment | HW03 - GUI and Usability Testing on Event Management System |
| Scenario | Scenario B - User registers to attend an event |
| Assignment date | 04/08/2026 |
| AI tool | OpenAI Codex |

## Executive Summary

This report documents GUI checklist execution, usability testing, compatibility testing, findings reconciliation, and AI-assisted testing for Scenario B of the EMS application. The selected end-to-end flow was B1 Home / Events Listing, B2 Event Detail, and B3 Registration Form.

The shared checklist contains 61 checkpoints across all four required interface aspects. Across B1-B3, 99 checkpoints were applicable: 72 Passed and 27 Failed. The remaining 84 assessments were recorded as N/A in the per-screen summaries. Twenty GUI findings were promoted after human review. Task 2 contains one pilot and two main participant summaries, with a mean SUS score of 70.0. Task 3 contains 15 matrix rows with 7 Pass, 3 Fail, and 5 Not Executed results. The findings log contains 25 records: 23 unique findings submitted through Google Forms and two cross-method support records not submitted separately.

The report preserves the accepted project tradeoffs. The usability sample remains below the required five main participants and is summary only. Compatibility execution used three browsers rather than five, and the available cloud evidence used the authenticated Gmail identity instead of the requested student-ID overlay. These limitations are disclosed rather than reconstructed or hidden.

## 1. Assignment and SUT

The objective was to apply an AI-assisted but human-controlled testing workflow to a live Event Management System. The work covers checklist-based GUI testing, moderated usability testing, compatibility testing, finding submission, reusable Agent Skills, and an AI audit.

### SUT Environment History

| Environment | URL | Status | Notes |
| --- | --- | --- | --- |
| Previous ngrok endpoint | `https://promoter-starboard-prude.ngrok-free.dev/` | Offline | Historical assignment endpoint; returned `ERR_NGROK_3200` |
| Current EMS endpoint | `https://prod-dev.ems-fitus.cloud/` | Used | Manually reached during the recorded GUI, usability, and compatibility sessions |

All new execution artifacts record the exact route used when known. Credentials were stored only in `.local/ems_credentials.txt`, which is ignored by Git, and were not reproduced in reports.

## 2. Scenario and Screen Selection

### Scenario Objective

The user discovers an event, reviews its details, selects an attendee role, submits registration, and identifies the resulting registration status.

### Selected Screens

| Screen | Purpose | Selection rationale |
| --- | --- | --- |
| B1 - Home / Events Listing | Discovery and filtering | Covers featured content, search, filters, categories, status tabs, event cards, pagination, and navigation. |
| B2 - Event Detail | Information and decision support | Covers the event banner, schedule, organizer, registration period, location, save/share actions, and navigation. |
| B3 - Registration Form | Registration and feedback | Covers role selection, validation, counters, registration state, cancellation, confirmation dialog, and status feedback. |

Together, B1-B3 form the flow `B1 -> B2 -> B3` and cover visual consistency, navigation, forms, state changes, error recovery, and user feedback. The detailed selection record is in [scope_and_screen_selection.md](../scenario_b/scope_and_screen_selection.md).

## 3. Task 1A - Shared GUI Checklist

### Checklist Structure

The final [GUI checklist](../gui_checklist.md) contains 61 unique checkpoints.

| Interface aspect | Checkpoints |
| --- | ---: |
| IA-01 General UI Standards | 15 |
| IA-02 Forms and Inputs | 15 |
| IA-03 Navigation and Layout | 16 |
| IA-04 Feedback and State | 15 |
| **Total** | **61** |

The checklist includes layout, typography, contrast, responsive behavior, EN/VI internationalization, semantic accessibility, form validation, keyboard navigation, deep links, hover/focus states, loading, offline recovery, confirmation, duplicate-submit protection, real-time updates, and reversible actions.

### Design and Review Process

AI was used to organize reusable checklist-execution and validation workflows. Human review adapted the checklist to the EMS interface and retained checks that automated visual inspection can miss, including keyboard navigation, language metadata, responsive overlap, offline behavior, state persistence, and real-time updates. The coverage matrix maps applicable checkpoints to B1-B3 and records whether observation, interaction, developer tools, or screenshots were required.

The retained conversation does not contain the exact original prompt that first generated the checklist or item-level authorship for every human addition. Therefore, this report does not invent that provenance. The available AI workflow prompts and subsequent refinement instructions are retained in [prompt_log.md](prompt_log.md), and the complete sources used by the checklist are listed in `gui_checklist.md`.

### Reference Basis

- Nielsen's 10 Usability Heuristics.
- Norman's principles from *The Design of Everyday Things*.
- Shneiderman's Eight Golden Rules.
- HCMUS GUI and Usability Testing lecture material.
- WCAG-oriented contrast and semantic accessibility checks.

## 4. Task 1B - GUI Checklist Execution

### Execution Environment

The primary live verification used the Codex in-app browser on Windows 11 Home, a Lenovo 82S0 x64 laptop, and a 2560 x 1600 primary display. Responsive checks used desktop, 768 x 1024 tablet, and 390 x 844 mobile viewports. The authenticated EMS account displayed Lecturer access.

### Result Summary

| Screen | PASS | FAIL | N/A | Not Executed | Total |
| --- | ---: | ---: | ---: | ---: | ---: |
| B1 - Home / Events Listing | 25 | 12 | 24 | 0 | 61 |
| B2 - Event Detail | 21 | 7 | 33 | 0 | 61 |
| B3 - Registration Form | 26 | 8 | 27 | 0 | 61 |
| **Total** | **72** | **27** | **84** | **0** | **183** |

The execution files list all applicable checkpoints and the summaries account for N/A checkpoints. Detailed results are available in:

- [B1 checklist execution](../scenario_b/b1_home_events_listing/checklist_execution.md)
- [B2 checklist execution](../scenario_b/b2_event_detail/checklist_execution.md)
- [B3 checklist execution](../scenario_b/b3_registration_form/checklist_execution.md)

### Key GUI Results

| Screen | Promoted findings | Representative observations |
| --- | ---: | --- |
| B1 | 5 | Pagination summary ambiguity, mobile filter overlap, state loss after reload, empty-state recovery, and generic offline fallback. |
| B2 | 7 | Placeholder plural grammar, semantic accessibility, keyboard focus trapping, absent hover feedback, generic offline fallback, and manual-refresh behavior. |
| B3 | 8 | Placeholder plural grammar, semantic accessibility, keyboard focus trapping, absent hover/success feedback, generic offline fallback, manual-refresh behavior, and no Undo after cancellation. |

All explicit screenshot paths referenced by the GUI execution artifacts exist. Some dynamic checks additionally rely on tester notes or explicit human review because a single screenshot cannot demonstrate a sequence. In particular, B2/B3 offline and real-time-update conclusions have weaker screen-specific evidence than the other promoted findings; the human reviewer accepted the available support as sufficient for this submission.

## 5. Task 2 - User Testing

### Method

The goal-based task asked participants to find an upcoming event, review its information, register using an appropriate attendee role, and state when they believed registration had been recorded. Sessions used a think-aloud protocol, SUS, and eight post-task probe questions.

The available dataset contains one pilot and two main sessions. The pilot was excluded from the main metrics. Consent was confirmed and retained privately. Three profile/account screenshots have masked email addresses and support account/environment traceability only.

### Participant Summary

| ID | Session | Profile | Outcome | SUS |
| --- | --- | --- | --- | ---: |
| PILOT | Pilot | First-time EMS user | Partially Completed | 67.5 summary |
| P01 | Main | Student event-goer | Completed | 77.5 |
| P02 | Main | Infrequent web user | Partially Completed after task-directed help | 62.5 |

### Main-Session Metrics

| Metric | Result |
| --- | --- |
| Strict full task success | 1/2 - 50.0% |
| Assisted completion | 2/2 - 100% |
| Mean and median task time | 8:02.5 |
| Errors | 3 total; 1.50 mean |
| Hesitations | 8 total; 4.00 mean |
| Help requests | 1 total |
| Moderator interventions | 1 total |
| Recoveries | 2 total |
| Mean and median SUS | 70.0 |

### Usability Findings

Four analysis records were retained at severity 2:

1. Registration submission lacks a salient immediate acknowledgement.
2. Specialized attendee-role terminology increases interpretation effort.
3. The no-results state lacks a direct recovery action.
4. Save Event competes with Register in the action hierarchy.

The acknowledgement and no-results observations support existing GUI findings and were not submitted as duplicate form records. The role-terminology and action-hierarchy findings were submitted separately.

### Accepted Task 2 Limitation

The assignment specifies five main participants. This repository contains two main participants plus one pilot. No screen/audio recording or detailed event timeline was retained, so the behavioral counts are human-confirmed summaries and are not independently verifiable. The reviewer explicitly accepted this tradeoff and instructed that missing participants or raw data must not be fabricated. Detailed calculations and limitations are recorded in [analysis_calculations.md](../usability_testing/analysis_calculations.md) and [usability_report.md](../usability_testing/usability_report.md).

## 6. Task 3 - Cross-Browser and Cross-Platform Testing

### Environment Summary

| Environment | Configuration | Outcome |
| --- | --- | --- |
| ENV-01 | BrowserStack, Windows 11, Chrome 150, Desktop | Session executed; trial minutes ended before SUT load |
| ENV-02 | TestingBot, Windows 10, Chrome 150, 1024 x 768 tablet-sized viewport | B1-B3 Pass |
| ENV-03 | TestingBot Galaxy S10, Android 10, Chrome, Phone | Blank SUT login screen; B1-B3 Fail |
| ENV-04 | TestingBot iPhone 14, iOS 17.6, Safari, Phone | B1/B2 Pass; B3 state blocked |
| ENV-05 | TestingBot Galaxy S20, Android 10, Firefox, Phone | B1/B2 Pass; B3 state blocked |

### Matrix Results

| Screen | Pass | Fail | Not Executed |
| --- | ---: | ---: | ---: |
| B1 | 3 | 1 | 1 |
| B2 | 3 | 1 | 1 |
| B3 | 1 | 1 | 3 |
| **Total** | **7** | **3** | **5** |

The confirmed compatibility finding `CP-ENV03-FC-001` records a blank EMS login page on the Galaxy S10 / Android 10 / Chrome environment. It was classified as a Low bug and submitted through Google Forms.

### Accepted Task 3 Tradeoffs

- The executed matrix contains Chrome, Safari, and Firefox; Edge and Samsung Internet were not completed.
- ENV-02 represents tablet-sized desktop viewport emulation rather than a physical tablet.
- ENV-01 did not reach the SUT, and B3 ENV-04/ENV-05 did not expose an actionable registration state.
- The screenshots show the EMS URL and TestingBot environment identity. The human reviewer accepted the visible authenticated Gmail identity as sufficient session attribution even though the assignment requested a student-ID email overlay.
- The ENV-03 images preserve the same blocked white-screen state for B1-B3 because none of the target screens could be reached.

The reviewer accepted these limitations and chose not to re-execute Task 3. The complete matrix, environment metadata, evidence references, and limitations remain available in [compatibility_matrix.md](../compatibility_testing/compatibility_matrix.md), [environment_log.md](../compatibility_testing/environment_log.md), and [compatibility_report.md](../compatibility_testing/compatibility_report.md).

## 7. Findings and Google Form Reconciliation

| Metric | Count |
| --- | ---: |
| Findings-log rows | 25 |
| Unique findings submitted | 23 |
| Cross-method support records not submitted separately | 2 |
| Bug findings submitted | 12 |
| Unique usability findings submitted | 11 |

The aggregated [Bug and Usability Findings Log](../findings/bug_and_usability_findings_log.md) and [Google Form Submission Log](../findings/google_form_submission_log.md) contain matching IDs and timestamps for all 23 unique submitted findings. The form was submitted using a human-approved faculty-account equivalent. Submission timestamps were recorded only after Google Forms displayed confirmation.

## 8. Agent Skills and Demonstration

Nine reusable Agent Skills are included:

- `ai-audit-logger`
- `compatibility-matrix-validator`
- `finding-log-validator`
- `gui-checklist-execution`
- `participant-session-processor`
- `submission-readiness-audit`
- `usability-analysis`
- `usability-report-generator`
- `usability-session-processor`

The demonstration video is recorded in [agent_skill_demo_links.md](../demo_videos/agent_skill_demo_links.md): <https://youtu.be/pESRmsptyIo>.

## 9. AI Usage and Human Oversight

OpenAI Codex was used to structure the repository, create and refine Agent Skills, prepare draft execution records, validate finding candidates, reconcile counts and paths, assist browser-based workflows, and maintain the reports. The [AI Audit Report](ai_audit_report.md) groups 49 retained prompts, while [prompt_log.md](prompt_log.md) contains the chronological condensed prompt register.

Human review remained authoritative. Draft files were not applied until confirmation; finding candidates were not promoted automatically; severity and classification decisions were human-controlled; and unsupported participant, environment, or evidence data was not generated. A notable correction occurred when the human reviewer rejected an AI interpretation of CP-B3-02 and confirmed that the B3 dialog rendered correctly, so the result was retained as Pass.

## 10. Limitations and Accepted Decisions

- Task 2 includes two main participants rather than five and has no detailed timelines or recordings.
- Task 3 includes three browsers rather than five and retains five Not Executed rows.
- The compatibility screenshots use a human-approved Gmail identity witness instead of the requested student-ID overlay.
- Some dynamic GUI findings rely on human review rather than screen-specific sequence evidence.
- The exact original checklist-generation prompt and per-message AI timestamps were not retained; the repository uses a condensed prompt audit without inventing missing metadata.

These limitations affect strict requirement compliance but are deliberately disclosed. The report does not claim that skipped work was completed.

## 11. Conclusion

The repository provides a traceable Scenario B testing package covering B1-B3, a 61-item shared GUI checklist, 183 per-screen assessments, 25 consolidated finding records, two main usability-session summaries plus a pilot, a 15-row compatibility matrix, nine Agent Skills, a demonstration video, and an AI audit. Within the accepted limitations, the strongest outcomes are the evidence-linked GUI execution, human-controlled finding workflow, reproducible two-session SUS arithmetic, and transparent compatibility reconciliation.

The main risks are the reduced usability sample, incomplete browser coverage, blocked compatibility rows, and evidence exceptions. These are retained as explicit limitations rather than being concealed or filled with unsupported data.

## References

- [GUI checklist and source list](../gui_checklist.md)
- [Checklist coverage matrix](checklist_coverage_matrix.md)
- [Scenario B scope](../scenario_b/scope_and_screen_selection.md)
- [Usability Report](../usability_testing/usability_report.md)
- [Compatibility Report](../compatibility_testing/compatibility_report.md)
- [Bug and Usability Findings Log](../findings/bug_and_usability_findings_log.md)
- [AI Audit Report](ai_audit_report.md)
- [AI Critique](ai_critique.md)
- Supplied assignment materials under `req/`
