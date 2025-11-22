import * as React from "react"

export const IndexBlocksFullPagesOtp: Record<string, Record<string, any>> = {
  "new-york-v4": {
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "beta",
    },
  },
}
