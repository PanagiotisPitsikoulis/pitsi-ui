import * as React from "react"

export const IndexBlocksMarketingCta: Record<string, Record<string, any>> = {
  "new-york-v4": {
    "marketing-cta-app-download-cta-with-dashboard-visual": {
      name: "marketing-cta-app-download-cta-with-dashboard-visual",
      description: "A app download cta with dashboard visual block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/app-download-cta-with-dashboard-visual.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/app-download-cta-with-dashboard-visual.tsx"
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
    "marketing-cta-community-cta-with-illustration": {
      name: "marketing-cta-community-cta-with-illustration",
      description: "A community cta with illustration block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/community-cta-with-illustration.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/community-cta-with-illustration.tsx"
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
    "marketing-cta-cta-as-box-layout": {
      name: "marketing-cta-cta-as-box-layout",
      description: "A cta as box layout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-as-box-layout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-as-box-layout.tsx"
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
    "marketing-cta-cta-buttons-only": {
      name: "marketing-cta-cta-buttons-only",
      description: "A cta buttons only block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-buttons-only.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-buttons-only.tsx"
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
    "marketing-cta-cta-buttons-with-centrally-aligned-features-list": {
      name: "marketing-cta-cta-buttons-with-centrally-aligned-features-list",
      description: "A cta buttons with centrally aligned features list block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-buttons-with-centrally-aligned-features-list.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-buttons-with-centrally-aligned-features-list.tsx"
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
    "marketing-cta-cta-buttons-with-heading": {
      name: "marketing-cta-cta-buttons-with-heading",
      description: "A cta buttons with heading block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-buttons-with-heading.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-buttons-with-heading.tsx"
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
      readiness: "alpha",
    },
    "marketing-cta-cta-buttons-with-split-image": {
      name: "marketing-cta-cta-buttons-with-split-image",
      description: "A cta buttons with split image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-buttons-with-split-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-buttons-with-split-image.tsx"
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
      readiness: "alpha",
    },
    "marketing-cta-cta-for-email-sign-up": {
      name: "marketing-cta-cta-for-email-sign-up",
      description: "A cta for email sign up block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-for-email-sign-up.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-for-email-sign-up.tsx"
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
      readiness: "alpha",
    },
    "marketing-cta-cta-page-with-mobile-application-download": {
      name: "marketing-cta-cta-page-with-mobile-application-download",
      description: "A cta page with mobile application download block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-page-with-mobile-application-download.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-page-with-mobile-application-download.tsx"
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
      readiness: "alpha",
    },
    "marketing-cta-cta-section-for-exclusive-subscriber-rewards": {
      name: "marketing-cta-cta-section-for-exclusive-subscriber-rewards",
      description: "A cta section for exclusive subscriber rewards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-for-exclusive-subscriber-rewards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-for-exclusive-subscriber-rewards.tsx"
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
      readiness: "alpha",
    },
    "marketing-cta-cta-section-for-home-discovery": {
      name: "marketing-cta-cta-section-for-home-discovery",
      description: "A cta section for home discovery block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-for-home-discovery.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-for-home-discovery.tsx"
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
      readiness: "alpha",
    },
    "marketing-cta-cta-section-for-modern-living-spaces": {
      name: "marketing-cta-cta-section-for-modern-living-spaces",
      description: "A cta section for modern living spaces block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-for-modern-living-spaces.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-for-modern-living-spaces.tsx"
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
      readiness: "alpha",
    },
    "marketing-cta-cta-section-for-portfolio-strategy": {
      name: "marketing-cta-cta-section-for-portfolio-strategy",
      description: "A cta section for portfolio strategy block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-for-portfolio-strategy.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-for-portfolio-strategy.tsx"
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
      readiness: "alpha",
    },
    "marketing-cta-cta-section-for-stories-solutions": {
      name: "marketing-cta-cta-section-for-stories-solutions",
      description: "A cta section for stories solutions block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-for-stories-solutions.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-for-stories-solutions.tsx"
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
      readiness: "alpha",
    },
    "marketing-cta-cta-section-for-subscription": {
      name: "marketing-cta-cta-section-for-subscription",
      description: "A cta section for subscription block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-for-subscription.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-for-subscription.tsx"
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
      readiness: "alpha",
    },
    "marketing-cta-cta-section-for-unique-seo-solutions": {
      name: "marketing-cta-cta-section-for-unique-seo-solutions",
      description: "A cta section for unique seo solutions block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-for-unique-seo-solutions.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-for-unique-seo-solutions.tsx"
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
    "marketing-cta-cta-section-with-background-image": {
      name: "marketing-cta-cta-section-with-background-image",
      description: "A cta section with background image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-with-background-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-with-background-image.tsx"
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
    "marketing-cta-cta-section-with-creative-solutions": {
      name: "marketing-cta-cta-section-with-creative-solutions",
      description: "A cta section with creative solutions block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-with-creative-solutions.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-with-creative-solutions.tsx"
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
    "marketing-cta-cta-section-with-download-metrics": {
      name: "marketing-cta-cta-section-with-download-metrics",
      description: "A cta section with download metrics block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-with-download-metrics.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-with-download-metrics.tsx"
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
    "marketing-cta-cta-section-with-mesh-gradient-background": {
      name: "marketing-cta-cta-section-with-mesh-gradient-background",
      description: "A cta section with mesh gradient background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-with-mesh-gradient-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-with-mesh-gradient-background.tsx"
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
    "marketing-cta-cta-section-with-mobile-application": {
      name: "marketing-cta-cta-section-with-mobile-application",
      description: "A cta section with mobile application block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-with-mobile-application.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-with-mobile-application.tsx"
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
    "marketing-cta-cta-section-with-portfolio-advice": {
      name: "marketing-cta-cta-section-with-portfolio-advice",
      description: "A cta section with portfolio advice block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-with-portfolio-advice.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-with-portfolio-advice.tsx"
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
    "marketing-cta-cta-section-with-ratings": {
      name: "marketing-cta-cta-section-with-ratings",
      description: "A cta section with ratings block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-section-with-ratings.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-section-with-ratings.tsx"
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
    "marketing-cta-cta-with-centrally-aligned-subscribe-button": {
      name: "marketing-cta-cta-with-centrally-aligned-subscribe-button",
      description: "A cta with centrally aligned subscribe button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-with-centrally-aligned-subscribe-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-with-centrally-aligned-subscribe-button.tsx"
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
    "marketing-cta-cta-with-email-sign-up-and-image": {
      name: "marketing-cta-cta-with-email-sign-up-and-image",
      description: "A cta with email sign up and image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-with-email-sign-up-and-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-with-email-sign-up-and-image.tsx"
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
    "marketing-cta-cta-with-feature-list": {
      name: "marketing-cta-cta-with-feature-list",
      description: "A cta with feature list block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-with-feature-list.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-with-feature-list.tsx"
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
    "marketing-cta-cta-with-feature-list-and-image": {
      name: "marketing-cta-cta-with-feature-list-and-image",
      description: "A cta with feature list and image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-with-feature-list-and-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-with-feature-list-and-image.tsx"
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
    "marketing-cta-cta-with-form-and-description": {
      name: "marketing-cta-cta-with-form-and-description",
      description: "A cta with form and description block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-with-form-and-description.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-with-form-and-description.tsx"
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
    "marketing-cta-cta-with-gradient-background": {
      name: "marketing-cta-cta-with-gradient-background",
      description: "A cta with gradient background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-with-gradient-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-with-gradient-background.tsx"
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
    "marketing-cta-cta-with-illustration-and-newsletter": {
      name: "marketing-cta-cta-with-illustration-and-newsletter",
      description: "A cta with illustration and newsletter block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-with-illustration-and-newsletter.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-with-illustration-and-newsletter.tsx"
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
    "marketing-cta-cta-with-newsletter-background": {
      name: "marketing-cta-cta-with-newsletter-background",
      description: "A cta with newsletter background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-with-newsletter-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-with-newsletter-background.tsx"
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
    "marketing-cta-cta-with-two-cards": {
      name: "marketing-cta-cta-with-two-cards",
      description: "A cta with two cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/cta-with-two-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/cta-with-two-cards.tsx"
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
    "marketing-cta-dark-cta-with-success-dashboard-preview": {
      name: "marketing-cta-dark-cta-with-success-dashboard-preview",
      description: "A dark cta with success dashboard preview block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/dark-cta-with-success-dashboard-preview.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/dark-cta-with-success-dashboard-preview.tsx"
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
    "marketing-cta-expert-it-support-cta-with-demo-buttons": {
      name: "marketing-cta-expert-it-support-cta-with-demo-buttons",
      description: "A expert it support cta with demo buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/expert-it-support-cta-with-demo-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/expert-it-support-cta-with-demo-buttons.tsx"
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
    "marketing-cta-gradient-cta-with-profile-meeting-card": {
      name: "marketing-cta-gradient-cta-with-profile-meeting-card",
      description: "A gradient cta with profile meeting card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/gradient-cta-with-profile-meeting-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/gradient-cta-with-profile-meeting-card.tsx"
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
    "marketing-cta-gradient-cta-with-rating-stars": {
      name: "marketing-cta-gradient-cta-with-rating-stars",
      description: "A gradient cta with rating stars block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/gradient-cta-with-rating-stars.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/gradient-cta-with-rating-stars.tsx"
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
    "marketing-cta-hr-dashboard-cta-with-blue-gradient": {
      name: "marketing-cta-hr-dashboard-cta-with-blue-gradient",
      description: "A hr dashboard cta with blue gradient block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/hr-dashboard-cta-with-blue-gradient.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/hr-dashboard-cta-with-blue-gradient.tsx"
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
    "marketing-cta-it-solutions-cta-with-dual-buttons": {
      name: "marketing-cta-it-solutions-cta-with-dual-buttons",
      description: "A it solutions cta with dual buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/it-solutions-cta-with-dual-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/it-solutions-cta-with-dual-buttons.tsx"
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
    "marketing-cta-mobile-application-mockup-with-cta-buttons": {
      name: "marketing-cta-mobile-application-mockup-with-cta-buttons",
      description: "A mobile application mockup with cta buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/mobile-application-mockup-with-cta-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/mobile-application-mockup-with-cta-buttons.tsx"
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
    "marketing-cta-multi-image-scrolling-cta-with-trial": {
      name: "marketing-cta-multi-image-scrolling-cta-with-trial",
      description: "A multi image scrolling cta with trial block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/multi-image-scrolling-cta-with-trial.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/multi-image-scrolling-cta-with-trial.tsx"
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
    "marketing-cta-streamlined-trading-cta-with-analytics": {
      name: "marketing-cta-streamlined-trading-cta-with-analytics",
      description: "A streamlined trading cta with analytics block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/streamlined-trading-cta-with-analytics.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/streamlined-trading-cta-with-analytics.tsx"
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
    "marketing-cta-subscribe-form-with-image": {
      name: "marketing-cta-subscribe-form-with-image",
      description: "A subscribe form with image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/subscribe-form-with-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/subscribe-form-with-image.tsx"
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
    "marketing-cta-subscribe-form-with-svg-icon": {
      name: "marketing-cta-subscribe-form-with-svg-icon",
      description: "A subscribe form with svg icon block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/subscribe-form-with-svg-icon.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/subscribe-form-with-svg-icon.tsx"
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
    "marketing-cta-tailwind-css-cta-section-for-app-download": {
      name: "marketing-cta-tailwind-css-cta-section-for-app-download",
      description: "A tailwind css cta section for app download block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/tailwind-css-cta-section-for-app-download.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/tailwind-css-cta-section-for-app-download.tsx"
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
    "marketing-cta-tailwind-css-cta-with-community-real-photos": {
      name: "marketing-cta-tailwind-css-cta-with-community-real-photos",
      description: "A tailwind css cta with community real photos block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/tailwind-css-cta-with-community-real-photos.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/tailwind-css-cta-with-community-real-photos.tsx"
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
    "marketing-cta-tailwind-css-gradient-background-cta": {
      name: "marketing-cta-tailwind-css-gradient-background-cta",
      description: "A tailwind css gradient background cta block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/tailwind-css-gradient-background-cta.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/tailwind-css-gradient-background-cta.tsx"
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
    "marketing-cta-tailwind-css-image-based-cta": {
      name: "marketing-cta-tailwind-css-image-based-cta",
      description: "A tailwind css image based cta block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/tailwind-css-image-based-cta.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/tailwind-css-image-based-cta.tsx"
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
    "marketing-cta-tailwind-cta-section-with-professional-guidance": {
      name: "marketing-cta-tailwind-cta-section-with-professional-guidance",
      description: "A tailwind cta section with professional guidance block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/tailwind-cta-section-with-professional-guidance.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/tailwind-cta-section-with-professional-guidance.tsx"
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
    "marketing-cta-tailwind-free-trial-cta-with-benefits": {
      name: "marketing-cta-tailwind-free-trial-cta-with-benefits",
      description: "A tailwind free trial cta with benefits block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/cta/tailwind-free-trial-cta-with-benefits.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/cta/tailwind-free-trial-cta-with-benefits.tsx"
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
