import * as React from "react"

export const IndexBlocksECommerceShoppingCart: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "e-commerce-shopping-cart-checkout-page-with-cart-summary-and-payment-option":
      {
        name: "e-commerce-shopping-cart-checkout-page-with-cart-summary-and-payment-option",
        description:
          "A checkout page with cart summary and payment option block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/checkout-page-with-cart-summary-and-payment-option.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/checkout-page-with-cart-summary-and-payment-option.tsx"
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
    "e-commerce-shopping-cart-multiple-column-shopping-cart-page": {
      name: "e-commerce-shopping-cart-multiple-column-shopping-cart-page",
      description: "A multiple column shopping cart page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/multiple-column-shopping-cart-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/multiple-column-shopping-cart-page.tsx"
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
    "e-commerce-shopping-cart-shopping-cart-with-payment-info": {
      name: "e-commerce-shopping-cart-shopping-cart-with-payment-info",
      description: "A shopping cart with payment info block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/shopping-cart-with-payment-info.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/shopping-cart-with-payment-info.tsx"
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
    "e-commerce-shopping-cart-shopping-cart-with-radio-button": {
      name: "e-commerce-shopping-cart-shopping-cart-with-radio-button",
      description: "A shopping cart with radio button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/shopping-cart-with-radio-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/shopping-cart-with-radio-button.tsx"
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
    "e-commerce-shopping-cart-shopping-cart-with-receive-order-details": {
      name: "e-commerce-shopping-cart-shopping-cart-with-receive-order-details",
      description: "A shopping cart with receive order details block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/shopping-cart-with-receive-order-details.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/shopping-cart-with-receive-order-details.tsx"
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
    "e-commerce-shopping-cart-shopping-cart-with-remove-button": {
      name: "e-commerce-shopping-cart-shopping-cart-with-remove-button",
      description: "A shopping cart with remove button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/shopping-cart-with-remove-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/shopping-cart-with-remove-button.tsx"
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
    "e-commerce-shopping-cart-shopping-cart-with-remove-button-option": {
      name: "e-commerce-shopping-cart-shopping-cart-with-remove-button-option",
      description: "A shopping cart with remove button option block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/shopping-cart-with-remove-button-option.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/shopping-cart-with-remove-button-option.tsx"
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
    "e-commerce-shopping-cart-shopping-cart-with-summary": {
      name: "e-commerce-shopping-cart-shopping-cart-with-summary",
      description: "A shopping cart with summary block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/shopping-cart-with-summary.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/shopping-cart-with-summary.tsx"
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
    "e-commerce-shopping-cart-single-column-shopping-cart-page": {
      name: "e-commerce-shopping-cart-single-column-shopping-cart-page",
      description: "A single column shopping cart page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/single-column-shopping-cart-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/single-column-shopping-cart-page.tsx"
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
    "e-commerce-shopping-cart-three-columns-shopping-cart-with-card-details": {
      name: "e-commerce-shopping-cart-three-columns-shopping-cart-with-card-details",
      description: "A three columns shopping cart with card details block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/three-columns-shopping-cart-with-card-details.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/three-columns-shopping-cart-with-card-details.tsx"
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
    "e-commerce-shopping-cart-two-column-cart-with-summary": {
      name: "e-commerce-shopping-cart-two-column-cart-with-summary",
      description: "A two column cart with summary block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/two-column-cart-with-summary.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/two-column-cart-with-summary.tsx"
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
    "e-commerce-shopping-cart-two-column-shopping-cart-with-order-summary": {
      name: "e-commerce-shopping-cart-two-column-shopping-cart-with-order-summary",
      description: "A two column shopping cart with order summary block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/two-column-shopping-cart-with-order-summary.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/two-column-shopping-cart-with-order-summary.tsx"
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
    "e-commerce-shopping-cart-two-column-shopping-cart-with-sticky-position": {
      name: "e-commerce-shopping-cart-two-column-shopping-cart-with-sticky-position",
      description: "A two column shopping cart with sticky position block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/two-column-shopping-cart-with-sticky-position.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/two-column-shopping-cart-with-sticky-position.tsx"
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
    "e-commerce-shopping-cart-two-column-shopping-cart-with-tab-content": {
      name: "e-commerce-shopping-cart-two-column-shopping-cart-with-tab-content",
      description: "A two column shopping cart with tab content block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/two-column-shopping-cart-with-tab-content.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/two-column-shopping-cart-with-tab-content.tsx"
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
    "e-commerce-shopping-cart-two-columns-shopping-cart-with-background-color":
      {
        name: "e-commerce-shopping-cart-two-columns-shopping-cart-with-background-color",
        description: "A two columns shopping cart with background color block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/e-commerce/shopping-cart/two-columns-shopping-cart-with-background-color.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/e-commerce/shopping-cart/two-columns-shopping-cart-with-background-color.tsx"
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
