"use client"

import * as React from "react"
import {
  ColorArea as AriaColorArea,
  ColorField as AriaColorField,
  ColorPicker as AriaColorPicker,
  ColorSlider as AriaColorSlider,
  ColorSwatch as AriaColorSwatch,
  ColorSwatchPicker as AriaColorSwatchPicker,
  ColorSwatchPickerItem as AriaColorSwatchPickerItem,
  ColorThumb as AriaColorThumb,
  SliderTrack as AriaSliderTrack,
  ColorPickerStateContext,
  composeRenderProps,
  parseColor,
  type ColorAreaProps as AriaColorAreaProps,
  type ColorSliderProps as AriaColorSliderProps,
  type ColorSwatchPickerItemProps as AriaColorSwatchPickerItemProps,
  type ColorSwatchPickerProps as AriaColorSwatchPickerProps,
  type ColorSwatchProps as AriaColorSwatchProps,
  type ColorThumbProps as AriaColorThumbProps,
  type SliderTrackProps as AriaSliderTrackProps,
} from "react-aria-components"

import { cn } from "@/lib/ui/tv"

const ColorField = AriaColorField
const ColorPicker = AriaColorPicker

function ColorSlider({ className, ...props }: AriaColorSliderProps) {
  return (
    <AriaColorSlider
      className={composeRenderProps(className, (className) =>
        cn("py-1", className)
      )}
      {...props}
    />
  )
}

function ColorArea({ className, ...props }: AriaColorAreaProps) {
  return (
    <AriaColorArea
      className={composeRenderProps(className, (className) =>
        cn("h-[232px] w-full rounded-lg", className)
      )}
      {...props}
    />
  )
}

function SliderTrack({ className, style, ...props }: AriaSliderTrackProps) {
  return (
    <AriaSliderTrack
      className={composeRenderProps(className, (className) =>
        cn("h-2 w-full rounded-full", className)
      )}
      style={({ defaultStyle }) => ({
        ...style,
        background: `${defaultStyle.background},
          repeating-conic-gradient(
            #fff 0 90deg,
            rgba(0,0,0,.3) 0 180deg)
          0% -25%/6px 6px`,
      })}
      {...props}
    />
  )
}

function ColorThumb({ className, ...props }: AriaColorThumbProps) {
  return (
    <AriaColorThumb
      className={composeRenderProps(className, (className) =>
        cn("ring-static-white z-50 size-3 rounded-full ring-2", className)
      )}
      {...props}
    />
  )
}

function ColorSwatchPicker({
  className,
  ...props
}: AriaColorSwatchPickerProps) {
  return (
    <AriaColorSwatchPicker
      className={composeRenderProps(className, (className) =>
        cn("flex w-full flex-wrap gap-1", className)
      )}
      {...props}
    />
  )
}

function ColorSwatchPickerItem({
  className,
  ...props
}: AriaColorSwatchPickerItemProps) {
  return (
    <AriaColorSwatchPickerItem
      className={composeRenderProps(className, (className) =>
        cn("group/swatch-item cursor-pointer p-1 focus:outline-none", className)
      )}
      {...props}
    />
  )
}

function ColorSwatch({ className, style, ...props }: AriaColorSwatchProps) {
  return (
    <AriaColorSwatch
      className={composeRenderProps(className, (className) =>
        cn(
          "border-static-white size-4 rounded-full group-data-[selected=true]/swatch-item:border-2 group-data-[selected=true]/swatch-item:ring-[1.5px]",
          className
        )
      )}
      style={({ defaultStyle }) => ({
        ...style,
        background: `${defaultStyle.background},
        repeating-conic-gradient(
          #fff 0 90deg,
          rgba(0,0,0,.3) 0 180deg)
        0% -25%/6px 6px`,
      })}
      {...props}
    />
  )
}

const EyeDropperButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ ...rest }, forwardedRef) => {
  const state = React.useContext(ColorPickerStateContext)!

  // @ts-expect-error
  if (typeof EyeDropper === "undefined") {
    return null
  }

  return (
    <button
      ref={forwardedRef}
      aria-label="Eye dropper"
      onClick={() => {
        // @ts-expect-error
        new EyeDropper()
          .open()
          .then((result: { sRGBHex: string }) =>
            state.setColor(parseColor(result.sRGBHex))
          )
      }}
      {...rest}
    />
  )
})
EyeDropperButton.displayName = "EyeDropperButton"

export type ColorPickerProps = AriaColorPickerProps

export {
  ColorPicker as Root,
  ColorField as Field,
  ColorArea as Area,
  ColorSlider as Slider,
  SliderTrack,
  ColorThumb as Thumb,
  ColorSwatchPicker as SwatchPicker,
  ColorSwatchPickerItem as SwatchPickerItem,
  ColorSwatch as Swatch,
  EyeDropperButton,
}
