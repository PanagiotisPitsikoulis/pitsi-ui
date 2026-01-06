"use client"

import { Loader2, Plus } from "@/lib/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"

interface TeamInviteDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  email: string
  onEmailChange: (email: string) => void
  error: string | null
  onErrorClear: () => void
  isInviting: boolean
  onInvite: () => void
  disabled?: boolean
}

export function TeamInviteDialog({
  isOpen,
  onOpenChange,
  email,
  onEmailChange,
  error,
  onErrorClear,
  isInviting,
  onInvite,
  disabled,
}: TeamInviteDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button disabled={disabled}>
          <Plus className="mr-2 size-4" />
          Invite Member
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite Team Member</DialogTitle>
          <DialogDescription>
            Enter the email address of the person you want to invite. They will
            get access to your Pro components.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="colleague@company.com"
              value={email}
              onChange={(e) => {
                onEmailChange(e.target.value)
                onErrorClear()
              }}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              onOpenChange(false)
              onErrorClear()
            }}
          >
            Cancel
          </Button>
          <Button onClick={onInvite} disabled={isInviting || !email.trim()}>
            {isInviting ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Inviting...
              </>
            ) : (
              "Send Invitation"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
