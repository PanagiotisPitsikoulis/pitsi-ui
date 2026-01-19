"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

interface ContactBlockProps {
  content?: {
    title?: string
    description?: string
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const contact12Defaults = {
  title: "We're Here to Help",
  description:
    "Have questions about your trip? Find answers below or reach out to our travel support team.",
  emergencyContact: {
    title: "24/7 Emergency Travel Line",
    phone: "+1 (800) 555-HELP",
    description:
      "For travelers currently on a trip who need immediate assistance",
  },
  supportChannels: [
    {
      icon: "MessageCircle",
      title: "Live Chat",
      description: "Chat with an agent",
      availability: "Available 24/7",
      action: "Start Chat",
      href: "#",
      primary: true,
    },
    {
      icon: "Mail",
      title: "Email Support",
      description: "support@travelco.com",
      availability: "Response within 4 hours",
      action: "Send Email",
      href: "mailto:support@travelco.com",
      primary: false,
    },
    {
      icon: "Phone",
      title: "Call Us",
      description: "+1 (800) 555-0199",
      availability: "Mon-Sun 6AM-10PM",
      action: "Call Now",
      href: "tel:+18005550199",
      primary: false,
    },
  ],
  faqs: [
    {
      question: "How do I change or cancel my booking?",
      answer:
        "You can modify or cancel your booking through your account dashboard or by contacting our support team. Cancellation policies vary by booking type - flights typically have stricter policies than hotels. We recommend reviewing your booking confirmation for specific terms.",
    },
    {
      question: "What documents do I need for international travel?",
      answer:
        "You'll generally need a valid passport (with at least 6 months validity), any required visas, and proof of return travel. Some destinations require vaccination certificates or health declarations. We'll send you a complete checklist specific to your destination after booking.",
    },
    {
      question: "Is travel insurance included in my booking?",
      answer:
        "Basic travel protection is included with all bookings. For comprehensive coverage including trip cancellation, medical emergencies, and luggage protection, we recommend our Premium Travel Shield. You can add this during checkout or contact us to upgrade.",
    },
    {
      question: "How do I get a receipt or invoice for my booking?",
      answer:
        "Receipts are automatically emailed after each booking. You can also download invoices from your account dashboard under 'My Trips' > 'Booking Details' > 'Download Invoice'. For corporate travel receipts, contact our business travel team.",
    },
    {
      question: "Can I request special accommodations or dietary requirements?",
      answer:
        "Absolutely! You can add special requests during booking or afterward through your dashboard. For flights, request special meals at least 48 hours before departure. For hotels, we'll coordinate directly with the property to ensure your needs are met.",
    },
  ],
}

export function Contact12({
  content = {},
  classNames = {},
}: ContactBlockProps) {
  const {
    title = contact12Defaults.title,
    description = contact12Defaults.description,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <ScrollFade>
          <BlockHeader
            title={title}
            description={description}
            spacing="compact"
            classNames={classNames.header}
          />
        </ScrollFade>

        {/* Emergency Banner */}
        <SlideUp delay={0.1}>
          <div className="bg-destructive text-destructive-foreground mb-10 rounded-2xl p-6 text-center md:p-8">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-destructive-foreground/20 rounded-full p-2">
                  <DynamicIcon name="AlertTriangle" className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">
                    {contact12Defaults.emergencyContact.title}
                  </p>
                  <p className="text-destructive-foreground/80 text-sm">
                    {contact12Defaults.emergencyContact.description}
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                variant="secondary"
                className="bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90 shrink-0"
                asChild
              >
                <Link href={`tel:${contact12Defaults.emergencyContact.phone}`}>
                  <DynamicIcon name="Phone" className="mr-2 h-4 w-4" />
                  {contact12Defaults.emergencyContact.phone}
                </Link>
              </Button>
            </div>
          </div>
        </SlideUp>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Support Channels */}
          <div className="lg:col-span-2">
            <SlideUp delay={0.2}>
              <h3 className="text-foreground mb-6 text-xl font-semibold">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contact12Defaults.supportChannels.map((channel, i) => (
                  <div
                    key={i}
                    className={cn(
                      "bg-background border-border rounded-xl border p-5 transition-shadow hover:shadow-md",
                      channel.primary && "border-primary ring-primary/20 ring-2"
                    )}
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "rounded-lg p-2",
                            channel.primary
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          <DynamicIcon
                            name={channel.icon}
                            className="h-5 w-5"
                          />
                        </div>
                        <div>
                          <p className="text-foreground font-medium">
                            {channel.title}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {channel.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-xs">
                        {channel.availability}
                      </span>
                      <Button
                        size="sm"
                        variant={channel.primary ? "default" : "outline"}
                        asChild
                      >
                        <Link href={channel.href}>{channel.action}</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Lookup */}
              <div className="bg-background border-border mt-6 rounded-xl border p-5">
                <h4 className="text-foreground mb-3 font-medium">
                  Look Up Your Booking
                </h4>
                <div className="flex gap-2">
                  <Input
                    placeholder="Booking reference (e.g., TRV-12345)"
                    className="flex-1"
                  />
                  <Button>
                    <DynamicIcon name="Search" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SlideUp>
          </div>

          {/* FAQ Section */}
          <div className="lg:col-span-3">
            <SlideUp delay={0.3}>
              <h3 className="text-foreground mb-6 text-xl font-semibold">
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible className="space-y-3">
                {contact12Defaults.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-background border-border rounded-xl border px-5"
                  >
                    <AccordionTrigger className="text-foreground py-4 text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="border-border bg-background mt-6 rounded-xl border p-6 text-center">
                <p className="text-muted-foreground mb-4 text-sm">
                  Can&apos;t find what you&apos;re looking for?
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <Button variant="outline" asChild>
                    <Link href="#">
                      <DynamicIcon name="BookOpen" className="mr-2 h-4 w-4" />
                      Browse Help Center
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="#">
                      <DynamicIcon
                        name="MessageCircle"
                        className="mr-2 h-4 w-4"
                      />
                      Ask a Question
                    </Link>
                  </Button>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  )
}
