import * as React from "react"

export const IndexBlocksMarketingPricingPlans: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "marketing-pricing-plans-center-align-tailwind-pricing-cards": {
      name: "marketing-pricing-plans-center-align-tailwind-pricing-cards",
      description: "A center align tailwind pricing cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/center-align-tailwind-pricing-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/center-align-tailwind-pricing-cards.tsx"
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
    },
    "marketing-pricing-plans-dark-pricing-card": {
      name: "marketing-pricing-plans-dark-pricing-card",
      description: "A dark pricing card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/dark-pricing-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/dark-pricing-card.tsx"
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
    },
    "marketing-pricing-plans-feature-list-with-pricing-plan": {
      name: "marketing-pricing-plans-feature-list-with-pricing-plan",
      description: "A feature list with pricing plan block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/feature-list-with-pricing-plan.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/feature-list-with-pricing-plan.tsx"
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
    },
    "marketing-pricing-plans-four-tier-pricing-plan": {
      name: "marketing-pricing-plans-four-tier-pricing-plan",
      description: "A four tier pricing plan block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/four-tier-pricing-plan.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/four-tier-pricing-plan.tsx"
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
    },
    "marketing-pricing-plans-header-background-pricing-card": {
      name: "marketing-pricing-plans-header-background-pricing-card",
      description: "A header background pricing card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/header-background-pricing-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/header-background-pricing-card.tsx"
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
    },
    "marketing-pricing-plans-highlight-pricing-feature": {
      name: "marketing-pricing-plans-highlight-pricing-feature",
      description: "A highlight pricing feature block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/highlight-pricing-feature.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/highlight-pricing-feature.tsx"
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
    },
    "marketing-pricing-plans-horizontal-card-as-testimonial": {
      name: "marketing-pricing-plans-horizontal-card-as-testimonial",
      description: "A horizontal card as testimonial block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/horizontal-card-as-testimonial.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/horizontal-card-as-testimonial.tsx"
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
    },
    "marketing-pricing-plans-horizontal-card-with-pricing-plans-as-testimonial":
      {
        name: "marketing-pricing-plans-horizontal-card-with-pricing-plans-as-testimonial",
        description:
          "A horizontal card with pricing plans as testimonial block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/marketing/pricing-plans/horizontal-card-with-pricing-plans-as-testimonial.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/marketing/pricing-plans/horizontal-card-with-pricing-plans-as-testimonial.tsx"
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
      },
    "marketing-pricing-plans-horizontal-pricing-plans": {
      name: "marketing-pricing-plans-horizontal-pricing-plans",
      description: "A horizontal pricing plans block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/horizontal-pricing-plans.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/horizontal-pricing-plans.tsx"
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
    },
    "marketing-pricing-plans-image-as-pricing-card-background": {
      name: "marketing-pricing-plans-image-as-pricing-card-background",
      description: "A image as pricing card background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/image-as-pricing-card-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/image-as-pricing-card-background.tsx"
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
    },
    "marketing-pricing-plans-image-with-pricing-card": {
      name: "marketing-pricing-plans-image-with-pricing-card",
      description: "A image with pricing card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/image-with-pricing-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/image-with-pricing-card.tsx"
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
    },
    "marketing-pricing-plans-multicolor-pricing-cards": {
      name: "marketing-pricing-plans-multicolor-pricing-cards",
      description: "A multicolor pricing cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/multicolor-pricing-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/multicolor-pricing-cards.tsx"
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
    },
    "marketing-pricing-plans-pricing-card-with-bordered-layout": {
      name: "marketing-pricing-plans-pricing-card-with-bordered-layout",
      description: "A pricing card with bordered layout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-card-with-bordered-layout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-card-with-bordered-layout.tsx"
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
    },
    "marketing-pricing-plans-pricing-card-with-cta-button": {
      name: "marketing-pricing-plans-pricing-card-with-cta-button",
      description: "A pricing card with cta button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-card-with-cta-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-card-with-cta-button.tsx"
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
    },
    "marketing-pricing-plans-pricing-card-with-highlighted-border": {
      name: "marketing-pricing-plans-pricing-card-with-highlighted-border",
      description: "A pricing card with highlighted border block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-card-with-highlighted-border.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-card-with-highlighted-border.tsx"
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
    },
    "marketing-pricing-plans-pricing-card-with-highlighted-price": {
      name: "marketing-pricing-plans-pricing-card-with-highlighted-price",
      description: "A pricing card with highlighted price block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-card-with-highlighted-price.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-card-with-highlighted-price.tsx"
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
    },
    "marketing-pricing-plans-pricing-cards-with-colored-border": {
      name: "marketing-pricing-plans-pricing-cards-with-colored-border",
      description: "A pricing cards with colored border block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-cards-with-colored-border.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-cards-with-colored-border.tsx"
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
    },
    "marketing-pricing-plans-pricing-cards-with-graph-image": {
      name: "marketing-pricing-plans-pricing-cards-with-graph-image",
      description: "A pricing cards with graph image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-cards-with-graph-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-cards-with-graph-image.tsx"
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
    },
    "marketing-pricing-plans-pricing-cards-with-vertical-tabs": {
      name: "marketing-pricing-plans-pricing-cards-with-vertical-tabs",
      description: "A pricing cards with vertical tabs block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-cards-with-vertical-tabs.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-cards-with-vertical-tabs.tsx"
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
    },
    "marketing-pricing-plans-pricing-components-with-illustration": {
      name: "marketing-pricing-plans-pricing-components-with-illustration",
      description: "A pricing components with illustration block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-components-with-illustration.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-components-with-illustration.tsx"
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
    },
    "marketing-pricing-plans-pricing-model-with-table": {
      name: "marketing-pricing-plans-pricing-model-with-table",
      description: "A pricing model with table block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-model-with-table.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-model-with-table.tsx"
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
    },
    "marketing-pricing-plans-pricing-plan-for-dark-theme": {
      name: "marketing-pricing-plans-pricing-plan-for-dark-theme",
      description: "A pricing plan for dark theme block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plan-for-dark-theme.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plan-for-dark-theme.tsx"
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
    },
    "marketing-pricing-plans-pricing-plan-for-dark-theme-with-feature-list": {
      name: "marketing-pricing-plans-pricing-plan-for-dark-theme-with-feature-list",
      description: "A pricing plan for dark theme with feature list block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plan-for-dark-theme-with-feature-list.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plan-for-dark-theme-with-feature-list.tsx"
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
    },
    "marketing-pricing-plans-pricing-plan-with-highlighted-background": {
      name: "marketing-pricing-plans-pricing-plan-with-highlighted-background",
      description: "A pricing plan with highlighted background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plan-with-highlighted-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plan-with-highlighted-background.tsx"
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
    },
    "marketing-pricing-plans-pricing-plan-with-highlighted-gradient-background":
      {
        name: "marketing-pricing-plans-pricing-plan-with-highlighted-gradient-background",
        description:
          "A pricing plan with highlighted gradient background block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plan-with-highlighted-gradient-background.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plan-with-highlighted-gradient-background.tsx"
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
      },
    "marketing-pricing-plans-pricing-plan-with-seperate-headers": {
      name: "marketing-pricing-plans-pricing-plan-with-seperate-headers",
      description: "A pricing plan with seperate headers block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plan-with-seperate-headers.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plan-with-seperate-headers.tsx"
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
    },
    "marketing-pricing-plans-pricing-plan-with-toggle-switch": {
      name: "marketing-pricing-plans-pricing-plan-with-toggle-switch",
      description: "A pricing plan with toggle switch block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plan-with-toggle-switch.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plan-with-toggle-switch.tsx"
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
    },
    "marketing-pricing-plans-pricing-plans-as-testimonials": {
      name: "marketing-pricing-plans-pricing-plans-as-testimonials",
      description: "A pricing plans as testimonials block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plans-as-testimonials.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plans-as-testimonials.tsx"
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
    },
    "marketing-pricing-plans-pricing-plans-with-gradient-background": {
      name: "marketing-pricing-plans-pricing-plans-with-gradient-background",
      description: "A pricing plans with gradient background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plans-with-gradient-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plans-with-gradient-background.tsx"
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
    },
    "marketing-pricing-plans-pricing-plans-with-image-header": {
      name: "marketing-pricing-plans-pricing-plans-with-image-header",
      description: "A pricing plans with image header block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plans-with-image-header.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-plans-with-image-header.tsx"
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
    },
    "marketing-pricing-plans-pricing-table-centrally-aligned": {
      name: "marketing-pricing-plans-pricing-table-centrally-aligned",
      description: "A pricing table centrally aligned block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-table-centrally-aligned.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-table-centrally-aligned.tsx"
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
    },
    "marketing-pricing-plans-pricing-table-for-dark-version": {
      name: "marketing-pricing-plans-pricing-table-for-dark-version",
      description: "A pricing table for dark version block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-table-for-dark-version.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-table-for-dark-version.tsx"
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
    },
    "marketing-pricing-plans-pricing-table-with-four-tiers": {
      name: "marketing-pricing-plans-pricing-table-with-four-tiers",
      description: "A pricing table with four tiers block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-table-with-four-tiers.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-table-with-four-tiers.tsx"
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
    },
    "marketing-pricing-plans-pricing-with-a-toggle-switch": {
      name: "marketing-pricing-plans-pricing-with-a-toggle-switch",
      description: "A pricing with a toggle switch block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-with-a-toggle-switch.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-with-a-toggle-switch.tsx"
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
    },
    "marketing-pricing-plans-pricing-with-image-card": {
      name: "marketing-pricing-plans-pricing-with-image-card",
      description: "A pricing with image card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-with-image-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-with-image-card.tsx"
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
    },
    "marketing-pricing-plans-pricing-with-radio-component": {
      name: "marketing-pricing-plans-pricing-with-radio-component",
      description: "A pricing with radio component block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/pricing-with-radio-component.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/pricing-with-radio-component.tsx"
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
    },
    "marketing-pricing-plans-ranking-analyzer-with-dark-theme": {
      name: "marketing-pricing-plans-ranking-analyzer-with-dark-theme",
      description: "A ranking analyzer with dark theme block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/ranking-analyzer-with-dark-theme.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/ranking-analyzer-with-dark-theme.tsx"
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
    },
    "marketing-pricing-plans-scaled-pricing-card": {
      name: "marketing-pricing-plans-scaled-pricing-card",
      description: "A scaled pricing card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/scaled-pricing-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/scaled-pricing-card.tsx"
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
    },
    "marketing-pricing-plans-simple-transparent-pricing-table": {
      name: "marketing-pricing-plans-simple-transparent-pricing-table",
      description: "A simple transparent pricing table block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/simple-transparent-pricing-table.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/simple-transparent-pricing-table.tsx"
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
    },
    "marketing-pricing-plans-single-pricing-plan": {
      name: "marketing-pricing-plans-single-pricing-plan",
      description: "A single pricing plan block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/single-pricing-plan.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/single-pricing-plan.tsx"
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
    },
    "marketing-pricing-plans-tailwind-css-pricing-cards": {
      name: "marketing-pricing-plans-tailwind-css-pricing-cards",
      description: "A tailwind css pricing cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/tailwind-css-pricing-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/tailwind-css-pricing-cards.tsx"
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
    },
    "marketing-pricing-plans-tailwind-css-pricing-cards-with-border-separation":
      {
        name: "marketing-pricing-plans-tailwind-css-pricing-cards-with-border-separation",
        description:
          "A tailwind css pricing cards with border separation block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/marketing/pricing-plans/tailwind-css-pricing-cards-with-border-separation.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/marketing/pricing-plans/tailwind-css-pricing-cards-with-border-separation.tsx"
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
      },
    "marketing-pricing-plans-tailwind-css-pricing-table": {
      name: "marketing-pricing-plans-tailwind-css-pricing-table",
      description: "A tailwind css pricing table block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/tailwind-css-pricing-table.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/tailwind-css-pricing-table.tsx"
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
    },
    "marketing-pricing-plans-tailwind-pricing-table-with-gradient-background": {
      name: "marketing-pricing-plans-tailwind-pricing-table-with-gradient-background",
      description: "A tailwind pricing table with gradient background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/tailwind-pricing-table-with-gradient-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/tailwind-pricing-table-with-gradient-background.tsx"
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
    },
    "marketing-pricing-plans-three-tiers-with-toggle": {
      name: "marketing-pricing-plans-three-tiers-with-toggle",
      description: "A three tiers with toggle block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/three-tiers-with-toggle.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/three-tiers-with-toggle.tsx"
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
    },
    "marketing-pricing-plans-two-column-horizontal-pricing-cards": {
      name: "marketing-pricing-plans-two-column-horizontal-pricing-cards",
      description: "A two column horizontal pricing cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/two-column-horizontal-pricing-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/two-column-horizontal-pricing-cards.tsx"
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
    },
    "marketing-pricing-plans-two-column-pricing-cards": {
      name: "marketing-pricing-plans-two-column-pricing-cards",
      description: "A two column pricing cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/two-column-pricing-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/two-column-pricing-cards.tsx"
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
    },
    "marketing-pricing-plans-two-column-stylish-pricing-plans": {
      name: "marketing-pricing-plans-two-column-stylish-pricing-plans",
      description: "A two column stylish pricing plans block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/two-column-stylish-pricing-plans.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/two-column-stylish-pricing-plans.tsx"
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
    },
    "marketing-pricing-plans-two-tier-pricing-cards": {
      name: "marketing-pricing-plans-two-tier-pricing-cards",
      description: "A two tier pricing cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/two-tier-pricing-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/two-tier-pricing-cards.tsx"
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
    },
    "marketing-pricing-plans-vertical-accordion-pricing-plans": {
      name: "marketing-pricing-plans-vertical-accordion-pricing-plans",
      description: "A vertical accordion pricing plans block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/pricing-plans/vertical-accordion-pricing-plans.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/pricing-plans/vertical-accordion-pricing-plans.tsx"
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
    },
  },
}
