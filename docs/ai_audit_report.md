<center>

# Faculty of Information Technology (FIT) - Ho Chi Minh City University of Science (HCMUS)

# CS423 / CSC15003 - Software Testing (AI-augmented, 2026)

</center>

# AI Audit Report

## Student Information

| Field | Value |
| --- | --- |
| Student name | Nguyen Minh Khoi |
| Student ID | 23127070 |
| Class / Cohort | 23KTPM1 |
| Assignment ID | HW03 - GUI and Usability Testing on Event Management System |
| Assignment date | 04/08/2026 |
| AI tool used | OpenAI Codex |
| AI used | Yes |

## AI Use Declaration

I used OpenAI Codex to help prepare and maintain repository documentation, reusable Agent Skills, GUI checklist execution records, finding validation and reconciliation records, usability-testing artifacts, compatibility-testing artifacts, and Google Form submission tracking. AI-generated observations were not accepted as test facts without available evidence or explicit human review. Credentials and participant-sensitive data were excluded from the retained prompt record.

## Prompt Used to Prepare the Log

```prompt
tổng hợp các prompt trong đoạn chat vào prompt log
cập nhật vào AI audit
```

The complete chronological register is maintained in [`prompt_log.md`](prompt_log.md). It contains 49 unique prompt IDs, `P-001` through `P-049`. The register uses faithful condensed wording because individual chat timestamps and a verbatim export were not available. No timestamp was invented.

## Interaction Audit

| Interaction | Prompt IDs | AI-assisted purpose | Output summary | Human review and control | Primary artifacts |
| --- | --- | --- | --- | --- | --- |
| 1 | P-001-P-003 | Repository setup, reusable Agent Skills, checklist filename normalization, and SUT URL migration. | Skills and operational URL references were updated while historical URL facts were preserved. | File deletion and URL replacement were performed only after explicit direction; no Git commit was made. | `.github/skills/`, `gui_checklist.md`, `README.md`, `docs/main_report.md` |
| 2 | P-004-P-011 | B1 GUI checklist execution, live verification, evidence handling, candidate validation, and reconciliation. | B1 execution records, evidence references, statistics, and approved findings were prepared and updated. | PASS/FAIL was not assumed; human rechecks and promotion decisions controlled final status. | `scenario_b/b1_home_events_listing/`, `screenshots/ScreenB1/`, `findings/` |
| 3 | P-012-P-017 | B2 GUI checklist execution, evidence standardization, candidate review, and reconciliation. | B2 outputs were aligned with the B1 layout and canonical evidence paths. | The reviewer kept FC-004 and FC-005 separate, accepted available evidence, and explicitly approved FC-001-FC-007 for promotion. | `scenario_b/b2_event_detail/`, `screenshots/ScreenB2/evidences/`, `findings/` |
| 4 | P-018-P-023 | B3 registration-form execution, checkpoint reconciliation, duplicate analysis, and finding promotion. | B3 results and eight approved findings were reconciled with B1/B2 conventions. | Specific checkpoint results, duplicate acceptance, promotion, classification consistency, and severity Low (1) were human decisions. | `scenario_b/b3_registration_form/`, `screenshots/ScreenB3/evidences/`, `findings/` |
| 5 | P-024-P-033 | Usability-testing skills, Phase A artifacts, privacy/evidence review, participant reconciliation, and form submission. | Usability artifacts reflected two main participants, one pilot/helper, redacted images, no recording, and synchronized submissions. | Missing data was not recreated; the user confirmed participant counts, privacy status, evidence sufficiency, and account handling. | `.github/skills/participant-session-processor/`, `.github/skills/usability-report-generator/`, `usability_testing/`, `screenshots/`, `findings/` |
| 6 | P-034-P-036 | Task 3 preparation and validation of the 15-row compatibility matrix. | Five planned environments were mapped consistently to B1, B2, and B3 with required OS/browser/device-class coverage. | Unknown execution metadata remained pending until real sessions; no environment availability or result was fabricated. | `compatibility_testing/compatibility_test_plan.md`, `compatibility_testing/compatibility_matrix.md`, `compatibility_testing/environment_log.md` |
| 7 | P-037-P-045 | Manual compatibility execution across BrowserStack, LambdaTest, Browserling, Sauce Labs, and TestingBot. | Environment attempts, provider substitutions, blocks, completed checks, and evidence were reconciled across ENV-01-ENV-05. | Provider changes, account login, evidence exceptions, CP-B3-02 correction, ENV-03 white-screen result, and device choices were directed or confirmed by the user. | `compatibility_testing/environment_log.md`, `compatibility_testing/compatibility_matrix.md`, `compatibility_testing/evidence/`, `compatibility_testing/compatibility_report.md` |
| 8 | P-046-P-047 | Compatibility finding review and Google Form submission. | `CP-ENV03-FC-001` was documented, submitted, and included in synchronized totals. | The finding was submitted only after the user requested submission; the timestamp was recorded only after success. | `findings/bug_and_usability_findings_log.md`, `findings/google_form_submission_log.md`, compatibility evidence |
| 9 | P-048-P-049 | Prompt-log compilation and AI audit synchronization. | A 49-entry redacted prompt register and this audit report were prepared. | Individual timestamps remain unrecorded rather than invented; secrets remain redacted. | `docs/prompt_log.md`, `docs/ai_audit_report.md` |

## Human Oversight Record

- Human confirmation was required before applying draft GUI execution updates.
- A Valid Candidate did not automatically become a confirmed finding.
- Finding promotion, type decisions, and severity assignment remained under human control.
- Human review corrected unsupported AI conclusions, including CP-B3-02.
- Test results were based on live observations, supplied screenshots, tester notes, or explicit human review.
- Missing recordings, unavailable metadata, unsupported cloud environments, and blocked sessions were not fabricated.
- Google Form metadata was recorded only after actual submission.
- Authentication secrets were used only for the requested sessions and are not reproduced in the prompt log or this report.

## Prompt Register Validation

| Check | Result |
| --- | --- |
| Prompt ID range | P-001-P-049 |
| Total prompt entries | 49 |
| Duplicate prompt IDs | None |
| Missing IDs in range | None |
| Credentials copied into audit | No |
| Individual timestamps fabricated | No |
| Ambient browser-state blocks logged as prompts | No |

## Limitations

- The retained conversation did not provide independently exportable per-message timestamps.
- The prompt register is condensed and is not represented as a verbatim platform export.
- Some actions depended on manual browser interaction, visual review, or user-confirmed results that Codex could not independently reproduce after the cloud session ended.
- Student name, class/cohort, assignment date, instructor, and signature details were not available and remain explicitly marked as not recorded.

## Signature

| Field | Value |
| --- | --- |
| Student name (printed) | Nguyen Minh Khoi |
| Student ID | 23127070 |
| Class / Cohort | 23KTPM1 |
| Course | CS423 / CSC15003 - Software Testing |
| Instructor | Mr. Lam Quang Vu |
| Date | 04/08/2026 |
| Signature | Khoi |

## References

- [`prompt_log.md`](prompt_log.md) - complete redacted prompt and output register.
- [`ai_critique.md`](ai_critique.md) - critique of AI contribution and limitations.
- [`main_report.md`](main_report.md) - primary HW03 report.
- [`../README.md`](../README.md) - repository scope and submission overview.
