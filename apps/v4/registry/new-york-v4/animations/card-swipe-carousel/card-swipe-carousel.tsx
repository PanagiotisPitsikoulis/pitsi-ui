"use client"

import { useEffect, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

const Skiper48 = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="bg-background flex h-full w-full items-center justify-center overflow-hidden">
        <div className="h-[380px] w-[260px] animate-pulse rounded-3xl bg-muted" />
      </div>
    )
  }

  const images = [
    { src: "https://skiper-ui.com/images/x.com/13.jpeg", alt: "Illustration 1" },
    { src: "https://skiper-ui.com/images/x.com/32.jpeg", alt: "Illustration 2" },
    { src: "https://skiper-ui.com/images/x.com/20.jpeg", alt: "Illustration 3" },
    { src: "https://skiper-ui.com/images/x.com/21.jpeg", alt: "Illustration 4" },
    { src: "https://skiper-ui.com/images/x.com/19.jpeg", alt: "Illustration 5" },
    { src: "https://skiper-ui.com/images/x.com/1.jpeg", alt: "Illustration 6" },
    { src: "https://skiper-ui.com/images/x.com/2.jpeg", alt: "Illustration 7" },
    { src: "https://skiper-ui.com/images/x.com/3.jpeg", alt: "Illustration 8" },
    { src: "https://skiper-ui.com/images/x.com/4.jpeg", alt: "Illustration 9" },
    { src: "https://skiper-ui.com/images/x.com/5.jpeg", alt: "Illustration 10" },
    { src: "https://skiper-ui.com/images/x.com/6.jpeg", alt: "Illustration 11" },
  ]

  return (
    <div className="bg-background flex h-full w-full items-center justify-center overflow-hidden">
      <Carousel_002 images={images} loop />
    </div>
  )
}

export { Skiper48 }

const Carousel_002 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 40,
}: {
  images: { src: string; alt: string }[]
  className?: string
  showPagination?: boolean
  showNavigation?: boolean
  loop?: boolean
  autoplay?: boolean
  spaceBetween?: number
}) => {
  const [SwiperComponents, setSwiperComponents] = useState<{
    Swiper: any
    SwiperSlide: any
    modules: any[]
  } | null>(null)

  useEffect(() => {
    // Dynamic import of Swiper to avoid SSR issues
    Promise.all([
      import("swiper/react"),
      import("swiper/modules"),
      import("swiper/css"),
      import("swiper/css/effect-cards"),
      import("swiper/css/navigation"),
      import("swiper/css/pagination"),
    ]).then(([swiperReact, swiperModules]) => {
      setSwiperComponents({
        Swiper: swiperReact.Swiper,
        SwiperSlide: swiperReact.SwiperSlide,
        modules: [
          swiperModules.EffectCards,
          swiperModules.Autoplay,
          swiperModules.Pagination,
          swiperModules.Navigation,
        ],
      })
    })
  }, [])

  if (!SwiperComponents || !images) {
    return (
      <div className={cn("relative w-full max-w-3xl", className)}>
        <div className="flex h-[380px] w-[260px] mx-auto animate-pulse rounded-3xl bg-muted" />
      </div>
    )
  }

  const { Swiper, SwiperSlide, modules } = SwiperComponents

  const css = `
  .Carousal_002 {
    padding-bottom: 50px !important;
  }
  `

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-3xl", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 1000,
                disableOnInteraction: false,
              }
            : false
        }
        effect="cards"
        grabCursor={true}
        loop={loop}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_002 h-[380px] w-[260px]"
        modules={modules}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="rounded-3xl">
            <img
              className="h-full w-full object-cover"
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden">
              <ChevronRightIcon className="text-foreground h-6 w-6" />
            </div>
            <div className="swiper-button-prev after:hidden">
              <ChevronLeftIcon className="text-foreground h-6 w-6" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  )
}

export { Carousel_002 }

export default Skiper48
