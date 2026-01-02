"use client"

import { cn } from "@/lib/utils"

interface LogosBlockProps {
  content?: {
    title?: string
    logos?: Array<{ name: string }>
  }
  classNames?: {
    root?: string
    container?: string
    title?: string
  }
}

const logos2Defaults = {
  title: "Trusted by industry leaders worldwide",
  logos: [
    { name: "Acme Corp" },
    { name: "Globex" },
    { name: "Initech" },
    { name: "Umbrella" },
    { name: "Hooli" },
    { name: "Pied Piper" },
    { name: "Massive Dynamic" },
    { name: "Wayne Enterprises" },
  ],
}

export function Logos2({ content = {}, classNames = {} }: LogosBlockProps) {
  const { title = logos2Defaults.title, logos = logos2Defaults.logos } = content

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className={cn("bg-muted overflow-hidden py-12", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {title && (
          <p
            className={cn(
              "text-muted-foreground mb-8 text-center text-sm",
              classNames.title
            )}
          >
            {title}
          </p>
        )}
      </div>

      {/* Marquee Row 1 - Left to Right */}
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-12">
          {duplicatedLogos.map((logo, i) => (
            <div
              key={i}
              className="text-muted-foreground/50 hover:text-foreground text-xl font-semibold tracking-wider whitespace-nowrap transition-colors"
            >
              {logo.name}
            </div>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-12">
          {duplicatedLogos.map((logo, i) => (
            <div
              key={`dup-${i}`}
              className="text-muted-foreground/50 hover:text-foreground text-xl font-semibold tracking-wider whitespace-nowrap transition-colors"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right to Left */}
      <div className="relative mt-8 flex overflow-hidden">
        <div className="animate-marquee-reverse flex shrink-0 items-center gap-12">
          {duplicatedLogos.map((logo, i) => (
            <div
              key={i}
              className="text-muted-foreground/50 hover:text-foreground text-xl font-semibold tracking-wider whitespace-nowrap transition-colors"
            >
              {logo.name}
            </div>
          ))}
        </div>
        <div className="animate-marquee-reverse flex shrink-0 items-center gap-12">
          {duplicatedLogos.map((logo, i) => (
            <div
              key={`dup-${i}`}
              className="text-muted-foreground/50 hover:text-foreground text-xl font-semibold tracking-wider whitespace-nowrap transition-colors"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
