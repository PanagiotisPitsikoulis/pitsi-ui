import { Marquee } from "@/registry/new-york-v4/ui/marquee"

const logos = [
  { name: "Acme", src: "https://placehold.co/120x40/e2e8f0/475569?text=Acme" },
  {
    name: "Globex",
    src: "https://placehold.co/120x40/e2e8f0/475569?text=Globex",
  },
  {
    name: "Initech",
    src: "https://placehold.co/120x40/e2e8f0/475569?text=Initech",
  },
  {
    name: "Hooli",
    src: "https://placehold.co/120x40/e2e8f0/475569?text=Hooli",
  },
  {
    name: "Umbrella",
    src: "https://placehold.co/120x40/e2e8f0/475569?text=Umbrella",
  },
]

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-full max-w-2xl flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="bg-card flex h-16 w-32 items-center justify-center rounded-lg border px-4"
          >
            <span className="text-muted-foreground text-sm font-medium">
              {logo.name}
            </span>
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="bg-card flex h-16 w-32 items-center justify-center rounded-lg border px-4"
          >
            <span className="text-muted-foreground text-sm font-medium">
              {logo.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
