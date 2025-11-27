"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"

export function PricingToast() {
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const success = searchParams.get("success")
    const canceled = searchParams.get("canceled")

    if (success === "true") {
      toast.success("Payment successful!", {
        description:
          "Welcome to Pro! You now have access to all Pro components.",
      })
      // Clean up URL
      router.replace("/pricing", { scroll: false })
    }

    if (canceled === "true") {
      toast.info("Payment canceled", {
        description: "Your payment was canceled. No charges were made.",
      })
      // Clean up URL
      router.replace("/pricing", { scroll: false })
    }
  }, [searchParams, router])

  return null
}
