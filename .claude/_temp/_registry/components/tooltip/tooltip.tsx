"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "@/lib/ui/cn";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...rest }, forwardedRef) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={forwardedRef}
      sideOffset={sideOffset}
      className={cn(
        // base
        "z-50 overflow-hidden rounded-lg bg-background-elevation-0 px-3 py-1.5 text-paragraph-xs text-text-strength-900",
        "shadow-regular-md ring-1 ring-inset ring-border-elevation-1",
        // animation
        "data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        "data-[state=closed]:zoom-out-95 data-[state=delayed-open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...rest}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
