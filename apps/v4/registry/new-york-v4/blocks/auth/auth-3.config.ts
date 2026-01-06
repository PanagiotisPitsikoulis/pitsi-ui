import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "auth-3",
  type: "registry:block",
  description: "Forgot password form with email input",
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
