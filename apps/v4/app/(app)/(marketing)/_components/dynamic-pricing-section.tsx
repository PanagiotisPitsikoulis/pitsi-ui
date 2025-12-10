import { getCurrentUser } from "@/lib/server/user"

import { PricingCardsSection } from "./pricing-cards-section"

export async function DynamicPricingSection() {
  const user = await getCurrentUser()
  return <PricingCardsSection user={user} />
}
