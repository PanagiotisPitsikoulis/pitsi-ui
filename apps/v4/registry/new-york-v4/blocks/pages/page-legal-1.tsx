"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

// Striped Background Component
function StripedBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <div className="container relative mx-auto h-full px-6">
        <div className="absolute inset-0 flex justify-between">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="bg-border/30 h-full w-px" />
          ))}
        </div>
      </div>
    </div>
  )
}

// Types
interface LegalSection {
  title: string
  content: string
}

interface LegalPageContent {
  lastUpdated: string
  sections: LegalSection[]
}

// Paragraph Renderer
function renderParagraph(paragraph: string, pIndex: number) {
  // Handle list items
  if (paragraph.startsWith("- ")) {
    const items = paragraph.split("\n")
    return (
      <ul key={pIndex} className="my-4 list-disc space-y-2 pl-6">
        {items.map((item, i) => (
          <li key={i} className="text-muted-foreground">
            {item.replace(/^-\s/, "").replace(/\*\*([^*]+)\*\*/g, "$1")}
          </li>
        ))}
      </ul>
    )
  }

  // Handle bold text
  if (paragraph.includes("**")) {
    const parts = paragraph.split(/(\*\*[^*]+\*\*)/)
    return (
      <p key={pIndex} className="text-muted-foreground mb-4 leading-relaxed">
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={i} className="text-foreground font-semibold">
                {part.replace(/\*\*/g, "")}
              </strong>
            )
          }
          return part
        })}
      </p>
    )
  }

  // Regular paragraph
  return (
    <p key={pIndex} className="text-muted-foreground mb-4 leading-relaxed">
      {paragraph}
    </p>
  )
}

// Default content for Privacy Policy
const privacyDefaults: LegalPageContent = {
  lastUpdated: "January 1, 2024",
  sections: [
    {
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.\n\nThis may include:\n- Your name and email address\n- Payment information\n- Usage data and preferences",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services. This includes processing transactions, sending notifications, and responding to your requests.\n\nWe may also use your information to personalize your experience and communicate with you about products, services, and events.",
    },
    {
      title: "Information Sharing",
      content:
        "We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our platform.\n\nWe may also disclose your information if required by law or to protect our rights and safety.",
    },
    {
      title: "Your Rights",
      content:
        "You have the right to access, update, or delete your personal information. You can manage your account settings or contact us directly for assistance.\n\nYou may also opt out of promotional communications at any time.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please contact us at **privacy@example.com**.",
    },
  ],
}

// Default content for Terms of Service
const termsDefaults: LegalPageContent = {
  lastUpdated: "January 1, 2024",
  sections: [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy.\n\nIf you do not agree to these terms, please do not use our services.",
    },
    {
      title: "Use of Services",
      content:
        "You may use our services only for lawful purposes and in accordance with these terms. You agree not to:\n- Violate any applicable laws or regulations\n- Infringe on the rights of others\n- Interfere with or disrupt our services\n- Attempt to gain unauthorized access",
    },
    {
      title: "Intellectual Property",
      content:
        "All content, features, and functionality of our services are owned by us and are protected by copyright, trademark, and other intellectual property laws.\n\nYou may not reproduce, distribute, or create derivative works without our express permission.",
    },
    {
      title: "Limitation of Liability",
      content:
        "To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.\n\nOur total liability shall not exceed the amount you paid us in the past twelve months.",
    },
    {
      title: "Changes to Terms",
      content:
        "We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page.\n\nYour continued use of our services after any changes constitutes acceptance of the new terms.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions about these Terms of Service, please contact us at **legal@example.com**.",
    },
  ],
}

// Page defaults
const pageLegal1Defaults = {
  title: "Privacy Policy",
  description: "How we collect, use, and protect your personal information.",
  backLink: { label: "Back to home", href: "/" },
  content: privacyDefaults,
}

interface PageLegal1Props {
  variant?: "privacy" | "terms"
  title?: string
  description?: string
  backLink?: { label: string; href: string }
  content?: LegalPageContent
  className?: string
}

export function PageLegal1({
  variant = "privacy",
  title,
  description,
  backLink = pageLegal1Defaults.backLink,
  content,
  className,
}: PageLegal1Props) {
  // Set defaults based on variant
  const defaultTitle = variant === "privacy" ? "Privacy Policy" : "Terms of Service"
  const defaultDescription =
    variant === "privacy"
      ? "How we collect, use, and protect your personal information."
      : "The rules and guidelines for using our services."
  const defaultContent = variant === "privacy" ? privacyDefaults : termsDefaults

  const finalTitle = title || defaultTitle
  const finalDescription = description || defaultDescription
  const finalContent = content || defaultContent

  return (
    <div
      className={cn(
        "relative -mt-14 min-h-screen overflow-x-clip",
        className
      )}
    >
      <StripedBackground />

      <div className="relative z-10 container px-6">
        <Spacer size="6xl" sizeMobile="4xl" />

        <div className="grid grid-cols-6 gap-6">
          {/* Left Column - Sticky Sidebar */}
          <div className="col-span-6 lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              {/* Back Link */}
              <Link
                href={backLink.href}
                className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
              >
                <ArrowLeft className="size-4" />
                {backLink.label}
              </Link>

              {/* Last Updated */}
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <time className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                  Last updated: {finalContent.lastUpdated}
                </time>
              </div>

              <Spacer size="sm" sizeMobile="xs" />

              {/* Title */}
              <h1 className="text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                {finalTitle}
              </h1>

              <Spacer size="md" sizeMobile="sm" />

              {/* Description */}
              <p className="text-muted-foreground text-base md:text-lg">
                {finalDescription}
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-6 lg:col-span-3 lg:col-start-4">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {finalContent.sections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                    {section.title}
                  </h2>
                  {section.content
                    .split("\n\n")
                    .map((paragraph, pIndex) =>
                      renderParagraph(paragraph, pIndex)
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Spacer size="6xl" sizeMobile="4xl" />
      </div>
    </div>
  )
}
