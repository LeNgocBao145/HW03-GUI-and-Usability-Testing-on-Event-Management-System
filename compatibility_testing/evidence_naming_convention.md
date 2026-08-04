# Compatibility Evidence Naming Convention

## Pattern

`<ScreenID>_<MatrixID>_<OS>_<Browser>_<DeviceClass>_<Result>_<NN>.png`

Example only:

`B1_CP-B1-01_WINDOWS_CHROME_DESKTOP_PASS_01.png`

The example is not evidence and does not represent an executed environment.

## Naming Rules

- Use uppercase for Screen ID, Matrix ID, OS, Browser, Device Class, and Result.
- Replace spaces and slashes with underscores.
- Use only ASCII letters, digits, underscores, and hyphens: `[A-Z0-9_-]`.
- Result must be `PASS`, `FAIL`, or `NOT_EXECUTED`. A `NOT_EXECUTED` screenshot is diagnostic evidence of the reached state and must not be counted as a completed row.
- Use a two-digit sequence beginning at `01`.
- Increment the sequence for multiple screenshots from the same row; never overwrite an existing file.
- Keep the filename aligned with the Matrix ID and the actual environment record.

## Screenshot Locations

| Screen | Desktop / Tablet / Phone evidence | Failed evidence |
|---|---|---|
| B1 | `compatibility_testing/evidence/b1_home_events_listing/<device-class>/` | `compatibility_testing/evidence/b1_home_events_listing/failed/` |
| B2 | `compatibility_testing/evidence/b2_event_detail/<device-class>/` | `compatibility_testing/evidence/b2_event_detail/failed/` |
| B3 | `compatibility_testing/evidence/b3_registration_form/<device-class>/` | `compatibility_testing/evidence/b3_registration_form/failed/` |

Use lowercase directory names: `desktop`, `tablet`, `phone`, and `failed`. Store the primary screenshot for a Fail row in `failed/`; optional supporting screenshots may remain in the matching device-class directory.

## Required Screenshot Content

Each executed-row screenshot must visibly show or be paired with an environment record that verifies:

- exact EMS URL;
- OS and the version exposed by the provider;
- browser and the version exposed by the provider;
- device or cloud/emulator profile;
- device class and viewport or resolution;
- approved assignment identity witness;
- tested screen and relevant result.

## Assignment Identity Witness

- Prefer the assignment-approved student-ID email text.
- For the recorded Task 3 sessions, the human reviewer accepted the authenticated Gmail identity visible in EMS.
- Do not claim an identity witness when authentication or SUT navigation did not succeed.
- Place it where it remains readable and does not obscure the tested UI.
- Do not include passwords, tokens, participant data, or unrelated account identifiers.
- The identity witness is not a substitute for real environment identification.

## Failed Evidence Handling

- Capture the visible failure and enough surrounding UI to understand it.
- Record reproduction notes and the matching Matrix ID.
- Reference the exact file from the matrix and observation record.
- Link a Finding ID only after the observation has received human confirmation.

## Integrity Rules

- Never fabricate or digitally alter OS, browser, version, device, URL, or result labels.
- Never infer environment values from the filename alone.
- Privacy masking may hide unrelated sensitive data, but it must not change the tested UI or evidence meaning.
- Do not reuse Task 1 screenshots as Task 3 evidence unless a human reviewer verifies that they came from the exact recorded compatibility execution and satisfy every requirement above.
