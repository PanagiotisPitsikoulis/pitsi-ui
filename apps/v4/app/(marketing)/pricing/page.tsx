"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { useSession } from "@/lib/client/auth"
import Flex from "@/registry/new-york-v4/ui/flex"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"
import Typography from "@/registry/new-york-v4/ui/typography"

function PricingContent() {
  const { data: session, isPending } = useSession()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const success = searchParams.get("success")
  const canceled = searchParams.get("canceled")

  const handleUpgrade = async () => {
    if (!session) {
      router.push("/signin")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
      })

      const data = await response.json()

      if (response.ok && data.url) {
        window.location.href = data.url
      } else {
        alert(data.error || "Failed to create checkout session")
        setLoading(false)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Something went wrong. Please try again.")
      setLoading(false)
    }
  }

  if (isPending) {
    return (
      <Flex
        direction="col"
        align="center"
        justify="center"
        className="min-h-screen"
      >
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[200px] w-[400px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[400px]" />
            <Skeleton className="h-4 w-[350px]" />
          </div>
        </div>
      </Flex>
    )
  }

  return (
    <Flex direction="col" align="center" className="min-h-screen px-4 py-20">
      <Flex direction="col" align="center" className="w-full max-w-4xl">
        <Typography variant="h1" as="h1" className="text-center">
          Upgrade to Pro
        </Typography>
        <Spacer size="sm" />
        <Typography
          variant="paragraph-lg"
          className="text-text-strength-500 text-center"
        >
          Get lifetime access to all premium features
        </Typography>

        <Spacer size="2xl" />

        {success && (
          <Flex
            direction="col"
            className="mb-8 w-full max-w-md rounded-lg border border-green-200 bg-green-50 p-6"
          >
            <Typography variant="label-lg" className="text-green-800">
              Payment successful! 🎉
            </Typography>
            <Typography variant="paragraph-sm" className="mt-2 text-green-700">
              Welcome to Pro! Your account has been upgraded.
            </Typography>
          </Flex>
        )}

        {canceled && (
          <Flex
            direction="col"
            className="mb-8 w-full max-w-md rounded-lg border border-yellow-200 bg-yellow-50 p-6"
          >
            <Typography variant="label-lg" className="text-yellow-800">
              Payment canceled
            </Typography>
            <Typography variant="paragraph-sm" className="mt-2 text-yellow-700">
              You can try again when you{"'"}re ready.
            </Typography>
          </Flex>
        )}

        {/* Pricing Card */}
        <Flex
          direction="col"
          className="border-border-strength-200 w-full max-w-md rounded-xl border-2 bg-white p-8 shadow-lg"
        >
          <Flex direction="col" align="center">
            <Typography variant="label-xl" className="text-text-strength-900">
              Pro Plan
            </Typography>
            <Spacer size="md" />
            <Flex align="baseline" gap="xs">
              <Typography variant="h1" className="font-bold">
                €99
              </Typography>
              <Typography
                variant="paragraph-lg"
                className="text-text-strength-500"
              >
                one-time
              </Typography>
            </Flex>
          </Flex>

          <Spacer size="xl" />

          {/* Features List */}
          <Flex direction="col" gap="sm">
            <Flex align="start" gap="sm">
              <Typography variant="paragraph-lg">✓</Typography>
              <Typography variant="paragraph-md">
                Lifetime access to all blocks
              </Typography>
            </Flex>
            <Flex align="start" gap="sm">
              <Typography variant="paragraph-lg">✓</Typography>
              <Typography variant="paragraph-md">
                Download unlimited blocks
              </Typography>
            </Flex>
            <Flex align="start" gap="sm">
              <Typography variant="paragraph-lg">✓</Typography>
              <Typography variant="paragraph-md">
                Access to new blocks as they{"'"}re released
              </Typography>
            </Flex>
            <Flex align="start" gap="sm">
              <Typography variant="paragraph-lg">✓</Typography>
              <Typography variant="paragraph-md">Premium support</Typography>
            </Flex>
            <Flex align="start" gap="sm">
              <Typography variant="paragraph-lg">✓</Typography>
              <Typography variant="paragraph-md">
                Commercial license included
              </Typography>
            </Flex>
          </Flex>

          <Spacer size="xl" />

          {(session?.user as any)?.isPro ? (
            <button
              disabled
              className="w-full cursor-not-allowed rounded-lg bg-gray-200 px-6 py-3 font-semibold text-gray-600"
            >
              Already Pro ✓
            </button>
          ) : (
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="bg-text-strength-900 hover:bg-text-strength-800 w-full rounded-lg px-6 py-3 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Processing..." : "Upgrade to Pro"}
            </button>
          )}
        </Flex>

        <Spacer size="lg" />

        <Typography
          variant="paragraph-sm"
          className="text-text-strength-500 text-center"
        >
          Secure payment powered by Stripe
        </Typography>
      </Flex>
    </Flex>
  )
}

export default function PricingPage() {
  return (
    <Suspense
      fallback={
        <Flex
          direction="col"
          align="center"
          justify="center"
          className="min-h-screen"
        >
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-[400px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[400px]" />
              <Skeleton className="h-4 w-[350px]" />
            </div>
          </div>
        </Flex>
      }
    >
      <PricingContent />
    </Suspense>
  )
}
