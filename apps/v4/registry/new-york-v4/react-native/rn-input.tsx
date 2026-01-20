"use client"

import { forwardRef, useState } from "react"
import { clsx } from "clsx"
import { Text, TextInput, View, type TextInputProps } from "react-native"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

export interface InputProps extends TextInputProps {
  className?: string
  label?: string
  error?: string
}

const Input = forwardRef<React.ComponentRef<typeof TextInput>, InputProps>(
  ({ className, label, error, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
      <View className="w-full">
        {label && (
          <Text className="text-foreground mb-1.5 text-sm font-medium">
            {label}
          </Text>
        )}
        <TextInput
          ref={ref}
          className={cn(
            "bg-background text-foreground h-12 w-full rounded-xl border px-4 text-base",
            isFocused ? "border-primary" : "border-input",
            error && "border-destructive",
            className
          )}
          placeholderTextColor="#71717a"
          onFocus={(e) => {
            setIsFocused(true)
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            onBlur?.(e)
          }}
          {...props}
        />
        {error && (
          <Text className="text-destructive mt-1.5 text-sm">{error}</Text>
        )}
      </View>
    )
  }
)

Input.displayName = "Input"

export { Input }
