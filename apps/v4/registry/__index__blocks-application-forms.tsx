import * as React from "react"

export const IndexBlocksApplicationForms: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "application-forms-account-information-form": {
      name: "application-forms-account-information-form",
      description: "A account information form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/account-information-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/account-information-form.tsx"
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
    },
    "application-forms-application-layout-with-file-upload": {
      name: "application-forms-application-layout-with-file-upload",
      description: "A application layout with file upload block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/application-layout-with-file-upload.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/application-layout-with-file-upload.tsx"
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
    },
    "application-forms-basic-feedback-form": {
      name: "application-forms-basic-feedback-form",
      description: "A basic feedback form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/basic-feedback-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/basic-feedback-form.tsx"
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
    },
    "application-forms-basic-tailwind-ui-form": {
      name: "application-forms-basic-tailwind-ui-form",
      description: "A basic tailwind ui form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/basic-tailwind-ui-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/basic-tailwind-ui-form.tsx"
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
    },
    "application-forms-billing-information-form-with-card-info": {
      name: "application-forms-billing-information-form-with-card-info",
      description: "A billing information form with card info block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/billing-information-form-with-card-info.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/billing-information-form-with-card-info.tsx"
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
    },
    "application-forms-booking-from": {
      name: "application-forms-booking-from",
      description: "A booking from block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/booking-from.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/booking-from.tsx"
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
    },
    "application-forms-contact-from-tailwind": {
      name: "application-forms-contact-from-tailwind",
      description: "A contact from tailwind block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/contact-from-tailwind.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/contact-from-tailwind.tsx"
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
    },
    "application-forms-custom-review-tailwind-css-from": {
      name: "application-forms-custom-review-tailwind-css-from",
      description: "A custom review tailwind css from block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/custom-review-tailwind-css-from.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/custom-review-tailwind-css-from.tsx"
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
    },
    "application-forms-edit-profile-form": {
      name: "application-forms-edit-profile-form",
      description: "A edit profile form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/edit-profile-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/edit-profile-form.tsx"
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
    },
    "application-forms-feedback-from": {
      name: "application-forms-feedback-from",
      description: "A feedback from block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/feedback-from.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/feedback-from.tsx"
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
    },
    "application-forms-invoice-from-tailwind": {
      name: "application-forms-invoice-from-tailwind",
      description: "A invoice from tailwind block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/invoice-from-tailwind.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/invoice-from-tailwind.tsx"
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
    },
    "application-forms-order-billing-form": {
      name: "application-forms-order-billing-form",
      description: "A order billing form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/order-billing-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/order-billing-form.tsx"
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
    },
    "application-forms-registration-form": {
      name: "application-forms-registration-form",
      description: "A registration form block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/registration-form.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/registration-form.tsx"
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
    },
    "application-forms-registration-from": {
      name: "application-forms-registration-from",
      description: "A registration from block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/registration-from.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/registration-from.tsx"
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
    },
    "application-forms-request-form-tailwind-css": {
      name: "application-forms-request-form-tailwind-css",
      description: "A request form tailwind css block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/request-form-tailwind-css.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/request-form-tailwind-css.tsx"
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
    },
    "application-forms-simple-contact-from": {
      name: "application-forms-simple-contact-from",
      description: "A simple contact from block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/simple-contact-from.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/simple-contact-from.tsx"
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
    },
    "application-forms-tailwind-form-with-progress-bar": {
      name: "application-forms-tailwind-form-with-progress-bar",
      description: "A tailwind form with progress bar block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/tailwind-form-with-progress-bar.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/tailwind-form-with-progress-bar.tsx"
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
    },
    "application-forms-tailwind-login-form-with-cta": {
      name: "application-forms-tailwind-login-form-with-cta",
      description: "A tailwind login form with cta block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/tailwind-login-form-with-cta.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/tailwind-login-form-with-cta.tsx"
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
    },
    "application-forms-verification-from-tailwind-css": {
      name: "application-forms-verification-from-tailwind-css",
      description: "A verification from tailwind css block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/forms/verification-from-tailwind-css.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/forms/verification-from-tailwind-css.tsx"
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
    },
  },
}
