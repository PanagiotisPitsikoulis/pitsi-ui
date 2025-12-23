"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqFoodPizza() {
  const faqs = [
    {
      question: "Do you offer gluten-free and vegan options?",
      answer: "Yes! We have gluten-free crusts made with rice flour blend and vegan cheese options. Our gluten-free pizzas are prepared in a separate area to minimize cross-contamination. We also offer cauliflower crust for a low-carb alternative.",
    },
    {
      question: "What makes your pizza dough special?",
      answer: "Our dough is made fresh daily using a 48-hour cold fermentation process with imported Italian flour and natural starter. This creates a light, airy crust with complex flavor and easier digestibility. No additives or preservatives, just flour, water, salt, and time.",
    },
    {
      question: "Can I customize my pizza with any toppings?",
      answer: "Absolutely! Choose from our signature pizzas or build your own with unlimited toppings. We have over 30 premium ingredients including imported Italian meats, fresh vegetables, artisan cheeses, and house-made sauces. Get creative!",
    },
    {
      question: "Do you deliver, and what's the minimum order?",
      answer: "We deliver within a 5-mile radius with a $15 minimum order. Delivery is free for orders over $30. We use insulated bags to keep your pizza hot and crispy. Online ordering and curbside pickup are also available for your convenience.",
    },
    {
      question: "How do I reheat leftover pizza to keep it crispy?",
      answer: "For best results, reheat in a preheated oven at 375°F for 8-10 minutes, or use a skillet on medium heat for 5-7 minutes with a lid. Avoid microwaving as it makes the crust soggy. Store leftovers in an airtight container in the fridge for up to 3 days.",
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
