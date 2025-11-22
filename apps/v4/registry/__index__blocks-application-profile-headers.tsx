import * as React from "react"

export const IndexBlocksApplicationProfileHeaders: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "application-profile-headers-profile-header-with-buttons": {
      name: "application-profile-headers-profile-header-with-buttons",
      description: "A profile header with buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/profile-headers/profile-header-with-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/profile-headers/profile-header-with-buttons.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "application-profile-headers-profile-header-with-user-description": {
      name: "application-profile-headers-profile-header-with-user-description",
      description: "A profile header with user description block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/profile-headers/profile-header-with-user-description.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/profile-headers/profile-header-with-user-description.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "application-profile-headers-profile-header-with-user-s-experiences": {
      name: "application-profile-headers-profile-header-with-user-s-experiences",
      description: "A profile header with user s experiences block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/profile-headers/profile-header-with-user-s-experiences.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/profile-headers/profile-header-with-user-s-experiences.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
      readiness: "beta",
    },
    "application-profile-headers-profile-headers-with-background-image": {
      name: "application-profile-headers-profile-headers-with-background-image",
      description: "A profile headers with background image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/profile-headers/profile-headers-with-background-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/profile-headers/profile-headers-with-background-image.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
      readiness: "beta",
    },
    "application-profile-headers-profile-headers-with-center-image": {
      name: "application-profile-headers-profile-headers-with-center-image",
      description: "A profile headers with center image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/profile-headers/profile-headers-with-center-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/profile-headers/profile-headers-with-center-image.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
      readiness: "beta",
    },
    "application-profile-headers-profile-with-users-skills": {
      name: "application-profile-headers-profile-with-users-skills",
      description: "A profile with users skills block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/profile-headers/profile-with-users-skills.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/profile-headers/profile-with-users-skills.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["application"],
      meta: undefined,
      tier: "pro",
      readiness: "alpha",
    },
  },
}
