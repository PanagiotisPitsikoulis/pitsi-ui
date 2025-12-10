"use client"

import { AlertCircle, Check, Copy, Loader2, Plus } from "lucide-react"

import { Alert, AlertDescription } from "@/registry/new-york-v4/ui/alert"
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

interface ApiKeyDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  newKeyName: string
  onKeyNameChange: (name: string) => void
  newKeyValue: string | null
  isCreating: boolean
  copied: boolean
  onCreateKey: () => void
  onCopy: (text: string) => void
  onClose: () => void
}

export function ApiKeyDialog({
  isOpen,
  onOpenChange,
  newKeyName,
  onKeyNameChange,
  newKeyValue,
  isCreating,
  copied,
  onCreateKey,
  onCopy,
  onClose,
}: ApiKeyDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 size-4" />
          Create API Key
        </Button>
      </DialogTrigger>
      <DialogContent>
        {newKeyValue ? (
          <>
            <DialogHeader>
              <DialogTitle>API Key Created</DialogTitle>
              <DialogDescription>
                Copy your API key now. You won&apos;t be able to see it again.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Alert>
                <AlertCircle className="size-4" />
                <AlertDescription>
                  Make sure to copy your API key now. You won&apos;t be able to
                  see it again!
                </AlertDescription>
              </Alert>
              <div className="flex gap-2">
                <Input
                  value={newKeyValue}
                  readOnly
                  className="font-mono text-xs"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onCopy(newKeyValue)}
                >
                  {copied ? (
                    <Check className="size-4" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </Button>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={onClose}>Done</Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Create API Key</DialogTitle>
              <DialogDescription>
                Give your API key a name to help you identify it later.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="My Project"
                  value={newKeyName}
                  onChange={(e) => onKeyNameChange(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button
                onClick={onCreateKey}
                disabled={isCreating || !newKeyName.trim()}
              >
                {isCreating ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Key"
                )}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
