import * as React from "react"

export const IndexBlocksApplicationApplicationShell: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "application-application-shell-advanced-layout-with-collapsable-sidebar": {
      name: "application-application-shell-advanced-layout-with-collapsable-sidebar",
      description: "A advanced layout with collapsable sidebar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/application-shell/advanced-layout-with-collapsable-sidebar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/application-shell/advanced-layout-with-collapsable-sidebar.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "application-application-shell-advanced-layout-with-double-sidebar-layout":
      {
        name: "application-application-shell-advanced-layout-with-double-sidebar-layout",
        description: "A advanced layout with double sidebar layout block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/application/application-shell/advanced-layout-with-double-sidebar-layout.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/application/application-shell/advanced-layout-with-double-sidebar-layout.tsx"
          )
          const exportName =
            Object.keys(mod).find(
              (key) =>
                typeof mod[key] === "function" || typeof mod[key] === "object"
            ) || item.name
          return { default: mod.default || mod[exportName] }
        }),
        categories: ["application"],
        meta: undefined,
        tier: "free",
        readiness: "beta",
      },
    "application-application-shell-alternate-style-of-application-shell": {
      name: "application-application-shell-alternate-style-of-application-shell",
      description: "A alternate style of application shell block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/application-shell/alternate-style-of-application-shell.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/application-shell/alternate-style-of-application-shell.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "application-application-shell-application-shell-with-navbar": {
      name: "application-application-shell-application-shell-with-navbar",
      description: "A application shell with navbar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/application-shell/application-shell-with-navbar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/application-shell/application-shell-with-navbar.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
      readiness: "beta",
    },
    "application-application-shell-appplication-shell-with-background": {
      name: "application-application-shell-appplication-shell-with-background",
      description: "A appplication shell with background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/application-shell/appplication-shell-with-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/application-shell/appplication-shell-with-background.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
      readiness: "beta",
    },
    "application-application-shell-creative-dashboard-layout-tailwind": {
      name: "application-application-shell-creative-dashboard-layout-tailwind",
      description: "A creative dashboard layout tailwind block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/application-shell/creative-dashboard-layout-tailwind.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/application-shell/creative-dashboard-layout-tailwind.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "application-application-shell-dashboard-layout-with-collapsable-sidebar": {
      name: "application-application-shell-dashboard-layout-with-collapsable-sidebar",
      description: "A dashboard layout with collapsable sidebar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/application-shell/dashboard-layout-with-collapsable-sidebar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/application-shell/dashboard-layout-with-collapsable-sidebar.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "application-application-shell-dashboard-layout-with-navbar": {
      name: "application-application-shell-dashboard-layout-with-navbar",
      description: "A dashboard layout with navbar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/application-shell/dashboard-layout-with-navbar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/application-shell/dashboard-layout-with-navbar.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "application-application-shell-shell-layout-with-expandable-sidebar": {
      name: "application-application-shell-shell-layout-with-expandable-sidebar",
      description: "A shell layout with expandable sidebar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/application-shell/shell-layout-with-expandable-sidebar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/application-shell/shell-layout-with-expandable-sidebar.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "application-application-shell-stacked-layout-with-multiple-navbars": {
      name: "application-application-shell-stacked-layout-with-multiple-navbars",
      description: "A stacked layout with multiple navbars block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/application-shell/stacked-layout-with-multiple-navbars.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/application-shell/stacked-layout-with-multiple-navbars.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
  },
}
