#!/bin/bash

# Script to replace ui.pitsi.com with pitsiui.com across the entire codebase

echo "🔍 Finding and replacing ui.pitsi.com with pitsiui.com..."

# Use find and sed to replace in all relevant files
find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" -o -name "*.yml" -o -name "*.yaml" -o -name "*.txt" \) \
  ! -path "*/node_modules/*" \
  ! -path "*/.next/*" \
  ! -path "*/dist/*" \
  ! -path "*/.git/*" \
  -exec sed -i '' 's/ui\.pitsi\.com/pitsiui.com/g' {} +

echo "✅ URL replacement complete!"
echo ""
echo "📊 Summary of changes:"
grep -r "pitsiui.com" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.md" --include="*.yml" --include="*.yaml" --include="*.txt" --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=dist --exclude-dir=.git . | wc -l | xargs -I {} echo "  {} files now use pitsiui.com"
