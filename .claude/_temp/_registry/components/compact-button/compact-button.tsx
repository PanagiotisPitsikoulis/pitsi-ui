import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import type { PolymorphicComponentProps } from "@/lib/ui/polymorphic";
import { recursiveCloneChildren } from "@/lib/ui/recursive-clone-children";
import { tv, type VariantProps } from "@/lib/ui/tv";

const COMPACT_BUTTON_ROOT_NAME = "CompactButtonRoot";
const COMPACT_BUTTON_ICON_NAME = "CompactButtonIcon";

export const compactButtonVariants = tv({
  slots: {
    root: [
      // base
      "relative flex shrink-0 items-center justify-center outline-none",
      "transition duration-200 ease-out",
      // disabled
      "disabled:pointer-events-none disabled:border-transparent disabled:bg-transparent disabled:text-strength-100 disabled:shadow-none",
      // focus
      "focus:outline-none",
    ],
    icon: "",
  },
  variants: {
    variant: {
      stroke: {
        root: [
          // base
          "border border-[var(--border-elevation-1)] bg-[var(--bg-elevation-0)] text-strength-600 shadow-regular-xs",
          // hover
          "hover:border-transparent hover:bg-[var(--bg-elevation-1)] hover:text-strength-900 hover:shadow-none",
          // focus
          "focus-visible:border-transparent focus-visible:bg-[var(--bg-elevation-5)] focus-visible:text-inverse focus-visible:shadow-none",
        ],
      },
      ghost: {
        root: [
          // base
          "bg-transparent text-strength-600",
          // hover
          "hover:bg-[var(--bg-elevation-1)] hover:text-strength-900",
          // focus
          "focus-visible:bg-[var(--bg-elevation-5)] focus-visible:text-inverse",
        ],
      },
      white: {
        root: [
          // base
          "bg-[var(--bg-elevation-0)] text-strength-600 shadow-regular-xs",
          // hover
          "hover:bg-[var(--bg-elevation-1)] hover:text-strength-900",
          // focus
          "focus-visible:bg-[var(--bg-elevation-5)] focus-visible:text-inverse",
        ],
      },
      modifiable: {},
    },
    size: {
      large: {
        root: "size-6",
        icon: "size-5",
      },
      medium: {
        root: "size-5",
        icon: "size-[18px]",
      },
    },
    fullRadius: {
      true: {
        root: "rounded-full",
      },
      false: {
        root: "rounded-md",
      },
    },
  },
  defaultVariants: {
    variant: "stroke",
    size: "large",
    fullRadius: false,
  },
});

type CompactButtonSharedProps = Omit<
  VariantProps<typeof compactButtonVariants>,
  "fullRadius"
>;

export type CompactButtonProps = VariantProps<typeof compactButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

const CompactButtonRoot = React.forwardRef<
  HTMLButtonElement,
  CompactButtonProps
>(
  (
    { asChild, variant, size, fullRadius, children, className, ...rest },
    forwardedRef,
  ) => {
    const uniqueId = React.useId();
    const Component = asChild ? Slot : "button";
    const { root } = compactButtonVariants({ variant, size, fullRadius });

    const sharedProps: CompactButtonSharedProps = {
      variant,
      size,
    };

    const extendedChildren = recursiveCloneChildren(
      children as React.ReactElement[],
      sharedProps,
      [COMPACT_BUTTON_ICON_NAME],
      uniqueId,
      asChild,
    );

    return (
      <Component
        ref={forwardedRef}
        className={root({ class: className })}
        {...rest}
      >
        {extendedChildren}
      </Component>
    );
  },
);
CompactButtonRoot.displayName = COMPACT_BUTTON_ROOT_NAME;

function CompactButtonIcon<T extends React.ElementType>({
  variant,
  size,
  as,
  className,
  ...rest
}: PolymorphicComponentProps<T, CompactButtonSharedProps>) {
  const Component = as || "div";
  const { icon } = compactButtonVariants({ variant, size });

  return <Component className={icon({ class: className })} {...rest} />;
}
CompactButtonIcon.displayName = COMPACT_BUTTON_ICON_NAME;

export { CompactButtonRoot as Root, CompactButtonIcon as Icon };
