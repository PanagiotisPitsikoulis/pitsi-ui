"use client"

import { UnicornWrapper } from "@/registry/new-york-v4/ui/unicorn-wrapper"

export default function UnicornWrapperDemo() {
  return (
    <div className="flex size-[400px] items-center justify-center overflow-hidden rounded-2xl">
      <UnicornWrapper
        className="h-full w-full"
        projectId="OpSYWgbtD97AYWlhMu2W"
        production
      />
    </div>
  )
}
