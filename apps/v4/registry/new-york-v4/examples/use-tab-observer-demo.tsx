"use client"

import { useState } from "react"

import { useTabObserver } from "@/registry/new-york-v4/hooks/use-tab-observer"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

export default function UseTabObserverDemo() {
  const [activeTab, setActiveTab] = useState<number>(0)
  const { listRef, mounted } = useTabObserver({
    onActiveTabChange: (index) => {
      setActiveTab(index)
    },
  })

  return (
    <div className="space-y-4">
      <Tabs defaultValue="account">
        <TabsList ref={listRef}>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p className="text-muted-foreground text-sm">
            Make changes to your account here.
          </p>
        </TabsContent>
        <TabsContent value="password">
          <p className="text-muted-foreground text-sm">
            Change your password here.
          </p>
        </TabsContent>
        <TabsContent value="settings">
          <p className="text-muted-foreground text-sm">
            Manage your settings here.
          </p>
        </TabsContent>
      </Tabs>

      {mounted && (
        <div className="bg-muted rounded-lg p-4">
          <p className="text-sm">
            <span className="font-semibold">Active tab index:</span> {activeTab}
          </p>
        </div>
      )}
    </div>
  )
}
