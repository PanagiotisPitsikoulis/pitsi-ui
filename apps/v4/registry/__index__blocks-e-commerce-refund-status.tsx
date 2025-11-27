// @ts-nocheck
import * as React from "react"

export const IndexBlocksECommerceRefundStatus: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "e-commerce-refund-status-default-refund-status-section": {
      name: "e-commerce-refund-status-default-refund-status-section",
      description: "A default refund status section block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-status/default-refund-status-section.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-status/default-refund-status-section.tsx"
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
    "e-commerce-refund-status-refund-status-with-order-summary": {
      name: "e-commerce-refund-status-refund-status-with-order-summary",
      description: "A refund status with order summary block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-status/refund-status-with-order-summary.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-status/refund-status-with-order-summary.tsx"
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
    "e-commerce-refund-status-refund-status-with-progress-steps": {
      name: "e-commerce-refund-status-refund-status-with-progress-steps",
      description: "A refund status with progress steps block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-status/refund-status-with-progress-steps.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-status/refund-status-with-progress-steps.tsx"
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
      readiness: "beta",
    },
    "e-commerce-refund-status-refund-track-with-detailed-steps": {
      name: "e-commerce-refund-status-refund-track-with-detailed-steps",
      description: "A refund track with detailed steps block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-status/refund-track-with-detailed-steps.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-status/refund-track-with-detailed-steps.tsx"
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
      readiness: "beta",
    },
    "e-commerce-refund-status-side-by-side-refund-status-with-timeline": {
      name: "e-commerce-refund-status-side-by-side-refund-status-with-timeline",
      description: "A side by side refund status with timeline block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-status/side-by-side-refund-status-with-timeline.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-status/side-by-side-refund-status-with-timeline.tsx"
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
      readiness: "beta",
    },
  },
}
