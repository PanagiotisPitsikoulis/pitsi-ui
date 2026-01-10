import { type Registry } from "pitsi/schema"

export const lib: Registry["items"] = [
  {
    name: "utils",
    type: "registry:lib",
    description:
      "Utility function for merging class names with Tailwind CSS conflict resolution.",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "lib/utils.ts",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
  {
    name: "dynamic-icon",
    type: "registry:lib",
    description:
      "Dynamically load and render Lucide icons by name with automatic format transformation.",
    dependencies: ["lucide-react"],
    devDependencies: ["@types/react"],
    files: [
      {
        path: "lib/dynamic-icon.tsx",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
  {
    name: "polymorphic",
    type: "registry:lib",
    description:
      "TypeScript utilities for building polymorphic components with the 'as' prop pattern.",
    devDependencies: ["@types/react"],
    files: [
      {
        path: "lib/polymorphic.ts",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
  {
    name: "qr-code",
    type: "registry:lib",
    description:
      "QR code component with label and description, styled for the design system.",
    dependencies: ["qrcode.react", "class-variance-authority"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "lib/qr-code.tsx",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
  {
    name: "recursive-clone-children",
    type: "registry:lib",
    description:
      "Recursively clone React children and inject props into components by display name.",
    devDependencies: ["@types/react"],
    files: [
      {
        path: "lib/recursive-clone-children.tsx",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
  {
    name: "block-theme",
    type: "registry:lib",
    description:
      "Theme utilities for blocks including color palettes, fonts, and tint levels.",
    dependencies: ["next-themes"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "lib/block-theme.tsx",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
  {
    name: "block-context",
    type: "registry:lib",
    description:
      "Context provider for blocks with alternating backgrounds and surface styling.",
    registryDependencies: ["utils", "block-theme"],
    files: [
      {
        path: "lib/block-context.tsx",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
  {
    name: "block-decorations",
    type: "registry:lib",
    description:
      "Decoration components for blocks: overlays, patterns, gradients, and effects.",
    registryDependencies: ["utils"],
    files: [
      {
        path: "lib/block-decorations.tsx",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
  {
    name: "palettes",
    type: "registry:lib",
    description:
      "Color palette definitions for block theming with light and dark mode support.",
    files: [
      {
        path: "lib/palettes.ts",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
  {
    name: "typography",
    type: "registry:lib",
    description:
      "Typography preset definitions with display and body font configurations.",
    files: [
      {
        path: "lib/typography.ts",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
  {
    name: "templates",
    type: "registry:lib",
    description:
      "Runtime template helpers for blocks-first architecture with block selection utilities.",
    registryDependencies: ["palettes", "typography"],
    files: [
      {
        path: "lib/templates.ts",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
  {
    name: "block-header",
    type: "registry:lib",
    description:
      "Reusable section header component for blocks with badge, title, and description.",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["utils", "polymorphic"],
    files: [
      {
        path: "lib/block-header.tsx",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
  {
    name: "hero-text",
    type: "registry:lib",
    description:
      "Polymorphic hero text component with badge, title, and description for hero sections.",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["utils", "polymorphic"],
    files: [
      {
        path: "lib/hero-text.tsx",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
  {
    name: "block-selection-context",
    type: "registry:lib",
    description:
      "React context for managing block selections in templates with alternatives.",
    registryDependencies: ["templates"],
    files: [
      {
        path: "lib/block-selection-context.tsx",
        type: "registry:lib",
      },
    ],
    readiness: "production",
  },
]
