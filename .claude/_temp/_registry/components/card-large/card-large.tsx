import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Flex from "@/registry/components/flex/flex";
import { Spacer } from "@/registry/components/spacer/spacer";
import Typography from "@/registry/components/typography/typography";

export type CardLargeProps = {
  href: string;
  title: string;
  badge: string;
  image: string;
  imageAlt?: string;
  linkText?: string;
  stats: {
    value: string;
    label: string;
  }[];
  logos?: React.ReactNode[];
  classNames?: {
    wrapper?: string;
    container?: string;
    link?: string;
    card?: string;
    image?: string;
    badge?: string;
    title?: string;
    linkWrapper?: string;
    linkText?: string;
    linkIcon?: string;
    statsWrapper?: string;
    stat?: string;
    statValue?: string;
    statLabel?: string;
    overlay?: string;
    logosWrapper?: string;
    logosScroll?: string;
    logosList?: string;
    logo?: string;
  };
};

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
    <Flex direction="col" className={cn("w-full dark", classNames.wrapper)}>
      <Flex direction="col" className={cn("w-full", classNames.container)}>
        <Spacer size="md" />
        <Link href={href || ""} className={classNames.link}>
          <Flex
            direction="col"
            id="card-panel"
            className={cn(
              "group relative w-full mx-auto max-w-full bg-background-elevation-1 rounded-20 h-[518px] overflow-hidden cursor-pointer",
              classNames.card,
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
                "object-cover object-center scale-[1.15] select-none bg-background-elevation-2",
                classNames.image,
              )}
            />
            <Typography
              variant="subheading-xs"
              className={cn("font-mono relative z-10", classNames.badge)}
            >
              {badge}
            </Typography>
            <Spacer size="md" />
            <Typography
              variant="h3"
              as="h3"
              className={cn("max-w-[28rem] relative z-10", classNames.title)}
            >
              {title}
            </Typography>
            <Spacer size="xl" />
            <Flex className={cn("z-10 w-fit", classNames.linkWrapper)}>
              <Typography
                variant="paragraph-md"
                className={cn(
                  "group font-medium text-text-strength-900 hover:text-text-strength-700",
                  classNames.linkText,
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
                  "shrink-0 size-2.5 -rotate-90 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out select-none",
                  classNames.linkIcon,
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
                        classNames.statValue,
                      )}
                    >
                      {stat.value}
                    </Typography>
                    <Spacer size="xs" />
                    <Typography
                      variant="paragraph-sm"
                      className={cn(
                        "text-balance text-text-strength-600",
                        classNames.statLabel,
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
                "absolute inset-0 bg-linear-to-t from-background-elevation-1 to-transparent opacity-70 group-hover:opacity-50 group-focus-visible:opacity-50 transition-opacity duration-200 dark select-none pointer-events-none",
                classNames.overlay,
              )}
              aria-hidden="true"
            />
          </Flex>
        </Link>
        {logos.length > 0 && (
          <Flex
            className={cn(
              "relative min-w-0 overflow-clip invert dark:invert-0",
              classNames.logosWrapper,
            )}
          >
            <Spacer size="sm" />
            <Flex
              className={cn(
                "[scrollbar-width:none] overflow-x-auto relative",
                classNames.logosScroll,
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
                        "cursor-pointer transition-[filter,opacity] duration-300 h-16 flex-shrink-0 flex items-center justify-center outline-none group rounded-sm w-[140px]",
                        index !== 0 && "grayscale opacity-50",
                        classNames.logo,
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
  );
}
