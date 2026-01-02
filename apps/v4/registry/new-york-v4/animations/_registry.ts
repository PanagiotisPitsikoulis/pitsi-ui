import { Registry } from "pitsi/schema"

export const animations: Registry["items"] = [
  {
    name: "background-image-parallax",
    type: "registry:ui",
    description:
      "Background image with parallax effect - moves slower than foreground for depth.",
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
    dependencies: ["motion/react"],
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
  // OGL-based animations
  {
    name: "aurora",
    type: "registry:ui",
    description:
      "Aurora borealis effect with animated gradient colors using WebGL.",
    dependencies: ["ogl"],
    registryDependencies: [],
    files: [
      {
        path: "animations/aurora/aurora.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "balatro",
    type: "registry:ui",
    description:
      "Psychedelic card effect with distortion and color manipulation.",
    dependencies: ["ogl"],
    registryDependencies: [],
    files: [
      {
        path: "animations/balatro/balatro.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "circular-gallery",
    type: "registry:ui",
    description: "3D circular gallery with rotating images using WebGL.",
    dependencies: ["ogl"],
    registryDependencies: [],
    files: [
      {
        path: "animations/circular-gallery/circular-gallery.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "flying-posters",
    type: "registry:ui",
    description:
      "Floating poster effect with 3D rotation and mouse interaction.",
    dependencies: ["ogl"],
    registryDependencies: [],
    files: [
      {
        path: "animations/flying-posters/flying-posters.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "gradient-blinds",
    type: "registry:ui",
    description: "Animated gradient blinds effect with smooth transitions.",
    dependencies: ["ogl"],
    registryDependencies: [],
    files: [
      {
        path: "animations/gradient-blinds/gradient-blinds.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "iridescence",
    type: "registry:ui",
    description: "Iridescent color-shifting effect with mouse interaction.",
    dependencies: ["ogl"],
    registryDependencies: [],
    files: [
      {
        path: "animations/iridescence/iridescence.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "liquid-chrome",
    type: "registry:ui",
    description: "Liquid chrome metallic effect with dynamic reflections.",
    dependencies: ["ogl"],
    registryDependencies: [],
    files: [
      {
        path: "animations/liquid-chrome/liquid-chrome.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  // Three.js-based animations
  {
    name: "ascii-text",
    type: "registry:ui",
    description: "Text rendered as ASCII art with 3D depth effect.",
    dependencies: ["three"],
    registryDependencies: [],
    files: [
      {
        path: "animations/ascii-text/ascii-text.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "ballpit",
    type: "registry:ui",
    description: "Interactive 3D ball pit with physics simulation.",
    dependencies: ["three", "gsap"],
    registryDependencies: [],
    files: [
      {
        path: "animations/ballpit/ballpit.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "color-bends",
    type: "registry:ui",
    description: "Color bending distortion effect with WebGL shaders.",
    dependencies: ["three"],
    registryDependencies: [],
    files: [
      {
        path: "animations/color-bends/color-bends.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "dither",
    type: "registry:ui",
    description: "Retro dithering effect with customizable patterns.",
    dependencies: ["three"],
    registryDependencies: [],
    files: [
      {
        path: "animations/dither/dither.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "fluid-glass",
    type: "registry:ui",
    description: "Fluid glass refraction effect with dynamic distortion.",
    dependencies: ["three"],
    registryDependencies: [],
    files: [
      {
        path: "animations/fluid-glass/fluid-glass.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "grid-distortion",
    type: "registry:ui",
    description: "Grid-based distortion effect with mouse interaction.",
    dependencies: ["three"],
    registryDependencies: [],
    files: [
      {
        path: "animations/grid-distortion/grid-distortion.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "shape-blur",
    type: "registry:ui",
    description: "Shape morphing with blur transitions between states.",
    dependencies: ["three"],
    registryDependencies: [],
    files: [
      {
        path: "animations/shape-blur/shape-blur.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  // GSAP-based animations
  {
    name: "decay-card",
    type: "registry:ui",
    description: "Card with decay and glitch animation effects.",
    dependencies: ["gsap"],
    registryDependencies: [],
    files: [
      {
        path: "animations/decay-card/decay-card.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "flowing-menu",
    type: "registry:ui",
    description: "Menu with flowing hover animation effects.",
    dependencies: ["gsap"],
    registryDependencies: [],
    files: [
      {
        path: "animations/flowing-menu/flowing-menu.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "image-trail",
    type: "registry:ui",
    description: "Cursor-following image trail effect with smooth animations.",
    dependencies: ["gsap"],
    registryDependencies: [],
    files: [
      {
        path: "animations/image-trail/image-trail.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "shuffle",
    type: "registry:ui",
    description: "Card shuffle animation with stacking effects.",
    dependencies: ["gsap"],
    registryDependencies: [],
    files: [
      {
        path: "animations/shuffle/shuffle.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "sticker-peel",
    type: "registry:ui",
    description: "Sticker peeling effect with 3D perspective.",
    dependencies: ["gsap"],
    registryDependencies: [],
    files: [
      {
        path: "animations/sticker-peel/sticker-peel.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  // Motion/React-based animations
  {
    name: "circular-text",
    type: "registry:ui",
    description: "Text arranged in a circle with rotation animation.",
    dependencies: ["motion/react"],
    registryDependencies: [],
    files: [
      {
        path: "animations/circular-text/circular-text.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "stack",
    type: "registry:ui",
    description: "Draggable card stack with rotation and depth effects.",
    dependencies: ["motion/react"],
    registryDependencies: [],
    files: [
      {
        path: "animations/stack/stack.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  // Special library animations
  {
    name: "dome-gallery",
    type: "registry:ui",
    description: "3D dome gallery with gesture-based navigation.",
    dependencies: ["@use-gesture/react"],
    registryDependencies: [],
    files: [
      {
        path: "animations/dome-gallery/dome-gallery.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "infinite-menu",
    type: "registry:ui",
    description: "Infinite 3D menu with WebGL rendering.",
    dependencies: ["gl-matrix"],
    registryDependencies: [],
    files: [
      {
        path: "animations/infinite-menu/infinite-menu.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  // Pure React/Canvas animations
  {
    name: "curved-loop",
    type: "registry:ui",
    description: "Text marquee along a curved path.",
    registryDependencies: [],
    files: [
      {
        path: "animations/curved-loop/curved-loop.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "fuzzy-text",
    type: "registry:ui",
    description: "Text with fuzzy/blurred hover effect.",
    registryDependencies: [],
    files: [
      {
        path: "animations/fuzzy-text/fuzzy-text.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "glass-surface",
    type: "registry:ui",
    description: "Glass morphism surface with dynamic reflections.",
    registryDependencies: [],
    files: [
      {
        path: "animations/glass-surface/glass-surface.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "letter-glitch",
    type: "registry:ui",
    description: "Text with randomized letter glitch effect.",
    registryDependencies: [],
    files: [
      {
        path: "animations/letter-glitch/letter-glitch.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "noise",
    type: "registry:ui",
    description: "Animated noise texture overlay effect.",
    registryDependencies: [],
    files: [
      {
        path: "animations/noise/noise.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "text-pressure",
    type: "registry:ui",
    description: "Text with variable font pressure effect on mouse proximity.",
    registryDependencies: [],
    files: [
      {
        path: "animations/text-pressure/text-pressure.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  },
]
