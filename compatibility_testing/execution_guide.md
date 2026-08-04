# Compatibility Execution Guide

## 1. Preparation

1. Select one `Not Executed` row from `compatibility_matrix.md`.
2. Confirm that the required OS, browser, device class, and test source are available.
3. Prepare the approved EMS account and assignment identity witness without storing credentials in the repository.
4. Confirm the target evidence directory and filename before starting.
5. Do not copy environment values from the proposed matrix; record what the environment actually reports.

## 2. BrowserStack, LambdaTest, Or Device Setup

- Open the real device, emulator, simulator, or cloud session.
- Record the provider/tool, classification, device profile, OS and version, browser and version, orientation, and viewport/resolution.
- If the requested combination is unavailable, keep the row `Not Executed` and document the availability limitation. Do not substitute an environment without updating the plan and receiving human review.
- A resized desktop browser must be classified accurately and must not be called a real tablet or phone.

## 3. Authentication

1. Open the exact EMS URL intended for the run.
2. Authenticate with the approved account.
3. Do not expose or record the password.
4. Verify that authentication succeeded before navigating to B1-B3.

## 4. Navigation

- B1: open Home / Events Listing at the actual Dashboard URL.
- B2: open a representative active event and record its exact Event Detail URL.
- B3: enter the registration flow or registration state from that event and record the exact URL and state used.

If a required state cannot be reached, retain `Not Executed` or record a real Fail only when the failure is within the defined test and is supported by evidence.

## 5. Assignment Identity Witness

- Display the assignment-approved student-ID email or the human-approved authenticated Gmail identity.
- Keep the approved witness visible in the primary compatibility evidence when feasible.
- Do not cover the issue, screen identity, URL, or environment information.
- Do not use the overlay to invent OS, browser, device, version, or result labels.

## 6. Execution Steps

1. Confirm the expected screen and initial load.
2. Check layout, responsive behavior, text, images, controls, overflow, scrolling, and visual consistency.
3. Exercise the screen's core navigation and functional interaction.
4. Record actual layout and functional observations separately.
5. Compare a suspected compatibility issue with another executed environment when feasible.
6. Do not infer Pass from the absence of a prior bug report.

## 7. Evidence Capture

1. Capture the actual screen during this session.
2. Include the approved assignment identity witness, or document why the SUT/authenticated state was not reached.
3. Ensure the exact URL and environment can be verified from the screenshot or linked environment record.
4. Name and store the screenshot according to `evidence_naming_convention.md`.
5. Verify the saved file exists before adding its reference to the matrix.

## 8. Pass / Fail Decision

- Mark Pass only when layout and functional checks both pass in the recorded environment.
- Mark Fail only from a real, reproducible observation with notes and evidence.
- Keep Not Executed when the session, state, or evidence is unavailable.
- Never leave a placeholder as the final result for an attempted row; use Pass, Fail, or Not Executed.

## 9. Finding Logging

1. Complete `compatibility_observation_template.md` for each Fail or material difference.
2. Assign a finding-candidate reference without final severity.
3. Link the matrix row, environment row, and evidence.
4. Obtain human review before adding a confirmed finding to the aggregated findings log.
5. Reconcile duplicates with existing B1-B3 findings rather than creating an unsupported duplicate.

## 10. Cleanup

- Sign out or close the cloud/device session when required.
- Remove credentials and temporary sensitive data.
- Confirm that no participant data was captured.
- Verify the matrix, environment log, observation notes, and evidence reference agree.

## 11. Human Review Checkpoint

Before finalizing each executed row, a human reviewer must confirm:

- environment details are exact;
- Pass or Fail matches the observation;
- screenshot is relevant and readable;
- the approved assignment identity witness is present, or its absence is accurately explained;
- Fail notes and finding mapping do not exceed the evidence.
