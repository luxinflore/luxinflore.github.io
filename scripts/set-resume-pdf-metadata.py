#!/usr/bin/env python3
"""Set PDF title/author so browser viewers don't show (anonymous)."""

from __future__ import annotations

import sys
from pathlib import Path

from pypdf import PdfReader, PdfWriter

ROOT = Path(__file__).resolve().parents[1]
RESUME = ROOT / "assets" / "resume.pdf"
METADATA = {
    "/Title": "Aya Gare Resume",
    "/Author": "Aya Gare",
    "/Subject": "Resume",
}


def main() -> int:
    if not RESUME.is_file():
        print(f"Resume not found at {RESUME}", file=sys.stderr)
        return 1

    reader = PdfReader(RESUME)
    current = reader.metadata or {}

    if all(current.get(key) == value for key, value in METADATA.items()):
        print("Resume PDF metadata already set")
        return 0

    writer = PdfWriter()
    for page in reader.pages:
        writer.add_page(page)
    writer.add_metadata(METADATA)

    with RESUME.open("wb") as handle:
        writer.write(handle)

    print("Updated resume PDF metadata")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
