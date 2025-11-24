#!/bin/bash

# Automated publish script for pitsi package
# This script handles the entire publish workflow

set -e # Exit on any error

echo "🚀 Starting automated publish workflow for pitsi..."
echo ""

# Step 1: Check if we're logged in to npm
echo "1️⃣ Checking npm authentication..."
if ! npm whoami > /dev/null 2>&1; then
  echo "❌ Not logged in to npm. Please run: npm login"
  exit 1
fi
echo "✅ Logged in as: $(npm whoami)"
echo ""

# Step 2: Check for uncommitted changes
echo "2️⃣ Checking for uncommitted changes..."
if [[ -n $(git status --porcelain) ]]; then
  echo "⚠️  Uncommitted changes detected. Committing..."
  git add .
  git commit -m "chore: prepare for release [skip ci]" || echo "No changes to commit"
fi
echo "✅ Working directory clean"
echo ""

# Step 3: Run tests
echo "3️⃣ Running tests..."
cd packages/pitsi
pnpm test
cd ../..
echo "✅ All tests passed"
echo ""

# Step 4: Build the package
echo "4️⃣ Building package..."
pnpm pitsi:build
echo "✅ Build complete"
echo ""

# Step 5: Get current version
CURRENT_VERSION=$(node -p "require('./packages/pitsi/package.json').version")
echo "📦 Current version: $CURRENT_VERSION"
echo ""

# Step 6: Ask for version bump type (optional)
if [ "$1" == "--interactive" ]; then
  echo "Select version bump type:"
  echo "  1) patch (bug fixes)      - e.g., 3.5.0 -> 3.5.1"
  echo "  2) minor (new features)   - e.g., 3.5.0 -> 3.6.0"
  echo "  3) major (breaking)       - e.g., 3.5.0 -> 4.0.0"
  echo "  4) skip (use current)     - keep $CURRENT_VERSION"
  read -p "Enter choice (1-4): " choice

  case $choice in
    1)
      cd packages/pitsi
      npm version patch --no-git-tag-version
      cd ../..
      ;;
    2)
      cd packages/pitsi
      npm version minor --no-git-tag-version
      cd ../..
      ;;
    3)
      cd packages/pitsi
      npm version major --no-git-tag-version
      cd ../..
      ;;
    4)
      echo "Keeping current version $CURRENT_VERSION"
      ;;
    *)
      echo "Invalid choice. Exiting."
      exit 1
      ;;
  esac

  NEW_VERSION=$(node -p "require('./packages/pitsi/package.json').version")
  if [ "$NEW_VERSION" != "$CURRENT_VERSION" ]; then
    echo "📦 New version: $NEW_VERSION"
    git add packages/pitsi/package.json
    git commit -m "chore: bump version to $NEW_VERSION"
  fi
fi

# Step 7: Publish to npm
echo "5️⃣ Publishing to npm..."
if [ "$1" == "--beta" ]; then
  echo "Publishing as beta..."
  pnpm pub:beta
elif [ "$1" == "--next" ]; then
  echo "Publishing as next..."
  cd packages/pitsi
  pnpm pub:next
  cd ../..
else
  echo "Publishing as latest..."
  pnpm pub:release
fi

echo ""
echo "🎉 Successfully published pitsi@$(node -p "require('./packages/pitsi/package.json').version")!"
echo ""
echo "View on npm: https://www.npmjs.com/package/pitsi"
echo ""

# Step 8: Create git tag (optional)
if [ "$2" == "--tag" ]; then
  VERSION=$(node -p "require('./packages/pitsi/package.json').version")
  echo "Creating git tag v$VERSION..."
  git tag -a "v$VERSION" -m "Release v$VERSION"
  echo "✅ Tag created. Push with: git push --tags"
fi

echo "✅ All done!"
