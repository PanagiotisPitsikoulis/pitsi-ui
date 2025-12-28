import { Registry } from "pitsi/schema"

export const animations: Registry["items"] = [
  {
    name: "background-image-parallax",
    type: "registry:ui",
    description:
      "Background image with parallax effect - moves slower than foreground for depth.",
    dependencies: ["motion"],
    registryDependencies: ["utils", "use-animation-state", "use-mobile"],
    files: [
      {
        path: "animations/background-image-parallax/background-image-parallax.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "card-swipe-carousel",
    type: "registry:ui",
    description: "Swipeable card carousel with smooth transitions.",
    dependencies: ["motion"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "animations/card-swipe-carousel/card-swipe-carousel.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "cards-parallax",
    type: "registry:ui",
    description: "Cards that stack and scale on scroll with parallax effect.",
    dependencies: ["motion"],
    registryDependencies: ["utils", "use-animation-state", "use-mobile"],
    files: [
      {
        path: "animations/cards-parallax/cards-parallax.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "parallax-scroll",
    type: "registry:ui",
    description: "Multi-column image gallery with parallax scrolling effect.",
    dependencies: ["motion"],
    registryDependencies: ["utils", "use-animation-state", "use-mobile"],
    files: [
      {
        path: "animations/parallax-scroll/parallax-scroll.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "perspective-carousel",
    type: "registry:ui",
    description: "3D perspective carousel with rotation effects.",
    dependencies: ["motion"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "animations/perspective-carousel/perspective-carousel.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "perspective-section-transition",
    type: "registry:ui",
    description: "Section with 3D perspective transform on scroll.",
    dependencies: ["motion"],
    registryDependencies: ["utils", "use-animation-state", "use-mobile"],
    files: [
      {
        path: "animations/perspective-section-transition/perspective-section-transition.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "scroll-expand",
    type: "registry:ui",
    description: "Content that expands as you scroll into view.",
    dependencies: ["motion"],
    registryDependencies: ["use-animation-state", "use-mobile"],
    files: [
      {
        path: "animations/scroll-expand/scroll-expand.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "scroll-fade",
    type: "registry:ui",
    description: "Content that fades in as you scroll into view.",
    dependencies: ["motion"],
    registryDependencies: ["use-animation-state"],
    files: [
      {
        path: "animations/scroll-fade/scroll-fade.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "scroll-scale",
    type: "registry:ui",
    description: "Content that scales up as you scroll into view.",
    dependencies: ["motion"],
    registryDependencies: ["use-animation-state"],
    files: [
      {
        path: "animations/scroll-scale/scroll-scale.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "slide-down",
    type: "registry:ui",
    description: "Content that slides down into view on scroll.",
    dependencies: ["motion"],
    registryDependencies: ["use-animation-state"],
    files: [
      {
        path: "animations/slide-down/slide-down.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "slide-up",
    type: "registry:ui",
    description: "Content that slides up into view on scroll.",
    dependencies: ["motion"],
    registryDependencies: ["use-animation-state"],
    files: [
      {
        path: "animations/slide-up/slide-up.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "smooth-parallax-scroll",
    type: "registry:ui",
    description: "Smooth parallax scrolling with GSAP ScrollTrigger.",
    dependencies: ["gsap", "@gsap/react"],
    registryDependencies: ["utils", "use-mobile"],
    files: [
      {
        path: "animations/smooth-parallax-scroll/smooth-parallax-scroll.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "smooth-scroll",
    type: "registry:ui",
    description: "Smooth scrolling provider using Lenis.",
    dependencies: ["lenis"],
    registryDependencies: [],
    files: [
      {
        path: "animations/smooth-scroll/smooth-scroll.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "sticky-footer",
    type: "registry:ui",
    description: "Footer that reveals with a sticky scroll effect.",
    registryDependencies: ["utils", "use-mobile"],
    files: [
      {
        path: "animations/sticky-footer/sticky-footer.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "text-along-path",
    type: "registry:ui",
    description: "Text that follows an SVG path on scroll.",
    dependencies: ["motion"],
    registryDependencies: ["utils", "use-animation-state"],
    files: [
      {
        path: "animations/text-along-path/text-along-path.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "text-gradient-opacity",
    type: "registry:ui",
    description: "Text with gradient opacity reveal on scroll.",
    dependencies: ["motion"],
    registryDependencies: ["utils", "use-animation-state", "use-mobile"],
    files: [
      {
        path: "animations/text-gradient-opacity/text-gradient-opacity.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "text-parallax",
    type: "registry:ui",
    description: "Text that moves at different speed than scroll.",
    dependencies: ["motion"],
    registryDependencies: ["utils", "use-animation-state", "use-mobile"],
    files: [
      {
        path: "animations/text-parallax/text-parallax.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "transforms-3d",
    type: "registry:ui",
    description: "3D transform effects with mouse interaction.",
    dependencies: ["motion"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "animations/transforms-3d/transforms-3d.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "zoom-parallax",
    type: "registry:ui",
    description: "Images that zoom and move on scroll.",
    dependencies: ["motion"],
    registryDependencies: ["utils", "use-animation-state", "use-mobile"],
    files: [
      {
        path: "animations/zoom-parallax/zoom-parallax.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
]
