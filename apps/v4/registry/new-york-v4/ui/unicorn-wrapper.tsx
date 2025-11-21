"use client"

import { forwardRef, useEffect, useRef, useState } from "react"
import UnicornScene, { type UnicornSceneProps } from "unicornstudio-react"

import { cn } from "@/registry/new-york-v4/lib/utils"

export type UnicornWrapperProps = UnicornSceneProps & {
  className?: string
}

export const UnicornWrapper = forwardRef<HTMLDivElement, UnicornWrapperProps>(
  ({ className, ...props }, ref) => {
    const [shouldRender, setShouldRender] = useState(true)
    const [isInView, setIsInView] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const element = containerRef.current
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsInView(entry.isIntersecting)
          })
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        }
      )

      observer.observe(element)

      return () => {
        observer.disconnect()
      }
    }, [])

    const handleError = () => {
      console.error("UnicornScene error - unmounting component")
      setShouldRender(false)
    }

    return (
      <div
        ref={(node) => {
          containerRef.current = node
          if (typeof ref === "function") {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        className={cn("relative h-full w-full", className)}
      >
        {shouldRender && isInView && (
          <UnicornScene
            className="h-full w-full"
            {...props}
            onError={handleError}
            production={props.production ?? true}
          />
        )}
      </div>
    )
  }
)

UnicornWrapper.displayName = "UnicornWrapper"

export default UnicornWrapper
