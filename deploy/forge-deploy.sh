#!/usr/bin/env bash
set -euo pipefail

# Forge deploy script
# Usage (Forge): bash ./deploy/forge-deploy.sh "$FORGE_RELEASE_DIRECTORY"

RELEASE_DIR=${1:-${FORGE_RELEASE_DIRECTORY:-""}}
if [ -z "$RELEASE_DIR" ]; then
  echo "Warning: Release directory not provided. Will attempt to detect current release directory." >&2
else
  echo "Release dir (requested): $RELEASE_DIR"
fi

# If provided RELEASE_DIR doesn't exist, try sensible fallbacks instead of failing immediately
if [ -n "$RELEASE_DIR" ] && [ -d "$RELEASE_DIR" ]; then
  cd "$RELEASE_DIR"
else
  echo "Requested release dir does not exist or was not provided. Trying fallbacks..."

  # 1) If FORGE_RELEASE_DIRECTORY env exists and is a dir, use it
  if [ -n "${FORGE_RELEASE_DIRECTORY:-}" ] && [ -d "${FORGE_RELEASE_DIRECTORY}" ]; then
    RELEASE_DIR="${FORGE_RELEASE_DIRECTORY}"
    echo "Using FORGE_RELEASE_DIRECTORY: $RELEASE_DIR"
    cd "$RELEASE_DIR"
  else
    # If the requested release path contains '/releases/<id>' try the corresponding 'current' symlink
    if [ -n "$RELEASE_DIR" ] && echo "$RELEASE_DIR" | grep -q "/releases/" 2>/dev/null; then
      CAND="${RELEASE_DIR%%/releases/*}/current"
      if [ -d "$CAND" ]; then
        RELEASE_DIR="$CAND"
        echo "Requested release path not present; using '${CAND}' (current) instead"
        cd "$RELEASE_DIR"
      else
        echo "Tried derived current path '$CAND' but it does not exist. Continuing fallbacks..."
      fi
    fi
    # 2) Try to find a 'releases' sibling directory and pick the newest numeric release
    SEARCH_BASE="$(pwd -P)"
    if [ -d "$SEARCH_BASE/releases" ]; then
      LATEST="$(ls -1d $SEARCH_BASE/releases/* 2>/dev/null | sort -V | tail -n1 || true)"
      if [ -n "$LATEST" ] && [ -d "$LATEST" ]; then
        RELEASE_DIR="$LATEST"
        echo "Found latest release dir: $RELEASE_DIR"
        cd "$RELEASE_DIR"
      else
        # 3) fallback to current working directory
        RELEASE_DIR="$SEARCH_BASE"
        echo "No release dir found. Falling back to current directory: $RELEASE_DIR"
        cd "$RELEASE_DIR"
      fi
    else
      # 4) final fallback: use PWD
      RELEASE_DIR="$(pwd -P)"
      echo "No releases folder found. Using PWD: $RELEASE_DIR"
      cd "$RELEASE_DIR"
    fi
  fi
fi

echo "Now in release dir: $(pwd -P)"

# Normalize RELEASE_DIR to an absolute path and remove trailing slashes
if command -v realpath >/dev/null 2>&1; then
  RELEASE_DIR="$(realpath "$RELEASE_DIR")"
else
  RELEASE_DIR="$(cd "$RELEASE_DIR" && pwd -P)"
fi
RELEASE_DIR="${RELEASE_DIR%/}"
echo "Normalized release dir: $RELEASE_DIR"

# Ensure we have the latest code from origin (Forge normally checks out the repo
# before running the deploy script, but this ensures the release pulls the latest
# commit from the remote branch when you click 'Deploy Now').
if [ -d .git ] && command -v git >/dev/null 2>&1; then
  echo "Fetching latest from origin..."
  git remote show origin >/dev/null 2>&1 || true
  git fetch --all --prune || true
  BRANCH="$(git rev-parse --abbrev-ref HEAD || echo master)"
  echo "Resetting to origin/$BRANCH"
  git reset --hard "origin/$BRANCH" || git reset --hard "origin/HEAD" || true
else
  echo "No .git folder or git not available — assuming Forge provided the release checkout." 
fi

echo "Node build on server is disabled by default (Node-free deployment)."
echo "This script expects CI to produce 'dist/public' before deploy."

# Build output dir produced by CI/locally (expected)
DIST_DIR="$RELEASE_DIR/dist/public"
# Allow Forge to define a different web/public directory (FORGE_WEB_DIRECTORY or FORGE_WEB_DIR)
if [ -n "${FORGE_WEB_DIRECTORY:-}" ]; then
  TARGET_PUBLIC="${FORGE_WEB_DIRECTORY%/}"
elif [ -n "${FORGE_WEB_DIR:-}" ]; then
  TARGET_PUBLIC="${FORGE_WEB_DIR%/}"
else
  TARGET_PUBLIC="$RELEASE_DIR/public"
fi

# Normalize target public
if [ -n "$TARGET_PUBLIC" ]; then
  if command -v realpath >/dev/null 2>&1; then
    TARGET_PUBLIC="$(realpath "$TARGET_PUBLIC")"
  else
    TARGET_PUBLIC="$(cd "$TARGET_PUBLIC" 2>/dev/null && pwd -P || echo "$TARGET_PUBLIC")"
  fi
fi

echo "Using target public directory: $TARGET_PUBLIC"

if [ ! -d "$DIST_DIR" ]; then
  echo "Build output not found at $DIST_DIR" >&2
  echo "This deployment expects the client build artifacts to be present in 'dist/public'." >&2
  echo "Recommended options:" >&2
  echo "  - Build in CI (GitHub Actions) and rsync 'dist/public/' to the server (preferred)." >&2
  echo "  - Or build locally and commit or upload 'dist/public/' before running this script." >&2
  exit 2
fi

echo "Copying build to $TARGET_PUBLIC"
if command -v rsync >/dev/null 2>&1; then
  rsync -a --delete "$DIST_DIR/" "$TARGET_PUBLIC/"
else
  # Fallback to cp
  rm -rf "$TARGET_PUBLIC" && mkdir -p "$TARGET_PUBLIC"
  cp -R "$DIST_DIR/"* "$TARGET_PUBLIC/"
fi

echo "Adjusting permissions"
chown -R forge:forge "$TARGET_PUBLIC" || true

# Optional: restart pm2 if a server bundle exists (legacy behavior)
if [ -f "$RELEASE_DIR/dist/index.js" ]; then
  echo "Found dist/index.js — restarting pm2 process 'web'"
  if command -v pm2 >/dev/null 2>&1; then
    if pm2 describe web >/dev/null 2>&1; then
      pm2 restart web || true
    else
      pm2 start "$RELEASE_DIR/dist/index.js" --name web || true
    fi
  else
    echo "pm2 not found; skipping pm2 restart"
  fi
fi

echo "Deploy script finished successfully. public/ updated with dist/public contents."
