import type React from "react"

import { cn } from "@/registry/new-york-v4/lib/utils"

const GUTTER_WIDTH = "[--gutter-width:10svw]"
const PADDING_MOBILE = "[--padding-mobile:1rem]"

export type ContainerProps = {
  children: React.ReactNode
  gutterWidthClassName?: string
  className?: string
  paddingMobileClassName?: string
  classNames?: {
    wrapper?: string
    grid?: string
    leftBar?: string
    rightBar?: string
    content?: string
  }
}

export function Container({
  children,
  paddingMobileClassName = PADDING_MOBILE,
  className,
  classNames = {},
  gutterWidthClassName = GUTTER_WIDTH,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "max-lg:overflow-x-hidden",
        gutterWidthClassName,
        paddingMobileClassName,
        classNames.wrapper,
        className
      )}
    >
      <div
        className={cn(
          "grid grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center lg:-mx-4 lg:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)]",
          classNames.grid
        )}
      >
        {/* Left Bar */}
        <div
          className={cn(
            "col-start-1 row-span-full row-start-1 hidden lg:block",
            classNames.leftBar
          )}
        />
        {/* Main content area */}
        <div
          className={cn(
            "max-lg:px-[var(--padding-mobile)]",
            classNames.content
          )}
        >
          {children}
        </div>
        {/* Right Bar */}
        <div
          className={cn(
            "row-span-full row-start-1 hidden lg:col-start-3 lg:block",
            classNames.rightBar
          )}
        />
      </div>
    </div>
  )
}

export type EscapeContainerProps = {
  children: React.ReactNode
  className?: string
}

export function EscapeContainer({ children, className }: EscapeContainerProps) {
  return (
    <div
      className={cn(
        "relative right-1/2 left-1/2 -mx-[50vw] w-screen",
        className
      )}
    >
      {children}
    </div>
  )
}

export type SpaceLeftProps = {
  children: React.ReactNode
  className?: string
  gutterWidthClassName?: string
  paddingMobileClassName?: string
}

export function SpaceLeft({
  children,
  className,
  gutterWidthClassName = GUTTER_WIDTH,
  paddingMobileClassName = PADDING_MOBILE,
}: SpaceLeftProps) {
  return (
    <div
      className={cn(
        "lg:pl-[calc(var(--gutter-width))]",
        "pl-[var(--padding-mobile)]",
        gutterWidthClassName,
        paddingMobileClassName,
        className
      )}
    >
      {children}
    </div>
  )
}

export type SpaceRightProps = {
  children: React.ReactNode
  className?: string
  gutterWidthClassName?: string
  paddingMobileClassName?: string
}

export function SpaceRight({
  children,
  className,
  gutterWidthClassName = GUTTER_WIDTH,
  paddingMobileClassName = PADDING_MOBILE,
}: SpaceRightProps) {
  return (
    <div
      className={cn(
        "lg:pr-[calc(var(--gutter-width)]",
        "pr-[var(--padding-mobile)]",
        gutterWidthClassName,
        paddingMobileClassName,
        className
      )}
    >
      {children}
    </div>
  )
}
