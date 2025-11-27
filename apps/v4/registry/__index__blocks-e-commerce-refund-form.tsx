// @ts-nocheck
import * as React from "react"

export const IndexBlocksECommerceRefundForm: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "e-commerce-refund-form-basic-refund-application-form": {
      name: "e-commerce-refund-form-basic-refund-application-form",
      description: "A basic refund application form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-form/basic-refund-application-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-form/basic-refund-application-form.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "free",
      readiness: "beta",
    },
    "e-commerce-refund-form-product-reason-selection-form": {
      name: "e-commerce-refund-form-product-reason-selection-form",
      description: "A product reason selection form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-form/product-reason-selection-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-form/product-reason-selection-form.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
      readiness: "beta",
    },
    "e-commerce-refund-form-refund-request-process": {
      name: "e-commerce-refund-form-refund-request-process",
      description: "A refund request process block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/refund-form/refund-request-process.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/refund-form/refund-request-process.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
      readiness: "beta",
    },
  },
}
