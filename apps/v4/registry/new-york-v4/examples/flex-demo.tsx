"use client"

import Flex from "@/registry/new-york-v4/ui/flex"

export default function FlexDemo() {
  return (
    <Flex justify="center" align="center" gap="lg" className="w-full p-8">
      <div className="bg-card border-border text-foreground flex size-16 items-center justify-center rounded-full border shadow-md">
        <span className="text-xl font-semibold">1</span>
      </div>
      <div className="bg-card border-border text-foreground flex size-16 items-center justify-center rounded-full border shadow-md">
        <span className="text-xl font-semibold">2</span>
      </div>
      <div className="bg-card border-border text-foreground flex size-16 items-center justify-center rounded-full border shadow-md">
        <span className="text-xl font-semibold">3</span>
      </div>
    </Flex>
  )
}
