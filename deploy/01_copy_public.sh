#!/usr/bin/env bash
set -euo pipefail

# Normalized line endings to LF in repository to avoid CRLF syntax issues on Linux

# deploy/01_copy_public.sh
# Copies the built frontend from `dist/public` into the site's `public` folder.
# By default it assumes the deploy working directory is `/home/forge/<site>/current`
# and will copy into `/home/forge/<site>/public` (the parent `public` folder).
# You can override the destination by passing it as the first argument or by
# setting the `SITE_PUBLIC_DIR` environment variable.

DEST=${1:-${SITE_PUBLIC_DIR:-}}

if [ -z "$DEST" ]; then
  # current directory is expected to be .../<site>/current
  SITE_ROOT=$(cd "$(pwd)/.." && pwd)
  DEST="$SITE_ROOT/public"
fi

echo "Destination public dir: $DEST"

if [ ! -d "dist/public" ]; then
  echo "Error: dist/public not found. Run the client build first." >&2
  exit 2
fi

echo "Clearing destination: $DEST"
rm -rf "$DEST"/* || true

echo "Copying files to $DEST"
mkdir -p "$DEST"
cp -r dist/public/* "$DEST/"

echo "Attempting to set ownership to forge:forge (non-fatal)"
chown -R forge:forge "$DEST" || true

echo "Public files deployed to $DEST"
