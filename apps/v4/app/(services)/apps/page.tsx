import type { Metadata } from "next"

import { MOBILE_APP_TIERS } from "@/lib/server/services"

import { ServicePricingCard } from "../_components/service-pricing-card"

export const metadata: Metadata = {
  title: "Mobile App Development | Pitsi Services",
  description:
    "Get a custom mobile app for iOS and Android built by experienced developers.",
}

export default function AppsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Mobile Apps
            <br />
            <span className="text-primary">That Users Love</span>
          </h1>
          <p className="text-muted-foreground mt-6 text-lg">
            From MVP to enterprise-grade solutions. We build native iOS and
            Android apps that deliver exceptional user experiences.
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
            {MOBILE_APP_TIERS.map((tier) => (
              <ServicePricingCard
                key={tier.id}
                tier={tier}
                serviceType="mobile_app"
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
            Every app includes these essential features
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 font-semibold">Native Performance</h3>
            <p className="text-muted-foreground text-sm">
              Built with React Native for smooth, native-like performance on both
              platforms.
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 font-semibold">iOS & Android</h3>
            <p className="text-muted-foreground text-sm">
              One codebase, two platforms. Reach your entire audience with a
              single app.
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 font-semibold">App Store Ready</h3>
            <p className="text-muted-foreground text-sm">
              We help you submit to the App Store and Google Play with all
              required assets.
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
                description: "Share your app idea and feature requirements",
              },
              {
                step: "3",
                title: "Build",
                description: "We design and develop your custom app",
              },
              {
                step: "4",
                title: "Launch",
                description: "Test, approve, and submit to app stores",
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
              q: "How long does it take to build an app?",
              a: "Depending on the package, delivery takes between 30-90 days. Complex features may require additional time.",
            },
            {
              q: "Do you build for both iOS and Android?",
              a: "Yes! Standard and Premium packages include both platforms. The MVP package includes one platform of your choice.",
            },
            {
              q: "Will you help with app store submission?",
              a: "Absolutely. We handle all the technical aspects of submitting your app to both the App Store and Google Play.",
            },
            {
              q: "What about ongoing maintenance?",
              a: "Premium packages include 3 months of support. We also offer maintenance packages for long-term support.",
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
