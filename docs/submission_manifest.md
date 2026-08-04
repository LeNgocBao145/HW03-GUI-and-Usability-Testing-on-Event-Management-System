# Final Submission Manifest

## Package

- Student: Nguyen Minh Khoi
- Student ID: 23127070
- Class: 23KTPM1
- Group: 4
- Scenario: B - User registers to attend an event
- Self-assessed grade: 070/100
- ZIP filename: `23127070_HW03_AI_GUIUsability_EMS_070.zip`

## Required Contents

| Requirement | Package location | Status |
| --- | --- | --- |
| Main Report Markdown | `docs/main_report.md` | Included |
| Main Report PDF | `exports/pdf/main_report.pdf` | Included and visually verified |
| Bug & Usability Findings Log | `findings/bug_and_usability_findings_log.md` | Included |
| Cross-platform screenshots | `compatibility_testing/evidence/` | Included |
| AI Audit Report Markdown | `docs/ai_audit_report.md` | Included |
| AI Audit Report PDF | `exports/pdf/ai_audit_report.pdf` | Included and visually verified |
| AI Critique Markdown | `docs/ai_critique.md` | Included |
| AI Critique PDF | `exports/pdf/ai_critique.pdf` | Included and visually verified |
| Git commit log | `docs/git_commit_log.txt` | Included |
| Agent Skills | `.github/skills/` | Included |
| Agent Skill demo | `demo_videos/agent_skill_demo_links.md` | Included |
| README | `README.md` | Included |

The package also includes the GUI checklist, Scenario B execution artifacts, GUI screenshots, usability-testing artifacts, compatibility plans/matrix/report, findings reconciliation, prompt log, self-assessment notes, and the reproducible PDF export script.

## PDF Verification

| File | Pages | Bytes | SHA-256 |
| --- | ---: | ---: | --- |
| `main_report.pdf` | 8 | 235618 | `D4320B29EC54EF4C457738225B4508E15E0903C68016CA870F6381BD895C4B9F` |
| `ai_audit_report.pdf` | 4 | 170895 | `3635D65B729FE2F985537A87B8AE969C1C0738CA7B148EF83FA008D6D84B9E57` |
| `ai_critique.pdf` | 1 | 52471 | `86E12173AAFF8BD6C691A2EBF6BE1F8D93902F1782F351F7605C36162263D022` |

All pages were rendered to images and inspected for blank pages, clipped tables, broken fonts, unresolved Markdown, and unreadable content.

## Deliberate Exclusions

- `.git/` - repository internals are replaced by `docs/git_commit_log.txt`.
- `.local/` - contains local credentials and must never be submitted.
- `.qodo/` - local tool configuration is not a deliverable.
- `req/` - supplied source requirements are not student deliverables.
- `exports/final_submission/` - excluded to prevent the ZIP from containing itself.

## Accepted Limitations

- Task 2 includes one pilot and two main participants rather than five main participants.
- Task 2 has no detailed timelines or screen/audio recordings.
- Task 3 executed Chrome, Safari, and Firefox rather than five browsers.
- Five compatibility rows remain Not Executed because of provider or event-state blockers.
- The available compatibility screenshots use the human-approved authenticated Gmail identity witness rather than the requested student-ID overlay.
- The exact original checklist-generation prompt and per-message AI timestamps were not retained.

These limitations are disclosed in `README.md`, `docs/main_report.md`, and the task-specific reports. No missing evidence or participant data was reconstructed.
