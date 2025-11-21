import * as React from "react"

export const IndexBlocksApplicationModalbox: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "application-modalbox-card-modal-with-share-link-option": {
      name: "application-modalbox-card-modal-with-share-link-option",
      description: "A card modal with share link option block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/card-modal-with-share-link-option.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/card-modal-with-share-link-option.tsx"
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
    "application-modalbox-create-meeting-modal": {
      name: "application-modalbox-create-meeting-modal",
      description: "A create meeting modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/create-meeting-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/create-meeting-modal.tsx"
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
    "application-modalbox-create-profile-modal-with-file-upload": {
      name: "application-modalbox-create-profile-modal-with-file-upload",
      description: "A create profile modal with file upload block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/create-profile-modal-with-file-upload.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/create-profile-modal-with-file-upload.tsx"
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
    "application-modalbox-create-project-modal-with-team-selection": {
      name: "application-modalbox-create-project-modal-with-team-selection",
      description: "A create project modal with team selection block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/create-project-modal-with-team-selection.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/create-project-modal-with-team-selection.tsx"
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
    "application-modalbox-currency-converter-modal": {
      name: "application-modalbox-currency-converter-modal",
      description: "A currency converter modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/currency-converter-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/currency-converter-modal.tsx"
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
    "application-modalbox-currency-exchange-modal-with-dropdown": {
      name: "application-modalbox-currency-exchange-modal-with-dropdown",
      description: "A currency exchange modal with dropdown block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/currency-exchange-modal-with-dropdown.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/currency-exchange-modal-with-dropdown.tsx"
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
    "application-modalbox-date-input-and-toggle-button-modal": {
      name: "application-modalbox-date-input-and-toggle-button-modal",
      description: "A date input and toggle button modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/date-input-and-toggle-button-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/date-input-and-toggle-button-modal.tsx"
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
    "application-modalbox-delete-modal-with-checkbox": {
      name: "application-modalbox-delete-modal-with-checkbox",
      description: "A delete modal with checkbox block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/delete-modal-with-checkbox.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/delete-modal-with-checkbox.tsx"
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
    "application-modalbox-event-modal": {
      name: "application-modalbox-event-modal",
      description: "A event modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/event-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/event-modal.tsx"
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
    "application-modalbox-feature-modal-with-carousel": {
      name: "application-modalbox-feature-modal-with-carousel",
      description: "A feature modal with carousel block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/feature-modal-with-carousel.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/feature-modal-with-carousel.tsx"
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
    "application-modalbox-feedback-modal": {
      name: "application-modalbox-feedback-modal",
      description: "A feedback modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/feedback-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/feedback-modal.tsx"
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
    "application-modalbox-file-upload-modal": {
      name: "application-modalbox-file-upload-modal",
      description: "A file upload modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/file-upload-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/file-upload-modal.tsx"
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
    "application-modalbox-invite-modal-with-file-input": {
      name: "application-modalbox-invite-modal-with-file-input",
      description: "A invite modal with file input block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/invite-modal-with-file-input.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/invite-modal-with-file-input.tsx"
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
    "application-modalbox-manage-team-modal": {
      name: "application-modalbox-manage-team-modal",
      description: "A manage team modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/manage-team-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/manage-team-modal.tsx"
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
    "application-modalbox-messaging-modal-with-file-upload": {
      name: "application-modalbox-messaging-modal-with-file-upload",
      description: "A messaging modal with file upload block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/messaging-modal-with-file-upload.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/messaging-modal-with-file-upload.tsx"
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
    "application-modalbox-modal-with-carousel": {
      name: "application-modalbox-modal-with-carousel",
      description: "A modal with carousel block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-carousel.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-carousel.tsx"
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
    "application-modalbox-modal-with-footer": {
      name: "application-modalbox-modal-with-footer",
      description: "A modal with footer block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-footer.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-footer.tsx"
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
    "application-modalbox-modal-with-form-element": {
      name: "application-modalbox-modal-with-form-element",
      description: "A modal with form element block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-form-element.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-form-element.tsx"
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
    "application-modalbox-modal-with-full-width-buttons": {
      name: "application-modalbox-modal-with-full-width-buttons",
      description: "A modal with full width buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-full-width-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-full-width-buttons.tsx"
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
    "application-modalbox-modal-with-input-and-toggle-buttons": {
      name: "application-modalbox-modal-with-input-and-toggle-buttons",
      description: "A modal with input and toggle buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-input-and-toggle-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-input-and-toggle-buttons.tsx"
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
    "application-modalbox-modal-with-link-sharing": {
      name: "application-modalbox-modal-with-link-sharing",
      description: "A modal with link sharing block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-link-sharing.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-link-sharing.tsx"
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
    "application-modalbox-modal-with-search": {
      name: "application-modalbox-modal-with-search",
      description: "A modal with search block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-search.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-search.tsx"
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
    "application-modalbox-modal-with-search-and-checkbox": {
      name: "application-modalbox-modal-with-search-and-checkbox",
      description: "A modal with search and checkbox block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-search-and-checkbox.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-search-and-checkbox.tsx"
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
    "application-modalbox-modal-with-separator": {
      name: "application-modalbox-modal-with-separator",
      description: "A modal with separator block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-separator.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-separator.tsx"
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
    "application-modalbox-modal-with-single-action": {
      name: "application-modalbox-modal-with-single-action",
      description: "A modal with single action block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-single-action.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-single-action.tsx"
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
    "application-modalbox-modal-with-social-media-buttons": {
      name: "application-modalbox-modal-with-social-media-buttons",
      description: "A modal with social media buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-social-media-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-social-media-buttons.tsx"
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
    "application-modalbox-modal-with-verification-code-input": {
      name: "application-modalbox-modal-with-verification-code-input",
      description: "A modal with verification code input block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/modal-with-verification-code-input.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/modal-with-verification-code-input.tsx"
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
    "application-modalbox-multiple-account-handle-with-checkbox": {
      name: "application-modalbox-multiple-account-handle-with-checkbox",
      description: "A multiple account handle with checkbox block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/multiple-account-handle-with-checkbox.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/multiple-account-handle-with-checkbox.tsx"
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
    "application-modalbox-notification-modal": {
      name: "application-modalbox-notification-modal",
      description: "A notification modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/notification-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/notification-modal.tsx"
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
    "application-modalbox-payment-modal-with-input-fields": {
      name: "application-modalbox-payment-modal-with-input-fields",
      description: "A payment modal with input fields block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/payment-modal-with-input-fields.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/payment-modal-with-input-fields.tsx"
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
    "application-modalbox-pricing-plan-modal-with-radio-buttons": {
      name: "application-modalbox-pricing-plan-modal-with-radio-buttons",
      description: "A pricing plan modal with radio buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/pricing-plan-modal-with-radio-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/pricing-plan-modal-with-radio-buttons.tsx"
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
    "application-modalbox-radio-input-modal": {
      name: "application-modalbox-radio-input-modal",
      description: "A radio input modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/radio-input-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/radio-input-modal.tsx"
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
    "application-modalbox-relogin-modal-with-password-input": {
      name: "application-modalbox-relogin-modal-with-password-input",
      description: "A relogin modal with password input block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/relogin-modal-with-password-input.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/relogin-modal-with-password-input.tsx"
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
    "application-modalbox-share-modal-with-customizing-options": {
      name: "application-modalbox-share-modal-with-customizing-options",
      description: "A share modal with customizing options block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/share-modal-with-customizing-options.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/share-modal-with-customizing-options.tsx"
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
    "application-modalbox-share-modal-with-input-and-checkbox": {
      name: "application-modalbox-share-modal-with-input-and-checkbox",
      description: "A share modal with input and checkbox block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/share-modal-with-input-and-checkbox.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/share-modal-with-input-and-checkbox.tsx"
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
    "application-modalbox-share-with-input-search-modal": {
      name: "application-modalbox-share-with-input-search-modal",
      description: "A share with input search modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/share-with-input-search-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/share-with-input-search-modal.tsx"
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
    "application-modalbox-sign-in-modal-with-wide-button": {
      name: "application-modalbox-sign-in-modal-with-wide-button",
      description: "A sign in modal with wide button block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/sign-in-modal-with-wide-button.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/sign-in-modal-with-wide-button.tsx"
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
    "application-modalbox-simple-delete-modal": {
      name: "application-modalbox-simple-delete-modal",
      description: "A simple delete modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/simple-delete-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/simple-delete-modal.tsx"
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
    "application-modalbox-simple-modal-with-icon": {
      name: "application-modalbox-simple-modal-with-icon",
      description: "A simple modal with icon block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/simple-modal-with-icon.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/simple-modal-with-icon.tsx"
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
    "application-modalbox-simple-modal-with-number-input": {
      name: "application-modalbox-simple-modal-with-number-input",
      description: "A simple modal with number input block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/simple-modal-with-number-input.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/simple-modal-with-number-input.tsx"
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
    "application-modalbox-subscribe-modal-with-input": {
      name: "application-modalbox-subscribe-modal-with-input",
      description: "A subscribe modal with input block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/subscribe-modal-with-input.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/subscribe-modal-with-input.tsx"
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
    "application-modalbox-success-modal-with-two-buttons": {
      name: "application-modalbox-success-modal-with-two-buttons",
      description: "A success modal with two buttons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/success-modal-with-two-buttons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/success-modal-with-two-buttons.tsx"
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
    "application-modalbox-team-management-modal": {
      name: "application-modalbox-team-management-modal",
      description: "A team management modal block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/application/modalbox/team-management-modal.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/application/modalbox/team-management-modal.tsx"
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
