"use client"

import React, { useCallback, useMemo } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/registry/new-york-v4/ui/carousel"

export interface HeroCarouselItem {
  id: number
  image: string
  name: string
}

export interface HeroCarouselBlockProps {
  headline?: React.ReactNode
  description?: string
  items?: HeroCarouselItem[]
  autoplayDelay?: number
  className?: string
}

const defaultItems: HeroCarouselItem[] = [
  {
    id: 1,
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg",
    name: "Joan Doe",
  },
  {
    id: 2,
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
    name: "Jane Smith",
  },
  {
    id: 3,
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person3.jpeg",
    name: "John Johnson",
  },
  {
    id: 4,
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person4.jpeg",
    name: "Sarah William",
  },
  {
    id: 5,
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person5.jpeg",
    name: "Michael Brown",
  },
  {
    id: 6,
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    name: "Emily Davis",
  },
  {
    id: 7,
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
    name: "Joson White",
  },
]

const defaultHeadline = (
  <>
    <span className="font-playfair italic">The only</span> App you'll ever need
    to stay <span className="font-playfair italic">inspired</span>
  </>
)

const defaultDescription =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum animi, ipsam provident optio delectus neque aliquid cumque. Beatae, odio!"

export function HeroCarouselBlock({
  headline = defaultHeadline,
  description = defaultDescription,
  items = defaultItems,
  autoplayDelay = 1000,
  className,
}: HeroCarouselBlockProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const isMobile = useIsMobile()

  const getRotation = useCallback(
    (index: number) => {
      if (index === current)
        return "md:-rotate-45 md:translate-x-40 md:scale-75 md:relative"
      if (index === current + 1) return "md:rotate-0 md:z-10 md:relative"
      if (index === current + 2)
        return "md:rotate-45 md:-translate-x-40 md:scale-75 md:relative"
    },
    [current]
  )

  const scrollbarBars = useMemo(
    () =>
      [...Array(40)].map((_, item) => (
        <motion.div
          key={item}
          initial={{
            opacity: item % 5 === 0 ? 0.2 : 0.2,
            filter: "blur(1px)",
          }}
          animate={{
            opacity: item % 5 === 0 ? 1 : 0.2,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.2,
            delay: item % 5 === 0 ? (item / 5) * 0.05 : 0,
            ease: "easeOut",
          }}
          className={cn(
            "w-[1px] bg-black",
            item % 5 === 0 ? "h-[15px]" : "h-[10px]"
          )}
        />
      )),
    []
  )

  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-foreground max-w-3xl text-5xl font-medium tracking-tighter md:px-9 md:text-6xl">
          {headline}
        </h1>
        <p className="text-muted-foreground/80 mt-5 max-w-xl">{description}</p>

        <Carousel
          className="max-w-5xl"
          plugins={[
            Autoplay({
              delay: autoplayDelay,
              stopOnInteraction: true,
            }),
          ]}
          setApi={setApi}
        >
          <CarouselContent>
            {Array.from({
              length: isMobile ? items.length : items.length + 2,
            }).map((_, index) => (
              <CarouselItem key={index} className="my-10 md:basis-1/3">
                <div
                  className={`h-105 w-full transition-transform duration-500 ease-in-out ${getRotation(index)} relative`}
                >
                  <Image
                    src={
                      index == items.length
                        ? items[0].image
                        : index == items.length + 1
                          ? items[1].image
                          : index == items.length + 2
                            ? items[2].image
                            : items[index].image
                    }
                    className="object-cover"
                    alt=""
                    fill
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-0 bottom-0 flex w-full translate-y-full flex-col items-center justify-center gap-2">
            <div className="flex gap-2">{scrollbarBars}</div>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.p
                key={current}
                className="w-full text-lg font-medium"
                initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, scale: 0.9, filter: "blur(5px)" }}
                transition={{ duration: 0.5 }}
              >
                {items[current]?.name}
              </motion.p>
            </AnimatePresence>
            <div className="flex gap-2">{scrollbarBars}</div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}
