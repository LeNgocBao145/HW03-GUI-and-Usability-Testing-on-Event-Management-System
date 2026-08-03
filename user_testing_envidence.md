#  User-testing Evidence

## Participants
| ID | Name | Role | Contact | Task Success | Time on Task (s) | Errors/Hesitations |
| --- | --- | --- | --- | --- | --- | --- |
| P1 | P.V.N.D | student | 034****718 | Completed | 450 | 1 |
| P2 | n.b | student | leng****ich684@gmail.com | Completed | 380 | 1 |
| P3 | a.c | student | 098****123 | Completed | 490 | 2 |
| P4 | H.G.B | student | 097****777 | Completed | 520 | 4 |
| P5 | H.N.H | student | lisb****ueue@gmail.com | Completed | 510 | 3 |
| P6 | H.D.T | student | gues****ang@gmail.com | Completed | 395 | 2 |

## Task Scenarios

### Registration Configuration and Event Roles
**Website Test**

You are the System Admin. Go to Event Management and create a new event with these requirements:

- Enable the Waitlist feature.
- Set Maximum Slots (Max Slots) for Lecturers, and add 1 new Role for the event.

### Review Registrations & Check Status
**Website Test**

Open an event that already has registrations (Review Students / Review Lecturers).

Approve or Reject an applicant, then comment on the status color display of the action buttons.

## System Usability Scale (SUS) Responses

*Note: Responses are based on a 5-point scale (1 = Strongly Disagree, 2 = Disagree, 3 = Neutral, 4 = Agree, 5 = Strongly Agree).*

| ID | SUS Score | Grade | Responses (Q1-Q10) |
| --- | --- | --- | --- |
| P1 | 67.5 | C (OK / marginal) | 4, 2, 3, 3, 4, 2, 3, 2, 3, 1 |
| P2 | 47.5 | D/F (Poor) | 3, 4, 2, 3, 3, 2, 3, 4, 3, 2 |
| P3 | 35.0 | D/F (Poor) | 3, 4, 2, 4, 3, 3, 2, 4, 2, 3 |
| P4 | 10.0 | D/F (Poor) | 2, 5, 1, 5, 2, 4, 1, 5, 1, 4 |
| P5 | 47.5 | D/F (Poor) | 4, 4, 2, 3, 3, 2, 3, 4, 3, 3 |
| P6 | 25.0 | D/F (Poor) | 2, 5, 2, 4, 3, 4, 1, 4, 3, 4 |

## Per-Session Observation Notes

**H.D.T**
- The date/time scroll wheel when creating an event is difficult and annoying to use; the user prefers manual input.
- Bug: Allows negative numbers for max role. Although it prevents publishing the event, it doesn't show an error message.
- Missing min/max limits for max role with no error message before publishing. When the number is too large, it allows publishing but results in a 500 error.

**n.b**
- The admin user took a long time to find the review students tab for the event because the event row wasn't directly clickable; they had to click the eye icon to view details.

**P.V.N.D**
- The user used a Vietnamese translation browser extension instead of the website's built-in language switcher.
- Wasted time and felt frustrated with the hour/minute configuration scroll wheels in the time fields.
- The user wasted time having to hover and click the eye icon to view details instead of clicking directly on the table row, and also spent a lot of time finding which event had students or lecturers waiting to be reviewed.

**Other Participants (a.c, H.G.B, H.N.H)**
- The remaining users encountered similar usability issues and bugs as the three users mentioned above.

## Metrics
| Metric | Value |
| --- | --- |
| Task success rate | 100.0% |
| Mean time on task | 457.5 s |
| Mean errors/hesitations | 2.2 |
| Mean SUS score | 38.75 (D/F (Poor)) |

## REFERENCE

https://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/

https://blog.uxtweak.com/user-experience-questionnaire/