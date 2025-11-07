"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { RiCloseLine, type RemixiconComponentType } from "@remixicon/react"
import { motion } from "motion/react"

import { cn } from "@/lib/ui/cn"
import * as CompactButton from "@/registry/components/compact-button/compact-button"

const ModalRoot = DialogPrimitive.Root
const ModalTrigger = DialogPrimitive.Trigger
const ModalClose = DialogPrimitive.Close
const ModalPortal = DialogPrimitive.Portal

const ModalOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <DialogPrimitive.Overlay ref={forwardedRef} asChild>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          // base
          "fixed inset-0 z-50 flex flex-col items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-none",
          className
        )}
      />
    </DialogPrimitive.Overlay>
  )
})
ModalOverlay.displayName = "ModalOverlay"

const ModalContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    overlayClassName?: string
    showClose?: boolean
  }
>(
  (
    { className, overlayClassName, children, showClose = true, ...rest },
    forwardedRef
  ) => {
    return (
      <ModalPortal>
        <ModalOverlay className={overlayClassName}>
          <DialogPrimitive.Content ref={forwardedRef} asChild>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                // base
                "relative w-full max-w-[400px]",
                "rounded-20 bg-background-elevation-0 shadow-regular-sm",
                // focus
                "focus:outline-none",
                className
              )}
            >
              {children}
              {showClose && (
                <ModalClose asChild>
                  <CompactButton.Root
                    variant="ghost"
                    size="large"
                    className="absolute top-4 right-4"
                  >
                    <CompactButton.Icon as={RiCloseLine} />
                  </CompactButton.Root>
                </ModalClose>
              )}
            </motion.div>
          </DialogPrimitive.Content>
        </ModalOverlay>
      </ModalPortal>
    )
  }
)
ModalContent.displayName = "ModalContent"

function ModalHeader({
  className,
  children,
  icon: Icon,
  title,
  description,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  icon?: RemixiconComponentType
  title?: string
  description?: string
}) {
  return (
    <div
      className={cn(
        "before:border-border-elevation-1 relative flex items-start gap-3.5 py-4 pr-14 pl-5 before:absolute before:inset-x-0 before:bottom-0 before:border-b",
        className
      )}
      {...rest}
    >
      {children || (
        <>
          {Icon && (
            <div className="bg-background-elevation-0 ring-border-elevation-1 flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset">
              <Icon className="text-text-strength-600 size-5" />
            </div>
          )}
          {(title || description) && (
            <div className="flex-1 space-y-1">
              {title && <ModalTitle>{title}</ModalTitle>}
              {description && (
                <ModalDescription>{description}</ModalDescription>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}
ModalHeader.displayName = "ModalHeader"

const ModalTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <DialogPrimitive.Title
      ref={forwardedRef}
      className={cn("text-label-sm text-text-strength-900", className)}
      {...rest}
    />
  )
})
ModalTitle.displayName = "ModalTitle"

const ModalDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <DialogPrimitive.Description
      ref={forwardedRef}
      className={cn("text-paragraph-xs text-text-strength-600", className)}
      {...rest}
    />
  )
})
ModalDescription.displayName = "ModalDescription"

function ModalBody({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5", className)} {...rest} />
}
ModalBody.displayName = "ModalBody"

function ModalFooter({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border-border-elevation-1 flex items-center justify-between gap-3 border-t px-5 py-4",
        className
      )}
      {...rest}
    />
  )
}

ModalFooter.displayName = "ModalFooter"

export type ModalProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>

export {
  ModalRoot as Modal,
  ModalTrigger,
  ModalClose,
  ModalPortal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
}
