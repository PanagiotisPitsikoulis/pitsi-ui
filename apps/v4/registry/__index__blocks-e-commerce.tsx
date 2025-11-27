// @ts-nocheck
import * as React from "react"

export const IndexBlocksECommerce: Record<string, Record<string, any>> = {
  "new-york-v4": {
    "e-commerce-category-filter-basic-filter-with-search-and-cta-button": {
      name: "e-commerce-category-filter-basic-filter-with-search-and-cta-button",
      description: "A basic filter with search and cta button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/category-filter/basic-filter-with-search-and-cta-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/category-filter/basic-filter-with-search-and-cta-button.tsx"
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
    "e-commerce-category-filter-category-filter-on-right-side": {
      name: "e-commerce-category-filter-category-filter-on-right-side",
      description: "A category filter on right side block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/category-filter/category-filter-on-right-side.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/category-filter/category-filter-on-right-side.tsx"
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
    "e-commerce-category-filter-category-filter-with-background": {
      name: "e-commerce-category-filter-category-filter-with-background",
      description: "A category filter with background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/category-filter/category-filter-with-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/category-filter/category-filter-with-background.tsx"
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
    "e-commerce-category-filter-category-filter-with-separate-header": {
      name: "e-commerce-category-filter-category-filter-with-separate-header",
      description: "A category filter with separate header block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/category-filter/category-filter-with-separate-header.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/category-filter/category-filter-with-separate-header.tsx"
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
    "e-commerce-category-filter-default-category-filter": {
      name: "e-commerce-category-filter-default-category-filter",
      description: "A default category filter block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/category-filter/default-category-filter.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/category-filter/default-category-filter.tsx"
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
    "e-commerce-comment-list-basic-comments-list-with-like-and-cta-button": {
      name: "e-commerce-comment-list-basic-comments-list-with-like-and-cta-button",
      description: "A basic comments list with like and cta button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/comment-list/basic-comments-list-with-like-and-cta-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/comment-list/basic-comments-list-with-like-and-cta-button.tsx"
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
    "e-commerce-comment-list-comment-block-with-text-editor": {
      name: "e-commerce-comment-list-comment-block-with-text-editor",
      description: "A comment block with text editor block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/comment-list/comment-block-with-text-editor.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/comment-list/comment-block-with-text-editor.tsx"
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
    "e-commerce-comment-list-comment-form-tailwind": {
      name: "e-commerce-comment-list-comment-form-tailwind",
      description: "A comment form tailwind block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/comment-list/comment-form-tailwind.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/comment-list/comment-form-tailwind.tsx"
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
    "e-commerce-comment-list-comment-list-with-text-editor": {
      name: "e-commerce-comment-list-comment-list-with-text-editor",
      description: "A comment list with text editor block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/comment-list/comment-list-with-text-editor.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/comment-list/comment-list-with-text-editor.tsx"
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
    "e-commerce-comment-list-comment-section-with-reply-field": {
      name: "e-commerce-comment-list-comment-section-with-reply-field",
      description: "A comment section with reply field block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/comment-list/comment-section-with-reply-field.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/comment-list/comment-section-with-reply-field.tsx"
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
    "e-commerce-comment-list-comments-section-with-form": {
      name: "e-commerce-comment-list-comments-section-with-form",
      description: "A comments section with form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/comment-list/comments-section-with-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/comment-list/comments-section-with-form.tsx"
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
    "e-commerce-comment-list-comments-with-replies": {
      name: "e-commerce-comment-list-comments-with-replies",
      description: "A comments with replies block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/comment-list/comments-with-replies.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/comment-list/comments-with-replies.tsx"
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
    "e-commerce-comment-list-nested-comment-section": {
      name: "e-commerce-comment-list-nested-comment-section",
      description: "A nested comment section block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/comment-list/nested-comment-section.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/comment-list/nested-comment-section.tsx"
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
    "e-commerce-comment-list-simple-comment-block": {
      name: "e-commerce-comment-list-simple-comment-block",
      description: "A simple comment block block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/comment-list/simple-comment-block.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/comment-list/simple-comment-block.tsx"
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
    "e-commerce-comment-list-tailwind-comment-list-with-user-images": {
      name: "e-commerce-comment-list-tailwind-comment-list-with-user-images",
      description: "A tailwind comment list with user images block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/comment-list/tailwind-comment-list-with-user-images.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/comment-list/tailwind-comment-list-with-user-images.tsx"
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
    "e-commerce-comment-list-tailwind-css-comment-list-with-form": {
      name: "e-commerce-comment-list-tailwind-css-comment-list-with-form",
      description: "A tailwind css comment list with form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/comment-list/tailwind-css-comment-list-with-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/comment-list/tailwind-css-comment-list-with-form.tsx"
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
    "e-commerce-incentives-3-column-grid-tailwind-incentive-section": {
      name: "e-commerce-incentives-3-column-grid-tailwind-incentive-section",
      description: "A 3 column grid tailwind incentive section block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/incentives/3-column-grid-tailwind-incentive-section.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/incentives/3-column-grid-tailwind-incentive-section.tsx"
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
    "e-commerce-incentives-brand-logo-incentive-section": {
      name: "e-commerce-incentives-brand-logo-incentive-section",
      description: "A brand logo incentive section block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/incentives/brand-logo-incentive-section.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/incentives/brand-logo-incentive-section.tsx"
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
    "e-commerce-incentives-form-incentive-section": {
      name: "e-commerce-incentives-form-incentive-section",
      description: "A form incentive section block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/incentives/form-incentive-section.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/incentives/form-incentive-section.tsx"
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
    "e-commerce-incentives-image-in-grid-incentive-section": {
      name: "e-commerce-incentives-image-in-grid-incentive-section",
      description: "A image in grid incentive section block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/incentives/image-in-grid-incentive-section.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/incentives/image-in-grid-incentive-section.tsx"
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
    "e-commerce-incentives-incentive-page-with-card-view": {
      name: "e-commerce-incentives-incentive-page-with-card-view",
      description: "A incentive page with card view block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/incentives/incentive-page-with-card-view.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/incentives/incentive-page-with-card-view.tsx"
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
    "e-commerce-incentives-incentive-page-with-four-column-grid": {
      name: "e-commerce-incentives-incentive-page-with-four-column-grid",
      description: "A incentive page with four column grid block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/incentives/incentive-page-with-four-column-grid.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/incentives/incentive-page-with-four-column-grid.tsx"
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
    "e-commerce-incentives-incentive-page-with-heading": {
      name: "e-commerce-incentives-incentive-page-with-heading",
      description: "A incentive page with heading block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/incentives/incentive-page-with-heading.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/incentives/incentive-page-with-heading.tsx"
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
    "e-commerce-incentives-incentive-pages-with-description-and-comparison": {
      name: "e-commerce-incentives-incentive-pages-with-description-and-comparison",
      description: "A incentive pages with description and comparison block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/incentives/incentive-pages-with-description-and-comparison.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/incentives/incentive-pages-with-description-and-comparison.tsx"
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
    "e-commerce-incentives-incentives-with-icons": {
      name: "e-commerce-incentives-incentives-with-icons",
      description: "A incentives with icons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/incentives/incentives-with-icons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/incentives/incentives-with-icons.tsx"
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
    "e-commerce-incentives-split-image-incentive-section": {
      name: "e-commerce-incentives-split-image-incentive-section",
      description: "A split image incentive section block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/incentives/split-image-incentive-section.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/incentives/split-image-incentive-section.tsx"
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
    },
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
      readiness: "alpha",
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
      readiness: "alpha",
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
    "e-commerce-order-summaries-order-details-in-card-layout": {
      name: "e-commerce-order-summaries-order-details-in-card-layout",
      description: "A order details in card layout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-details-in-card-layout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-details-in-card-layout.tsx"
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
    "e-commerce-order-summaries-order-details-with-payment-method": {
      name: "e-commerce-order-summaries-order-details-with-payment-method",
      description: "A order details with payment method block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-details-with-payment-method.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-details-with-payment-method.tsx"
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
    "e-commerce-order-summaries-order-summary-with-address-details": {
      name: "e-commerce-order-summaries-order-summary-with-address-details",
      description: "A order summary with address details block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-address-details.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-address-details.tsx"
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
    "e-commerce-order-summaries-order-summary-with-billing-form": {
      name: "e-commerce-order-summaries-order-summary-with-billing-form",
      description: "A order summary with billing form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-billing-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-billing-form.tsx"
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
      readiness: "alpha",
    },
    "e-commerce-order-summaries-order-summary-with-checkout": {
      name: "e-commerce-order-summaries-order-summary-with-checkout",
      description: "A order summary with checkout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-checkout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-checkout.tsx"
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
      readiness: "alpha",
    },
    "e-commerce-order-summaries-order-summary-with-customer-information": {
      name: "e-commerce-order-summaries-order-summary-with-customer-information",
      description: "A order summary with customer information block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-customer-information.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-customer-information.tsx"
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
    "e-commerce-order-summaries-order-summary-with-customer-information-and-stepper":
      {
        name: "e-commerce-order-summaries-order-summary-with-customer-information-and-stepper",
        description:
          "A order summary with customer information and stepper block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-customer-information-and-stepper.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-customer-information-and-stepper.tsx"
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
    "e-commerce-order-summaries-order-summary-with-delivery-information": {
      name: "e-commerce-order-summaries-order-summary-with-delivery-information",
      description: "A order summary with delivery information block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-delivery-information.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-delivery-information.tsx"
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
    "e-commerce-order-summaries-order-summary-with-dynamic-action": {
      name: "e-commerce-order-summaries-order-summary-with-dynamic-action",
      description: "A order summary with dynamic action block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-dynamic-action.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-dynamic-action.tsx"
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
    "e-commerce-order-summaries-order-summary-with-order-details-payment-and-address":
      {
        name: "e-commerce-order-summaries-order-summary-with-order-details-payment-and-address",
        description:
          "A order summary with order details payment and address block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-order-details-payment-and-address.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-order-details-payment-and-address.tsx"
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
    "e-commerce-order-summaries-order-summary-with-simple-details": {
      name: "e-commerce-order-summaries-order-summary-with-simple-details",
      description: "A order summary with simple details block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-simple-details.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-simple-details.tsx"
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
    "e-commerce-order-summaries-order-summary-with-stepper-and-sidebar": {
      name: "e-commerce-order-summaries-order-summary-with-stepper-and-sidebar",
      description: "A order summary with stepper and sidebar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-stepper-and-sidebar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-stepper-and-sidebar.tsx"
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
    "e-commerce-order-summaries-order-summary-with-tabs": {
      name: "e-commerce-order-summaries-order-summary-with-tabs",
      description: "A order summary with tabs block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-tabs.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-tabs.tsx"
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
    "e-commerce-order-summaries-order-summary-with-two-columns-full-order-details":
      {
        name: "e-commerce-order-summaries-order-summary-with-two-columns-full-order-details",
        description:
          "A order summary with two columns full order details block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-two-columns-full-order-details.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/e-commerce/order-summaries/order-summary-with-two-columns-full-order-details.tsx"
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
    "e-commerce-order-summaries-splitted-order-summary": {
      name: "e-commerce-order-summaries-splitted-order-summary",
      description: "A splitted order summary block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-summaries/splitted-order-summary.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-summaries/splitted-order-summary.tsx"
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
    "e-commerce-order-summaries-tailwind-order-summary-with-details": {
      name: "e-commerce-order-summaries-tailwind-order-summary-with-details",
      description: "A tailwind order summary with details block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-summaries/tailwind-order-summary-with-details.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-summaries/tailwind-order-summary-with-details.tsx"
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
    "e-commerce-order-tracking-default-order-tracking": {
      name: "e-commerce-order-tracking-default-order-tracking",
      description: "A default order tracking block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/default-order-tracking.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/default-order-tracking.tsx"
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
    "e-commerce-order-tracking-order-tracking-with-cards": {
      name: "e-commerce-order-tracking-order-tracking-with-cards",
      description: "A order tracking with cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-cards.tsx"
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
    "e-commerce-order-tracking-order-tracking-with-cta": {
      name: "e-commerce-order-tracking-order-tracking-with-cta",
      description: "A order tracking with cta block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-cta.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-cta.tsx"
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
    "e-commerce-order-tracking-order-tracking-with-horizontal-steps": {
      name: "e-commerce-order-tracking-order-tracking-with-horizontal-steps",
      description: "A order tracking with horizontal steps block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-horizontal-steps.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-horizontal-steps.tsx"
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
    "e-commerce-order-tracking-order-tracking-with-location-indication": {
      name: "e-commerce-order-tracking-order-tracking-with-location-indication",
      description: "A order tracking with location indication block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-location-indication.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-location-indication.tsx"
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
    "e-commerce-order-tracking-order-tracking-with-map-indication": {
      name: "e-commerce-order-tracking-order-tracking-with-map-indication",
      description: "A order tracking with map indication block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-map-indication.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-map-indication.tsx"
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
    "e-commerce-order-tracking-order-tracking-with-progress-indication": {
      name: "e-commerce-order-tracking-order-tracking-with-progress-indication",
      description: "A order tracking with progress indication block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-progress-indication.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-progress-indication.tsx"
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
    "e-commerce-order-tracking-order-tracking-with-vertical-timeline": {
      name: "e-commerce-order-tracking-order-tracking-with-vertical-timeline",
      description: "A order tracking with vertical timeline block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-vertical-timeline.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-vertical-timeline.tsx"
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
    "e-commerce-order-tracking-side-by-side-order-tracking": {
      name: "e-commerce-order-tracking-side-by-side-order-tracking",
      description: "A side by side order tracking block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/side-by-side-order-tracking.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/side-by-side-order-tracking.tsx"
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
    "e-commerce-order-tracking-vertical-order-tracking-timeline": {
      name: "e-commerce-order-tracking-vertical-order-tracking-timeline",
      description: "A vertical order tracking timeline block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/vertical-order-tracking-timeline.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/vertical-order-tracking-timeline.tsx"
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
    "e-commerce-product-list-card-with-full-details": {
      name: "e-commerce-product-list-card-with-full-details",
      description: "A card with full details block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-list/card-with-full-details.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-list/card-with-full-details.tsx"
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
    "e-commerce-product-list-card-with-supporting-text": {
      name: "e-commerce-product-list-card-with-supporting-text",
      description: "A card with supporting text block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-list/card-with-supporting-text.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-list/card-with-supporting-text.tsx"
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
    "e-commerce-product-list-product-list-with-details": {
      name: "e-commerce-product-list-product-list-with-details",
      description: "A product list with details block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-list/product-list-with-details.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-list/product-list-with-details.tsx"
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
    "e-commerce-product-list-static-product-list-with-grid": {
      name: "e-commerce-product-list-static-product-list-with-grid",
      description: "A static product list with grid block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-list/static-product-list-with-grid.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-list/static-product-list-with-grid.tsx"
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
    "e-commerce-product-list-tailwind-product-list-with-three-column-grid": {
      name: "e-commerce-product-list-tailwind-product-list-with-three-column-grid",
      description: "A tailwind product list with three column grid block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-list/tailwind-product-list-with-three-column-grid.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-list/tailwind-product-list-with-three-column-grid.tsx"
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
    "e-commerce-product-list-with-horizontal-card": {
      name: "e-commerce-product-list-with-horizontal-card",
      description: "A with horizontal card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-list/with-horizontal-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-list/with-horizontal-card.tsx"
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
    "e-commerce-product-list-with-hover-effect": {
      name: "e-commerce-product-list-with-hover-effect",
      description: "A with hover effect block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-list/with-hover-effect.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-list/with-hover-effect.tsx"
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
    "e-commerce-product-list-with-image-and-description": {
      name: "e-commerce-product-list-with-image-and-description",
      description: "A with image and description block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-list/with-image-and-description.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-list/with-image-and-description.tsx"
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
    "e-commerce-product-list-with-purchase-link": {
      name: "e-commerce-product-list-with-purchase-link",
      description: "A with purchase link block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-list/with-purchase-link.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-list/with-purchase-link.tsx"
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
    "e-commerce-product-list-with-user-rating": {
      name: "e-commerce-product-list-with-user-rating",
      description: "A with user rating block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-list/with-user-rating.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-list/with-user-rating.tsx"
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
    "e-commerce-product-overview-2-column-grid-images-and-description": {
      name: "e-commerce-product-overview-2-column-grid-images-and-description",
      description: "A 2 column grid images and description block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-overview/2-column-grid-images-and-description.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-overview/2-column-grid-images-and-description.tsx"
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
    "e-commerce-product-overview-3-column-grid-with-slider-and-details": {
      name: "e-commerce-product-overview-3-column-grid-with-slider-and-details",
      description: "A 3 column grid with slider and details block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-overview/3-column-grid-with-slider-and-details.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-overview/3-column-grid-with-slider-and-details.tsx"
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
    "e-commerce-product-overview-description-and-vertical-slider-images": {
      name: "e-commerce-product-overview-description-and-vertical-slider-images",
      description: "A description and vertical slider images block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-overview/description-and-vertical-slider-images.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-overview/description-and-vertical-slider-images.tsx"
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
    "e-commerce-product-overview-images-and-description-in-nested-grid": {
      name: "e-commerce-product-overview-images-and-description-in-nested-grid",
      description: "A images and description in nested grid block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-overview/images-and-description-in-nested-grid.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-overview/images-and-description-in-nested-grid.tsx"
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
    "e-commerce-product-overview-masonry-image-and-description": {
      name: "e-commerce-product-overview-masonry-image-and-description",
      description: "A masonry image and description block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-overview/masonry-image-and-description.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-overview/masonry-image-and-description.tsx"
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
    "e-commerce-product-overview-product-image-with-expandable-details": {
      name: "e-commerce-product-overview-product-image-with-expandable-details",
      description: "A product image with expandable details block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-overview/product-image-with-expandable-details.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-overview/product-image-with-expandable-details.tsx"
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
    "e-commerce-product-overview-split-image-slider-with-details": {
      name: "e-commerce-product-overview-split-image-slider-with-details",
      description: "A split image slider with details block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-overview/split-image-slider-with-details.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-overview/split-image-slider-with-details.tsx"
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
    "e-commerce-product-overview-split-with-image-and-description": {
      name: "e-commerce-product-overview-split-with-image-and-description",
      description: "A split with image and description block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-overview/split-with-image-and-description.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-overview/split-with-image-and-description.tsx"
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
    "e-commerce-product-overview-with-image-gallery-and-description": {
      name: "e-commerce-product-overview-with-image-gallery-and-description",
      description: "A with image gallery and description block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-overview/with-image-gallery-and-description.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-overview/with-image-gallery-and-description.tsx"
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
    "e-commerce-product-review-customer-feedback-with-product-image": {
      name: "e-commerce-product-review-customer-feedback-with-product-image",
      description: "A customer feedback with product image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/customer-feedback-with-product-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/customer-feedback-with-product-image.tsx"
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
    "e-commerce-product-review-customer-review-with-cards": {
      name: "e-commerce-product-review-customer-review-with-cards",
      description: "A customer review with cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/customer-review-with-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/customer-review-with-cards.tsx"
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
    "e-commerce-product-review-customer-reviews-with-average-rating": {
      name: "e-commerce-product-review-customer-reviews-with-average-rating",
      description: "A customer reviews with average rating block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/customer-reviews-with-average-rating.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/customer-reviews-with-average-rating.tsx"
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
    "e-commerce-product-review-product-review-with-carousel": {
      name: "e-commerce-product-review-product-review-with-carousel",
      description: "A product review with carousel block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/product-review-with-carousel.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/product-review-with-carousel.tsx"
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
      readiness: "alpha",
    },
    "e-commerce-product-review-product-review-with-rating-icons": {
      name: "e-commerce-product-review-product-review-with-rating-icons",
      description: "A product review with rating icons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/product-review-with-rating-icons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/product-review-with-rating-icons.tsx"
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
      readiness: "alpha",
    },
    "e-commerce-product-review-product-review-with-slider": {
      name: "e-commerce-product-review-product-review-with-slider",
      description: "A product review with slider block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/product-review-with-slider.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/product-review-with-slider.tsx"
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
    "e-commerce-product-review-product-reviews-with-submit-form": {
      name: "e-commerce-product-review-product-reviews-with-submit-form",
      description: "A product reviews with submit form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/product-reviews-with-submit-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/product-reviews-with-submit-form.tsx"
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
    "e-commerce-product-review-ratings-and-feedback-with-slider": {
      name: "e-commerce-product-review-ratings-and-feedback-with-slider",
      description: "A ratings and feedback with slider block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/ratings-and-feedback-with-slider.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/ratings-and-feedback-with-slider.tsx"
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
    "e-commerce-product-review-recent-feedback-with-add-review": {
      name: "e-commerce-product-review-recent-feedback-with-add-review",
      description: "A recent feedback with add review block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/recent-feedback-with-add-review.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/recent-feedback-with-add-review.tsx"
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
    "e-commerce-product-review-review-form-with-detailed-user-review": {
      name: "e-commerce-product-review-review-form-with-detailed-user-review",
      description: "A review form with detailed user review block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/review-form-with-detailed-user-review.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/review-form-with-detailed-user-review.tsx"
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
    "e-commerce-product-review-review-in-masonry-structure": {
      name: "e-commerce-product-review-review-in-masonry-structure",
      description: "A review in masonry structure block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/review-in-masonry-structure.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/review-in-masonry-structure.tsx"
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
    "e-commerce-product-review-review-page-with-filters-review-page": {
      name: "e-commerce-product-review-review-page-with-filters-review-page",
      description: "A review page with filters review page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/review-page-with-filters-review-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/review-page-with-filters-review-page.tsx"
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
    "e-commerce-product-review-review-page-with-summary-chart": {
      name: "e-commerce-product-review-review-page-with-summary-chart",
      description: "A review page with summary chart block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/review-page-with-summary-chart.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/review-page-with-summary-chart.tsx"
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
    "e-commerce-product-review-review-page-with-testimonial": {
      name: "e-commerce-product-review-review-page-with-testimonial",
      description: "A review page with testimonial block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/review-page-with-testimonial.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/review-page-with-testimonial.tsx"
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
    "e-commerce-product-review-tailwind-css-product-review-with-avatars": {
      name: "e-commerce-product-review-tailwind-css-product-review-with-avatars",
      description: "A tailwind css product review with avatars block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/tailwind-css-product-review-with-avatars.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/tailwind-css-product-review-with-avatars.tsx"
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
    "e-commerce-product-review-user-review-with-images": {
      name: "e-commerce-product-review-user-review-with-images",
      description: "A user review with images block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/user-review-with-images.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/user-review-with-images.tsx"
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
    "e-commerce-product-review-user-review-with-star-rating": {
      name: "e-commerce-product-review-user-review-with-star-rating",
      description: "A user review with star rating block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/product-review/user-review-with-star-rating.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/product-review/user-review-with-star-rating.tsx"
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
    "e-commerce-refund-form-basic-refund-application-form": {
      name: "e-commerce-refund-form-basic-refund-application-form",
      description: "A basic refund application form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-form/basic-refund-application-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-form/basic-refund-application-form.tsx"
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
    "e-commerce-refund-form-product-reason-selection-form": {
      name: "e-commerce-refund-form-product-reason-selection-form",
      description: "A product reason selection form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-form/product-reason-selection-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-form/product-reason-selection-form.tsx"
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
    "e-commerce-refund-form-refund-request-process": {
      name: "e-commerce-refund-form-refund-request-process",
      description: "A refund request process block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-form/refund-request-process.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-form/refund-request-process.tsx"
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
    "e-commerce-refund-overview-default-refund-overview-list": {
      name: "e-commerce-refund-overview-default-refund-overview-list",
      description: "A default refund overview list block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-overview/default-refund-overview-list.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-overview/default-refund-overview-list.tsx"
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
    "e-commerce-refund-overview-refund-list-with-filter": {
      name: "e-commerce-refund-overview-refund-list-with-filter",
      description: "A refund list with filter block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-overview/refund-list-with-filter.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-overview/refund-list-with-filter.tsx"
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
    "e-commerce-refund-overview-refund-list-with-personal-details": {
      name: "e-commerce-refund-overview-refund-list-with-personal-details",
      description: "A refund list with personal details block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-overview/refund-list-with-personal-details.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-overview/refund-list-with-personal-details.tsx"
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
    "e-commerce-refund-overview-refund-with-cta": {
      name: "e-commerce-refund-overview-refund-with-cta",
      description: "A refund with cta block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-overview/refund-with-cta.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-overview/refund-with-cta.tsx"
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
    "e-commerce-refund-overview-refund-with-table": {
      name: "e-commerce-refund-overview-refund-with-table",
      description: "A refund with table block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-overview/refund-with-table.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-overview/refund-with-table.tsx"
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
      readiness: "alpha",
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
      readiness: "alpha",
    },
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
      readiness: "alpha",
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
      readiness: "alpha",
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
