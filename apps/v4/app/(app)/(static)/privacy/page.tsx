import { Metadata } from "next"
import { cacheLife } from "next/cache"

import { LegalPage, type LegalPageContent } from "@/components/documentation/legal/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for pitsi/ui - Learn how we collect, use, and protect your information.",
}

const privacyContent: LegalPageContent = {
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
    <LegalPage
      title="Privacy Policy"
      description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      content={privacyContent}
    />
  )
}
