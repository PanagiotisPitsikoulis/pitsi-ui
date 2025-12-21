"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqServiceTattoo() {
  const faqs = [
    {
      question: "How much do tattoos cost?",
      answer: "Pricing varies based on size, complexity, placement, and artist. Small tattoos start at $100, with hourly rates of $150-$250 for larger pieces. We provide free consultations where we'll discuss your design and give you an accurate quote. A deposit is required to book your appointment.",
    },
    {
      question: "How should I prepare for my tattoo appointment?",
      answer: "Eat a good meal beforehand, stay hydrated, and avoid alcohol for 24 hours prior. Wear comfortable clothing that provides easy access to the tattoo area. Bring ID (must be 18+), your design reference if applicable, and entertainment for longer sessions.",
    },
    {
      question: "Does getting a tattoo hurt?",
      answer: "Pain levels vary by individual and placement. Bony areas and sensitive skin tend to be more uncomfortable. Most describe it as a scratching sensation. We take breaks as needed, and our artists work efficiently to minimize discomfort. Pain is temporary, but your tattoo is forever!",
    },
    {
      question: "How do I care for my new tattoo?",
      answer: "Keep it clean and moisturized with unscented lotion. Avoid soaking, direct sunlight, and picking at scabs for 2-3 weeks. We provide detailed aftercare instructions and are available for questions during healing. Proper care ensures your tattoo heals beautifully and maintains vibrant colors.",
    },
    {
      question: "Can you cover up or fix an old tattoo?",
      answer: "Yes! We specialize in cover-ups and rework. Bring photos of your existing tattoo to your consultation. We'll assess what's possible and design a new piece that incorporates or completely covers the old one. Cover-ups often require larger designs and darker colors, but the results are worth it.",
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
