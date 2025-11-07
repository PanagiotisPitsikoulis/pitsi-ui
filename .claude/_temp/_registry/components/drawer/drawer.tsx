"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { RiCloseLine } from "@remixicon/react";
import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/ui/cn";
import * as CompactButton from "@/registry/components/compact-button/compact-button";

const DrawerRoot = DialogPrimitive.Root;
DrawerRoot.displayName = "Drawer";

const DrawerTrigger = DialogPrimitive.Trigger;
DrawerTrigger.displayName = "DrawerTrigger";

const DrawerClose = DialogPrimitive.Close;
DrawerClose.displayName = "DrawerClose";

const DrawerPortal = DialogPrimitive.Portal;
DrawerPortal.displayName = "DrawerPortal";

const DrawerOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <DialogPrimitive.Overlay
      ref={forwardedRef}
      asChild
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          // base
          "fixed inset-0 z-50 grid grid-cols-1 place-items-end overflow-hidden bg-black/80 backdrop-blur-none",
          className,
        )}
        {...rest}
      />
    </DialogPrimitive.Overlay>
  );
});
DrawerOverlay.displayName = "DrawerOverlay";

const DrawerContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...rest }, forwardedRef) => {
  return (
    <DrawerPortal>
      <DrawerOverlay>
        <DialogPrimitive.Content
          ref={forwardedRef}
          asChild
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              // base
              "size-full max-w-[400px] overflow-y-auto",
              "border-l border-border-elevation-1 bg-background-elevation-0",
              className,
            )}
            {...rest}
          >
            <div className="relative flex size-full flex-col">{children}</div>
          </motion.div>
        </DialogPrimitive.Content>
      </DrawerOverlay>
    </DrawerPortal>
  );
});
DrawerContent.displayName = "DrawerContent";

function DrawerHeader({
  className,
  children,
  showCloseButton = true,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  showCloseButton?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-stroke-soft-200 p-5",
        className,
      )}
      {...rest}
    >
      {children}

      {showCloseButton && (
        <DrawerClose asChild>
          <CompactButton.Root variant="ghost" size="large">
            <CompactButton.Icon as={RiCloseLine} />
          </CompactButton.Root>
        </DrawerClose>
      )}
    </div>
  );
}
DrawerHeader.displayName = "DrawerHeader";

const DrawerTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <DialogPrimitive.Title
      ref={forwardedRef}
      className={cn("flex-1 text-label-lg text-text-strong-950", className)}
      {...rest}
    />
  );
});
DrawerTitle.displayName = "DrawerTitle";

function DrawerBody({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex-1", className)} {...rest}>
      {children}
    </div>
  );
}
DrawerBody.displayName = "DrawerBody";

function DrawerFooter({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 border-stroke-soft-200 p-5",
        className,
      )}
      {...rest}
    />
  );
}
DrawerFooter.displayName = "DrawerFooter";

export type DrawerProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;

export {
  DrawerRoot as Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerBody,
  DrawerFooter,
};
