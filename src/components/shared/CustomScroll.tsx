import { ScrollProgress } from "@/components/shared/ScrollProgress"

export function CustomScrollProgress() {
  return (
    <ScrollProgress
      className="fixed top-0 z-50 h-1.5 rounded-lg bg-black dark:bg-white"
    />
  )
}