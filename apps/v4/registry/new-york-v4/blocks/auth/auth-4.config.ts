import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "auth-4",
  type: "registry:block",
  description: "Split-screen login with image panel and testimonial",
  registryDependencies: ["button", "input", "label"],
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
