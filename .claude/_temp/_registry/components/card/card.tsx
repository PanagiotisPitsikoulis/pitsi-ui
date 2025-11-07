import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Flex from "@/registry/components/flex/flex";
import { Spacer } from "@/registry/components/spacer/spacer";
import Typography from "@/registry/components/typography/typography";

export type CardProps = {
  href: string;
  name: string;
  image: string;
  description: string;
  linkText?: string;
  classNames?: {
    wrapper?: string;
    link?: string;
    imageWrapper?: string;
    image?: string;
    overlay?: string;
    content?: string;
    description?: string;
    linkText?: string;
    icon?: string;
  };
};

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
        "min-w-0 shrink-0 grow-0 basis-full max-w-[410px]",
        classNames.wrapper,
      )}
    >
      <Spacer size="md" axis="horizontal" />
      <Link
        data-type="default"
        className={cn("focus:outline-none group w-full", classNames.link)}
        href={href}
      >
        <Flex
          className={cn(
            "w-full rounded-10 overflow-hidden relative group-data-[type=default]:h-[290px] group-data-[type=suggestion]:h-[200px]",
            classNames.imageWrapper,
          )}
        >
          <Image
            alt={name}
            loading="lazy"
            width={500}
            height={290}
            className={cn(
              "w-full h-full object-cover bg-background-elevation-2",
              classNames.image,
            )}
            src={image}
          />
          <Flex
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 group-focus-visible:opacity-70 transition-opacity duration-200 select-none pointer-events-none",
              classNames.overlay,
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
              classNames.description,
            )}
          >
            {description}
          </Typography>
          <Spacer size="lg" />
          <Flex align="center">
            <Typography
              variant="paragraph-sm"
              className={cn(
                "font-medium group-focus-visible:outline-2 group-hover:text-text-strength-900 text-text-strength-600 group-focus-visible:outline-primary group-focus-visible:outline-offset-2 rounded-sm",
                classNames.linkText,
              )}
            >
              {linkText}
            </Typography>
            <Spacer size="xxs" axis="horizontal" />
            <ArrowRight className={cn("w-4 h-4", classNames.icon)} />
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
}
