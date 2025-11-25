# Transform

A utility package for scraping websites, extracting themes, and generating React components with Gemini AI.

## Structure

```
packages/transform/
├── src/                    # Source code
│   ├── features/
│   │   ├── component-generator/  # Gemini AI component generation
│   │   ├── visual-capture/       # Screenshot & video capture
│   │   └── theme-extractor/      # Color & font extraction
│   ├── config/             # Site configuration
│   └── workflow/           # Full pipeline workflow
├── scraped-html-files/     # Scraped HTML (gitignored)
├── output/                 # Generated outputs (gitignored)
│   ├── screenshots/        # Page section screenshots
│   ├── videos/            # Scroll recording videos
│   ├── themes/            # Extracted themes & fonts
│   └── components/        # Generated React components
├── preview/               # Vite preview app
└── package.json
```

## Usage

### Full Workflow

```bash
# Run complete pipeline: capture → extract → generate
pnpm workflow
```

### Individual Steps

```bash
# 1. Capture screenshots and videos
pnpm capture

# 2. Extract theme (colors, fonts, typography)
pnpm extract:theme

# 3. Generate React components with Gemini AI
pnpm generate
```

### Configuration

Edit `src/config/working-sites.ts` to configure which sites to process.

## Development

```bash
# Install dependencies
pnpm install

# Run in watch mode
pnpm dev

# Type check
pnpm typecheck

# Format code
pnpm format:write
```

## Output Location

All generated files are stored in `packages/transform/output/`:
- **screenshots/** - PNG images of each page section
- **videos/** - WebM scroll recordings
- **themes/** - JSON files with colors, fonts, and CSS variables
- **components/** - Generated TypeScript React components

**Note:** The `output/` directory is gitignored. Only `.gitkeep` is tracked.
