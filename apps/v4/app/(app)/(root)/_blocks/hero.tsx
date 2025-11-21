import Link from "next/link"
import { Announcement } from "@/components/ui/announcement"
import {
  PageActions,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { Button } from "@/registry/new-york-v4/ui/button"
import Flex from "@/registry/new-york-v4/ui/flex"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"
import Typography from "@/registry/new-york-v4/ui/typography"

import GridContainer from "../_components/grid-container"
import { Safari } from "../_components/safari"

export function HeroLines() {
  return (
    <section className="relative h-[120svh] w-full overflow-clip">
      {/* Overlays */}
      <div className="from-page via-page/50 pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/5 w-full bg-gradient-to-t to-transparent lg:h-2/5"></div>
      <div className="from-page via-page/50 pointer-events-none absolute inset-y-0 right-0 z-10 h-full w-1/5 bg-gradient-to-l to-transparent lg:w-2/5"></div>

      <Flex direction="col" align="start">
        {/*Typography*/}
        <Announcement />
        <Spacer size={"sm"} />
        <PageHeaderHeading className="max-w-4xl text-left">
          Build Beautiful Landing Pages, Faster
        </PageHeaderHeading>
        <Spacer size={"lg"} />
        <PageHeaderDescription className="text-left">
          The components you love, extended with layouts, blocks, and the polish
          your landing pages deserve. Copy, paste, ship.
        </PageHeaderDescription>
        <Spacer size={"sm"} />
        <PageActions className="items-start justify-start">
          <Button asChild size="sm">
            <Link href="/docs/installation">Start Copy Pasting</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/docs/components">View Components</Link>
          </Button>
        </PageActions>
        <Spacer size={"2xl"} />
        <Safari
          className="relative -z-10 -mt-[12rem] ml-[18rem] w-full min-w-[85rem] select-none"
          isSkewed
        >
          <div className="h-[50rem] w-full"></div>
        </Safari>
      </Flex>
    </section>
  )
}
