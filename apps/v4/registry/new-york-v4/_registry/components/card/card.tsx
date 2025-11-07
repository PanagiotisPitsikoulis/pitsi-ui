import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import Flex from "@/registry/components/flex/flex"
import { Spacer } from "@/registry/components/spacer/spacer"
import Typography from "@/registry/components/typography/typography"

export type CardProps = {
  href: string
  name: string
  image: string
  description: string
  linkText?: string
  classNames?: {
    wrapper?: string
    link?: string
    imageWrapper?: string
    image?: string
    overlay?: string
    content?: string
    description?: string
    linkText?: string
    icon?: string
  }
}

export function Card({
  href,
  name,
  image,
  description,
  linkText = "Read More",
  classNames = {},
}: CardProps) {
  return (
    <Flex
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "max-w-[410px] min-w-0 shrink-0 grow-0 basis-full",
        classNames.wrapper
      )}
    >
      <Spacer size="md" axis="horizontal" />
      <Link
        data-type="default"
        className={cn("group w-full focus:outline-none", classNames.link)}
        href={href}
      >
        <Flex
          className={cn(
            "rounded-10 relative w-full overflow-hidden group-data-[type=default]:h-[290px] group-data-[type=suggestion]:h-[200px]",
            classNames.imageWrapper
          )}
        >
          <Image
            alt={name}
            loading="lazy"
            width={500}
            height={290}
            className={cn(
              "bg-background-elevation-2 h-full w-full object-cover",
              classNames.image
            )}
            src={image}
          />
          <Flex
            className={cn(
              "pointer-events-none absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-200 select-none group-hover:opacity-70 group-focus-visible:opacity-70",
              classNames.overlay
            )}
            aria-hidden="true"
          />
        </Flex>
        <Spacer size="xs" />
        <Flex direction="col" className={classNames.content}>
          <Typography
            variant="paragraph-md"
            className={cn(
              "text-text-strength-500 line-clamp-2",
              classNames.description
            )}
          >
            {description}
          </Typography>
          <Spacer size="lg" />
          <Flex align="center">
            <Typography
              variant="paragraph-sm"
              className={cn(
                "group-hover:text-text-strength-900 text-text-strength-600 group-focus-visible:outline-primary rounded-sm font-medium group-focus-visible:outline-2 group-focus-visible:outline-offset-2",
                classNames.linkText
              )}
            >
              {linkText}
            </Typography>
            <Spacer size="xxs" axis="horizontal" />
            <ArrowRight className={cn("h-4 w-4", classNames.icon)} />
          </Flex>
        </Flex>
      </Link>
    </Flex>
  )
}
