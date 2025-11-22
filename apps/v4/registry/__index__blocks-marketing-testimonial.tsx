import * as React from "react"

export const IndexBlocksMarketingTestimonial: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "marketing-testimonial-3-column-review-cards-with-heading": {
      name: "marketing-testimonial-3-column-review-cards-with-heading",
      description: "A 3 column review cards with heading block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/3-column-review-cards-with-heading.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/3-column-review-cards-with-heading.tsx"
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
    "marketing-testimonial-3-column-video-cards-testimonial": {
      name: "marketing-testimonial-3-column-video-cards-testimonial",
      description: "A 3 column video cards testimonial block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/3-column-video-cards-testimonial.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/3-column-video-cards-testimonial.tsx"
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
    "marketing-testimonial-alternate-tailwind-tesimonial-cards": {
      name: "marketing-testimonial-alternate-tailwind-tesimonial-cards",
      description: "A alternate tailwind tesimonial cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/alternate-tailwind-tesimonial-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/alternate-tailwind-tesimonial-cards.tsx"
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
    "marketing-testimonial-basic-testimonial-cards": {
      name: "marketing-testimonial-basic-testimonial-cards",
      description: "A basic testimonial cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/basic-testimonial-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/basic-testimonial-cards.tsx"
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
    "marketing-testimonial-center-mode-slider-with-dark-version": {
      name: "marketing-testimonial-center-mode-slider-with-dark-version",
      description: "A center mode slider with dark version block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/center-mode-slider-with-dark-version.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/center-mode-slider-with-dark-version.tsx"
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
    "marketing-testimonial-client-review-two-column-card": {
      name: "marketing-testimonial-client-review-two-column-card",
      description: "A client review two column card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/client-review-two-column-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/client-review-two-column-card.tsx"
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
    "marketing-testimonial-client-testimonial-partial-slider": {
      name: "marketing-testimonial-client-testimonial-partial-slider",
      description: "A client testimonial partial slider block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/client-testimonial-partial-slider.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/client-testimonial-partial-slider.tsx"
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
    "marketing-testimonial-customer-review-with-product-image": {
      name: "marketing-testimonial-customer-review-with-product-image",
      description: "A customer review with product image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/customer-review-with-product-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/customer-review-with-product-image.tsx"
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
    "marketing-testimonial-heading-and-card-slider-block": {
      name: "marketing-testimonial-heading-and-card-slider-block",
      description: "A heading and card slider block block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/heading-and-card-slider-block.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/heading-and-card-slider-block.tsx"
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
    "marketing-testimonial-highlighted-testimonial-card-slider": {
      name: "marketing-testimonial-highlighted-testimonial-card-slider",
      description: "A highlighted testimonial card slider block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/highlighted-testimonial-card-slider.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/highlighted-testimonial-card-slider.tsx"
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
    "marketing-testimonial-horizontal-cards-block": {
      name: "marketing-testimonial-horizontal-cards-block",
      description: "A horizontal cards block block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/horizontal-cards-block.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/horizontal-cards-block.tsx"
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
    "marketing-testimonial-responsive-column-view": {
      name: "marketing-testimonial-responsive-column-view",
      description: "A responsive column view block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/responsive-column-view.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/responsive-column-view.tsx"
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
    "marketing-testimonial-review-cards-with-column-grid": {
      name: "marketing-testimonial-review-cards-with-column-grid",
      description: "A review cards with column grid block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/review-cards-with-column-grid.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/review-cards-with-column-grid.tsx"
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
    "marketing-testimonial-review-testimonials-with-video": {
      name: "marketing-testimonial-review-testimonials-with-video",
      description: "A review testimonials with video block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/review-testimonials-with-video.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/review-testimonials-with-video.tsx"
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
    "marketing-testimonial-reviews-with-ratings-and-brand-logos": {
      name: "marketing-testimonial-reviews-with-ratings-and-brand-logos",
      description: "A reviews with ratings and brand logos block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/reviews-with-ratings-and-brand-logos.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/reviews-with-ratings-and-brand-logos.tsx"
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
    "marketing-testimonial-side-by-side-testimonial-cards": {
      name: "marketing-testimonial-side-by-side-testimonial-cards",
      description: "A side by side testimonial cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/side-by-side-testimonial-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/side-by-side-testimonial-cards.tsx"
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
    "marketing-testimonial-simple-testimonial-cards": {
      name: "marketing-testimonial-simple-testimonial-cards",
      description: "A simple testimonial cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/simple-testimonial-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/simple-testimonial-cards.tsx"
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
    "marketing-testimonial-single-slide-review-with-full-description-and-background-block":
      {
        name: "marketing-testimonial-single-slide-review-with-full-description-and-background-block",
        description:
          "A single slide review with full description and background block block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/marketing/testimonial/single-slide-review-with-full-description-and-background-block.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/marketing/testimonial/single-slide-review-with-full-description-and-background-block.tsx"
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
    "marketing-testimonial-single-testimonial-slider": {
      name: "marketing-testimonial-single-testimonial-slider",
      description: "A single testimonial slider block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/single-testimonial-slider.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/single-testimonial-slider.tsx"
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
    "marketing-testimonial-slider-with-user-comments-and-avatars": {
      name: "marketing-testimonial-slider-with-user-comments-and-avatars",
      description: "A slider with user comments and avatars block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/slider-with-user-comments-and-avatars.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/slider-with-user-comments-and-avatars.tsx"
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
    "marketing-testimonial-split-image-and-description-testimonial-section": {
      name: "marketing-testimonial-split-image-and-description-testimonial-section",
      description: "A split image and description testimonial section block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/split-image-and-description-testimonial-section.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/split-image-and-description-testimonial-section.tsx"
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
    "marketing-testimonial-split-image-testimonial-tailwind": {
      name: "marketing-testimonial-split-image-testimonial-tailwind",
      description: "A split image testimonial tailwind block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/split-image-testimonial-tailwind.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/split-image-testimonial-tailwind.tsx"
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
    "marketing-testimonial-tailwind-carousel-with-arrow": {
      name: "marketing-testimonial-tailwind-carousel-with-arrow",
      description: "A tailwind carousel with arrow block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/tailwind-carousel-with-arrow.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/tailwind-carousel-with-arrow.tsx"
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
    "marketing-testimonial-tailwind-css-customer-review-slider": {
      name: "marketing-testimonial-tailwind-css-customer-review-slider",
      description: "A tailwind css customer review slider block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/tailwind-css-customer-review-slider.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/tailwind-css-customer-review-slider.tsx"
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
    "marketing-testimonial-tailwind-css-testimonial-in-modern-design": {
      name: "marketing-testimonial-tailwind-css-testimonial-in-modern-design",
      description: "A tailwind css testimonial in modern design block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/tailwind-css-testimonial-in-modern-design.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/tailwind-css-testimonial-in-modern-design.tsx"
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
    "marketing-testimonial-tailwind-css-vertical-testimonial-carousel-with-cards":
      {
        name: "marketing-testimonial-tailwind-css-vertical-testimonial-carousel-with-cards",
        description:
          "A tailwind css vertical testimonial carousel with cards block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/marketing/testimonial/tailwind-css-vertical-testimonial-carousel-with-cards.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/marketing/testimonial/tailwind-css-vertical-testimonial-carousel-with-cards.tsx"
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
    "marketing-testimonial-tailwind-testimonial-card-with-gradient-border": {
      name: "marketing-testimonial-tailwind-testimonial-card-with-gradient-border",
      description: "A tailwind testimonial card with gradient border block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-card-with-gradient-border.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-card-with-gradient-border.tsx"
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
    "marketing-testimonial-tailwind-testimonial-cards": {
      name: "marketing-testimonial-tailwind-testimonial-cards",
      description: "A tailwind testimonial cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-cards.tsx"
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
    "marketing-testimonial-tailwind-testimonial-carousel-with-horizontal-card":
      {
        name: "marketing-testimonial-tailwind-testimonial-carousel-with-horizontal-card",
        description:
          "A tailwind testimonial carousel with horizontal card block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-carousel-with-horizontal-card.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-carousel-with-horizontal-card.tsx"
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
    "marketing-testimonial-tailwind-testimonial-carousel-with-top-thumbnail-images":
      {
        name: "marketing-testimonial-tailwind-testimonial-carousel-with-top-thumbnail-images",
        description:
          "A tailwind testimonial carousel with top thumbnail images block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-carousel-with-top-thumbnail-images.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-carousel-with-top-thumbnail-images.tsx"
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
    "marketing-testimonial-tailwind-testimonial-slider-with-dots": {
      name: "marketing-testimonial-tailwind-testimonial-slider-with-dots",
      description: "A tailwind testimonial slider with dots block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-slider-with-dots.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-slider-with-dots.tsx"
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
    "marketing-testimonial-tailwind-testimonial-slider-with-heading": {
      name: "marketing-testimonial-tailwind-testimonial-slider-with-heading",
      description: "A tailwind testimonial slider with heading block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-slider-with-heading.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-slider-with-heading.tsx"
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
    "marketing-testimonial-tailwind-testimonial-with-active-user": {
      name: "marketing-testimonial-tailwind-testimonial-with-active-user",
      description: "A tailwind testimonial with active user block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-with-active-user.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-with-active-user.tsx"
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
    "marketing-testimonial-tailwind-testimonial-with-user-review-and-avatars": {
      name: "marketing-testimonial-tailwind-testimonial-with-user-review-and-avatars",
      description: "A tailwind testimonial with user review and avatars block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-with-user-review-and-avatars.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/tailwind-testimonial-with-user-review-and-avatars.tsx"
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
    "marketing-testimonial-testimonial-card-with-translated-images": {
      name: "marketing-testimonial-testimonial-card-with-translated-images",
      description: "A testimonial card with translated images block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/testimonial-card-with-translated-images.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/testimonial-card-with-translated-images.tsx"
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
    "marketing-testimonial-testimonial-carousel-tailwind-in-slideshow": {
      name: "marketing-testimonial-testimonial-carousel-tailwind-in-slideshow",
      description: "A testimonial carousel tailwind in slideshow block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/testimonial-carousel-tailwind-in-slideshow.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/testimonial-carousel-tailwind-in-slideshow.tsx"
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
    "marketing-testimonial-testimonial-carousel-with-memoji": {
      name: "marketing-testimonial-testimonial-carousel-with-memoji",
      description: "A testimonial carousel with memoji block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/testimonial-carousel-with-memoji.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/testimonial-carousel-with-memoji.tsx"
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
    "marketing-testimonial-testimonial-dark-card-with-review": {
      name: "marketing-testimonial-testimonial-dark-card-with-review",
      description: "A testimonial dark card with review block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/testimonial-dark-card-with-review.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/testimonial-dark-card-with-review.tsx"
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
    "marketing-testimonial-testimonial-grid-cards": {
      name: "marketing-testimonial-testimonial-grid-cards",
      description: "A testimonial grid cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/testimonial-grid-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/testimonial-grid-cards.tsx"
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
    "marketing-testimonial-testimonial-multicolor-cards": {
      name: "marketing-testimonial-testimonial-multicolor-cards",
      description: "A testimonial multicolor cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/testimonial-multicolor-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/testimonial-multicolor-cards.tsx"
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
    "marketing-testimonial-testimonial-slider-as-a-tab": {
      name: "marketing-testimonial-testimonial-slider-as-a-tab",
      description: "A testimonial slider as a tab block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/testimonial-slider-as-a-tab.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/testimonial-slider-as-a-tab.tsx"
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
    "marketing-testimonial-testimonial-slider-with-background-image": {
      name: "marketing-testimonial-testimonial-slider-with-background-image",
      description: "A testimonial slider with background image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/testimonial-slider-with-background-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/testimonial-slider-with-background-image.tsx"
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
    "marketing-testimonial-three-cards-testimonial-slider-section": {
      name: "marketing-testimonial-three-cards-testimonial-slider-section",
      description: "A three cards testimonial slider section block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/three-cards-testimonial-slider-section.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/three-cards-testimonial-slider-section.tsx"
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
    "marketing-testimonial-two-column-testimonial-card": {
      name: "marketing-testimonial-two-column-testimonial-card",
      description: "A two column testimonial card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/two-column-testimonial-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/two-column-testimonial-card.tsx"
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
    "marketing-testimonial-two-vertical-testimonial-sliders": {
      name: "marketing-testimonial-two-vertical-testimonial-sliders",
      description: "A two vertical testimonial sliders block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/two-vertical-testimonial-sliders.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/two-vertical-testimonial-sliders.tsx"
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
    "marketing-testimonial-user-experience-testimonial-with-image": {
      name: "marketing-testimonial-user-experience-testimonial-with-image",
      description: "A user experience testimonial with image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/user-experience-testimonial-with-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/user-experience-testimonial-with-image.tsx"
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
    "marketing-testimonial-vertical-card-slider": {
      name: "marketing-testimonial-vertical-card-slider",
      description: "A vertical card slider block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/vertical-card-slider.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/vertical-card-slider.tsx"
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
    "marketing-testimonial-vertical-testimonial-cards": {
      name: "marketing-testimonial-vertical-testimonial-cards",
      description: "A vertical testimonial cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/vertical-testimonial-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/vertical-testimonial-cards.tsx"
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
    "marketing-testimonial-vertical-testimonial-slider": {
      name: "marketing-testimonial-vertical-testimonial-slider",
      description: "A vertical testimonial slider block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/vertical-testimonial-slider.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/vertical-testimonial-slider.tsx"
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
    "marketing-testimonial-video-cover-testimonials": {
      name: "marketing-testimonial-video-cover-testimonials",
      description: "A video cover testimonials block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/video-cover-testimonials.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/video-cover-testimonials.tsx"
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
    "marketing-testimonial-with-user-image-and-reviews-block": {
      name: "marketing-testimonial-with-user-image-and-reviews-block",
      description: "A with user image and reviews block block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/testimonial/with-user-image-and-reviews-block.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/testimonial/with-user-image-and-reviews-block.tsx"
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
