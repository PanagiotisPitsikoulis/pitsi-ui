import * as React from "react"

export const IndexBlocksApplicationSectionHeaders: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "application-section-headers-default-section-header": {
      name: "application-section-headers-default-section-header",
      description: "A default section header block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/section-headers/default-section-header.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/section-headers/default-section-header.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "free",
    },
    "application-section-headers-section-header-with-cta-buttons": {
      name: "application-section-headers-section-header-with-cta-buttons",
      description: "A section header with cta buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/section-headers/section-header-with-cta-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/section-headers/section-header-with-cta-buttons.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "free",
    },
    "application-section-headers-section-header-with-cta-tabs": {
      name: "application-section-headers-section-header-with-cta-tabs",
      description: "A section header with cta tabs block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/section-headers/section-header-with-cta-tabs.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/section-headers/section-header-with-cta-tabs.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
    },
    "application-section-headers-section-header-with-filter": {
      name: "application-section-headers-section-header-with-filter",
      description: "A section header with filter block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/section-headers/section-header-with-filter.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/section-headers/section-header-with-filter.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
    },
    "application-section-headers-section-header-with-svg-buttons": {
      name: "application-section-headers-section-header-with-svg-buttons",
      description: "A section header with svg buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/section-headers/section-header-with-svg-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/section-headers/section-header-with-svg-buttons.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
    },
    "application-section-headers-section-header-with-tabs": {
      name: "application-section-headers-section-header-with-tabs",
      description: "A section header with tabs block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/section-headers/section-header-with-tabs.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/section-headers/section-header-with-tabs.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
    },
  },
}
