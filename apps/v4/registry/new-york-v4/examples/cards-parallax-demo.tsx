import { IconArrowDown } from "@tabler/icons-react"

import CardsParallax from "@/registry/new-york-v4/animations/cards-parallax/cards-parallax"

export default function CardsParallaxDemo() {
  const cards = [
    { title: "First Card", description: "This is the first card in the stack" },
    {
      title: "Second Card",
      description: "This is the second card in the stack",
    },
    { title: "Third Card", description: "This is the third card in the stack" },
    {
      title: "Fourth Card",
      description: "This is the fourth card in the stack",
    },
  ]

  return (
    <div className="relative">
      {/* Scroll indicator */}
      <div className="absolute top-12 left-1/2 z-10 flex -translate-x-1/2 animate-bounce flex-col items-center justify-center gap-2">
        <p className="text-muted-foreground text-sm">Scroll down</p>
        <IconArrowDown className="text-muted-foreground size-5" />
      </div>

      <CardsParallax className="min-h-[400vh]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-card max-w-md rounded-lg border p-12 text-center shadow-lg"
          >
            <h3 className="mb-4 text-3xl font-bold">{card.title}</h3>
            <p className="text-muted-foreground text-lg">{card.description}</p>
          </div>
        ))}
      </CardsParallax>
    </div>
  )
}
