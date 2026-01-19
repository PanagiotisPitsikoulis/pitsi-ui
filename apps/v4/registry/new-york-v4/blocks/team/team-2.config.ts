import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "team-2",
  type: "registry:block",
  description:
    "Coach profiles with specialties, certifications, and social links",
  registryDependencies: ["utils"],
  categories: ["team", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-fitness",
    blockType: "team",
    order: 9,
    palette: "neon",
    typography: "futuristic",
    tint: "tinted",
  },
}
