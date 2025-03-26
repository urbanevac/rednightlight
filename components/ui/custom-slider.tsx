"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { Sun, SunDim } from "lucide-react"

import { cn } from "@/lib/utils"

const CustomSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <div className="relative w-full px-1">
    {/* Min brightness icon */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 text-white/60">
      <SunDim className="h-4 w-4" />
    </div>

    {/* Max brightness icon */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 text-white">
      <Sun className="h-5 w-5" />
    </div>

    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full touch-none select-none items-center px-2", className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden rounded-full bg-white/20">
        <SliderPrimitive.Range className="absolute h-full bg-white/70" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-7 w-7 rounded-full border-2 border-white bg-black ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  </div>
))
CustomSlider.displayName = SliderPrimitive.Root.displayName

export { CustomSlider }

