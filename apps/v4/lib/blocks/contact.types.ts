import type {
  BlockBaseClassNames,
  BlockCTA,
  BlockFormField,
  BlockHeaderClassNames,
  BlockSectionHeader,
} from "./types"

// ============================================================================
// Contact Content Types
// ============================================================================

export interface ContactInfo {
  /** Lucide icon name */
  icon: string
  label: string
  value: string
  href?: string
}

export interface ContactForm {
  fields: BlockFormField[]
  submitLabel: string
  successMessage?: string
}

export interface ContactContent extends BlockSectionHeader {
  /** Contact information items */
  contactInfo?: ContactInfo[]
  /** Form configuration */
  form?: ContactForm
  /** CTA button (alternative to form) */
  cta?: BlockCTA
}

// ============================================================================
// Contact ClassNames Types
// ============================================================================

export interface ContactFormClassNames {
  root?: string
  field?: string
  label?: string
  input?: string
  textarea?: string
  submit?: string
}

export interface ContactInfoClassNames {
  root?: string
  item?: string
  icon?: string
  label?: string
  value?: string
}

export interface ContactClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames
  form?: ContactFormClassNames
  info?: ContactInfoClassNames
}

// ============================================================================
// Contact Props
// ============================================================================

export interface ContactBlockProps {
  content?: Partial<ContactContent>
  classNames?: ContactClassNames
}

// ============================================================================
// Contact Defaults
// ============================================================================

export const contactDefaults: ContactContent = {
  badge: "Contact Us",
  title: "Get in Touch",
  description: "Have questions? We'd love to hear from you.",
  contactInfo: [
    {
      icon: "Mail",
      label: "Email",
      value: "hello@plantlife.com",
      href: "mailto:hello@plantlife.com",
    },
    {
      icon: "Phone",
      label: "Phone",
      value: "(555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: "MapPin",
      label: "Address",
      value: "123 Green Street, Garden City",
    },
  ],
  form: {
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Your name",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "you@example.com",
        required: true,
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "How can we help?",
        required: true,
      },
    ],
    submitLabel: "Send Message",
    successMessage: "Thank you! We'll be in touch soon.",
  },
}
