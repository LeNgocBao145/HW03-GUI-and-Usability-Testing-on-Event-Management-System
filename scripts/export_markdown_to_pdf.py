"""Render a Markdown deliverable to a print-ready PDF with local Chrome."""

from __future__ import annotations

import argparse
import html
import subprocess
import tempfile
from pathlib import Path

import markdown


CHROME_CANDIDATES = (
    Path(r"C:\Program Files\Google\Chrome\Application\chrome.exe"),
    Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"),
)


CSS = """
@page { size: A4; margin: 15mm 13mm 18mm; }
* { box-sizing: border-box; }
body {
  color: #17242b;
  font-family: "Aptos", "Segoe UI", sans-serif;
  font-size: 9.5pt;
  line-height: 1.42;
  margin: 0;
}
h1, h2, h3, h4 { color: #0d6670; page-break-after: avoid; }
h1 { font-size: 22pt; margin: 0 0 9mm; letter-spacing: -0.3px; }
h2 {
  border-bottom: 1.5px solid #60a7a7;
  font-size: 15pt;
  margin: 8mm 0 3mm;
  padding-bottom: 1.5mm;
}
h3 { font-size: 11.5pt; margin: 5mm 0 2mm; }
h4 { font-size: 10pt; margin: 4mm 0 1.5mm; }
p { margin: 0 0 3mm; orphans: 3; widows: 3; }
ul, ol { margin: 1.5mm 0 3mm 5mm; padding-left: 4mm; }
li { margin: 0 0 1mm; }
h2 + ul { break-inside: avoid; page-break-inside: avoid; }
table {
  border-collapse: collapse;
  font-size: 8.1pt;
  margin: 2mm 0 5mm;
  table-layout: fixed;
  width: 100%;
}
thead { display: table-header-group; }
tr { page-break-inside: avoid; }
th, td {
  border: 1px solid #aabec2;
  overflow-wrap: anywhere;
  padding: 1.5mm 1.7mm;
  text-align: left;
  vertical-align: top;
}
th { background: #dceeee; color: #113e44; font-weight: 700; }
tbody tr:nth-child(even) { background: #f5f9f9; }
a { color: #086f91; text-decoration: none; }
code {
  background: #eef3f3;
  border-radius: 2px;
  font-family: "Cascadia Mono", Consolas, monospace;
  font-size: 8.5pt;
  padding: 0.2mm 0.8mm;
  overflow-wrap: anywhere;
}
pre {
  background: #eef3f3;
  border-left: 3px solid #4f9298;
  padding: 3mm;
  white-space: pre-wrap;
  word-break: break-word;
}
blockquote {
  border-left: 3px solid #78aeb1;
  color: #42575d;
  margin: 3mm 0;
  padding: 1mm 4mm;
}
hr { border: 0; border-top: 1px solid #b8c9cc; margin: 6mm 0; }
center h1 { margin-bottom: 2mm; }
.institution-header { margin-bottom: 7mm; text-align: center; }
.institution-header h1 {
  color: #52666c;
  font-size: 9pt;
  font-weight: 600;
  margin: 0 0 1mm;
}
.document-meta {
  color: #52666c;
  font-size: 8pt;
  margin-bottom: 7mm;
}
.document-footer {
  border-top: 1px solid #c9d6d8;
  color: #6b7e83;
  font-size: 7.5pt;
  margin-top: 8mm;
  padding-top: 2mm;
  text-align: right;
}
"""


def find_browser() -> Path:
    for candidate in CHROME_CANDIDATES:
        if candidate.exists():
            return candidate
    raise FileNotFoundError("Chrome or Edge was not found in a supported location")


def render_markdown(source: Path, title: str) -> str:
    source_text = source.read_text(encoding="utf-8")
    source_text = source_text.replace(
        "<center>", '<div class="institution-header" markdown="1">'
    ).replace("</center>", "</div>")
    body = markdown.markdown(
        source_text,
        extensions=("tables", "fenced_code", "sane_lists", "md_in_html"),
        output_format="html5",
    )
    base_uri = source.parent.resolve().as_uri() + "/"
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <base href="{html.escape(base_uri)}">
  <title>{html.escape(title)}</title>
  <style>{CSS}</style>
</head>
<body>
  <div class="document-meta">HW03 - GUI and Usability Testing on EMS | Student 23127070</div>
  {body}
  <div class="document-footer">Nguyen Minh Khoi | 23127070 | 23KTPM1</div>
</body>
</html>"""


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--title", required=True)
    args = parser.parse_args()

    source = args.source.resolve()
    output = args.output.resolve()
    output.parent.mkdir(parents=True, exist_ok=True)

    browser = find_browser()
    document = render_markdown(source, args.title)

    with tempfile.TemporaryDirectory(prefix="hw03-pdf-") as temp_dir:
        temp_path = Path(temp_dir)
        html_path = temp_path / "document.html"
        html_path.write_text(document, encoding="utf-8")
        command = [
            str(browser),
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--allow-file-access-from-files",
            "--no-pdf-header-footer",
            f"--user-data-dir={temp_path / 'chrome-profile'}",
            f"--print-to-pdf={output}",
            html_path.as_uri(),
        ]
        subprocess.run(command, check=True, capture_output=True, text=True)

    if not output.exists() or output.stat().st_size == 0:
        raise RuntimeError(f"PDF was not created: {output}")

    print(f"Created {output} ({output.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
