import type { Metadata } from "next"

import { WEBSITE_TIERS } from "@/lib/server/services"

import { ServicePricingCard } from "../_components/service-pricing-card"

export const metadata: Metadata = {
  title: "Custom Websites | Pitsi Services",
  description:
    "Get a professionally designed custom website tailored to your business needs.",
}

export default function WebsitesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Custom Websites
            <br />
            <span className="text-primary">Built for Your Business</span>
          </h1>
          <p className="text-muted-foreground mt-6 text-lg">
            From stunning landing pages to full-featured e-commerce solutions.
            We build websites that convert visitors into customers.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Choose Your Package</h2>
            <p className="text-muted-foreground mt-2">
              Select the plan that best fits your needs
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {WEBSITE_TIERS.map((tier) => (
              <ServicePricingCard
                key={tier.id}
                tier={tier}
                serviceType="website"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">What You Get</h2>
          <p className="text-muted-foreground mt-2">
            Every website includes these essential features
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 font-semibold">Responsive Design</h3>
            <p className="text-muted-foreground text-sm">
              Your website looks perfect on all devices - desktop, tablet, and
              mobile.
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 font-semibold">SEO Optimized</h3>
            <p className="text-muted-foreground text-sm">
              Built with best practices to help your site rank higher in search
              results.
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 font-semibold">Fast Performance</h3>
            <p className="text-muted-foreground text-sm">
              Optimized for speed with modern technologies for the best user
              experience.
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 font-semibold">Source Code Included</h3>
            <p className="text-muted-foreground text-sm">
              You own your code. Full access to source files and documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="text-muted-foreground mt-2">
              Simple and transparent process
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Order",
                description: "Choose your package and complete the checkout",
              },
              {
                step: "2",
                title: "Brief",
                description: "Share your requirements and design preferences",
              },
              {
                step: "3",
                title: "Build",
                description: "We design and develop your custom website",
              },
              {
                step: "4",
                title: "Launch",
                description: "Review, approve, and go live with your site",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          {[
            {
              q: "How long does it take to build a website?",
              a: "Depending on the package, delivery takes between 14-45 days. We'll provide a specific timeline after understanding your requirements.",
            },
            {
              q: "Can I make changes after the website is built?",
              a: "Yes! Each package includes revision rounds. Additional changes can be made at any time for an additional fee.",
            },
            {
              q: "Do I own the website?",
              a: "Absolutely. You receive full ownership of the source code and all assets used in your website.",
            },
            {
              q: "What about hosting?",
              a: "We can help you set up hosting on your preferred platform. Hosting fees are not included in the package price.",
            },
          ].map((faq, index) => (
            <div key={index} className="rounded-xl border p-6">
              <h3 className="mb-2 font-semibold">{faq.q}</h3>
              <p className="text-muted-foreground text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
