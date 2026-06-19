#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
RESUME="$ROOT/assets/resume.pdf"
DATA="$ROOT/_data/resume.yml"

if [[ ! -f "$RESUME" ]]; then
  echo "Resume not found at assets/resume.pdf" >&2
  exit 1
fi

DATE="$(git -C "$ROOT" log -1 --format=%cd --date=format:'%B %-d, %Y' -- assets/resume.pdf 2>/dev/null || true)"

if [[ -z "$DATE" ]]; then
  DATE="$(date +"%B %-d, %Y")"
fi

mkdir -p "$(dirname "$DATA")"
printf 'last_updated: "%s"\n' "$DATE" > "$DATA"
echo "Set resume last updated date to $DATE"

if command -v python3 >/dev/null 2>&1; then
  python3 -m pip install --quiet pypdf 2>/dev/null || true
  python3 "$ROOT/scripts/set-resume-pdf-metadata.py" || true
fi
