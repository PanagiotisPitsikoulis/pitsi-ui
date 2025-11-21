import { Registry } from "pitsi/schema"

export const blocks: Registry["items"] = [
  {
    name: "dashboard-01",
    type: "registry:block",
    description: "A dashboard with sidebar, charts and data table.",
    dependencies: [
      "@dnd-kit/core",
      "@dnd-kit/modifiers",
      "@dnd-kit/sortable",
      "@dnd-kit/utilities",
      "@tanstack/react-table",
      "zod",
    ],
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
        path: "blocks/application/dashboard/dashboard-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/dashboard-01/data.json",
        type: "registry:file",
        target: "app/dashboard/data.json",
      },
      {
        path: "blocks/application/dashboard/dashboard-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/dashboard-01/components/chart-area-interactive.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/dashboard-01/components/data-table.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/dashboard-01/components/nav-documents.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/dashboard-01/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/dashboard-01/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/dashboard-01/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/dashboard-01/components/section-cards.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/dashboard-01/components/site-header.tsx",
        type: "registry:component",
      },
    ],
    categories: ["dashboard"],
    meta: {
      iframeHeight: "1000px",
      readiness: "alpha",
    },
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "sidebar-01",
    type: "registry:block",
    description: "A simple sidebar with navigation grouped by section.",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "dropdown-menu",
    ],
    files: [
      {
        path: "blocks/application/dashboard/sidebar-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-01/components/search-form.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-01/components/version-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "free",
    readiness: "alpha",
  },
  {
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
        path: "blocks/application/dashboard/sidebar-02/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-02/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-02/components/search-form.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-02/components/version-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "sidebar-03",
    description: "A sidebar with submenus.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb"],
    files: [
      {
        path: "blocks/application/dashboard/sidebar-03/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-03/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "sidebar-04",
    description: "A floating sidebar with submenus.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "separator"],
    files: [
      {
        path: "blocks/application/dashboard/sidebar-04/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-04/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "free",
    readiness: "alpha",
  },
  {
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
        path: "blocks/application/dashboard/sidebar-05/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-05/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-05/components/search-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "pro",
    readiness: "alpha",
  },
  {
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
        path: "blocks/application/dashboard/sidebar-06/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-06/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-06/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-06/components/sidebar-opt-in-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "sidebar-07",
    type: "registry:block",
    description: "A sidebar that collapses to icons.",
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
        path: "blocks/application/dashboard/sidebar-07/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-07/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-07/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-07/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-07/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-07/components/team-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "pro",
    readiness: "alpha",
  },
  {
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
        path: "blocks/application/dashboard/sidebar-08/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-08/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-08/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-08/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-08/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-08/components/nav-user.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "pro",
    readiness: "alpha",
  },
  {
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
        path: "blocks/application/dashboard/sidebar-09/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-09/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-09/components/nav-user.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "pro",
    readiness: "alpha",
  },
  {
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
        path: "blocks/application/dashboard/sidebar-10/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-10/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-10/components/nav-actions.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-10/components/nav-favorites.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-10/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-10/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-10/components/nav-workspaces.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-10/components/team-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "sidebar-11",
    description: "A sidebar with a collapsible file tree.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "separator", "collapsible"],
    files: [
      {
        path: "blocks/application/dashboard/sidebar-11/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-11/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "pro",
    readiness: "alpha",
  },
  {
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
        path: "blocks/application/dashboard/sidebar-12/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-12/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-12/components/calendars.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-12/components/date-picker.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-12/components/nav-user.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "sidebar-13",
    description: "A sidebar in a dialog.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "button", "dialog"],
    files: [
      {
        path: "blocks/application/dashboard/sidebar-13/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-13/components/settings-dialog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "sidebar-14",
    description: "A sidebar on the right.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb"],
    files: [
      {
        path: "blocks/application/dashboard/sidebar-14/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-14/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "pro",
    readiness: "alpha",
  },
  {
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
        path: "blocks/application/dashboard/sidebar-15/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-15/components/calendars.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-15/components/date-picker.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-15/components/nav-favorites.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-15/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-15/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-15/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-15/components/nav-workspaces.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-15/components/sidebar-left.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-15/components/sidebar-right.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-15/components/team-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "pro",
    readiness: "alpha",
  },
  {
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
        path: "blocks/application/dashboard/sidebar-16/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/application/dashboard/sidebar-16/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-16/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-16/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-16/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-16/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-16/components/search-form.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/application/dashboard/sidebar-16/components/site-header.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "dashboard"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "login-01",
    description: "A simple login form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "field"],
    files: [
      {
        path: "blocks/full-pages/login-page/login-01/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/login-page/login-01/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "login"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "login-02",
    description: "A two column login page with a cover image.",
    type: "registry:block",
    registryDependencies: ["button", "input", "label", "field"],
    files: [
      {
        path: "blocks/full-pages/login-page/login-02/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/login-page/login-02/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "login"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "login-03",
    description: "A login page with a muted background color.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "field"],
    files: [
      {
        path: "blocks/full-pages/login-page/login-03/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/login-page/login-03/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "login"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "login-04",
    description: "A login page with form and image.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "field"],
    files: [
      {
        path: "blocks/full-pages/login-page/login-04/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/login-page/login-04/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "login"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "login-05",
    description: "A simple email-only login page.",
    type: "registry:block",
    registryDependencies: ["button", "input", "label", "field"],
    files: [
      {
        path: "blocks/full-pages/login-page/login-05/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/login-page/login-05/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "login"],
    tier: "pro",
    readiness: "alpha",
  },
  // {
  //   name: "calendar-01",
  //   description: "A simple calendar.",
  //   type: "registry:block",
  //   registryDependencies: ["calendar"],
  //   files: [
  //     {
  //       path: "blocks/application/calendar/calendar-01/page.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   categories: ["application", "date"],
  //   meta: {
  //     iframeHeight: "600px",
  //     container:
  //       "w-full bg-background min-h-svh flex px-4 py-12 items-start md:py-20 justify-center min-w-0",
  //     mobile: "component",
  //   },
  // },
  {
    name: "calendar-02",
    description: "Multiple months with single selection.",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/application/calendar/calendar-02/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-4 py-12 items-start md:py-20 justify-center min-w-0",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "calendar-03",
    description: "Multiple months with multiple selection.",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/application/calendar/calendar-03/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-4 py-12 items-start md:py-20 justify-center min-w-0",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-04",
    description: "Single month with range selection",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/application/calendar/calendar-04/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-4 py-12 items-start md:py-20 justify-center min-w-0 xl:pt-28",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-05",
    description: "Multiple months with range selection",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/application/calendar/calendar-05/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-06",
    description: "Range selection with minimum days",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/application/calendar/calendar-06/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-07",
    description: "Range selection with minimum and maximum days",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/application/calendar/calendar-07/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-08",
    description: "Calendar with disabled days",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/application/calendar/calendar-08/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-09",
    description: "Calendar with disabled weekends",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/application/calendar/calendar-09/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-10",
    description: "Today button",
    type: "registry:block",
    registryDependencies: ["calendar", "card", "button"],
    files: [
      {
        path: "blocks/application/calendar/calendar-10/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-11",
    description: "Start and end of month",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/application/calendar/calendar-11/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-12",
    description: "Localized calendar",
    type: "registry:block",
    registryDependencies: ["calendar", "card", "select"],
    files: [
      {
        path: "blocks/application/calendar/calendar-12/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-13",
    description: "With Month and Year Dropdown",
    type: "registry:block",
    registryDependencies: ["calendar", "label", "select"],
    files: [
      {
        path: "blocks/application/calendar/calendar-13/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-14",
    description: "With Booked/Unavailable Days",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/application/calendar/calendar-14/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-15",
    description: "With Week Numbers",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/application/calendar/calendar-15/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-16",
    description: "With time picker",
    type: "registry:block",
    registryDependencies: ["calendar", "card", "input", "label"],
    files: [
      {
        path: "blocks/application/calendar/calendar-16/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start justify-center min-w-0",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-17",
    description: "With time picker inline",
    type: "registry:block",
    registryDependencies: ["calendar", "card", "input", "label"],
    files: [
      {
        path: "blocks/application/calendar/calendar-17/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-18",
    description: "Variable size",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/application/calendar/calendar-18/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-19",
    description: "With presets",
    type: "registry:block",
    dependencies: ["date-fns"],
    registryDependencies: ["calendar", "card", "input", "label"],
    files: [
      {
        path: "blocks/application/calendar/calendar-19/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start justify-center min-w-0",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-20",
    description: "With time presets",
    type: "registry:block",
    registryDependencies: ["calendar", "card", "button"],
    files: [
      {
        path: "blocks/application/calendar/calendar-20/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start justify-center min-w-0",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-21",
    description: "Custom days and formatters",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/application/calendar/calendar-21/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start justify-center min-w-0",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-22",
    description: "Date picker",
    type: "registry:block",
    registryDependencies: ["calendar", "popover", "button", "label"],
    files: [
      {
        path: "blocks/application/calendar/calendar-22/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-23",
    description: "Date range picker",
    type: "registry:block",
    registryDependencies: ["calendar", "popover", "button", "label"],
    files: [
      {
        path: "blocks/application/calendar/calendar-23/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-24",
    description: "Date and Time picker",
    type: "registry:block",
    registryDependencies: ["calendar", "popover", "button", "label"],
    files: [
      {
        path: "blocks/application/calendar/calendar-24/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-25",
    description: "Date and Time range picker",
    type: "registry:block",
    registryDependencies: ["calendar", "popover", "button", "label"],
    files: [
      {
        path: "blocks/application/calendar/calendar-25/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-26",
    description: "Date range picker with time",
    type: "registry:block",
    registryDependencies: ["calendar", "popover", "button", "input", "label"],
    files: [
      {
        path: "blocks/application/calendar/calendar-26/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-27",
    description: "Chart filter",
    type: "registry:block",
    registryDependencies: ["calendar", "chart", "card", "popover", "button"],
    files: [
      {
        path: "blocks/application/calendar/calendar-27/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start justify-center min-w-0",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-28",
    description: "Input with date picker",
    type: "registry:block",
    registryDependencies: ["calendar", "input", "label", "popover", "button"],
    files: [
      {
        path: "blocks/application/calendar/calendar-28/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-29",
    description: "Natural language date picker",
    type: "registry:block",
    dependencies: ["chrono-node"],
    registryDependencies: ["calendar", "input", "label", "popover", "button"],
    files: [
      {
        path: "blocks/application/calendar/calendar-29/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-30",
    description: "With little-date",
    type: "registry:block",
    registryDependencies: ["calendar", "input", "label", "popover", "button"],
    files: [
      {
        path: "blocks/application/calendar/calendar-30/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-31",
    description: "With event slots",
    type: "registry:block",
    registryDependencies: ["calendar", "card", "button"],
    files: [
      {
        path: "blocks/application/calendar/calendar-31/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "700px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "calendar-32",
    description: "Date picker in a drawer",
    type: "registry:block",
    registryDependencies: ["calendar", "button", "drawer"],
    files: [
      {
        path: "blocks/application/calendar/calendar-32/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["application", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-background min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
      readiness: "alpha",
    },
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "signup-01",
    description: "A simple signup form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/full-pages/login-page/signup-01/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/login-page/signup-01/components/signup-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "signup"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "signup-02",
    description: "A two column signup page with a cover image.",
    type: "registry:block",
    registryDependencies: ["button", "input", "label", "field"],
    files: [
      {
        path: "blocks/full-pages/login-page/signup-02/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/login-page/signup-02/components/signup-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "signup"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "signup-03",
    description: "A signup page with a muted background color.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "field"],
    files: [
      {
        path: "blocks/full-pages/login-page/signup-03/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/login-page/signup-03/components/signup-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "signup"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "signup-04",
    description: "A signup page with form and image.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "field"],
    files: [
      {
        path: "blocks/full-pages/login-page/signup-04/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/login-page/signup-04/components/signup-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "signup"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "signup-05",
    description: "A simple signup form with social providers.",
    type: "registry:block",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/full-pages/login-page/signup-05/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/login-page/signup-05/components/signup-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "signup"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "otp-01",
    description: "A simple OTP verification form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input-otp", "label", "field"],
    files: [
      {
        path: "blocks/full-pages/otp/otp-01/page.tsx",
        target: "app/otp/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/otp/otp-01/components/otp-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "otp"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "otp-02",
    description: "A two column OTP page with a cover image.",
    type: "registry:block",
    registryDependencies: ["button", "input-otp", "label", "field"],
    files: [
      {
        path: "blocks/full-pages/otp/otp-02/page.tsx",
        target: "app/otp/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/otp/otp-02/components/otp-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "otp"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "otp-03",
    description: "An OTP page with a muted background color.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input-otp", "label", "field"],
    files: [
      {
        path: "blocks/full-pages/otp/otp-03/page.tsx",
        target: "app/otp/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/otp/otp-03/components/otp-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "otp"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "otp-04",
    description: "An OTP page with form and image.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input-otp", "label", "field"],
    files: [
      {
        path: "blocks/full-pages/otp/otp-04/page.tsx",
        target: "app/otp/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/otp/otp-04/components/otp-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "otp"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "otp-05",
    description: "A simple OTP form with social providers.",
    type: "registry:block",
    registryDependencies: ["button", "input-otp", "label", "field"],
    files: [
      {
        path: "blocks/full-pages/otp/otp-05/page.tsx",
        target: "app/otp/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/full-pages/otp/otp-05/components/otp-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["full-pages", "otp"],
    tier: "pro",
    readiness: "alpha",
  },
  // NEW BLOCKS FROM TEMP REGISTRY
  // ========================================
  {
    name: "application-application-shell-advanced-layout-with-collapsable-sidebar",
    type: "registry:block",
    description: "A advanced layout with collapsable sidebar block.",
    files: [
      {
        path: "blocks/application/application-shell/advanced-layout-with-collapsable-sidebar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-application-shell-advanced-layout-with-double-sidebar-layout",
    type: "registry:block",
    description: "A advanced layout with double sidebar layout block.",
    files: [
      {
        path: "blocks/application/application-shell/advanced-layout-with-double-sidebar-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-application-shell-alternate-style-of-application-shell",
    type: "registry:block",
    description: "A alternate style of application shell block.",
    files: [
      {
        path: "blocks/application/application-shell/alternate-style-of-application-shell.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-application-shell-application-shell-with-navbar",
    type: "registry:block",
    description: "A application shell with navbar block.",
    files: [
      {
        path: "blocks/application/application-shell/application-shell-with-navbar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-application-shell-appplication-shell-with-background",
    type: "registry:block",
    description: "A appplication shell with background block.",
    files: [
      {
        path: "blocks/application/application-shell/appplication-shell-with-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-application-shell-creative-dashboard-layout-tailwind",
    type: "registry:block",
    description: "A creative dashboard layout tailwind block.",
    files: [
      {
        path: "blocks/application/application-shell/creative-dashboard-layout-tailwind.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-application-shell-dashboard-layout-with-collapsable-sidebar",
    type: "registry:block",
    description: "A dashboard layout with collapsable sidebar block.",
    files: [
      {
        path: "blocks/application/application-shell/dashboard-layout-with-collapsable-sidebar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-application-shell-dashboard-layout-with-navbar",
    type: "registry:block",
    description: "A dashboard layout with navbar block.",
    files: [
      {
        path: "blocks/application/application-shell/dashboard-layout-with-navbar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-application-shell-shell-layout-with-expandable-sidebar",
    type: "registry:block",
    description: "A shell layout with expandable sidebar block.",
    files: [
      {
        path: "blocks/application/application-shell/shell-layout-with-expandable-sidebar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-application-shell-stacked-layout-with-multiple-navbars",
    type: "registry:block",
    description: "A stacked layout with multiple navbars block.",
    files: [
      {
        path: "blocks/application/application-shell/stacked-layout-with-multiple-navbars.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-calendar-borderless-stacked-calendar",
    type: "registry:block",
    description: "A borderless stacked calendar block.",
    files: [
      {
        path: "blocks/application/calendar/borderless-stacked-calendar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-calendar-dark-calendar-view",
    type: "registry:block",
    description: "A dark calendar view block.",
    files: [
      {
        path: "blocks/application/calendar/dark-calendar-view.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-calendar-double-horizontal-calendar",
    type: "registry:block",
    description: "A double horizontal calendar block.",
    files: [
      {
        path: "blocks/application/calendar/double-horizontal-calendar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-calendar-double-vertical-calendar",
    type: "registry:block",
    description: "A double vertical calendar block.",
    files: [
      {
        path: "blocks/application/calendar/double-vertical-calendar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-calendar-month-view-calendar",
    type: "registry:block",
    description: "A month view calendar block.",
    files: [
      {
        path: "blocks/application/calendar/month-view-calendar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-calendar-month-view-calendar-with-centered",
    type: "registry:block",
    description: "A month view calendar with centered block.",
    files: [
      {
        path: "blocks/application/calendar/month-view-calendar-with-centered.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-calendar-month-view-calendar-with-cta-button",
    type: "registry:block",
    description: "A month view calendar with cta button block.",
    files: [
      {
        path: "blocks/application/calendar/month-view-calendar-with-cta-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-calendar-side-by-side-calendar-with-events",
    type: "registry:block",
    description: "A side by side calendar with events block.",
    files: [
      {
        path: "blocks/application/calendar/side-by-side-calendar-with-events.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-calendar-small-calendar-with-cta-and-meeting-list",
    type: "registry:block",
    description: "A small calendar with cta and meeting list block.",
    files: [
      {
        path: "blocks/application/calendar/small-calendar-with-cta-and-meeting-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-calendar-tailwind-calendar-with-image",
    type: "registry:block",
    description: "A tailwind calendar with image block.",
    files: [
      {
        path: "blocks/application/calendar/tailwind-calendar-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-calendar-week-view-calendar-with-time",
    type: "registry:block",
    description: "A week view calendar with time block.",
    files: [
      {
        path: "blocks/application/calendar/week-view-calendar-with-time.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-calendar-year-view-calendar",
    type: "registry:block",
    description: "A year view calendar block.",
    files: [
      {
        path: "blocks/application/calendar/year-view-calendar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-forms-account-information-form",
    type: "registry:block",
    description: "A account information form block.",
    files: [
      {
        path: "blocks/application/forms/account-information-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-forms-application-layout-with-file-upload",
    type: "registry:block",
    description: "A application layout with file upload block.",
    files: [
      {
        path: "blocks/application/forms/application-layout-with-file-upload.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-forms-basic-feedback-form",
    type: "registry:block",
    description: "A basic feedback form block.",
    files: [
      {
        path: "blocks/application/forms/basic-feedback-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-forms-basic-tailwind-ui-form",
    type: "registry:block",
    description: "A basic tailwind ui form block.",
    files: [
      {
        path: "blocks/application/forms/basic-tailwind-ui-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-forms-billing-information-form-with-card-info",
    type: "registry:block",
    description: "A billing information form with card info block.",
    files: [
      {
        path: "blocks/application/forms/billing-information-form-with-card-info.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-forms-booking-from",
    type: "registry:block",
    description: "A booking from block.",
    files: [
      {
        path: "blocks/application/forms/booking-from.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-forms-contact-from-tailwind",
    type: "registry:block",
    description: "A contact from tailwind block.",
    files: [
      {
        path: "blocks/application/forms/contact-from-tailwind.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-forms-custom-review-tailwind-css-from",
    type: "registry:block",
    description: "A custom review tailwind css from block.",
    files: [
      {
        path: "blocks/application/forms/custom-review-tailwind-css-from.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-forms-edit-profile-form",
    type: "registry:block",
    description: "A edit profile form block.",
    files: [
      {
        path: "blocks/application/forms/edit-profile-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-forms-feedback-from",
    type: "registry:block",
    description: "A feedback from block.",
    files: [
      {
        path: "blocks/application/forms/feedback-from.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-forms-invoice-from-tailwind",
    type: "registry:block",
    description: "A invoice from tailwind block.",
    files: [
      {
        path: "blocks/application/forms/invoice-from-tailwind.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-forms-order-billing-form",
    type: "registry:block",
    description: "A order billing form block.",
    files: [
      {
        path: "blocks/application/forms/order-billing-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-forms-registration-form",
    type: "registry:block",
    description: "A registration form block.",
    files: [
      {
        path: "blocks/application/forms/registration-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-forms-registration-from",
    type: "registry:block",
    description: "A registration from block.",
    files: [
      {
        path: "blocks/application/forms/registration-from.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-forms-request-form-tailwind-css",
    type: "registry:block",
    description: "A request form tailwind css block.",
    files: [
      {
        path: "blocks/application/forms/request-form-tailwind-css.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-forms-simple-contact-from",
    type: "registry:block",
    description: "A simple contact from block.",
    files: [
      {
        path: "blocks/application/forms/simple-contact-from.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-forms-tailwind-form-with-progress-bar",
    type: "registry:block",
    description: "A tailwind form with progress bar block.",
    files: [
      {
        path: "blocks/application/forms/tailwind-form-with-progress-bar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-forms-tailwind-login-form-with-cta",
    type: "registry:block",
    description: "A tailwind login form with cta block.",
    files: [
      {
        path: "blocks/application/forms/tailwind-login-form-with-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-forms-verification-from-tailwind-css",
    type: "registry:block",
    description: "A verification from tailwind css block.",
    files: [
      {
        path: "blocks/application/forms/verification-from-tailwind-css.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-card-modal-with-share-link-option",
    type: "registry:block",
    description: "A card modal with share link option block.",
    files: [
      {
        path: "blocks/application/modalbox/card-modal-with-share-link-option.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-create-meeting-modal",
    type: "registry:block",
    description: "A create meeting modal block.",
    files: [
      {
        path: "blocks/application/modalbox/create-meeting-modal.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-create-profile-modal-with-file-upload",
    type: "registry:block",
    description: "A create profile modal with file upload block.",
    files: [
      {
        path: "blocks/application/modalbox/create-profile-modal-with-file-upload.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-create-project-modal-with-team-selection",
    type: "registry:block",
    description: "A create project modal with team selection block.",
    files: [
      {
        path: "blocks/application/modalbox/create-project-modal-with-team-selection.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-currency-converter-modal",
    type: "registry:block",
    description: "A currency converter modal block.",
    files: [
      {
        path: "blocks/application/modalbox/currency-converter-modal.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-currency-exchange-modal-with-dropdown",
    type: "registry:block",
    description: "A currency exchange modal with dropdown block.",
    files: [
      {
        path: "blocks/application/modalbox/currency-exchange-modal-with-dropdown.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-date-input-and-toggle-button-modal",
    type: "registry:block",
    description: "A date input and toggle button modal block.",
    files: [
      {
        path: "blocks/application/modalbox/date-input-and-toggle-button-modal.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-delete-modal-with-checkbox",
    type: "registry:block",
    description: "A delete modal with checkbox block.",
    files: [
      {
        path: "blocks/application/modalbox/delete-modal-with-checkbox.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-event-modal",
    type: "registry:block",
    description: "A event modal block.",
    files: [
      {
        path: "blocks/application/modalbox/event-modal.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-feature-modal-with-carousel",
    type: "registry:block",
    description: "A feature modal with carousel block.",
    files: [
      {
        path: "blocks/application/modalbox/feature-modal-with-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-feedback-modal",
    type: "registry:block",
    description: "A feedback modal block.",
    files: [
      {
        path: "blocks/application/modalbox/feedback-modal.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-file-upload-modal",
    type: "registry:block",
    description: "A file upload modal block.",
    files: [
      {
        path: "blocks/application/modalbox/file-upload-modal.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-invite-modal-with-file-input",
    type: "registry:block",
    description: "A invite modal with file input block.",
    files: [
      {
        path: "blocks/application/modalbox/invite-modal-with-file-input.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-manage-team-modal",
    type: "registry:block",
    description: "A manage team modal block.",
    files: [
      {
        path: "blocks/application/modalbox/manage-team-modal.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-messaging-modal-with-file-upload",
    type: "registry:block",
    description: "A messaging modal with file upload block.",
    files: [
      {
        path: "blocks/application/modalbox/messaging-modal-with-file-upload.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-modal-with-carousel",
    type: "registry:block",
    description: "A modal with carousel block.",
    files: [
      {
        path: "blocks/application/modalbox/modal-with-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-modal-with-footer",
    type: "registry:block",
    description: "A modal with footer block.",
    files: [
      {
        path: "blocks/application/modalbox/modal-with-footer.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-modal-with-form-element",
    type: "registry:block",
    description: "A modal with form element block.",
    files: [
      {
        path: "blocks/application/modalbox/modal-with-form-element.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-modal-with-full-width-buttons",
    type: "registry:block",
    description: "A modal with full width buttons block.",
    files: [
      {
        path: "blocks/application/modalbox/modal-with-full-width-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-modal-with-input-and-toggle-buttons",
    type: "registry:block",
    description: "A modal with input and toggle buttons block.",
    files: [
      {
        path: "blocks/application/modalbox/modal-with-input-and-toggle-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-modal-with-link-sharing",
    type: "registry:block",
    description: "A modal with link sharing block.",
    files: [
      {
        path: "blocks/application/modalbox/modal-with-link-sharing.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-modal-with-search",
    type: "registry:block",
    description: "A modal with search block.",
    files: [
      {
        path: "blocks/application/modalbox/modal-with-search.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-modal-with-search-and-checkbox",
    type: "registry:block",
    description: "A modal with search and checkbox block.",
    files: [
      {
        path: "blocks/application/modalbox/modal-with-search-and-checkbox.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-modal-with-separator",
    type: "registry:block",
    description: "A modal with separator block.",
    files: [
      {
        path: "blocks/application/modalbox/modal-with-separator.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-modal-with-single-action",
    type: "registry:block",
    description: "A modal with single action block.",
    files: [
      {
        path: "blocks/application/modalbox/modal-with-single-action.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-modal-with-social-media-buttons",
    type: "registry:block",
    description: "A modal with social media buttons block.",
    files: [
      {
        path: "blocks/application/modalbox/modal-with-social-media-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-modal-with-verification-code-input",
    type: "registry:block",
    description: "A modal with verification code input block.",
    files: [
      {
        path: "blocks/application/modalbox/modal-with-verification-code-input.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-multiple-account-handle-with-checkbox",
    type: "registry:block",
    description: "A multiple account handle with checkbox block.",
    files: [
      {
        path: "blocks/application/modalbox/multiple-account-handle-with-checkbox.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-notification-modal",
    type: "registry:block",
    description: "A notification modal block.",
    files: [
      {
        path: "blocks/application/modalbox/notification-modal.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-payment-modal-with-input-fields",
    type: "registry:block",
    description: "A payment modal with input fields block.",
    files: [
      {
        path: "blocks/application/modalbox/payment-modal-with-input-fields.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-pricing-plan-modal-with-radio-buttons",
    type: "registry:block",
    description: "A pricing plan modal with radio buttons block.",
    files: [
      {
        path: "blocks/application/modalbox/pricing-plan-modal-with-radio-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-radio-input-modal",
    type: "registry:block",
    description: "A radio input modal block.",
    files: [
      {
        path: "blocks/application/modalbox/radio-input-modal.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-relogin-modal-with-password-input",
    type: "registry:block",
    description: "A relogin modal with password input block.",
    files: [
      {
        path: "blocks/application/modalbox/relogin-modal-with-password-input.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-share-modal-with-customizing-options",
    type: "registry:block",
    description: "A share modal with customizing options block.",
    files: [
      {
        path: "blocks/application/modalbox/share-modal-with-customizing-options.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-share-modal-with-input-and-checkbox",
    type: "registry:block",
    description: "A share modal with input and checkbox block.",
    files: [
      {
        path: "blocks/application/modalbox/share-modal-with-input-and-checkbox.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-share-with-input-search-modal",
    type: "registry:block",
    description: "A share with input search modal block.",
    files: [
      {
        path: "blocks/application/modalbox/share-with-input-search-modal.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-sign-in-modal-with-wide-button",
    type: "registry:block",
    description: "A sign in modal with wide button block.",
    files: [
      {
        path: "blocks/application/modalbox/sign-in-modal-with-wide-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-simple-delete-modal",
    type: "registry:block",
    description: "A simple delete modal block.",
    files: [
      {
        path: "blocks/application/modalbox/simple-delete-modal.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-simple-modal-with-icon",
    type: "registry:block",
    description: "A simple modal with icon block.",
    files: [
      {
        path: "blocks/application/modalbox/simple-modal-with-icon.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-simple-modal-with-number-input",
    type: "registry:block",
    description: "A simple modal with number input block.",
    files: [
      {
        path: "blocks/application/modalbox/simple-modal-with-number-input.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-subscribe-modal-with-input",
    type: "registry:block",
    description: "A subscribe modal with input block.",
    files: [
      {
        path: "blocks/application/modalbox/subscribe-modal-with-input.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-success-modal-with-two-buttons",
    type: "registry:block",
    description: "A success modal with two buttons block.",
    files: [
      {
        path: "blocks/application/modalbox/success-modal-with-two-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-modalbox-team-management-modal",
    type: "registry:block",
    description: "A team management modal block.",
    files: [
      {
        path: "blocks/application/modalbox/team-management-modal.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-profile-headers-profile-header-with-buttons",
    type: "registry:block",
    description: "A profile header with buttons block.",
    files: [
      {
        path: "blocks/application/profile-headers/profile-header-with-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-profile-headers-profile-header-with-user-description",
    type: "registry:block",
    description: "A profile header with user description block.",
    files: [
      {
        path: "blocks/application/profile-headers/profile-header-with-user-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-profile-headers-profile-header-with-user-s-experiences",
    type: "registry:block",
    description: "A profile header with user s experiences block.",
    files: [
      {
        path: "blocks/application/profile-headers/profile-header-with-user-s-experiences.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-profile-headers-profile-headers-with-background-image",
    type: "registry:block",
    description: "A profile headers with background image block.",
    files: [
      {
        path: "blocks/application/profile-headers/profile-headers-with-background-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-profile-headers-profile-headers-with-center-image",
    type: "registry:block",
    description: "A profile headers with center image block.",
    files: [
      {
        path: "blocks/application/profile-headers/profile-headers-with-center-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-profile-headers-profile-with-users-skills",
    type: "registry:block",
    description: "A profile with users skills block.",
    files: [
      {
        path: "blocks/application/profile-headers/profile-with-users-skills.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-section-headers-default-section-header",
    type: "registry:block",
    description: "A default section header block.",
    files: [
      {
        path: "blocks/application/section-headers/default-section-header.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-section-headers-section-header-with-cta-buttons",
    type: "registry:block",
    description: "A section header with cta buttons block.",
    files: [
      {
        path: "blocks/application/section-headers/section-header-with-cta-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-section-headers-section-header-with-cta-tabs",
    type: "registry:block",
    description: "A section header with cta tabs block.",
    files: [
      {
        path: "blocks/application/section-headers/section-header-with-cta-tabs.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-section-headers-section-header-with-filter",
    type: "registry:block",
    description: "A section header with filter block.",
    files: [
      {
        path: "blocks/application/section-headers/section-header-with-filter.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-section-headers-section-header-with-svg-buttons",
    type: "registry:block",
    description: "A section header with svg buttons block.",
    files: [
      {
        path: "blocks/application/section-headers/section-header-with-svg-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-section-headers-section-header-with-tabs",
    type: "registry:block",
    description: "A section header with tabs block.",
    files: [
      {
        path: "blocks/application/section-headers/section-header-with-tabs.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-table-header-default-table-header",
    type: "registry:block",
    description: "A default table header block.",
    files: [
      {
        path: "blocks/application/table-header/default-table-header.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-table-header-multi-level-table-header-with-filters",
    type: "registry:block",
    description: "A multi level table header with filters block.",
    files: [
      {
        path: "blocks/application/table-header/multi-level-table-header-with-filters.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "application-table-header-table-header-with-search-input-and-cta-button",
    type: "registry:block",
    description: "A table header with search input and cta button block.",
    files: [
      {
        path: "blocks/application/table-header/table-header-with-search-input-and-cta-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-table-header-table-header-with-tabs",
    type: "registry:block",
    description: "A table header with tabs block.",
    files: [
      {
        path: "blocks/application/table-header/table-header-with-tabs.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "application-table-header-tailwind-table-sort-header",
    type: "registry:block",
    description: "A tailwind table sort header block.",
    files: [
      {
        path: "blocks/application/table-header/tailwind-table-sort-header.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-category-filter-basic-filter-with-search-and-cta-button",
    type: "registry:block",
    description: "A basic filter with search and cta button block.",
    files: [
      {
        path: "blocks/e-commerce/category-filter/basic-filter-with-search-and-cta-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-category-filter-category-filter-on-right-side",
    type: "registry:block",
    description: "A category filter on right side block.",
    files: [
      {
        path: "blocks/e-commerce/category-filter/category-filter-on-right-side.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-category-filter-category-filter-with-background",
    type: "registry:block",
    description: "A category filter with background block.",
    files: [
      {
        path: "blocks/e-commerce/category-filter/category-filter-with-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-category-filter-category-filter-with-separate-header",
    type: "registry:block",
    description: "A category filter with separate header block.",
    files: [
      {
        path: "blocks/e-commerce/category-filter/category-filter-with-separate-header.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-category-filter-default-category-filter",
    type: "registry:block",
    description: "A default category filter block.",
    files: [
      {
        path: "blocks/e-commerce/category-filter/default-category-filter.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-comment-list-basic-comments-list-with-like-and-cta-button",
    type: "registry:block",
    description: "A basic comments list with like and cta button block.",
    files: [
      {
        path: "blocks/e-commerce/comment-list/basic-comments-list-with-like-and-cta-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-comment-list-comment-block-with-text-editor",
    type: "registry:block",
    description: "A comment block with text editor block.",
    files: [
      {
        path: "blocks/e-commerce/comment-list/comment-block-with-text-editor.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-comment-list-comment-form-tailwind",
    type: "registry:block",
    description: "A comment form tailwind block.",
    files: [
      {
        path: "blocks/e-commerce/comment-list/comment-form-tailwind.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-comment-list-comment-list-with-text-editor",
    type: "registry:block",
    description: "A comment list with text editor block.",
    files: [
      {
        path: "blocks/e-commerce/comment-list/comment-list-with-text-editor.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-comment-list-comment-section-with-reply-field",
    type: "registry:block",
    description: "A comment section with reply field block.",
    files: [
      {
        path: "blocks/e-commerce/comment-list/comment-section-with-reply-field.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-comment-list-comments-section-with-form",
    type: "registry:block",
    description: "A comments section with form block.",
    files: [
      {
        path: "blocks/e-commerce/comment-list/comments-section-with-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-comment-list-comments-with-replies",
    type: "registry:block",
    description: "A comments with replies block.",
    files: [
      {
        path: "blocks/e-commerce/comment-list/comments-with-replies.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-comment-list-nested-comment-section",
    type: "registry:block",
    description: "A nested comment section block.",
    files: [
      {
        path: "blocks/e-commerce/comment-list/nested-comment-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-comment-list-simple-comment-block",
    type: "registry:block",
    description: "A simple comment block block.",
    files: [
      {
        path: "blocks/e-commerce/comment-list/simple-comment-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-comment-list-tailwind-comment-list-with-user-images",
    type: "registry:block",
    description: "A tailwind comment list with user images block.",
    files: [
      {
        path: "blocks/e-commerce/comment-list/tailwind-comment-list-with-user-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-comment-list-tailwind-css-comment-list-with-form",
    type: "registry:block",
    description: "A tailwind css comment list with form block.",
    dependencies: ["motion"],
    files: [
      {
        path: "blocks/e-commerce/comment-list/tailwind-css-comment-list-with-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-incentives-3-column-grid-tailwind-incentive-section",
    type: "registry:block",
    description: "A 3 column grid tailwind incentive section block.",
    files: [
      {
        path: "blocks/e-commerce/incentives/3-column-grid-tailwind-incentive-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-incentives-brand-logo-incentive-section",
    type: "registry:block",
    description: "A brand logo incentive section block.",
    files: [
      {
        path: "blocks/e-commerce/incentives/brand-logo-incentive-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-incentives-form-incentive-section",
    type: "registry:block",
    description: "A form incentive section block.",
    files: [
      {
        path: "blocks/e-commerce/incentives/form-incentive-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-incentives-image-in-grid-incentive-section",
    type: "registry:block",
    description: "A image in grid incentive section block.",
    files: [
      {
        path: "blocks/e-commerce/incentives/image-in-grid-incentive-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-incentives-incentive-page-with-card-view",
    type: "registry:block",
    description: "A incentive page with card view block.",
    files: [
      {
        path: "blocks/e-commerce/incentives/incentive-page-with-card-view.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-incentives-incentive-page-with-four-column-grid",
    type: "registry:block",
    description: "A incentive page with four column grid block.",
    files: [
      {
        path: "blocks/e-commerce/incentives/incentive-page-with-four-column-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-incentives-incentive-page-with-heading",
    type: "registry:block",
    description: "A incentive page with heading block.",
    files: [
      {
        path: "blocks/e-commerce/incentives/incentive-page-with-heading.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-incentives-incentive-pages-with-description-and-comparison",
    type: "registry:block",
    description: "A incentive pages with description and comparison block.",
    files: [
      {
        path: "blocks/e-commerce/incentives/incentive-pages-with-description-and-comparison.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-incentives-incentives-with-icons",
    type: "registry:block",
    description: "A incentives with icons block.",
    files: [
      {
        path: "blocks/e-commerce/incentives/incentives-with-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-incentives-split-image-incentive-section",
    type: "registry:block",
    description: "A split image incentive section block.",
    files: [
      {
        path: "blocks/e-commerce/incentives/split-image-incentive-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-confirmation-default-order-confirmation",
    type: "registry:block",
    description: "A default order confirmation block.",
    files: [
      {
        path: "blocks/e-commerce/order-confirmation/default-order-confirmation.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-confirmation-order-confirmation-component-with-scanner",
    type: "registry:block",
    description: "A order confirmation component with scanner block.",
    files: [
      {
        path: "blocks/e-commerce/order-confirmation/order-confirmation-component-with-scanner.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-confirmation-order-confirmation-with-cta",
    type: "registry:block",
    description: "A order confirmation with cta block.",
    files: [
      {
        path: "blocks/e-commerce/order-confirmation/order-confirmation-with-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-confirmation-order-confirmation-with-image",
    type: "registry:block",
    description: "A order confirmation with image block.",
    files: [
      {
        path: "blocks/e-commerce/order-confirmation/order-confirmation-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-confirmation-order-confirmation-with-message",
    type: "registry:block",
    description: "A order confirmation with message block.",
    files: [
      {
        path: "blocks/e-commerce/order-confirmation/order-confirmation-with-message.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-confirmation-order-confirmation-with-order-details",
    type: "registry:block",
    description: "A order confirmation with order details block.",
    files: [
      {
        path: "blocks/e-commerce/order-confirmation/order-confirmation-with-order-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-confirmation-order-confirmation-with-order-status",
    type: "registry:block",
    description: "A order confirmation with order status block.",
    files: [
      {
        path: "blocks/e-commerce/order-confirmation/order-confirmation-with-order-status.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-confirmation-order-confirmation-with-stepper",
    type: "registry:block",
    description: "A order confirmation with stepper block.",
    files: [
      {
        path: "blocks/e-commerce/order-confirmation/order-confirmation-with-stepper.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-confirmation-progress-steps-order-confirmation",
    type: "registry:block",
    description: "A progress steps order confirmation block.",
    files: [
      {
        path: "blocks/e-commerce/order-confirmation/progress-steps-order-confirmation.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-confirmation-side-by-side-order-confirmation",
    type: "registry:block",
    description: "A side by side order confirmation block.",
    files: [
      {
        path: "blocks/e-commerce/order-confirmation/side-by-side-order-confirmation.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-in-card-layout",
    type: "registry:block",
    description: "A order history in card layout block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-in-card-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-invoice-table",
    type: "registry:block",
    description: "A order history invoice table block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-invoice-table.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-invoice-with-card-layout",
    type: "registry:block",
    description: "A order history invoice with card layout block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-invoice-with-card-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-list-with-invoice",
    type: "registry:block",
    description: "A order history list with invoice block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-list-with-invoice.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-table",
    type: "registry:block",
    description: "A order history table block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-table.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-with-attribute",
    type: "registry:block",
    description: "A order history with attribute block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-with-attribute.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-with-banner",
    type: "registry:block",
    description: "A order history with banner block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-with-banner.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-with-card-layout",
    type: "registry:block",
    description: "A order history with card layout block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-with-card-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-with-cta-button",
    type: "registry:block",
    description: "A order history with cta button block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-with-cta-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-with-date-range-and-sort",
    type: "registry:block",
    description: "A order history with date range and sort block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-with-date-range-and-sort.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-with-date-range-and-status",
    type: "registry:block",
    description: "A order history with date range and status block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-with-date-range-and-status.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-with-detail",
    type: "registry:block",
    description: "A order history with detail block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-with-detail.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-with-pagination",
    type: "registry:block",
    description: "A order history with pagination block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-with-pagination.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-with-simple-details",
    type: "registry:block",
    description: "A order history with simple details block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-with-simple-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-with-sorting",
    type: "registry:block",
    description: "A order history with sorting block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-with-sorting.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-history-order-history-with-status-and-cta-button",
    type: "registry:block",
    description: "A order history with status and cta button block.",
    files: [
      {
        path: "blocks/e-commerce/order-history/order-history-with-status-and-cta-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-details-in-card-layout",
    type: "registry:block",
    description: "A order details in card layout block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-details-in-card-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-details-with-payment-method",
    type: "registry:block",
    description: "A order details with payment method block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-details-with-payment-method.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-summary-with-address-details",
    type: "registry:block",
    description: "A order summary with address details block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-summary-with-address-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-summary-with-billing-form",
    type: "registry:block",
    description: "A order summary with billing form block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-summary-with-billing-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-summary-with-checkout",
    type: "registry:block",
    description: "A order summary with checkout block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-summary-with-checkout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-summary-with-customer-information",
    type: "registry:block",
    description: "A order summary with customer information block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-summary-with-customer-information.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-summary-with-customer-information-and-stepper",
    type: "registry:block",
    description: "A order summary with customer information and stepper block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-summary-with-customer-information-and-stepper.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-summary-with-delivery-information",
    type: "registry:block",
    description: "A order summary with delivery information block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-summary-with-delivery-information.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-summary-with-dynamic-action",
    type: "registry:block",
    description: "A order summary with dynamic action block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-summary-with-dynamic-action.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-summary-with-order-details-payment-and-address",
    type: "registry:block",
    description:
      "A order summary with order details payment and address block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-summary-with-order-details-payment-and-address.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-summary-with-simple-details",
    type: "registry:block",
    description: "A order summary with simple details block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-summary-with-simple-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-summary-with-stepper-and-sidebar",
    type: "registry:block",
    description: "A order summary with stepper and sidebar block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-summary-with-stepper-and-sidebar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-summary-with-tabs",
    type: "registry:block",
    description: "A order summary with tabs block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-summary-with-tabs.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-order-summary-with-two-columns-full-order-details",
    type: "registry:block",
    description: "A order summary with two columns full order details block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/order-summary-with-two-columns-full-order-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-splitted-order-summary",
    type: "registry:block",
    description: "A splitted order summary block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/splitted-order-summary.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-summaries-tailwind-order-summary-with-details",
    type: "registry:block",
    description: "A tailwind order summary with details block.",
    files: [
      {
        path: "blocks/e-commerce/order-summaries/tailwind-order-summary-with-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-tracking-default-order-tracking",
    type: "registry:block",
    description: "A default order tracking block.",
    files: [
      {
        path: "blocks/e-commerce/order-tracking/default-order-tracking.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-tracking-order-tracking-with-cards",
    type: "registry:block",
    description: "A order tracking with cards block.",
    files: [
      {
        path: "blocks/e-commerce/order-tracking/order-tracking-with-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-tracking-order-tracking-with-cta",
    type: "registry:block",
    description: "A order tracking with cta block.",
    files: [
      {
        path: "blocks/e-commerce/order-tracking/order-tracking-with-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-tracking-order-tracking-with-horizontal-steps",
    type: "registry:block",
    description: "A order tracking with horizontal steps block.",
    files: [
      {
        path: "blocks/e-commerce/order-tracking/order-tracking-with-horizontal-steps.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-tracking-order-tracking-with-location-indication",
    type: "registry:block",
    description: "A order tracking with location indication block.",
    files: [
      {
        path: "blocks/e-commerce/order-tracking/order-tracking-with-location-indication.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-tracking-order-tracking-with-map-indication",
    type: "registry:block",
    description: "A order tracking with map indication block.",
    files: [
      {
        path: "blocks/e-commerce/order-tracking/order-tracking-with-map-indication.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-tracking-order-tracking-with-progress-indication",
    type: "registry:block",
    description: "A order tracking with progress indication block.",
    files: [
      {
        path: "blocks/e-commerce/order-tracking/order-tracking-with-progress-indication.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-tracking-order-tracking-with-vertical-timeline",
    type: "registry:block",
    description: "A order tracking with vertical timeline block.",
    files: [
      {
        path: "blocks/e-commerce/order-tracking/order-tracking-with-vertical-timeline.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-tracking-side-by-side-order-tracking",
    type: "registry:block",
    description: "A side by side order tracking block.",
    files: [
      {
        path: "blocks/e-commerce/order-tracking/side-by-side-order-tracking.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-order-tracking-vertical-order-tracking-timeline",
    type: "registry:block",
    description: "A vertical order tracking timeline block.",
    files: [
      {
        path: "blocks/e-commerce/order-tracking/vertical-order-tracking-timeline.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-list-card-with-full-details",
    type: "registry:block",
    description: "A card with full details block.",
    files: [
      {
        path: "blocks/e-commerce/product-list/card-with-full-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-list-card-with-supporting-text",
    type: "registry:block",
    description: "A card with supporting text block.",
    files: [
      {
        path: "blocks/e-commerce/product-list/card-with-supporting-text.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-list-product-list-with-details",
    type: "registry:block",
    description: "A product list with details block.",
    files: [
      {
        path: "blocks/e-commerce/product-list/product-list-with-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-list-static-product-list-with-grid",
    type: "registry:block",
    description: "A static product list with grid block.",
    files: [
      {
        path: "blocks/e-commerce/product-list/static-product-list-with-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-list-tailwind-product-list-with-three-column-grid",
    type: "registry:block",
    description: "A tailwind product list with three column grid block.",
    files: [
      {
        path: "blocks/e-commerce/product-list/tailwind-product-list-with-three-column-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-list-with-horizontal-card",
    type: "registry:block",
    description: "A with horizontal card block.",
    files: [
      {
        path: "blocks/e-commerce/product-list/with-horizontal-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-list-with-hover-effect",
    type: "registry:block",
    description: "A with hover effect block.",
    files: [
      {
        path: "blocks/e-commerce/product-list/with-hover-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-list-with-image-and-description",
    type: "registry:block",
    description: "A with image and description block.",
    files: [
      {
        path: "blocks/e-commerce/product-list/with-image-and-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-list-with-purchase-link",
    type: "registry:block",
    description: "A with purchase link block.",
    files: [
      {
        path: "blocks/e-commerce/product-list/with-purchase-link.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-list-with-user-rating",
    type: "registry:block",
    description: "A with user rating block.",
    files: [
      {
        path: "blocks/e-commerce/product-list/with-user-rating.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-overview-2-column-grid-images-and-description",
    type: "registry:block",
    description: "A 2 column grid images and description block.",
    files: [
      {
        path: "blocks/e-commerce/product-overview/2-column-grid-images-and-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-overview-3-column-grid-with-slider-and-details",
    type: "registry:block",
    description: "A 3 column grid with slider and details block.",
    files: [
      {
        path: "blocks/e-commerce/product-overview/3-column-grid-with-slider-and-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-overview-description-and-vertical-slider-images",
    type: "registry:block",
    description: "A description and vertical slider images block.",
    files: [
      {
        path: "blocks/e-commerce/product-overview/description-and-vertical-slider-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-overview-images-and-description-in-nested-grid",
    type: "registry:block",
    description: "A images and description in nested grid block.",
    files: [
      {
        path: "blocks/e-commerce/product-overview/images-and-description-in-nested-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-overview-masonry-image-and-description",
    type: "registry:block",
    description: "A masonry image and description block.",
    files: [
      {
        path: "blocks/e-commerce/product-overview/masonry-image-and-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-overview-product-image-with-expandable-details",
    type: "registry:block",
    description: "A product image with expandable details block.",
    files: [
      {
        path: "blocks/e-commerce/product-overview/product-image-with-expandable-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-overview-split-image-slider-with-details",
    type: "registry:block",
    description: "A split image slider with details block.",
    files: [
      {
        path: "blocks/e-commerce/product-overview/split-image-slider-with-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-overview-split-with-image-and-description",
    type: "registry:block",
    description: "A split with image and description block.",
    files: [
      {
        path: "blocks/e-commerce/product-overview/split-with-image-and-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-overview-with-image-gallery-and-description",
    type: "registry:block",
    description: "A with image gallery and description block.",
    files: [
      {
        path: "blocks/e-commerce/product-overview/with-image-gallery-and-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-customer-feedback-with-product-image",
    type: "registry:block",
    description: "A customer feedback with product image block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/customer-feedback-with-product-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-customer-review-with-cards",
    type: "registry:block",
    description: "A customer review with cards block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/customer-review-with-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-customer-reviews-with-average-rating",
    type: "registry:block",
    description: "A customer reviews with average rating block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/customer-reviews-with-average-rating.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-product-review-with-carousel",
    type: "registry:block",
    description: "A product review with carousel block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/product-review-with-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-product-review-with-rating-icons",
    type: "registry:block",
    description: "A product review with rating icons block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/product-review-with-rating-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-product-review-with-slider",
    type: "registry:block",
    description: "A product review with slider block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/product-review-with-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-product-reviews-with-submit-form",
    type: "registry:block",
    description: "A product reviews with submit form block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/product-reviews-with-submit-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-ratings-and-feedback-with-slider",
    type: "registry:block",
    description: "A ratings and feedback with slider block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/ratings-and-feedback-with-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-recent-feedback-with-add-review",
    type: "registry:block",
    description: "A recent feedback with add review block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/recent-feedback-with-add-review.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-review-form-with-detailed-user-review",
    type: "registry:block",
    description: "A review form with detailed user review block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/review-form-with-detailed-user-review.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-review-in-masonry-structure",
    type: "registry:block",
    description: "A review in masonry structure block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/review-in-masonry-structure.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-review-page-with-filters-review-page",
    type: "registry:block",
    description: "A review page with filters review page block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/review-page-with-filters-review-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-review-page-with-summary-chart",
    type: "registry:block",
    description: "A review page with summary chart block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/review-page-with-summary-chart.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-review-page-with-testimonial",
    type: "registry:block",
    description: "A review page with testimonial block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/review-page-with-testimonial.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-tailwind-css-product-review-with-avatars",
    type: "registry:block",
    description: "A tailwind css product review with avatars block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/tailwind-css-product-review-with-avatars.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-user-review-with-images",
    type: "registry:block",
    description: "A user review with images block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/user-review-with-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-product-review-user-review-with-star-rating",
    type: "registry:block",
    description: "A user review with star rating block.",
    files: [
      {
        path: "blocks/e-commerce/product-review/user-review-with-star-rating.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-refund-form-basic-refund-application-form",
    type: "registry:block",
    description: "A basic refund application form block.",
    files: [
      {
        path: "blocks/e-commerce/refund-form/basic-refund-application-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-refund-form-product-reason-selection-form",
    type: "registry:block",
    description: "A product reason selection form block.",
    files: [
      {
        path: "blocks/e-commerce/refund-form/product-reason-selection-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-refund-form-refund-request-process",
    type: "registry:block",
    description: "A refund request process block.",
    files: [
      {
        path: "blocks/e-commerce/refund-form/refund-request-process.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-refund-overview-default-refund-overview-list",
    type: "registry:block",
    description: "A default refund overview list block.",
    files: [
      {
        path: "blocks/e-commerce/refund-overview/default-refund-overview-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-refund-overview-refund-list-with-filter",
    type: "registry:block",
    description: "A refund list with filter block.",
    files: [
      {
        path: "blocks/e-commerce/refund-overview/refund-list-with-filter.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-refund-overview-refund-list-with-personal-details",
    type: "registry:block",
    description: "A refund list with personal details block.",
    files: [
      {
        path: "blocks/e-commerce/refund-overview/refund-list-with-personal-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-refund-overview-refund-with-cta",
    type: "registry:block",
    description: "A refund with cta block.",
    files: [
      {
        path: "blocks/e-commerce/refund-overview/refund-with-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-refund-overview-refund-with-table",
    type: "registry:block",
    description: "A refund with table block.",
    files: [
      {
        path: "blocks/e-commerce/refund-overview/refund-with-table.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-refund-status-default-refund-status-section",
    type: "registry:block",
    description: "A default refund status section block.",
    files: [
      {
        path: "blocks/e-commerce/refund-status/default-refund-status-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-refund-status-refund-status-with-order-summary",
    type: "registry:block",
    description: "A refund status with order summary block.",
    files: [
      {
        path: "blocks/e-commerce/refund-status/refund-status-with-order-summary.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-refund-status-refund-status-with-progress-steps",
    type: "registry:block",
    description: "A refund status with progress steps block.",
    files: [
      {
        path: "blocks/e-commerce/refund-status/refund-status-with-progress-steps.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-refund-status-refund-track-with-detailed-steps",
    type: "registry:block",
    description: "A refund track with detailed steps block.",
    files: [
      {
        path: "blocks/e-commerce/refund-status/refund-track-with-detailed-steps.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-refund-status-side-by-side-refund-status-with-timeline",
    type: "registry:block",
    description: "A side by side refund status with timeline block.",
    files: [
      {
        path: "blocks/e-commerce/refund-status/side-by-side-refund-status-with-timeline.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-checkout-page-with-cart-summary-and-payment-option",
    type: "registry:block",
    description: "A checkout page with cart summary and payment option block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/checkout-page-with-cart-summary-and-payment-option.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-multiple-column-shopping-cart-page",
    type: "registry:block",
    description: "A multiple column shopping cart page block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/multiple-column-shopping-cart-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-shopping-cart-with-payment-info",
    type: "registry:block",
    description: "A shopping cart with payment info block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/shopping-cart-with-payment-info.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-shopping-cart-with-radio-button",
    type: "registry:block",
    description: "A shopping cart with radio button block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/shopping-cart-with-radio-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-shopping-cart-with-receive-order-details",
    type: "registry:block",
    description: "A shopping cart with receive order details block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/shopping-cart-with-receive-order-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-shopping-cart-with-remove-button",
    type: "registry:block",
    description: "A shopping cart with remove button block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/shopping-cart-with-remove-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-shopping-cart-with-remove-button-option",
    type: "registry:block",
    description: "A shopping cart with remove button option block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/shopping-cart-with-remove-button-option.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-shopping-cart-with-summary",
    type: "registry:block",
    description: "A shopping cart with summary block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/shopping-cart-with-summary.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-single-column-shopping-cart-page",
    type: "registry:block",
    description: "A single column shopping cart page block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/single-column-shopping-cart-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-three-columns-shopping-cart-with-card-details",
    type: "registry:block",
    description: "A three columns shopping cart with card details block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/three-columns-shopping-cart-with-card-details.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-two-column-cart-with-summary",
    type: "registry:block",
    description: "A two column cart with summary block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/two-column-cart-with-summary.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-two-column-shopping-cart-with-order-summary",
    type: "registry:block",
    description: "A two column shopping cart with order summary block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/two-column-shopping-cart-with-order-summary.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-two-column-shopping-cart-with-sticky-position",
    type: "registry:block",
    description: "A two column shopping cart with sticky position block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/two-column-shopping-cart-with-sticky-position.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-two-column-shopping-cart-with-tab-content",
    type: "registry:block",
    description: "A two column shopping cart with tab content block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/two-column-shopping-cart-with-tab-content.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "e-commerce-shopping-cart-two-columns-shopping-cart-with-background-color",
    type: "registry:block",
    description: "A two columns shopping cart with background color block.",
    files: [
      {
        path: "blocks/e-commerce/shopping-cart/two-columns-shopping-cart-with-background-color.tsx",
        type: "registry:block",
      },
    ],
    categories: ["e-commerce"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-404-page-404-error-page-with-illustration",
    type: "registry:block",
    description: "A 404 error page with illustration block.",
    files: [
      {
        path: "blocks/full-pages/404-page/404-error-page-with-illustration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-404-page-404-page-with-cta-button",
    type: "registry:block",
    description: "A 404 page with cta button block.",
    files: [
      {
        path: "blocks/full-pages/404-page/404-page-with-cta-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-404-page-default-404-page",
    type: "registry:block",
    description: "A default 404 page block.",
    files: [
      {
        path: "blocks/full-pages/404-page/default-404-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-404-page-side-by-side-404-tailwind-page",
    type: "registry:block",
    description: "A side by side 404 tailwind page block.",
    files: [
      {
        path: "blocks/full-pages/404-page/side-by-side-404-tailwind-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-404-page-svg-illustration-with-search-bar",
    type: "registry:block",
    description: "A svg illustration with search bar block.",
    files: [
      {
        path: "blocks/full-pages/404-page/svg-illustration-with-search-bar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-about-us-page-about-us-with-hero-section-and-tile-view",
    type: "registry:block",
    description: "A about us with hero section and tile view block.",
    files: [
      {
        path: "blocks/full-pages/about-us-page/about-us-with-hero-section-and-tile-view.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-about-us-page-about-us-with-image-tiles",
    type: "registry:block",
    description: "A about us with image tiles block.",
    files: [
      {
        path: "blocks/full-pages/about-us-page/about-us-with-image-tiles.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-about-us-page-about-us-with-team-and-stats",
    type: "registry:block",
    description: "A about us with team and stats block.",
    files: [
      {
        path: "blocks/full-pages/about-us-page/about-us-with-team-and-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-about-us-page-about-us-with-two-column-grid-images-and-description",
    type: "registry:block",
    description:
      "A about us with two column grid images and description block.",
    files: [
      {
        path: "blocks/full-pages/about-us-page/about-us-with-two-column-grid-images-and-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-blog-details-blog-page-with-full-screen-image-and-two-column-grid",
    type: "registry:block",
    description:
      "A blog page with full screen image and two column grid block.",
    files: [
      {
        path: "blocks/full-pages/blog-details/blog-page-with-full-screen-image-and-two-column-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-blog-details-blog-page-with-images-and-image-grid",
    type: "registry:block",
    description: "A blog page with images and image grid block.",
    files: [
      {
        path: "blocks/full-pages/blog-details/blog-page-with-images-and-image-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-blog-details-simple-blog-details-page",
    type: "registry:block",
    description: "A simple blog details page block.",
    files: [
      {
        path: "blocks/full-pages/blog-details/simple-blog-details-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-career-pages-career-list-and-card-with-hover-effect",
    type: "registry:block",
    description: "A career list and card with hover effect block.",
    files: [
      {
        path: "blocks/full-pages/career-pages/career-list-and-card-with-hover-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-career-pages-career-page-with-creative-image-layout-carousel-slider",
    type: "registry:block",
    description:
      "A career page with creative image layout carousel slider block.",
    files: [
      {
        path: "blocks/full-pages/career-pages/career-page-with-creative-image-layout-carousel-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-career-pages-career-page-with-description-feature-list-icons-horizontal-stats",
    type: "registry:block",
    description:
      "A career page with description feature list icons horizontal stats block.",
    files: [
      {
        path: "blocks/full-pages/career-pages/career-page-with-description-feature-list-icons-horizontal-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-career-pages-career-page-with-three-column-blog-image-feature-list-with-hover",
    type: "registry:block",
    description:
      "A career page with three column blog image feature list with hover block.",
    files: [
      {
        path: "blocks/full-pages/career-pages/career-page-with-three-column-blog-image-feature-list-with-hover.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-coming-soon-page-basic-coming-soon-page",
    type: "registry:block",
    description: "A basic coming soon page block.",
    files: [
      {
        path: "blocks/full-pages/coming-soon-page/basic-coming-soon-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-coming-soon-page-circular-countdown-coming-soon-page",
    type: "registry:block",
    description: "A circular countdown coming soon page block.",
    files: [
      {
        path: "blocks/full-pages/coming-soon-page/circular-countdown-coming-soon-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-coming-soon-page-dark-tailwinds-are-coming-soon",
    type: "registry:block",
    description: "A dark tailwinds are coming soon block.",
    files: [
      {
        path: "blocks/full-pages/coming-soon-page/dark-tailwinds-are-coming-soon.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-coming-soon-page-splitted-coming-soon-page",
    type: "registry:block",
    description: "A splitted coming soon page block.",
    files: [
      {
        path: "blocks/full-pages/coming-soon-page/splitted-coming-soon-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-coming-soon-page-tailwind-is-coming-soon",
    type: "registry:block",
    description: "A tailwind is coming soon block.",
    files: [
      {
        path: "blocks/full-pages/coming-soon-page/tailwind-is-coming-soon.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-coming-soon-page-tailwind-is-coming-soon-with-a-gradient-background",
    type: "registry:block",
    description: "A tailwind is coming soon with a gradient background block.",
    files: [
      {
        path: "blocks/full-pages/coming-soon-page/tailwind-is-coming-soon-with-a-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-contactus-page-contact-us-form-with-background-and-svg-icon",
    type: "registry:block",
    description: "A contact us form with background and svg icon block.",
    files: [
      {
        path: "blocks/full-pages/contactus-page/contact-us-form-with-background-and-svg-icon.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-contactus-page-contact-us-with-feature-list-card-with-email-sign-up",
    type: "registry:block",
    description:
      "A contact us with feature list card with email sign up block.",
    files: [
      {
        path: "blocks/full-pages/contactus-page/contact-us-with-feature-list-card-with-email-sign-up.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-contactus-page-contact-us-with-form-background",
    type: "registry:block",
    description: "A contact us with form background block.",
    files: [
      {
        path: "blocks/full-pages/contactus-page/contact-us-with-form-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-contactus-page-contact-us-with-gradient-background-image",
    type: "registry:block",
    description: "A contact us with gradient background image block.",
    files: [
      {
        path: "blocks/full-pages/contactus-page/contact-us-with-gradient-background-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-legal-pages-legal-page-with-gradient-background-heading",
    type: "registry:block",
    description: "A legal page with gradient background heading block.",
    files: [
      {
        path: "blocks/full-pages/legal-pages/legal-page-with-gradient-background-heading.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-legal-pages-legal-page-with-list-background",
    type: "registry:block",
    description: "A legal page with list background block.",
    files: [
      {
        path: "blocks/full-pages/legal-pages/legal-page-with-list-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-login-page-login-form-with-gradient-background",
    type: "registry:block",
    description: "A login form with gradient background block.",
    files: [
      {
        path: "blocks/full-pages/login-page/login-form-with-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-login-page-login-page-with-cta-button-illustrations",
    type: "registry:block",
    description: "A login page with cta button illustrations block.",
    files: [
      {
        path: "blocks/full-pages/login-page/login-page-with-cta-button-illustrations.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-login-page-login-page-with-gradient-background-form",
    type: "registry:block",
    description: "A login page with gradient background form block.",
    files: [
      {
        path: "blocks/full-pages/login-page/login-page-with-gradient-background-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-login-page-login-page-with-gradient-background-image",
    type: "registry:block",
    description: "A login page with gradient background image block.",
    files: [
      {
        path: "blocks/full-pages/login-page/login-page-with-gradient-background-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-login-page-login-page-with-split-form",
    type: "registry:block",
    description: "A login page with split form block.",
    files: [
      {
        path: "blocks/full-pages/login-page/login-page-with-split-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-login-page-login-with-social-media-button",
    type: "registry:block",
    description: "A login with social media button block.",
    files: [
      {
        path: "blocks/full-pages/login-page/login-with-social-media-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-maintenance-page-default-maintenance-page",
    type: "registry:block",
    description: "A default maintenance page block.",
    files: [
      {
        path: "blocks/full-pages/maintenance-page/default-maintenance-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-maintenance-page-maintenance-page-with-countdown",
    type: "registry:block",
    description: "A maintenance page with countdown block.",
    files: [
      {
        path: "blocks/full-pages/maintenance-page/maintenance-page-with-countdown.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-maintenance-page-maintenance-page-with-logo",
    type: "registry:block",
    description: "A maintenance page with logo block.",
    files: [
      {
        path: "blocks/full-pages/maintenance-page/maintenance-page-with-logo.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-maintenance-page-maintenance-page-with-social-links",
    type: "registry:block",
    description: "A maintenance page with social links block.",
    files: [
      {
        path: "blocks/full-pages/maintenance-page/maintenance-page-with-social-links.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-maintenance-page-splitted-under-maintenance-page",
    type: "registry:block",
    description: "A splitted under maintenance page block.",
    files: [
      {
        path: "blocks/full-pages/maintenance-page/splitted-under-maintenance-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-maintenance-page-tailwind-maintenance-page-with-illustration",
    type: "registry:block",
    description: "A tailwind maintenance page with illustration block.",
    files: [
      {
        path: "blocks/full-pages/maintenance-page/tailwind-maintenance-page-with-illustration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-pricing-page-pricing-plan-card-with-availability-table",
    type: "registry:block",
    description: "A pricing plan card with availability table block.",
    files: [
      {
        path: "blocks/full-pages/pricing-page/pricing-plan-card-with-availability-table.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "full-pages-pricing-page-pricing-plan-card-with-availability-table-and-faqs",
    type: "registry:block",
    description: "A pricing plan card with availability table and faqs block.",
    files: [
      {
        path: "blocks/full-pages/pricing-page/pricing-plan-card-with-availability-table-and-faqs.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-pricing-page-pricing-plans-details-with-gradient-background",
    type: "registry:block",
    description: "A pricing plans details with gradient background block.",
    files: [
      {
        path: "blocks/full-pages/pricing-page/pricing-plans-details-with-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "full-pages-pricing-page-pricing-plans-with-tab-plan-comparison-faqs",
    type: "registry:block",
    description: "A pricing plans with tab plan comparison faqs block.",
    files: [
      {
        path: "blocks/full-pages/pricing-page/pricing-plans-with-tab-plan-comparison-faqs.tsx",
        type: "registry:block",
      },
    ],
    categories: ["full-pages"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-cards-with-images",
    type: "registry:block",
    description: "A about cards with images block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-cards-with-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-description-cards-with-visual-image",
    type: "registry:block",
    description: "A about description cards with visual image block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-description-cards-with-visual-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-list-with-image",
    type: "registry:block",
    description: "A about list with image block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-list-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-as-blog-cards",
    type: "registry:block",
    description: "A about us as blog cards block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-as-blog-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-component-tailwind",
    type: "registry:block",
    description: "A about us component tailwind block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-component-tailwind.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-component-tailwind-with-stats",
    type: "registry:block",
    description: "A about us component tailwind with stats block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-component-tailwind-with-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-image-gallery",
    type: "registry:block",
    description: "A about us image gallery block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-image-gallery.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-informative-tailwind-section",
    type: "registry:block",
    description: "A about us informative tailwind section block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-informative-tailwind-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-section-tailwind",
    type: "registry:block",
    description: "A about us section tailwind block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-section-tailwind.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-section-with-number-counter",
    type: "registry:block",
    description: "A about us section with number counter block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-section-with-number-counter.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-tailwind-with-feature-list",
    type: "registry:block",
    description: "A about us tailwind with feature list block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-tailwind-with-feature-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-tailwind-with-mission-and-vision",
    type: "registry:block",
    description: "A about us tailwind with mission and vision block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-tailwind-with-mission-and-vision.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-tailwind-with-vertical-image",
    type: "registry:block",
    description: "A about us tailwind with vertical image block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-tailwind-with-vertical-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-template",
    type: "registry:block",
    description: "A about us template block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-template.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-two-column-cards",
    type: "registry:block",
    description: "A about us two column cards block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-two-column-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-with-alternate-image",
    type: "registry:block",
    description: "A about us with alternate image block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-with-alternate-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-with-descriptive-card",
    type: "registry:block",
    description: "A about us with descriptive card block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-with-descriptive-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-with-feature-lists-and-graphs",
    type: "registry:block",
    description: "A about us with feature lists and graphs block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-with-feature-lists-and-graphs.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-about-us-with-stat-counts",
    type: "registry:block",
    description: "A about us with stat counts block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/about-us-with-stat-counts.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-alternate-image-with-feature-list",
    type: "registry:block",
    description: "A alternate image with feature list block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/alternate-image-with-feature-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-background-image-with-overlay-description",
    type: "registry:block",
    description: "A background image with overlay description block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/background-image-with-overlay-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-background-image-with-text-overlay",
    type: "registry:block",
    description: "A background image with text overlay block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/background-image-with-text-overlay.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-basic-about-us-section-tailwind",
    type: "registry:block",
    description: "A basic about us section tailwind block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/basic-about-us-section-tailwind.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-content-and-image-side-by-side",
    type: "registry:block",
    description: "A content and image side by side block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/content-and-image-side-by-side.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-creative-about-us-section",
    type: "registry:block",
    description: "A creative about us section block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/creative-about-us-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-creative-about-us-with-key-feature-list",
    type: "registry:block",
    description: "A creative about us with key feature list block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/creative-about-us-with-key-feature-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-creative-visual-image-with-about-info",
    type: "registry:block",
    description: "A creative visual image with about info block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/creative-visual-image-with-about-info.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-dark-theme-about-us-section",
    type: "registry:block",
    description: "A dark theme about us section block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/dark-theme-about-us-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-full-heighted-about-us-tailwind-component",
    type: "registry:block",
    description: "A full heighted about us tailwind component block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/full-heighted-about-us-tailwind-component.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-image-with-feature-list",
    type: "registry:block",
    description: "A image with feature list block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/image-with-feature-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-image-with-mission-and-vision",
    type: "registry:block",
    description: "A image with mission and vision block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/image-with-mission-and-vision.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-images-with-heading-and-description",
    type: "registry:block",
    description: "A images with heading and description block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/images-with-heading-and-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-side-by-side-about-us-tailwind",
    type: "registry:block",
    description: "A side by side about us tailwind block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/side-by-side-about-us-tailwind.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-side-by-side-image-about-us-template",
    type: "registry:block",
    description: "A side by side image about us template block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/side-by-side-image-about-us-template.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-side-by-side-image-with-content",
    type: "registry:block",
    description: "A side by side image with content block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/side-by-side-image-with-content.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-simple-about-us-section",
    type: "registry:block",
    description: "A simple about us section block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/simple-about-us-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-splitted-about-us-tailwind-template",
    type: "registry:block",
    description: "A splitted about us tailwind template block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/splitted-about-us-tailwind-template.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-splitted-content-and-image",
    type: "registry:block",
    description: "A splitted content and image block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/splitted-content-and-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-tailwind-about-us-cards",
    type: "registry:block",
    description: "A tailwind about us cards block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/tailwind-about-us-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-tailwind-about-us-page",
    type: "registry:block",
    description: "A tailwind about us page block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/tailwind-about-us-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-tailwind-about-us-page-with-dark-theme",
    type: "registry:block",
    description: "A tailwind about us page with dark theme block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/tailwind-about-us-page-with-dark-theme.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-tailwind-about-us-section-with-image",
    type: "registry:block",
    description: "A tailwind about us section with image block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/tailwind-about-us-section-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-tailwind-about-us-section-with-video-layout",
    type: "registry:block",
    description: "A tailwind about us section with video layout block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/tailwind-about-us-section-with-video-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-tailwind-about-us-template-with-image",
    type: "registry:block",
    description: "A tailwind about us template with image block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/tailwind-about-us-template-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-tailwind-about-us-with-image-grid",
    type: "registry:block",
    description: "A tailwind about us with image grid block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/tailwind-about-us-with-image-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-tailwind-css-about-us-with-tab",
    type: "registry:block",
    description: "A tailwind css about us with tab block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/tailwind-css-about-us-with-tab.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-three-columns-about-section",
    type: "registry:block",
    description: "A three columns about section block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/three-columns-about-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-vertical-about-slider",
    type: "registry:block",
    description: "A vertical about slider block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/vertical-about-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-vertical-about-us-tailwind",
    type: "registry:block",
    description: "A vertical about us tailwind block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/vertical-about-us-tailwind.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-vertical-stat-counts-cards",
    type: "registry:block",
    description: "A vertical stat counts cards block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/vertical-stat-counts-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-about-us-section-visual-image-with-stats",
    type: "registry:block",
    description: "A visual image with stats block.",
    files: [
      {
        path: "blocks/marketing/about-us-section/visual-image-with-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-alternate-blog-post",
    type: "registry:block",
    description: "A alternate blog post block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/alternate-blog-post.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-alternate-image-horizontal-blogs",
    type: "registry:block",
    description: "A alternate image horizontal blogs block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/alternate-image-horizontal-blogs.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-blog-card-with-category-tags",
    type: "registry:block",
    description: "A blog card with category tags block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/blog-card-with-category-tags.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-blog-card-with-footer",
    type: "registry:block",
    description: "A blog card with footer block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/blog-card-with-footer.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-blog-card-with-image-as-a-background",
    type: "registry:block",
    description: "A blog card with image as a background block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/blog-card-with-image-as-a-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-blog-list-with-on-large-blog",
    type: "registry:block",
    description: "A blog list with on large blog block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/blog-list-with-on-large-blog.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-blog-listing-with-highlighted-blog",
    type: "registry:block",
    description: "A blog listing with highlighted blog block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/blog-listing-with-highlighted-blog.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-blog-post-cards-with-bottom-image",
    type: "registry:block",
    description: "A blog post cards with bottom image block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/blog-post-cards-with-bottom-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-blog-post-with-badge",
    type: "registry:block",
    description: "A blog post with badge block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/blog-post-with-badge.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-blog-post-with-feature-list",
    type: "registry:block",
    description: "A blog post with feature list block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/blog-post-with-feature-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-blog-post-with-horizontal-single-column",
    type: "registry:block",
    description: "A blog post with horizontal single column block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/blog-post-with-horizontal-single-column.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-blog-post-with-overlay-text",
    type: "registry:block",
    description: "A blog post with overlay text block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/blog-post-with-overlay-text.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-blog-with-expanded-card",
    type: "registry:block",
    description: "A blog with expanded card block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/blog-with-expanded-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-blogs-with-card-layout-and-scale-effect",
    type: "registry:block",
    description: "A blogs with card layout and scale effect block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/blogs-with-card-layout-and-scale-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-centered-blog-card-slider",
    type: "registry:block",
    description: "A centered blog card slider block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/centered-blog-card-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-detailed-article-blog",
    type: "registry:block",
    description: "A detailed article blog block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/detailed-article-blog.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-detailed-blog-post-card",
    type: "registry:block",
    description: "A detailed blog post card block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/detailed-blog-post-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-different-grid-layout-with-opacity-effect",
    type: "registry:block",
    description: "A different grid layout with opacity effect block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/different-grid-layout-with-opacity-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-different-scale-blog-cards",
    type: "registry:block",
    description: "A different scale blog cards block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/different-scale-blog-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-filter-image-blog-post-slider",
    type: "registry:block",
    description: "A filter image blog post slider block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/filter-image-blog-post-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-full-height-blog-post",
    type: "registry:block",
    description: "A full height blog post block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/full-height-blog-post.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-highlighted-top-blog",
    type: "registry:block",
    description: "A highlighted top blog block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/highlighted-top-blog.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-horizontal-blog-post",
    type: "registry:block",
    description: "A horizontal blog post block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/horizontal-blog-post.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-informative-blog-with-colorful-cards",
    type: "registry:block",
    description: "A informative blog with colorful cards block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/informative-blog-with-colorful-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-large-horizontal-blog-post",
    type: "registry:block",
    description: "A large horizontal blog post block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/large-horizontal-blog-post.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-latest-blog-with-dark-version",
    type: "registry:block",
    description: "A latest blog with dark version block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/latest-blog-with-dark-version.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-modern-structured-blog-posts",
    type: "registry:block",
    description: "A modern structured blog posts block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/modern-structured-blog-posts.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-newest-article-blog",
    type: "registry:block",
    description: "A newest article blog block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/newest-article-blog.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-one-large-blog-with-three-smaller-blog",
    type: "registry:block",
    description: "A one large blog with three smaller blog block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/one-large-blog-with-three-smaller-blog.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-partial-blog-cads-slider",
    type: "registry:block",
    description: "A partial blog cads slider block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/partial-blog-cads-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-side-by-side-blog-post-layout",
    type: "registry:block",
    description: "A side by side blog post layout block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/side-by-side-blog-post-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-simple-blog-card-with-badge",
    type: "registry:block",
    description: "A simple blog card with badge block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/simple-blog-card-with-badge.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-simple-blog-post",
    type: "registry:block",
    description: "A simple blog post block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/simple-blog-post.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-simple-three-column-blog-component",
    type: "registry:block",
    description: "A simple three column blog component block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/simple-three-column-blog-component.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-single-blog-post-as-carousel",
    type: "registry:block",
    description: "A single blog post as carousel block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/single-blog-post-as-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-blog-card-with-two-columns-and-image",
    type: "registry:block",
    description: "A tailwind blog card with two columns and image block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-blog-card-with-two-columns-and-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-blog-cards-with-slider",
    type: "registry:block",
    description: "A tailwind blog cards with slider block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-blog-cards-with-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-blog-component-with-background-images",
    type: "registry:block",
    description: "A tailwind blog component with background images block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-blog-component-with-background-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-blog-grid-layout-with-scale-effect",
    type: "registry:block",
    description: "A tailwind blog grid layout with scale effect block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-blog-grid-layout-with-scale-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-blog-post-with-feature-list",
    type: "registry:block",
    description: "A tailwind blog post with feature list block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-blog-post-with-feature-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-blog-post-with-gradient-hover",
    type: "registry:block",
    description: "A tailwind blog post with gradient hover block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-blog-post-with-gradient-hover.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-blog-three-column-grid",
    type: "registry:block",
    description: "A tailwind blog three column grid block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-blog-three-column-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-blog-with-creative-image-layout",
    type: "registry:block",
    description: "A tailwind blog with creative image layout block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-blog-with-creative-image-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-blog-with-different-card-layout",
    type: "registry:block",
    description: "A tailwind blog with different card layout block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-blog-with-different-card-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-blog-with-gradient-background",
    type: "registry:block",
    description: "A tailwind blog with gradient background block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-blog-with-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-blog-with-horizontal-cards",
    type: "registry:block",
    description: "A tailwind blog with horizontal cards block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-blog-with-horizontal-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-blog-with-testimonials",
    type: "registry:block",
    description: "A tailwind blog with testimonials block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-blog-with-testimonials.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-blogs-with-card-layout-and-grayscale-effect",
    type: "registry:block",
    description:
      "A tailwind blogs with card layout and grayscale effect block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-blogs-with-card-layout-and-grayscale-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-cards-with-different-layout",
    type: "registry:block",
    description: "A tailwind cards with different layout block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-cards-with-different-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-tailwind-css-blog-carousel",
    type: "registry:block",
    description: "A tailwind css blog carousel block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/tailwind-css-blog-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-theree-column-with-tag-overlap",
    type: "registry:block",
    description: "A theree column with tag overlap block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/theree-column-with-tag-overlap.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-three-column-blog-list",
    type: "registry:block",
    description: "A three column blog list block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/three-column-blog-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-three-column-blog-with-image",
    type: "registry:block",
    description: "A three column blog with image block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/three-column-blog-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-three-column-with-border",
    type: "registry:block",
    description: "A three column with border block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/three-column-with-border.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-top-large-blog-post",
    type: "registry:block",
    description: "A top large blog post block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/top-large-blog-post.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-trendy-latets-blog-post",
    type: "registry:block",
    description: "A trendy latets blog post block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/trendy-latets-blog-post.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-two-column-blog-post-with-name-overlap",
    type: "registry:block",
    description: "A two column blog post with name overlap block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/two-column-blog-post-with-name-overlap.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-two-column-blog-with-image",
    type: "registry:block",
    description: "A two column blog with image block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/two-column-blog-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-vertical-blog-post-list",
    type: "registry:block",
    description: "A vertical blog post list block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/vertical-blog-post-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-blogs-news-vertical-feature-blog-list",
    type: "registry:block",
    description: "A vertical feature blog list block.",
    files: [
      {
        path: "blocks/marketing/blogs-news/vertical-feature-blog-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-clients-client-logo-grid-with-background",
    type: "registry:block",
    description: "A client logo grid with background block.",
    files: [
      {
        path: "blocks/marketing/clients/client-logo-grid-with-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-clients-client-logos-in-card",
    type: "registry:block",
    description: "A client logos in card block.",
    files: [
      {
        path: "blocks/marketing/clients/client-logos-in-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-clients-client-section-as-info-card",
    type: "registry:block",
    description: "A client section as info card block.",
    files: [
      {
        path: "blocks/marketing/clients/client-section-as-info-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-clients-customer-logos-as-list-view",
    type: "registry:block",
    description: "A customer logos as list view block.",
    files: [
      {
        path: "blocks/marketing/clients/customer-logos-as-list-view.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-clients-logo-cloud-in-grid",
    type: "registry:block",
    description: "A logo cloud in grid block.",
    files: [
      {
        path: "blocks/marketing/clients/logo-cloud-in-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-clients-partner-logo-as-carousel",
    type: "registry:block",
    description: "A partner logo as carousel block.",
    files: [
      {
        path: "blocks/marketing/clients/partner-logo-as-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-clients-simple-customer-logo-grid",
    type: "registry:block",
    description: "A simple customer logo grid block.",
    files: [
      {
        path: "blocks/marketing/clients/simple-customer-logo-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-black-and-orange-contact-section-with-map",
    type: "registry:block",
    description: "A black and orange contact section with map block.",
    files: [
      {
        path: "blocks/marketing/contact-form/black-and-orange-contact-section-with-map.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-center-aligned-contact-form-with-info-card-blocks",
    type: "registry:block",
    description: "A center aligned contact form with info card blocks block.",
    files: [
      {
        path: "blocks/marketing/contact-form/center-aligned-contact-form-with-info-card-blocks.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-center-aligned-with-info-card-blocks",
    type: "registry:block",
    description: "A center aligned with info card blocks block.",
    files: [
      {
        path: "blocks/marketing/contact-form/center-aligned-with-info-card-blocks.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-clean-contact-information-with-support-form",
    type: "registry:block",
    description: "A clean contact information with support form block.",
    files: [
      {
        path: "blocks/marketing/contact-form/clean-contact-information-with-support-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-colorful-call-to-action-contact-blocks",
    type: "registry:block",
    description: "A colorful call to action contact blocks block.",
    files: [
      {
        path: "blocks/marketing/contact-form/colorful-call-to-action-contact-blocks.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-contact-form-tailwind-css-with-company-information",
    type: "registry:block",
    description: "A contact form tailwind css with company information block.",
    files: [
      {
        path: "blocks/marketing/contact-form/contact-form-tailwind-css-with-company-information.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-contact-form-with-background",
    type: "registry:block",
    description: "A contact form with background block.",
    files: [
      {
        path: "blocks/marketing/contact-form/contact-form-with-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-contact-form-with-company-information",
    type: "registry:block",
    description: "A contact form with company information block.",
    files: [
      {
        path: "blocks/marketing/contact-form/contact-form-with-company-information.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-contact-form-with-illustration",
    type: "registry:block",
    description: "A contact form with illustration block.",
    files: [
      {
        path: "blocks/marketing/contact-form/contact-form-with-illustration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-contact-form-with-image-and-address",
    type: "registry:block",
    description: "A contact form with image and address block.",
    files: [
      {
        path: "blocks/marketing/contact-form/contact-form-with-image-and-address.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-contact-form-with-info-and-map",
    type: "registry:block",
    description: "A contact form with info and map block.",
    files: [
      {
        path: "blocks/marketing/contact-form/contact-form-with-info-and-map.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-contact-info-section-with-office-locations",
    type: "registry:block",
    description: "A contact info section with office locations block.",
    files: [
      {
        path: "blocks/marketing/contact-form/contact-info-section-with-office-locations.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-contact-section-with-image-details-and-map",
    type: "registry:block",
    description: "A contact section with image details and map block.",
    files: [
      {
        path: "blocks/marketing/contact-form/contact-section-with-image-details-and-map.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-creative-contact-form-design-with-background",
    type: "registry:block",
    description: "A creative contact form design with background block.",
    files: [
      {
        path: "blocks/marketing/contact-form/creative-contact-form-design-with-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-dark-contact-form-with-green-info-cards",
    type: "registry:block",
    description: "A dark contact form with green info cards block.",
    files: [
      {
        path: "blocks/marketing/contact-form/dark-contact-form-with-green-info-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-dark-contact-section-with-social-and-info-cards",
    type: "registry:block",
    description: "A dark contact section with social and info cards block.",
    files: [
      {
        path: "blocks/marketing/contact-form/dark-contact-section-with-social-and-info-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-dark-info-card-contact-section",
    type: "registry:block",
    description: "A dark info card contact section block.",
    files: [
      {
        path: "blocks/marketing/contact-form/dark-info-card-contact-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-dark-themed-contact-form-with-info-cards",
    type: "registry:block",
    description: "A dark themed contact form with info cards block.",
    files: [
      {
        path: "blocks/marketing/contact-form/dark-themed-contact-form-with-info-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-get-in-touch-with-grid-image-contact-us-form",
    type: "registry:block",
    description: "A get in touch with grid image contact us form block.",
    files: [
      {
        path: "blocks/marketing/contact-form/get-in-touch-with-grid-image-contact-us-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-image-contact-form-with-info-row",
    type: "registry:block",
    description: "A image contact form with info row block.",
    files: [
      {
        path: "blocks/marketing/contact-form/image-contact-form-with-info-row.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-info-card-blocks-contact-us-form",
    type: "registry:block",
    description: "A info card blocks contact us form block.",
    files: [
      {
        path: "blocks/marketing/contact-form/info-card-blocks-contact-us-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-multi-panel-contact-with-map-and-form",
    type: "registry:block",
    description: "A multi panel contact with map and form block.",
    files: [
      {
        path: "blocks/marketing/contact-form/multi-panel-contact-with-map-and-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-overlapping-contact-form",
    type: "registry:block",
    description: "A overlapping contact form block.",
    files: [
      {
        path: "blocks/marketing/contact-form/overlapping-contact-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-side-by-side-grid-contact-us-form",
    type: "registry:block",
    description: "A side by side grid contact us form block.",
    files: [
      {
        path: "blocks/marketing/contact-form/side-by-side-grid-contact-us-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-simple-tailwind-css-contact-form-with-social-links",
    type: "registry:block",
    description: "A simple tailwind css contact form with social links block.",
    files: [
      {
        path: "blocks/marketing/contact-form/simple-tailwind-css-contact-form-with-social-links.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-split-contact-cards-with-map-and-info-blocks",
    type: "registry:block",
    description: "A split contact cards with map and info blocks block.",
    files: [
      {
        path: "blocks/marketing/contact-form/split-contact-cards-with-map-and-info-blocks.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-split-with-image-contact-us-section",
    type: "registry:block",
    description: "A split with image contact us section block.",
    files: [
      {
        path: "blocks/marketing/contact-form/split-with-image-contact-us-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-split-with-pattern-contact-form",
    type: "registry:block",
    description: "A split with pattern contact form block.",
    files: [
      {
        path: "blocks/marketing/contact-form/split-with-pattern-contact-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-tailwind-contact-form-with-info-overlay",
    type: "registry:block",
    description: "A tailwind contact form with info overlay block.",
    files: [
      {
        path: "blocks/marketing/contact-form/tailwind-contact-form-with-info-overlay.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-tailwind-contact-form-with-two-fields",
    type: "registry:block",
    description: "A tailwind contact form with two fields block.",
    files: [
      {
        path: "blocks/marketing/contact-form/tailwind-contact-form-with-two-fields.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-tailwind-contact-section-with-split-form-info-cards-and-map",
    type: "registry:block",
    description:
      "A tailwind contact section with split form info cards and map block.",
    files: [
      {
        path: "blocks/marketing/contact-form/tailwind-contact-section-with-split-form-info-cards-and-map.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-tailwind-contact-with-address-location",
    type: "registry:block",
    description: "A tailwind contact with address location block.",
    files: [
      {
        path: "blocks/marketing/contact-form/tailwind-contact-with-address-location.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-tailwind-contact-with-color-varient",
    type: "registry:block",
    description: "A tailwind contact with color varient block.",
    files: [
      {
        path: "blocks/marketing/contact-form/tailwind-contact-with-color-varient.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-tailwind-contact-with-gradient-background",
    type: "registry:block",
    description: "A tailwind contact with gradient background block.",
    files: [
      {
        path: "blocks/marketing/contact-form/tailwind-contact-with-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-tailwind-contact-with-social-icons",
    type: "registry:block",
    description: "A tailwind contact with social icons block.",
    files: [
      {
        path: "blocks/marketing/contact-form/tailwind-contact-with-social-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-tailwind-css-contact-form-with-map",
    type: "registry:block",
    description: "A tailwind css contact form with map block.",
    files: [
      {
        path: "blocks/marketing/contact-form/tailwind-css-contact-form-with-map.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-tailwind-css-two-column-contact-info-and-form",
    type: "registry:block",
    description: "A tailwind css two column contact info and form block.",
    files: [
      {
        path: "blocks/marketing/contact-form/tailwind-css-two-column-contact-info-and-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-tailwind-modern-multi-card-contact-page",
    type: "registry:block",
    description: "A tailwind modern multi card contact page block.",
    files: [
      {
        path: "blocks/marketing/contact-form/tailwind-modern-multi-card-contact-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-contact-form-three-column-information-card-contact-form-tailwind",
    type: "registry:block",
    description: "A three column information card contact form tailwind block.",
    files: [
      {
        path: "blocks/marketing/contact-form/three-column-information-card-contact-form-tailwind.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-app-download-cta-with-dashboard-visual",
    type: "registry:block",
    description: "A app download cta with dashboard visual block.",
    files: [
      {
        path: "blocks/marketing/cta/app-download-cta-with-dashboard-visual.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-community-cta-with-illustration",
    type: "registry:block",
    description: "A community cta with illustration block.",
    files: [
      {
        path: "blocks/marketing/cta/community-cta-with-illustration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-as-box-layout",
    type: "registry:block",
    description: "A cta as box layout block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-as-box-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-buttons-only",
    type: "registry:block",
    description: "A cta buttons only block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-buttons-only.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-buttons-with-centrally-aligned-features-list",
    type: "registry:block",
    description: "A cta buttons with centrally aligned features list block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-buttons-with-centrally-aligned-features-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-buttons-with-heading",
    type: "registry:block",
    description: "A cta buttons with heading block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-buttons-with-heading.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-buttons-with-split-image",
    type: "registry:block",
    description: "A cta buttons with split image block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-buttons-with-split-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-for-email-sign-up",
    type: "registry:block",
    description: "A cta for email sign up block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-for-email-sign-up.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-page-with-mobile-application-download",
    type: "registry:block",
    description: "A cta page with mobile application download block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-page-with-mobile-application-download.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-for-exclusive-subscriber-rewards",
    type: "registry:block",
    description: "A cta section for exclusive subscriber rewards block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-for-exclusive-subscriber-rewards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-for-home-discovery",
    type: "registry:block",
    description: "A cta section for home discovery block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-for-home-discovery.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-for-modern-living-spaces",
    type: "registry:block",
    description: "A cta section for modern living spaces block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-for-modern-living-spaces.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-for-portfolio-strategy",
    type: "registry:block",
    description: "A cta section for portfolio strategy block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-for-portfolio-strategy.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-for-stories-solutions",
    type: "registry:block",
    description: "A cta section for stories solutions block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-for-stories-solutions.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-for-subscription",
    type: "registry:block",
    description: "A cta section for subscription block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-for-subscription.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-for-unique-seo-solutions",
    type: "registry:block",
    description: "A cta section for unique seo solutions block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-for-unique-seo-solutions.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-with-background-image",
    type: "registry:block",
    description: "A cta section with background image block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-with-background-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-with-creative-solutions",
    type: "registry:block",
    description: "A cta section with creative solutions block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-with-creative-solutions.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-with-download-metrics",
    type: "registry:block",
    description: "A cta section with download metrics block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-with-download-metrics.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-with-mesh-gradient-background",
    type: "registry:block",
    description: "A cta section with mesh gradient background block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-with-mesh-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-with-mobile-application",
    type: "registry:block",
    description: "A cta section with mobile application block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-with-mobile-application.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-with-portfolio-advice",
    type: "registry:block",
    description: "A cta section with portfolio advice block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-with-portfolio-advice.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-section-with-ratings",
    type: "registry:block",
    description: "A cta section with ratings block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-section-with-ratings.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-with-centrally-aligned-subscribe-button",
    type: "registry:block",
    description: "A cta with centrally aligned subscribe button block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-with-centrally-aligned-subscribe-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-with-email-sign-up-and-image",
    type: "registry:block",
    description: "A cta with email sign up and image block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-with-email-sign-up-and-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-with-feature-list",
    type: "registry:block",
    description: "A cta with feature list block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-with-feature-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-with-feature-list-and-image",
    type: "registry:block",
    description: "A cta with feature list and image block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-with-feature-list-and-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-with-form-and-description",
    type: "registry:block",
    description: "A cta with form and description block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-with-form-and-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-with-gradient-background",
    type: "registry:block",
    description: "A cta with gradient background block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-with-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-with-illustration-and-newsletter",
    type: "registry:block",
    description: "A cta with illustration and newsletter block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-with-illustration-and-newsletter.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-with-newsletter-background",
    type: "registry:block",
    description: "A cta with newsletter background block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-with-newsletter-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-cta-with-two-cards",
    type: "registry:block",
    description: "A cta with two cards block.",
    files: [
      {
        path: "blocks/marketing/cta/cta-with-two-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-dark-cta-with-success-dashboard-preview",
    type: "registry:block",
    description: "A dark cta with success dashboard preview block.",
    files: [
      {
        path: "blocks/marketing/cta/dark-cta-with-success-dashboard-preview.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-expert-it-support-cta-with-demo-buttons",
    type: "registry:block",
    description: "A expert it support cta with demo buttons block.",
    files: [
      {
        path: "blocks/marketing/cta/expert-it-support-cta-with-demo-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-gradient-cta-with-profile-meeting-card",
    type: "registry:block",
    description: "A gradient cta with profile meeting card block.",
    files: [
      {
        path: "blocks/marketing/cta/gradient-cta-with-profile-meeting-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-gradient-cta-with-rating-stars",
    type: "registry:block",
    description: "A gradient cta with rating stars block.",
    files: [
      {
        path: "blocks/marketing/cta/gradient-cta-with-rating-stars.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-hr-dashboard-cta-with-blue-gradient",
    type: "registry:block",
    description: "A hr dashboard cta with blue gradient block.",
    files: [
      {
        path: "blocks/marketing/cta/hr-dashboard-cta-with-blue-gradient.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-it-solutions-cta-with-dual-buttons",
    type: "registry:block",
    description: "A it solutions cta with dual buttons block.",
    files: [
      {
        path: "blocks/marketing/cta/it-solutions-cta-with-dual-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-mobile-application-mockup-with-cta-buttons",
    type: "registry:block",
    description: "A mobile application mockup with cta buttons block.",
    files: [
      {
        path: "blocks/marketing/cta/mobile-application-mockup-with-cta-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-multi-image-scrolling-cta-with-trial",
    type: "registry:block",
    description: "A multi image scrolling cta with trial block.",
    files: [
      {
        path: "blocks/marketing/cta/multi-image-scrolling-cta-with-trial.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-streamlined-trading-cta-with-analytics",
    type: "registry:block",
    description: "A streamlined trading cta with analytics block.",
    files: [
      {
        path: "blocks/marketing/cta/streamlined-trading-cta-with-analytics.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-subscribe-form-with-image",
    type: "registry:block",
    description: "A subscribe form with image block.",
    files: [
      {
        path: "blocks/marketing/cta/subscribe-form-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-subscribe-form-with-svg-icon",
    type: "registry:block",
    description: "A subscribe form with svg icon block.",
    files: [
      {
        path: "blocks/marketing/cta/subscribe-form-with-svg-icon.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-tailwind-css-cta-section-for-app-download",
    type: "registry:block",
    description: "A tailwind css cta section for app download block.",
    files: [
      {
        path: "blocks/marketing/cta/tailwind-css-cta-section-for-app-download.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-tailwind-css-cta-with-community-real-photos",
    type: "registry:block",
    description: "A tailwind css cta with community real photos block.",
    files: [
      {
        path: "blocks/marketing/cta/tailwind-css-cta-with-community-real-photos.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-tailwind-css-gradient-background-cta",
    type: "registry:block",
    description: "A tailwind css gradient background cta block.",
    files: [
      {
        path: "blocks/marketing/cta/tailwind-css-gradient-background-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-tailwind-css-image-based-cta",
    type: "registry:block",
    description: "A tailwind css image based cta block.",
    files: [
      {
        path: "blocks/marketing/cta/tailwind-css-image-based-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-tailwind-cta-section-with-professional-guidance",
    type: "registry:block",
    description: "A tailwind cta section with professional guidance block.",
    files: [
      {
        path: "blocks/marketing/cta/tailwind-cta-section-with-professional-guidance.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-cta-tailwind-free-trial-cta-with-benefits",
    type: "registry:block",
    description: "A tailwind free trial cta with benefits block.",
    files: [
      {
        path: "blocks/marketing/cta/tailwind-free-trial-cta-with-benefits.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-alternate-faq-style-with-arrow",
    type: "registry:block",
    description: "A alternate faq style with arrow block.",
    files: [
      {
        path: "blocks/marketing/faq/alternate-faq-style-with-arrow.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-border-card-faq",
    type: "registry:block",
    description: "A border card faq block.",
    files: [
      {
        path: "blocks/marketing/faq/border-card-faq.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-centered-two-column-faq",
    type: "registry:block",
    description: "A centered two column faq block.",
    files: [
      {
        path: "blocks/marketing/faq/centered-two-column-faq.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-creative-image-with-tailwind-faq",
    type: "registry:block",
    description: "A creative image with tailwind faq block.",
    files: [
      {
        path: "blocks/marketing/faq/creative-image-with-tailwind-faq.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-default-faq-section-with-image-block",
    type: "registry:block",
    description: "A default faq section with image block block.",
    files: [
      {
        path: "blocks/marketing/faq/default-faq-section-with-image-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-as-testimonial",
    type: "registry:block",
    description: "A faq as testimonial block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-as-testimonial.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-cards-with-background",
    type: "registry:block",
    description: "A faq cards with background block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-cards-with-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-illustration-with-questions",
    type: "registry:block",
    description: "A faq illustration with questions block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-illustration-with-questions.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-inside-horizontal-tabs",
    type: "registry:block",
    description: "A faq inside horizontal tabs block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-inside-horizontal-tabs.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-inside-tabs",
    type: "registry:block",
    description: "A faq inside tabs block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-inside-tabs.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-list-with-creative-image",
    type: "registry:block",
    description: "A faq list with creative image block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-list-with-creative-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-list-with-image-position",
    type: "registry:block",
    description: "A faq list with image position block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-list-with-image-position.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-section-as-a-list-block",
    type: "registry:block",
    description: "A faq section as a list block block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-section-as-a-list-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-section-with-arrow-background",
    type: "registry:block",
    description: "A faq section with arrow background block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-section-with-arrow-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-section-with-arrow-style-block",
    type: "registry:block",
    description: "A faq section with arrow style block block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-section-with-arrow-style-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-section-with-background-block",
    type: "registry:block",
    description: "A faq section with background block block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-section-with-background-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-section-with-box-layout-block",
    type: "registry:block",
    description: "A faq section with box layout block block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-section-with-box-layout-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-section-with-cta-button",
    type: "registry:block",
    description: "A faq section with cta button block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-section-with-cta-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-with-active-gradient-background",
    type: "registry:block",
    description: "A faq with active gradient background block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-with-active-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-with-background",
    type: "registry:block",
    description: "A faq with background block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-with-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-with-category",
    type: "registry:block",
    description: "A faq with category block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-with-category.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-with-cta-form",
    type: "registry:block",
    description: "A faq with cta form block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-with-cta-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-with-cta-form-and-illustration",
    type: "registry:block",
    description: "A faq with cta form and illustration block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-with-cta-form-and-illustration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-with-cta-info",
    type: "registry:block",
    description: "A faq with cta info block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-with-cta-info.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-with-cta-section",
    type: "registry:block",
    description: "A faq with cta section block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-with-cta-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-with-gradient-background",
    type: "registry:block",
    description: "A faq with gradient background block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-with-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-with-heading",
    type: "registry:block",
    description: "A faq with heading block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-with-heading.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-with-horizontal-tab",
    type: "registry:block",
    description: "A faq with horizontal tab block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-with-horizontal-tab.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-with-numeric-list",
    type: "registry:block",
    description: "A faq with numeric list block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-with-numeric-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faq-with-vertical-tab",
    type: "registry:block",
    description: "A faq with vertical tab block.",
    files: [
      {
        path: "blocks/marketing/faq/faq-with-vertical-tab.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-faqs-as-tabs-block",
    type: "registry:block",
    description: "A faqs as tabs block block.",
    files: [
      {
        path: "blocks/marketing/faq/faqs-as-tabs-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-horizontal-aligned-faq",
    type: "registry:block",
    description: "A horizontal aligned faq block.",
    files: [
      {
        path: "blocks/marketing/faq/horizontal-aligned-faq.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-horizontal-faq",
    type: "registry:block",
    description: "A horizontal faq block.",
    files: [
      {
        path: "blocks/marketing/faq/horizontal-faq.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-masonary-structured-faq",
    type: "registry:block",
    description: "A masonary structured faq block.",
    files: [
      {
        path: "blocks/marketing/faq/masonary-structured-faq.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-nested-faq-with-category",
    type: "registry:block",
    description: "A nested faq with category block.",
    files: [
      {
        path: "blocks/marketing/faq/nested-faq-with-category.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-question-form-with-faq-list",
    type: "registry:block",
    description: "A question form with faq list block.",
    files: [
      {
        path: "blocks/marketing/faq/question-form-with-faq-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-side-by-side-faq-and-image",
    type: "registry:block",
    description: "A side by side faq and image block.",
    files: [
      {
        path: "blocks/marketing/faq/side-by-side-faq-and-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-tailwind-css-faq-with-cta-form",
    type: "registry:block",
    description: "A tailwind css faq with cta form block.",
    files: [
      {
        path: "blocks/marketing/faq/tailwind-css-faq-with-cta-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-tailwind-faq-card",
    type: "registry:block",
    description: "A tailwind faq card block.",
    files: [
      {
        path: "blocks/marketing/faq/tailwind-faq-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-tailwind-faq-component-with-banner-image",
    type: "registry:block",
    description: "A tailwind faq component with banner image block.",
    files: [
      {
        path: "blocks/marketing/faq/tailwind-faq-component-with-banner-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-tailwind-faq-section-with-border-layout",
    type: "registry:block",
    description: "A tailwind faq section with border layout block.",
    files: [
      {
        path: "blocks/marketing/faq/tailwind-faq-section-with-border-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-tailwind-faq-section-with-image-and-border-layout",
    type: "registry:block",
    description: "A tailwind faq section with image and border layout block.",
    files: [
      {
        path: "blocks/marketing/faq/tailwind-faq-section-with-image-and-border-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-tailwind-faq-with-illustration",
    type: "registry:block",
    description: "A tailwind faq with illustration block.",
    files: [
      {
        path: "blocks/marketing/faq/tailwind-faq-with-illustration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-three-column-faq-cards",
    type: "registry:block",
    description: "A three column faq cards block.",
    files: [
      {
        path: "blocks/marketing/faq/three-column-faq-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-three-column-faq-with-icons",
    type: "registry:block",
    description: "A three column faq with icons block.",
    files: [
      {
        path: "blocks/marketing/faq/three-column-faq-with-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-three-column-tailwind-faq-section",
    type: "registry:block",
    description: "A three column tailwind faq section block.",
    files: [
      {
        path: "blocks/marketing/faq/three-column-tailwind-faq-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-two-column-faq-with-headings",
    type: "registry:block",
    description: "A two column faq with headings block.",
    files: [
      {
        path: "blocks/marketing/faq/two-column-faq-with-headings.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-two-column-with-icon-background",
    type: "registry:block",
    description: "A two column with icon background block.",
    files: [
      {
        path: "blocks/marketing/faq/two-column-with-icon-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-vertical-faq-list-with-heading",
    type: "registry:block",
    description: "A vertical faq list with heading block.",
    files: [
      {
        path: "blocks/marketing/faq/vertical-faq-list-with-heading.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-faq-vertical-tailwind-faq-section",
    type: "registry:block",
    description: "A vertical tailwind faq section block.",
    files: [
      {
        path: "blocks/marketing/faq/vertical-tailwind-faq-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-a-feature-list-with-a-partial-background",
    type: "registry:block",
    description: "A a feature list with a partial background block.",
    files: [
      {
        path: "blocks/marketing/features/a-feature-list-with-a-partial-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-a-feature-list-with-colorful-icons",
    type: "registry:block",
    description: "A a feature list with colorful icons block.",
    files: [
      {
        path: "blocks/marketing/features/a-feature-list-with-colorful-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-alternate-image-with-a-dark-feature-list",
    type: "registry:block",
    description: "A alternate image with a dark feature list block.",
    files: [
      {
        path: "blocks/marketing/features/alternate-image-with-a-dark-feature-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-alternate-image-with-feature-list-block",
    type: "registry:block",
    description: "A alternate image with feature list block block.",
    files: [
      {
        path: "blocks/marketing/features/alternate-image-with-feature-list-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-application-feature-cards",
    type: "registry:block",
    description: "A application feature cards block.",
    files: [
      {
        path: "blocks/marketing/features/application-feature-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-center-mode-feature-card-slider",
    type: "registry:block",
    description: "A center mode feature card slider block.",
    files: [
      {
        path: "blocks/marketing/features/center-mode-feature-card-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-creative-app-mockup-with-features",
    type: "registry:block",
    description: "A creative app mockup with features block.",
    files: [
      {
        path: "blocks/marketing/features/creative-app-mockup-with-features.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-default-feature-tailwind-css-block",
    type: "registry:block",
    description: "A default feature tailwind css block block.",
    files: [
      {
        path: "blocks/marketing/features/default-feature-tailwind-css-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-description-with-feature-icons",
    type: "registry:block",
    description: "A description with feature icons block.",
    files: [
      {
        path: "blocks/marketing/features/description-with-feature-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-block-cards-with-graph-images",
    type: "registry:block",
    description: "A feature block cards with graph images block.",
    files: [
      {
        path: "blocks/marketing/features/feature-block-cards-with-graph-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-block-with-cover-image-block",
    type: "registry:block",
    description: "A feature block with cover image block block.",
    files: [
      {
        path: "blocks/marketing/features/feature-block-with-cover-image-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-blocks-with-partial-slides",
    type: "registry:block",
    description: "A feature blocks with partial slides block.",
    files: [
      {
        path: "blocks/marketing/features/feature-blocks-with-partial-slides.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-cards-with-background-icons",
    type: "registry:block",
    description: "A feature cards with background icons block.",
    files: [
      {
        path: "blocks/marketing/features/feature-cards-with-background-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-cards-with-graph-images",
    type: "registry:block",
    description: "A feature cards with graph images block.",
    files: [
      {
        path: "blocks/marketing/features/feature-cards-with-graph-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-cards-with-overlay-images",
    type: "registry:block",
    description: "A feature cards with overlay images block.",
    files: [
      {
        path: "blocks/marketing/features/feature-cards-with-overlay-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-grid-with-gradient-icons",
    type: "registry:block",
    description: "A feature grid with gradient icons block.",
    files: [
      {
        path: "blocks/marketing/features/feature-grid-with-gradient-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-list-card-with-solid-background",
    type: "registry:block",
    description: "A feature list card with solid background block.",
    files: [
      {
        path: "blocks/marketing/features/feature-list-card-with-solid-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-list-with-border-layout",
    type: "registry:block",
    description: "A feature list with border layout block.",
    files: [
      {
        path: "blocks/marketing/features/feature-list-with-border-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-list-with-dashboard-image",
    type: "registry:block",
    description: "A feature list with dashboard image block.",
    files: [
      {
        path: "blocks/marketing/features/feature-list-with-dashboard-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-list-with-rounded-cards",
    type: "registry:block",
    description: "A feature list with rounded cards block.",
    files: [
      {
        path: "blocks/marketing/features/feature-list-with-rounded-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-section-with-card-layout",
    type: "registry:block",
    description: "A feature section with card layout block.",
    files: [
      {
        path: "blocks/marketing/features/feature-section-with-card-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-section-with-dark-theme-block",
    type: "registry:block",
    description: "A feature section with dark theme block block.",
    files: [
      {
        path: "blocks/marketing/features/feature-section-with-dark-theme-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-section-with-faq-block",
    type: "registry:block",
    description: "A feature section with faq block block.",
    files: [
      {
        path: "blocks/marketing/features/feature-section-with-faq-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-tab-blocks",
    type: "registry:block",
    description: "A feature tab blocks block.",
    files: [
      {
        path: "blocks/marketing/features/feature-tab-blocks.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-tab-cards-with-banners",
    type: "registry:block",
    description: "A feature tab cards with banners block.",
    files: [
      {
        path: "blocks/marketing/features/feature-tab-cards-with-banners.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-feature-tabs-with-cta-button-block",
    type: "registry:block",
    description: "A feature tabs with cta button block block.",
    files: [
      {
        path: "blocks/marketing/features/feature-tabs-with-cta-button-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-features-grid-with-translated-icons",
    type: "registry:block",
    description: "A features grid with translated icons block.",
    files: [
      {
        path: "blocks/marketing/features/features-grid-with-translated-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-features-with-a-ticker-slider",
    type: "registry:block",
    description: "A features with a ticker slider block.",
    files: [
      {
        path: "blocks/marketing/features/features-with-a-ticker-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-features-with-auto-height-cards",
    type: "registry:block",
    description: "A features with auto height cards block.",
    files: [
      {
        path: "blocks/marketing/features/features-with-auto-height-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-features-with-graphs-and-the-cover-image",
    type: "registry:block",
    description: "A features with graphs and the cover image block.",
    files: [
      {
        path: "blocks/marketing/features/features-with-graphs-and-the-cover-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-features-with-illustration",
    type: "registry:block",
    description: "A features with illustration block.",
    files: [
      {
        path: "blocks/marketing/features/features-with-illustration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-features-with-illustration-image",
    type: "registry:block",
    description: "A features with illustration image block.",
    files: [
      {
        path: "blocks/marketing/features/features-with-illustration-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-features-with-illustrations",
    type: "registry:block",
    description: "A features with illustrations block.",
    files: [
      {
        path: "blocks/marketing/features/features-with-illustrations.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-features-with-the-app-mockup",
    type: "registry:block",
    description: "A features with the app mockup block.",
    files: [
      {
        path: "blocks/marketing/features/features-with-the-app-mockup.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-grid-layout-feature-cards",
    type: "registry:block",
    description: "A grid layout feature cards block.",
    files: [
      {
        path: "blocks/marketing/features/grid-layout-feature-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-heading-only-feature-section-with-dark-theme",
    type: "registry:block",
    description: "A heading only feature section with dark theme block.",
    files: [
      {
        path: "blocks/marketing/features/heading-only-feature-section-with-dark-theme.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-horizontal-feature-listing",
    type: "registry:block",
    description: "A horizontal feature listing block.",
    files: [
      {
        path: "blocks/marketing/features/horizontal-feature-listing.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-horizontal-feature-tabs-with-images",
    type: "registry:block",
    description: "A horizontal feature tabs with images block.",
    files: [
      {
        path: "blocks/marketing/features/horizontal-feature-tabs-with-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-image-with-features",
    type: "registry:block",
    description: "A image with features block.",
    files: [
      {
        path: "blocks/marketing/features/image-with-features.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-modern-structured-images-with-feature-lists",
    type: "registry:block",
    description: "A modern structured images with feature lists block.",
    files: [
      {
        path: "blocks/marketing/features/modern-structured-images-with-feature-lists.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-multicolor-background-feature-cards",
    type: "registry:block",
    description: "A multicolor background feature cards block.",
    files: [
      {
        path: "blocks/marketing/features/multicolor-background-feature-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-multicolor-feature-cards",
    type: "registry:block",
    description: "A multicolor feature cards block.",
    files: [
      {
        path: "blocks/marketing/features/multicolor-feature-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-partial-feature-slider-with-the-dark-version",
    type: "registry:block",
    description: "A partial feature slider with the dark version block.",
    files: [
      {
        path: "blocks/marketing/features/partial-feature-slider-with-the-dark-version.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-rounded-feature-list-tabs-with-cover-images",
    type: "registry:block",
    description: "A rounded feature list tabs with cover images block.",
    files: [
      {
        path: "blocks/marketing/features/rounded-feature-list-tabs-with-cover-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-splitted-feature-blocks-with-image",
    type: "registry:block",
    description: "A splitted feature blocks with image block.",
    files: [
      {
        path: "blocks/marketing/features/splitted-feature-blocks-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-splitted-feature-section-with-image",
    type: "registry:block",
    description: "A splitted feature section with image block.",
    files: [
      {
        path: "blocks/marketing/features/splitted-feature-section-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-tailwind-css-feature-cards-with-creative-layout",
    type: "registry:block",
    description: "A tailwind css feature cards with creative layout block.",
    files: [
      {
        path: "blocks/marketing/features/tailwind-css-feature-cards-with-creative-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-tailwind-css-features-as-tabs",
    type: "registry:block",
    description: "A tailwind css features as tabs block.",
    files: [
      {
        path: "blocks/marketing/features/tailwind-css-features-as-tabs.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-tailwind-css-features-with-phone-mock-up",
    type: "registry:block",
    description: "A tailwind css features with phone mock up block.",
    files: [
      {
        path: "blocks/marketing/features/tailwind-css-features-with-phone-mock-up.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-tailwind-feature-cards",
    type: "registry:block",
    description: "A tailwind feature cards block.",
    files: [
      {
        path: "blocks/marketing/features/tailwind-feature-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-tailwind-features-with-cta-buttons",
    type: "registry:block",
    description: "A tailwind features with cta buttons block.",
    files: [
      {
        path: "blocks/marketing/features/tailwind-features-with-cta-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-tailwind-features-with-custom-icons",
    type: "registry:block",
    description: "A tailwind features with custom icons block.",
    files: [
      {
        path: "blocks/marketing/features/tailwind-features-with-custom-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-tailwind-features-with-hover-effect",
    type: "registry:block",
    description: "A tailwind features with hover effect block.",
    files: [
      {
        path: "blocks/marketing/features/tailwind-features-with-hover-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-testimonial-layout-with-feature-card-block",
    type: "registry:block",
    description: "A testimonial layout with feature card block block.",
    files: [
      {
        path: "blocks/marketing/features/testimonial-layout-with-feature-card-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-three-column-grid-feature-list",
    type: "registry:block",
    description: "A three column grid feature list block.",
    files: [
      {
        path: "blocks/marketing/features/three-column-grid-feature-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-two-column-feature-grid",
    type: "registry:block",
    description: "A two column feature grid block.",
    files: [
      {
        path: "blocks/marketing/features/two-column-feature-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-vertical-accordion-feature-list",
    type: "registry:block",
    description: "A vertical accordion feature list block.",
    files: [
      {
        path: "blocks/marketing/features/vertical-accordion-feature-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-vertical-feature-card-with-tailwind-css",
    type: "registry:block",
    description: "A vertical feature card with tailwind css block.",
    files: [
      {
        path: "blocks/marketing/features/vertical-feature-card-with-tailwind-css.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-vertical-feature-list-with-cover-image",
    type: "registry:block",
    description: "A vertical feature list with cover image block.",
    files: [
      {
        path: "blocks/marketing/features/vertical-feature-list-with-cover-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-vertical-feature-list-with-icons",
    type: "registry:block",
    description: "A vertical feature list with icons block.",
    files: [
      {
        path: "blocks/marketing/features/vertical-feature-list-with-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-features-with-gradient-background-block",
    type: "registry:block",
    description: "A with gradient background block block.",
    files: [
      {
        path: "blocks/marketing/features/with-gradient-background-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-centered-footer-with-cta",
    type: "registry:block",
    description: "A centered footer with cta block.",
    files: [
      {
        path: "blocks/marketing/footer/centered-footer-with-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-centered-footer-with-subscribe-form",
    type: "registry:block",
    description: "A centered footer with subscribe form block.",
    files: [
      {
        path: "blocks/marketing/footer/centered-footer-with-subscribe-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-creative-with-cta-buttons",
    type: "registry:block",
    description: "A creative with cta buttons block.",
    files: [
      {
        path: "blocks/marketing/footer/creative-with-cta-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-dark-footer-with-newsletter",
    type: "registry:block",
    description: "A dark footer with newsletter block.",
    files: [
      {
        path: "blocks/marketing/footer/dark-footer-with-newsletter.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-dark-footer-with-subscribe-form",
    type: "registry:block",
    description: "A dark footer with subscribe form block.",
    files: [
      {
        path: "blocks/marketing/footer/dark-footer-with-subscribe-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-default-tailwind-footer",
    type: "registry:block",
    description: "A default tailwind footer block.",
    files: [
      {
        path: "blocks/marketing/footer/default-tailwind-footer.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-five-columns-with-subscribe-button",
    type: "registry:block",
    description: "A five columns with subscribe button block.",
    files: [
      {
        path: "blocks/marketing/footer/five-columns-with-subscribe-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-footer-with-app-buttons",
    type: "registry:block",
    description: "A footer with app buttons block.",
    files: [
      {
        path: "blocks/marketing/footer/footer-with-app-buttons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-footer-with-background",
    type: "registry:block",
    description: "A footer with background block.",
    files: [
      {
        path: "blocks/marketing/footer/footer-with-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-footer-with-gallery",
    type: "registry:block",
    description: "A footer with gallery block.",
    files: [
      {
        path: "blocks/marketing/footer/footer-with-gallery.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-footer-with-member-info",
    type: "registry:block",
    description: "A footer with member info block.",
    files: [
      {
        path: "blocks/marketing/footer/footer-with-member-info.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-footer-with-social-media-icons",
    type: "registry:block",
    description: "A footer with social media icons block.",
    files: [
      {
        path: "blocks/marketing/footer/footer-with-social-media-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-four-columns-with-address-location",
    type: "registry:block",
    description: "A four columns with address location block.",
    files: [
      {
        path: "blocks/marketing/footer/four-columns-with-address-location.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-four-columns-with-subscribe-form",
    type: "registry:block",
    description: "A four columns with subscribe form block.",
    files: [
      {
        path: "blocks/marketing/footer/four-columns-with-subscribe-form.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-horizontal-footer",
    type: "registry:block",
    description: "A horizontal footer block.",
    files: [
      {
        path: "blocks/marketing/footer/horizontal-footer.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-horizontal-footer-with-dark-version",
    type: "registry:block",
    description: "A horizontal footer with dark version block.",
    files: [
      {
        path: "blocks/marketing/footer/horizontal-footer-with-dark-version.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-horizontal-footer-with-light-version",
    type: "registry:block",
    description: "A horizontal footer with light version block.",
    files: [
      {
        path: "blocks/marketing/footer/horizontal-footer-with-light-version.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-newsletter-form-with-pre-footer-cta",
    type: "registry:block",
    description: "A newsletter form with pre footer cta block.",
    files: [
      {
        path: "blocks/marketing/footer/newsletter-form-with-pre-footer-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-newsletter-with-address-location",
    type: "registry:block",
    description: "A newsletter with address location block.",
    files: [
      {
        path: "blocks/marketing/footer/newsletter-with-address-location.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-pre-footer-newsletter",
    type: "registry:block",
    description: "A pre footer newsletter block.",
    files: [
      {
        path: "blocks/marketing/footer/pre-footer-newsletter.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-simple-centered-footer",
    type: "registry:block",
    description: "A simple centered footer block.",
    files: [
      {
        path: "blocks/marketing/footer/simple-centered-footer.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-simple-footer-with-cta-button",
    type: "registry:block",
    description: "A simple footer with cta button block.",
    files: [
      {
        path: "blocks/marketing/footer/simple-footer-with-cta-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-standard-footer",
    type: "registry:block",
    description: "A standard footer block.",
    files: [
      {
        path: "blocks/marketing/footer/standard-footer.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-subscribe-form-in-footer",
    type: "registry:block",
    description: "A subscribe form in footer block.",
    files: [
      {
        path: "blocks/marketing/footer/subscribe-form-in-footer.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-tailwind-footer-template",
    type: "registry:block",
    description: "A tailwind footer template block.",
    files: [
      {
        path: "blocks/marketing/footer/tailwind-footer-template.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-footer-tailwind-footer-with-dark-version",
    type: "registry:block",
    description: "A tailwind footer with dark version block.",
    files: [
      {
        path: "blocks/marketing/footer/tailwind-footer-with-dark-version.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-image-with-lightbox",
    type: "registry:block",
    description: "A gallery section image with lightbox block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-image-with-lightbox.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-autoplay-slider",
    type: "registry:block",
    description: "A gallery section with autoplay slider block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-autoplay-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-grid-and-overlay-effect",
    type: "registry:block",
    description: "A gallery section with grid and overlay effect block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-grid-and-overlay-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-grid-layout",
    type: "registry:block",
    description: "A gallery section with grid layout block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-grid-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-innovation",
    type: "registry:block",
    description: "A gallery section with innovation block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-innovation.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-lightbox-effect",
    type: "registry:block",
    description: "A gallery section with lightbox effect block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-lightbox-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-lightbox-image",
    type: "registry:block",
    description: "A gallery section with lightbox image block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-lightbox-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-masonary-layout",
    type: "registry:block",
    description: "A gallery section with masonary layout block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-masonary-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-overlay-effect",
    type: "registry:block",
    description: "A gallery section with overlay effect block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-overlay-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-overlay-image",
    type: "registry:block",
    description: "A gallery section with overlay image block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-overlay-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-pagination",
    type: "registry:block",
    description: "A gallery section with pagination block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-pagination.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-scale-effect",
    type: "registry:block",
    description: "A gallery section with scale effect block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-scale-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-slider",
    type: "registry:block",
    description: "A gallery section with slider block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-tab-content",
    type: "registry:block",
    description: "A gallery section with tab content block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-tab-content.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-testimonial",
    type: "registry:block",
    description: "A gallery section with testimonial block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-testimonial.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-transform-image",
    type: "registry:block",
    description: "A gallery section with transform image block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-transform-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-gallery-gallery-section-with-vertical-slider",
    type: "registry:block",
    description: "A gallery section with vertical slider block.",
    files: [
      {
        path: "blocks/marketing/gallery/gallery-section-with-vertical-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-accommodation-businesses-hero-section",
    type: "registry:block",
    description: "A accommodation businesses hero section block.",
    files: [
      {
        path: "blocks/marketing/hero-section/accommodation-businesses-hero-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-accommodation-hero-section-with-social-icons",
    type: "registry:block",
    description: "A accommodation hero section with social icons block.",
    files: [
      {
        path: "blocks/marketing/hero-section/accommodation-hero-section-with-social-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-background-cover-image-with-search",
    type: "registry:block",
    description: "A background cover image with search block.",
    files: [
      {
        path: "blocks/marketing/hero-section/background-cover-image-with-search.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-background-illustration-with-dark-mode",
    type: "registry:block",
    description: "A background illustration with dark mode block.",
    files: [
      {
        path: "blocks/marketing/hero-section/background-illustration-with-dark-mode.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-background-image-with-cta",
    type: "registry:block",
    description: "A background image with cta block.",
    files: [
      {
        path: "blocks/marketing/hero-section/background-image-with-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-booking-hero-section-with-full-background-hero-image-tailwind",
    type: "registry:block",
    description:
      "A booking hero section with full background hero image tailwind block.",
    files: [
      {
        path: "blocks/marketing/hero-section/booking-hero-section-with-full-background-hero-image-tailwind.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-cover-image-with-blog-description",
    type: "registry:block",
    description: "A cover image with blog description block.",
    files: [
      {
        path: "blocks/marketing/hero-section/cover-image-with-blog-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-cover-image-with-cta",
    type: "registry:block",
    description: "A cover image with cta block.",
    files: [
      {
        path: "blocks/marketing/hero-section/cover-image-with-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-creative-hero-section-with-background-image",
    type: "registry:block",
    description: "A creative hero section with background image block.",
    files: [
      {
        path: "blocks/marketing/hero-section/creative-hero-section-with-background-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-creative-hero-section-with-search",
    type: "registry:block",
    description: "A creative hero section with search block.",
    files: [
      {
        path: "blocks/marketing/hero-section/creative-hero-section-with-search.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-dark-hero-section-with-gradient-background",
    type: "registry:block",
    description: "A dark hero section with gradient background block.",
    files: [
      {
        path: "blocks/marketing/hero-section/dark-hero-section-with-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-ecommerce-hero-section",
    type: "registry:block",
    description: "A ecommerce hero section block.",
    files: [
      {
        path: "blocks/marketing/hero-section/ecommerce-hero-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-fashion-hero-section-with-multi-column",
    type: "registry:block",
    description: "A fashion hero section with multi column block.",
    files: [
      {
        path: "blocks/marketing/hero-section/fashion-hero-section-with-multi-column.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-flight-booking-hero-section-with-information-stats",
    type: "registry:block",
    description: "A flight booking hero section with information stats block.",
    files: [
      {
        path: "blocks/marketing/hero-section/flight-booking-hero-section-with-information-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-background-and-cards",
    type: "registry:block",
    description: "A hero section with background and cards block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-background-and-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-carousel-slider",
    type: "registry:block",
    description: "A hero section with carousel slider block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-carousel-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-content-blocks",
    type: "registry:block",
    description: "A hero section with content blocks block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-content-blocks.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-content-card",
    type: "registry:block",
    description: "A hero section with content card block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-content-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-customer-logos",
    type: "registry:block",
    description: "A hero section with customer logos block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-customer-logos.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-dashboard-cover-image",
    type: "registry:block",
    description: "A hero section with dashboard cover image block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-dashboard-cover-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-data-points-carousel",
    type: "registry:block",
    description: "A hero section with data points carousel block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-data-points-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-gradient-background",
    type: "registry:block",
    description: "A hero section with gradient background block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-phone-mockup",
    type: "registry:block",
    description: "A hero section with phone mockup block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-phone-mockup.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-seperate-card-layout",
    type: "registry:block",
    description: "A hero section with seperate card layout block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-seperate-card-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-stat-cards",
    type: "registry:block",
    description: "A hero section with stat cards block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-stat-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-statistics-carousel",
    type: "registry:block",
    description: "A hero section with statistics carousel block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-statistics-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-thumbnail-carousel",
    type: "registry:block",
    description: "A hero section with thumbnail carousel block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-thumbnail-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-vertical-carousel",
    type: "registry:block",
    description: "A hero section with vertical carousel block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-vertical-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-section-with-vertical-content-block",
    type: "registry:block",
    description: "A hero section with vertical content block block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-section-with-vertical-content-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-with-dark-theme",
    type: "registry:block",
    description: "A hero with dark theme block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-with-dark-theme.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-hero-with-grid-column-images",
    type: "registry:block",
    description: "A hero with grid column images block.",
    files: [
      {
        path: "blocks/marketing/hero-section/hero-with-grid-column-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-horizontal-header-with-image-grid-and-social-icons",
    type: "registry:block",
    description: "A horizontal header with image grid and social icons block.",
    files: [
      {
        path: "blocks/marketing/hero-section/horizontal-header-with-image-grid-and-social-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-horizontal-hero-section-with-video",
    type: "registry:block",
    description: "A horizontal hero section with video block.",
    files: [
      {
        path: "blocks/marketing/hero-section/horizontal-hero-section-with-video.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-illustration-with-cta-button",
    type: "registry:block",
    description: "A illustration with cta button block.",
    files: [
      {
        path: "blocks/marketing/hero-section/illustration-with-cta-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-image-with-heading",
    type: "registry:block",
    description: "A image with heading block.",
    files: [
      {
        path: "blocks/marketing/hero-section/image-with-heading.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-minimal-product-and-services-preview-hero-section",
    type: "registry:block",
    description: "A minimal product and services preview hero section block.",
    files: [
      {
        path: "blocks/marketing/hero-section/minimal-product-and-services-preview-hero-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-mobile-application-hero-section",
    type: "registry:block",
    description: "A mobile application hero section block.",
    files: [
      {
        path: "blocks/marketing/hero-section/mobile-application-hero-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-mobile-application-hero-section-with-image",
    type: "registry:block",
    description: "A mobile application hero section with image block.",
    files: [
      {
        path: "blocks/marketing/hero-section/mobile-application-hero-section-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-modern-hero-section-with-carousel",
    type: "registry:block",
    description: "A modern hero section with carousel block.",
    files: [
      {
        path: "blocks/marketing/hero-section/modern-hero-section-with-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-phone-mockup-with-app-download",
    type: "registry:block",
    description: "A phone mockup with app download block.",
    files: [
      {
        path: "blocks/marketing/hero-section/phone-mockup-with-app-download.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-product-hero-section",
    type: "registry:block",
    description: "A product hero section block.",
    files: [
      {
        path: "blocks/marketing/hero-section/product-hero-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-product-hero-section-with-carousel",
    type: "registry:block",
    description: "A product hero section with carousel block.",
    files: [
      {
        path: "blocks/marketing/hero-section/product-hero-section-with-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-registration-form-with-cta",
    type: "registry:block",
    description: "A registration form with cta block.",
    files: [
      {
        path: "blocks/marketing/hero-section/registration-form-with-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-saas-hero-section-with-kicker-and-dashboard-preview",
    type: "registry:block",
    description: "A saas hero section with kicker and dashboard preview block.",
    files: [
      {
        path: "blocks/marketing/hero-section/saas-hero-section-with-kicker-and-dashboard-preview.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-side-by-side-hero-section-with-image",
    type: "registry:block",
    description: "A side by side hero section with image block.",
    files: [
      {
        path: "blocks/marketing/hero-section/side-by-side-hero-section-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-simple-hero-section-with-creative-image",
    type: "registry:block",
    description: "A simple hero section with creative image block.",
    files: [
      {
        path: "blocks/marketing/hero-section/simple-hero-section-with-creative-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-split-header-hero-section-with-cta-on-image",
    type: "registry:block",
    description: "A split header hero section with cta on image block.",
    files: [
      {
        path: "blocks/marketing/hero-section/split-header-hero-section-with-cta-on-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-splitted-hero-section-with-image",
    type: "registry:block",
    description: "A splitted hero section with image block.",
    files: [
      {
        path: "blocks/marketing/hero-section/splitted-hero-section-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-tailwind-hero-banner",
    type: "registry:block",
    description: "A tailwind hero banner block.",
    files: [
      {
        path: "blocks/marketing/hero-section/tailwind-hero-banner.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-tailwind-hero-block-with-app-mockup",
    type: "registry:block",
    description: "A tailwind hero block with app mockup block.",
    files: [
      {
        path: "blocks/marketing/hero-section/tailwind-hero-block-with-app-mockup.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-tailwind-hero-component-for-business-website",
    type: "registry:block",
    description: "A tailwind hero component for business website block.",
    files: [
      {
        path: "blocks/marketing/hero-section/tailwind-hero-component-for-business-website.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-tailwind-hero-section-with-card-layout",
    type: "registry:block",
    description: "A tailwind hero section with card layout block.",
    files: [
      {
        path: "blocks/marketing/hero-section/tailwind-hero-section-with-card-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-tailwind-hero-with-gradient-heading",
    type: "registry:block",
    description: "A tailwind hero with gradient heading block.",
    files: [
      {
        path: "blocks/marketing/hero-section/tailwind-hero-with-gradient-heading.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-tailwind-hero-with-stat-counts",
    type: "registry:block",
    description: "A tailwind hero with stat counts block.",
    files: [
      {
        path: "blocks/marketing/hero-section/tailwind-hero-with-stat-counts.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-three-column-hero-section",
    type: "registry:block",
    description: "A three column hero section block.",
    files: [
      {
        path: "blocks/marketing/hero-section/three-column-hero-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-travel-hero-section-with-dark-background",
    type: "registry:block",
    description: "A travel hero section with dark background block.",
    files: [
      {
        path: "blocks/marketing/hero-section/travel-hero-section-with-dark-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-vertical-hero-section-with-images",
    type: "registry:block",
    description: "A vertical hero section with images block.",
    files: [
      {
        path: "blocks/marketing/hero-section/vertical-hero-section-with-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-vertical-hero-section-with-video",
    type: "registry:block",
    description: "A vertical hero section with video block.",
    files: [
      {
        path: "blocks/marketing/hero-section/vertical-hero-section-with-video.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-vertical-hero-with-cover-image",
    type: "registry:block",
    description: "A vertical hero with cover image block.",
    files: [
      {
        path: "blocks/marketing/hero-section/vertical-hero-with-cover-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-visual-image-with-banner",
    type: "registry:block",
    description: "A visual image with banner block.",
    files: [
      {
        path: "blocks/marketing/hero-section/visual-image-with-banner.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-hero-section-visual-image-with-partner-logos",
    type: "registry:block",
    description: "A visual image with partner logos block.",
    files: [
      {
        path: "blocks/marketing/hero-section/visual-image-with-partner-logos.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-default-how-it-works",
    type: "registry:block",
    description: "A default how it works block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/default-how-it-works.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-horizontal-how-it-works-steps",
    type: "registry:block",
    description: "A horizontal how it works steps block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/horizontal-how-it-works-steps.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-how-it-works-cards-with-illustrations",
    type: "registry:block",
    description: "A how it works cards with illustrations block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/how-it-works-cards-with-illustrations.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-how-it-works-cards-with-images",
    type: "registry:block",
    description: "A how it works cards with images block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/how-it-works-cards-with-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-how-it-works-in-dark-mode",
    type: "registry:block",
    description: "A how it works in dark mode block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/how-it-works-in-dark-mode.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-how-it-works-with-cards",
    type: "registry:block",
    description: "A how it works with cards block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/how-it-works-with-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-how-it-works-with-creative-illustration",
    type: "registry:block",
    description: "A how it works with creative illustration block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/how-it-works-with-creative-illustration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-how-it-works-with-horizontal-progression",
    type: "registry:block",
    description: "A how it works with horizontal progression block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/how-it-works-with-horizontal-progression.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-how-it-works-with-icons",
    type: "registry:block",
    description: "A how it works with icons block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/how-it-works-with-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-how-it-works-with-illustration",
    type: "registry:block",
    description: "A how it works with illustration block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/how-it-works-with-illustration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-how-it-works-with-the-cta",
    type: "registry:block",
    description: "A how it works with the cta block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/how-it-works-with-the-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-how-it-works-with-the-grid-layout",
    type: "registry:block",
    description: "A how it works with the grid layout block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/how-it-works-with-the-grid-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-side-by-side-how-it-works-blocks",
    type: "registry:block",
    description: "A side by side how it works blocks block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/side-by-side-how-it-works-blocks.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-splitted-how-it-works-blocks",
    type: "registry:block",
    description: "A splitted how it works blocks block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/splitted-how-it-works-blocks.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-how-it-works-vertical-how-it-works-cards",
    type: "registry:block",
    description: "A vertical how it works cards block.",
    files: [
      {
        path: "blocks/marketing/how-it-works/vertical-how-it-works-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-app-logos-integration",
    type: "registry:block",
    description: "A app logos integration block.",
    files: [
      {
        path: "blocks/marketing/integration/app-logos-integration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-basic-integration-block",
    type: "registry:block",
    description: "A basic integration block block.",
    files: [
      {
        path: "blocks/marketing/integration/basic-integration-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-circular-integration",
    type: "registry:block",
    description: "A circular integration block.",
    files: [
      {
        path: "blocks/marketing/integration/circular-integration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-dark-integration-section",
    type: "registry:block",
    description: "A dark integration section block.",
    files: [
      {
        path: "blocks/marketing/integration/dark-integration-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-four-column-integration-card",
    type: "registry:block",
    description: "A four column integration card block.",
    files: [
      {
        path: "blocks/marketing/integration/four-column-integration-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-hexagon-integration-cards",
    type: "registry:block",
    description: "A hexagon integration cards block.",
    files: [
      {
        path: "blocks/marketing/integration/hexagon-integration-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-integration-as-double-testimonial",
    type: "registry:block",
    description: "A integration as double testimonial block.",
    files: [
      {
        path: "blocks/marketing/integration/integration-as-double-testimonial.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-integration-card-with-background",
    type: "registry:block",
    description: "A integration card with background block.",
    files: [
      {
        path: "blocks/marketing/integration/integration-card-with-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-integration-grid",
    type: "registry:block",
    description: "A integration grid block.",
    files: [
      {
        path: "blocks/marketing/integration/integration-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-integration-list-with-description",
    type: "registry:block",
    description: "A integration list with description block.",
    files: [
      {
        path: "blocks/marketing/integration/integration-list-with-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-integration-section-with-badge-and-cta",
    type: "registry:block",
    description: "A integration section with badge and cta block.",
    files: [
      {
        path: "blocks/marketing/integration/integration-section-with-badge-and-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-integration-with-cta-button",
    type: "registry:block",
    description: "A integration with cta button block.",
    files: [
      {
        path: "blocks/marketing/integration/integration-with-cta-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-integrations-card-with-horizontal-layout",
    type: "registry:block",
    description: "A integrations card with horizontal layout block.",
    files: [
      {
        path: "blocks/marketing/integration/integrations-card-with-horizontal-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-scattered-application-icons",
    type: "registry:block",
    description: "A scattered application icons block.",
    files: [
      {
        path: "blocks/marketing/integration/scattered-application-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-side-by-side-integration",
    type: "registry:block",
    description: "A side by side integration block.",
    files: [
      {
        path: "blocks/marketing/integration/side-by-side-integration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-slider-app-integration",
    type: "registry:block",
    description: "A slider app integration block.",
    files: [
      {
        path: "blocks/marketing/integration/slider-app-integration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-three-column-integration-card-with-cta",
    type: "registry:block",
    description: "A three column integration card with cta block.",
    files: [
      {
        path: "blocks/marketing/integration/three-column-integration-card-with-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-two-column-integration-card",
    type: "registry:block",
    description: "A two column integration card block.",
    files: [
      {
        path: "blocks/marketing/integration/two-column-integration-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-vertical-app-integration",
    type: "registry:block",
    description: "A vertical app integration block.",
    files: [
      {
        path: "blocks/marketing/integration/vertical-app-integration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-vertical-integration-carousel",
    type: "registry:block",
    description: "A vertical integration carousel block.",
    files: [
      {
        path: "blocks/marketing/integration/vertical-integration-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-integration-vertical-integrations-list",
    type: "registry:block",
    description: "A vertical integrations list block.",
    files: [
      {
        path: "blocks/marketing/integration/vertical-integrations-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-portfolio-grid-layout-with-image-and-description-and-cta",
    type: "registry:block",
    description: "A grid layout with image and description and cta block.",
    files: [
      {
        path: "blocks/marketing/portfolio/grid-layout-with-image-and-description-and-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-portfolio-portfolio-section-with-testimonial-layout",
    type: "registry:block",
    description: "A portfolio section with testimonial layout block.",
    files: [
      {
        path: "blocks/marketing/portfolio/portfolio-section-with-testimonial-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-portfolio-portfolio-section-with-three-column-grid",
    type: "registry:block",
    description: "A portfolio section with three column grid block.",
    files: [
      {
        path: "blocks/marketing/portfolio/portfolio-section-with-three-column-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-portfolio-portfolio-with-beautiful-grid-system",
    type: "registry:block",
    description: "A portfolio with beautiful grid system block.",
    files: [
      {
        path: "blocks/marketing/portfolio/portfolio-with-beautiful-grid-system.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-portfolio-tailwind-css-portfolio-with-product-or-project-s-features",
    type: "registry:block",
    description:
      "A tailwind css portfolio with product or project s features block.",
    files: [
      {
        path: "blocks/marketing/portfolio/tailwind-css-portfolio-with-product-or-project-s-features.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-center-align-tailwind-pricing-cards",
    type: "registry:block",
    description: "A center align tailwind pricing cards block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/center-align-tailwind-pricing-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-dark-pricing-card",
    type: "registry:block",
    description: "A dark pricing card block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/dark-pricing-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-feature-list-with-pricing-plan",
    type: "registry:block",
    description: "A feature list with pricing plan block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/feature-list-with-pricing-plan.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-four-tier-pricing-plan",
    type: "registry:block",
    description: "A four tier pricing plan block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/four-tier-pricing-plan.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-header-background-pricing-card",
    type: "registry:block",
    description: "A header background pricing card block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/header-background-pricing-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-highlight-pricing-feature",
    type: "registry:block",
    description: "A highlight pricing feature block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/highlight-pricing-feature.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-horizontal-card-as-testimonial",
    type: "registry:block",
    description: "A horizontal card as testimonial block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/horizontal-card-as-testimonial.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-horizontal-card-with-pricing-plans-as-testimonial",
    type: "registry:block",
    description: "A horizontal card with pricing plans as testimonial block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/horizontal-card-with-pricing-plans-as-testimonial.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-horizontal-pricing-plans",
    type: "registry:block",
    description: "A horizontal pricing plans block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/horizontal-pricing-plans.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-image-as-pricing-card-background",
    type: "registry:block",
    description: "A image as pricing card background block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/image-as-pricing-card-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-image-with-pricing-card",
    type: "registry:block",
    description: "A image with pricing card block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/image-with-pricing-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-multicolor-pricing-cards",
    type: "registry:block",
    description: "A multicolor pricing cards block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/multicolor-pricing-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-card-with-bordered-layout",
    type: "registry:block",
    description: "A pricing card with bordered layout block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-card-with-bordered-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-card-with-cta-button",
    type: "registry:block",
    description: "A pricing card with cta button block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-card-with-cta-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-card-with-highlighted-border",
    type: "registry:block",
    description: "A pricing card with highlighted border block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-card-with-highlighted-border.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-card-with-highlighted-price",
    type: "registry:block",
    description: "A pricing card with highlighted price block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-card-with-highlighted-price.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-cards-with-colored-border",
    type: "registry:block",
    description: "A pricing cards with colored border block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-cards-with-colored-border.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-cards-with-graph-image",
    type: "registry:block",
    description: "A pricing cards with graph image block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-cards-with-graph-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-cards-with-vertical-tabs",
    type: "registry:block",
    description: "A pricing cards with vertical tabs block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-cards-with-vertical-tabs.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-components-with-illustration",
    type: "registry:block",
    description: "A pricing components with illustration block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-components-with-illustration.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-model-with-table",
    type: "registry:block",
    description: "A pricing model with table block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-model-with-table.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-plan-for-dark-theme",
    type: "registry:block",
    description: "A pricing plan for dark theme block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-plan-for-dark-theme.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-plan-for-dark-theme-with-feature-list",
    type: "registry:block",
    description: "A pricing plan for dark theme with feature list block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-plan-for-dark-theme-with-feature-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-plan-with-highlighted-background",
    type: "registry:block",
    description: "A pricing plan with highlighted background block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-plan-with-highlighted-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-plan-with-highlighted-gradient-background",
    type: "registry:block",
    description: "A pricing plan with highlighted gradient background block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-plan-with-highlighted-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-plan-with-seperate-headers",
    type: "registry:block",
    description: "A pricing plan with seperate headers block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-plan-with-seperate-headers.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-plan-with-toggle-switch",
    type: "registry:block",
    description: "A pricing plan with toggle switch block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-plan-with-toggle-switch.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-plans-as-testimonials",
    type: "registry:block",
    description: "A pricing plans as testimonials block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-plans-as-testimonials.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-plans-with-gradient-background",
    type: "registry:block",
    description: "A pricing plans with gradient background block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-plans-with-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-plans-with-image-header",
    type: "registry:block",
    description: "A pricing plans with image header block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-plans-with-image-header.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-table-centrally-aligned",
    type: "registry:block",
    description: "A pricing table centrally aligned block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-table-centrally-aligned.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-table-for-dark-version",
    type: "registry:block",
    description: "A pricing table for dark version block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-table-for-dark-version.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-table-with-four-tiers",
    type: "registry:block",
    description: "A pricing table with four tiers block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-table-with-four-tiers.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-with-a-toggle-switch",
    type: "registry:block",
    description: "A pricing with a toggle switch block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-with-a-toggle-switch.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-with-image-card",
    type: "registry:block",
    description: "A pricing with image card block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-with-image-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-pricing-with-radio-component",
    type: "registry:block",
    description: "A pricing with radio component block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/pricing-with-radio-component.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-ranking-analyzer-with-dark-theme",
    type: "registry:block",
    description: "A ranking analyzer with dark theme block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/ranking-analyzer-with-dark-theme.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-scaled-pricing-card",
    type: "registry:block",
    description: "A scaled pricing card block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/scaled-pricing-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-simple-transparent-pricing-table",
    type: "registry:block",
    description: "A simple transparent pricing table block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/simple-transparent-pricing-table.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-single-pricing-plan",
    type: "registry:block",
    description: "A single pricing plan block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/single-pricing-plan.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-tailwind-css-pricing-cards",
    type: "registry:block",
    description: "A tailwind css pricing cards block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/tailwind-css-pricing-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-tailwind-css-pricing-cards-with-border-separation",
    type: "registry:block",
    description: "A tailwind css pricing cards with border separation block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/tailwind-css-pricing-cards-with-border-separation.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-tailwind-css-pricing-table",
    type: "registry:block",
    description: "A tailwind css pricing table block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/tailwind-css-pricing-table.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-tailwind-pricing-table-with-gradient-background",
    type: "registry:block",
    description: "A tailwind pricing table with gradient background block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/tailwind-pricing-table-with-gradient-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-three-tiers-with-toggle",
    type: "registry:block",
    description: "A three tiers with toggle block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/three-tiers-with-toggle.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-two-column-horizontal-pricing-cards",
    type: "registry:block",
    description: "A two column horizontal pricing cards block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/two-column-horizontal-pricing-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-two-column-pricing-cards",
    type: "registry:block",
    description: "A two column pricing cards block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/two-column-pricing-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-two-column-stylish-pricing-plans",
    type: "registry:block",
    description: "A two column stylish pricing plans block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/two-column-stylish-pricing-plans.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-two-tier-pricing-cards",
    type: "registry:block",
    description: "A two tier pricing cards block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/two-tier-pricing-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-pricing-plans-vertical-accordion-pricing-plans",
    type: "registry:block",
    description: "A vertical accordion pricing plans block.",
    files: [
      {
        path: "blocks/marketing/pricing-plans/vertical-accordion-pricing-plans.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-a-snapshot-of-our-performance",
    type: "registry:block",
    description: "A a snapshot of our performance block.",
    files: [
      {
        path: "blocks/marketing/stats/a-snapshot-of-our-performance.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-a-snapshot-of-our-performance-grid-stats",
    type: "registry:block",
    description: "A a snapshot of our performance grid stats block.",
    files: [
      {
        path: "blocks/marketing/stats/a-snapshot-of-our-performance-grid-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-breaking-down-the-stats-that-matter",
    type: "registry:block",
    description: "A breaking down the stats that matter block.",
    files: [
      {
        path: "blocks/marketing/stats/breaking-down-the-stats-that-matter.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-company-total-growth-overview-stats",
    type: "registry:block",
    description: "A company total growth overview stats block.",
    files: [
      {
        path: "blocks/marketing/stats/company-total-growth-overview-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-heading-with-four-stats",
    type: "registry:block",
    description: "A heading with four stats block.",
    files: [
      {
        path: "blocks/marketing/stats/heading-with-four-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-horizontal-stats",
    type: "registry:block",
    description: "A horizontal stats block.",
    files: [
      {
        path: "blocks/marketing/stats/horizontal-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-horizontal-stats-with-card-style",
    type: "registry:block",
    description: "A horizontal stats with card style block.",
    files: [
      {
        path: "blocks/marketing/stats/horizontal-stats-with-card-style.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-impressive-stats",
    type: "registry:block",
    description: "A impressive stats block.",
    files: [
      {
        path: "blocks/marketing/stats/impressive-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-key-metrics-driving-business-results",
    type: "registry:block",
    description: "A key metrics driving business results block.",
    files: [
      {
        path: "blocks/marketing/stats/key-metrics-driving-business-results.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-key-stats-and-milestones-overview",
    type: "registry:block",
    description: "A key stats and milestones overview block.",
    files: [
      {
        path: "blocks/marketing/stats/key-stats-and-milestones-overview.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-measuring-our-success",
    type: "registry:block",
    description: "A measuring our success block.",
    files: [
      {
        path: "blocks/marketing/stats/measuring-our-success.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-our-growing-stats",
    type: "registry:block",
    description: "A our growing stats block.",
    files: [
      {
        path: "blocks/marketing/stats/our-growing-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-our-growth-in-numbers",
    type: "registry:block",
    description: "A our growth in numbers block.",
    files: [
      {
        path: "blocks/marketing/stats/our-growth-in-numbers.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-our-growth-in-numbers-stats",
    type: "registry:block",
    description: "A our growth in numbers stats block.",
    files: [
      {
        path: "blocks/marketing/stats/our-growth-in-numbers-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-our-growth-stats-with-numbers",
    type: "registry:block",
    description: "A our growth stats with numbers block.",
    files: [
      {
        path: "blocks/marketing/stats/our-growth-stats-with-numbers.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-our-impact-in-numbers",
    type: "registry:block",
    description: "A our impact in numbers block.",
    files: [
      {
        path: "blocks/marketing/stats/our-impact-in-numbers.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-our-statistics-stats",
    type: "registry:block",
    description: "A our statistics stats block.",
    files: [
      {
        path: "blocks/marketing/stats/our-statistics-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-our-success-stats",
    type: "registry:block",
    description: "A our success stats block.",
    files: [
      {
        path: "blocks/marketing/stats/our-success-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-performance-insight-and-analytics",
    type: "registry:block",
    description: "A performance insight and analytics block.",
    files: [
      {
        path: "blocks/marketing/stats/performance-insight-and-analytics.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-performance-metrics-stats",
    type: "registry:block",
    description: "A performance metrics stats block.",
    files: [
      {
        path: "blocks/marketing/stats/performance-metrics-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-performance-you-can-count-on",
    type: "registry:block",
    description: "A performance you can count on block.",
    files: [
      {
        path: "blocks/marketing/stats/performance-you-can-count-on.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-project-stats-and-figma-included",
    type: "registry:block",
    description: "A project stats and figma included block.",
    files: [
      {
        path: "blocks/marketing/stats/project-stats-and-figma-included.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-see-the-stats-behind-our-success",
    type: "registry:block",
    description: "A see the stats behind our success block.",
    files: [
      {
        path: "blocks/marketing/stats/see-the-stats-behind-our-success.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-simple-stats-page",
    type: "registry:block",
    description: "A simple stats page block.",
    files: [
      {
        path: "blocks/marketing/stats/simple-stats-page.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-split-stats-with-heading",
    type: "registry:block",
    description: "A split stats with heading block.",
    files: [
      {
        path: "blocks/marketing/stats/split-stats-with-heading.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-split-with-heading",
    type: "registry:block",
    description: "A split with heading block.",
    files: [
      {
        path: "blocks/marketing/stats/split-with-heading.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-stats-card-with-highlight",
    type: "registry:block",
    description: "A stats card with highlight block.",
    files: [
      {
        path: "blocks/marketing/stats/stats-card-with-highlight.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-stats-with-background",
    type: "registry:block",
    description: "A stats with background block.",
    files: [
      {
        path: "blocks/marketing/stats/stats-with-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-stats-with-border",
    type: "registry:block",
    description: "A stats with border block.",
    files: [
      {
        path: "blocks/marketing/stats/stats-with-border.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-stats-with-border-and-actions",
    type: "registry:block",
    description: "A stats with border and actions block.",
    files: [
      {
        path: "blocks/marketing/stats/stats-with-border-and-actions.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-stats-with-brand-logos",
    type: "registry:block",
    description: "A stats with brand logos block.",
    files: [
      {
        path: "blocks/marketing/stats/stats-with-brand-logos.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-stats-with-card-layout",
    type: "registry:block",
    description: "A stats with card layout block.",
    files: [
      {
        path: "blocks/marketing/stats/stats-with-card-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-stats-with-creative-card-design",
    type: "registry:block",
    description: "A stats with creative card design block.",
    files: [
      {
        path: "blocks/marketing/stats/stats-with-creative-card-design.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-stats-with-creative-design",
    type: "registry:block",
    description: "A stats with creative design block.",
    files: [
      {
        path: "blocks/marketing/stats/stats-with-creative-design.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-stats-with-custom-colour",
    type: "registry:block",
    description: "A stats with custom colour block.",
    files: [
      {
        path: "blocks/marketing/stats/stats-with-custom-colour.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-stats-with-custom-icon",
    type: "registry:block",
    description: "A stats with custom icon block.",
    files: [
      {
        path: "blocks/marketing/stats/stats-with-custom-icon.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-stats-with-horizontal-description",
    type: "registry:block",
    description: "A stats with horizontal description block.",
    files: [
      {
        path: "blocks/marketing/stats/stats-with-horizontal-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-stats-with-icon-background",
    type: "registry:block",
    description: "A stats with icon background block.",
    files: [
      {
        path: "blocks/marketing/stats/stats-with-icon-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-stats-with-indicators",
    type: "registry:block",
    description: "A stats with indicators block.",
    files: [
      {
        path: "blocks/marketing/stats/stats-with-indicators.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-tailwind-css-horizontal-stats-section",
    type: "registry:block",
    description: "A tailwind css horizontal stats section block.",
    files: [
      {
        path: "blocks/marketing/stats/tailwind-css-horizontal-stats-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-tailwind-css-impressive-stats",
    type: "registry:block",
    description: "A tailwind css impressive stats block.",
    files: [
      {
        path: "blocks/marketing/stats/tailwind-css-impressive-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-tailwind-css-stats-with-performance",
    type: "registry:block",
    description: "A tailwind css stats with performance block.",
    files: [
      {
        path: "blocks/marketing/stats/tailwind-css-stats-with-performance.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-tailwind-css-stats-with-stats",
    type: "registry:block",
    description: "A tailwind css stats with stats block.",
    files: [
      {
        path: "blocks/marketing/stats/tailwind-css-stats-with-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-tailwind-stats-card",
    type: "registry:block",
    description: "A tailwind stats card block.",
    files: [
      {
        path: "blocks/marketing/stats/tailwind-stats-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-tailwind-stats-our-journey-in-figures",
    type: "registry:block",
    description: "A tailwind stats our journey in figures block.",
    files: [
      {
        path: "blocks/marketing/stats/tailwind-stats-our-journey-in-figures.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-tailwind-tracking-growth-success-stats",
    type: "registry:block",
    description: "A tailwind tracking growth success stats block.",
    files: [
      {
        path: "blocks/marketing/stats/tailwind-tracking-growth-success-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-the-data-speaks-for-itself-stats",
    type: "registry:block",
    description: "A the data speaks for itself stats block.",
    files: [
      {
        path: "blocks/marketing/stats/the-data-speaks-for-itself-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-stats-vertical-stats",
    type: "registry:block",
    description: "A vertical stats block.",
    files: [
      {
        path: "blocks/marketing/stats/vertical-stats.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-a-small-horizontal-card-with-an-avatar",
    type: "registry:block",
    description: "A a small horizontal card with an avatar block.",
    files: [
      {
        path: "blocks/marketing/team/a-small-horizontal-card-with-an-avatar.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-alternate-design-for-team-carousel",
    type: "registry:block",
    description: "A alternate design for team carousel block.",
    files: [
      {
        path: "blocks/marketing/team/alternate-design-for-team-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-basic-team-member-section",
    type: "registry:block",
    description: "A basic team member section block.",
    files: [
      {
        path: "blocks/marketing/team/basic-team-member-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-carousel-with-a-vertical-social-list",
    type: "registry:block",
    description: "A carousel with a vertical social list block.",
    files: [
      {
        path: "blocks/marketing/team/carousel-with-a-vertical-social-list.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-center-card-highlighted-carousel",
    type: "registry:block",
    description: "A center card highlighted carousel block.",
    files: [
      {
        path: "blocks/marketing/team/center-card-highlighted-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-centered-team-slider",
    type: "registry:block",
    description: "A centered team slider block.",
    files: [
      {
        path: "blocks/marketing/team/centered-team-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-connected-team-images-with-a-hover-effect",
    type: "registry:block",
    description: "A connected team images with a hover effect block.",
    files: [
      {
        path: "blocks/marketing/team/connected-team-images-with-a-hover-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-creative-team-component",
    type: "registry:block",
    description: "A creative team component block.",
    files: [
      {
        path: "blocks/marketing/team/creative-team-component.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-four-column-grid-layout-with-social-media-and-cta",
    type: "registry:block",
    description: "A four column grid layout with social media and cta block.",
    files: [
      {
        path: "blocks/marketing/team/four-column-grid-layout-with-social-media-and-cta.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-four-column-team-cards",
    type: "registry:block",
    description: "A four column team cards block.",
    files: [
      {
        path: "blocks/marketing/team/four-column-team-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-horizontal-team-cards",
    type: "registry:block",
    description: "A horizontal team cards block.",
    files: [
      {
        path: "blocks/marketing/team/horizontal-team-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-horizontal-team-carousel",
    type: "registry:block",
    description: "A horizontal team carousel block.",
    files: [
      {
        path: "blocks/marketing/team/horizontal-team-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-informative-team-cards",
    type: "registry:block",
    description: "A informative team cards block.",
    files: [
      {
        path: "blocks/marketing/team/informative-team-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-modern-team-cards-with-borders",
    type: "registry:block",
    description: "A modern team cards with borders block.",
    files: [
      {
        path: "blocks/marketing/team/modern-team-cards-with-borders.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-overlayed-team-card",
    type: "registry:block",
    description: "A overlayed team card block.",
    files: [
      {
        path: "blocks/marketing/team/overlayed-team-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-team-rounded-image-team-cards",
    type: "registry:block",
    description: "A rounded image team cards block.",
    files: [
      {
        path: "blocks/marketing/team/rounded-image-team-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-side-by-side-headings-and-team-cards",
    type: "registry:block",
    description: "A side by side headings and team cards block.",
    files: [
      {
        path: "blocks/marketing/team/side-by-side-headings-and-team-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-simple-four-team-cards-with-a-hover-effect",
    type: "registry:block",
    description: "A simple four team cards with a hover effect block.",
    files: [
      {
        path: "blocks/marketing/team/simple-four-team-cards-with-a-hover-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-small-tailwind-team-cards",
    type: "registry:block",
    description: "A small tailwind team cards block.",
    files: [
      {
        path: "blocks/marketing/team/small-tailwind-team-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-tailwind-css-team-section-with-square-images",
    type: "registry:block",
    description: "A tailwind css team section with square images block.",
    files: [
      {
        path: "blocks/marketing/team/tailwind-css-team-section-with-square-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-tailwind-team-carousel",
    type: "registry:block",
    description: "A tailwind team carousel block.",
    files: [
      {
        path: "blocks/marketing/team/tailwind-team-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-tailwind-team-section-with-hover-overlay",
    type: "registry:block",
    description: "A tailwind team section with hover overlay block.",
    files: [
      {
        path: "blocks/marketing/team/tailwind-team-section-with-hover-overlay.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-card-with-footer",
    type: "registry:block",
    description: "A team card with footer block.",
    files: [
      {
        path: "blocks/marketing/team/team-card-with-footer.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-cards-for-dark-version",
    type: "registry:block",
    description: "A team cards for dark version block.",
    files: [
      {
        path: "blocks/marketing/team/team-cards-for-dark-version.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-cards-with-background",
    type: "registry:block",
    description: "A team cards with background block.",
    files: [
      {
        path: "blocks/marketing/team/team-cards-with-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-cards-with-background-and-cta-button",
    type: "registry:block",
    description: "A team cards with background and cta button block.",
    files: [
      {
        path: "blocks/marketing/team/team-cards-with-background-and-cta-button.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-list-with-hover-description",
    type: "registry:block",
    description: "A team list with hover description block.",
    files: [
      {
        path: "blocks/marketing/team/team-list-with-hover-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-page-with-grid-layout-cta-and-description",
    type: "registry:block",
    description: "A team page with grid layout cta and description block.",
    files: [
      {
        path: "blocks/marketing/team/team-page-with-grid-layout-cta-and-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-page-with-overlay-card-with-general-description",
    type: "registry:block",
    description:
      "A team page with overlay card with general description block.",
    files: [
      {
        path: "blocks/marketing/team/team-page-with-overlay-card-with-general-description.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-card-with-background-color",
    type: "registry:block",
    description: "A team section card with background color block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-card-with-background-color.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-cards-with-background",
    type: "registry:block",
    description: "A team section cards with background block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-cards-with-background.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-cards-with-carousel-style",
    type: "registry:block",
    description: "A team section cards with carousel style block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-cards-with-carousel-style.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-cards-with-scale-image-in-hover-effect",
    type: "registry:block",
    description: "A team section cards with scale image in hover effect block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-cards-with-scale-image-in-hover-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-memoji-cards-with-carousel-style",
    type: "registry:block",
    description: "A team section memoji cards with carousel style block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-memoji-cards-with-carousel-style.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-with-carousel-slider",
    type: "registry:block",
    description: "A team section with carousel slider block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-with-carousel-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-with-carousel-style",
    type: "registry:block",
    description: "A team section with carousel style block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-with-carousel-style.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-with-circled-images",
    type: "registry:block",
    description: "A team section with circled images block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-with-circled-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-with-creative-image-layout",
    type: "registry:block",
    description: "A team section with creative image layout block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-with-creative-image-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-with-different-background-cards-and-hover-memoji-effect",
    type: "registry:block",
    description:
      "A team section with different background cards and hover memoji effect block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-with-different-background-cards-and-hover-memoji-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-with-grayscale-effect",
    type: "registry:block",
    description: "A team section with grayscale effect block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-with-grayscale-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-with-horizontal-team-cards",
    type: "registry:block",
    description: "A team section with horizontal team cards block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-with-horizontal-team-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-with-opacity-layout",
    type: "registry:block",
    description: "A team section with opacity layout block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-with-opacity-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-with-overlay-cards",
    type: "registry:block",
    description: "A team section with overlay cards block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-with-overlay-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-with-rotate-and-scale-memoji-effect",
    type: "registry:block",
    description: "A team section with rotate and scale memoji effect block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-with-rotate-and-scale-memoji-effect.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-with-scale-image-and-background-opacity",
    type: "registry:block",
    description:
      "A team section with scale image and background opacity block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-with-scale-image-and-background-opacity.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-team-section-with-three-column-grid-layout",
    type: "registry:block",
    description: "A team section with three column grid layout block.",
    files: [
      {
        path: "blocks/marketing/team/team-section-with-three-column-grid-layout.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-three-column-team-card-component",
    type: "registry:block",
    description: "A three column team card component block.",
    files: [
      {
        path: "blocks/marketing/team/three-column-team-card-component.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-three-column-team-with-side-information-card",
    type: "registry:block",
    description: "A three column team with side information card block.",
    files: [
      {
        path: "blocks/marketing/team/three-column-team-with-side-information-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-translated-image-with-social-icons",
    type: "registry:block",
    description: "A translated image with social icons block.",
    files: [
      {
        path: "blocks/marketing/team/translated-image-with-social-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-team-vertical-team-carousel",
    type: "registry:block",
    description: "A vertical team carousel block.",
    files: [
      {
        path: "blocks/marketing/team/vertical-team-carousel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-3-column-review-cards-with-heading",
    type: "registry:block",
    description: "A 3 column review cards with heading block.",
    files: [
      {
        path: "blocks/marketing/testimonial/3-column-review-cards-with-heading.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-3-column-video-cards-testimonial",
    type: "registry:block",
    description: "A 3 column video cards testimonial block.",
    files: [
      {
        path: "blocks/marketing/testimonial/3-column-video-cards-testimonial.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-alternate-tailwind-tesimonial-cards",
    type: "registry:block",
    description: "A alternate tailwind tesimonial cards block.",
    files: [
      {
        path: "blocks/marketing/testimonial/alternate-tailwind-tesimonial-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-basic-testimonial-cards",
    type: "registry:block",
    description: "A basic testimonial cards block.",
    files: [
      {
        path: "blocks/marketing/testimonial/basic-testimonial-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-center-mode-slider-with-dark-version",
    type: "registry:block",
    description: "A center mode slider with dark version block.",
    files: [
      {
        path: "blocks/marketing/testimonial/center-mode-slider-with-dark-version.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-client-review-two-column-card",
    type: "registry:block",
    description: "A client review two column card block.",
    files: [
      {
        path: "blocks/marketing/testimonial/client-review-two-column-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-client-testimonial-partial-slider",
    type: "registry:block",
    description: "A client testimonial partial slider block.",
    files: [
      {
        path: "blocks/marketing/testimonial/client-testimonial-partial-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-customer-review-with-product-image",
    type: "registry:block",
    description: "A customer review with product image block.",
    files: [
      {
        path: "blocks/marketing/testimonial/customer-review-with-product-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-heading-and-card-slider-block",
    type: "registry:block",
    description: "A heading and card slider block block.",
    files: [
      {
        path: "blocks/marketing/testimonial/heading-and-card-slider-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-highlighted-testimonial-card-slider",
    type: "registry:block",
    description: "A highlighted testimonial card slider block.",
    files: [
      {
        path: "blocks/marketing/testimonial/highlighted-testimonial-card-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-horizontal-cards-block",
    type: "registry:block",
    description: "A horizontal cards block block.",
    files: [
      {
        path: "blocks/marketing/testimonial/horizontal-cards-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-responsive-column-view",
    type: "registry:block",
    description: "A responsive column view block.",
    files: [
      {
        path: "blocks/marketing/testimonial/responsive-column-view.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-review-cards-with-column-grid",
    type: "registry:block",
    description: "A review cards with column grid block.",
    files: [
      {
        path: "blocks/marketing/testimonial/review-cards-with-column-grid.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-review-testimonials-with-video",
    type: "registry:block",
    description: "A review testimonials with video block.",
    files: [
      {
        path: "blocks/marketing/testimonial/review-testimonials-with-video.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-reviews-with-ratings-and-brand-logos",
    type: "registry:block",
    description: "A reviews with ratings and brand logos block.",
    files: [
      {
        path: "blocks/marketing/testimonial/reviews-with-ratings-and-brand-logos.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "free",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-side-by-side-testimonial-cards",
    type: "registry:block",
    description: "A side by side testimonial cards block.",
    files: [
      {
        path: "blocks/marketing/testimonial/side-by-side-testimonial-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-simple-testimonial-cards",
    type: "registry:block",
    description: "A simple testimonial cards block.",
    files: [
      {
        path: "blocks/marketing/testimonial/simple-testimonial-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-single-slide-review-with-full-description-and-background-block",
    type: "registry:block",
    description:
      "A single slide review with full description and background block block.",
    files: [
      {
        path: "blocks/marketing/testimonial/single-slide-review-with-full-description-and-background-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-single-testimonial-slider",
    type: "registry:block",
    description: "A single testimonial slider block.",
    files: [
      {
        path: "blocks/marketing/testimonial/single-testimonial-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-slider-with-user-comments-and-avatars",
    type: "registry:block",
    description: "A slider with user comments and avatars block.",
    files: [
      {
        path: "blocks/marketing/testimonial/slider-with-user-comments-and-avatars.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-split-image-and-description-testimonial-section",
    type: "registry:block",
    description: "A split image and description testimonial section block.",
    files: [
      {
        path: "blocks/marketing/testimonial/split-image-and-description-testimonial-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-split-image-testimonial-tailwind",
    type: "registry:block",
    description: "A split image testimonial tailwind block.",
    files: [
      {
        path: "blocks/marketing/testimonial/split-image-testimonial-tailwind.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-tailwind-carousel-with-arrow",
    type: "registry:block",
    description: "A tailwind carousel with arrow block.",
    files: [
      {
        path: "blocks/marketing/testimonial/tailwind-carousel-with-arrow.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-tailwind-css-customer-review-slider",
    type: "registry:block",
    description: "A tailwind css customer review slider block.",
    files: [
      {
        path: "blocks/marketing/testimonial/tailwind-css-customer-review-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-tailwind-css-testimonial-in-modern-design",
    type: "registry:block",
    description: "A tailwind css testimonial in modern design block.",
    files: [
      {
        path: "blocks/marketing/testimonial/tailwind-css-testimonial-in-modern-design.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-tailwind-css-vertical-testimonial-carousel-with-cards",
    type: "registry:block",
    description:
      "A tailwind css vertical testimonial carousel with cards block.",
    files: [
      {
        path: "blocks/marketing/testimonial/tailwind-css-vertical-testimonial-carousel-with-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-tailwind-testimonial-card-with-gradient-border",
    type: "registry:block",
    description: "A tailwind testimonial card with gradient border block.",
    files: [
      {
        path: "blocks/marketing/testimonial/tailwind-testimonial-card-with-gradient-border.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-tailwind-testimonial-cards",
    type: "registry:block",
    description: "A tailwind testimonial cards block.",
    files: [
      {
        path: "blocks/marketing/testimonial/tailwind-testimonial-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-tailwind-testimonial-carousel-with-horizontal-card",
    type: "registry:block",
    description: "A tailwind testimonial carousel with horizontal card block.",
    files: [
      {
        path: "blocks/marketing/testimonial/tailwind-testimonial-carousel-with-horizontal-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-tailwind-testimonial-carousel-with-top-thumbnail-images",
    type: "registry:block",
    description:
      "A tailwind testimonial carousel with top thumbnail images block.",
    files: [
      {
        path: "blocks/marketing/testimonial/tailwind-testimonial-carousel-with-top-thumbnail-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-tailwind-testimonial-slider-with-dots",
    type: "registry:block",
    description: "A tailwind testimonial slider with dots block.",
    files: [
      {
        path: "blocks/marketing/testimonial/tailwind-testimonial-slider-with-dots.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-tailwind-testimonial-slider-with-heading",
    type: "registry:block",
    description: "A tailwind testimonial slider with heading block.",
    files: [
      {
        path: "blocks/marketing/testimonial/tailwind-testimonial-slider-with-heading.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-tailwind-testimonial-with-active-user",
    type: "registry:block",
    description: "A tailwind testimonial with active user block.",
    files: [
      {
        path: "blocks/marketing/testimonial/tailwind-testimonial-with-active-user.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-tailwind-testimonial-with-user-review-and-avatars",
    type: "registry:block",
    description: "A tailwind testimonial with user review and avatars block.",
    files: [
      {
        path: "blocks/marketing/testimonial/tailwind-testimonial-with-user-review-and-avatars.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-testimonial-card-with-translated-images",
    type: "registry:block",
    description: "A testimonial card with translated images block.",
    files: [
      {
        path: "blocks/marketing/testimonial/testimonial-card-with-translated-images.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-testimonial-carousel-tailwind-in-slideshow",
    type: "registry:block",
    description: "A testimonial carousel tailwind in slideshow block.",
    files: [
      {
        path: "blocks/marketing/testimonial/testimonial-carousel-tailwind-in-slideshow.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-testimonial-carousel-with-memoji",
    type: "registry:block",
    description: "A testimonial carousel with memoji block.",
    files: [
      {
        path: "blocks/marketing/testimonial/testimonial-carousel-with-memoji.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-testimonial-dark-card-with-review",
    type: "registry:block",
    description: "A testimonial dark card with review block.",
    files: [
      {
        path: "blocks/marketing/testimonial/testimonial-dark-card-with-review.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-testimonial-grid-cards",
    type: "registry:block",
    description: "A testimonial grid cards block.",
    files: [
      {
        path: "blocks/marketing/testimonial/testimonial-grid-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-testimonial-multicolor-cards",
    type: "registry:block",
    description: "A testimonial multicolor cards block.",
    files: [
      {
        path: "blocks/marketing/testimonial/testimonial-multicolor-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-testimonial-slider-as-a-tab",
    type: "registry:block",
    description: "A testimonial slider as a tab block.",
    files: [
      {
        path: "blocks/marketing/testimonial/testimonial-slider-as-a-tab.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-testimonial-slider-with-background-image",
    type: "registry:block",
    description: "A testimonial slider with background image block.",
    files: [
      {
        path: "blocks/marketing/testimonial/testimonial-slider-with-background-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-three-cards-testimonial-slider-section",
    type: "registry:block",
    description: "A three cards testimonial slider section block.",
    files: [
      {
        path: "blocks/marketing/testimonial/three-cards-testimonial-slider-section.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-two-column-testimonial-card",
    type: "registry:block",
    description: "A two column testimonial card block.",
    files: [
      {
        path: "blocks/marketing/testimonial/two-column-testimonial-card.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-two-vertical-testimonial-sliders",
    type: "registry:block",
    description: "A two vertical testimonial sliders block.",
    files: [
      {
        path: "blocks/marketing/testimonial/two-vertical-testimonial-sliders.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-user-experience-testimonial-with-image",
    type: "registry:block",
    description: "A user experience testimonial with image block.",
    files: [
      {
        path: "blocks/marketing/testimonial/user-experience-testimonial-with-image.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-vertical-card-slider",
    type: "registry:block",
    description: "A vertical card slider block.",
    files: [
      {
        path: "blocks/marketing/testimonial/vertical-card-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-vertical-testimonial-cards",
    type: "registry:block",
    description: "A vertical testimonial cards block.",
    files: [
      {
        path: "blocks/marketing/testimonial/vertical-testimonial-cards.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-vertical-testimonial-slider",
    type: "registry:block",
    description: "A vertical testimonial slider block.",
    files: [
      {
        path: "blocks/marketing/testimonial/vertical-testimonial-slider.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-video-cover-testimonials",
    type: "registry:block",
    description: "A video cover testimonials block.",
    files: [
      {
        path: "blocks/marketing/testimonial/video-cover-testimonials.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
  {
    name: "marketing-testimonial-with-user-image-and-reviews-block",
    type: "registry:block",
    description: "A with user image and reviews block block.",
    files: [
      {
        path: "blocks/marketing/testimonial/with-user-image-and-reviews-block.tsx",
        type: "registry:block",
      },
    ],
    categories: ["marketing"],
    tier: "pro",
    readiness: "alpha",
  },
]
