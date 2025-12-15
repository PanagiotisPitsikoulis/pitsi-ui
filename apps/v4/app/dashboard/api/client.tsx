"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import {
  ApiKeysListCard,
  ApiKeysNotProCard,
  ApiUsageCard,
} from "@/components/dashboard"

type ApiKey = {
  id: string
  name: string
  keyPrefix: string
  createdAt: Date
  lastUsedAt: Date | null
}

export function ApiKeysClient({
  initialKeys,
  isPro,
}: {
  initialKeys: ApiKey[]
  isPro: boolean
}) {
  const router = useRouter()
  const [keys, setKeys] = useState(initialKeys)
  const [isCreating, setIsCreating] = useState(false)
  const [newKeyName, setNewKeyName] = useState("")
  const [newKeyValue, setNewKeyValue] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleCreateKey = async () => {
    if (!newKeyName.trim()) return

    setIsCreating(true)
    try {
      const response = await fetch("/api/keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newKeyName }),
      })

      if (response.ok) {
        const { key } = await response.json()
        setNewKeyValue(key.fullKey)
        setKeys((prev) => [...prev, key])
        setNewKeyName("")
        router.refresh()
      }
    } finally {
      setIsCreating(false)
    }
  }

  const handleDeleteKey = async (keyId: string) => {
    setDeletingId(keyId)
    try {
      const response = await fetch(`/api/keys?id=${keyId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setKeys((prev) => prev.filter((k) => k.id !== keyId))
        router.refresh()
      }
    } finally {
      setDeletingId(null)
    }
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setNewKeyValue(null)
    setNewKeyName("")
  }

  if (!isPro) {
    return <ApiKeysNotProCard />
  }

  return (
    <div className="space-y-6">
      <ApiKeysListCard
        keys={keys}
        deletingId={deletingId}
        onDeleteKey={handleDeleteKey}
        isDialogOpen={isDialogOpen}
        onDialogOpenChange={setIsDialogOpen}
        newKeyName={newKeyName}
        onKeyNameChange={setNewKeyName}
        newKeyValue={newKeyValue}
        isCreating={isCreating}
        copied={copied}
        onCreateKey={handleCreateKey}
        onCopy={handleCopy}
        onDialogClose={handleDialogClose}
      />
      <ApiUsageCard />
    </div>
  )
}
