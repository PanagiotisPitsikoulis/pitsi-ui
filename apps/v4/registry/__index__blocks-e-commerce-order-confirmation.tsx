import * as React from "react"

export const IndexBlocksECommerceOrderConfirmation: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "e-commerce-order-confirmation-default-order-confirmation": {
      name: "e-commerce-order-confirmation-default-order-confirmation",
      description: "A default order confirmation block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-confirmation/default-order-confirmation.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-confirmation/default-order-confirmation.tsx"
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
    },
    "e-commerce-order-confirmation-order-confirmation-component-with-scanner": {
      name: "e-commerce-order-confirmation-order-confirmation-component-with-scanner",
      description: "A order confirmation component with scanner block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-component-with-scanner.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-component-with-scanner.tsx"
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
    },
    "e-commerce-order-confirmation-order-confirmation-with-cta": {
      name: "e-commerce-order-confirmation-order-confirmation-with-cta",
      description: "A order confirmation with cta block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-with-cta.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-with-cta.tsx"
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
    },
    "e-commerce-order-confirmation-order-confirmation-with-image": {
      name: "e-commerce-order-confirmation-order-confirmation-with-image",
      description: "A order confirmation with image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-with-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-with-image.tsx"
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
    },
    "e-commerce-order-confirmation-order-confirmation-with-message": {
      name: "e-commerce-order-confirmation-order-confirmation-with-message",
      description: "A order confirmation with message block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-with-message.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-with-message.tsx"
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
    },
    "e-commerce-order-confirmation-order-confirmation-with-order-details": {
      name: "e-commerce-order-confirmation-order-confirmation-with-order-details",
      description: "A order confirmation with order details block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-with-order-details.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-with-order-details.tsx"
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
    },
    "e-commerce-order-confirmation-order-confirmation-with-order-status": {
      name: "e-commerce-order-confirmation-order-confirmation-with-order-status",
      description: "A order confirmation with order status block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-with-order-status.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-with-order-status.tsx"
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
    },
    "e-commerce-order-confirmation-order-confirmation-with-stepper": {
      name: "e-commerce-order-confirmation-order-confirmation-with-stepper",
      description: "A order confirmation with stepper block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-with-stepper.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-confirmation/order-confirmation-with-stepper.tsx"
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
    },
    "e-commerce-order-confirmation-progress-steps-order-confirmation": {
      name: "e-commerce-order-confirmation-progress-steps-order-confirmation",
      description: "A progress steps order confirmation block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-confirmation/progress-steps-order-confirmation.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-confirmation/progress-steps-order-confirmation.tsx"
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
    },
    "e-commerce-order-confirmation-side-by-side-order-confirmation": {
      name: "e-commerce-order-confirmation-side-by-side-order-confirmation",
      description: "A side by side order confirmation block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-confirmation/side-by-side-order-confirmation.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-confirmation/side-by-side-order-confirmation.tsx"
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
    },
  },
}
