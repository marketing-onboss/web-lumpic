#!/usr/bin/env bash
set -euo pipefail

# Minimal safe deploy script for Forge (no git operations)
# Copies prebuilt client artifacts from dist/public -> public
# Usage: bash ./deploy/forge-deploy.sh "$FORGE_RELEASE_DIRECTORY"

RELEASE_DIR=${1:-${FORGE_RELEASE_DIRECTORY:-""}}
if [ -z "$RELEASE_DIR" ]; then
  # assume we're in a release dir
  RELEASE_DIR="$(pwd -P)"
fi

echo "Deploying release: $RELEASE_DIR"

DIST_DIR="$RELEASE_DIR/dist/public"
TARGET_PUBLIC="${FORGE_WEB_DIRECTORY:-${FORGE_WEB_DIR:-$RELEASE_DIR/public}}"

# Normalize target public
if command -v realpath >/dev/null 2>&1; then
  TARGET_PUBLIC="$(realpath "$TARGET_PUBLIC")"
else
  TARGET_PUBLIC="$(cd "$TARGET_PUBLIC" 2>/dev/null && pwd -P || echo "$TARGET_PUBLIC")"
fi

echo "Using target public directory: $TARGET_PUBLIC"

if [ ! -d "$DIST_DIR" ]; then
  echo "Error: build output not found at $DIST_DIR" >&2
  exit 2
fi

echo "Copying build to $TARGET_PUBLIC"
if command -v rsync >/dev/null 2>&1; then
  rsync -a --delete "$DIST_DIR/" "$TARGET_PUBLIC/"
else
  rm -rf "$TARGET_PUBLIC" && mkdir -p "$TARGET_PUBLIC"
  cp -R "$DIST_DIR/"* "$TARGET_PUBLIC/"
fi

echo "Adjusting ownership (best-effort)"
if id -u forge >/dev/null 2>&1; then
  chown -R forge:forge "$TARGET_PUBLIC" || true
fi

echo "Deploy finished successfully."
