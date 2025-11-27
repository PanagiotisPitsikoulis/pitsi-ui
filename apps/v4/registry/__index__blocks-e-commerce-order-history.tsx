// @ts-nocheck
import * as React from "react"

export const IndexBlocksECommerceOrderHistory: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "e-commerce-order-history-order-history-in-card-layout": {
      name: "e-commerce-order-history-order-history-in-card-layout",
      description: "A order history in card layout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-in-card-layout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-in-card-layout.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "e-commerce-order-history-order-history-invoice-table": {
      name: "e-commerce-order-history-order-history-invoice-table",
      description: "A order history invoice table block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-invoice-table.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-invoice-table.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "e-commerce-order-history-order-history-invoice-with-card-layout": {
      name: "e-commerce-order-history-order-history-invoice-with-card-layout",
      description: "A order history invoice with card layout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-invoice-with-card-layout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-invoice-with-card-layout.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "e-commerce-order-history-order-history-list-with-invoice": {
      name: "e-commerce-order-history-order-history-list-with-invoice",
      description: "A order history list with invoice block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-list-with-invoice.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-list-with-invoice.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "e-commerce-order-history-order-history-table": {
      name: "e-commerce-order-history-order-history-table",
      description: "A order history table block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-table.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-table.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "e-commerce-order-history-order-history-with-attribute": {
      name: "e-commerce-order-history-order-history-with-attribute",
      description: "A order history with attribute block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-attribute.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-attribute.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "e-commerce-order-history-order-history-with-banner": {
      name: "e-commerce-order-history-order-history-with-banner",
      description: "A order history with banner block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-banner.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-banner.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "e-commerce-order-history-order-history-with-card-layout": {
      name: "e-commerce-order-history-order-history-with-card-layout",
      description: "A order history with card layout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-card-layout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-card-layout.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "e-commerce-order-history-order-history-with-cta-button": {
      name: "e-commerce-order-history-order-history-with-cta-button",
      description: "A order history with cta button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-cta-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-cta-button.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "e-commerce-order-history-order-history-with-date-range-and-sort": {
      name: "e-commerce-order-history-order-history-with-date-range-and-sort",
      description: "A order history with date range and sort block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-date-range-and-sort.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-date-range-and-sort.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "e-commerce-order-history-order-history-with-date-range-and-status": {
      name: "e-commerce-order-history-order-history-with-date-range-and-status",
      description: "A order history with date range and status block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-date-range-and-status.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-date-range-and-status.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "e-commerce-order-history-order-history-with-detail": {
      name: "e-commerce-order-history-order-history-with-detail",
      description: "A order history with detail block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-detail.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-detail.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "e-commerce-order-history-order-history-with-pagination": {
      name: "e-commerce-order-history-order-history-with-pagination",
      description: "A order history with pagination block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-pagination.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-pagination.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "e-commerce-order-history-order-history-with-simple-details": {
      name: "e-commerce-order-history-order-history-with-simple-details",
      description: "A order history with simple details block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-simple-details.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-simple-details.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "e-commerce-order-history-order-history-with-sorting": {
      name: "e-commerce-order-history-order-history-with-sorting",
      description: "A order history with sorting block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-sorting.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-sorting.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "e-commerce-order-history-order-history-with-status-and-cta-button": {
      name: "e-commerce-order-history-order-history-with-status-and-cta-button",
      description: "A order history with status and cta button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-status-and-cta-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-history/order-history-with-status-and-cta-button.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
  },
}
