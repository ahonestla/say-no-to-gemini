#!/bin/bash

# Build script for Chrome/Edge Web Store submission

set -e

DIST_DIR="dist"
ZIP_FILE="say-no-to-gemini.zip"

echo "Building Say No To Gemini extension package..."

# Create dist directory
mkdir -p "$DIST_DIR"

# Remove old zip if exists
rm -f "$DIST_DIR/$ZIP_FILE"

# Create zip with only necessary files
zip -r "$DIST_DIR/$ZIP_FILE" \
  manifest.json \
  content.js \
  background.js \
  popup/popup.html \
  popup/popup.css \
  popup/popup.js \
  icons/16.png \
  icons/48.png \
  icons/128.png \
  LICENSE \
  README.md \
  QUICKSTART.md

echo "✅ Package created: $DIST_DIR/$ZIP_FILE"
echo "📦 Ready for store submission!"