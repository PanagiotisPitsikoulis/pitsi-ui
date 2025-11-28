"use client"

import {
  ScrollScaleCard,
  ScrollScaleContainer,
} from "@/registry/new-york-v4/animations/scroll-scale/scroll-scale"

const cards = [
  {
    id: 1,
    image: "https://skiper-ui.com/images/lummi/img14.png",
  },
  {
    id: 2,
    image: "https://skiper-ui.com/images/lummi/img15.png",
  },
  {
    id: 3,
    image: "https://skiper-ui.com/images/lummi/img29.png",
  },
  {
    id: 4,
    image: "https://skiper-ui.com/images/lummi/img21.png",
  },
  {
    id: 5,
    image: "https://skiper-ui.com/images/lummi/img27.png",
  },
]

export default function ScrollScaleDemo() {
  return (
    <div className="h-full w-full">
      <ScrollScaleContainer cardCount={cards.length}>
        {cards.map((card, index) => (
          <ScrollScaleCard
            key={card.id}
            index={index}
            src={card.image}
            alt={`Card ${card.id}`}
          />
        ))}
      </ScrollScaleContainer>
    </div>
  )
}
