#!/bin/bash

# check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  bun install
else
  echo "Dependencies already installed."
fi

bun run build

echo "Build completed successfully."
echo "The extension is in the 'dist' directory."