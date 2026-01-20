# API Routes Reference

> Documentation for all API endpoints in apps/v4

## Overview

```
/r/*                    # Registry API (static JSON)
/api/auth/*             # Authentication (better-auth)
/api/search             # Component search
/api/stripe/webhook     # Stripe webhooks
/api/team/*             # Team management
/api/open-in-editor     # VS Code integration
/llm/*                  # LLM documentation
```

---

## Registry API

### `GET /r/styles.json`

Returns available styles.

**Response:**
```json
[
  {
    "name": "new-york-v4",
    "label": "New York"
  }
]
```

### `GET /r/styles/{style}/registry.json`

Returns full registry for a style.

**Example:** `GET /r/styles/new-york-v4/registry.json`

**Response:**
```json
{
  "name": "pitsi/ui",
  "homepage": "https://pitsiui.com",
  "items": [
    {
      "name": "button",
      "type": "registry:ui",
      "description": "A versatile button component",
      "dependencies": ["@radix-ui/react-slot"],
      "registryDependencies": ["utils"],
      "files": [
        {
          "path": "registry/new-york-v4/ui/button.tsx",
          "type": "registry:ui"
        }
      ],
      "categories": ["core-components"],
      "tier": "free",
      "readiness": "production"
    }
  ]
}
```

### `GET /r/styles/{style}/{name}.json`

Returns a single registry item with file contents.

**Example:** `GET /r/styles/new-york-v4/button.json`

**Response:**
```json
{
  "name": "button",
  "type": "registry:ui",
  "description": "A versatile button component",
  "dependencies": ["@radix-ui/react-slot"],
  "registryDependencies": ["utils"],
  "files": [
    {
      "path": "registry/new-york-v4/ui/button.tsx",
      "type": "registry:ui",
      "content": "import * as React from \"react\"..."
    }
  ]
}
```

---

## Authentication API

### `POST /api/auth/*`

Handled by better-auth. Supports:

- `POST /api/auth/sign-in/social` - OAuth sign in
- `POST /api/auth/sign-out` - Sign out
- `GET /api/auth/session` - Get current session
- `POST /api/auth/callback/{provider}` - OAuth callbacks

**Sign In Example:**
```typescript
// Using better-auth client
await authClient.signIn.social({
  provider: "github",
  callbackURL: "/dashboard"
})
```

**Session Example:**
```typescript
const session = await authClient.getSession()
// { user: { id, email, name }, session: { ... } }
```

---

## Search API

### `GET /api/search`

Search across registry components.

**Query Parameters:**
| Param | Type | Description |
|-------|------|-------------|
| `q` | string | Search query |
| `type` | string | Filter by type |
| `limit` | number | Max results (default: 20) |
| `offset` | number | Pagination offset |

**Example:** `GET /api/search?q=button&type=registry:ui&limit=10`

**Response:**
```json
{
  "results": [
    {
      "name": "button",
      "type": "registry:ui",
      "description": "A versatile button component",
      "score": 0.95
    },
    {
      "name": "button-group",
      "type": "registry:ui",
      "description": "Group of buttons",
      "score": 0.75
    }
  ],
  "total": 2,
  "query": "button"
}
```

---

## Stripe Webhook API

### `POST /api/stripe/webhook`

Handles Stripe webhook events.

**Headers Required:**
- `stripe-signature` - Webhook signature

**Events Handled:**
| Event | Action |
|-------|--------|
| `checkout.session.completed` | Grant pro access |
| `customer.subscription.updated` | Update subscription status |
| `customer.subscription.deleted` | Revoke pro access |
| `invoice.payment_failed` | Handle failed payment |

**Implementation:**
```typescript
// app/api/stripe/webhook/route.ts
export async function POST(request: Request) {
  const payload = await request.text()
  const signature = request.headers.get("stripe-signature")

  const event = stripe.webhooks.constructEvent(
    payload,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET
  )

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object
      await grantProAccess(session.customer)
      break

    case "customer.subscription.deleted":
      const subscription = event.data.object
      await revokeProAccess(subscription.customer)
      break
  }

  return new Response("OK", { status: 200 })
}
```

---

## Team API

### `GET /api/team/{id}`

Get team details.

**Response:**
```json
{
  "id": "team_123",
  "name": "Acme Inc",
  "ownerId": "user_456",
  "members": [
    {
      "userId": "user_456",
      "role": "owner",
      "joinedAt": "2024-01-01T00:00:00Z"
    }
  ],
  "createdAt": "2024-01-01T00:00:00Z"
}
```

### `PATCH /api/team/{id}`

Update team details.

**Request:**
```json
{
  "name": "Acme Corporation"
}
```

### `DELETE /api/team/{id}`

Delete a team.

---

## Open in Editor API

### `POST /api/open-in-editor`

Opens a file in VS Code (local development only).

**Request:**
```json
{
  "path": "registry/new-york-v4/ui/button.tsx",
  "line": 10
}
```

**Implementation:**
```typescript
// app/api/open-in-editor/route.ts
export async function POST(request: Request) {
  if (process.env.NODE_ENV !== "development") {
    return new Response("Not available in production", { status: 403 })
  }

  const { path, line } = await request.json()
  const fullPath = join(process.cwd(), path)

  // Open in VS Code
  exec(`code --goto "${fullPath}:${line}"`)

  return new Response("OK")
}
```

---

## LLM Documentation API

### `GET /llm/[[...slug]]`

Returns LLM-optimized documentation.

**Routes:**
- `GET /llm` - Full documentation index
- `GET /llm/components` - Component documentation
- `GET /llm/blocks` - Block documentation
- `GET /llm/hooks` - Hook documentation

**Response:** Plain text in llms.txt format

```text
# pitsi/ui

A collection of beautifully designed components.

## Components

### Button
A versatile button component with multiple variants.

Props:
- variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
- size: "default" | "sm" | "lg" | "icon"

Usage:
\`\`\`tsx
import { Button } from "@/components/ui/button"

<Button variant="outline">Click me</Button>
\`\`\`
```

---

## Error Responses

All API routes use consistent error responses:

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Component not found"
  }
}
```

### Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `NOT_FOUND` | 404 | Resource not found |
| `UNAUTHORIZED` | 401 | Authentication required |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `BAD_REQUEST` | 400 | Invalid request |
| `INTERNAL_ERROR` | 500 | Server error |

---

## Rate Limiting

Production API routes have rate limiting:

| Endpoint | Limit |
|----------|-------|
| `/r/*` | 100 req/min |
| `/api/search` | 30 req/min |
| `/api/auth/*` | 10 req/min |

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640000000
```

---

## CORS

The registry API supports CORS for CLI access:

```typescript
// next.config.mjs
async headers() {
  return [
    {
      source: "/r/:path*",
      headers: [
        { key: "Access-Control-Allow-Origin", value: "*" },
        { key: "Access-Control-Allow-Methods", value: "GET" },
      ],
    },
  ]
}
```
