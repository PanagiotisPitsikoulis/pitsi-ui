// @ts-nocheck
import * as React from "react"

export const IndexBlocksFullPages: Record<string, Record<string, any>> = {
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
    },
    "otp-01": {
      name: "otp-01",
      description: "A simple OTP verification form.",
      type: "registry:block",
      registryDependencies: ["button", "card", "input-otp", "label", "field"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/otp/otp-01/page.tsx",
          type: "registry:page",
          target: "app/otp/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/otp/otp-01/components/otp-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/otp/otp-01/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "otp"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "otp-02": {
      name: "otp-02",
      description: "A two column OTP page with a cover image.",
      type: "registry:block",
      registryDependencies: ["button", "input-otp", "label", "field"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/otp/otp-02/page.tsx",
          type: "registry:page",
          target: "app/otp/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/otp/otp-02/components/otp-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/otp/otp-02/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "otp"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "otp-03": {
      name: "otp-03",
      description: "An OTP page with a muted background color.",
      type: "registry:block",
      registryDependencies: ["button", "card", "input-otp", "label", "field"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/otp/otp-03/page.tsx",
          type: "registry:page",
          target: "app/otp/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/otp/otp-03/components/otp-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/otp/otp-03/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "otp"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "otp-04": {
      name: "otp-04",
      description: "An OTP page with form and image.",
      type: "registry:block",
      registryDependencies: ["button", "card", "input-otp", "label", "field"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/otp/otp-04/page.tsx",
          type: "registry:page",
          target: "app/otp/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/otp/otp-04/components/otp-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/otp/otp-04/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "otp"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "otp-05": {
      name: "otp-05",
      description: "A simple OTP form with social providers.",
      type: "registry:block",
      registryDependencies: ["button", "input-otp", "label", "field"],
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/otp/otp-05/page.tsx",
          type: "registry:page",
          target: "app/otp/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/full-pages/otp/otp-05/components/otp-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/otp/otp-05/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages", "otp"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "full-pages-404-page-404-error-page-with-illustration": {
      name: "full-pages-404-page-404-error-page-with-illustration",
      description: "A 404 error page with illustration block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/404-page/404-error-page-with-illustration.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/404-page/404-error-page-with-illustration.tsx"
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
      readiness: "beta",
    },
    "full-pages-404-page-404-page-with-cta-button": {
      name: "full-pages-404-page-404-page-with-cta-button",
      description: "A 404 page with cta button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/404-page/404-page-with-cta-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/404-page/404-page-with-cta-button.tsx"
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
      readiness: "beta",
    },
    "full-pages-404-page-default-404-page": {
      name: "full-pages-404-page-default-404-page",
      description: "A default 404 page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/404-page/default-404-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/404-page/default-404-page.tsx"
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
      readiness: "alpha",
    },
    "full-pages-404-page-side-by-side-404-tailwind-page": {
      name: "full-pages-404-page-side-by-side-404-tailwind-page",
      description: "A side by side 404 tailwind page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/404-page/side-by-side-404-tailwind-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/404-page/side-by-side-404-tailwind-page.tsx"
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
      readiness: "alpha",
    },
    "full-pages-404-page-svg-illustration-with-search-bar": {
      name: "full-pages-404-page-svg-illustration-with-search-bar",
      description: "A svg illustration with search bar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/404-page/svg-illustration-with-search-bar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/404-page/svg-illustration-with-search-bar.tsx"
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
      readiness: "alpha",
    },
    "full-pages-about-us-page-about-us-with-hero-section-and-tile-view": {
      name: "full-pages-about-us-page-about-us-with-hero-section-and-tile-view",
      description: "A about us with hero section and tile view block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-hero-section-and-tile-view.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-hero-section-and-tile-view.tsx"
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
      readiness: "beta",
    },
    "full-pages-about-us-page-about-us-with-image-tiles": {
      name: "full-pages-about-us-page-about-us-with-image-tiles",
      description: "A about us with image tiles block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-image-tiles.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-image-tiles.tsx"
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
      readiness: "beta",
    },
    "full-pages-about-us-page-about-us-with-team-and-stats": {
      name: "full-pages-about-us-page-about-us-with-team-and-stats",
      description: "A about us with team and stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-team-and-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-team-and-stats.tsx"
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
      readiness: "alpha",
    },
    "full-pages-about-us-page-about-us-with-two-column-grid-images-and-description":
      {
        name: "full-pages-about-us-page-about-us-with-two-column-grid-images-and-description",
        description:
          "A about us with two column grid images and description block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-two-column-grid-images-and-description.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-two-column-grid-images-and-description.tsx"
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
        readiness: "alpha",
      },
    "full-pages-blog-details-blog-page-with-full-screen-image-and-two-column-grid":
      {
        name: "full-pages-blog-details-blog-page-with-full-screen-image-and-two-column-grid",
        description:
          "A blog page with full screen image and two column grid block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/blog-details/blog-page-with-full-screen-image-and-two-column-grid.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/blog-details/blog-page-with-full-screen-image-and-two-column-grid.tsx"
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
        readiness: "beta",
      },
    "full-pages-blog-details-blog-page-with-images-and-image-grid": {
      name: "full-pages-blog-details-blog-page-with-images-and-image-grid",
      description: "A blog page with images and image grid block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/blog-details/blog-page-with-images-and-image-grid.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/blog-details/blog-page-with-images-and-image-grid.tsx"
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
      readiness: "beta",
    },
    "full-pages-blog-details-simple-blog-details-page": {
      name: "full-pages-blog-details-simple-blog-details-page",
      description: "A simple blog details page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/blog-details/simple-blog-details-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/blog-details/simple-blog-details-page.tsx"
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
      readiness: "alpha",
    },
    "full-pages-career-pages-career-list-and-card-with-hover-effect": {
      name: "full-pages-career-pages-career-list-and-card-with-hover-effect",
      description: "A career list and card with hover effect block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/career-pages/career-list-and-card-with-hover-effect.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/career-pages/career-list-and-card-with-hover-effect.tsx"
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
      readiness: "beta",
    },
    "full-pages-career-pages-career-page-with-creative-image-layout-carousel-slider":
      {
        name: "full-pages-career-pages-career-page-with-creative-image-layout-carousel-slider",
        description:
          "A career page with creative image layout carousel slider block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/career-pages/career-page-with-creative-image-layout-carousel-slider.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/career-pages/career-page-with-creative-image-layout-carousel-slider.tsx"
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
        readiness: "beta",
      },
    "full-pages-career-pages-career-page-with-description-feature-list-icons-horizontal-stats":
      {
        name: "full-pages-career-pages-career-page-with-description-feature-list-icons-horizontal-stats",
        description:
          "A career page with description feature list icons horizontal stats block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/career-pages/career-page-with-description-feature-list-icons-horizontal-stats.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/career-pages/career-page-with-description-feature-list-icons-horizontal-stats.tsx"
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
        readiness: "alpha",
      },
    "full-pages-career-pages-career-page-with-three-column-blog-image-feature-list-with-hover":
      {
        name: "full-pages-career-pages-career-page-with-three-column-blog-image-feature-list-with-hover",
        description:
          "A career page with three column blog image feature list with hover block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/career-pages/career-page-with-three-column-blog-image-feature-list-with-hover.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/career-pages/career-page-with-three-column-blog-image-feature-list-with-hover.tsx"
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
        readiness: "alpha",
      },
    "full-pages-coming-soon-page-basic-coming-soon-page": {
      name: "full-pages-coming-soon-page-basic-coming-soon-page",
      description: "A basic coming soon page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/coming-soon-page/basic-coming-soon-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/coming-soon-page/basic-coming-soon-page.tsx"
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
      readiness: "beta",
    },
    "full-pages-coming-soon-page-circular-countdown-coming-soon-page": {
      name: "full-pages-coming-soon-page-circular-countdown-coming-soon-page",
      description: "A circular countdown coming soon page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/coming-soon-page/circular-countdown-coming-soon-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/coming-soon-page/circular-countdown-coming-soon-page.tsx"
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
      readiness: "beta",
    },
    "full-pages-coming-soon-page-dark-tailwinds-are-coming-soon": {
      name: "full-pages-coming-soon-page-dark-tailwinds-are-coming-soon",
      description: "A dark tailwinds are coming soon block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/coming-soon-page/dark-tailwinds-are-coming-soon.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/coming-soon-page/dark-tailwinds-are-coming-soon.tsx"
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
      readiness: "alpha",
    },
    "full-pages-coming-soon-page-splitted-coming-soon-page": {
      name: "full-pages-coming-soon-page-splitted-coming-soon-page",
      description: "A splitted coming soon page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/coming-soon-page/splitted-coming-soon-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/coming-soon-page/splitted-coming-soon-page.tsx"
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
      readiness: "alpha",
    },
    "full-pages-coming-soon-page-tailwind-is-coming-soon": {
      name: "full-pages-coming-soon-page-tailwind-is-coming-soon",
      description: "A tailwind is coming soon block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/coming-soon-page/tailwind-is-coming-soon.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/coming-soon-page/tailwind-is-coming-soon.tsx"
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
      readiness: "alpha",
    },
    "full-pages-coming-soon-page-tailwind-is-coming-soon-with-a-gradient-background":
      {
        name: "full-pages-coming-soon-page-tailwind-is-coming-soon-with-a-gradient-background",
        description:
          "A tailwind is coming soon with a gradient background block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/coming-soon-page/tailwind-is-coming-soon-with-a-gradient-background.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/coming-soon-page/tailwind-is-coming-soon-with-a-gradient-background.tsx"
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
        readiness: "alpha",
      },
    "full-pages-contactus-page-contact-us-form-with-background-and-svg-icon": {
      name: "full-pages-contactus-page-contact-us-form-with-background-and-svg-icon",
      description: "A contact us form with background and svg icon block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-form-with-background-and-svg-icon.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-form-with-background-and-svg-icon.tsx"
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
      readiness: "beta",
    },
    "full-pages-contactus-page-contact-us-with-feature-list-card-with-email-sign-up":
      {
        name: "full-pages-contactus-page-contact-us-with-feature-list-card-with-email-sign-up",
        description:
          "A contact us with feature list card with email sign up block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-with-feature-list-card-with-email-sign-up.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-with-feature-list-card-with-email-sign-up.tsx"
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
        readiness: "beta",
      },
    "full-pages-contactus-page-contact-us-with-form-background": {
      name: "full-pages-contactus-page-contact-us-with-form-background",
      description: "A contact us with form background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-with-form-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-with-form-background.tsx"
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
      readiness: "alpha",
    },
    "full-pages-contactus-page-contact-us-with-gradient-background-image": {
      name: "full-pages-contactus-page-contact-us-with-gradient-background-image",
      description: "A contact us with gradient background image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-with-gradient-background-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-with-gradient-background-image.tsx"
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
      readiness: "alpha",
    },
    "full-pages-legal-pages-legal-page-with-gradient-background-heading": {
      name: "full-pages-legal-pages-legal-page-with-gradient-background-heading",
      description: "A legal page with gradient background heading block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/legal-pages/legal-page-with-gradient-background-heading.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/legal-pages/legal-page-with-gradient-background-heading.tsx"
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
      readiness: "beta",
    },
    "full-pages-legal-pages-legal-page-with-list-background": {
      name: "full-pages-legal-pages-legal-page-with-list-background",
      description: "A legal page with list background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/legal-pages/legal-page-with-list-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/legal-pages/legal-page-with-list-background.tsx"
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
      readiness: "beta",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
    },
    "full-pages-maintenance-page-default-maintenance-page": {
      name: "full-pages-maintenance-page-default-maintenance-page",
      description: "A default maintenance page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/maintenance-page/default-maintenance-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/maintenance-page/default-maintenance-page.tsx"
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
      readiness: "beta",
    },
    "full-pages-maintenance-page-maintenance-page-with-countdown": {
      name: "full-pages-maintenance-page-maintenance-page-with-countdown",
      description: "A maintenance page with countdown block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/maintenance-page/maintenance-page-with-countdown.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/maintenance-page/maintenance-page-with-countdown.tsx"
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
      readiness: "beta",
    },
    "full-pages-maintenance-page-maintenance-page-with-logo": {
      name: "full-pages-maintenance-page-maintenance-page-with-logo",
      description: "A maintenance page with logo block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/maintenance-page/maintenance-page-with-logo.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/maintenance-page/maintenance-page-with-logo.tsx"
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
      readiness: "alpha",
    },
    "full-pages-maintenance-page-maintenance-page-with-social-links": {
      name: "full-pages-maintenance-page-maintenance-page-with-social-links",
      description: "A maintenance page with social links block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/maintenance-page/maintenance-page-with-social-links.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/maintenance-page/maintenance-page-with-social-links.tsx"
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
      readiness: "alpha",
    },
    "full-pages-maintenance-page-splitted-under-maintenance-page": {
      name: "full-pages-maintenance-page-splitted-under-maintenance-page",
      description: "A splitted under maintenance page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/maintenance-page/splitted-under-maintenance-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/maintenance-page/splitted-under-maintenance-page.tsx"
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
      readiness: "alpha",
    },
    "full-pages-maintenance-page-tailwind-maintenance-page-with-illustration": {
      name: "full-pages-maintenance-page-tailwind-maintenance-page-with-illustration",
      description: "A tailwind maintenance page with illustration block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/maintenance-page/tailwind-maintenance-page-with-illustration.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/maintenance-page/tailwind-maintenance-page-with-illustration.tsx"
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
      readiness: "alpha",
    },
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
      readiness: "beta",
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
        readiness: "beta",
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
      readiness: "alpha",
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
      readiness: "alpha",
    },
  },
}
