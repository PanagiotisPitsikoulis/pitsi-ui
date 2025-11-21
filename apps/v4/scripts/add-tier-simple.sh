#!/bin/bash

# This script adds tier to registry items by inserting "tier: 'free'," or "tier: 'pro',"
# right before the closing brace of each item

# Function to add tier before item closing braces
add_tier() {
  local file=$1
  local tier=$2
  
  # Use awk to process the file
  # When we see "  }," (item closing), insert tier before it
  # But we need to make sure we don't add it inside nested objects
  
  # Simple approach: replace pattern "  }," preceded by a newline and property
  # This matches the end of registry items
  
  # Pattern: we want to match lines that are just "  }," or "  }" at the end
  # and are preceded by a closing of another property
  
  awk -v tier="$tier" '
    # Track if previous line was a closing brace
    {
      # If current line is "  }," or "  }" and previous had content
      if ($0 ~ /^  \},?$/ && prev_line ~ /^\s+\},?\s*$/) {
        # Insert tier before this line
        print "    tier: \"" tier "\","
      }
      print $0
      prev_line = $0
    }
  ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
}

# Add tier to animations and UI - all free
add_tier "registry/new-york-v4/animations/_registry.ts" "free"
add_tier "registry/new-york-v4/ui/_registry.ts" "free"

echo "Added tier to animations and UI components"
