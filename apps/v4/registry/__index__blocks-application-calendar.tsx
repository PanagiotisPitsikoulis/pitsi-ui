import * as React from "react"

export const IndexBlocksApplicationCalendar: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "beta",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
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
      readiness: "alpha",
    },
  },
}
