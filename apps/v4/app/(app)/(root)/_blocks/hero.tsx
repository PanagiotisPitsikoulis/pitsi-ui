import { RiArrowRightLine, RiGithubFill } from "@remixicon/react"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import Flex from "@/registry/new-york-v4/ui/flex"
import Typography from "@/registry/new-york-v4/ui/typography"

import GridContainer from "../_components/grid-container"
import { Safari } from "../_components/safari"

export function HeroLines() {
  return (
    <section className="relative h-[120svh] w-full overflow-y-clip">
      {/*Overlay*/}
      <div className="sr-hidden from-background-elevation-0 absolute inset-x-0 bottom-0 z-10 h-1/5 w-full bg-gradient-to-t via-transparent to-transparent lg:h-2/5"></div>
      <div className="sr-hidden from-background-elevation-0 absolute inset-y-0 right-0 z-10 h-full w-1/10 bg-gradient-to-l via-transparent to-transparent lg:w-2/3"></div>

      <Flex direction="col" align="start" gap="2xl">
        {/*Typography*/}
        <Flex direction="col" align="start" gap="2xl">
          {/* Badge */}
          <Badge variant={"secondary"}>
            shadcn/ui extended for landing pages
          </Badge>

          {/* Heading */}
          <Flex direction="col" align="start" gap="lg" className="max-w-xl">
            <Typography as="h1" variant="h2" className="text-text-strength-900">
              Build Beautiful Landing Pages, Faster
            </Typography>
            <Typography
              as="p"
              variant="paragraph-lg"
              className="text-text-strength-600 max-w-lg"
            >
              The components you love, extended with layouts, blocks, and the
              polish your landing pages deserve. Copy, paste, ship.
            </Typography>
          </Flex>

          {/* CTA Buttons */}
          <GridContainer className="">
            <Flex direction="row" gap="md" align="center" className="flex-wrap">
              <Button size="default" className="group">
                Start Copy Pasting
                <RiArrowRightLine className="size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="default" variant="outline" className="">
                <RiGithubFill className="size-5" />
                Star on GitHub
              </Button>
            </Flex>
          </GridContainer>
        </Flex>
        <Safari
          className="relative -z-10 -mt-[12rem] ml-[18rem] w-full min-w-[85rem] select-none"
          isSkewed
        >
          <div className="h-[50rem] w-full">
            <div className="shadow-s bg-background-elevation-2 border-border-elevation-2 h-[50rem] w-full rounded-xl border"></div>
          </div>
        </Safari>
      </Flex>
    </section>
  )
}
