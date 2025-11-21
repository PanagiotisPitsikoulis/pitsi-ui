# Web Scraper

A Node.js script that scrapes websites listed in `sources.md` and downloads their HTML files organized by category.

## Features

- Parses `sources.md` to extract categories and URLs
- Visits each website and discovers all internal links
- Downloads HTML for each page with concurrent processing
- Organizes files by category and site
- Controlled concurrency to be respectful to servers
  - 5 sites scraped simultaneously
  - 10 pages per site downloaded concurrently

## Usage

```bash
pnpm scrape
```

## Output Structure

The scraper creates the following folder structure in `scraped-html-files/`:

```
scraped-html-files/
├── e-commerce/
│   ├── e-commerce-1/
│   │   ├── e-commerce-1-home.html
│   │   ├── e-commerce-1-about.html
│   │   ├── e-commerce-1-contact.html
│   │   └── ...
│   ├── e-commerce-2/
│   │   ├── e-commerce-2-home.html
│   │   └── ...
│   └── ...
├── agency/
│   ├── agency-1/
│   │   ├── agency-1-home.html
│   │   ├── agency-1-about.html
│   │   └── ...
│   └── ...
├── ai/
├── saas/
├── app/
├── portfolio/
└── ui-dev-tool/
```

## Naming Convention

- **Folders**: `{category}-{index}` (e.g., `agency-1`, `e-commerce-2`)
- **Files**: `{category}-{index}-{page-slug}.html` (e.g., `agency-1-about.html`, `e-commerce-2-contact.html`)
- **Home pages**: Always named `{category}-{index}-home.html`

## How It Works

1. **Parse sources.md**: Extracts category headers (## Category Name) and URLs
2. **Visit each URL**: Downloads the home page
3. **Find internal links**: Uses Cheerio to parse HTML and find all links from the same domain
4. **Download pages**: Fetches HTML for each discovered page
5. **Save files**: Organizes and saves files with descriptive names

## Concurrency Control

The scraper uses controlled concurrency to balance speed and server respect:
- **Site concurrency**: 5 websites scraped simultaneously
- **Page concurrency**: 10 pages per site downloaded at once
- These limits can be adjusted in `scraper.ts` by changing `SITE_CONCURRENCY` and `PAGE_CONCURRENCY`

## Error Handling

- Failed downloads are logged but don't stop the scraper
- Invalid URLs are skipped
- Network errors are caught and reported
