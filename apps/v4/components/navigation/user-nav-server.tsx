import { Suspense } from "react"
import Link from "next/link"
import { RiUserLine } from '@remixicon/react'

import { getCurrentUser } from "@/lib/server/user"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

import { UserNav } from "./user-nav"

/**
 * Server component that fetches user data
 * This will be prerendered with PPR while the dynamic user data streams in
 */
async function UserNavAsync() {
  const user = await getCurrentUser()

  if (!user) {
    return (
      <Button variant="ghost" size="sm" className="h-8" asChild>
        <Link href="/signin">
          <UserIcon className="mr-2 size-4" />
          Sign in
        </Link>
      </Button>
    )
  }

  return <UserNav user={user} />
}

/**
 * Loading fallback for the user nav
 */
function UserNavLoading() {
  return <Skeleton className="size-8 rounded-full" />
}

/**
 * User navigation with Suspense boundary for PPR
 * The static shell renders immediately while user data streams in
 */
export function UserNavServer() {
  return (
    <Suspense fallback={<UserNavLoading />}>
      <UserNavAsync />
    </Suspense>
  )
}
