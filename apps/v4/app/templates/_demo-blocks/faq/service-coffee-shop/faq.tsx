"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqServiceCoffeeShop() {
  const faqs = [
    {
      question: "What makes your coffee different from chain coffee shops?",
      answer: "We roast our own single-origin beans in-house weekly, use freshly ground coffee for every drink, and our baristas are trained in precision brewing techniques. We source directly from farmers, ensuring quality and fair wages. Every cup is crafted with care, not automated.",
    },
    {
      question: "Do you offer dairy-free and alternative milk options?",
      answer: "Yes! We have oat milk, almond milk, soy milk, and coconut milk at no extra charge. All our syrups are vegan-friendly, and we offer sugar-free options. Our baristas can customize any drink to accommodate dietary preferences and allergies.",
    },
    {
      question: "Is there WiFi and can I work here for a few hours?",
      answer: "Absolutely! We have free high-speed WiFi and plenty of outlets throughout the shop. We encourage you to stay, work, study, or relax. Weekday mornings tend to be quieter if you need a peaceful environment.",
    },
    {
      question: "Do you have food options beyond pastries?",
      answer: "Yes! We serve fresh sandwiches, salads, grain bowls, and seasonal soups made daily with local ingredients. We also have gluten-free and vegan options. Our full food menu is available all day, and we're happy to accommodate special requests.",
    },
    {
      question: "Can I purchase your coffee beans to brew at home?",
      answer: "Definitely! All our roasted beans are available for purchase whole or ground to your preferred size. We offer single-origin and house blends in 12oz or 2lb bags. Subscribers get 15% off and we'll ship fresh beans to your door monthly.",
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
