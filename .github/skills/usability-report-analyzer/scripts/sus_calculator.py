#!/usr/bin/env python3
"""
sus_calculator.py — standard 10-item System Usability Scale scoring.

Deliberately does NOT try to guess/parse SUS answers out of a PDF — that's
error-prone and this number matters too much to get wrong. It expects a
structured session_data.json that you (or the agent, reading the Maze
export/PDF directly) already extracted, with exactly 10 raw 1-5 answers per
participant in item order (odd items are positively worded, even items are
negatively worded — the standard SUS instrument, not UEQ-S).

session_data.json:
{
  "participants": [
    {
      "id": "P1",
      "name_masked": "N.V.A",
      "contact_masked": "0912***678",
      "role": "student",
      "task_success": "Completed",   // "Completed" | "Partial" | "Failed"
      "time_on_task_seconds": 180,
      "error_hesitation_count": 2,
      "sus_answers": [4, 2, 5, 1, 4, 2, 5, 1, 4, 2]   // exactly 10, 1-5 each
    },
    ...
  ]
}

Usage:
  python sus_calculator.py --session session_data.json --out sus_results.json
"""
import argparse
import json
import sys
from pathlib import Path

ODD_ITEMS = {1, 3, 5, 7, 9}    # positively worded: score contribution = answer - 1
EVEN_ITEMS = {2, 4, 6, 8, 10}  # negatively worded: score contribution = 5 - answer

# Curved grade bands (Sauro-Lewis / common SUS practice). Purely descriptive —
# never treat this as a pass/fail gate, it's context for the report reader.
GRADE_BANDS = [
    (80.3, "A (Excellent)"),
    (68.0, "B (Good)"),
    (51.0, "C (OK / marginal)"),
    (0.0, "D/F (Poor)"),
]


def score_one(sus_answers: list) -> float:
    if len(sus_answers) != 10:
        raise ValueError(f"SUS requires exactly 10 answers, got {len(sus_answers)}. "
                          f"This isn't UEQ-S — don't pass an 8-item scale here.")
    for i, a in enumerate(sus_answers, start=1):
        if not (1 <= a <= 5):
            raise ValueError(f"Item {i} = {a} is out of the 1-5 range.")

    total = 0
    for i, a in enumerate(sus_answers, start=1):
        total += (a - 1) if i in ODD_ITEMS else (5 - a)
    return total * 2.5


def grade(score: float) -> str:
    for threshold, label in GRADE_BANDS:
        if score >= threshold:
            return label
    return GRADE_BANDS[-1][1]


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--session", required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    data = json.loads(Path(args.session).read_text(encoding="utf-8"))
    participants = data["participants"]
    if len(participants) < 5:
        print(f"WARNING: only {len(participants)} participant(s) — Task 2 requires 5 "
              f"real participants (a pilot session doesn't count toward this).", file=sys.stderr)

    results = []
    for p in participants:
        try:
            s = score_one(p["sus_answers"])
        except ValueError as e:
            raise SystemExit(f"Participant {p.get('id', '?')}: {e}")
        results.append({"id": p["id"], "sus_score": round(s, 1), "grade": grade(s)})

    scores = [r["sus_score"] for r in results]
    summary = {
        "per_participant": results,
        "mean_sus": round(sum(scores) / len(scores), 1) if scores else None,
        "mean_grade": grade(sum(scores) / len(scores)) if scores else None,
        "task_success_rate": (
            round(100 * sum(1 for p in participants if p.get("task_success") == "Completed") / len(participants), 1)
            if participants else None
        ),
        "mean_time_on_task_seconds": (
            round(sum(p["time_on_task_seconds"] for p in participants) / len(participants), 1)
            if participants else None
        ),
        "mean_error_hesitation_count": (
            round(sum(p["error_hesitation_count"] for p in participants) / len(participants), 2)
            if participants else None
        ),
    }

    Path(args.out).write_text(json.dumps(summary, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Mean SUS: {summary['mean_sus']} ({summary['mean_grade']}) across {len(participants)} participant(s) -> {args.out}")


if __name__ == "__main__":
    main()
