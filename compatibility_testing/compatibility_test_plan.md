# Compatibility Test Plan

## Purpose

Prepare and execute repeatable cross-browser and cross-platform checks for the three Scenario B screens without inventing environments, observations, results, or evidence.

Current EMS endpoint for new compatibility runs: `https://prod-dev.ems-fitus.cloud/`

All test evidence must record the exact SUT URL used at the time of execution. Do not state that this endpoint is operational unless it has been manually verified in the target environment.

## Scope

| Screen ID | Screen | Target route |
|---|---|---|
| B1 | Home / Events Listing | `/dashboard` |
| B2 | Event Detail | `/events/:id` using a representative active event |
| B3 | Registration State | The registration state exposed by the selected B2 event |

The Task 1 screenshots under `screenshots/ScreenB1/`, `screenshots/ScreenB2/`, and `screenshots/ScreenB3/` provide screen context only. They do not count as Task 3 compatibility evidence unless a human reviewer confirms that a screenshot was captured during an identified compatibility matrix execution and meets every Task 3 evidence requirement.

## Test Objectives

- Detect layout, rendering, typography, overflow, clipping, and responsive differences.
- Verify that core navigation and screen-specific interactions remain functional.
- Compare B1, B2, and B3 behavior across the selected OS, browser, and device-class coverage.
- Record exact environment data and screenshot evidence for every executed row.
- Create finding candidates only from real, reproducible compatibility observations.

## Coverage Strategy

The original target for each screen was:

- 3 operating systems: Windows, iOS, and Android.
- 5 browsers: Chrome, Edge, Firefox, Safari, and Samsung Internet.
- 3 device classes: Desktop, Tablet, and Phone.

The matrix does not require all `3 x 5 x 3` combinations. Five rows per screen were designed to cover the five distinct browsers while collectively including all selected operating systems and device classes.

Final reconciliation recorded three operating systems, three browser families, and three device classes. Edge and Samsung Internet were not executed after environment substitutions, so five-browser coverage is explicitly incomplete. Exact versions are recorded when exposed by the provider; unavailable values are labeled `Not exposed by TestingBot`.

## Test Sources

Execution may use BrowserStack, LambdaTest, another documented cloud provider, a verified emulator or simulator, or a real device. The tester must record the actual source and must not label a desktop responsive viewport as a real tablet or phone.

Allowed source classifications:

- Real Device
- Emulator
- Simulator
- Cloud Browser

## Core Checks Per Row

1. Authenticate with the approved test account without exposing credentials.
2. Navigate to the planned B1, B2, or B3 state.
3. Confirm that the exact URL and expected screen are visible.
4. Check initial load, layout integrity, text rendering, images, controls, scrolling, and responsive behavior.
5. Exercise the screen-specific core flow without changing unrelated participant or production data.
6. Record separate Layout Result and Functional Result observations.
7. Capture screenshot evidence with environment identification and the assignment identity witness approved for the session.
8. Record Pass or Fail only after the row has been executed and the evidence has been reviewed.

## Pass / Fail Criteria

**Pass** requires both of the following:

- Layout: no compatibility-specific clipping, overlap, unreadable text, broken responsive behavior, missing content, or material visual inconsistency.
- Functional: the planned core interactions and navigation work in the recorded environment.

**Fail** applies when a real, reproducible compatibility-specific layout or functional problem is observed. Every Fail row must include notes, evidence, and a Finding ID or finding-candidate reference after human review.

**Not Executed** is the only valid result for proposed rows before a real session. A missing observation must never be converted to Pass or Fail.

## Evidence Requirements

Every executed row must include a screenshot that records or visibly supports:

- exact SUT URL used;
- OS and the exact version exposed by the provider;
- browser and the exact version exposed by the provider;
- device or cloud/emulator environment;
- device class and viewport or resolution;
- assignment identity witness;
- screen and observable result.

Evidence must be stored under the matching `compatibility_testing/evidence/<screen>/<device-class>/` directory. Failed evidence must be stored under the screen's `failed/` directory and follow `evidence_naming_convention.md`.

## Assignment Identity Witness

- The original plan required the assignment-approved student-ID email text.
- The human reviewer later approved the authenticated Gmail identity visible in EMS as the witness for ENV-02, ENV-04, and ENV-05.
- ENV-01 and ENV-03 did not reach an authenticated SUT state, so no identity witness is claimed for those environments.
- Keep the overlay readable without covering the tested UI or failure.
- Do not expose passwords, tokens, participant data, or unrelated account details.
- The overlay is not proof of OS, browser, version, or device; those values require real environment records.

## Defect Logging Workflow

1. Record the raw observation in `compatibility_observation_template.md` format.
2. Link the matrix row and screenshot evidence.
3. Reproduce the issue in the same environment when feasible.
4. Compare against at least one other executed environment before calling it compatibility-specific.
5. Create a finding candidate; do not assign final severity automatically.
6. Obtain human confirmation before adding or reconciling a confirmed row in `findings/bug_and_usability_findings_log.md`.

## Entry Criteria

- The target EMS endpoint and required B1-B3 routes are reachable in the selected environment.
- The approved account is available and authentication is permitted.
- The test source reports environment information; values not exposed by the provider must be labeled explicitly.
- The approved assignment identity-witness method is prepared.
- Matrix ID, environment ID, viewport, and evidence destination are selected.

## Exit Criteria

- Every matrix row is either Pass, Fail, or explicitly retained as Not Executed.
- Actual OS, browser, and device-class coverage is counted from reconciled rows, and unmet target coverage is reported without inflation.
- Every executed row has a matching environment record and screenshot.
- Every Fail row has notes and a reviewed finding reference.
- The compatibility report and coverage summary match the matrix and evidence files.

## Limitations

- ENV-01 was blocked before the SUT loaded because BrowserStack trial minutes were exhausted.
- ENV-02 used a tablet-sized Windows desktop viewport rather than a physical tablet.
- ENV-03 executed but was blocked by blank SUT rendering on the Android device before authentication; the three rows were human-confirmed as Fail.
- ENV-04 and ENV-05 did not complete B3 because an executable registration state was unavailable.
- TestingBot did not expose the exact Android Chrome, iOS Safari, or Android Firefox browser versions.
- Edge and Samsung Internet coverage remains missing after environment substitutions.
- Responsive emulation may reveal viewport defects but does not replace real-device behavior unless accurately classified.
- Existing Task 1 evidence does not independently prove Task 3 environment coverage.

## Anti-Fabrication Rules

- Never invent a BrowserStack, LambdaTest, emulator, simulator, or physical-device session.
- Never infer OS, browser, version, device, URL, or result from a filename alone.
- Never create or alter a screenshot to fabricate environment labels or a test outcome.
- Never mark a planned row Pass or Fail without real execution and relevant evidence.
- Never create a compatibility finding from an unexecuted row.
