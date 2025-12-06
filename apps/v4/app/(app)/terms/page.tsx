import { Metadata } from "next"
import Link from "next/link"
import { cacheLife } from "next/cache"

import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { LayoutGrid, LayoutGridItem } from "../(root)/_components/layout-grid"
import { StripeBgGuides } from "../(root)/_components/striped-bg-guides"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for pitsi/ui - Read our terms and conditions for using our services.",
}

const termsContent = {
  lastUpdated: "December 1, 2024",
  sections: [
    {
      title: "Acceptance of Terms",
      content: `By accessing or using pitsi/ui services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.

These terms apply to all visitors, users, and others who access or use our services.`,
    },
    {
      title: "Use License",
      content: `**Free Components**: Components marked as free are provided under the MIT License. You may use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of these components.

**Pro Components**: Pro components require an active subscription or one-time purchase. Upon purchase, you receive a license to use these components in unlimited personal and commercial projects.

**Restrictions**: You may not:
- Redistribute or resell the components as a component library or design system
- Share your account credentials or downloaded files with others
- Use the components in a product that competes directly with pitsi/ui`,
    },
    {
      title: "Account Terms",
      content: `You are responsible for maintaining the security of your account and password. pitsi/ui cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.

You are responsible for all content posted and activity that occurs under your account.

You may not use our services for any illegal or unauthorized purpose. You must not violate any laws in your jurisdiction.`,
    },
    {
      title: "Payment Terms",
      content: `**Subscriptions**: Some features require a paid subscription. Subscriptions automatically renew unless cancelled before the renewal date.

**Refunds**: We offer a 14-day money-back guarantee for first-time purchases. After 14 days, subscriptions are non-refundable.

**Price Changes**: We reserve the right to modify prices at any time. Price changes will not affect existing subscriptions until renewal.`,
    },
    {
      title: "Intellectual Property",
      content: `The service and its original content (excluding components you receive through purchase), features, and functionality are and will remain the exclusive property of pitsi/ui and its licensors.

Our trademarks and trade dress may not be used in connection with any product or service without prior written consent.`,
    },
    {
      title: "Disclaimer of Warranties",
      content: `Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied.

We do not warrant that:
- The service will function uninterrupted, secure, or available at any particular time
- The results from the service will be accurate or reliable
- Any errors or defects will be corrected

Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.`,
    },
    {
      title: "Limitation of Liability",
      content: `In no event shall pitsi/ui, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.

Our total liability shall not exceed the amount paid by you, if any, for accessing our services during the twelve months prior to the claim.`,
    },
    {
      title: "Termination",
      content: `We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.

Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service.`,
    },
    {
      title: "Changes to Terms",
      content: `We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.

What constitutes a material change will be determined at our sole discretion. By continuing to access our service after revisions become effective, you agree to be bound by the revised terms.`,
    },
    {
      title: "Contact Us",
      content: `If you have any questions about these Terms, please contact us at:

**Email**: legal@pitsiui.com

**Address**: pitsi/ui, Inc.`,
    },
  ],
}

export default async function TermsPage() {
  "use cache"
  cacheLife("max")

  return (
    <div className="relative -mt-[56px] min-h-screen overflow-x-clip">
      <StripeBgGuides columnCount={6} animated={false} />

      {/* Two Column Layout */}
      <div className="relative z-10 container px-6">
        <Spacer size="6xl" sizeMobile="4xl" />
        <LayoutGrid>
          {/* Left Column - Header (sticky on desktop) */}
          <LayoutGridItem span={6} spanLg={2}>
            <div className="lg:sticky lg:top-24">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to home
              </Link>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <time className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                  Last updated: {termsContent.lastUpdated}
                </time>
              </div>
              <Spacer size="sm" sizeMobile="xs" />
              <h1 className="display text-3xl leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                Terms of Service
              </h1>
              <Spacer size="md" sizeMobile="sm" />
              <p className="text-muted-foreground text-base md:text-lg">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </LayoutGridItem>

          {/* Right Column - Content (last 3 columns) */}
          <LayoutGridItem span={6} spanLg={3} className="lg:col-start-4">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {termsContent.sections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="display mb-4 text-xl tracking-tight md:text-2xl">
                    {section.title}
                  </h2>
                  {section.content.split("\n\n").map((paragraph, pIndex) => {
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
                    return (
                      <p key={pIndex} className="text-muted-foreground mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  })}
                </div>
              ))}
            </div>
          </LayoutGridItem>
        </LayoutGrid>
        <Spacer size="6xl" sizeMobile="4xl" />
      </div>
    </div>
  )
}
