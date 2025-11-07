"use client"

import { UnicornWrapper } from "@/registry/new-york-v4/ui/unicorn-wrapper"

export default function UnicornWrapperDemo() {
  return (
    <div className="h-[400px] w-full">
      <UnicornWrapper
        className="h-full w-full"
        sceneName="your-scene-name"
        sceneId="your-scene-id"
      />
    </div>
  )
}
