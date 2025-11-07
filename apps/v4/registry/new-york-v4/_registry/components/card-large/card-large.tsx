import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import Flex from "@/registry/components/flex/flex"
import { Spacer } from "@/registry/components/spacer/spacer"
import Typography from "@/registry/components/typography/typography"

export type CardLargeProps = {
  href: string
  title: string
  badge: string
  image: string
  imageAlt?: string
  linkText?: string
  stats: {
    value: string
    label: string
  }[]
  logos?: React.ReactNode[]
  classNames?: {
    wrapper?: string
    container?: string
    link?: string
    card?: string
    image?: string
    badge?: string
    title?: string
    linkWrapper?: string
    linkText?: string
    linkIcon?: string
    statsWrapper?: string
    stat?: string
    statValue?: string
    statLabel?: string
    overlay?: string
    logosWrapper?: string
    logosScroll?: string
    logosList?: string
    logo?: string
  }
}

export function CardLarge({
  href,
  title,
  badge,
  image,
  imageAlt = "",
  linkText = "Read story",
  stats,
  logos = [],
  classNames = {},
}: CardLargeProps) {
  return (
    <Flex direction="col" className={cn("dark w-full", classNames.wrapper)}>
      <Flex direction="col" className={cn("w-full", classNames.container)}>
        <Spacer size="md" />
        <Link href={href || ""} className={classNames.link}>
          <Flex
            direction="col"
            id="card-panel"
            className={cn(
              "group bg-background-elevation-1 rounded-20 relative mx-auto h-[518px] w-full max-w-full cursor-pointer overflow-hidden",
              classNames.card
            )}
            role="tabpanel"
            aria-labelledby="card-tab-0"
          >
            <Spacer size="2xl" />
            <Spacer size="2xl" axis="horizontal" />
            <Image
              alt={imageAlt}
              src={image}
              fill
              className={cn(
                "bg-background-elevation-2 scale-[1.15] object-cover object-center select-none",
                classNames.image
              )}
            />
            <Typography
              variant="subheading-xs"
              className={cn("relative z-10 font-mono", classNames.badge)}
            >
              {badge}
            </Typography>
            <Spacer size="md" />
            <Typography
              variant="h3"
              as="h3"
              className={cn("relative z-10 max-w-[28rem]", classNames.title)}
            >
              {title}
            </Typography>
            <Spacer size="xl" />
            <Flex className={cn("z-10 w-fit", classNames.linkWrapper)}>
              <Typography
                variant="paragraph-md"
                className={cn(
                  "group text-text-strength-900 hover:text-text-strength-700 font-medium",
                  classNames.linkText
                )}
              >
                {linkText}
              </Typography>
              <Spacer size="xxs" axis="horizontal" />
              <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  "size-2.5 shrink-0 -rotate-90 transition-transform duration-150 ease-in-out select-none group-hover:translate-x-0.5",
                  classNames.linkIcon
                )}
                strokeWidth="3"
              >
                <path
                  d="M15.25 6.5L9 12.75L2.75 6.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Flex>
            <Spacer />
            <Flex
              align="start"
              className={cn("relative z-10", classNames.statsWrapper)}
            >
              {stats.map((stat, index) => (
                <>
                  <Flex
                    key={index}
                    direction="col"
                    className={cn("w-[12rem]", classNames.stat)}
                  >
                    <Typography
                      variant="h2"
                      as="p"
                      className={cn(
                        "text-text-strength-900 font-bold",
                        classNames.statValue
                      )}
                    >
                      {stat.value}
                    </Typography>
                    <Spacer size="xs" />
                    <Typography
                      variant="paragraph-sm"
                      className={cn(
                        "text-text-strength-600 text-balance",
                        classNames.statLabel
                      )}
                    >
                      {stat.label}
                    </Typography>
                  </Flex>
                  {index < stats.length - 1 && (
                    <Spacer
                      key={`spacer-${index}`}
                      size="xl"
                      axis="horizontal"
                    />
                  )}
                </>
              ))}
            </Flex>
            <Spacer size="2xl" />
            <Spacer size="2xl" axis="horizontal" />
            <Flex
              className={cn(
                "from-background-elevation-1 dark pointer-events-none absolute inset-0 bg-linear-to-t to-transparent opacity-70 transition-opacity duration-200 select-none group-hover:opacity-50 group-focus-visible:opacity-50",
                classNames.overlay
              )}
              aria-hidden="true"
            />
          </Flex>
        </Link>
        {logos.length > 0 && (
          <Flex
            className={cn(
              "relative min-w-0 overflow-clip invert dark:invert-0",
              classNames.logosWrapper
            )}
          >
            <Spacer size="sm" />
            <Flex
              className={cn(
                "relative overflow-x-auto [scrollbar-width:none]",
                classNames.logosScroll
              )}
            >
              <Spacer size="lg" axis="horizontal" />
              <Flex
                align="center"
                justify="center"
                className={cn("w-max min-w-full", classNames.logosList)}
                role="tablist"
                aria-orientation="horizontal"
                aria-label="Customer stories"
              >
                {logos.map((logo, index) => (
                  <>
                    <button
                      key={index}
                      id={`card-tab-${index}`}
                      role="tab"
                      aria-selected={index === 0}
                      aria-controls="card-panel"
                      className={cn(
                        "group flex h-16 w-[140px] flex-shrink-0 cursor-pointer items-center justify-center rounded-sm transition-[filter,opacity] duration-300 outline-none",
                        index !== 0 && "opacity-50 grayscale",
                        classNames.logo
                      )}
                    >
                      <Typography variant="paragraph-xs" className="sr-only">
                        Logo {index + 1}
                      </Typography>
                      {logo}
                    </button>
                    {index < logos.length - 1 && (
                      <Spacer
                        key={`spacer-${index}`}
                        size="3xl"
                        axis="horizontal"
                      />
                    )}
                  </>
                ))}
              </Flex>
              <Spacer size="lg" axis="horizontal" />
            </Flex>
            <Spacer size="sm" />
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}
