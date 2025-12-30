import { Registry } from "pitsi/schema"

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
  },
  {
    name: "blocks-provider",
    type: "registry:ui",
    description:
      "Provider component for pitsi/ui blocks with theme, context, and decoration support.",
    dependencies: ["next-themes"],
    registryDependencies: [
      "utils",
      "block-theme",
      "block-context",
      "block-decorations",
    ],
    files: [
      {
        path: "ui/blocks-provider.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["providers"],
    readiness: "production",
  },
  {
    name: "animated-beam",
    type: "registry:ui",
    description: "Animated beam effect for connecting elements visually.",
    dependencies: ["motion/react"],
    files: [
      {
        path: "ui/animated-beam.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["sectorial"],
    readiness: "production",
  },
  {
    name: "border-beam",
    type: "registry:ui",
    description: "Animated border beam effect for cards and containers.",
    dependencies: ["motion/react"],
    files: [
      {
        path: "ui/border-beam.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["sectorial"],
    readiness: "production",
  },
  {
    name: "marquee",
    type: "registry:ui",
    description:
      "Infinite scrolling marquee component for logos, testimonials, and more.",
    files: [
      {
        path: "ui/marquee.tsx",
        type: "registry:ui",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              marquee: {
                from: { transform: "translateX(0)" },
                to: { transform: "translateX(calc(-100% - var(--gap)))" },
              },
              "marquee-vertical": {
                from: { transform: "translateY(0)" },
                to: { transform: "translateY(calc(-100% - var(--gap)))" },
              },
            },
            animation: {
              marquee: "marquee var(--duration) linear infinite",
              "marquee-vertical":
                "marquee-vertical var(--duration) linear infinite",
            },
          },
        },
      },
    },
    tier: "free",
    categories: ["sectorial"],
    readiness: "production",
  },
  {
    name: "bg-guides",
    type: "registry:ui",
    description: "Animated background guide lines with glow effects.",
    dependencies: ["motion/react", "next-themes"],
    files: [
      {
        path: "ui/bg-guides.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["sectorial"],
    readiness: "production",
  },
  {
    name: "texture-button",
    type: "registry:ui",
    description: "Button with textured gradient styling and multiple variants.",
    dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
    files: [
      {
        path: "ui/texture-button.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["sectorial"],
    readiness: "production",
  },
  {
    name: "texture-card",
    type: "registry:ui",
    description: "Card with multi-layered textured border styling.",
    files: [
      {
        path: "ui/texture-card.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["sectorial"],
    readiness: "production",
  },
  {
    name: "form",
    type: "registry:ui",
    description:
      "Form components built with React Hook Form for accessible form handling.",
    dependencies: [
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
      "react-hook-form",
    ],
    registryDependencies: ["label"],
    files: [
      {
        path: "ui/form.tsx",
        type: "registry:ui",
      },
    ],
    tier: "free",
    categories: ["core-components"],
    readiness: "production",
  },
]
