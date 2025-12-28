# Screenshot Registry Script Optimization

## Goal

Optimize `capture-registry.mts` for speed while maintaining image quality and keeping RAM usage low.

## Constraints

- Don't change theme logic (keep double navigation per item)
- All images must fully load
- Screenshots must look identical
- No significant RAM increase
- Use `bun --bun` for faster runtime
- Add `--show-browser` flag for debugging

## Problem Analysis

### Current Performance
- Full registry (200+ items): 20-40 minutes
- ~12 seconds per item with 9 parallel captures
- Uneven browser utilization due to static batch assignment

### Root Causes
1. **Static batch assignment** - items pre-divided, browsers sit idle when done
2. **Page creation overhead** - new page per item (~250ms overhead)
3. **Excessive waits** - ~4-5 seconds of fixed delays per theme
4. **Duplicate checks** - images checked twice
5. **No caching** - assets reloaded for every item

## Solution Architecture

### 1. Work-Stealing Queue

Replace static batches with dynamic work queue:

```
┌─────────────────────────────────────────────────┐
│              Shared Work Queue                   │
│  [item1, item2, item3, ... item200]             │
└──────────────┬──────────────┬──────────────┬────┘
               │              │              │
         ┌─────▼─────┐  ┌─────▼─────┐  ┌─────▼─────┐
         │ Browser 1 │  │ Browser 2 │  │ Browser 3 │
         │ (3 pages) │  │ (3 pages) │  │ (3 pages) │
         └───────────┘  └───────────┘  └───────────┘
```

- Browsers pull next item when a page becomes free
- No idle time - work automatically balances

### 2. Page Pooling

Pre-create pages per browser, reuse across items:

```typescript
const pagePool = await Promise.all(
  Array(PAGE_CONCURRENCY).fill(null).map(() => browser.newPage())
)
// Reuse pages - navigate instead of recreate
```

### 3. Streamlined Waits

Current (~4-5s per theme):
- fonts.ready
- images load (5s timeout each)
- background images (3s timeout)
- CSS animations
- 2× requestAnimationFrame
- requestIdleCallback (1s timeout)
- 200ms setTimeout
- React hydration (1.5s max)
- 1.5s additional wait
- Re-check images (duplicate)
- Network idle (5s max)

Optimized (~1-1.5s per theme):
- networkidle0 in goto
- fonts.ready
- images + backgrounds (parallel, 8s total timeout)
- 1× requestAnimationFrame
- 300ms settle time

### 4. CLI Flags

```bash
bun --bun scripts/capture-registry.mts [options]

--show-browser    # Visible browser windows (debug)
--force, -f       # Recapture all items
--blocks-only, -b # Only capture blocks
--verbose, -v     # Detailed progress
--concurrency N   # Override browser count
```

### 5. Browser Caching

```typescript
await puppeteer.launch({
  args: [
    '--disk-cache-size=104857600',  // 100MB cache
  ],
})
```

### 6. Prefetch Hints

Inject prefetch links for next item while capturing current.

## Expected Results

| Metric | Current | Optimized |
|--------|---------|-----------|
| Time per item | ~12s | ~3-4s |
| Full registry | 20-40 min | 5-10 min |
| Browser utilization | Uneven | Balanced |
| RAM usage | Baseline | Same |

## Implementation Plan

1. Add CLI flag parsing (`--show-browser`, `--concurrency`)
2. Implement work queue with mutex for thread-safe access
3. Implement page pooling per browser
4. Refactor `waitForPageReady` to remove redundancy
5. Add browser caching args
6. Add prefetch logic
7. Update package.json script to use `bun --bun`
8. Test with `--show-browser` to verify parallelism
9. Benchmark before/after

## Files to Modify

- `apps/v4/scripts/capture-registry.mts`
- `apps/v4/package.json`
