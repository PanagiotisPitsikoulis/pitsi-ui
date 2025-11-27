// @ts-nocheck
import * as React from "react"

export const IndexUi: Record<string, Record<string, any>> = {
  "new-york-v4": {
    accordion: {
      name: "accordion",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/accordion.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/accordion.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    alert: {
      name: "alert",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/alert.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/alert.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "alert-dialog": {
      name: "alert-dialog",
      description: "",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/ui/alert-dialog.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/alert-dialog.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "aspect-ratio": {
      name: "aspect-ratio",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/aspect-ratio.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/aspect-ratio.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    avatar: {
      name: "avatar",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/avatar.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/avatar.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    badge: {
      name: "badge",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/badge.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/badge.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    breadcrumb: {
      name: "breadcrumb",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/breadcrumb.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/breadcrumb.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    button: {
      name: "button",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/button.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/button.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "button-group": {
      name: "button-group",
      description: "",
      type: "registry:ui",
      registryDependencies: ["button", "separator"],
      files: [
        {
          path: "registry/new-york-v4/ui/button-group.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/button-group.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    calendar: {
      name: "calendar",
      description: "",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/ui/calendar.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/calendar.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    card: {
      name: "card",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/card.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/card.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    carousel: {
      name: "carousel",
      description: "",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/ui/carousel.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/carousel.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    chart: {
      name: "chart",
      description: "",
      type: "registry:ui",
      registryDependencies: ["card"],
      files: [
        {
          path: "registry/new-york-v4/ui/chart.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/chart.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    checkbox: {
      name: "checkbox",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/checkbox.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/checkbox.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    collapsible: {
      name: "collapsible",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/collapsible.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/collapsible.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    command: {
      name: "command",
      description: "",
      type: "registry:ui",
      registryDependencies: ["dialog"],
      files: [
        {
          path: "registry/new-york-v4/ui/command.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/command.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "context-menu": {
      name: "context-menu",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/context-menu.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/context-menu.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    container: {
      name: "container",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/container.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/container.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    dialog: {
      name: "dialog",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/dialog.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/dialog.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    drawer: {
      name: "drawer",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/drawer.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/drawer.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "dropdown-menu": {
      name: "dropdown-menu",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/dropdown-menu.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/dropdown-menu.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    empty: {
      name: "empty",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/empty.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/empty.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    field: {
      name: "field",
      description: "",
      type: "registry:ui",
      registryDependencies: ["label", "separator"],
      files: [
        {
          path: "registry/new-york-v4/ui/field.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/field.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    flex: {
      name: "flex",
      description: "",
      type: "registry:ui",
      registryDependencies: ["polymorphic", "use-mobile"],
      files: [
        {
          path: "registry/new-york-v4/ui/flex.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/flex.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    grid: {
      name: "grid",
      description: "",
      type: "registry:ui",
      registryDependencies: ["polymorphic", "use-mobile"],
      files: [
        {
          path: "registry/new-york-v4/ui/grid.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/grid.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "hover-card": {
      name: "hover-card",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/hover-card.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/hover-card.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    input: {
      name: "input",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/input.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/input.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-group": {
      name: "input-group",
      description: "",
      type: "registry:ui",
      registryDependencies: ["button", "input", "textarea"],
      files: [
        {
          path: "registry/new-york-v4/ui/input-group.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/input-group.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "input-otp": {
      name: "input-otp",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/input-otp.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/input-otp.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    item: {
      name: "item",
      description: "",
      type: "registry:ui",
      registryDependencies: ["separator"],
      files: [
        {
          path: "registry/new-york-v4/ui/item.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/item.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    label: {
      name: "label",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/label.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/label.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    menubar: {
      name: "menubar",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/menubar.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/menubar.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "navigation-menu": {
      name: "navigation-menu",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/navigation-menu.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/ui/navigation-menu.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    pagination: {
      name: "pagination",
      description: "",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: [
        {
          path: "registry/new-york-v4/ui/pagination.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/pagination.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    popover: {
      name: "popover",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/popover.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/popover.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    progress: {
      name: "progress",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/progress.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/progress.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "radio-group": {
      name: "radio-group",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/radio-group.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/radio-group.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    resizable: {
      name: "resizable",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/resizable.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/resizable.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "scroll-area": {
      name: "scroll-area",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/scroll-area.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/scroll-area.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "segmented-control": {
      name: "segmented-control",
      description: "",
      type: "registry:ui",
      registryDependencies: ["use-tab-observer"],
      files: [
        {
          path: "registry/new-york-v4/ui/segmented-control.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/ui/segmented-control.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    select: {
      name: "select",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/select.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/select.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    separator: {
      name: "separator",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/separator.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/separator.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    sheet: {
      name: "sheet",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/sheet.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/sheet.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    sidebar: {
      name: "sidebar",
      description: "",
      type: "registry:ui",
      registryDependencies: [
        "button",
        "separator",
        "sheet",
        "tooltip",
        "input",
        "use-mobile",
        "skeleton",
      ],
      files: [
        {
          path: "registry/new-york-v4/ui/sidebar.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/sidebar.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    skeleton: {
      name: "skeleton",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/skeleton.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/skeleton.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    slider: {
      name: "slider",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/slider.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/slider.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    sonner: {
      name: "sonner",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/sonner.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/sonner.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    spinner: {
      name: "spinner",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/spinner.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/spinner.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    spacer: {
      name: "spacer",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/spacer.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/spacer.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    squircle: {
      name: "squircle",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/squircle.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/squircle.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["sectorial"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    switch: {
      name: "switch",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/switch.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/switch.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    table: {
      name: "table",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/table.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/table.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    tabs: {
      name: "tabs",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/tabs.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/tabs.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    textarea: {
      name: "textarea",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/textarea.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/textarea.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    theme: {
      name: "theme",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/theme.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/theme.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "theme-toggle": {
      name: "theme-toggle",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/theme-toggle.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/theme-toggle.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["primitives"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    toggle: {
      name: "toggle",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/toggle.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/toggle.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "toggle-group": {
      name: "toggle-group",
      description: "",
      type: "registry:ui",
      registryDependencies: ["toggle"],
      files: [
        {
          path: "registry/new-york-v4/ui/toggle-group.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/toggle-group.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    tooltip: {
      name: "tooltip",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/tooltip.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/tooltip.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    typography: {
      name: "typography",
      description: "",
      type: "registry:ui",
      registryDependencies: ["polymorphic"],
      files: [
        {
          path: "registry/new-york-v4/ui/typography.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/typography.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "unicorn-wrapper": {
      name: "unicorn-wrapper",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/unicorn-wrapper.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/ui/unicorn-wrapper.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["sectorial"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    kbd: {
      name: "kbd",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/kbd.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/kbd.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "native-select": {
      name: "native-select",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/ui/native-select.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/ui/native-select.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["core-components"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "background-image-parallax": {
      name: "background-image-parallax",
      description: "Animation component: background image parallax",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/background-image-parallax/background-image-parallax.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "card-swipe-carousel": {
      name: "card-swipe-carousel",
      description: "Animation component: card swipe carousel",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/card-swipe-carousel/card-swipe-carousel.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/card-swipe-carousel/card-swipe-carousel.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "cards-parallax": {
      name: "cards-parallax",
      description: "Animation component: cards parallax",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/cards-parallax/cards-parallax.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/cards-parallax/cards-parallax.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "parallax-scroll": {
      name: "parallax-scroll",
      description: "Animation component: parallax scroll",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/parallax-scroll/parallax-scroll.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/parallax-scroll/parallax-scroll.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "perspective-carousel": {
      name: "perspective-carousel",
      description: "Animation component: perspective carousel",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/perspective-carousel/perspective-carousel.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/perspective-carousel/perspective-carousel.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "perspective-section-transition": {
      name: "perspective-section-transition",
      description: "Animation component: perspective section transition",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/perspective-section-transition/perspective-section-transition.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/perspective-section-transition/perspective-section-transition.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "scroll-expand": {
      name: "scroll-expand",
      description: "Animation component: scroll expand",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/scroll-expand/scroll-expand.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/scroll-expand/scroll-expand.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "scroll-fade": {
      name: "scroll-fade",
      description: "Animation component: scroll fade",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/scroll-fade/scroll-fade.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/scroll-fade/scroll-fade.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "scroll-scale": {
      name: "scroll-scale",
      description: "Animation component: scroll scale",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/scroll-scale/scroll-scale.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/scroll-scale/scroll-scale.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "slide-down": {
      name: "slide-down",
      description: "Animation component: slide down",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/slide-down/slide-down.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/slide-down/slide-down.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "slide-up": {
      name: "slide-up",
      description: "Animation component: slide up",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/slide-up/slide-up.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/slide-up/slide-up.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "smooth-parallax-scroll": {
      name: "smooth-parallax-scroll",
      description: "Animation component: smooth parallax scroll",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/smooth-parallax-scroll/smooth-parallax-scroll.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/smooth-parallax-scroll/smooth-parallax-scroll.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "smooth-scroll": {
      name: "smooth-scroll",
      description: "Animation component: smooth scroll",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/smooth-scroll/smooth-scroll.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/smooth-scroll/smooth-scroll.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "sticky-footer": {
      name: "sticky-footer",
      description: "Animation component: sticky footer",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/sticky-footer/sticky-footer.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/sticky-footer/sticky-footer.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "text-along-path": {
      name: "text-along-path",
      description: "Animation component: text along path",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/text-along-path/text-along-path.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/text-along-path/text-along-path.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "text-gradient-opacity": {
      name: "text-gradient-opacity",
      description: "Animation component: text gradient opacity",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/text-gradient-opacity/text-gradient-opacity.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/text-gradient-opacity/text-gradient-opacity.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "text-parallax": {
      name: "text-parallax",
      description: "Animation component: text parallax",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/text-parallax/text-parallax.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/text-parallax/text-parallax.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "transforms-3d": {
      name: "transforms-3d",
      description: "Animation component: transforms 3d",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/transforms-3d/transforms-3d.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/transforms-3d/transforms-3d.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
    "zoom-parallax": {
      name: "zoom-parallax",
      description: "Animation component: zoom parallax",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/animations/zoom-parallax/zoom-parallax.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/animations/zoom-parallax/zoom-parallax.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["animations"],
      meta: undefined,
      tier: "free",
      readiness: "production",
    },
  },
}
