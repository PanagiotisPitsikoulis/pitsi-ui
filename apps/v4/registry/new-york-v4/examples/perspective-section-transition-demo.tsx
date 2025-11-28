"use client"

import {
  PerspectiveContainer,
  PerspectiveSection,
} from "@/registry/new-york-v4/animations/perspective-section-transition/perspective-section-transition"

export default function PerspectiveSectionTransitionDemo() {
  return (
    <PerspectiveContainer height="200vh">
      {/* Section 1 - Shrinks and rotates as you scroll */}
      <PerspectiveSection
        scaleRange={[1, 0.8]}
        rotateRange={[0, -5]}
        sticky
        className="bg-[#C72626] pb-[10vh] text-[3.5vw] text-white"
      >
        <p>Scroll Perspective</p>
        <div className="flex items-center gap-4">
          <p>Section</p>
          <div className="relative h-[10vw] w-[12.5vw] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              alt="Mountain landscape"
              className="h-full w-full object-cover"
            />
          </div>
          <p>Transition</p>
        </div>
      </PerspectiveSection>

      {/* Section 2 - Grows and straightens as you scroll */}
      <PerspectiveSection
        scaleRange={[0.8, 1]}
        rotateRange={[5, 0]}
        className="relative overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop"
          alt="Nature landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </PerspectiveSection>
    </PerspectiveContainer>
  )
}
