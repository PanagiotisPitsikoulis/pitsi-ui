import type * as React from "react";

import { cn } from "@/lib/ui/cn";

function Kbd({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex h-5 items-center gap-0.5 whitespace-nowrap rounded bg-[var(--bg-elevation-0)] px-1.5 text-subheading-xs text-strength-300 ring-1 ring-inset ring-[var(--border-elevation-1)]",
        className,
      )}
      {...rest}
    />
  );
}

export type KbdProps = React.HTMLAttributes<HTMLElement>;

export { Kbd as Root };
