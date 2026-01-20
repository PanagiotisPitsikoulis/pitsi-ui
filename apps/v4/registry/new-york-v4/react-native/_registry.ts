import { Registry } from "pitsi/schema"

export const reactNative: Registry["items"] = [
  {
    name: "rn-button",
    type: "registry:ui",
    description:
      "A pressable button component for React Native with variants and sizes.",
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    files: [
      {
        path: "react-native/rn-button.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["react-native"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "rn-card",
    type: "registry:ui",
    description:
      "A card container component for React Native with header, content, and footer sections.",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "react-native/rn-card.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["react-native"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "rn-typography",
    type: "registry:ui",
    description:
      "Typography component for React Native with preset text variants.",
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    files: [
      {
        path: "react-native/rn-typography.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["react-native"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "rn-input",
    type: "registry:ui",
    description:
      "A styled TextInput component for React Native with focus states.",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "react-native/rn-input.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["react-native"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "rn-progress",
    type: "registry:ui",
    description: "A progress bar component for React Native.",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "react-native/rn-progress.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["react-native"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "rn-badge",
    type: "registry:ui",
    description: "A badge component for React Native with color variants.",
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    files: [
      {
        path: "react-native/rn-badge.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["react-native"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "rn-avatar",
    type: "registry:ui",
    description:
      "An avatar component for React Native with image and fallback support.",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "react-native/rn-avatar.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["react-native"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "rn-checkbox",
    type: "registry:ui",
    description:
      "A checkbox component for React Native with checked and indeterminate states.",
    dependencies: ["clsx", "tailwind-merge", "lucide-react-native"],
    files: [
      {
        path: "react-native/rn-checkbox.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["react-native"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "rn-switch",
    type: "registry:ui",
    description: "A toggle switch component for React Native.",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "react-native/rn-switch.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["react-native"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "rn-separator",
    type: "registry:ui",
    description:
      "A separator/divider component for React Native with horizontal and vertical orientations.",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "react-native/rn-separator.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["react-native"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "rn-skeleton",
    type: "registry:ui",
    description:
      "A skeleton loading placeholder component for React Native with pulse animation.",
    dependencies: ["clsx", "tailwind-merge", "react-native-reanimated"],
    files: [
      {
        path: "react-native/rn-skeleton.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["react-native"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "rn-alert",
    type: "registry:ui",
    description:
      "An alert component for React Native with variants for info, success, warning, and error.",
    dependencies: [
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "lucide-react-native",
    ],
    files: [
      {
        path: "react-native/rn-alert.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["react-native"],
    tier: "free",
    readiness: "beta",
  },
]
