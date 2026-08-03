#!/usr/bin/env python3
"""
screenshot_parser.py — understands the filename convention used in
cross_platform_screenshots/:

    <device>_<os>_<browser>_screen<ID>[_<part>].<ext>
    e.g. desktop_windows11_chrome_screenA1.png
         tablet_ipados_firefox_screenA1.png
         phone_android_samsungbrowser_screenA3.png
         phone_android_samsungbrowser_screenA3_1.png   ← scroll part 1
         phone_android_samsungbrowser_screenA3_2.png   ← scroll part 2 (same cell)

The optional "_<part>" suffix is supported for multi-scroll screenshots of the
same cell. When multiple parts exist for the same (device, os, browser, screen)
combination, only the first (lowest part number) is kept as the canonical
representative for coverage counting and matrix matching — the others are still
valid evidence but do not create duplicate rows.

This is specific to this skill's convention, so it lives here rather than in
the shared table_diff engine — nothing outside cross-platform-verifier needs it.
If you actually name files differently, edit FILENAME_RE and the *_MAP dicts
below; nothing else in this skill needs to change.
"""
import re
from pathlib import Path

FILENAME_RE = re.compile(
    r"^(?P<device>desktop|tablet|phone)_(?P<os>[a-z0-9]+)_(?P<browser>[a-z0-9]+)_screen(?P<screen>[A-Za-z]\d+)(?:_(?P<part>\d+))?$",
    re.I,
)

DEVICE_MAP = {"desktop": "Desktop", "tablet": "Tablet", "phone": "Phone"}
OS_MAP = {
    "windows11": "Windows 11", "windows10": "Windows 10", "windows": "Windows",
    "win11": "Windows 11", "win10": "Windows 10",
    "macos": "macOS", "ios": "iOS (iPadOS)", "ipados": "iOS (iPadOS)", "android": "Android",
}
# Family grouping for the "3 operating systems" requirement — the assignment
# means 3 distinct OS *families* (Windows counts once whether it's 10 or 11),
# not 3 distinct version strings.
OS_FAMILY = {
    "Windows 11": "Windows", "Windows 10": "Windows", "Windows": "Windows",
    "macOS": "macOS", "iOS (iPadOS)": "iOS", "Android": "Android",
}
BROWSER_MAP = {
    "chrome": "Google Chrome", "firefox": "Firefox", "safari": "Safari",
    "edge": "Microsoft Edge", "opera": "Opera",
    "samsungbrowser": "Samsung Browser", "samsung": "Samsung Browser",
}

# Task 3 §6 coverage floor. Adjust here if your course version differs.
REQUIRED_OS_FAMILIES = 3
REQUIRED_BROWSERS = 5
REQUIRED_DEVICE_CLASSES = {"Desktop", "Tablet", "Phone"}


def parse_screenshot_filename(filename: str) -> dict:
    """Returns {"device_type", "os", "os_family", "browser", "screen", "part", "filename"}.
    "part" is an int (1-based) for scroll-part files, or 0 for canonical (no suffix) files.
    Raises ValueError if the filename doesn't match the convention — callers should
    surface that to the user rather than silently skipping the file, since a
    misnamed screenshot is exactly the kind of gap validate-coverage exists to catch.
    """
    stem = Path(filename).stem
    m = FILENAME_RE.match(stem)
    if not m:
        raise ValueError(
            f"Filename {filename!r} doesn't match <device>_<os>_<browser>_screen<ID>[_<part>] "
            f"(e.g. desktop_windows11_chrome_screenA1.png or "
            f"phone_android_samsungbrowser_screenA1_1.png)."
        )
    device_raw, os_raw, browser_raw, screen = (
        m.group("device").lower(), m.group("os").lower(), m.group("browser").lower(), m.group("screen").upper()
    )
    part_str = m.group("part")
    part = int(part_str) if part_str is not None else 0
    device_type = DEVICE_MAP.get(device_raw, device_raw.title())
    os_name = OS_MAP.get(os_raw, os_raw)
    browser = BROWSER_MAP.get(browser_raw, browser_raw.title())
    return {
        "device_type": device_type,
        "os": os_name,
        "os_family": OS_FAMILY.get(os_name, os_name),
        "browser": browser,
        "screen": screen,
        "part": part,
        "filename": filename,
    }


def scan_screenshot_dir(dir_path, screen: str = None):
    """Parse every screenshot in dir_path. Returns (parsed: list[dict], errors: list[str]).
    If screen is given, only files whose parsed screen matches it are returned in
    `parsed` — but every filename that fails to parse is still reported in `errors`
    regardless of screen, since a bad filename never sorts correctly by screen anyway.

    Multi-scroll deduplication: when several parts (e.g. _1, _2, _3) exist for the
    same (device, os, browser, screen) combo, only the lowest part number is kept as
    the canonical representative. Canonical (no-suffix) files take priority over any
    numbered part. This ensures coverage counting and matrix matching each produce
    exactly one row per cell, not one row per scroll screenshot.
    """
    all_parsed, errors = [], []
    for f in sorted(Path(dir_path).iterdir()):
        if not f.is_file() or f.name.startswith("."):
            continue
        try:
            rec = parse_screenshot_filename(f.name)
        except ValueError as e:
            errors.append(str(e))
            continue
        if screen is None or rec["screen"] == screen.upper():
            all_parsed.append(rec)

    # Deduplicate scroll parts: keep the entry with the lowest part number per combo.
    # part=0 means no suffix (canonical) — always wins over any numbered part.
    best: dict = {}  # combo_key -> rec
    for rec in all_parsed:
        key = (rec["device_type"], rec["os"], rec["browser"], rec["screen"])
        prev = best.get(key)
        if prev is None:
            best[key] = rec
        else:
            # part=0 (no suffix) beats any numbered part; among numbered parts, lower wins
            prev_rank = prev["part"] if prev["part"] != 0 else -1
            curr_rank = rec["part"] if rec["part"] != 0 else -1
            if curr_rank < prev_rank:
                best[key] = rec

    parsed = list(best.values())
    return parsed, errors


def check_coverage(parsed_for_screen: list) -> dict:
    """Given the parsed screenshots for ONE screen, check against Task 3's
    coverage floor. Returns a report dict — never raises, so the caller can
    print a full picture (what's covered AND what's missing) in one pass."""
    os_families = {r["os_family"] for r in parsed_for_screen}
    browsers = {r["browser"] for r in parsed_for_screen}
    device_classes = {r["device_type"] for r in parsed_for_screen}

    missing_device_classes = REQUIRED_DEVICE_CLASSES - device_classes

    return {
        "screenshot_count": len(parsed_for_screen),
        "os_families_covered": sorted(os_families),
        "os_families_ok": len(os_families) >= REQUIRED_OS_FAMILIES,
        "browsers_covered": sorted(browsers),
        "browsers_ok": len(browsers) >= REQUIRED_BROWSERS,
        "device_classes_covered": sorted(device_classes),
        "device_classes_ok": not missing_device_classes,
        "missing_device_classes": sorted(missing_device_classes),
        "all_requirements_met": (
            len(os_families) >= REQUIRED_OS_FAMILIES
            and len(browsers) >= REQUIRED_BROWSERS
            and not missing_device_classes
        ),
    }
