import { ReviewsMarqueeBlock } from "../_blocks/reviews-marquee-block"

const reviews = [
  {
    name: "Alex Chen",
    username: "@alexchen_dev",
    body: "pitsi/ui cut my development time in half. The blocks are so well designed I barely need to customize them.",
    img: "/avatars/01.webp",
  },
  {
    name: "Sarah Miller",
    username: "@sarahmills",
    body: "Finally a component library that looks good out of the box. No more fighting with styles for hours.",
    img: "/avatars/02.webp",
  },
  {
    name: "Marcus Johnson",
    username: "@marcusj_",
    body: "The animation components are incredible. Added scroll effects to my landing page in minutes.",
    img: "/avatars/03.webp",
  },
  {
    name: "Emily Park",
    username: "@empark_ui",
    body: "Best investment I've made for my freelance business. Clients love the polished look.",
    img: "/avatars/04.webp",
  },
  {
    name: "David Wilson",
    username: "@dwilsondev",
    body: "Switched from another UI library and never looked back. The DX is unmatched.",
    img: "/avatars/05.webp",
  },
  {
    name: "Lisa Thompson",
    username: "@lisadev",
    body: "The MCP integration is a game changer. My AI assistant now knows exactly which components to use.",
    img: "/avatars/06.webp",
  },
]

export function ReviewsSection() {
  return (
    <ReviewsMarqueeBlock
      reviews={reviews}
      duration="20s"
      className="-mt-10 pb-10"
    />
  )
}
