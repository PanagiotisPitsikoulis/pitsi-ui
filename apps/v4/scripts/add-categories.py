#!/usr/bin/env python3
import re
import sys
from pathlib import Path

def extract_name(item_text):
    """Extract name from registry item"""
    match = re.search(r'name:\s*["\']([^"\']+)["\']', item_text)
    return match.group(1) if match else 'unknown'

def add_categories_to_item(item_text, categories):
    """Add categories to a registry item"""
    # Check if categories already exists
    if re.search(r'^\s*categories:', item_text, re.MULTILINE):
        return re.sub(
            r'^\s*categories:\s*\[.*?\],?\s*$',
            f'    categories: {categories},',
            item_text,
            flags=re.MULTILINE
        )

    # Find where to insert categories
    lines = item_text.split('\n')

    # Try to find the tier line first (UI components have this)
    tier_index = -1
    for i in range(len(lines) - 1, -1, -1):
        if re.match(r'^\s*tier:', lines[i]):
            tier_index = i
            break

    if tier_index != -1:
        # Insert categories after tier
        lines.insert(tier_index + 1, f'    categories: {categories},')
    else:
        # No tier field, insert before the closing brace
        for i in range(len(lines) - 1, -1, -1):
            if re.match(r'^  \},?$', lines[i]):
                # Insert categories before this line
                lines.insert(i, f'    categories: {categories},')
                break

    return '\n'.join(lines)

def process_file(filepath, categorization_func):
    """Process a registry file and add categories"""
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

    # Split into individual items
    items = []
    current_item = []
    depth = 0
    in_string = False
    string_char = None

    for line in items_section.split('\n'):
        # Track string state
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

    # Apply categories to each item
    updated_items = []
    for item in items:
        name = extract_name(item)
        categories = categorization_func(name)
        updated_item = add_categories_to_item(item, categories)
        updated_items.append(updated_item)

    # Reconstruct file
    new_content = preamble + '\n' + '\n'.join(updated_items) + '\n' + postamble

    filepath.write_text(new_content)

    print(f"✅ Added categories to {len(updated_items)} items")

def get_ui_categories(name):
    """Determine categories for UI components"""
    # Shadcn-based components (original shadcn/ui components)
    shadcn_components = [
        "accordion", "alert", "alert-dialog", "aspect-ratio", "avatar", "badge",
        "breadcrumb", "button", "button-group", "calendar", "card", "carousel", "chart",
        "checkbox", "collapsible", "combobox", "command", "context-menu", "data-table",
        "date-picker", "dialog", "drawer", "dropdown-menu", "empty", "field", "form",
        "hover-card", "input", "input-otp", "item", "kbd", "label", "menubar",
        "native-select", "navigation-menu", "pagination", "popover", "progress",
        "radio-group", "resizable", "scroll-area", "select", "separator", "sheet",
        "sidebar", "skeleton", "slider", "sonner", "switch", "table", "tabs",
        "textarea", "toast", "toggle", "toggle-group", "tooltip"
    ]

    # Sectorial components (custom components for specific use cases)
    sectorial_components = [
        "container", "flex", "grid", "input-group", "segmented-control",
        "spacer", "spinner", "squircle", "typography", "unicorn-wrapper"
    ]

    if name in shadcn_components:
        return '["core-components"]'
    elif name in sectorial_components:
        return '["sectorial"]'
    else:
        # Default to primitives for unknown components
        return '["primitives"]'

def get_animations_categories(name):
    """All animations get the animations category"""
    return '["animations"]'

def get_examples_categories(name):
    """Determine categories for example components based on their base component"""
    # Shadcn-based components
    shadcn_components = [
        "accordion", "alert", "alert-dialog", "aspect-ratio", "avatar", "badge",
        "breadcrumb", "button", "button-group", "calendar", "card", "carousel", "chart",
        "checkbox", "collapsible", "combobox", "command", "context-menu", "data-table",
        "date-picker", "dialog", "drawer", "dropdown-menu", "empty", "field", "form",
        "hover-card", "input", "input-otp", "item", "kbd", "label", "menubar",
        "native-select", "navigation-menu", "pagination", "popover", "progress",
        "radio-group", "resizable", "scroll-area", "select", "separator", "sheet",
        "sidebar", "skeleton", "slider", "sonner", "switch", "table", "tabs",
        "textarea", "toast", "toggle", "toggle-group", "tooltip"
    ]

    # Check if the full name (without suffixes like -demo, -form, etc.) matches a shadcn component
    # Try progressively longer prefixes
    for component in shadcn_components:
        if name.startswith(component):
            return '["core-components"]'

    # Default to primitives for unknown examples
    return '["primitives"]'

def main():
    base_path = Path(__file__).parent.parent / 'registry' / 'new-york-v4'

    print("🎯 Adding categories to registry items...")

    # Process UI components
    process_file(base_path / 'ui' / '_registry.ts', get_ui_categories)

    # Process animations
    process_file(base_path / 'animations' / '_registry.ts', get_animations_categories)

    # Process examples
    process_file(base_path / 'examples' / '_registry.ts', get_examples_categories)

    print("\n🎉 Done! All registry items have been updated with categories.")

if __name__ == '__main__':
    main()
