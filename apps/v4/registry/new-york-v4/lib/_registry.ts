import { type Registry } from "pitsi/schema"

export const lib: Registry["items"] = [
  {
    name: "utils",
    type: "registry:lib",
    description:
      "Utility function for merging class names with Tailwind CSS conflict resolution.",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "dynamic-icon",
    type: "registry:lib",
    description:
      "Dynamically load and render Lucide icons by name with automatic format transformation.",
    dependencies: ["lucide-react"],
    devDependencies: ["@types/react"],
    files: [
      {
        path: "lib/dynamic-icon.tsx",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "polymorphic",
    type: "registry:lib",
    description:
      "TypeScript utilities for building polymorphic components with the 'as' prop pattern.",
    devDependencies: ["@types/react"],
    files: [
      {
        path: "lib/polymorphic.ts",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "recursive-clone-children",
    type: "registry:lib",
    description:
      "Recursively clone React children and inject props into components by display name.",
    devDependencies: ["@types/react"],
    files: [
      {
        path: "lib/recursive-clone-children.tsx",
        type: "registry:lib",
      },
    ],
  },
]
