"use client"

import type { ReactNode } from "react"
import { memo, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"
import { useIsMobile } from "@/hooks/use-mobile"

export type HoverExpandImageProps = {
  /** Image source URL */
  src: string
  /** Alt text for accessibility */
  alt?: string
  /** Label shown when expanded */
  label?: string
}

export type HoverExpandGalleryProps = {
  /** Array of images to display */
  images: HoverExpandImageProps[]
  /** Additional CSS classes */
  className?: string
  /** Direction of the gallery. Default: "horizontal" */
  direction?: "horizontal" | "vertical"
  /** Collapsed size in rem. Default: 5 */
  collapsedSize?: number
  /** Expanded size in rem. Default: 24 */
  expandedSize?: number
  /** Initially active index. Default: 1 */
  defaultActive?: number
  /** Enable animation. Default: true */
  animated?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Hover-activated expanding image gallery.
 * Images expand when hovered or clicked.
 */
export const HoverExpandGallery = memo<HoverExpandGalleryProps>(
  ({
    images,
    className,
    direction = "horizontal",
    collapsedSize = 5,
    expandedSize = 24,
    defaultActive = 1,
    animated = true,
    noMobile = false,
  }) => {
    const isMobile = useIsMobile()
    const [activeImage, setActiveImage] = useState<number | null>(defaultActive)

    const shouldDisable = noMobile && isMobile

    if (shouldDisable || !animated) {
      return (
        <div
          className={cn(
            "relative w-full max-w-6xl px-5",
            direction === "vertical" ? "flex flex-col" : "flex",
            className
          )}
        >
          <div
            className={cn(
              "flex w-full items-center justify-center gap-1",
              direction === "vertical" ? "flex-col" : ""
            )}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-3xl"
                style={{
                  width:
                    direction === "horizontal"
                      ? activeImage === index
                        ? `${expandedSize}rem`
                        : `${collapsedSize}rem`
                      : `${expandedSize}rem`,
                  height:
                    direction === "vertical"
                      ? activeImage === index
                        ? `${expandedSize}rem`
                        : `${collapsedSize / 2}rem`
                      : `${expandedSize}rem`,
                }}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image.src}
                  className="size-full object-cover"
                  alt={image.alt || "Gallery image"}
                />
              </div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className={cn("relative w-full max-w-6xl px-5", className)}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <div
            className={cn(
              "flex w-full items-center justify-center gap-1",
              direction === "vertical" ? "flex-col" : ""
            )}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-3xl"
                initial={{
                  width:
                    direction === "horizontal"
                      ? "2.5rem"
                      : `${expandedSize}rem`,
                  height:
                    direction === "vertical" ? "2.5rem" : `${expandedSize}rem`,
                }}
                animate={{
                  width:
                    direction === "horizontal"
                      ? activeImage === index
                        ? `${expandedSize}rem`
                        : `${collapsedSize}rem`
                      : `${expandedSize}rem`,
                  height:
                    direction === "vertical"
                      ? activeImage === index
                        ? `${expandedSize}rem`
                        : "2.5rem"
                      : `${expandedSize}rem`,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={() => setActiveImage(index)}
                onHoverStart={() => setActiveImage(index)}
              >
                <AnimatePresence>
                  {activeImage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent"
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {activeImage === index && image.label && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: direction === "vertical" ? 20 : 0,
                      }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{
                        opacity: 0,
                        y: direction === "vertical" ? 20 : 0,
                      }}
                      className="absolute flex h-full w-full flex-col items-end justify-end p-4"
                    >
                      <p className="text-left text-xs text-white/50">
                        {image.label}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <img
                  src={image.src}
                  className="size-full object-cover"
                  alt={image.alt || "Gallery image"}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )
  }
)

HoverExpandGallery.displayName = "HoverExpandGallery"

// Original scroll-based expand component
export type ScrollExpandProps = {
  children: ReactNode
  className?: string
  marginX?: string
  borderRadius?: string
  scrollBased?: boolean
  noMobile?: boolean
}

/**
 * Element that expands margins on scroll.
 * Creates a reveal effect with animated margins and border radius.
 */
export const ScrollExpand = memo<ScrollExpandProps>(
  ({
    children,
    className,
    marginX = "3rem",
    borderRadius = "3rem",
    scrollBased = true,
    noMobile = false,
  }) => {
    const isMobile = useIsMobile()
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const marginXAdjusted = useMemo(
      () => (isMobile ? "0.5rem" : marginX),
      [isMobile, marginX]
    )
    const borderRadiusAdjusted = useMemo(
      () => (isMobile ? "1rem" : borderRadius),
      [isMobile, borderRadius]
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start 80%", "start 30%"],
    })

    const marginLeft = useTransform(
      scrollYProgress,
      [0, 1],
      [marginXAdjusted, "0rem"]
    )
    const marginRight = useTransform(
      scrollYProgress,
      [0, 1],
      [marginXAdjusted, "0rem"]
    )
    const borderRadiusValue = useTransform(
      scrollYProgress,
      [0, 1],
      [borderRadiusAdjusted, "0rem"]
    )

    const style = useMemo(
      () => ({
        overflow: "hidden" as const,
      }),
      []
    )

    const triggerStyle = useMemo(
      () => ({
        overflow: "hidden" as const,
        borderRadius,
      }),
      [borderRadius]
    )

    if (shouldDisableAnimation) {
      return <div className={className}>{children}</div>
    }

    if (scrollBased) {
      return (
        <motion.div
          ref={ref}
          style={{
            marginLeft,
            marginRight,
            borderRadius: borderRadiusValue,
            ...style,
          }}
          className={className}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className={className}
        style={triggerStyle}
      >
        {children}
      </motion.div>
    )
  }
)

ScrollExpand.displayName = "ScrollExpand"

// Default wrapper for standalone viewing with sample images
const ScrollExpandDemo = () => {
  const images = [
    {
      src: "https://skiper-ui.com/images/x.com/13.jpeg",
      alt: "Illustration 1",
      label: "# 1",
    },
    {
      src: "https://skiper-ui.com/images/x.com/32.jpeg",
      alt: "Illustration 2",
      label: "# 2",
    },
    {
      src: "https://skiper-ui.com/images/x.com/20.jpeg",
      alt: "Illustration 3",
      label: "# 3",
    },
    {
      src: "https://skiper-ui.com/images/x.com/21.jpeg",
      alt: "Illustration 4",
      label: "# 4",
    },
    {
      src: "https://skiper-ui.com/images/x.com/19.jpeg",
      alt: "Illustration 5",
      label: "# 5",
    },
    {
      src: "https://skiper-ui.com/images/x.com/1.jpeg",
      alt: "Illustration 6",
      label: "# 6",
    },
  ]

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-12 overflow-hidden bg-[#f5f4f3] py-12">
      <HoverExpandGallery images={images} direction="horizontal" />
      <HoverExpandGallery images={images} direction="vertical" />
    </div>
  )
}

export default ScrollExpandDemo
