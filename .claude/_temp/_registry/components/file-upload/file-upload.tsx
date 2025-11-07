import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/lib/ui/cn";
import type { PolymorphicComponentProps } from "@/lib/ui/polymorphic";

const FileUpload = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & {
    asChild?: boolean;
  }
>(({ className, asChild, ...rest }, forwardedRef) => {
  const Component = asChild ? Slot : "label";

  return (
    <Component
      ref={forwardedRef}
      className={cn(
        "flex w-full cursor-pointer flex-col items-center gap-5 rounded-xl border border-dashed border-border-elevation-2 bg-background-elevation-0 p-8 text-center",
        "transition duration-200 ease-out",
        // hover
        "hover:bg-background-elevation-1",
        className,
      )}
      {...rest}
    />
  );
});
FileUpload.displayName = "FileUpload";

const FileUploadButton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  }
>(({ className, asChild, ...rest }, forwardedRef) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component
      ref={forwardedRef}
      className={cn(
        "inline-flex h-8 items-center justify-center gap-2.5 whitespace-nowrap rounded-lg bg-background-elevation-0 px-2.5 text-label-sm text-text-strength-600",
        "pointer-events-none ring-1 ring-inset ring-border-elevation-1",
        className,
      )}
      {...rest}
    />
  );
});
FileUploadButton.displayName = "FileUploadButton";

function FileUploadIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cn("size-6 text-text-strength-600", className)}
      {...rest}
    />
  );
}

export type FileUploadProps = FileUploadRootProps;

export {
  FileUpload as Root,
  FileUploadButton as Button,
  FileUploadIcon as Icon,
};
