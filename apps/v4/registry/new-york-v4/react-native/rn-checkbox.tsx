import { forwardRef } from "react"
import { clsx } from "clsx"
import { Check, Minus } from "lucide-react-native"
import { Pressable, type PressableProps } from "react-native"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

export interface CheckboxProps extends Omit<PressableProps, "children"> {
  checked?: boolean
  indeterminate?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
}

const Checkbox = forwardRef<
  React.ComponentRef<typeof Pressable>,
  CheckboxProps
>(
  (
    {
      checked = false,
      indeterminate = false,
      onCheckedChange,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Pressable
        ref={ref}
        role="checkbox"
        accessibilityState={{ checked: indeterminate ? "mixed" : checked }}
        onPress={() => onCheckedChange?.(!checked)}
        className={cn(
          "h-5 w-5 items-center justify-center rounded border-2",
          checked || indeterminate
            ? "border-primary bg-primary"
            : "border-input bg-background",
          className
        )}
        {...props}
      >
        {indeterminate ? (
          <Minus size={14} color="white" strokeWidth={3} />
        ) : checked ? (
          <Check size={14} color="white" strokeWidth={3} />
        ) : null}
      </Pressable>
    )
  }
)

Checkbox.displayName = "Checkbox"

export { Checkbox }
