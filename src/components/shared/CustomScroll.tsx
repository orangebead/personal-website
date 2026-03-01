import { ScrollProgress } from "@/components/shared/ScrollProgress"

export function CustomScrollProgress() {
  return (
    <ScrollProgress
      className="rounded-lg fixed top-0 z-50 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
    />
  )
}