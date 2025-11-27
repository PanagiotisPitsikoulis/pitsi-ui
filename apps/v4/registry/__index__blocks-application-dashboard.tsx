// @ts-nocheck
import * as React from "react"

export const IndexBlocksApplicationDashboard: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "dashboard-01": {
      name: "dashboard-01",
      description: "A dashboard with sidebar, charts and data table.",
      type: "registry:block",
      registryDependencies: [
        "sidebar",
        "breadcrumb",
        "separator",
        "label",
        "chart",
        "card",
        "select",
        "tabs",
        "table",
        "toggle-group",
        "badge",
        "button",
        "checkbox",
        "dropdown-menu",
        "drawer",
        "input",
        "avatar",
        "sheet",
        "sonner",
      ],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/dashboard-01/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/dashboard-01/data.json",
          type: "registry:file",
          target: "app/dashboard/data.json",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/dashboard-01/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/dashboard-01/components/chart-area-interactive.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/dashboard-01/components/data-table.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/dashboard-01/components/nav-documents.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/dashboard-01/components/nav-main.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/dashboard-01/components/nav-secondary.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/dashboard-01/components/nav-user.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/dashboard-01/components/section-cards.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/dashboard-01/components/site-header.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/dashboard-01/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["dashboard"],
      meta: { iframeHeight: "1000px" },
      tier: "free",
      readiness: "beta",
    },
    "sidebar-01": {
      name: "sidebar-01",
      description: "A simple sidebar with navigation grouped by section.",
      type: "registry:block",
      registryDependencies: [
        "sidebar",
        "breadcrumb",
        "separator",
        "label",
        "dropdown-menu",
      ],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-01/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-01/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-01/components/search-form.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-01/components/version-switcher.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-01/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "sidebar-02": {
      name: "sidebar-02",
      description: "A sidebar with collapsible sections.",
      type: "registry:block",
      registryDependencies: [
        "sidebar",
        "breadcrumb",
        "separator",
        "label",
        "dropdown-menu",
      ],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-02/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-02/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-02/components/search-form.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-02/components/version-switcher.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-02/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "sidebar-03": {
      name: "sidebar-03",
      description: "A sidebar with submenus.",
      type: "registry:block",
      registryDependencies: ["sidebar", "breadcrumb"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-03/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-03/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-03/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "sidebar-04": {
      name: "sidebar-04",
      description: "A floating sidebar with submenus.",
      type: "registry:block",
      registryDependencies: ["sidebar", "breadcrumb", "separator"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-04/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-04/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-04/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "sidebar-05": {
      name: "sidebar-05",
      description: "A sidebar with collapsible submenus.",
      type: "registry:block",
      registryDependencies: [
        "sidebar",
        "breadcrumb",
        "separator",
        "label",
        "collapsible",
      ],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-05/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-05/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-05/components/search-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-05/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "sidebar-06": {
      name: "sidebar-06",
      description: "A sidebar with submenus as dropdowns.",
      type: "registry:block",
      registryDependencies: [
        "sidebar",
        "breadcrumb",
        "separator",
        "card",
        "dropdown-menu",
      ],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-06/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-06/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-06/components/nav-main.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-06/components/sidebar-opt-in-form.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-06/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "sidebar-07": {
      name: "sidebar-07",
      description: "A sidebar that collapses to icons.",
      type: "registry:block",
      registryDependencies: [
        "sidebar",
        "breadcrumb",
        "separator",
        "collapsible",
        "dropdown-menu",
        "avatar",
      ],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-07/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-07/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-07/components/nav-main.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-07/components/nav-projects.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-07/components/nav-user.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-07/components/team-switcher.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-07/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "sidebar-08": {
      name: "sidebar-08",
      description: "An inset sidebar with secondary navigation.",
      type: "registry:block",
      registryDependencies: [
        "sidebar",
        "breadcrumb",
        "separator",
        "collapsible",
        "dropdown-menu",
        "avatar",
      ],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-08/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-08/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-08/components/nav-main.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-08/components/nav-projects.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-08/components/nav-secondary.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-08/components/nav-user.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-08/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "sidebar-09": {
      name: "sidebar-09",
      description: "Collapsible nested sidebars.",
      type: "registry:block",
      registryDependencies: [
        "sidebar",
        "breadcrumb",
        "separator",
        "collapsible",
        "dropdown-menu",
        "avatar",
        "switch",
        "label",
      ],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-09/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-09/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-09/components/nav-user.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-09/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "sidebar-10": {
      name: "sidebar-10",
      description: "A sidebar in a popover.",
      type: "registry:block",
      registryDependencies: [
        "sidebar",
        "breadcrumb",
        "separator",
        "popover",
        "collapsible",
        "dropdown-menu",
      ],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-10/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-10/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-10/components/nav-actions.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-10/components/nav-favorites.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-10/components/nav-main.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-10/components/nav-secondary.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-10/components/nav-workspaces.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-10/components/team-switcher.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-10/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "sidebar-11": {
      name: "sidebar-11",
      description: "A sidebar with a collapsible file tree.",
      type: "registry:block",
      registryDependencies: [
        "sidebar",
        "breadcrumb",
        "separator",
        "collapsible",
      ],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-11/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-11/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-11/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "sidebar-12": {
      name: "sidebar-12",
      description: "A sidebar with a calendar.",
      type: "registry:block",
      registryDependencies: [
        "sidebar",
        "breadcrumb",
        "separator",
        "collapsible",
        "calendar",
        "dropdown-menu",
        "avatar",
      ],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-12/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-12/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-12/components/calendars.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-12/components/date-picker.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-12/components/nav-user.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-12/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "sidebar-13": {
      name: "sidebar-13",
      description: "A sidebar in a dialog.",
      type: "registry:block",
      registryDependencies: ["sidebar", "breadcrumb", "button", "dialog"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-13/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-13/components/settings-dialog.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-13/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "sidebar-14": {
      name: "sidebar-14",
      description: "A sidebar on the right.",
      type: "registry:block",
      registryDependencies: ["sidebar", "breadcrumb"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-14/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-14/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-14/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "sidebar-15": {
      name: "sidebar-15",
      description: "A left and right sidebar.",
      type: "registry:block",
      registryDependencies: [
        "sidebar",
        "breadcrumb",
        "separator",
        "popover",
        "collapsible",
        "dropdown-menu",
        "calendar",
        "avatar",
      ],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-15/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-15/components/calendars.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-15/components/date-picker.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-15/components/nav-favorites.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-15/components/nav-main.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-15/components/nav-secondary.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-15/components/nav-user.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-15/components/nav-workspaces.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-15/components/sidebar-left.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-15/components/sidebar-right.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-15/components/team-switcher.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-15/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
    "sidebar-16": {
      name: "sidebar-16",
      description: "A sidebar with a sticky site header.",
      type: "registry:block",
      registryDependencies: [
        "sidebar",
        "breadcrumb",
        "separator",
        "collapsible",
        "dropdown-menu",
        "avatar",
        "button",
        "label",
      ],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-16/page.tsx",
          type: "registry:page",
          target: "app/dashboard/page.tsx",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-16/components/app-sidebar.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-16/components/nav-main.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-16/components/nav-projects.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-16/components/nav-secondary.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-16/components/nav-user.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-16/components/search-form.tsx",
          type: "registry:component",
          target: "",
        },
        {
          path: "registry/new-york-v4/blocks/application/dashboard/sidebar-16/components/site-header.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/dashboard/sidebar-16/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "dashboard"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
  },
}
