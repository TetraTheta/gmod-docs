"""Console commands used by uv for local documentation workflows."""

from __future__ import annotations

import subprocess
import sys


def build() -> None:
  """Build the static MkDocs site."""
  raise SystemExit(_run_mkdocs(["build", *sys.argv[1:]]))


def serve() -> None:
  """Run the local MkDocs development server."""
  raise SystemExit(_run_mkdocs(["serve", "-a", "localhost:44", *sys.argv[1:]]))


def _run_mkdocs(args: list[str]) -> int:
  return subprocess.call([sys.executable, "-m", "mkdocs", *args])
