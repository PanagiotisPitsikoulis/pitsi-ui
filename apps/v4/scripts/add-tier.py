#!/usr/bin/env python3
import re
import sys
from pathlib import Path

def extract_subcategory(item_text):
    """Extract subcategory from block's file path"""
    match = re.search(r'path:\s*["\']blocks/[^/]+/([^/]+)/', item_text)
    return match.group(1) if match else 'uncategorized'

def extract_name(item_text):
    """Extract name from registry item"""
    match = re.search(r'name:\s*["\']([^"\']+)["\']', item_text)
    return match.group(1) if match else 'unknown'

def add_tier_to_item(item_text, tier):
    """Add tier to a registry item"""
    # Check if tier already exists
    if re.search(r'^\s*tier:', item_text, re.MULTILINE):
        return re.sub(r'^\s*tier:\s*["\'](?:free|pro)["\'],?\s*$', f'    tier: "{tier}",', item_text, flags=re.MULTILINE)

    lines = item_text.split('\n')

    # Try to find the categories line first (tier should come before categories)
    categories_index = -1
    for i in range(len(lines) - 1, -1, -1):
        if re.match(r'^\s*categories:', lines[i]):
            categories_index = i
            break

    if categories_index != -1:
        # Insert tier before categories
        lines.insert(categories_index, f'    tier: "{tier}",')
    else:
        # No categories found, insert before the closing brace
        for i in range(len(lines) - 1, -1, -1):
            if re.match(r'^  \},?$', lines[i]):
                # Insert tier before this line
                lines.insert(i, f'    tier: "{tier}",')
                break

    return '\n'.join(lines)

def process_file(filepath, get_tier_func):
    """Process a registry file and add tiers"""
    print(f"\nProcessing {filepath.name}...")

    content = filepath.read_text()

    # Extract the items section
    match = re.search(r'(export const \w+: Registry\["items"\] = \[)(.*?)(\]\s*$)', content, re.DOTALL)
    if not match:
        print("ERROR: Could not find registry items")
        return

    preamble = match.group(1)
    items_section = match.group(2)
    postamble = match.group(3)

    # Split into individual items by finding "  }," patterns
    # Use a simple depth-tracking approach
    items = []
    current_item = []
    depth = 0
    in_string = False
    string_char = None

    for line in items_section.split('\n'):
        # Track string state (simplified - doesn't handle escaped quotes perfectly)
        for char in line:
            if char in ['"', "'", '`'] and not in_string:
                in_string = True
                string_char = char
            elif in_string and char == string_char:
                in_string = False

        # Track brace depth when not in string
        if not in_string:
            depth += line.count('{') - line.count('}')

        current_item.append(line)

        # When we return to depth 0 and see "  }," we've completed an item
        if depth == 0 and re.match(r'^  \},?$', line.strip(',')):
            items.append('\n'.join(current_item))
            current_item = []

    print(f"Found {len(items)} items")

    # Apply tier to each item
    updated_items = []
    for idx, item in enumerate(items):
        tier = get_tier_func(item, idx, items)
        updated_item = add_tier_to_item(item, tier)
        updated_items.append(updated_item)

    # Reconstruct file
    # Items already have commas, so just join with newlines
    new_content = preamble + '\n' + '\n'.join(updated_items) + '\n' + postamble

    filepath.write_text(new_content)

    # Count tiers
    free_count = sum(1 for item in updated_items if 'tier: "free"' in item)
    pro_count = sum(1 for item in updated_items if 'tier: "pro"' in item)
    print(f"✅ Added tiers: {free_count} free, {pro_count} pro")

def main():
    base_path = Path(__file__).parent.parent / 'registry' / 'new-york-v4'

    print("🎯 Adding tier pricing to registry items...")

    # Process UI - all free
    process_file(base_path / 'ui' / '_registry.ts', lambda item, idx, items: 'free')

    # Process animations - all free
    process_file(base_path / 'animations' / '_registry.ts', lambda item, idx, items: 'free')

    # Process blocks - 30/70 split per subcategory
    def get_block_tier(item, idx, items):
        # Group by subcategory
        items_with_meta = [(i, extract_name(i), extract_subcategory(i)) for i in items]
        current_subcat = items_with_meta[idx][2]

        # Get all items in this subcategory, sorted by name
        subcat_items = sorted([i for i in items_with_meta if i[2] == current_subcat], key=lambda x: x[1])

        # Find position in sorted list
        current_name = items_with_meta[idx][1]
        sorted_idx = next(i for i, item in enumerate(subcat_items) if item[1] == current_name)

        # Calculate 30% free
        free_count = int(len(subcat_items) * 0.3 + 0.5)  # Round up

        return 'free' if sorted_idx < free_count else 'pro'

    process_file(base_path / 'blocks' / '_registry.ts', get_block_tier)

    # Process examples - all free
    process_file(base_path / 'examples' / '_registry.ts', lambda item, idx, items: 'free')

    print("\n🎉 Done! All registry items have been updated with tiers.")

if __name__ == '__main__':
    main()
