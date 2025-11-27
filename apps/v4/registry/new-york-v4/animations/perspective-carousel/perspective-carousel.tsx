"use client"

import React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { motion } from "motion/react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { cn } from "@/lib/utils"

const Skiper47 = () => {
  const images = [
    {
      src: "https://skiper-ui.com/images/x.com/11.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "https://skiper-ui.com/images/x.com/13.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "https://skiper-ui.com/images/x.com/32.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "https://skiper-ui.com/images/x.com/20.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "https://skiper-ui.com/images/x.com/21.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "https://skiper-ui.com/images/x.com/19.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
  ]

  return (
    <div className="bg-background flex h-full w-full items-center justify-center overflow-hidden">
      <Carousel_001 className="" images={images} showPagination loop />
    </div>
  )
}

export { Skiper47 }

const Carousel_001 = ({
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
  const css = `
  .Carousal_001 {
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
      className={cn("relative w-3xl", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 1500,
                disableOnInteraction: false,
              }
            : false
        }
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={loop}
        slidesPerView={2.43}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
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
        className="Carousal_001"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index} className="!h-[320px] w-full border">
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

export { Carousel_001 }
