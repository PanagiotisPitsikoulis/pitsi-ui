"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { RiAddLine, RiSubtractLine } from "@remixicon/react"

import { cn } from "@/lib/ui/cn"
import type { PolymorphicComponentProps } from "@/lib/ui/polymorphic"

const ACCORDION_ITEM_NAME = "AccordionItem"
const ACCORDION_ICON_NAME = "AccordionIcon"
const ACCORDION_ARROW_NAME = "AccordionArrow"
const ACCORDION_TRIGGER_NAME = "AccordionTrigger"
const ACCORDION_CONTENT_NAME = "AccordionContent"

const AccordionRoot = AccordionPrimitive.Root
const AccordionHeader = AccordionPrimitive.Header

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <AccordionPrimitive.Item
      ref={forwardedRef}
      className={cn(
        // base
        "group/accordion",
        "rounded-10 bg-background-elevation-0 ring-border-elevation-1 p-3.5 ring-1 ring-inset",
        "transition duration-200 ease-out",
        // hover
        "hover:bg-background-elevation-1 hover:ring-transparent",
        // has-focus-visible
        "has-[:focus-visible]:bg-background-elevation-1 has-[:focus-visible]:ring-transparent",
        // open
        "data-[state=open]:bg-background-elevation-1 data-[state=open]:ring-transparent",
        className
      )}
      {...rest}
    />
  )
})
AccordionItem.displayName = ACCORDION_ITEM_NAME

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, className, ...rest }, forwardedRef) => {
  return (
    <AccordionPrimitive.Trigger
      ref={forwardedRef}
      className={cn(
        // base
        "text-label-sm text-text-strength-900 w-[calc(100%+theme(space.7))] text-left",
        "grid auto-cols-auto grid-flow-col grid-cols-[auto,minmax(0,1fr)] items-center gap-2.5",
        "-m-3.5 p-3.5 outline-none",
        // focus
        "focus:outline-none",
        className
      )}
      {...rest}
    >
      {children}
    </AccordionPrimitive.Trigger>
  )
})
AccordionTrigger.displayName = ACCORDION_TRIGGER_NAME

function AccordionIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || "div"

  return (
    <Component
      className={cn("text-text-strength-600 size-5", className)}
      {...rest}
    />
  )
}
AccordionIcon.displayName = ACCORDION_ICON_NAME

export type AccordionArrowProps = React.HTMLAttributes<HTMLDivElement> & {
  openIcon?: React.ElementType
  closeIcon?: React.ElementType
}

// open/close
function AccordionArrow({
  className,
  openIcon: OpenIcon = RiAddLine,
  closeIcon: CloseIcon = RiSubtractLine,
  ...rest
}: AccordionArrowProps) {
  return (
    <>
      <OpenIcon
        className={cn(
          "text-text-strength-300 size-5",
          "transition duration-200 ease-out",
          // hover
          "group-hover/accordion:text-text-strength-600",
          // open
          "group-data-[state=open]/accordion:hidden",
          className
        )}
        {...rest}
      />
      <CloseIcon
        className={cn(
          "text-text-strength-600 size-5",
          // close
          "hidden group-data-[state=open]/accordion:block",
          className
        )}
        {...rest}
      />
    </>
  )
}
AccordionArrow.displayName = ACCORDION_ARROW_NAME

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...rest }, forwardedRef) => {
  return (
    <AccordionPrimitive.Content
      ref={forwardedRef}
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...rest}
    >
      <div
        className={cn(
          "text-paragraph-sm text-text-strength-600 pt-1.5",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
})
AccordionContent.displayName = ACCORDION_CONTENT_NAME

export type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>

export {
  AccordionRoot as Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  AccordionIcon,
  AccordionArrow,
  AccordionContent,
}
