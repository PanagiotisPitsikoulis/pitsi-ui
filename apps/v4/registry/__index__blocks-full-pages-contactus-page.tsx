// @ts-nocheck
import * as React from "react"

export const IndexBlocksFullPagesContactusPage: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "full-pages-contactus-page-contact-us-form-with-background-and-svg-icon": {
      name: "full-pages-contactus-page-contact-us-form-with-background-and-svg-icon",
      description: "A contact us form with background and svg icon block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-form-with-background-and-svg-icon.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-form-with-background-and-svg-icon.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "full-pages-contactus-page-contact-us-with-feature-list-card-with-email-sign-up":
      {
        name: "full-pages-contactus-page-contact-us-with-feature-list-card-with-email-sign-up",
        description:
          "A contact us with feature list card with email sign up block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-with-feature-list-card-with-email-sign-up.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-with-feature-list-card-with-email-sign-up.tsx"
          )
          const exportName =
            Object.keys(mod).find(
              (key) =>
                typeof mod[key] === "function" || typeof mod[key] === "object"
            ) || item.name
          return { default: mod.default || mod[exportName] }
        }),
        categories: ["full-pages"],
        meta: undefined,
        tier: "pro",
        readiness: "beta",
      },
    "full-pages-contactus-page-contact-us-with-form-background": {
      name: "full-pages-contactus-page-contact-us-with-form-background",
      description: "A contact us with form background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-with-form-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-with-form-background.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages"],
      meta: undefined,
      tier: "pro",
      readiness: "beta",
    },
    "full-pages-contactus-page-contact-us-with-gradient-background-image": {
      name: "full-pages-contactus-page-contact-us-with-gradient-background-image",
      description: "A contact us with gradient background image block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-with-gradient-background-image.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/contactus-page/contact-us-with-gradient-background-image.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages"],
      meta: undefined,
      tier: "pro",
      readiness: "beta",
    },
  },
}
