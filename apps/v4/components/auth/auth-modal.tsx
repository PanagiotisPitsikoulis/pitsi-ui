"use client"

import { useRouter } from "next/navigation"

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/registry/new-york-v4/ui/dialog"

export function AuthModal({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const handleClose = () => {
    router.back()
  }

  return (
    <Dialog open onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-sm overflow-hidden border-0 bg-transparent p-0 shadow-none">
        <DialogTitle className="sr-only">Authentication</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  )
}
