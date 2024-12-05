"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}>
    <SliderPrimitive.Track
      className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-brand-main/50 dark:bg-zinc-50/20">
      <SliderPrimitive.Range className="absolute h-full bg-brand-main dark:bg-zinc-50" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-3 w-3 rounded-full border border-brand-main bg-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-main disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-50/50 dark:bg-braring-brand-main dark:focus-visible:ring-zinc-300" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
