// @ts-nocheck
import * as React from "react"

export const IndexBlocksFullPagesMaintenancePage: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "beta",
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
  },
}
