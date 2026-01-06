import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "auth-1",
  type: "registry:block",
  description: "Centered login form with social sign-in options",
  registryDependencies: ["button", "input", "label"],
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
