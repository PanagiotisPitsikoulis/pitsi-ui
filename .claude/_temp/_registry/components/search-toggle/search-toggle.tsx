"use client";
import type { VariantProps } from "class-variance-authority";
import { useSearchContext } from "fumadocs-ui/contexts/search";
import { Search } from "lucide-react";
import type { ComponentProps } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonProps = VariantProps<typeof buttonVariants>;

export interface SearchToggleProps
  extends Omit<ComponentProps<"button">, "color">,
    ButtonProps {
  hideIfDisabled?: boolean;
}

export function SearchToggle({
  hideIfDisabled,
  size = "icon-sm",
  variant = "ghost",
  ...props
}: SearchToggleProps) {
  const { setOpenSearch, enabled } = useSearchContext();
  if (hideIfDisabled && !enabled) return null;

  return (
    <button
      className={cn(
        buttonVariants({
          size,
          variant,
        }),
        "text-foreground",
        props.className,
      )}
      data-search=""
      aria-label="Open Search"
      onClick={() => {
        setOpenSearch(true);
      }}
    >
      <Search />
    </button>
  );
}

export interface LargeSearchToggleProps extends ComponentProps<"button"> {
  hideIfDisabled?: boolean;
}

export function LargeSearchToggle({
  hideIfDisabled,
  ...props
}: LargeSearchToggleProps) {
  const { enabled, hotKey, setOpenSearch } = useSearchContext();
  if (hideIfDisabled && !enabled) return null;

  return (
    <button
      data-search-full=""
      {...props}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border bg-secondary/50 p-1.5 ps-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        props.className,
      )}
      onClick={() => {
        setOpenSearch(true);
      }}
    >
      <Search className="size-4" />
      {props.children ?? "Search"}
      <div className="ms-auto inline-flex gap-0.5">
        {hotKey.map((k, i) => (
          <kbd key={i} className="rounded-md border bg-background px-1.5">
            {k.display}
          </kbd>
        ))}
      </div>
    </button>
  );
}
