#!/usr/bin/env bash
set -euo pipefail

# Forge deploy script
# Usage (Forge): bash ./deploy/forge-deploy.sh "$FORGE_RELEASE_DIRECTORY"

RELEASE_DIR=${1:-$FORGE_RELEASE_DIRECTORY}
if [ -z "$RELEASE_DIR" ]; then
  echo "Release directory not provided. Usage: $0 \"$FORGE_RELEASE_DIRECTORY\""
  exit 1
fi

echo "Release dir: $RELEASE_DIR"

cd "$RELEASE_DIR"

echo "Installing Node dependencies (only for build)..."
if command -v npm >/dev/null 2>&1; then
  npm ci --prefer-offline --no-audit --progress=false
else
  echo "npm not found in PATH. Install Node to run build on server or run build in CI/local and copy files instead." >&2
  exit 1
fi

echo "Building Vite client..."
npm run build:client

DIST_DIR="$RELEASE_DIR/dist/public"
TARGET_PUBLIC="$RELEASE_DIR/public"

if [ ! -d "$DIST_DIR" ]; then
  echo "Build output not found at $DIST_DIR" >&2
  exit 1
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

echo "Deploy script finished successfully. public/ updated with dist/public contents."
