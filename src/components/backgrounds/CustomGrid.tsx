"use client"
import { InteractiveGridPattern } from "@/components/backgrounds/Grid"
import { cn } from "@/lib/utils"

interface InteractiveGridProps {
  width?: number
  height?: number
  squares?: [number, number]
  gradientSize?: string
  className?: string
  squaresClassName?: string
}

export function InteractiveGrid({
  width = 40,
  height = 40,
  squares = [40, 40],
  gradientSize = "600px",
  className,
  squaresClassName,
}: InteractiveGridProps) {
  return (
    <InteractiveGridPattern
      width={width}
      height={height}
      squares={squares}
      className={cn(
        "absolute inset-0 h-full w-full",
        `[mask-image:radial-gradient(${gradientSize}_circle_at_center,white,transparent)]`,
        className
      )}
      squaresClassName={cn(
        "hover:fill-zinc-600/20 dark:hover:fill-zinc-400/20",
        squaresClassName
      )}
    />
  )
}