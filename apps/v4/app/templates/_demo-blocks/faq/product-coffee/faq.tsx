"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqProductCoffee() {
  const faqs = [
    {
      question: "How should I store my coffee beans to keep them fresh?",
      answer: "Store beans in an airtight container in a cool, dark place away from heat, light, and moisture. Avoid the refrigerator or freezer as condensation affects flavor. For best taste, use beans within 2-3 weeks of the roast date. Buy in small batches for optimal freshness.",
    },
    {
      question: "What's the difference between single-origin and blend?",
      answer: "Single-origin coffee comes from one region or farm, showcasing unique terroir and flavor characteristics. Blends combine beans from multiple origins to create balanced, consistent flavor profiles. We offer both to suit different preferences and brewing methods.",
    },
    {
      question: "Which roast level is right for me?",
      answer: "Light roasts highlight origin characteristics with bright acidity and complex flavors. Medium roasts offer balance between origin and roast notes. Dark roasts feature bold, smoky flavors with lower acidity. Try our sample pack to discover your preference!",
    },
    {
      question: "Do you offer subscriptions with flexible delivery?",
      answer: "Yes! Our subscriptions are fully customizable. Choose your roast level, grind size, quantity, and delivery frequency. Pause, skip, or cancel anytime. Subscribers get 15% off all orders plus early access to limited-edition roasts and exclusive blends.",
    },
    {
      question: "What grind size should I choose for my brewing method?",
      answer: "Coarse for French press and cold brew, medium for drip coffee makers, medium-fine for pour-over, and fine for espresso. If you're unsure, order whole beans and grind fresh before brewing for maximum flavor. Our team can recommend the perfect grind for your setup.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
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
