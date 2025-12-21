"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqServicePetSitting() {
  const faqs = [
    {
      question: "What types of pets do you care for?",
      answer: "We care for dogs, cats, birds, rabbits, guinea pigs, hamsters, reptiles, and fish. Our sitters are trained in handling various species and special needs. If you have exotic pets, let us know during booking and we'll match you with an experienced specialist.",
    },
    {
      question: "Are your pet sitters insured and background-checked?",
      answer: "Yes! All sitters undergo comprehensive background checks, are bonded and insured, and receive ongoing training in pet first aid and CPR. We verify references and require certification in pet care. Your pet's safety and security are our top priorities.",
    },
    {
      question: "What's included in a standard pet sitting visit?",
      answer: "Each 30-minute visit includes feeding, fresh water, playtime, exercise, litter box cleaning, and lots of love and attention. We send photo updates after every visit. Longer visits and overnight stays include additional playtime, training reinforcement, and bedtime routines.",
    },
    {
      question: "How far in advance should I book pet sitting services?",
      answer: "For holidays and peak seasons, book 4-6 weeks in advance. Regular weekday bookings can be made 1-2 weeks ahead. We do accept last-minute requests based on sitter availability. Once you find a sitter you love, you can book recurring visits for convenience.",
    },
    {
      question: "What happens if my pet needs emergency veterinary care?",
      answer: "We follow your emergency instructions and contact you immediately. Our sitters are authorized to take your pet to your preferred vet or emergency clinic if needed. We'll coordinate care, stay with your pet, and keep you updated. All emergency vet expenses are your responsibility.",
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
