// @ts-nocheck
import * as React from "react"

export const IndexLib: Record<string, Record<string, any>> = {
  "new-york-v4": {
    utils: {
      name: "utils",
      description:
        "Utility function for merging class names with Tailwind CSS conflict resolution.",
      type: "registry:lib",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/lib/utils.ts",
          type: "registry:lib",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/lib/utils.ts")
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
    "dynamic-icon": {
      name: "dynamic-icon",
      description:
        "Dynamically load and render Lucide icons by name with automatic format transformation.",
      type: "registry:lib",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/lib/dynamic-icon.tsx",
          type: "registry:lib",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/lib/dynamic-icon.tsx")
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
    polymorphic: {
      name: "polymorphic",
      description:
        "TypeScript utilities for building polymorphic components with the 'as' prop pattern.",
      type: "registry:lib",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/lib/polymorphic.ts",
          type: "registry:lib",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/lib/polymorphic.ts")
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
    "recursive-clone-children": {
      name: "recursive-clone-children",
      description:
        "Recursively clone React children and inject props into components by display name.",
      type: "registry:lib",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/lib/recursive-clone-children.tsx",
          type: "registry:lib",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/lib/recursive-clone-children.tsx"
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
