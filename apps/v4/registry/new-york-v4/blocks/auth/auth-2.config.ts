import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "auth-2",
  type: "registry:block",
  description:
    "Signup form with name fields, terms checkbox, and social options",
  registryDependencies: ["button", "checkbox", "input", "label"],
  categories: ["auth"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "standalone",
    blockType: "auth",
    order: 50,
    palette: "slate",
    typography: "modern",
    tint: "tinted",
  },
}
