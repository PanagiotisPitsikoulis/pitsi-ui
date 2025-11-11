"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useSession } from "@/lib/client/auth";
import Flex from "@/registry/components/flex/flex";
import { Spacer } from "@/registry/components/spacer/spacer";
import Typography from "@/registry/components/typography/typography";

function PricingContent() {
  const { data: session, isPending } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const canceled = searchParams.get("canceled");

  const handleUpgrade = async () => {
    if (!session) {
      router.push("/signin");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
      });

      const data = await response.json();

      if (response.ok && data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Failed to create checkout session");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <Flex
        direction="col"
        align="center"
        justify="center"
        className="min-h-screen"
      >
        <Typography variant="paragraph-lg">Loading...</Typography>
      </Flex>
    );
  }

  return (
    <Flex direction="col" align="center" className="min-h-screen py-20 px-4">
      <Flex direction="col" align="center" className="max-w-4xl w-full">
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
            className="w-full max-w-md p-6 bg-green-50 border border-green-200 rounded-lg mb-8"
          >
            <Typography variant="label-lg" className="text-green-800">
              Payment successful! 🎉
            </Typography>
            <Typography variant="paragraph-sm" className="text-green-700 mt-2">
              Welcome to Pro! Your account has been upgraded.
            </Typography>
          </Flex>
        )}

        {canceled && (
          <Flex
            direction="col"
            className="w-full max-w-md p-6 bg-yellow-50 border border-yellow-200 rounded-lg mb-8"
          >
            <Typography variant="label-lg" className="text-yellow-800">
              Payment canceled
            </Typography>
            <Typography variant="paragraph-sm" className="text-yellow-700 mt-2">
              You can try again when you're ready.
            </Typography>
          </Flex>
        )}

        {/* Pricing Card */}
        <Flex
          direction="col"
          className="w-full max-w-md p-8 bg-white border-2 border-border-strength-200 rounded-xl shadow-lg"
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
                Access to new blocks as they're released
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
              className="w-full py-3 px-6 bg-gray-200 text-gray-600 rounded-lg font-semibold cursor-not-allowed"
            >
              Already Pro ✓
            </button>
          ) : (
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="w-full py-3 px-6 bg-text-strength-900 text-white rounded-lg font-semibold hover:bg-text-strength-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
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
          <Typography variant="paragraph-lg">Loading...</Typography>
        </Flex>
      }
    >
      <PricingContent />
    </Suspense>
  );
}
