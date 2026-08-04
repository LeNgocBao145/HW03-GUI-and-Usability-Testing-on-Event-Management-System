<center>

# Faculty of Information Technology - Ho Chi Minh City University of Science

# CS423 / CSC15003 - Software Testing (AI-augmented, 2026)

</center>

# AI Critique

OpenAI Codex was useful for organizing a large testing repository, maintaining consistent Markdown structures, reconciling statistics, and repeatedly checking evidence paths. Its main weakness was that it could turn an incomplete observation into a conclusion that sounded more certain than the evidence allowed. A concrete example occurred during compatibility execution for CP-B3-02. The AI initially interpreted the registration-dialog presentation as a compatibility problem, but the human reviewer inspected the supplied screenshot and confirmed that the dialog rendered correctly. The result was corrected to Pass. This showed that visual context, transient cloud-browser states, and session timing can cause an AI agent to misread a valid interface.

A similar risk appeared in real-time-update findings. When a controlled update could not be triggered, the AI could organize the tester's observation, but it could not independently prove the expected polling or WebSocket behavior. Human approval was therefore recorded explicitly instead of presenting automation as definitive verification. Cloud-browser limitations also demonstrated that an unavailable trial, authentication block, blank device screen, or missing provider metadata must not be converted into invented environment facts.

The usability phase reinforced the same lesson. AI could calculate SUS and aggregate the two completed summaries, but it could not create the missing participants, recordings, timelines, or consent evidence. The responsible response was to preserve the smaller sample and disclose its limits. I learned that AI is most effective as a structured assistant for consistency, traceability, and calculation. It should not be treated as the source of truth for visual evidence, human behavior, or live execution. Final results require human review, reproducible observations, and transparent uncertainty.

## Signature

| Field | Value |
| --- | --- |
| Student name | Nguyen Minh Khoi |
| Student ID | 23127070 |
| Class / Cohort | 23KTPM1 |
| Course | CS423 / CSC15003 - Software Testing |
| Instructor | Mr. Lam Quang Vu |
| Date | 04/08/2026 |
| Signature | Khoi |
