import { Registry } from "pitsi/schema"

const SHADCN = { name: "shadcn/ui", url: "https://ui.shadcn.com" }

const RADIX_POWERED_BY = [
  SHADCN,
  { name: "Radix UI", url: "https://radix-ui.com" },
]

const EMBLA_POWERED_BY = [
  SHADCN,
  { name: "Embla Carousel", url: "https://www.embla-carousel.com" },
]

const RECHARTS_POWERED_BY = [
  SHADCN,
  { name: "Recharts", url: "https://recharts.org" },
]

const REACT_DAY_PICKER_POWERED_BY = [
  SHADCN,
  { name: "React Day Picker", url: "https://daypicker.dev" },
]

const CMDK_POWERED_BY = [SHADCN, { name: "cmdk", url: "https://cmdk.paco.me" }]

const VAUL_POWERED_BY = [
  SHADCN,
  { name: "Vaul", url: "https://vaul.emilkowal.ski" },
]

const SONNER_POWERED_BY = [
  SHADCN,
  { name: "Sonner", url: "https://sonner.emilkowal.ski" },
]

const MOTION_POWERED_BY = [{ name: "Motion", url: "https://motion.dev" }]
const SKIPERUI_POWERED_BY = [
  { name: "Skiper UI", url: "https://skiper-ui.com" },
]

const RESIZABLE_PANELS_POWERED_BY = [
  SHADCN,
  {
    name: "react-resizable-panels",
    url: "https://react-resizable-panels.vercel.app",
  },
]

const INPUT_OTP_POWERED_BY = [
  SHADCN,
  { name: "input-otp", url: "https://input-otp.rodz.dev" },
]

const SHADCN_POWERED_BY = [SHADCN]

export const ui: Registry["items"] = [
  {
    name: "accordion",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-accordion"],
    files: [
      {
        path: "ui/accordion.tsx",
        type: "registry:ui",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              "accordion-down": {
                from: { height: "0" },
                to: { height: "var(--radix-accordion-content-height)" },
              },
              "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: "0" },
              },
            },
            animation: {
              "accordion-down": "accordion-down 0.2s ease-out",
              "accordion-up": "accordion-up 0.2s ease-out",
            },
          },
        },
      },
    },
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "alert",
    type: "registry:ui",
    files: [
      {
        path: "ui/alert.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "alert-dialog",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-alert-dialog"],
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/alert-dialog.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "aspect-ratio",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-aspect-ratio"],
    files: [
      {
        path: "ui/aspect-ratio.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "avatar",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-avatar"],
    files: [
      {
        path: "ui/avatar.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "badge",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "ui/badge.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "breadcrumb",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "ui/breadcrumb.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "button",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "ui/button.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "button-group",
    type: "registry:ui",
    registryDependencies: ["button", "separator"],
    files: [
      {
        path: "ui/button-group.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "hero-button",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/hero-button.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
  },
  {
    name: "calendar",
    type: "registry:ui",
    dependencies: ["react-day-picker@latest", "date-fns"],
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/calendar.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: REACT_DAY_PICKER_POWERED_BY,
  },
  {
    name: "card",
    type: "registry:ui",
    files: [
      {
        path: "ui/card.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "carousel",
    type: "registry:ui",
    files: [
      {
        path: "ui/carousel.tsx",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["button"],
    dependencies: ["embla-carousel-react"],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: EMBLA_POWERED_BY,
  },
  {
    name: "chart",
    type: "registry:ui",
    files: [
      {
        path: "ui/chart.tsx",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["card"],
    dependencies: ["recharts@2.15.4", "lucide-react"],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RECHARTS_POWERED_BY,
  },
  {
    name: "checkbox",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-checkbox"],
    files: [
      {
        path: "ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "collapsible",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-collapsible"],
    files: [
      {
        path: "ui/collapsible.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "command",
    type: "registry:ui",
    dependencies: ["cmdk"],
    registryDependencies: ["dialog"],
    files: [
      {
        path: "ui/command.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: CMDK_POWERED_BY,
  },
  {
    name: "context-menu",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-context-menu"],
    files: [
      {
        path: "ui/context-menu.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "container",
    type: "registry:ui",
    files: [
      {
        path: "ui/container.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["primitives"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "dialog",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: [
      {
        path: "ui/dialog.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "drawer",
    type: "registry:ui",
    dependencies: ["vaul", "@radix-ui/react-dialog"],
    files: [
      {
        path: "ui/drawer.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: VAUL_POWERED_BY,
  },
  {
    name: "dropdown-menu",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dropdown-menu"],
    files: [
      {
        path: "ui/dropdown-menu.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "empty",
    type: "registry:ui",
    files: [
      {
        path: "ui/empty.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "field",
    type: "registry:ui",
    registryDependencies: ["label", "separator"],
    files: [
      {
        path: "ui/field.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "flex",
    type: "registry:ui",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["polymorphic", "use-mobile"],
    files: [
      {
        path: "ui/flex.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["primitives"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "grid",
    type: "registry:ui",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["polymorphic", "use-mobile"],
    files: [
      {
        path: "ui/grid.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["primitives"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "hover-card",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-hover-card"],
    files: [
      {
        path: "ui/hover-card.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "input",
    type: "registry:ui",
    files: [
      {
        path: "ui/input.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "input-group",
    type: "registry:ui",
    registryDependencies: ["button", "input", "textarea"],
    files: [
      {
        path: "ui/input-group.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "input-otp",
    type: "registry:ui",
    dependencies: ["input-otp"],
    files: [
      {
        path: "ui/input-otp.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: INPUT_OTP_POWERED_BY,
  },
  {
    name: "item",
    type: "registry:ui",
    registryDependencies: ["separator"],
    files: [
      {
        path: "ui/item.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "label",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-label"],
    files: [
      {
        path: "ui/label.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "menubar",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-menubar"],
    files: [
      {
        path: "ui/menubar.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "navigation-menu",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-navigation-menu"],
    files: [
      {
        path: "ui/navigation-menu.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "pagination",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/pagination.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "popover",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-popover"],
    files: [
      {
        path: "ui/popover.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "progress",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-progress"],
    files: [
      {
        path: "ui/progress.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "progressive-blur",
    type: "registry:ui",
    dependencies: ["motion/react"],
    files: [
      {
        path: "ui/progressive-blur.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["primitives"],
    readiness: "production",
    poweredBy: SKIPERUI_POWERED_BY,
  },
  {
    name: "radio-group",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-radio-group"],
    files: [
      {
        path: "ui/radio-group.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "resizable",
    type: "registry:ui",
    dependencies: ["react-resizable-panels"],
    files: [
      {
        path: "ui/resizable.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RESIZABLE_PANELS_POWERED_BY,
  },
  {
    name: "responsive",
    type: "registry:ui",
    registryDependencies: ["use-mobile"],
    files: [
      {
        path: "ui/responsive.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["layout"],
    readiness: "production",
  },
  {
    name: "scroll-area",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-scroll-area"],
    files: [
      {
        path: "ui/scroll-area.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "segmented-control",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/react-slot",
      "@radix-ui/react-tabs",
      "merge-refs",
    ],
    registryDependencies: ["use-tab-observer"],
    files: [
      {
        path: "ui/segmented-control.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["primitives"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "select",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-select"],
    files: [
      {
        path: "ui/select.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "separator",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-separator"],
    files: [
      {
        path: "ui/separator.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "sheet",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: [
      {
        path: "ui/sheet.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "sidebar",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/react-slot",
      "class-variance-authority",
      "lucide-react",
    ],
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
        path: "ui/sidebar.tsx",
        type: "registry:ui",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {
              sidebar: {
                DEFAULT: "hsl(var(--sidebar-background))",
                foreground: "hsl(var(--sidebar-foreground))",
                primary: "hsl(var(--sidebar-primary))",
                "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
                accent: "hsl(var(--sidebar-accent))",
                "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                border: "hsl(var(--sidebar-border))",
                ring: "hsl(var(--sidebar-ring))",
              },
            },
          },
        },
      },
    },
    cssVars: {
      light: {
        "sidebar-background": "0 0% 98%",
        "sidebar-foreground": "240 5.3% 26.1%",
        "sidebar-primary": "240 5.9% 10%",
        "sidebar-primary-foreground": "0 0% 98%",
        "sidebar-accent": "240 4.8% 95.9%",
        "sidebar-accent-foreground": "240 5.9% 10%",
        "sidebar-border": "220 13% 91%",
        "sidebar-ring": "217.2 91.2% 59.8%",
      },
      dark: {
        "sidebar-background": "240 5.9% 10%",
        "sidebar-foreground": "240 4.8% 95.9%",
        "sidebar-primary": "224.3 76.3% 48%",
        "sidebar-primary-foreground": "0 0% 100%",
        "sidebar-accent": "240 3.7% 15.9%",
        "sidebar-accent-foreground": "240 4.8% 95.9%",
        "sidebar-border": "240 3.7% 15.9%",
        "sidebar-ring": "217.2 91.2% 59.8%",
      },
    },
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "skeleton",
    type: "registry:ui",
    files: [
      {
        path: "ui/skeleton.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "slider",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slider"],
    files: [
      {
        path: "ui/slider.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "sonner",
    type: "registry:ui",
    dependencies: ["sonner", "next-themes"],
    files: [
      {
        path: "ui/sonner.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SONNER_POWERED_BY,
  },
  {
    name: "spinner",
    type: "registry:ui",
    dependencies: ["class-variance-authority"],
    files: [
      {
        path: "ui/spinner.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "spacer",
    type: "registry:ui",
    dependencies: ["class-variance-authority", "@radix-ui/react-slot"],
    files: [
      {
        path: "ui/spacer.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["primitives"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "squircle",
    type: "registry:ui",
    dependencies: ["motion/react"],
    files: [
      {
        path: "ui/squircle.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["sectorial"],
    readiness: "production",
    poweredBy: SKIPERUI_POWERED_BY,
  },
  {
    name: "switch",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-switch"],
    files: [
      {
        path: "ui/switch.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "table",
    type: "registry:ui",
    files: [
      {
        path: "ui/table.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "tabs",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tabs"],
    files: [
      {
        path: "ui/tabs.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "textarea",
    type: "registry:ui",
    files: [
      {
        path: "ui/textarea.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "theme",
    type: "registry:ui",
    dependencies: ["next-themes"],
    files: [
      {
        path: "ui/theme.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["primitives"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "theme-toggle",
    type: "registry:ui",
    dependencies: ["next-themes", "lucide-react"],
    files: [
      {
        path: "ui/theme-toggle.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["primitives"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "toast",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-toast"],
    files: [
      {
        path: "ui/toast.tsx",
        type: "registry:ui",
      },
      {
        path: "hooks/use-toast.ts",
        type: "registry:hook",
      },
      {
        path: "ui/toaster.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "toggle",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-toggle"],
    files: [
      {
        path: "ui/toggle.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "toggle-group",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-toggle-group"],
    registryDependencies: ["toggle"],
    files: [
      {
        path: "ui/toggle-group.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "tooltip",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tooltip"],
    files: [
      {
        path: "ui/tooltip.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: RADIX_POWERED_BY,
  },
  {
    name: "typography",
    type: "registry:ui",
    registryDependencies: ["polymorphic"],
    files: [
      {
        path: "ui/typography.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "unicorn-wrapper",
    type: "registry:ui",
    dependencies: ["unicornstudio-react"],
    files: [
      {
        path: "ui/unicorn-wrapper.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["sectorial"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "kbd",
    type: "registry:ui",
    files: [
      {
        path: "ui/kbd.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
  {
    name: "native-select",
    type: "registry:ui",
    files: [
      {
        path: "ui/native-select.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
    poweredBy: SHADCN_POWERED_BY,
  },
]
