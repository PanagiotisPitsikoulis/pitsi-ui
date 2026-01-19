import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "auth-5",
  type: "registry:block",
  description: "OTP verification with 6-digit code input",
  registryDependencies: ["button", "input", "utils"],
  categories: ["auth"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "standalone",
    blockType: "auth",
    order: 50,
    palette: "slate",
    typography: "modern",
    tint: "tinted",
  },
}
