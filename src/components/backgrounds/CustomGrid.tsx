"use client"
import { InteractiveGridPattern } from "@/components/backgrounds/Grid"
import { cn } from "@/lib/utils"

interface InteractiveGridProps {
  width?: number
  height?: number
  squares?: [number, number]
  className?: string
  squaresClassName?: string
}

export function InteractiveGrid({
  width = 40,
  height = 40,
  // Increased to 100 horizontal squares so it covers 4000px, spanning any screen width
  squares = [100, 50], 
  className,
  squaresClassName,
}: InteractiveGridProps) {
  return (
    <InteractiveGridPattern
      width={width}
      height={height}
      squares={squares}
      className={cn(
        // Use a linear gradient to keep the full width while fading out at the bottom
        "[mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]",
        className
      )}
      squaresClassName={cn(
        "hover:fill-gray-400/30",
        squaresClassName
      )}
    />
  )
}