"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqServiceFashion() {
  const faqs = [
    {
      question: "What's your return and exchange policy?",
      answer: "We accept returns within 30 days of purchase with tags attached and original packaging. Items must be unworn and in saleable condition. Exchanges are free, returns receive store credit or refund to original payment method. Sale items are final sale unless defective.",
    },
    {
      question: "How do I find my correct size?",
      answer: "Use our detailed size guide with measurements for each product. We include fit notes (runs small, true to size, oversized) on every item. Still unsure? Contact our styling team for personalized sizing help, or order multiple sizes and return what doesn't fit.",
    },
    {
      question: "Do you offer alterations or custom tailoring?",
      answer: "Yes! We provide complimentary hemming on pants and jeans. For more extensive alterations, we partner with expert tailors. Custom tailoring is available for premium pieces. Bring your items to our store or mail them with detailed instructions.",
    },
    {
      question: "How often do you release new collections?",
      answer: "We drop new arrivals weekly and launch seasonal collections four times a year. Sign up for our newsletter or follow us on social media to get early access to launches, exclusive previews, and limited-edition collaborations before they sell out.",
    },
    {
      question: "Do you have a loyalty or rewards program?",
      answer: "Absolutely! Join our Style Circle to earn points on every purchase, birthday rewards, early access to sales, and exclusive member-only events. VIP tiers unlock free shipping, personal styling sessions, and invitations to fashion shows and brand previews.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">FAQ</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
