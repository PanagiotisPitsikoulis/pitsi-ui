#!/bin/bash

echo "🧹 Purging cache and killing Next.js server..."

# Kill Next.js dev server on port 4000
if lsof -ti:4000 > /dev/null 2>&1; then
  echo "⏹️  Killing Next.js server on port 4000..."
  kill -9 $(lsof -ti:4000) 2>/dev/null
  echo "   Done"
else
  echo "   No server running on port 4000"
fi

# Remove .next cache
if [ -d ".next" ]; then
  echo "🗑️  Removing .next..."
  rm -rf .next
  echo "   Done"
fi

# Remove node_modules/.cache
if [ -d "node_modules/.cache" ]; then
  echo "🗑️  Removing node_modules/.cache..."
  rm -rf node_modules/.cache
  echo "   Done"
fi

# Remove .turbo cache
if [ -d ".turbo" ]; then
  echo "🗑️  Removing .turbo..."
  rm -rf .turbo
  echo "   Done"
fi

# Remove fumadocs cache
if [ -d ".source" ]; then
  echo "🗑️  Removing .source (fumadocs cache)..."
  rm -rf .source
  echo "   Done"
fi

echo ""
echo "✅ Cache purged!"
