import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-auth-1",
  type: "registry:block",
  description:
    "Authentication page for sign in and sign up with social login and email/password form",
  registryDependencies: ["button", "card", "input", "label", "separator"],
  categories: ["application", "auth"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "application",
    order: 2,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
