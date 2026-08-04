# Compatibility Environment Log

The rows below are the reconciled records for the five attempted environments. Values unavailable from the provider are recorded explicitly rather than inferred.

| Environment ID | Platform / Tool | Classification | OS | OS Version | Browser | Browser Version | Device | Device Class | Viewport / Resolution | Orientation | Account Used | Exact SUT URL | Date | Tester | Availability / Status | Limitations | Evidence Reference |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ENV-01 | BrowserStack Live Desktop | Cloud Browser | Windows | 11 (exact build not exposed) | Chrome | 150.0 | BrowserStack Live Desktop - Windows 11 / Chrome 150.0 | Desktop | 1256 x 912 | Landscape | Not authenticated | https://prod-dev.ems-fitus.cloud/ | 2026-08-04 | Not recorded | Executed - session blocked before SUT load | The environment session was executed, but BrowserStack Free Trial minutes were exhausted before the SUT loaded. EMS authentication, identity witness, and all B1-B3 screen checks were blocked. | None - session blocked before SUT loaded |
| ENV-02 | TestingBot Manual Desktop Testing | Cloud Browser | Windows | 10 | Chrome | 150 | TestingBot Windows 10 desktop session with tablet-sized viewport | Tablet | 1024 x 768 | Landscape | EMS test account (Gmail identity visible) | https://prod-dev.ems-fitus.cloud/ | 2026-08-04 | Not recorded | Executed - Pass | Tablet-sized viewport emulation on Windows, not a physical tablet. | B1_CP-B1-02_WINDOWS_CHROME_TABLET_PASS_01.png; B2_CP-B2-02_WINDOWS_CHROME_TABLET_PASS_01.png; B3_CP-B3-02_WINDOWS_CHROME_TABLET_PASS_01.png; B3_CP-B3-02_WINDOWS_CHROME_TABLET_PASS_02.png |
| ENV-03 | TestingBot Real Device Testing | Real Device | Android | 10.0 | Chrome | Not exposed by TestingBot | Galaxy S10 | Phone | 1440 x 3440 | Portrait | Not authenticated | https://prod-dev.ems-fitus.cloud/login | 2026-08-04 | Not recorded | Executed - Android device blocked SUT rendering; Fail | The Android device session was executed, but the EMS login route rendered as a blank white page and remained blank after one reload. This device-side rendering block prevented authentication and B1-B3 navigation. TestingBot did not expose the exact Chrome version. | B1_CP-B1-03_ANDROID_CHROME_PHONE_FAIL_01.png; B2_CP-B2-03_ANDROID_CHROME_PHONE_FAIL_01.png; B3_CP-B3-03_ANDROID_CHROME_PHONE_FAIL_01.png |
| ENV-04 | TestingBot Real Device Testing | Real Device | iOS | 17.6 | Safari | Not exposed by TestingBot | iPhone 14 | Phone | 1170 x 2532 | Portrait | EMS test account (Gmail identity visible) | https://prod-dev.ems-fitus.cloud/ | 2026-08-04 | Not recorded | Executed - B1/B2 Pass; B3 state blocked | The environment session and all three row attempts were executed. TestingBot did not expose the exact Safari build. The selected B3 event showed no available registration role, so role selection and dialog checkpoints retained `Not Executed`. | B1_CP-B1-04_IOS_SAFARI_PHONE_PASS_01.png; B2_CP-B2-04_IOS_SAFARI_PHONE_PASS_01.png; B2_CP-B2-04_IOS_SAFARI_PHONE_PASS_02.png; B3_CP-B3-04_IOS_SAFARI_PHONE_NOT_EXECUTED_01.png |
| ENV-05 | TestingBot Real Device Testing | Real Device | Android | 10.0 | Firefox | Not exposed by TestingBot | Galaxy S20 | Phone | 1440 x 3200 | Portrait | EMS test account (Gmail identity visible) | https://prod-dev.ems-fitus.cloud/ | 2026-08-04 | Not recorded | Executed - B1/B2 Pass; B3 state blocked | The environment session and all three row attempts were executed. Planned Galaxy Tab A could not launch Firefox, so Galaxy S20 was used as the closest stronger replacement and is recorded as a phone. The available B3 event was ended, so selection and dialog checkpoints retained `Not Executed`. | B1_CP-B1-05_ANDROID_FIREFOX_PHONE_PASS_01.png; B2_CP-B2-05_ANDROID_FIREFOX_PHONE_PASS_01.png; B2_CP-B2-05_ANDROID_FIREFOX_PHONE_PASS_02.png; B3_CP-B3-05_ANDROID_FIREFOX_PHONE_NOT_EXECUTED_01.png |

Allowed classifications: `Real Device`, `Emulator`, `Simulator`, or `Cloud Browser`.

## Recording Rules

- Use a stable Environment ID and reference it from observation notes.
- Record exact versions reported by the tool or device; do not infer them from user-agent assumptions or filenames.
- Record the real device name or cloud/emulator profile and its exact viewport or resolution.
- Record the approved account identifier without storing credentials or unrelated personal data.
- Record the exact URL used during that environment session.
- Availability must state what was actually observed, such as `Available`, `Unavailable`, or `Session blocked`, with a date.
- Record tool limitations, emulation limitations, unavailable features, or trial restrictions.
- Link an environment-identification screenshot or other relevant evidence when available.

For new executions, use `https://prod-dev.ems-fitus.cloud/` only when that is the environment actually used. All test evidence must record the exact SUT URL used at the time of execution. Do not assume the current endpoint is operational unless manually verified.
