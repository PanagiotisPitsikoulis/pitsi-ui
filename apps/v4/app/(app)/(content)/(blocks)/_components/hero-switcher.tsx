"use client"

import { Layers2 } from "@/lib/icons"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

interface HeroSwitcherProps {
  heroOptions: string[]
  selectedHero: string
  onHeroChange: (hero: string) => void
  defaultHero: string
}

export function HeroSwitcher({
  heroOptions,
  selectedHero,
  onHeroChange,
  defaultHero,
}: HeroSwitcherProps) {
  if (heroOptions.length <= 1) return null

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors">
            <Layers2 className="size-4" />
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs">
          Switch Hero Style
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={selectedHero}
          onValueChange={onHeroChange}
        >
          {heroOptions.map((hero) => (
            <DropdownMenuRadioItem key={hero} value={hero}>
              <span className="flex items-center gap-2">
                {hero}
                {hero === defaultHero && (
                  <span className="text-muted-foreground text-xs">
                    (default)
                  </span>
                )}
              </span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
