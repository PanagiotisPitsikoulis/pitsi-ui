"use client"

import { useBlockContext } from "../../_components"

export function FeaturesAISciFi() {
  const { cardBg } = useBlockContext()

  const features = [
    {
      icon: (
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 7h.01M7 12h.01M7 17h.01M12 7h5M12 12h5M12 17h5" />
        </svg>
      ),
      title: "Quantum Processing",
      description:
        "Harness quantum computing power for parallel universe calculations.",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      ),
      title: "Neural Interface",
      description:
        "Direct mind-machine connection for seamless thought-to-action execution.",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Holographic Display",
      description:
        "Immersive 3D visualization of complex data in real-world space.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 font-mono text-sm tracking-[0.3em] uppercase">
            {"> system.capabilities"}
          </p>
          <h2 className="font-display text-foreground font-mono text-3xl font-bold md:text-5xl">
            Core Systems Online
          </h2>
        </div>

        {/* Hexagonal-inspired grid with glowing border effects */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            >
              {/* Glowing border effect */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              />

              {/* Inner content with same clip path */}
              <div
                className={`${cardBg} border-border relative m-[2px] flex min-h-[300px] flex-col items-center justify-center border p-8 text-center transition-colors`}
                style={{
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              >
                <div className="bg-muted/50 text-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full ring-1 ring-border transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/50">
                  {feature.icon}
                </div>
                <h3 className="text-foreground mb-3 font-mono text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
