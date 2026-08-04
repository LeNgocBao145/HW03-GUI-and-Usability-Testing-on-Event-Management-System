# Compatibility Observation Template

Use one copy of this template per executed matrix row or material compatibility observation. Replace angle-bracket prompts only with observed values. Use `Not recorded`, `Not exposed by platform`, `Not inspected`, or `Not applicable` when that is the accurate final value.

## Traceability

- Matrix ID: `<required matrix ID>`
- Environment ID: `<required environment ID>`
- Screen ID / Name: `<required screen>`
- Execution date: `<observed date>`
- Tester: `<verified tester or Not recorded>`

## Environment

- Platform / tool: `<observed platform>`
- Classification: `<Real Device, Emulator, Simulator, or Cloud Browser>`
- OS and exact version: `<observed value or Not exposed by platform>`
- Browser and exact version: `<observed value or Not exposed by platform>`
- Device / profile: `<observed device or profile>`
- Device class: `<Desktop, Tablet, or Phone>`
- Orientation: `<Portrait or Landscape>`
- Viewport / resolution: `<observed dimensions>`
- Exact SUT URL: `<URL used during execution>`
- Approved account / identity witness: `<observed non-secret identifier or Not authenticated>`

## Steps

1. `<first observed execution step>`

## Expected

`<expected compatibility behavior>`

## Actual

`<actual observation>`

## Layout Observation

`<observed layout result or Not inspected>`

## Functional Observation

`<observed functional result or Not Executed>`

## Console / Network Notes

`<observed notes or Not inspected>`

## Result

- Result: `Not Executed`
- Decision rationale: `<evidence-based rationale>`

Allowed final row results are `Pass`, `Fail`, and `Not Executed`. Do not infer Pass or Fail.

## Evidence

- Screenshot reference: `<repository path or None>`
- Assignment identity witness visible: `<Yes, No, or Not applicable>`
- Environment information verifiable: `<Yes, Partially, or No>`
- Evidence relevance notes: `<brief relevance statement>`

## Finding Candidate

- Candidate ID: `<candidate ID or None>`
- Existing related finding: `<finding ID or None>`
- Reproducibility: `<Reproduced, Not reproduced, or Not attempted>`
- Proposed classification: `<Bug, Usability, Needs Human Classification, or None>`
- Final severity: `Not assigned`

## Human Confirmation

- Reviewer: `<reviewer or Not recorded>`
- Environment confirmed: `<Yes, No, or Partially>`
- Result confirmed: `<Yes, No, or Partially>`
- Evidence confirmed: `<Yes, No, or Partially>`
- Finding mapping confirmed: `<Yes, No, or Not applicable>`
- Review notes: `<notes or None>`
