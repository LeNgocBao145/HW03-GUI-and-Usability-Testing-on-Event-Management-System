# ai-audit-logger

## Purpose

Record real AI interactions in `docs/ai_audit_report.md` and `docs/prompt_log.md` without reconstructing missing history.

## When to use

- When a real AI interaction is available in the current context
- When preparing audit and prompt-log entries for repository documentation
- When a human wants a confirmable draft entry before appending

## When not to use

- When the prompt or timestamp is unavailable and someone expects it to be reconstructed
- When trying to backfill undocumented historical interactions from memory
- When there is no related file or purpose information

## Required inputs

- interaction date
- interaction time
- AI tool
- purpose
- exact prompt
- available output or output summary
- human review
- changes made
- related file

## Source files

- `docs/ai_audit_report.md`
- `docs/prompt_log.md`
- optional related repository file named by the interaction

## Step-by-step workflow

1. Accept only an interaction supplied in the current context.
2. Do not reconstruct missing prompts from memory.
3. Do not invent exact timestamps.
4. If output text is unavailable, record `Output unavailable`.
5. Separate:
   - AI output
   - human review
   - human modification
6. Check whether the interaction already exists.
7. Propose one entry for `docs/ai_audit_report.md`.
8. Propose one entry for `docs/prompt_log.md`.
9. Ask for confirmation before appending either entry.

## Validation rules

- Exact prompts must come from supplied records, not paraphrased memory.
- Duplicate interactions should be warned about before append.
- Missing metadata must be reported explicitly.

## Evidence rules

- Current-context evidence outranks reconstruction.
- If output is unavailable, say so plainly instead of guessing.
- Human review and human modification must remain separate from AI output.

## Prohibited behavior

- Never reconstruct missing prompts from memory.
- Never invent timestamps.
- Never fabricate AI output summaries that were not supported by available records.
- Never append entries without confirmation.

## Expected output

- proposed audit entry
- proposed prompt-log entry
- duplicate warning
- missing metadata
- human-confirmation request

## Human-confirmation checkpoint

Pause before appending to `docs/ai_audit_report.md` or `docs/prompt_log.md` and ask the human reviewer to confirm the draft entry.

## Example invocation

Placeholder example:

`Run ai-audit-logger using the interaction from 2026-08-03 at TIME-TODO, tool TODO, exact prompt TODO, and related file TODO.`

## Failure and missing-data handling

- If the exact prompt is missing, stop short of append and report the gap.
- If the timestamp is partial, record the known portion and flag the rest as missing only if the user approves that convention.
- If a duplicate is found, present it before any write is proposed.
