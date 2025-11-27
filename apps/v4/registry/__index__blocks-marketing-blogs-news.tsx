// @ts-nocheck
import * as React from "react"

export const IndexBlocksMarketingBlogsNews: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "marketing-blogs-news-alternate-blog-post": {
      name: "marketing-blogs-news-alternate-blog-post",
      description: "A alternate blog post block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/alternate-blog-post.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/alternate-blog-post.tsx"
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
    "marketing-blogs-news-alternate-image-horizontal-blogs": {
      name: "marketing-blogs-news-alternate-image-horizontal-blogs",
      description: "A alternate image horizontal blogs block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/alternate-image-horizontal-blogs.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/alternate-image-horizontal-blogs.tsx"
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
    "marketing-blogs-news-blog-card-with-category-tags": {
      name: "marketing-blogs-news-blog-card-with-category-tags",
      description: "A blog card with category tags block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/blog-card-with-category-tags.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/blog-card-with-category-tags.tsx"
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
    "marketing-blogs-news-blog-card-with-footer": {
      name: "marketing-blogs-news-blog-card-with-footer",
      description: "A blog card with footer block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/blog-card-with-footer.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/blog-card-with-footer.tsx"
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
    "marketing-blogs-news-blog-card-with-image-as-a-background": {
      name: "marketing-blogs-news-blog-card-with-image-as-a-background",
      description: "A blog card with image as a background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/blog-card-with-image-as-a-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/blog-card-with-image-as-a-background.tsx"
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
    "marketing-blogs-news-blog-list-with-on-large-blog": {
      name: "marketing-blogs-news-blog-list-with-on-large-blog",
      description: "A blog list with on large blog block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/blog-list-with-on-large-blog.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/blog-list-with-on-large-blog.tsx"
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
    "marketing-blogs-news-blog-listing-with-highlighted-blog": {
      name: "marketing-blogs-news-blog-listing-with-highlighted-blog",
      description: "A blog listing with highlighted blog block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/blog-listing-with-highlighted-blog.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/blog-listing-with-highlighted-blog.tsx"
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
    "marketing-blogs-news-blog-post-cards-with-bottom-image": {
      name: "marketing-blogs-news-blog-post-cards-with-bottom-image",
      description: "A blog post cards with bottom image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/blog-post-cards-with-bottom-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/blog-post-cards-with-bottom-image.tsx"
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
    "marketing-blogs-news-blog-post-with-badge": {
      name: "marketing-blogs-news-blog-post-with-badge",
      description: "A blog post with badge block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/blog-post-with-badge.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/blog-post-with-badge.tsx"
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
    "marketing-blogs-news-blog-post-with-feature-list": {
      name: "marketing-blogs-news-blog-post-with-feature-list",
      description: "A blog post with feature list block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/blog-post-with-feature-list.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/blog-post-with-feature-list.tsx"
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
    "marketing-blogs-news-blog-post-with-horizontal-single-column": {
      name: "marketing-blogs-news-blog-post-with-horizontal-single-column",
      description: "A blog post with horizontal single column block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/blog-post-with-horizontal-single-column.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/blog-post-with-horizontal-single-column.tsx"
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
    "marketing-blogs-news-blog-post-with-overlay-text": {
      name: "marketing-blogs-news-blog-post-with-overlay-text",
      description: "A blog post with overlay text block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/blog-post-with-overlay-text.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/blog-post-with-overlay-text.tsx"
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
    "marketing-blogs-news-blog-with-expanded-card": {
      name: "marketing-blogs-news-blog-with-expanded-card",
      description: "A blog with expanded card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/blog-with-expanded-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/blog-with-expanded-card.tsx"
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
    "marketing-blogs-news-blogs-with-card-layout-and-scale-effect": {
      name: "marketing-blogs-news-blogs-with-card-layout-and-scale-effect",
      description: "A blogs with card layout and scale effect block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/blogs-with-card-layout-and-scale-effect.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/blogs-with-card-layout-and-scale-effect.tsx"
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
    "marketing-blogs-news-centered-blog-card-slider": {
      name: "marketing-blogs-news-centered-blog-card-slider",
      description: "A centered blog card slider block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/centered-blog-card-slider.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/centered-blog-card-slider.tsx"
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
    "marketing-blogs-news-detailed-article-blog": {
      name: "marketing-blogs-news-detailed-article-blog",
      description: "A detailed article blog block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/detailed-article-blog.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/detailed-article-blog.tsx"
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
    "marketing-blogs-news-detailed-blog-post-card": {
      name: "marketing-blogs-news-detailed-blog-post-card",
      description: "A detailed blog post card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/detailed-blog-post-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/detailed-blog-post-card.tsx"
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
    "marketing-blogs-news-different-grid-layout-with-opacity-effect": {
      name: "marketing-blogs-news-different-grid-layout-with-opacity-effect",
      description: "A different grid layout with opacity effect block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/different-grid-layout-with-opacity-effect.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/different-grid-layout-with-opacity-effect.tsx"
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
    "marketing-blogs-news-different-scale-blog-cards": {
      name: "marketing-blogs-news-different-scale-blog-cards",
      description: "A different scale blog cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/different-scale-blog-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/different-scale-blog-cards.tsx"
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
    "marketing-blogs-news-filter-image-blog-post-slider": {
      name: "marketing-blogs-news-filter-image-blog-post-slider",
      description: "A filter image blog post slider block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/filter-image-blog-post-slider.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/filter-image-blog-post-slider.tsx"
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
    "marketing-blogs-news-full-height-blog-post": {
      name: "marketing-blogs-news-full-height-blog-post",
      description: "A full height blog post block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/full-height-blog-post.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/full-height-blog-post.tsx"
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
    "marketing-blogs-news-highlighted-top-blog": {
      name: "marketing-blogs-news-highlighted-top-blog",
      description: "A highlighted top blog block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/highlighted-top-blog.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/highlighted-top-blog.tsx"
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
    "marketing-blogs-news-horizontal-blog-post": {
      name: "marketing-blogs-news-horizontal-blog-post",
      description: "A horizontal blog post block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/horizontal-blog-post.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/horizontal-blog-post.tsx"
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
    "marketing-blogs-news-informative-blog-with-colorful-cards": {
      name: "marketing-blogs-news-informative-blog-with-colorful-cards",
      description: "A informative blog with colorful cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/informative-blog-with-colorful-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/informative-blog-with-colorful-cards.tsx"
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
    "marketing-blogs-news-large-horizontal-blog-post": {
      name: "marketing-blogs-news-large-horizontal-blog-post",
      description: "A large horizontal blog post block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/large-horizontal-blog-post.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/large-horizontal-blog-post.tsx"
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
    "marketing-blogs-news-latest-blog-with-dark-version": {
      name: "marketing-blogs-news-latest-blog-with-dark-version",
      description: "A latest blog with dark version block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/latest-blog-with-dark-version.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/latest-blog-with-dark-version.tsx"
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
    "marketing-blogs-news-modern-structured-blog-posts": {
      name: "marketing-blogs-news-modern-structured-blog-posts",
      description: "A modern structured blog posts block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/modern-structured-blog-posts.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/modern-structured-blog-posts.tsx"
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
    "marketing-blogs-news-newest-article-blog": {
      name: "marketing-blogs-news-newest-article-blog",
      description: "A newest article blog block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/newest-article-blog.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/newest-article-blog.tsx"
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
    "marketing-blogs-news-one-large-blog-with-three-smaller-blog": {
      name: "marketing-blogs-news-one-large-blog-with-three-smaller-blog",
      description: "A one large blog with three smaller blog block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/one-large-blog-with-three-smaller-blog.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/one-large-blog-with-three-smaller-blog.tsx"
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
    "marketing-blogs-news-partial-blog-cads-slider": {
      name: "marketing-blogs-news-partial-blog-cads-slider",
      description: "A partial blog cads slider block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/partial-blog-cads-slider.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/partial-blog-cads-slider.tsx"
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
    "marketing-blogs-news-side-by-side-blog-post-layout": {
      name: "marketing-blogs-news-side-by-side-blog-post-layout",
      description: "A side by side blog post layout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/side-by-side-blog-post-layout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/side-by-side-blog-post-layout.tsx"
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
    "marketing-blogs-news-simple-blog-card-with-badge": {
      name: "marketing-blogs-news-simple-blog-card-with-badge",
      description: "A simple blog card with badge block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/simple-blog-card-with-badge.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/simple-blog-card-with-badge.tsx"
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
    "marketing-blogs-news-simple-blog-post": {
      name: "marketing-blogs-news-simple-blog-post",
      description: "A simple blog post block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/simple-blog-post.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/simple-blog-post.tsx"
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
    "marketing-blogs-news-simple-three-column-blog-component": {
      name: "marketing-blogs-news-simple-three-column-blog-component",
      description: "A simple three column blog component block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/simple-three-column-blog-component.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/simple-three-column-blog-component.tsx"
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
    "marketing-blogs-news-single-blog-post-as-carousel": {
      name: "marketing-blogs-news-single-blog-post-as-carousel",
      description: "A single blog post as carousel block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/single-blog-post-as-carousel.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/single-blog-post-as-carousel.tsx"
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
    "marketing-blogs-news-tailwind-blog-card-with-two-columns-and-image": {
      name: "marketing-blogs-news-tailwind-blog-card-with-two-columns-and-image",
      description: "A tailwind blog card with two columns and image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-card-with-two-columns-and-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-card-with-two-columns-and-image.tsx"
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
    "marketing-blogs-news-tailwind-blog-cards-with-slider": {
      name: "marketing-blogs-news-tailwind-blog-cards-with-slider",
      description: "A tailwind blog cards with slider block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-cards-with-slider.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-cards-with-slider.tsx"
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
    "marketing-blogs-news-tailwind-blog-component-with-background-images": {
      name: "marketing-blogs-news-tailwind-blog-component-with-background-images",
      description: "A tailwind blog component with background images block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-component-with-background-images.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-component-with-background-images.tsx"
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
    "marketing-blogs-news-tailwind-blog-grid-layout-with-scale-effect": {
      name: "marketing-blogs-news-tailwind-blog-grid-layout-with-scale-effect",
      description: "A tailwind blog grid layout with scale effect block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-grid-layout-with-scale-effect.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-grid-layout-with-scale-effect.tsx"
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
    "marketing-blogs-news-tailwind-blog-post-with-feature-list": {
      name: "marketing-blogs-news-tailwind-blog-post-with-feature-list",
      description: "A tailwind blog post with feature list block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-post-with-feature-list.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-post-with-feature-list.tsx"
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
    "marketing-blogs-news-tailwind-blog-post-with-gradient-hover": {
      name: "marketing-blogs-news-tailwind-blog-post-with-gradient-hover",
      description: "A tailwind blog post with gradient hover block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-post-with-gradient-hover.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-post-with-gradient-hover.tsx"
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
    "marketing-blogs-news-tailwind-blog-three-column-grid": {
      name: "marketing-blogs-news-tailwind-blog-three-column-grid",
      description: "A tailwind blog three column grid block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-three-column-grid.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-three-column-grid.tsx"
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
    "marketing-blogs-news-tailwind-blog-with-creative-image-layout": {
      name: "marketing-blogs-news-tailwind-blog-with-creative-image-layout",
      description: "A tailwind blog with creative image layout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-with-creative-image-layout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-with-creative-image-layout.tsx"
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
    "marketing-blogs-news-tailwind-blog-with-different-card-layout": {
      name: "marketing-blogs-news-tailwind-blog-with-different-card-layout",
      description: "A tailwind blog with different card layout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-with-different-card-layout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-with-different-card-layout.tsx"
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
    "marketing-blogs-news-tailwind-blog-with-gradient-background": {
      name: "marketing-blogs-news-tailwind-blog-with-gradient-background",
      description: "A tailwind blog with gradient background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-with-gradient-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-with-gradient-background.tsx"
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
    "marketing-blogs-news-tailwind-blog-with-horizontal-cards": {
      name: "marketing-blogs-news-tailwind-blog-with-horizontal-cards",
      description: "A tailwind blog with horizontal cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-with-horizontal-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-with-horizontal-cards.tsx"
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
    "marketing-blogs-news-tailwind-blog-with-testimonials": {
      name: "marketing-blogs-news-tailwind-blog-with-testimonials",
      description: "A tailwind blog with testimonials block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-with-testimonials.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blog-with-testimonials.tsx"
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
    "marketing-blogs-news-tailwind-blogs-with-card-layout-and-grayscale-effect":
      {
        name: "marketing-blogs-news-tailwind-blogs-with-card-layout-and-grayscale-effect",
        description:
          "A tailwind blogs with card layout and grayscale effect block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blogs-with-card-layout-and-grayscale-effect.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-blogs-with-card-layout-and-grayscale-effect.tsx"
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
    "marketing-blogs-news-tailwind-cards-with-different-layout": {
      name: "marketing-blogs-news-tailwind-cards-with-different-layout",
      description: "A tailwind cards with different layout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-cards-with-different-layout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-cards-with-different-layout.tsx"
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
    "marketing-blogs-news-tailwind-css-blog-carousel": {
      name: "marketing-blogs-news-tailwind-css-blog-carousel",
      description: "A tailwind css blog carousel block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/tailwind-css-blog-carousel.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/tailwind-css-blog-carousel.tsx"
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
    "marketing-blogs-news-theree-column-with-tag-overlap": {
      name: "marketing-blogs-news-theree-column-with-tag-overlap",
      description: "A theree column with tag overlap block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/theree-column-with-tag-overlap.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/theree-column-with-tag-overlap.tsx"
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
    "marketing-blogs-news-three-column-blog-list": {
      name: "marketing-blogs-news-three-column-blog-list",
      description: "A three column blog list block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/three-column-blog-list.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/three-column-blog-list.tsx"
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
    "marketing-blogs-news-three-column-blog-with-image": {
      name: "marketing-blogs-news-three-column-blog-with-image",
      description: "A three column blog with image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/three-column-blog-with-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/three-column-blog-with-image.tsx"
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
    "marketing-blogs-news-three-column-with-border": {
      name: "marketing-blogs-news-three-column-with-border",
      description: "A three column with border block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/three-column-with-border.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/three-column-with-border.tsx"
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
    "marketing-blogs-news-top-large-blog-post": {
      name: "marketing-blogs-news-top-large-blog-post",
      description: "A top large blog post block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/top-large-blog-post.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/top-large-blog-post.tsx"
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
    "marketing-blogs-news-trendy-latets-blog-post": {
      name: "marketing-blogs-news-trendy-latets-blog-post",
      description: "A trendy latets blog post block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/trendy-latets-blog-post.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/trendy-latets-blog-post.tsx"
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
    "marketing-blogs-news-two-column-blog-post-with-name-overlap": {
      name: "marketing-blogs-news-two-column-blog-post-with-name-overlap",
      description: "A two column blog post with name overlap block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/two-column-blog-post-with-name-overlap.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/two-column-blog-post-with-name-overlap.tsx"
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
    "marketing-blogs-news-two-column-blog-with-image": {
      name: "marketing-blogs-news-two-column-blog-with-image",
      description: "A two column blog with image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/two-column-blog-with-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/two-column-blog-with-image.tsx"
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
    "marketing-blogs-news-vertical-blog-post-list": {
      name: "marketing-blogs-news-vertical-blog-post-list",
      description: "A vertical blog post list block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/vertical-blog-post-list.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/vertical-blog-post-list.tsx"
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
    "marketing-blogs-news-vertical-feature-blog-list": {
      name: "marketing-blogs-news-vertical-feature-blog-list",
      description: "A vertical feature blog list block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/blogs-news/vertical-feature-blog-list.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/blogs-news/vertical-feature-blog-list.tsx"
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
