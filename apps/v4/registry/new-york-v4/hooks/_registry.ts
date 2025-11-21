import { type Registry } from "pitsi/schema"

export const hooks: Registry["items"] = [
  {
    name: "use-animation-state",
    type: "registry:hook",
    description:
      "Hook for managing animation state with mobile detection and scroll-based animations.",
    registryDependencies: ["use-mobile"],
    files: [
      {
        path: "hooks/use-animation-state.tsx",
        type: "registry:hook",
      },
    ],
    readiness: "production",
  },
  {
    name: "use-colors",
    type: "registry:hook",
    description:
      "Hook for managing color format preferences and last copied color.",
    dependencies: ["jotai"],
    registryDependencies: ["use-mounted"],
    files: [
      {
        path: "hooks/use-colors.ts",
        type: "registry:hook",
      },
    ],
    readiness: "production",
  },
  {
    name: "use-config",
    type: "registry:hook",
    description: "Hook for managing configuration state.",
    dependencies: ["jotai"],
    files: [
      {
        path: "hooks/use-config.ts",
        type: "registry:hook",
      },
    ],
    readiness: "production",
  },
  {
    name: "use-copy-to-clipboard",
    type: "registry:hook",
    description:
      "Hook for copying text to clipboard with optional timeout and callback.",
    files: [
      {
        path: "hooks/use-copy-to-clipboard.ts",
        type: "registry:hook",
      },
    ],
    readiness: "production",
  },
  {
    name: "use-layout",
    type: "registry:hook",
    description:
      "Hook and provider for managing layout state (fixed or full) with localStorage persistence.",
    files: [
      {
        path: "hooks/use-layout.tsx",
        type: "registry:hook",
      },
    ],
    readiness: "production",
  },
  {
    name: "use-media-query",
    type: "registry:hook",
    description: "Hook for detecting media query matches.",
    files: [
      {
        path: "hooks/use-media-query.tsx",
        type: "registry:hook",
      },
    ],
    readiness: "production",
  },
  {
    name: "use-meta-color",
    type: "registry:hook",
    description: "Hook for managing meta theme color based on current theme.",
    files: [
      {
        path: "hooks/use-meta-color.ts",
        type: "registry:hook",
      },
    ],
    readiness: "production",
  },
  {
    name: "use-mobile",
    type: "registry:hook",
    description: "Hook for detecting mobile devices using media query.",
    registryDependencies: ["use-media-query"],
    files: [
      {
        path: "hooks/use-mobile.ts",
        type: "registry:hook",
      },
    ],
    readiness: "production",
  },
  {
    name: "use-mounted",
    type: "registry:hook",
    description: "Hook for detecting if component is mounted (client-side).",
    files: [
      {
        path: "hooks/use-mounted.ts",
        type: "registry:hook",
      },
    ],
    readiness: "production",
  },
  {
    name: "use-mutation-observer",
    type: "registry:hook",
    description: "Hook for observing DOM mutations using MutationObserver API.",
    files: [
      {
        path: "hooks/use-mutation-observer.ts",
        type: "registry:hook",
      },
    ],
    readiness: "production",
  },
  {
    name: "use-tab-observer",
    type: "registry:hook",
    description: "Hook for observing active tab changes in tab components.",
    files: [
      {
        path: "hooks/use-tab-observer.ts",
        type: "registry:hook",
      },
    ],
    readiness: "production",
  },
  {
    name: "use-content-pagination",
    type: "registry:hook",
    description:
      "Hook for infinite scroll pagination of content items with automatic loading on scroll.",
    dependencies: ["motion"],
    files: [
      {
        path: "hooks/use-content-pagination.tsx",
        type: "registry:hook",
      },
    ],
    readiness: "production",
  },
]
