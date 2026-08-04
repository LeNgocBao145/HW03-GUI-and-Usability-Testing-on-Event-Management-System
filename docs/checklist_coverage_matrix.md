# GUI Checklist Coverage Matrix

## Purpose

This document serves as the execution map for Task 1B.

Instead of reading the GUI checklist sequentially, testers execute GUI validation screen-by-screen.

For each checkpoint, this document identifies:

- Applicable screen(s)
- Required interaction
- Required evidence
- Supporting Agent Skill
- Expected artifact
- Applicable / N/A status

---

# Legend

| Symbol | Meaning |
|---------|---------|
| ✓ | Applicable |
| N/A | Not applicable |
| OBS | Observation only |
| INT | Interaction required |
| SS | Screenshot |

---

# Agent Skills Used

| Skill | Purpose |
|---------|----------|
| gui-checklist-execution | Execute GUI checkpoints |
| finding-log-validator | Validate findings before creating bugs |
| submission-readiness-audit | Final repository audit |

---

# IA-01 General UI Standards

| GUI | Screen | Type | Evidence | Skill | Output |
|------|---------|------|----------|-------|--------|
|1.01|B1 B2 B3|OBS|SS|gui-checklist-execution|Checklist|
|1.02|B1 B2 B3|OBS|SS|gui-checklist-execution|Checklist|
|1.03|B1 B2 B3|OBS|SS|gui-checklist-execution|Checklist|
|1.04|B1 B2 B3|OBS|SS|gui-checklist-execution|Checklist|
|1.05|B1 B2 B3|OBS|SS|gui-checklist-execution|Checklist|
|1.06|B1 B2 B3|OBS|SS|gui-checklist-execution|Checklist|
|1.07|B1 B2 B3|OBS|SS|gui-checklist-execution|Checklist|
|1.08|B1 B2 B3|OBS|SS|gui-checklist-execution|Checklist|
|1.09|B1 B2 B3|OBS|SS|gui-checklist-execution|Checklist|
|1.10|B1 B2 B3|INT|Desktop / Tablet / Mobile SS|gui-checklist-execution|Compatibility Candidate|
|1.11|B1 B2 B3|OBS|SS|gui-checklist-execution|Checklist|
|1.12|N/A|-|-|-|
|1.13|B1 B2 B3|INT|EN + VI SS|gui-checklist-execution|Checklist|
|1.14|B1 B2 B3|INT|Developer Tools|Manual Verification|Checklist|
|1.15|B1 B2|OBS|SS|gui-checklist-execution|Checklist|

---

# IA-02 Forms & Inputs

| GUI | Screen | Type | Evidence | Skill | Output |
|------|---------|------|----------|-------|--------|
|2.01|B1|OBS|SS|gui-checklist-execution|Checklist|
|2.02|N/A|-|-|-|
|2.03|N/A|-|-|-|
|2.04|N/A|-|-|-|
|2.05|N/A|-|-|-|
|2.06|N/A|-|-|-|
|2.07|N/A|-|-|-|
|2.08|N/A|-|-|-|
|2.09|B1|OBS|SS|gui-checklist-execution|Checklist|
|2.10|B1|INT|Filter SS|gui-checklist-execution|Checklist|
|2.11|B3|INT|Checkbox SS|gui-checklist-execution|Checklist|
|2.12|B1 B2 B3|INT|Keyboard Notes|gui-checklist-execution|Checklist|
|2.13|N/A|-|-|-|
|2.14|N/A|-|-|-|
|2.15|B3|INT|Validation SS|gui-checklist-execution|Finding Candidate|

---

# IA-03 Navigation & Layout

| GUI | Screen | Type | Evidence | Skill | Output |
|------|---------|------|----------|-------|--------|
|3.01|B1 B2 B3|OBS|SS|gui-checklist-execution|Checklist|
|3.02|B1 B2 B3|OBS|SS|gui-checklist-execution|Checklist|
|3.03|N/A|-|-|-|
|3.04|B1 B2 B3|INT|SS|gui-checklist-execution|Checklist|
|3.05|B1|INT|SS|gui-checklist-execution|Checklist|
|3.06|B1|INT|SS|gui-checklist-execution|Checklist|
|3.07|B1 B2|INT|SS|gui-checklist-execution|Checklist|
|3.08|B1 B2|INT|Browser Tab|gui-checklist-execution|Checklist|
|3.09|B1|INT|Search Interaction|gui-checklist-execution|Checklist|
|3.10|B1 B2|INT|Navigation Notes|gui-checklist-execution|Checklist|
|3.11|B3|INT|Dialog SS|gui-checklist-execution|Checklist|
|3.12|B1|INT|Status Tabs|gui-checklist-execution|Checklist|
|3.13|N/A|-|-|-|
|3.14|B1 B2 B3|INT|Browser Reload|Manual Verification|Checklist|
|3.15|B1|OBS|SS|gui-checklist-execution|Checklist|
|3.16|N/A|-|-|-|

---

# IA-04 Feedback & State

| GUI | Screen | Type | Evidence | Skill | Output |
|------|---------|------|----------|-------|--------|
|4.01|B1 B2 B3|INT|Hover SS|gui-checklist-execution|Checklist|
|4.02|B1 B2 B3|INT|Keyboard Notes|gui-checklist-execution|Checklist|
|4.03|B3|OBS|SS|gui-checklist-execution|Checklist|
|4.04|B1 B2 B3|INT|Network Condition Test|Manual Verification|Checklist|
|4.05|B3|INT|Toast SS|gui-checklist-execution|Finding Candidate|
|4.06|B3|INT|Validation SS|gui-checklist-execution|Finding Candidate|
|4.07|B1|INT|Search No Result|gui-checklist-execution|Checklist|
|4.08|B1 B2 B3|INT|Offline Mode Test|Manual Verification|Checklist|
|4.09|B3|INT|Dialog SS|gui-checklist-execution|Checklist|
|4.10|B3|INT|Interaction Notes|gui-checklist-execution|Checklist|
|4.11|N/A|-|-|-|
|4.12|B3|INT|Before/After SS|gui-checklist-execution|Checklist|
|4.13|B1 B2 B3|OBS|SS|gui-checklist-execution|Checklist|
|4.14|B1 B2 B3|INT|Refresh Observation|Manual Verification|Checklist|
|4.15|B3|INT|Cancellation Flow|Finding Candidate|

---

# Screen Execution Order

## B1 — Events Listing

Execute:

- IA-01
- Search
- Filters
- Sidebar
- Pagination
- Navigation
- Footer

Expected outputs:

- Screenshots
- Checklist
- Potential Findings

---

## B2 — Event Detail

Execute:

- Event Overview
- Information Cards
- Detailed Content
- Share
- Save
- Navigation

Expected outputs:

- Screenshots
- Checklist
- Potential Findings

---

## B3 — Registration State

Execute:

- Registration Status
- Checkbox
- Register
- Cancel Registration
- Confirmation Dialog
- Pending Review State

Expected outputs:

- Screenshots
- Checklist
- Potential Findings

---

# Finding Workflow

GUI Checkpoint

↓

Observe

↓

Collect Evidence

↓

Pass / Fail

↓

Potential Finding

↓

Run finding-log-validator

↓

Bug Report (if applicable)

---

# Final Workflow

Checklist Coverage Matrix

↓

GUI Checklist Execution

↓

Findings Review

↓

Bug Reports

↓

Usability Testing

↓

Compatibility Testing

↓

Submission Readiness Audit
