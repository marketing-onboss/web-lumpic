#!/usr/bin/env bash
set -euo pipefail

# deploy/local-rsync.sh
# Build the Vite client locally and sync the generated `dist/public/` to the
# Forge server `current/public` (or any destination you choose) using rsync.
#
# Usage:
#   ./deploy/local-rsync.sh forge@your-server /home/forge/lumpic.com/current/public
# Or set env vars and call without args:
#   REMOTE=forge@your-server SITE_DIR=/home/forge/lumpic.com/current/public ./deploy/local-rsync.sh
#
REMOTE="${1:-${REMOTE:-forge@your-server}}"
SITE_DIR="${2:-${SITE_DIR:-/home/forge/lumpic.com/current/public}}"
NO_INSTALL="${3:-}"

echo "Remote: $REMOTE"
echo "Target site public dir: $SITE_DIR"

if [ -z "$NO_INSTALL" ]; then
  echo "Installing dependencies (npm ci)..."
  npm ci
fi

echo "Running client build (npm run build:client)..."
npm run build:client

if [ ! -d "dist/public" ]; then
  echo "Error: dist/public not found. Build failed?" >&2
  exit 2
fi

echo "Syncing files to $REMOTE:$SITE_DIR"
rsync -avz --delete --exclude='.DS_Store' dist/public/ "$REMOTE:$SITE_DIR"

echo "Adjusting ownership on remote (attempting chown forge:forge)..."
ssh "$REMOTE" "chown -R forge:forge '$SITE_DIR' || true"

echo "Deploy complete. Visit your site and, if necessary, reload nginx via Forge panel."
