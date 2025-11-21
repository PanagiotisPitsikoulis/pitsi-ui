import * as React from "react"

export const IndexBlocksApplication: Record<string, Record<string, any>> = {
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
    },
    "calendar-02": {
      name: "calendar-02",
      description: "Multiple months with single selection.",
      type: "registry:block",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-02/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-02/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-4 py-12 items-start md:py-20 justify-center min-w-0",
        mobile: "component",
      },
      tier: "free",
    },
    "calendar-03": {
      name: "calendar-03",
      description: "Multiple months with multiple selection.",
      type: "registry:block",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-03/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-03/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-4 py-12 items-start md:py-20 justify-center min-w-0",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-04": {
      name: "calendar-04",
      description: "Single month with range selection",
      type: "registry:block",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-04/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-04/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-4 py-12 items-start md:py-20 justify-center min-w-0 xl:pt-28",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-05": {
      name: "calendar-05",
      description: "Multiple months with range selection",
      type: "registry:block",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-05/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-05/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-06": {
      name: "calendar-06",
      description: "Range selection with minimum days",
      type: "registry:block",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-06/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-06/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-07": {
      name: "calendar-07",
      description: "Range selection with minimum and maximum days",
      type: "registry:block",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-07/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-07/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-08": {
      name: "calendar-08",
      description: "Calendar with disabled days",
      type: "registry:block",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-08/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-08/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-09": {
      name: "calendar-09",
      description: "Calendar with disabled weekends",
      type: "registry:block",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-09/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-09/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-10": {
      name: "calendar-10",
      description: "Today button",
      type: "registry:block",
      registryDependencies: ["calendar", "card", "button"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-10/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-10/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-11": {
      name: "calendar-11",
      description: "Start and end of month",
      type: "registry:block",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-11/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-11/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-12": {
      name: "calendar-12",
      description: "Localized calendar",
      type: "registry:block",
      registryDependencies: ["calendar", "card", "select"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-12/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-12/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-13": {
      name: "calendar-13",
      description: "With Month and Year Dropdown",
      type: "registry:block",
      registryDependencies: ["calendar", "label", "select"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-13/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-13/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-14": {
      name: "calendar-14",
      description: "With Booked/Unavailable Days",
      type: "registry:block",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-14/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-14/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-15": {
      name: "calendar-15",
      description: "With Week Numbers",
      type: "registry:block",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-15/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-15/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-16": {
      name: "calendar-16",
      description: "With time picker",
      type: "registry:block",
      registryDependencies: ["calendar", "card", "input", "label"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-16/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-16/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start justify-center min-w-0",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-17": {
      name: "calendar-17",
      description: "With time picker inline",
      type: "registry:block",
      registryDependencies: ["calendar", "card", "input", "label"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-17/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-17/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-18": {
      name: "calendar-18",
      description: "Variable size",
      type: "registry:block",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-18/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-18/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-19": {
      name: "calendar-19",
      description: "With presets",
      type: "registry:block",
      registryDependencies: ["calendar", "card", "input", "label"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-19/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-19/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start justify-center min-w-0",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-20": {
      name: "calendar-20",
      description: "With time presets",
      type: "registry:block",
      registryDependencies: ["calendar", "card", "button"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-20/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-20/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start justify-center min-w-0",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-21": {
      name: "calendar-21",
      description: "Custom days and formatters",
      type: "registry:block",
      registryDependencies: ["calendar"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-21/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-21/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start justify-center min-w-0",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-22": {
      name: "calendar-22",
      description: "Date picker",
      type: "registry:block",
      registryDependencies: ["calendar", "popover", "button", "label"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-22/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-22/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-23": {
      name: "calendar-23",
      description: "Date range picker",
      type: "registry:block",
      registryDependencies: ["calendar", "popover", "button", "label"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-23/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-23/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-24": {
      name: "calendar-24",
      description: "Date and Time picker",
      type: "registry:block",
      registryDependencies: ["calendar", "popover", "button", "label"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-24/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-24/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-25": {
      name: "calendar-25",
      description: "Date and Time range picker",
      type: "registry:block",
      registryDependencies: ["calendar", "popover", "button", "label"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-25/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-25/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-26": {
      name: "calendar-26",
      description: "Date range picker with time",
      type: "registry:block",
      registryDependencies: ["calendar", "popover", "button", "input", "label"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-26/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-26/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-27": {
      name: "calendar-27",
      description: "Chart filter",
      type: "registry:block",
      registryDependencies: ["calendar", "chart", "card", "popover", "button"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-27/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-27/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start justify-center min-w-0",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-28": {
      name: "calendar-28",
      description: "Input with date picker",
      type: "registry:block",
      registryDependencies: ["calendar", "input", "label", "popover", "button"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-28/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-28/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-29": {
      name: "calendar-29",
      description: "Natural language date picker",
      type: "registry:block",
      registryDependencies: ["calendar", "input", "label", "popover", "button"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-29/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-29/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-30": {
      name: "calendar-30",
      description: "With little-date",
      type: "registry:block",
      registryDependencies: ["calendar", "input", "label", "popover", "button"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-30/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-30/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-31": {
      name: "calendar-31",
      description: "With event slots",
      type: "registry:block",
      registryDependencies: ["calendar", "card", "button"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-31/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-31/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "700px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0",
        mobile: "component",
      },
      tier: "pro",
    },
    "calendar-32": {
      name: "calendar-32",
      description: "Date picker in a drawer",
      type: "registry:block",
      registryDependencies: ["calendar", "button", "drawer"],
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/calendar-32/page.tsx",
          type: "registry:component",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/calendar-32/page.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application", "date"],
      meta: {
        iframeHeight: "600px",
        container:
          "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
        mobile: "component",
      },
      tier: "pro",
    },
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
    },
    "application-calendar-borderless-stacked-calendar": {
      name: "application-calendar-borderless-stacked-calendar",
      description: "A borderless stacked calendar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/borderless-stacked-calendar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/borderless-stacked-calendar.tsx"
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
    },
    "application-calendar-dark-calendar-view": {
      name: "application-calendar-dark-calendar-view",
      description: "A dark calendar view block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/dark-calendar-view.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/dark-calendar-view.tsx"
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
    },
    "application-calendar-double-horizontal-calendar": {
      name: "application-calendar-double-horizontal-calendar",
      description: "A double horizontal calendar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/double-horizontal-calendar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/double-horizontal-calendar.tsx"
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
    },
    "application-calendar-double-vertical-calendar": {
      name: "application-calendar-double-vertical-calendar",
      description: "A double vertical calendar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/double-vertical-calendar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/double-vertical-calendar.tsx"
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
    },
    "application-calendar-month-view-calendar": {
      name: "application-calendar-month-view-calendar",
      description: "A month view calendar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/month-view-calendar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/month-view-calendar.tsx"
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
    },
    "application-calendar-month-view-calendar-with-centered": {
      name: "application-calendar-month-view-calendar-with-centered",
      description: "A month view calendar with centered block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/month-view-calendar-with-centered.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/month-view-calendar-with-centered.tsx"
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
    },
    "application-calendar-month-view-calendar-with-cta-button": {
      name: "application-calendar-month-view-calendar-with-cta-button",
      description: "A month view calendar with cta button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/month-view-calendar-with-cta-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/month-view-calendar-with-cta-button.tsx"
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
    },
    "application-calendar-side-by-side-calendar-with-events": {
      name: "application-calendar-side-by-side-calendar-with-events",
      description: "A side by side calendar with events block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/side-by-side-calendar-with-events.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/side-by-side-calendar-with-events.tsx"
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
    },
    "application-calendar-small-calendar-with-cta-and-meeting-list": {
      name: "application-calendar-small-calendar-with-cta-and-meeting-list",
      description: "A small calendar with cta and meeting list block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/small-calendar-with-cta-and-meeting-list.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/small-calendar-with-cta-and-meeting-list.tsx"
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
    },
    "application-calendar-tailwind-calendar-with-image": {
      name: "application-calendar-tailwind-calendar-with-image",
      description: "A tailwind calendar with image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/tailwind-calendar-with-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/tailwind-calendar-with-image.tsx"
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
    },
    "application-calendar-week-view-calendar-with-time": {
      name: "application-calendar-week-view-calendar-with-time",
      description: "A week view calendar with time block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/week-view-calendar-with-time.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/week-view-calendar-with-time.tsx"
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
    },
    "application-calendar-year-view-calendar": {
      name: "application-calendar-year-view-calendar",
      description: "A year view calendar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/calendar/year-view-calendar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/calendar/year-view-calendar.tsx"
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
    },
    "application-forms-account-information-form": {
      name: "application-forms-account-information-form",
      description: "A account information form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/account-information-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/account-information-form.tsx"
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
    },
    "application-forms-application-layout-with-file-upload": {
      name: "application-forms-application-layout-with-file-upload",
      description: "A application layout with file upload block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/application-layout-with-file-upload.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/application-layout-with-file-upload.tsx"
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
    },
    "application-forms-basic-feedback-form": {
      name: "application-forms-basic-feedback-form",
      description: "A basic feedback form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/basic-feedback-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/basic-feedback-form.tsx"
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
    },
    "application-forms-basic-tailwind-ui-form": {
      name: "application-forms-basic-tailwind-ui-form",
      description: "A basic tailwind ui form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/basic-tailwind-ui-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/basic-tailwind-ui-form.tsx"
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
    },
    "application-forms-billing-information-form-with-card-info": {
      name: "application-forms-billing-information-form-with-card-info",
      description: "A billing information form with card info block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/billing-information-form-with-card-info.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/billing-information-form-with-card-info.tsx"
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
    },
    "application-forms-booking-from": {
      name: "application-forms-booking-from",
      description: "A booking from block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/booking-from.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/booking-from.tsx"
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
    },
    "application-forms-contact-from-tailwind": {
      name: "application-forms-contact-from-tailwind",
      description: "A contact from tailwind block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/contact-from-tailwind.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/contact-from-tailwind.tsx"
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
    },
    "application-forms-custom-review-tailwind-css-from": {
      name: "application-forms-custom-review-tailwind-css-from",
      description: "A custom review tailwind css from block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/custom-review-tailwind-css-from.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/custom-review-tailwind-css-from.tsx"
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
    },
    "application-forms-edit-profile-form": {
      name: "application-forms-edit-profile-form",
      description: "A edit profile form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/edit-profile-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/edit-profile-form.tsx"
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
    },
    "application-forms-feedback-from": {
      name: "application-forms-feedback-from",
      description: "A feedback from block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/feedback-from.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/feedback-from.tsx"
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
    },
    "application-forms-invoice-from-tailwind": {
      name: "application-forms-invoice-from-tailwind",
      description: "A invoice from tailwind block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/invoice-from-tailwind.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/invoice-from-tailwind.tsx"
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
    },
    "application-forms-order-billing-form": {
      name: "application-forms-order-billing-form",
      description: "A order billing form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/order-billing-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/order-billing-form.tsx"
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
    },
    "application-forms-registration-form": {
      name: "application-forms-registration-form",
      description: "A registration form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/registration-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/registration-form.tsx"
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
    },
    "application-forms-registration-from": {
      name: "application-forms-registration-from",
      description: "A registration from block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/registration-from.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/registration-from.tsx"
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
    },
    "application-forms-request-form-tailwind-css": {
      name: "application-forms-request-form-tailwind-css",
      description: "A request form tailwind css block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/request-form-tailwind-css.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/request-form-tailwind-css.tsx"
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
    },
    "application-forms-simple-contact-from": {
      name: "application-forms-simple-contact-from",
      description: "A simple contact from block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/simple-contact-from.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/simple-contact-from.tsx"
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
    },
    "application-forms-tailwind-form-with-progress-bar": {
      name: "application-forms-tailwind-form-with-progress-bar",
      description: "A tailwind form with progress bar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/tailwind-form-with-progress-bar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/tailwind-form-with-progress-bar.tsx"
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
    },
    "application-forms-tailwind-login-form-with-cta": {
      name: "application-forms-tailwind-login-form-with-cta",
      description: "A tailwind login form with cta block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/tailwind-login-form-with-cta.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/tailwind-login-form-with-cta.tsx"
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
    },
    "application-forms-verification-from-tailwind-css": {
      name: "application-forms-verification-from-tailwind-css",
      description: "A verification from tailwind css block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/verification-from-tailwind-css.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/verification-from-tailwind-css.tsx"
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
    },
    "application-modalbox-card-modal-with-share-link-option": {
      name: "application-modalbox-card-modal-with-share-link-option",
      description: "A card modal with share link option block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/card-modal-with-share-link-option.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/card-modal-with-share-link-option.tsx"
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
    },
    "application-modalbox-create-meeting-modal": {
      name: "application-modalbox-create-meeting-modal",
      description: "A create meeting modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/create-meeting-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/create-meeting-modal.tsx"
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
    },
    "application-modalbox-create-profile-modal-with-file-upload": {
      name: "application-modalbox-create-profile-modal-with-file-upload",
      description: "A create profile modal with file upload block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/create-profile-modal-with-file-upload.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/create-profile-modal-with-file-upload.tsx"
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
    },
    "application-modalbox-create-project-modal-with-team-selection": {
      name: "application-modalbox-create-project-modal-with-team-selection",
      description: "A create project modal with team selection block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/create-project-modal-with-team-selection.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/create-project-modal-with-team-selection.tsx"
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
    },
    "application-modalbox-currency-converter-modal": {
      name: "application-modalbox-currency-converter-modal",
      description: "A currency converter modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/currency-converter-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/currency-converter-modal.tsx"
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
    },
    "application-modalbox-currency-exchange-modal-with-dropdown": {
      name: "application-modalbox-currency-exchange-modal-with-dropdown",
      description: "A currency exchange modal with dropdown block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/currency-exchange-modal-with-dropdown.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/currency-exchange-modal-with-dropdown.tsx"
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
    },
    "application-modalbox-date-input-and-toggle-button-modal": {
      name: "application-modalbox-date-input-and-toggle-button-modal",
      description: "A date input and toggle button modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/date-input-and-toggle-button-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/date-input-and-toggle-button-modal.tsx"
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
    },
    "application-modalbox-delete-modal-with-checkbox": {
      name: "application-modalbox-delete-modal-with-checkbox",
      description: "A delete modal with checkbox block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/delete-modal-with-checkbox.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/delete-modal-with-checkbox.tsx"
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
    },
    "application-modalbox-event-modal": {
      name: "application-modalbox-event-modal",
      description: "A event modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/event-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/event-modal.tsx"
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
    },
    "application-modalbox-feature-modal-with-carousel": {
      name: "application-modalbox-feature-modal-with-carousel",
      description: "A feature modal with carousel block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/feature-modal-with-carousel.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/feature-modal-with-carousel.tsx"
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
    },
    "application-modalbox-feedback-modal": {
      name: "application-modalbox-feedback-modal",
      description: "A feedback modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/feedback-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/feedback-modal.tsx"
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
    },
    "application-modalbox-file-upload-modal": {
      name: "application-modalbox-file-upload-modal",
      description: "A file upload modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/file-upload-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/file-upload-modal.tsx"
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
    },
    "application-modalbox-invite-modal-with-file-input": {
      name: "application-modalbox-invite-modal-with-file-input",
      description: "A invite modal with file input block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/invite-modal-with-file-input.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/invite-modal-with-file-input.tsx"
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
    },
    "application-modalbox-manage-team-modal": {
      name: "application-modalbox-manage-team-modal",
      description: "A manage team modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/manage-team-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/manage-team-modal.tsx"
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
    },
    "application-modalbox-messaging-modal-with-file-upload": {
      name: "application-modalbox-messaging-modal-with-file-upload",
      description: "A messaging modal with file upload block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/messaging-modal-with-file-upload.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/messaging-modal-with-file-upload.tsx"
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
    },
    "application-modalbox-modal-with-carousel": {
      name: "application-modalbox-modal-with-carousel",
      description: "A modal with carousel block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-carousel.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-carousel.tsx"
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
    },
    "application-modalbox-modal-with-footer": {
      name: "application-modalbox-modal-with-footer",
      description: "A modal with footer block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-footer.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-footer.tsx"
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
    },
    "application-modalbox-modal-with-form-element": {
      name: "application-modalbox-modal-with-form-element",
      description: "A modal with form element block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-form-element.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-form-element.tsx"
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
    },
    "application-modalbox-modal-with-full-width-buttons": {
      name: "application-modalbox-modal-with-full-width-buttons",
      description: "A modal with full width buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-full-width-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-full-width-buttons.tsx"
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
    },
    "application-modalbox-modal-with-input-and-toggle-buttons": {
      name: "application-modalbox-modal-with-input-and-toggle-buttons",
      description: "A modal with input and toggle buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-input-and-toggle-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-input-and-toggle-buttons.tsx"
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
    },
    "application-modalbox-modal-with-link-sharing": {
      name: "application-modalbox-modal-with-link-sharing",
      description: "A modal with link sharing block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-link-sharing.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-link-sharing.tsx"
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
    },
    "application-modalbox-modal-with-search": {
      name: "application-modalbox-modal-with-search",
      description: "A modal with search block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-search.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-search.tsx"
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
    },
    "application-modalbox-modal-with-search-and-checkbox": {
      name: "application-modalbox-modal-with-search-and-checkbox",
      description: "A modal with search and checkbox block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-search-and-checkbox.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-search-and-checkbox.tsx"
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
    },
    "application-modalbox-modal-with-separator": {
      name: "application-modalbox-modal-with-separator",
      description: "A modal with separator block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-separator.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-separator.tsx"
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
    },
    "application-modalbox-modal-with-single-action": {
      name: "application-modalbox-modal-with-single-action",
      description: "A modal with single action block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-single-action.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-single-action.tsx"
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
    },
    "application-modalbox-modal-with-social-media-buttons": {
      name: "application-modalbox-modal-with-social-media-buttons",
      description: "A modal with social media buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-social-media-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-social-media-buttons.tsx"
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
    },
    "application-modalbox-modal-with-verification-code-input": {
      name: "application-modalbox-modal-with-verification-code-input",
      description: "A modal with verification code input block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-verification-code-input.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-verification-code-input.tsx"
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
    },
    "application-modalbox-multiple-account-handle-with-checkbox": {
      name: "application-modalbox-multiple-account-handle-with-checkbox",
      description: "A multiple account handle with checkbox block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/multiple-account-handle-with-checkbox.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/multiple-account-handle-with-checkbox.tsx"
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
    },
    "application-modalbox-notification-modal": {
      name: "application-modalbox-notification-modal",
      description: "A notification modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/notification-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/notification-modal.tsx"
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
    },
    "application-modalbox-payment-modal-with-input-fields": {
      name: "application-modalbox-payment-modal-with-input-fields",
      description: "A payment modal with input fields block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/payment-modal-with-input-fields.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/payment-modal-with-input-fields.tsx"
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
    },
    "application-modalbox-pricing-plan-modal-with-radio-buttons": {
      name: "application-modalbox-pricing-plan-modal-with-radio-buttons",
      description: "A pricing plan modal with radio buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/pricing-plan-modal-with-radio-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/pricing-plan-modal-with-radio-buttons.tsx"
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
    },
    "application-modalbox-radio-input-modal": {
      name: "application-modalbox-radio-input-modal",
      description: "A radio input modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/radio-input-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/radio-input-modal.tsx"
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
    },
    "application-modalbox-relogin-modal-with-password-input": {
      name: "application-modalbox-relogin-modal-with-password-input",
      description: "A relogin modal with password input block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/relogin-modal-with-password-input.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/relogin-modal-with-password-input.tsx"
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
    },
    "application-modalbox-share-modal-with-customizing-options": {
      name: "application-modalbox-share-modal-with-customizing-options",
      description: "A share modal with customizing options block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/share-modal-with-customizing-options.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/share-modal-with-customizing-options.tsx"
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
    },
    "application-modalbox-share-modal-with-input-and-checkbox": {
      name: "application-modalbox-share-modal-with-input-and-checkbox",
      description: "A share modal with input and checkbox block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/share-modal-with-input-and-checkbox.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/share-modal-with-input-and-checkbox.tsx"
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
    },
    "application-modalbox-share-with-input-search-modal": {
      name: "application-modalbox-share-with-input-search-modal",
      description: "A share with input search modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/share-with-input-search-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/share-with-input-search-modal.tsx"
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
    },
    "application-modalbox-sign-in-modal-with-wide-button": {
      name: "application-modalbox-sign-in-modal-with-wide-button",
      description: "A sign in modal with wide button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/sign-in-modal-with-wide-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/sign-in-modal-with-wide-button.tsx"
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
    },
    "application-modalbox-simple-delete-modal": {
      name: "application-modalbox-simple-delete-modal",
      description: "A simple delete modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/simple-delete-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/simple-delete-modal.tsx"
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
    },
    "application-modalbox-simple-modal-with-icon": {
      name: "application-modalbox-simple-modal-with-icon",
      description: "A simple modal with icon block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/simple-modal-with-icon.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/simple-modal-with-icon.tsx"
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
    },
    "application-modalbox-simple-modal-with-number-input": {
      name: "application-modalbox-simple-modal-with-number-input",
      description: "A simple modal with number input block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/simple-modal-with-number-input.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/simple-modal-with-number-input.tsx"
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
    },
    "application-modalbox-subscribe-modal-with-input": {
      name: "application-modalbox-subscribe-modal-with-input",
      description: "A subscribe modal with input block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/subscribe-modal-with-input.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/subscribe-modal-with-input.tsx"
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
    },
    "application-modalbox-success-modal-with-two-buttons": {
      name: "application-modalbox-success-modal-with-two-buttons",
      description: "A success modal with two buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/success-modal-with-two-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/success-modal-with-two-buttons.tsx"
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
    },
    "application-modalbox-team-management-modal": {
      name: "application-modalbox-team-management-modal",
      description: "A team management modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/team-management-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/team-management-modal.tsx"
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
    },
    "application-profile-headers-profile-header-with-buttons": {
      name: "application-profile-headers-profile-header-with-buttons",
      description: "A profile header with buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/profile-headers/profile-header-with-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/profile-headers/profile-header-with-buttons.tsx"
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
    },
    "application-profile-headers-profile-header-with-user-description": {
      name: "application-profile-headers-profile-header-with-user-description",
      description: "A profile header with user description block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/profile-headers/profile-header-with-user-description.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/profile-headers/profile-header-with-user-description.tsx"
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
    },
    "application-profile-headers-profile-header-with-user-s-experiences": {
      name: "application-profile-headers-profile-header-with-user-s-experiences",
      description: "A profile header with user s experiences block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/profile-headers/profile-header-with-user-s-experiences.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/profile-headers/profile-header-with-user-s-experiences.tsx"
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
    },
    "application-profile-headers-profile-headers-with-background-image": {
      name: "application-profile-headers-profile-headers-with-background-image",
      description: "A profile headers with background image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/profile-headers/profile-headers-with-background-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/profile-headers/profile-headers-with-background-image.tsx"
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
    },
    "application-profile-headers-profile-headers-with-center-image": {
      name: "application-profile-headers-profile-headers-with-center-image",
      description: "A profile headers with center image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/profile-headers/profile-headers-with-center-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/profile-headers/profile-headers-with-center-image.tsx"
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
    },
    "application-profile-headers-profile-with-users-skills": {
      name: "application-profile-headers-profile-with-users-skills",
      description: "A profile with users skills block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/profile-headers/profile-with-users-skills.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/profile-headers/profile-with-users-skills.tsx"
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
    },
    "application-section-headers-default-section-header": {
      name: "application-section-headers-default-section-header",
      description: "A default section header block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/section-headers/default-section-header.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/section-headers/default-section-header.tsx"
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
    },
    "application-section-headers-section-header-with-cta-buttons": {
      name: "application-section-headers-section-header-with-cta-buttons",
      description: "A section header with cta buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/section-headers/section-header-with-cta-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/section-headers/section-header-with-cta-buttons.tsx"
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
    },
    "application-section-headers-section-header-with-cta-tabs": {
      name: "application-section-headers-section-header-with-cta-tabs",
      description: "A section header with cta tabs block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/section-headers/section-header-with-cta-tabs.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/section-headers/section-header-with-cta-tabs.tsx"
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
    },
    "application-section-headers-section-header-with-filter": {
      name: "application-section-headers-section-header-with-filter",
      description: "A section header with filter block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/section-headers/section-header-with-filter.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/section-headers/section-header-with-filter.tsx"
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
    },
    "application-section-headers-section-header-with-svg-buttons": {
      name: "application-section-headers-section-header-with-svg-buttons",
      description: "A section header with svg buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/section-headers/section-header-with-svg-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/section-headers/section-header-with-svg-buttons.tsx"
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
    },
    "application-section-headers-section-header-with-tabs": {
      name: "application-section-headers-section-header-with-tabs",
      description: "A section header with tabs block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/section-headers/section-header-with-tabs.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/section-headers/section-header-with-tabs.tsx"
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
    },
    "application-table-header-default-table-header": {
      name: "application-table-header-default-table-header",
      description: "A default table header block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/table-header/default-table-header.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/table-header/default-table-header.tsx"
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
    },
    "application-table-header-multi-level-table-header-with-filters": {
      name: "application-table-header-multi-level-table-header-with-filters",
      description: "A multi level table header with filters block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/table-header/multi-level-table-header-with-filters.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/table-header/multi-level-table-header-with-filters.tsx"
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
    },
    "application-table-header-table-header-with-search-input-and-cta-button": {
      name: "application-table-header-table-header-with-search-input-and-cta-button",
      description: "A table header with search input and cta button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/table-header/table-header-with-search-input-and-cta-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/table-header/table-header-with-search-input-and-cta-button.tsx"
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
    },
    "application-table-header-table-header-with-tabs": {
      name: "application-table-header-table-header-with-tabs",
      description: "A table header with tabs block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/table-header/table-header-with-tabs.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/table-header/table-header-with-tabs.tsx"
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
    },
    "application-table-header-tailwind-table-sort-header": {
      name: "application-table-header-tailwind-table-sort-header",
      description: "A tailwind table sort header block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/table-header/tailwind-table-sort-header.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/table-header/tailwind-table-sort-header.tsx"
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
    },
  },
}
