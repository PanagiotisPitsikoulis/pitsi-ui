import * as React from "react"

export const IndexBlocksFullPagesPricingPage: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "full-pages-pricing-page-pricing-plan-card-with-availability-table": {
      name: "full-pages-pricing-page-pricing-plan-card-with-availability-table",
      description: "A pricing plan card with availability table block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/pricing-page/pricing-plan-card-with-availability-table.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/pricing-page/pricing-plan-card-with-availability-table.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages"],
      meta: undefined,
      tier: "free",
    },
    "full-pages-pricing-page-pricing-plan-card-with-availability-table-and-faqs":
      {
        name: "full-pages-pricing-page-pricing-plan-card-with-availability-table-and-faqs",
        description:
          "A pricing plan card with availability table and faqs block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/pricing-page/pricing-plan-card-with-availability-table-and-faqs.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/pricing-page/pricing-plan-card-with-availability-table-and-faqs.tsx"
          )
          const exportName =
            Object.keys(mod).find(
              (key) =>
                typeof mod[key] === "function" || typeof mod[key] === "object"
            ) || item.name
          return { default: mod.default || mod[exportName] }
        }),
        categories: ["full-pages"],
        meta: undefined,
        tier: "pro",
      },
    "full-pages-pricing-page-pricing-plans-details-with-gradient-background": {
      name: "full-pages-pricing-page-pricing-plans-details-with-gradient-background",
      description: "A pricing plans details with gradient background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/pricing-page/pricing-plans-details-with-gradient-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/pricing-page/pricing-plans-details-with-gradient-background.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages"],
      meta: undefined,
      tier: "pro",
    },
    "full-pages-pricing-page-pricing-plans-with-tab-plan-comparison-faqs": {
      name: "full-pages-pricing-page-pricing-plans-with-tab-plan-comparison-faqs",
      description: "A pricing plans with tab plan comparison faqs block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/pricing-page/pricing-plans-with-tab-plan-comparison-faqs.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/pricing-page/pricing-plans-with-tab-plan-comparison-faqs.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages"],
      meta: undefined,
      tier: "pro",
    },
  },
}
