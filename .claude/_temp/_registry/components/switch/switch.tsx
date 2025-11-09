import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/ui/cn"

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, disabled, ...rest }, forwardedRef) => {
  return (
    <SwitchPrimitives.Root
      className={cn(
        "group/switch block h-5 w-8 shrink-0 p-0.5 outline-none focus:outline-none",
        className
      )}
      ref={forwardedRef}
      disabled={disabled}
      {...rest}
    >
      <div
        className={cn(
          // base
          "h-4 w-7 rounded-full bg-[var(--bg-elevation-2)] p-0.5 outline-none",
          "transition duration-200 ease-out",
          !disabled && [
            // hover
            "group-hover/switch:bg-[var(--bg-elevation-3)]",
            // focus
            "group-focus-visible/switch:bg-[var(--bg-elevation-3)]",
            // pressed
            "group-active/switch:bg-[var(--bg-elevation-2)]",
            // checked
            "group-data-[state=checked]/switch:bg-primary-base",
            // checked hover
            "group-hover:data-[state=checked]/switch:bg-primary-darker",
            // checked pressed
            "group-active:data-[state=checked]/switch:bg-primary-base",
            // focus
            "group-focus/switch:outline-none",
          ],
          // disabled
          disabled && [
            "bg-[var(--bg-elevation-0)] p-[3px] ring-1 ring-inset ring-[var(--border-elevation-1)]",
          ]
        )}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            // base
            "pointer-events-none relative block size-3",
            "transition-transform duration-200 ease-out",
            // checked
            "data-[state=checked]:translate-x-3",
            !disabled && [
              // before
              "before:absolute before:inset-y-0 before:left-1/2 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-static-white",
              "before:[mask:--mask]",
              // after
              "after:absolute after:inset-y-0 after:left-1/2 after:w-3 after:-translate-x-1/2 after:rounded-full after:shadow-switch-thumb",
              // pressed
              "group-active/switch:scale-[.833]",
            ],
            // disabled,
            disabled && ["size-2.5 rounded-full bg-[var(--bg-elevation-2)]"]
          )}
          style={{
            ["--mask" as any]:
              "radial-gradient(circle farthest-side at 50% 50%, #0000 1.95px, #000 2.05px 100%) 50% 50%/100% 100% no-repeat",
          }}
        />
      </div>
    </SwitchPrimitives.Root>
  )
})
Switch.displayName = SwitchPrimitives.Root.displayName

export type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
>

export { Switch as Root }
