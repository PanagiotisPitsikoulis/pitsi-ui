"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqFoodJuice() {
  const faqs = [
    {
      question: "Are your juices pasteurized or raw?",
      answer: "We use HPP (High Pressure Processing) which preserves nutrients and enzymes while ensuring safety, giving you the benefits of raw juice with extended shelf life. Our cold-pressed juices maintain maximum vitamins and minerals without heat treatment.",
    },
    {
      question: "How long do the juices stay fresh?",
      answer: "Our HPP juices stay fresh for 45-60 days when refrigerated and unopened. Once opened, consume within 3-4 days for best quality. Raw juices should be consumed within 3 days of production. All bottles have clearly marked expiration dates.",
    },
    {
      question: "Do you accommodate dietary restrictions and allergies?",
      answer: "Yes! All our products are vegan, gluten-free, and dairy-free. We clearly label common allergens like nuts and can customize cleanses to avoid specific ingredients. Contact us about any allergies, and we'll create a safe plan for you.",
    },
    {
      question: "What's the difference between cold-pressed and regular juice?",
      answer: "Cold-pressing uses hydraulic pressure to extract juice without heat, preserving more nutrients, enzymes, and flavor. Regular juicing uses high-speed blades that create heat and oxidation, reducing nutritional value. You'll taste the difference!",
    },
    {
      question: "Can I customize my juice cleanse program?",
      answer: "Absolutely! While we offer curated cleanse programs, you can mix and match any of our juices. Our nutritionists can help design a custom plan based on your goals, whether it's weight loss, energy, detox, or general wellness.",
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
