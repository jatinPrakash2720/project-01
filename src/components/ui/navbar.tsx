"use client"

import * as React from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type MobileNavProps = {
  nav: {
    name: string
    items: {
      label: string
      href: string
    }[]
  }[]
  onNavigate?: (href: string) => void
}

export function MobileNav({ nav, onNavigate }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)

  const handleNavigate = (href: string) => {
    setOpen(false)
    if (onNavigate) {
      onNavigate(href)
      return
    }
    if (href.startsWith("#")) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Popover modal open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "extend-touch-target size-8 touch-manipulation items-center justify-start gap-2.5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent md:hidden",
          )}
        >
          <div className="relative flex items-center justify-center">
            <div className="relative size-4">
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                  open ? "top-[0.4rem] -rotate-45" : "top-1",
                )}
              />
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                  open ? "top-[0.4rem] rotate-45" : "top-2.5",
                )}
              />
            </div>
            <span className="sr-only">Toggle Menu</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        alignOffset={-16}
        side="bottom"
        sideOffset={4}
        className="bg-background/90 no-scrollbar h-[var(--radix-popover-content-available-height)] w-[var(--radix-popover-content-available-width)] overflow-y-auto rounded-none border-none p-0 shadow-none backdrop-blur duration-100"
      >
        <div className="flex flex-col gap-12 overflow-auto px-6 py-6">
          {nav.map((category, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <p className="text-muted-foreground text-sm font-medium">
                {category.name}
              </p>
              <div className="flex flex-col gap-3">
                {category.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    type="button"
                    className="text-foreground cursor-pointer border-none bg-transparent p-0 text-left text-2xl font-medium"
                    onClick={() => handleNavigate(item.href)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
