import { Metadata } from "next"
import Link from "next/link"
import { cacheLife } from "next/cache"

import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { LayoutGrid, LayoutGridItem } from "../(root)/_components/layout-grid"
import { StripeBgGuides } from "../(root)/_components/striped-bg-guides"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for pitsi/ui - Learn how we collect, use, and protect your information.",
}

const privacyContent = {
  lastUpdated: "December 1, 2024",
  sections: [
    {
      title: "Information We Collect",
      content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.

**Account Information**: When you create an account, we collect your email address and any other information you choose to provide.

**Payment Information**: When you make a purchase, our payment processor collects payment card information. We do not store your full payment card details.

**Usage Information**: We automatically collect information about your use of our services, including components you view, features you use, and the time and duration of your activities.`,
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect to:

- Provide, maintain, and improve our services
- Process transactions and send related information
- Send you technical notices, updates, and support messages
- Respond to your comments, questions, and requests
- Monitor and analyze trends, usage, and activities
- Detect, investigate, and prevent fraudulent transactions and other illegal activities`,
    },
    {
      title: "Information Sharing",
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:

**Service Providers**: We may share information with third-party vendors who perform services on our behalf, such as payment processing, data analysis, and email delivery.

**Legal Requirements**: We may disclose information if required to do so by law or in response to valid requests by public authorities.

**Business Transfers**: If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.`,
    },
    {
      title: "Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`,
    },
    {
      title: "Your Rights",
      content: `Depending on your location, you may have certain rights regarding your personal information:

- **Access**: You can request a copy of the personal information we hold about you.
- **Correction**: You can request that we correct inaccurate or incomplete information.
- **Deletion**: You can request that we delete your personal information.
- **Portability**: You can request a copy of your data in a portable format.

To exercise these rights, please contact us at privacy@pitsiui.com.`,
    },
    {
      title: "Cookies and Tracking",
      content: `We use cookies and similar tracking technologies to collect information about your browsing activities. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.

**Essential Cookies**: Required for the operation of our services.

**Analytics Cookies**: Help us understand how visitors interact with our services.

**Preference Cookies**: Remember your settings and preferences.`,
    },
    {
      title: "Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.`,
    },
    {
      title: "Contact Us",
      content: `If you have any questions about this Privacy Policy, please contact us at:

**Email**: privacy@pitsiui.com

**Address**: pitsi/ui, Inc.`,
    },
  ],
}

export default async function PrivacyPage() {
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
                  Last updated: {privacyContent.lastUpdated}
                </time>
              </div>
              <Spacer size="sm" sizeMobile="xs" />
              <h1 className="display text-3xl leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                Privacy Policy
              </h1>
              <Spacer size="md" sizeMobile="sm" />
              <p className="text-muted-foreground text-base md:text-lg">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>
          </LayoutGridItem>

          {/* Right Column - Content (last 3 columns) */}
          <LayoutGridItem span={6} spanLg={3} className="lg:col-start-4">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {privacyContent.sections.map((section, index) => (
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
