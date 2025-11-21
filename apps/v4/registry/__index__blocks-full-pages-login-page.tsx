import * as React from "react"

export const IndexBlocksFullPagesLoginPage: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "login-01": {
      name: "login-01",
      description: "A simple login form.",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label", "field"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-01/page.tsx",
          type: "registry:page",
          target: "app/login/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-01/components/login-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/login-01/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "login"],
      meta: undefined,
      tier: "pro",
    },
    "login-02": {
      name: "login-02",
      description: "A two column login page with a cover image.",
      type: "registry:block",
      registryDependencies: ["button", "input", "label", "field"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-02/page.tsx",
          type: "registry:page",
          target: "app/login/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-02/components/login-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/login-02/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "login"],
      meta: undefined,
      tier: "pro",
    },
    "login-03": {
      name: "login-03",
      description: "A login page with a muted background color.",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label", "field"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-03/page.tsx",
          type: "registry:page",
          target: "app/login/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-03/components/login-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/login-03/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "login"],
      meta: undefined,
      tier: "pro",
    },
    "login-04": {
      name: "login-04",
      description: "A login page with form and image.",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label", "field"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-04/page.tsx",
          type: "registry:page",
          target: "app/login/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-04/components/login-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/login-04/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "login"],
      meta: undefined,
      tier: "pro",
    },
    "login-05": {
      name: "login-05",
      description: "A simple email-only login page.",
      type: "registry:block",
      registryDependencies: ["button", "input", "label", "field"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-05/page.tsx",
          type: "registry:page",
          target: "app/login/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-05/components/login-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/login-05/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "login"],
      meta: undefined,
      tier: "pro",
    },
    "signup-01": {
      name: "signup-01",
      description: "A simple signup form.",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/signup-01/page.tsx",
          type: "registry:page",
          target: "app/signup/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/signup-01/components/signup-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/signup-01/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "signup"],
      meta: undefined,
      tier: "pro",
    },
    "signup-02": {
      name: "signup-02",
      description: "A two column signup page with a cover image.",
      type: "registry:block",
      registryDependencies: ["button", "input", "label", "field"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/signup-02/page.tsx",
          type: "registry:page",
          target: "app/signup/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/signup-02/components/signup-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/signup-02/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "signup"],
      meta: undefined,
      tier: "pro",
    },
    "signup-03": {
      name: "signup-03",
      description: "A signup page with a muted background color.",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label", "field"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/signup-03/page.tsx",
          type: "registry:page",
          target: "app/signup/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/signup-03/components/signup-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/signup-03/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "signup"],
      meta: undefined,
      tier: "pro",
    },
    "signup-04": {
      name: "signup-04",
      description: "A signup page with form and image.",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label", "field"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/signup-04/page.tsx",
          type: "registry:page",
          target: "app/signup/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/signup-04/components/signup-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/signup-04/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "signup"],
      meta: undefined,
      tier: "pro",
    },
    "signup-05": {
      name: "signup-05",
      description: "A simple signup form with social providers.",
      type: "registry:block",
      registryDependencies: ["button", "input", "label"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/signup-05/page.tsx",
          type: "registry:page",
          target: "app/signup/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/signup-05/components/signup-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/signup-05/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "signup"],
      meta: undefined,
      tier: "pro",
    },
    "full-pages-login-page-login-form-with-gradient-background": {
      name: "full-pages-login-page-login-form-with-gradient-background",
      description: "A login form with gradient background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-form-with-gradient-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/login-form-with-gradient-background.tsx"
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
    "full-pages-login-page-login-page-with-cta-button-illustrations": {
      name: "full-pages-login-page-login-page-with-cta-button-illustrations",
      description: "A login page with cta button illustrations block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-page-with-cta-button-illustrations.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/login-page-with-cta-button-illustrations.tsx"
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
    "full-pages-login-page-login-page-with-gradient-background-form": {
      name: "full-pages-login-page-login-page-with-gradient-background-form",
      description: "A login page with gradient background form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-page-with-gradient-background-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/login-page-with-gradient-background-form.tsx"
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
    "full-pages-login-page-login-page-with-gradient-background-image": {
      name: "full-pages-login-page-login-page-with-gradient-background-image",
      description: "A login page with gradient background image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-page-with-gradient-background-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/login-page-with-gradient-background-image.tsx"
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
    "full-pages-login-page-login-page-with-split-form": {
      name: "full-pages-login-page-login-page-with-split-form",
      description: "A login page with split form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-page-with-split-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/login-page-with-split-form.tsx"
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
    "full-pages-login-page-login-with-social-media-button": {
      name: "full-pages-login-page-login-with-social-media-button",
      description: "A login with social media button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/login-page/login-with-social-media-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/login-page/login-with-social-media-button.tsx"
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
