import * as React from "react"

export const IndexExample: Record<string, Record<string, any>> = {
  "new-york-v4": {
    "accordion-demo": {
      name: "accordion-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["accordion"],
      files: [
        {
          path: "registry/new-york-v4/examples/accordion-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/accordion-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "alert-demo": {
      name: "alert-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["alert"],
      files: [
        {
          path: "registry/new-york-v4/examples/alert-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/alert-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "alert-destructive": {
      name: "alert-destructive",
      description: "",
      type: "registry:example",
      registryDependencies: ["alert"],
      files: [
        {
          path: "registry/new-york-v4/examples/alert-destructive.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/alert-destructive.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "alert-dialog-demo": {
      name: "alert-dialog-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["alert-dialog", "button"],
      files: [
        {
          path: "registry/new-york-v4/examples/alert-dialog-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/alert-dialog-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "aspect-ratio-demo": {
      name: "aspect-ratio-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["aspect-ratio"],
      files: [
        {
          path: "registry/new-york-v4/examples/aspect-ratio-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/aspect-ratio-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "avatar-demo": {
      name: "avatar-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["avatar"],
      files: [
        {
          path: "registry/new-york-v4/examples/avatar-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/avatar-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "badge-demo": {
      name: "badge-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: [
        {
          path: "registry/new-york-v4/examples/badge-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/badge-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "badge-destructive": {
      name: "badge-destructive",
      description: "",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: [
        {
          path: "registry/new-york-v4/examples/badge-destructive.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/badge-destructive.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "badge-outline": {
      name: "badge-outline",
      description: "",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: [
        {
          path: "registry/new-york-v4/examples/badge-outline.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/badge-outline.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "badge-secondary": {
      name: "badge-secondary",
      description: "",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: [
        {
          path: "registry/new-york-v4/examples/badge-secondary.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/badge-secondary.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "breadcrumb-demo": {
      name: "breadcrumb-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: [
        {
          path: "registry/new-york-v4/examples/breadcrumb-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/breadcrumb-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "breadcrumb-separator": {
      name: "breadcrumb-separator",
      description: "",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: [
        {
          path: "registry/new-york-v4/examples/breadcrumb-separator.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/breadcrumb-separator.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "breadcrumb-dropdown": {
      name: "breadcrumb-dropdown",
      description: "",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: [
        {
          path: "registry/new-york-v4/examples/breadcrumb-dropdown.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/breadcrumb-dropdown.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "breadcrumb-ellipsis": {
      name: "breadcrumb-ellipsis",
      description: "",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: [
        {
          path: "registry/new-york-v4/examples/breadcrumb-ellipsis.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/breadcrumb-ellipsis.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "breadcrumb-link": {
      name: "breadcrumb-link",
      description: "",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: [
        {
          path: "registry/new-york-v4/examples/breadcrumb-link.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/breadcrumb-link.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "breadcrumb-responsive": {
      name: "breadcrumb-responsive",
      description: "",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: [
        {
          path: "registry/new-york-v4/examples/breadcrumb-responsive.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/breadcrumb-responsive.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-demo": {
      name: "button-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-default": {
      name: "button-default",
      description: "",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-default.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-default.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-secondary": {
      name: "button-secondary",
      description: "",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-secondary.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-secondary.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-destructive": {
      name: "button-destructive",
      description: "",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-destructive.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-destructive.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-outline": {
      name: "button-outline",
      description: "",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-outline.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-outline.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-ghost": {
      name: "button-ghost",
      description: "",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-ghost.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-ghost.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-link": {
      name: "button-link",
      description: "",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-link.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-link.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-with-icon": {
      name: "button-with-icon",
      description: "",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-with-icon.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-with-icon.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-loading": {
      name: "button-loading",
      description: "",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-loading.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-loading.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-icon": {
      name: "button-icon",
      description: "",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-icon.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-icon.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-as-child": {
      name: "button-as-child",
      description: "",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-as-child.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-as-child.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-rounded": {
      name: "button-rounded",
      description: "",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-rounded.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-rounded.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-size": {
      name: "button-size",
      description: "",
      type: "registry:example",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-size.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-size.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-group-demo": {
      name: "button-group-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["button-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-group-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-group-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-group-nested": {
      name: "button-group-nested",
      description: "",
      type: "registry:example",
      registryDependencies: ["button-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-group-nested.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-group-nested.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-group-size": {
      name: "button-group-size",
      description: "",
      type: "registry:example",
      registryDependencies: ["button-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-group-size.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-group-size.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-group-separator": {
      name: "button-group-separator",
      description: "",
      type: "registry:example",
      registryDependencies: ["button-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-group-separator.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-group-separator.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-group-split": {
      name: "button-group-split",
      description: "",
      type: "registry:example",
      registryDependencies: ["button-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-group-split.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-group-split.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-group-input": {
      name: "button-group-input",
      description: "",
      type: "registry:example",
      registryDependencies: ["button-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-group-input.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-group-input.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-group-dropdown": {
      name: "button-group-dropdown",
      description: "",
      type: "registry:example",
      registryDependencies: ["button-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-group-dropdown.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-group-dropdown.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-group-select": {
      name: "button-group-select",
      description: "",
      type: "registry:example",
      registryDependencies: ["button-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-group-select.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-group-select.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-group-popover": {
      name: "button-group-popover",
      description: "",
      type: "registry:example",
      registryDependencies: ["button-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-group-popover.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-group-popover.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-group-input-group": {
      name: "button-group-input-group",
      description: "",
      type: "registry:example",
      registryDependencies: ["button-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-group-input-group.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-group-input-group.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-group-orientation": {
      name: "button-group-orientation",
      description: "",
      type: "registry:example",
      registryDependencies: ["button-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/button-group-orientation.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/button-group-orientation.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "calendar-demo": {
      name: "calendar-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/examples/calendar-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/calendar-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "calendar-form": {
      name: "calendar-form",
      description: "",
      type: "registry:example",
      registryDependencies: ["calendar", "form", "popover"],
      files: [
        {
          path: "registry/new-york-v4/examples/calendar-form.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/calendar-form.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "card-demo": {
      name: "card-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["card", "button", "switch"],
      files: [
        {
          path: "registry/new-york-v4/examples/card-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/card-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "card-with-form": {
      name: "card-with-form",
      description: "",
      type: "registry:example",
      registryDependencies: ["button", "card", "input", "label", "select"],
      files: [
        {
          path: "registry/new-york-v4/examples/card-with-form.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/card-with-form.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "carousel-demo": {
      name: "carousel-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
        {
          path: "registry/new-york-v4/examples/carousel-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/carousel-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "carousel-size": {
      name: "carousel-size",
      description: "",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
        {
          path: "registry/new-york-v4/examples/carousel-size.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/carousel-size.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "carousel-spacing": {
      name: "carousel-spacing",
      description: "",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
        {
          path: "registry/new-york-v4/examples/carousel-spacing.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/carousel-spacing.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "carousel-orientation": {
      name: "carousel-orientation",
      description: "",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
        {
          path: "registry/new-york-v4/examples/carousel-orientation.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/carousel-orientation.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "carousel-api": {
      name: "carousel-api",
      description: "",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
        {
          path: "registry/new-york-v4/examples/carousel-api.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/carousel-api.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "carousel-plugin": {
      name: "carousel-plugin",
      description: "",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
        {
          path: "registry/new-york-v4/examples/carousel-plugin.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/carousel-plugin.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "checkbox-demo": {
      name: "checkbox-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["checkbox"],
      files: [
        {
          path: "registry/new-york-v4/examples/checkbox-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/checkbox-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "checkbox-disabled": {
      name: "checkbox-disabled",
      description: "",
      type: "registry:example",
      registryDependencies: ["checkbox"],
      files: [
        {
          path: "registry/new-york-v4/examples/checkbox-disabled.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/checkbox-disabled.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "checkbox-form-multiple": {
      name: "checkbox-form-multiple",
      description: "",
      type: "registry:example",
      registryDependencies: ["checkbox", "form"],
      files: [
        {
          path: "registry/new-york-v4/examples/checkbox-form-multiple.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/checkbox-form-multiple.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "checkbox-form-single": {
      name: "checkbox-form-single",
      description: "",
      type: "registry:example",
      registryDependencies: ["checkbox", "form"],
      files: [
        {
          path: "registry/new-york-v4/examples/checkbox-form-single.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/checkbox-form-single.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "checkbox-with-text": {
      name: "checkbox-with-text",
      description: "",
      type: "registry:example",
      registryDependencies: ["checkbox"],
      files: [
        {
          path: "registry/new-york-v4/examples/checkbox-with-text.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/checkbox-with-text.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "collapsible-demo": {
      name: "collapsible-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["collapsible"],
      files: [
        {
          path: "registry/new-york-v4/examples/collapsible-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/collapsible-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "combobox-demo": {
      name: "combobox-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["command"],
      files: [
        {
          path: "registry/new-york-v4/examples/combobox-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/combobox-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "combobox-dropdown-menu": {
      name: "combobox-dropdown-menu",
      description: "",
      type: "registry:example",
      registryDependencies: ["command", "dropdown-menu", "button"],
      files: [
        {
          path: "registry/new-york-v4/examples/combobox-dropdown-menu.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/combobox-dropdown-menu.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "combobox-form": {
      name: "combobox-form",
      description: "",
      type: "registry:example",
      registryDependencies: ["command", "form"],
      files: [
        {
          path: "registry/new-york-v4/examples/combobox-form.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/combobox-form.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "combobox-popover": {
      name: "combobox-popover",
      description: "",
      type: "registry:example",
      registryDependencies: ["combobox", "popover"],
      files: [
        {
          path: "registry/new-york-v4/examples/combobox-popover.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/combobox-popover.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "combobox-responsive": {
      name: "combobox-responsive",
      description: "",
      type: "registry:example",
      registryDependencies: ["combobox", "popover", "drawer"],
      files: [
        {
          path: "registry/new-york-v4/examples/combobox-responsive.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/combobox-responsive.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "command-demo": {
      name: "command-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["command"],
      files: [
        {
          path: "registry/new-york-v4/examples/command-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/command-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "command-dialog": {
      name: "command-dialog",
      description: "",
      type: "registry:example",
      registryDependencies: ["command", "dialog"],
      files: [
        {
          path: "registry/new-york-v4/examples/command-dialog.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/command-dialog.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "context-menu-demo": {
      name: "context-menu-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["context-menu"],
      files: [
        {
          path: "registry/new-york-v4/examples/context-menu-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/context-menu-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "container-demo": {
      name: "container-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["container"],
      files: [
        {
          path: "registry/new-york-v4/examples/container-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/container-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "data-table-demo": {
      name: "data-table-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["data-table"],
      files: [
        {
          path: "registry/new-york-v4/examples/data-table-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/data-table-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "date-picker-demo": {
      name: "date-picker-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "popover"],
      files: [
        {
          path: "registry/new-york-v4/examples/date-picker-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/date-picker-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "date-picker-form": {
      name: "date-picker-form",
      description: "",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "form", "popover"],
      files: [
        {
          path: "registry/new-york-v4/examples/date-picker-form.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/date-picker-form.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "date-picker-with-presets": {
      name: "date-picker-with-presets",
      description: "",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "popover", "select"],
      files: [
        {
          path: "registry/new-york-v4/examples/date-picker-with-presets.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/date-picker-with-presets.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "date-picker-with-range": {
      name: "date-picker-with-range",
      description: "",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "popover"],
      files: [
        {
          path: "registry/new-york-v4/examples/date-picker-with-range.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/date-picker-with-range.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "dialog-demo": {
      name: "dialog-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["dialog"],
      files: [
        {
          path: "registry/new-york-v4/examples/dialog-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/dialog-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "dialog-close-button": {
      name: "dialog-close-button",
      description: "",
      type: "registry:example",
      registryDependencies: ["dialog", "button"],
      files: [
        {
          path: "registry/new-york-v4/examples/dialog-close-button.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/dialog-close-button.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "drawer-demo": {
      name: "drawer-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["drawer"],
      files: [
        {
          path: "registry/new-york-v4/examples/drawer-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/drawer-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "empty-demo": {
      name: "empty-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["empty", "button"],
      files: [
        {
          path: "registry/new-york-v4/examples/empty-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/empty-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "empty-icon": {
      name: "empty-icon",
      description: "",
      type: "registry:example",
      registryDependencies: ["empty"],
      files: [
        {
          path: "registry/new-york-v4/examples/empty-icon.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/empty-icon.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "empty-avatar": {
      name: "empty-avatar",
      description: "",
      type: "registry:example",
      registryDependencies: ["empty", "button", "avatar"],
      files: [
        {
          path: "registry/new-york-v4/examples/empty-avatar.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/empty-avatar.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "empty-avatar-group": {
      name: "empty-avatar-group",
      description: "",
      type: "registry:example",
      registryDependencies: ["empty", "button", "avatar"],
      files: [
        {
          path: "registry/new-york-v4/examples/empty-avatar-group.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/empty-avatar-group.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "empty-input-group": {
      name: "empty-input-group",
      description: "",
      type: "registry:example",
      registryDependencies: ["empty", "button", "input"],
      files: [
        {
          path: "registry/new-york-v4/examples/empty-input-group.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/empty-input-group.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "empty-outline": {
      name: "empty-outline",
      description: "",
      type: "registry:example",
      registryDependencies: ["empty", "button"],
      files: [
        {
          path: "registry/new-york-v4/examples/empty-outline.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/empty-outline.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "empty-background": {
      name: "empty-background",
      description: "",
      type: "registry:example",
      registryDependencies: ["empty"],
      files: [
        {
          path: "registry/new-york-v4/examples/empty-background.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/empty-background.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "field-demo": {
      name: "field-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["field", "select"],
      files: [
        {
          path: "registry/new-york-v4/examples/field-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/field-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "field-input": {
      name: "field-input",
      description: "",
      type: "registry:example",
      registryDependencies: ["field"],
      files: [
        {
          path: "registry/new-york-v4/examples/field-input.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/field-input.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "field-textarea": {
      name: "field-textarea",
      description: "",
      type: "registry:example",
      registryDependencies: ["field"],
      files: [
        {
          path: "registry/new-york-v4/examples/field-textarea.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/field-textarea.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "field-fieldset": {
      name: "field-fieldset",
      description: "",
      type: "registry:example",
      registryDependencies: ["field"],
      files: [
        {
          path: "registry/new-york-v4/examples/field-fieldset.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/field-fieldset.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "field-radio": {
      name: "field-radio",
      description: "",
      type: "registry:example",
      registryDependencies: ["field"],
      files: [
        {
          path: "registry/new-york-v4/examples/field-radio.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/field-radio.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "field-checkbox": {
      name: "field-checkbox",
      description: "",
      type: "registry:example",
      registryDependencies: ["field"],
      files: [
        {
          path: "registry/new-york-v4/examples/field-checkbox.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/field-checkbox.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "field-switch": {
      name: "field-switch",
      description: "",
      type: "registry:example",
      registryDependencies: ["field"],
      files: [
        {
          path: "registry/new-york-v4/examples/field-switch.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/field-switch.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "field-slider": {
      name: "field-slider",
      description: "",
      type: "registry:example",
      registryDependencies: ["field"],
      files: [
        {
          path: "registry/new-york-v4/examples/field-slider.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/field-slider.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "field-select": {
      name: "field-select",
      description: "",
      type: "registry:example",
      registryDependencies: ["field", "select"],
      files: [
        {
          path: "registry/new-york-v4/examples/field-select.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/field-select.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "field-choice-card": {
      name: "field-choice-card",
      description: "",
      type: "registry:example",
      registryDependencies: ["field"],
      files: [
        {
          path: "registry/new-york-v4/examples/field-choice-card.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/field-choice-card.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "field-group": {
      name: "field-group",
      description: "",
      type: "registry:example",
      registryDependencies: ["field"],
      files: [
        {
          path: "registry/new-york-v4/examples/field-group.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/field-group.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "field-responsive": {
      name: "field-responsive",
      description: "",
      type: "registry:example",
      registryDependencies: ["field"],
      files: [
        {
          path: "registry/new-york-v4/examples/field-responsive.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/field-responsive.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "flex-demo": {
      name: "flex-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["flex"],
      files: [
        {
          path: "registry/new-york-v4/examples/flex-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/flex-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "drawer-dialog": {
      name: "drawer-dialog",
      description: "",
      type: "registry:example",
      registryDependencies: ["drawer", "dialog"],
      files: [
        {
          path: "registry/new-york-v4/examples/drawer-dialog.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/drawer-dialog.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "dropdown-menu-demo": {
      name: "dropdown-menu-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["dropdown-menu"],
      files: [
        {
          path: "registry/new-york-v4/examples/dropdown-menu-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/dropdown-menu-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "dropdown-menu-checkboxes": {
      name: "dropdown-menu-checkboxes",
      description: "",
      type: "registry:example",
      registryDependencies: ["dropdown-menu", "checkbox"],
      files: [
        {
          path: "registry/new-york-v4/examples/dropdown-menu-checkboxes.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/dropdown-menu-checkboxes.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "dropdown-menu-radio-group": {
      name: "dropdown-menu-radio-group",
      description: "",
      type: "registry:example",
      registryDependencies: ["dropdown-menu", "radio-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/dropdown-menu-radio-group.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/dropdown-menu-radio-group.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "dropdown-menu-dialog": {
      name: "dropdown-menu-dialog",
      description: "",
      type: "registry:example",
      registryDependencies: [
        "dropdown-menu",
        "dialog",
        "button",
        "input",
        "label",
      ],
      files: [
        {
          path: "registry/new-york-v4/examples/dropdown-menu-dialog.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/dropdown-menu-dialog.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "grid-demo": {
      name: "grid-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["grid"],
      files: [
        {
          path: "registry/new-york-v4/examples/grid-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/grid-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "hover-card-demo": {
      name: "hover-card-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["hover-card"],
      files: [
        {
          path: "registry/new-york-v4/examples/hover-card-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/hover-card-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-demo": {
      name: "input-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["input"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-disabled": {
      name: "input-disabled",
      description: "",
      type: "registry:example",
      registryDependencies: ["input"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-disabled.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-disabled.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-file": {
      name: "input-file",
      description: "",
      type: "registry:example",
      registryDependencies: ["input"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-file.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-file.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-form": {
      name: "input-form",
      description: "",
      type: "registry:example",
      registryDependencies: ["input", "button", "form"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-form.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-form.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-with-button": {
      name: "input-with-button",
      description: "",
      type: "registry:example",
      registryDependencies: ["input", "button"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-with-button.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-with-button.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-with-label": {
      name: "input-with-label",
      description: "",
      type: "registry:example",
      registryDependencies: ["input", "button", "label"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-with-label.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-with-label.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-with-text": {
      name: "input-with-text",
      description: "",
      type: "registry:example",
      registryDependencies: ["input", "button", "label"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-with-text.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-with-text.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-group-demo": {
      name: "input-group-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-group-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-group-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-group-label": {
      name: "input-group-label",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-group", "label"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-group-label.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-group-label.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-group-text": {
      name: "input-group-text",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-group-text.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-group-text.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-group-tooltip": {
      name: "input-group-tooltip",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-group", "tooltip"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-group-tooltip.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-group-tooltip.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-group-button": {
      name: "input-group-button",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-group-button.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-group-button.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-group-button-group": {
      name: "input-group-button-group",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-group", "button-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-group-button-group.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-group-button-group.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-group-dropdown": {
      name: "input-group-dropdown",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-group", "dropdown-menu", "button"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-group-dropdown.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-group-dropdown.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-group-spinner": {
      name: "input-group-spinner",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-group", "spinner"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-group-spinner.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-group-spinner.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-group-textarea": {
      name: "input-group-textarea",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-group", "textarea"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-group-textarea.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-group-textarea.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-group-icon": {
      name: "input-group-icon",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-group-icon.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-group-icon.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-group-custom": {
      name: "input-group-custom",
      description: "",
      type: "registry:example",
      registryDependencies: [
        "input-group",
        "badge",
        "progress",
        "dropdown-menu",
        "tooltip",
      ],
      files: [
        {
          path: "registry/new-york-v4/examples/input-group-custom.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-group-custom.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-otp-demo": {
      name: "input-otp-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-otp-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-otp-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-otp-pattern": {
      name: "input-otp-pattern",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-otp-pattern.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-otp-pattern.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-otp-separator": {
      name: "input-otp-separator",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-otp-separator.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-otp-separator.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-otp-controlled": {
      name: "input-otp-controlled",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-otp-controlled.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-otp-controlled.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-otp-form": {
      name: "input-otp-form",
      description: "",
      type: "registry:example",
      registryDependencies: ["input-otp", "form"],
      files: [
        {
          path: "registry/new-york-v4/examples/input-otp-form.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/input-otp-form.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "item-demo": {
      name: "item-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["item"],
      files: [
        {
          path: "registry/new-york-v4/examples/item-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/item-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "item-size": {
      name: "item-size",
      description: "",
      type: "registry:example",
      registryDependencies: ["item"],
      files: [
        {
          path: "registry/new-york-v4/examples/item-size.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/item-size.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "item-variant": {
      name: "item-variant",
      description: "",
      type: "registry:example",
      registryDependencies: ["item"],
      files: [
        {
          path: "registry/new-york-v4/examples/item-variant.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/item-variant.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "item-icon": {
      name: "item-icon",
      description: "",
      type: "registry:example",
      registryDependencies: ["item"],
      files: [
        {
          path: "registry/new-york-v4/examples/item-icon.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/item-icon.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "item-image": {
      name: "item-image",
      description: "",
      type: "registry:example",
      registryDependencies: ["item"],
      files: [
        {
          path: "registry/new-york-v4/examples/item-image.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/item-image.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "item-avatar": {
      name: "item-avatar",
      description: "",
      type: "registry:example",
      registryDependencies: ["item"],
      files: [
        {
          path: "registry/new-york-v4/examples/item-avatar.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/item-avatar.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "item-group": {
      name: "item-group",
      description: "",
      type: "registry:example",
      registryDependencies: ["item"],
      files: [
        {
          path: "registry/new-york-v4/examples/item-group.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/item-group.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "item-header": {
      name: "item-header",
      description: "",
      type: "registry:example",
      registryDependencies: ["item"],
      files: [
        {
          path: "registry/new-york-v4/examples/item-header.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/item-header.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "item-dropdown": {
      name: "item-dropdown",
      description: "",
      type: "registry:example",
      registryDependencies: ["item"],
      files: [
        {
          path: "registry/new-york-v4/examples/item-dropdown.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/item-dropdown.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "item-link": {
      name: "item-link",
      description: "",
      type: "registry:example",
      registryDependencies: ["item"],
      files: [
        {
          path: "registry/new-york-v4/examples/item-link.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/item-link.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "kbd-demo": {
      name: "kbd-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["kbd"],
      files: [
        {
          path: "registry/new-york-v4/examples/kbd-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/examples/kbd-demo.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "kbd-tooltip": {
      name: "kbd-tooltip",
      description: "",
      type: "registry:example",
      registryDependencies: ["kbd", "tooltip", "button"],
      files: [
        {
          path: "registry/new-york-v4/examples/kbd-tooltip.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/kbd-tooltip.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "kbd-input-group": {
      name: "kbd-input-group",
      description: "",
      type: "registry:example",
      registryDependencies: ["kbd", "input", "button", "label"],
      files: [
        {
          path: "registry/new-york-v4/examples/kbd-input-group.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/kbd-input-group.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "kbd-button": {
      name: "kbd-button",
      description: "",
      type: "registry:example",
      registryDependencies: ["kbd", "button"],
      files: [
        {
          path: "registry/new-york-v4/examples/kbd-button.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/kbd-button.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "kbd-group": {
      name: "kbd-group",
      description: "",
      type: "registry:example",
      registryDependencies: ["kbd"],
      files: [
        {
          path: "registry/new-york-v4/examples/kbd-group.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/kbd-group.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "label-demo": {
      name: "label-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["label"],
      files: [
        {
          path: "registry/new-york-v4/examples/label-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/label-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "menubar-demo": {
      name: "menubar-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["menubar"],
      files: [
        {
          path: "registry/new-york-v4/examples/menubar-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/menubar-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "navigation-menu-demo": {
      name: "navigation-menu-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["navigation-menu"],
      files: [
        {
          path: "registry/new-york-v4/examples/navigation-menu-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/navigation-menu-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "native-select-demo": {
      name: "native-select-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["native-select"],
      files: [
        {
          path: "registry/new-york-v4/examples/native-select-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/native-select-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "native-select-groups": {
      name: "native-select-groups",
      description: "",
      type: "registry:example",
      registryDependencies: ["native-select"],
      files: [
        {
          path: "registry/new-york-v4/examples/native-select-groups.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/native-select-groups.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "native-select-disabled": {
      name: "native-select-disabled",
      description: "",
      type: "registry:example",
      registryDependencies: ["native-select"],
      files: [
        {
          path: "registry/new-york-v4/examples/native-select-disabled.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/native-select-disabled.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "native-select-invalid": {
      name: "native-select-invalid",
      description: "",
      type: "registry:example",
      registryDependencies: ["native-select"],
      files: [
        {
          path: "registry/new-york-v4/examples/native-select-invalid.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/native-select-invalid.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "pagination-demo": {
      name: "pagination-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["pagination"],
      files: [
        {
          path: "registry/new-york-v4/examples/pagination-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/pagination-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "popover-demo": {
      name: "popover-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["popover"],
      files: [
        {
          path: "registry/new-york-v4/examples/popover-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/popover-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "progress-demo": {
      name: "progress-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["progress"],
      files: [
        {
          path: "registry/new-york-v4/examples/progress-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/progress-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "radio-group-demo": {
      name: "radio-group-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["radio-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/radio-group-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/radio-group-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "radio-group-form": {
      name: "radio-group-form",
      description: "",
      type: "registry:example",
      registryDependencies: ["radio-group", "form"],
      files: [
        {
          path: "registry/new-york-v4/examples/radio-group-form.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/radio-group-form.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "resizable-demo": {
      name: "resizable-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: [
        {
          path: "registry/new-york-v4/examples/resizable-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/resizable-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "resizable-demo-with-handle": {
      name: "resizable-demo-with-handle",
      description: "",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: [
        {
          path: "registry/new-york-v4/examples/resizable-demo-with-handle.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/resizable-demo-with-handle.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "resizable-vertical": {
      name: "resizable-vertical",
      description: "",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: [
        {
          path: "registry/new-york-v4/examples/resizable-vertical.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/resizable-vertical.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "resizable-handle": {
      name: "resizable-handle",
      description: "",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: [
        {
          path: "registry/new-york-v4/examples/resizable-handle.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/resizable-handle.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "scroll-area-demo": {
      name: "scroll-area-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["scroll-area"],
      files: [
        {
          path: "registry/new-york-v4/examples/scroll-area-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/scroll-area-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "scroll-area-horizontal-demo": {
      name: "scroll-area-horizontal-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["scroll-area"],
      files: [
        {
          path: "registry/new-york-v4/examples/scroll-area-horizontal-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/scroll-area-horizontal-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "segmented-control-demo": {
      name: "segmented-control-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["segmented-control"],
      files: [
        {
          path: "registry/new-york-v4/examples/segmented-control-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/segmented-control-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "segmented-control-custom": {
      name: "segmented-control-custom",
      description: "",
      type: "registry:example",
      registryDependencies: ["segmented-control"],
      files: [
        {
          path: "registry/new-york-v4/examples/segmented-control-custom.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/segmented-control-custom.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "select-demo": {
      name: "select-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["select"],
      files: [
        {
          path: "registry/new-york-v4/examples/select-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/select-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "select-scrollable": {
      name: "select-scrollable",
      description: "",
      type: "registry:example",
      registryDependencies: ["select"],
      files: [
        {
          path: "registry/new-york-v4/examples/select-scrollable.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/select-scrollable.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "select-form": {
      name: "select-form",
      description: "",
      type: "registry:example",
      registryDependencies: ["select"],
      files: [
        {
          path: "registry/new-york-v4/examples/select-form.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/select-form.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "separator-demo": {
      name: "separator-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["separator"],
      files: [
        {
          path: "registry/new-york-v4/examples/separator-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/separator-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "sheet-demo": {
      name: "sheet-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["sheet"],
      files: [
        {
          path: "registry/new-york-v4/examples/sheet-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/sheet-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "sheet-side": {
      name: "sheet-side",
      description: "",
      type: "registry:example",
      registryDependencies: ["sheet"],
      files: [
        {
          path: "registry/new-york-v4/examples/sheet-side.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/sheet-side.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "skeleton-demo": {
      name: "skeleton-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["skeleton"],
      files: [
        {
          path: "registry/new-york-v4/examples/skeleton-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/skeleton-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "skeleton-card": {
      name: "skeleton-card",
      description: "",
      type: "registry:example",
      registryDependencies: ["skeleton"],
      files: [
        {
          path: "registry/new-york-v4/examples/skeleton-card.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/skeleton-card.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "slider-demo": {
      name: "slider-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["slider"],
      files: [
        {
          path: "registry/new-york-v4/examples/slider-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/slider-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "sonner-demo": {
      name: "sonner-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["sonner"],
      files: [
        {
          path: "registry/new-york-v4/examples/sonner-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/sonner-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "sonner-types": {
      name: "sonner-types",
      description: "",
      type: "registry:example",
      registryDependencies: ["sonner"],
      files: [
        {
          path: "registry/new-york-v4/examples/sonner-types.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/sonner-types.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "spinner-demo": {
      name: "spinner-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["spinner"],
      files: [
        {
          path: "registry/new-york-v4/examples/spinner-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/spinner-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "spinner-basic": {
      name: "spinner-basic",
      description: "",
      type: "registry:example",
      registryDependencies: ["spinner", "button"],
      files: [
        {
          path: "registry/new-york-v4/examples/spinner-basic.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/spinner-basic.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "spinner-button": {
      name: "spinner-button",
      description: "",
      type: "registry:example",
      registryDependencies: ["spinner", "button"],
      files: [
        {
          path: "registry/new-york-v4/examples/spinner-button.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/spinner-button.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "spinner-badge": {
      name: "spinner-badge",
      description: "",
      type: "registry:example",
      registryDependencies: ["spinner", "badge"],
      files: [
        {
          path: "registry/new-york-v4/examples/spinner-badge.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/spinner-badge.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "spinner-input-group": {
      name: "spinner-input-group",
      description: "",
      type: "registry:example",
      registryDependencies: ["spinner", "button", "input"],
      files: [
        {
          path: "registry/new-york-v4/examples/spinner-input-group.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/spinner-input-group.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "spinner-empty": {
      name: "spinner-empty",
      description: "",
      type: "registry:example",
      registryDependencies: ["spinner"],
      files: [
        {
          path: "registry/new-york-v4/examples/spinner-empty.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/spinner-empty.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "spinner-color": {
      name: "spinner-color",
      description: "",
      type: "registry:example",
      registryDependencies: ["spinner"],
      files: [
        {
          path: "registry/new-york-v4/examples/spinner-color.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/spinner-color.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "spinner-custom": {
      name: "spinner-custom",
      description: "",
      type: "registry:example",
      registryDependencies: ["spinner"],
      files: [
        {
          path: "registry/new-york-v4/examples/spinner-custom.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/spinner-custom.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "spinner-size": {
      name: "spinner-size",
      description: "",
      type: "registry:example",
      registryDependencies: ["spinner"],
      files: [
        {
          path: "registry/new-york-v4/examples/spinner-size.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/spinner-size.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "spinner-item": {
      name: "spinner-item",
      description: "",
      type: "registry:example",
      registryDependencies: ["spinner"],
      files: [
        {
          path: "registry/new-york-v4/examples/spinner-item.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/spinner-item.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "spacer-demo": {
      name: "spacer-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["spacer"],
      files: [
        {
          path: "registry/new-york-v4/examples/spacer-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/spacer-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "spacer-sizes": {
      name: "spacer-sizes",
      description: "",
      type: "registry:example",
      registryDependencies: ["spacer"],
      files: [
        {
          path: "registry/new-york-v4/examples/spacer-sizes.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/spacer-sizes.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "squircle-demo": {
      name: "squircle-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["squircle"],
      files: [
        {
          path: "registry/new-york-v4/examples/squircle-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/squircle-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "switch-demo": {
      name: "switch-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["switch"],
      files: [
        {
          path: "registry/new-york-v4/examples/switch-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/switch-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "switch-form": {
      name: "switch-form",
      description: "",
      type: "registry:example",
      registryDependencies: ["switch", "form"],
      files: [
        {
          path: "registry/new-york-v4/examples/switch-form.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/switch-form.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "table-demo": {
      name: "table-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["table"],
      files: [
        {
          path: "registry/new-york-v4/examples/table-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/table-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "tabs-demo": {
      name: "tabs-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["tabs"],
      files: [
        {
          path: "registry/new-york-v4/examples/tabs-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/tabs-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "textarea-demo": {
      name: "textarea-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["textarea"],
      files: [
        {
          path: "registry/new-york-v4/examples/textarea-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/textarea-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "textarea-disabled": {
      name: "textarea-disabled",
      description: "",
      type: "registry:example",
      registryDependencies: ["textarea"],
      files: [
        {
          path: "registry/new-york-v4/examples/textarea-disabled.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/textarea-disabled.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "textarea-form": {
      name: "textarea-form",
      description: "",
      type: "registry:example",
      registryDependencies: ["textarea", "form"],
      files: [
        {
          path: "registry/new-york-v4/examples/textarea-form.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/textarea-form.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "textarea-with-button": {
      name: "textarea-with-button",
      description: "",
      type: "registry:example",
      registryDependencies: ["textarea", "button"],
      files: [
        {
          path: "registry/new-york-v4/examples/textarea-with-button.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/textarea-with-button.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "textarea-with-label": {
      name: "textarea-with-label",
      description: "",
      type: "registry:example",
      registryDependencies: ["textarea", "label"],
      files: [
        {
          path: "registry/new-york-v4/examples/textarea-with-label.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/textarea-with-label.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "textarea-with-text": {
      name: "textarea-with-text",
      description: "",
      type: "registry:example",
      registryDependencies: ["textarea", "label"],
      files: [
        {
          path: "registry/new-york-v4/examples/textarea-with-text.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/textarea-with-text.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-group-demo": {
      name: "toggle-group-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/toggle-group-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/toggle-group-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-group-disabled": {
      name: "toggle-group-disabled",
      description: "",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/toggle-group-disabled.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/toggle-group-disabled.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-group-lg": {
      name: "toggle-group-lg",
      description: "",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/toggle-group-lg.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/toggle-group-lg.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-group-outline": {
      name: "toggle-group-outline",
      description: "",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/toggle-group-outline.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/toggle-group-outline.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-group-sm": {
      name: "toggle-group-sm",
      description: "",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/toggle-group-sm.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/toggle-group-sm.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-group-single": {
      name: "toggle-group-single",
      description: "",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/toggle-group-single.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/toggle-group-single.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-group-spacing": {
      name: "toggle-group-spacing",
      description: "",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: [
        {
          path: "registry/new-york-v4/examples/toggle-group-spacing.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/toggle-group-spacing.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-demo": {
      name: "toggle-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: [
        {
          path: "registry/new-york-v4/examples/toggle-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/toggle-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-disabled": {
      name: "toggle-disabled",
      description: "",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: [
        {
          path: "registry/new-york-v4/examples/toggle-disabled.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/toggle-disabled.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-lg": {
      name: "toggle-lg",
      description: "",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: [
        {
          path: "registry/new-york-v4/examples/toggle-lg.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/toggle-lg.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-outline": {
      name: "toggle-outline",
      description: "",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: [
        {
          path: "registry/new-york-v4/examples/toggle-outline.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/toggle-outline.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-sm": {
      name: "toggle-sm",
      description: "",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: [
        {
          path: "registry/new-york-v4/examples/toggle-sm.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/toggle-sm.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-with-text": {
      name: "toggle-with-text",
      description: "",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: [
        {
          path: "registry/new-york-v4/examples/toggle-with-text.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/toggle-with-text.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "tooltip-demo": {
      name: "tooltip-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["tooltip"],
      files: [
        {
          path: "registry/new-york-v4/examples/tooltip-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/tooltip-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-blockquote": {
      name: "typography-blockquote",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-blockquote.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-blockquote.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-demo": {
      name: "typography-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-h1": {
      name: "typography-h1",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-h1.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-h1.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-h2": {
      name: "typography-h2",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-h2.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-h2.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-h3": {
      name: "typography-h3",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-h3.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-h3.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-h4": {
      name: "typography-h4",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-h4.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-h4.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-inline-code": {
      name: "typography-inline-code",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-inline-code.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-inline-code.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-large": {
      name: "typography-large",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-large.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-large.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-lead": {
      name: "typography-lead",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-lead.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-lead.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-list": {
      name: "typography-list",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-list.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-list.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-muted": {
      name: "typography-muted",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-muted.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-muted.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-p": {
      name: "typography-p",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-p.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-p.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-small": {
      name: "typography-small",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-small.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-small.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-table": {
      name: "typography-table",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/typography-table.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-table.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-component-demo": {
      name: "typography-component-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["typography"],
      files: [
        {
          path: "registry/new-york-v4/examples/typography-component-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-component-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-headings": {
      name: "typography-headings",
      description: "",
      type: "registry:example",
      registryDependencies: ["typography"],
      files: [
        {
          path: "registry/new-york-v4/examples/typography-headings.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-headings.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-paragraphs": {
      name: "typography-paragraphs",
      description: "",
      type: "registry:example",
      registryDependencies: ["typography"],
      files: [
        {
          path: "registry/new-york-v4/examples/typography-paragraphs.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-paragraphs.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-labels": {
      name: "typography-labels",
      description: "",
      type: "registry:example",
      registryDependencies: ["typography"],
      files: [
        {
          path: "registry/new-york-v4/examples/typography-labels.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-labels.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-polymorphic": {
      name: "typography-polymorphic",
      description: "",
      type: "registry:example",
      registryDependencies: ["typography"],
      files: [
        {
          path: "registry/new-york-v4/examples/typography-polymorphic.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-polymorphic.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "typography-variants-demo": {
      name: "typography-variants-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["typography", "card"],
      files: [
        {
          path: "registry/new-york-v4/examples/typography-variants-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/typography-variants-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "theme-demo": {
      name: "theme-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["theme"],
      files: [
        {
          path: "registry/new-york-v4/examples/theme-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/theme-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "theme-toggle-demo": {
      name: "theme-toggle-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["theme-toggle"],
      files: [
        {
          path: "registry/new-york-v4/examples/theme-toggle-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/theme-toggle-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "unicorn-wrapper-demo": {
      name: "unicorn-wrapper-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["unicorn-wrapper"],
      files: [
        {
          path: "registry/new-york-v4/examples/unicorn-wrapper-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/unicorn-wrapper-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "use-tab-observer-demo": {
      name: "use-tab-observer-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["use-tab-observer", "tabs"],
      files: [
        {
          path: "registry/new-york-v4/examples/use-tab-observer-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/use-tab-observer-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "mode-toggle": {
      name: "mode-toggle",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/examples/mode-toggle.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/mode-toggle.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "calendar-hijri": {
      name: "calendar-hijri",
      description: "A Persian calendar.",
      type: "registry:example",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/examples/calendar-hijri.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/calendar-hijri.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-4 py-12 items-start md:py-20 justify-center min-w-0",
        mobile: "component",
      },
      tier: "free",
      readiness: "production",
    },
    "background-image-parallax-demo": {
      name: "background-image-parallax-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["background-image-parallax"],
      files: [
        {
          path: "registry/new-york-v4/examples/background-image-parallax-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/background-image-parallax-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "card-swipe-carousel-demo": {
      name: "card-swipe-carousel-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["card-swipe-carousel"],
      files: [
        {
          path: "registry/new-york-v4/examples/card-swipe-carousel-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/card-swipe-carousel-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "cards-parallax-demo": {
      name: "cards-parallax-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["cards-parallax"],
      files: [
        {
          path: "registry/new-york-v4/examples/cards-parallax-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/cards-parallax-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "parallax-scroll-demo": {
      name: "parallax-scroll-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["parallax-scroll"],
      files: [
        {
          path: "registry/new-york-v4/examples/parallax-scroll-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/parallax-scroll-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "perspective-carousel-demo": {
      name: "perspective-carousel-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["perspective-carousel"],
      files: [
        {
          path: "registry/new-york-v4/examples/perspective-carousel-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/perspective-carousel-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "perspective-section-transition-demo": {
      name: "perspective-section-transition-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["perspective-section-transition"],
      files: [
        {
          path: "registry/new-york-v4/examples/perspective-section-transition-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/perspective-section-transition-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "scroll-expand-demo": {
      name: "scroll-expand-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["scroll-expand"],
      files: [
        {
          path: "registry/new-york-v4/examples/scroll-expand-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/scroll-expand-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "scroll-fade-demo": {
      name: "scroll-fade-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["scroll-fade"],
      files: [
        {
          path: "registry/new-york-v4/examples/scroll-fade-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/scroll-fade-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "scroll-scale-demo": {
      name: "scroll-scale-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["scroll-scale"],
      files: [
        {
          path: "registry/new-york-v4/examples/scroll-scale-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/scroll-scale-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "slide-down-demo": {
      name: "slide-down-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["slide-down"],
      files: [
        {
          path: "registry/new-york-v4/examples/slide-down-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/slide-down-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "slide-up-demo": {
      name: "slide-up-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["slide-up"],
      files: [
        {
          path: "registry/new-york-v4/examples/slide-up-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/slide-up-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "smooth-parallax-scroll-demo": {
      name: "smooth-parallax-scroll-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["smooth-parallax-scroll"],
      files: [
        {
          path: "registry/new-york-v4/examples/smooth-parallax-scroll-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/smooth-parallax-scroll-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "smooth-scroll-demo": {
      name: "smooth-scroll-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["smooth-scroll"],
      files: [
        {
          path: "registry/new-york-v4/examples/smooth-scroll-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/smooth-scroll-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "sticky-footer-demo": {
      name: "sticky-footer-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["sticky-footer"],
      files: [
        {
          path: "registry/new-york-v4/examples/sticky-footer-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/sticky-footer-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "text-along-path-demo": {
      name: "text-along-path-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["text-along-path"],
      files: [
        {
          path: "registry/new-york-v4/examples/text-along-path-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/text-along-path-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "text-gradient-opacity-demo": {
      name: "text-gradient-opacity-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["text-gradient-opacity"],
      files: [
        {
          path: "registry/new-york-v4/examples/text-gradient-opacity-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/text-gradient-opacity-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "text-parallax-demo": {
      name: "text-parallax-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["text-parallax"],
      files: [
        {
          path: "registry/new-york-v4/examples/text-parallax-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/text-parallax-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "transforms-3d-demo": {
      name: "transforms-3d-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["transforms-3d"],
      files: [
        {
          path: "registry/new-york-v4/examples/transforms-3d-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/transforms-3d-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "zoom-parallax-demo": {
      name: "zoom-parallax-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["zoom-parallax"],
      files: [
        {
          path: "registry/new-york-v4/examples/zoom-parallax-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/examples/zoom-parallax-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "sidebar-demo": {
      name: "sidebar-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["sidebar"],
      files: [
        {
          path: "registry/new-york-v4/internal/sidebar-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/internal/sidebar-demo.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: undefined,
      meta: undefined,
      tier: undefined,
    },
  },
}
