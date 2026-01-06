import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "auth-6",
  type: "registry:block",
  description: "Reset password form with requirements checklist",
  registryDependencies: ["button", "input", "label", "utils"],
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
