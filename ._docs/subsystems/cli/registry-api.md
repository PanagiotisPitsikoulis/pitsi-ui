# Registry API Module

> Internals of the CLI's registry communication

## Module Structure

```
packages/pitsi/src/registry/
├── api.ts           # Public API exports
├── schema.ts        # Zod schemas
├── fetcher.ts       # HTTP client
├── resolver.ts      # Dependency resolution
├── builder.ts       # URL construction
├── parser.ts        # Response parsing
├── validator.ts     # Schema validation
├── constants.ts     # Built-in registries
├── context.ts       # Request context
├── config.ts        # Config handling
├── namespaces.ts    # @scope handling
├── search.ts        # Search functionality
├── env.ts           # Environment handling
├── errors.ts        # Error types
├── utils.ts         # Utilities
└── index.ts         # Re-exports
```

---

## Public API (`api.ts`)

### `getpitsiRegistryIndex`

Get the full pitsi registry index.

```typescript
export async function getpitsiRegistryIndex(): Promise<RegistryItem[]>
```

**Usage:**
```typescript
const items = await getpitsiRegistryIndex()
// Returns all items from pitsiui.com registry
```

### `getRegistryItems`

Get specific items from any registry.

```typescript
export async function getRegistryItems(
  items: string[],
  options: {
    config: Config
    tree?: boolean
  }
): Promise<RegistryItem[]>
```

**Usage:**
```typescript
const [button, dialog] = await getRegistryItems(
  ["button", "@v0/card"],
  { config }
)
```

### `getItemTargetTree`

Get resolved dependency tree for items.

```typescript
export async function getItemTargetTree(
  items: string[],
  config: Config
): Promise<ResolvedItemTree>
```

**Returns:**
```typescript
interface ResolvedItemTree {
  dependencies: string[]      // npm packages
  devDependencies: string[]   // npm dev packages
  files: RegistryFile[]       // Files to install
  tailwind: TailwindConfig    // Tailwind config to merge
  cssVars: CssVars            // CSS variables
  css: CssRules               // Raw CSS
  envVars: EnvVars            // Environment variables
}
```

### `searchRegistries`

Search across configured registries.

```typescript
export async function searchRegistries(
  query: string,
  options: {
    config: Config
    registries?: string[]
    limit?: number
  }
): Promise<SearchResults>
```

---

## Fetcher (`fetcher.ts`)

HTTP client for registry communication.

### `fetchFromRegistry`

```typescript
export async function fetchFromRegistry<T>(
  url: string,
  options?: FetchOptions
): Promise<T>

interface FetchOptions {
  headers?: Record<string, string>
  timeout?: number
  retries?: number
}
```

**Features:**
- Automatic retry on failure
- Timeout handling
- Response caching
- Error normalization

### Implementation

```typescript
async function fetchFromRegistry<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const { headers = {}, timeout = 10000, retries = 3 } = options

  // Check cache
  const cached = cache.get(url)
  if (cached && !isStale(cached)) {
    return cached.data
  }

  let lastError: Error
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeout)

      const response = await fetch(url, {
        headers: {
          "Accept": "application/json",
          ...headers
        },
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new RegistryError(
          `HTTP ${response.status}`,
          response.status
        )
      }

      const data = await response.json()

      // Update cache
      cache.set(url, {
        data,
        timestamp: Date.now(),
        etag: response.headers.get("etag")
      })

      return data as T
    } catch (error) {
      lastError = error as Error
      if (i < retries - 1) {
        await delay(1000 * (i + 1))  // Exponential backoff
      }
    }
  }

  throw lastError!
}
```

---

## Builder (`builder.ts`)

URL construction for registry requests.

### `buildRegistryUrl`

```typescript
export function buildRegistryUrl(
  item: string,
  config: Config
): { url: string; headers: Record<string, string> }
```

**Usage:**
```typescript
buildRegistryUrl("button", config)
// { url: "https://pitsiui.com/r/button.json", headers: {} }

buildRegistryUrl("@acme/custom", config)
// { url: "https://registry.acme.com/r/custom.json", headers: { Authorization: "..." } }
```

### Implementation

```typescript
function buildRegistryUrl(item: string, config: Config) {
  const { namespace, name } = parseItem(item)

  // Get registry config
  const registryConfig = config.registries?.[namespace]
    ?? BUILT_IN_REGISTRIES[namespace]

  if (!registryConfig) {
    throw new Error(`Unknown registry: ${namespace}`)
  }

  // Build URL
  const url = typeof registryConfig === "string"
    ? registryConfig.replace("{name}", name)
    : registryConfig.url.replace("{name}", name)

  // Build headers
  const headers = typeof registryConfig === "object"
    ? resolveHeaders(registryConfig.headers)
    : {}

  return { url, headers }
}
```

---

## Parser (`parser.ts`)

Response parsing and normalization.

### `parseRegistryItem`

```typescript
export function parseRegistryItem(
  data: unknown
): RegistryItem
```

**Features:**
- Schema validation
- Default values
- Error messages

### `parseRegistryIndex`

```typescript
export function parseRegistryIndex(
  data: unknown
): RegistryItem[]
```

---

## Constants (`constants.ts`)

Built-in registry definitions.

```typescript
export const BUILT_IN_REGISTRIES: Record<string, RegistryConfig> = {
  "@pitsi": "https://pitsiui.com/r/styles/new-york-v4/{name}.json",
}

export const DEFAULT_REGISTRY = "@pitsi"

export const DEPRECATED_COMPONENTS = [
  {
    name: "toast",
    message: "Toast is deprecated in Tailwind v4. Use sonner instead."
  }
]
```

---

## Context (`context.ts`)

Request context for tracking state.

```typescript
// Create context for a session
const context = createRegistryContext()

// Track resolved items
context.markResolved("button")

// Check if resolved
context.isResolved("button") // true

// Clear context
clearRegistryContext()
```

Used to prevent duplicate resolution and detect cycles.

---

## Namespaces (`namespaces.ts`)

Scope parsing and handling.

```typescript
export function parseItem(item: string): {
  namespace: string
  name: string
}

// Examples:
parseItem("button")
// { namespace: "@pitsi", name: "button" }

parseItem("@v0/card")
// { namespace: "@v0", name: "card" }

parseItem("@acme/custom-button")
// { namespace: "@acme", name: "custom-button" }
```

---

## Search (`search.ts`)

Search functionality across registries.

```typescript
export async function searchRegistry(
  registry: string,
  query: string,
  config: Config
): Promise<SearchResult[]>

interface SearchResult {
  name: string
  type: string
  description: string
  registry: string
  addCommandArgument: string
}
```

---

## Errors (`errors.ts`)

Custom error types.

```typescript
export class RegistryError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode?: number
  ) {
    super(message)
    this.name = "RegistryError"
  }
}

export class NetworkError extends RegistryError {
  constructor(message: string, public cause?: Error) {
    super(message, "NETWORK_ERROR")
  }
}

export class NotFoundError extends RegistryError {
  constructor(item: string) {
    super(`Component "${item}" not found`, "NOT_FOUND", 404)
  }
}

export class ValidationError extends RegistryError {
  constructor(message: string, public details: ZodError) {
    super(message, "VALIDATION_ERROR")
  }
}
```

---

## Environment (`env.ts`)

Environment variable handling for registry URLs.

```typescript
// Resolve environment variables in headers
export function resolveHeaders(
  headers: Record<string, string>
): Record<string, string>

// Example:
resolveHeaders({
  Authorization: "Bearer ${ACME_TOKEN}"
})
// Returns: { Authorization: "Bearer actual-token-value" }
```

---

## Usage Example

Complete flow for adding a component:

```typescript
import {
  getRegistryItems,
  getItemTargetTree
} from "pitsi/registry"

// 1. Get config
const config = await getConfig(cwd)

// 2. Fetch items
const items = await getRegistryItems(["dialog"], { config })

// 3. Get resolved tree
const tree = await getItemTargetTree(["dialog"], config)

// 4. tree contains everything needed:
// - files: transformed component files
// - dependencies: npm packages to install
// - cssVars: CSS variables to add
// - tailwind: Tailwind config to merge
```

---

## Testing

The registry module has comprehensive tests:

```bash
# Run registry tests
cd packages/pitsi
bun test src/registry/

# Run specific test
bun test src/registry/api.test.ts
```

Test files:
- `api.test.ts` - Public API tests
- `fetcher.test.ts` - HTTP client tests
- `resolver.test.ts` - Resolution tests
- `builder.test.ts` - URL building tests
- `parser.test.ts` - Parsing tests
