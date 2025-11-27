"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Loader2, Sparkles } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

export function CheckoutButton({ isLoggedIn }: { isLoggedIn: boolean }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    if (!isLoggedIn) {
      router.push("/signin")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session")
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error("Checkout error:", error)
      setIsLoading(false)
    }
  }

  if (!isLoggedIn) {
    return (
      <Button asChild className="w-full">
        <Link href="/signin">
          <Sparkles className="mr-2 size-4" />
          Sign in to Purchase
        </Link>
      </Button>
    )
  }

  return (
    <Button onClick={handleCheckout} disabled={isLoading} className="w-full">
      {isLoading ? (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          Redirecting to checkout...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 size-4" />
          Get Pro Access
        </>
      )}
    </Button>
  )
}
