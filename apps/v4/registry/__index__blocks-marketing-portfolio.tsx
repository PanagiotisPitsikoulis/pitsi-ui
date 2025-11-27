// @ts-nocheck
import * as React from "react"

export const IndexBlocksMarketingPortfolio: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "marketing-portfolio-grid-layout-with-image-and-description-and-cta": {
      name: "marketing-portfolio-grid-layout-with-image-and-description-and-cta",
      description: "A grid layout with image and description and cta block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/portfolio/grid-layout-with-image-and-description-and-cta.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/portfolio/grid-layout-with-image-and-description-and-cta.tsx"
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
    "marketing-portfolio-portfolio-section-with-testimonial-layout": {
      name: "marketing-portfolio-portfolio-section-with-testimonial-layout",
      description: "A portfolio section with testimonial layout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/portfolio/portfolio-section-with-testimonial-layout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/portfolio/portfolio-section-with-testimonial-layout.tsx"
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
    "marketing-portfolio-portfolio-section-with-three-column-grid": {
      name: "marketing-portfolio-portfolio-section-with-three-column-grid",
      description: "A portfolio section with three column grid block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/portfolio/portfolio-section-with-three-column-grid.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/portfolio/portfolio-section-with-three-column-grid.tsx"
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
    "marketing-portfolio-portfolio-with-beautiful-grid-system": {
      name: "marketing-portfolio-portfolio-with-beautiful-grid-system",
      description: "A portfolio with beautiful grid system block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/portfolio/portfolio-with-beautiful-grid-system.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/portfolio/portfolio-with-beautiful-grid-system.tsx"
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
    "marketing-portfolio-tailwind-css-portfolio-with-product-or-project-s-features":
      {
        name: "marketing-portfolio-tailwind-css-portfolio-with-product-or-project-s-features",
        description:
          "A tailwind css portfolio with product or project s features block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/marketing/portfolio/tailwind-css-portfolio-with-product-or-project-s-features.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/marketing/portfolio/tailwind-css-portfolio-with-product-or-project-s-features.tsx"
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
  },
}
