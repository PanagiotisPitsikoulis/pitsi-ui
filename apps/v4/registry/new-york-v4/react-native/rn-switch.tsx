import { forwardRef } from "react"
import { clsx } from "clsx"
import {
  Switch as RNSwitch,
  View,
  type SwitchProps as RNSwitchProps,
} from "react-native"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

export interface SwitchProps extends Omit<
  RNSwitchProps,
  "trackColor" | "thumbColor"
> {
  className?: string
}

const Switch = forwardRef<React.ComponentRef<typeof RNSwitch>, SwitchProps>(
  ({ className, value, ...props }, ref) => {
    return (
      <View className={cn("", className)}>
        <RNSwitch
          ref={ref}
          value={value}
          trackColor={{
            false: "#e4e4e7",
            true: "#6366f1",
          }}
          thumbColor="#ffffff"
          ios_backgroundColor="#e4e4e7"
          {...props}
        />
      </View>
    )
  }
)

Switch.displayName = "Switch"

export { Switch }
