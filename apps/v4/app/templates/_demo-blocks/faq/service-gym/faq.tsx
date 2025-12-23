"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqServiceGym() {
  const faqs = [
    {
      question: "Do you require a long-term contract or can I pay month-to-month?",
      answer: "We offer flexible month-to-month memberships with no contracts. You can also choose 6-month or annual plans for discounted rates. Cancel anytime with 30 days notice. We believe in earning your membership every month, not locking you in.",
    },
    {
      question: "What's included in the membership?",
      answer: "All memberships include unlimited gym access, free classes (yoga, HIIT, cycling, strength training), locker rooms with showers, WiFi, and member events. Premium tiers add personal training sessions, nutrition coaching, massage therapy, and 24/7 access.",
    },
    {
      question: "Are personal trainers included or is that an extra cost?",
      answer: "Basic memberships can add personal training packages. Premium memberships include 2-4 sessions per month. All trainers are certified professionals who create customized workout plans, track your progress, and provide nutrition guidance.",
    },
    {
      question: "What are your hours and do you offer 24/7 access?",
      answer: "We're staffed Monday-Friday 5am-11pm and weekends 7am-9pm. Premium members get 24/7 keycard access. Our app lets you check real-time capacity, book classes, and track workouts anytime.",
    },
    {
      question: "Can I try the gym before committing to a membership?",
      answer: "Absolutely! We offer a free 7-day trial pass so you can experience our facilities, try our classes, and meet our trainers. No credit card required. After your trial, choose the membership that fits your goals and budget.",
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
