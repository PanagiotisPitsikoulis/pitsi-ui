// @ts-nocheck
import * as React from "react"

export const IndexBlocksMarketingClients: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "marketing-clients-client-logo-grid-with-background": {
      name: "marketing-clients-client-logo-grid-with-background",
      description: "A client logo grid with background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/clients/client-logo-grid-with-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/clients/client-logo-grid-with-background.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "marketing-clients-client-logos-in-card": {
      name: "marketing-clients-client-logos-in-card",
      description: "A client logos in card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/clients/client-logos-in-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/clients/client-logos-in-card.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "marketing-clients-client-section-as-info-card": {
      name: "marketing-clients-client-section-as-info-card",
      description: "A client section as info card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/clients/client-section-as-info-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/clients/client-section-as-info-card.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
      readiness: "beta",
    },
    "marketing-clients-customer-logos-as-list-view": {
      name: "marketing-clients-customer-logos-as-list-view",
      description: "A customer logos as list view block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/clients/customer-logos-as-list-view.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/clients/customer-logos-as-list-view.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
      readiness: "beta",
    },
    "marketing-clients-logo-cloud-in-grid": {
      name: "marketing-clients-logo-cloud-in-grid",
      description: "A logo cloud in grid block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/clients/logo-cloud-in-grid.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/clients/logo-cloud-in-grid.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
      readiness: "beta",
    },
    "marketing-clients-partner-logo-as-carousel": {
      name: "marketing-clients-partner-logo-as-carousel",
      description: "A partner logo as carousel block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/clients/partner-logo-as-carousel.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/clients/partner-logo-as-carousel.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "marketing-clients-simple-customer-logo-grid": {
      name: "marketing-clients-simple-customer-logo-grid",
      description: "A simple customer logo grid block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/clients/simple-customer-logo-grid.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/clients/simple-customer-logo-grid.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
  },
}
