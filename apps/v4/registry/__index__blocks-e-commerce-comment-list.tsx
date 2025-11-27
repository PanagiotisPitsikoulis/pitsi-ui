// @ts-nocheck
import * as React from "react"

export const IndexBlocksECommerceCommentList: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
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
      readiness: "alpha",
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
  },
}
