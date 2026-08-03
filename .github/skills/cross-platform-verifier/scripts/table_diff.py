#!/usr/bin/env python3
"""
table_diff.py — shared, generic engine for "parse table once -> apply diff-only
AI results -> re-render full table" workflows.

This module is deliberately generic: it knows nothing about GUI checklists or
cross-platform matrices specifically. Each skill (gui-checklist-executor,
cross-platform-verifier, ...) supplies its own column-name aliases, its own
"what counts as a section-header row" rule, and its own default status — and
gets parsing/merging/rendering for free without importing anything from the
other skill. The contract between skills and this module is just:
  - a JSON "checklist_master" produced by parse_table_file()
  - a JSON "diff" following {"results": {"<id>": {...}}, "totals": {...}}
That JSON contract is the real interface — copy this file into a skill's own
scripts/ folder if you need it to be fully standalone/vendored; nothing here
assumes a fixed relative path.

Not a CLI by itself — see merge_checklist_results.py and
merge_crossplatform_results.py for the thin per-skill wrappers that configure
and call this.
"""
import json
import re
from pathlib import Path


def _split_row(row: str):
    return [c.strip() for c in row.strip().strip("|").split("|")]


def _is_bold(cell: str) -> bool:
    return bool(re.match(r"^\*\*.+\*\*$", cell.strip()))


def _unbold(cell: str) -> str:
    return re.sub(r"^\*\*(.+)\*\*$", r"\1", cell.strip())


def parse_table(md_text: str, column_aliases: dict, id_col: str = "id",
                 section_col: str | None = None, section_pattern: str | None = None):
    """Parse a GitHub-flavored markdown pipe table into a list of row dicts.

    column_aliases: {canonical_name: {lowercase header aliases...}}, must include id_col.
    section_col / section_pattern: if a row's `section_col` cell is bold AND matches
        `section_pattern` (regex), that row is treated as a section header — it is
        NOT added as a data row, but its matched group (or full match) becomes the
        `section` value carried onto subsequent rows until the next header.
        Leave both None if the table has no section-header rows.

    Returns list[dict] with keys = column_aliases keys (+ 'section' if used).
    """
    lines = [l for l in md_text.splitlines() if l.strip().startswith("|")]
    if len(lines) < 2:
        raise ValueError("No markdown pipe table found in this file.")

    header = [h.lower() for h in _split_row(lines[0])]
    col_index = {}
    for key, aliases in column_aliases.items():
        for i, h in enumerate(header):
            if h in aliases:
                col_index[key] = i
                break
    missing = [k for k in column_aliases if k not in col_index]
    if missing:
        raise ValueError(f"Could not find column(s) {missing} in header {header}. "
                          f"Adjust column_aliases to match your table's headers.")

    rows = []
    current_section = None
    for row in lines[2:]:  # skip header + separator
        cells = _split_row(row)
        if len(cells) <= max(col_index.values()):
            continue

        if section_col and section_pattern:
            sec_cell = cells[col_index[section_col]]
            if _is_bold(sec_cell):
                m = re.search(section_pattern, _unbold(sec_cell))
                if m:
                    current_section = m.group(1) if m.groups() else m.group(0)
                    continue  # header row itself is not a data row

        rec = {key: _unbold(cells[i]) for key, i in col_index.items()}
        if not rec.get(id_col):
            continue
        if section_col:
            rec["section"] = current_section
        rows.append(rec)

    if not rows:
        raise ValueError("Parsed the table but found zero data rows.")
    return rows


def parse_table_file(path, column_aliases, id_col="id", section_col=None, section_pattern=None):
    md_text = Path(path).read_text(encoding="utf-8")
    return parse_table(md_text, column_aliases, id_col, section_col, section_pattern)


def iter_heading_sections(md_text: str, heading_pattern: str):
    """Yield (heading_text, section_md) for every markdown heading (any # level)
    whose text matches heading_pattern (regex, case-insensitive). A section runs from
    its heading up to (not including) the next heading of the same or shallower level.
    Used to pull "### Screen A1" / "### Screen A3" / ... blocks out of one Report.md
    that holds multiple per-screen tables, so callers don't have to split the file
    themselves or assume a fixed heading depth.
    """
    lines = md_text.splitlines()
    headers = []
    for i, line in enumerate(lines):
        m = re.match(r"^(#{1,6})\s+(.*)$", line)
        if m:
            headers.append((i, len(m.group(1)), m.group(2).strip()))

    results = []
    for idx, (line_idx, level, text) in enumerate(headers):
        if not re.search(heading_pattern, text, re.I):
            continue
        end = len(lines)
        for line_idx2, level2, _ in headers[idx + 1:]:
            if level2 <= level:
                end = line_idx2
                break
        results.append((text, "\n".join(lines[line_idx:end])))
    return results


def apply_diff(master_rows: list, diff: dict, id_col: str, default_status: dict):
    """Overlay a diff-only result set onto the full row list.

    diff = {"results": {"<id>": {...fields...}}, "totals": {...} (optional, just checked)}
    default_status = fields merged onto every row NOT mentioned in diff['results'].
    Returns (full_rows, totals_actual).
    """
    diff_results = diff.get("results", {})
    full_rows = []
    for row in master_rows:
        row_id = row[id_col]
        override = diff_results.get(row_id)
        merged = dict(row)
        if override:
            merged.update(override)
        else:
            merged.update(default_status)
        full_rows.append(merged)
    return full_rows


def compute_totals(full_rows: list, status_field: str, status_values: dict):
    """status_values: {'evaluated': None (always all), 'pass': 'PASS', 'fail': 'FAIL', ...}
    Returns a dict counting how many rows have each status value."""
    totals = {"evaluated": len(full_rows)}
    for key, value in status_values.items():
        totals[key] = sum(1 for r in full_rows if r.get(status_field) == value)
    return totals


def render_markdown_table(rows: list, columns: list, section_col: str = None):
    """columns: list of (header_label, row_key_or_callable(row)->str)
    section_col: if set, insert a bold section-header row whenever `section`
    changes (mirrors the original table's grouping)."""
    header_labels = [c[0] for c in columns]
    lines = ["| " + " | ".join(header_labels) + " |",
             "| " + " | ".join("---" for _ in columns) + " |"]

    last_section = object()  # sentinel, never equal to a real section value
    for row in rows:
        if section_col and row.get("section") != last_section:
            last_section = row.get("section")
            if last_section:
                lines.append(f"| **{last_section}** | " + " | ".join("" for _ in columns[1:]) + " |")
        cells = []
        for _, getter in columns:
            val = getter(row) if callable(getter) else row.get(getter, "")
            cells.append(str(val) if val is not None else "")
        lines.append("| " + " | ".join(cells) + " |")
    return "\n".join(lines) + "\n"


def save_json(obj, path):
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    Path(path).write_text(json.dumps(obj, indent=2, ensure_ascii=False), encoding="utf-8")


def load_json(path):
    return json.loads(Path(path).read_text(encoding="utf-8"))
