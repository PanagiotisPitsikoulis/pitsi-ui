"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { RiArrowRightSLine } from "@remixicon/react"

import { cn } from "@/lib/ui/cn"
import type { PolymorphicComponentProps } from "@/lib/ui/polymorphic"

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuCheckboxItem = DropdownMenuPrimitive.CheckboxItem
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
const DropdownMenuRadioItem = DropdownMenuPrimitive.RadioItem
const DropdownMenuSeparator = DropdownMenuPrimitive.Separator
const DropdownMenuArrow = DropdownMenuPrimitive.Arrow

const DropdownMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 8, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={forwardedRef}
      sideOffset={sideOffset}
      className={cn(
        "bg-background-elevation-0 shadow-regular-md ring-border-elevation-1 z-50 w-full overflow-hidden rounded-2xl p-2 ring-1 ring-inset",
        "flex flex-col gap-1",
        // origin
        "data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom",
        // animation
        "data-[state=open]:animate-in data-[state=open]:fade-in-0",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...rest}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.Item
    ref={forwardedRef}
    className={cn(
      // base
      "group/item text-label-sm text-text-strength-900 relative cursor-pointer rounded-lg p-2 outline-none select-none",
      "flex items-center gap-2",
      "transition duration-200 ease-out",
      "border border-transparent",
      // hover
      "data-[highlighted]:bg-background-elevation-2 data-[highlighted]:border-border-elevation-2",
      // focus
      "focus:outline-none",
      // disabled
      "data-[disabled]:text-text-strength-100",
      inset && "pl-9",
      className
    )}
    {...rest}
  />
))
DropdownMenuItem.displayName = "DropdownMenuItem"

function DropdownItemIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || "div"

  return (
    <Component
      className={cn(
        // base
        "text-text-strength-600 size-5",
        // disabled
        "group-has-[[data-disabled]]:text-text-strength-100",
        className
      )}
      {...rest}
    />
  )
}
DropdownItemIcon.displayName = "DropdownItemIcon"

const DropdownMenuGroup = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>
>(({ className, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.Group
    ref={forwardedRef}
    className={cn("flex flex-col gap-1", className)}
    {...rest}
  />
))
DropdownMenuGroup.displayName = "DropdownMenuGroup"

const DropdownMenuLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.Label
    ref={forwardedRef}
    className={cn(
      "text-text-strength-600 px-2 py-1 text-xs font-medium",
      className
    )}
    {...rest}
  />
))
DropdownMenuLabel.displayName = "DropdownMenuLabel"

const DropdownMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={forwardedRef}
    className={cn(
      // base
      "group/item text-label-sm text-text-strength-900 relative cursor-pointer rounded-lg p-2 outline-0 select-none",
      "flex items-center gap-2",
      "transition duration-200 ease-out",
      "border border-transparent",
      // hover
      "data-[highlighted]:bg-background-elevation-2 data-[highlighted]:border-border-elevation-2",
      // disabled
      "data-[disabled]:text-text-strength-100",
      inset && "pl-9",
      className
    )}
    {...rest}
  >
    {children}
    <span className="flex-1" />
    <DropdownItemIcon as={RiArrowRightSLine} />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger"

const DropdownMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.SubContent
    ref={forwardedRef}
    className={cn(
      "bg-background-elevation-0 shadow-regular-md ring-border-elevation-1 z-50 w-max overflow-hidden rounded-2xl p-2 ring-1 ring-inset",
      "flex flex-col gap-1",
      // animation
      "data-[state=open]:animate-in data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...rest}
  />
))
DropdownMenuSubContent.displayName = "DropdownMenuSubContent"

export type DropdownProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
>

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownItemIcon,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuArrow,
}
