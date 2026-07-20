// src/components/shared/CustomDock.tsx
"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Dock, DockIcon } from "@/components/shared/Dock"

export type IconProps = React.HTMLAttributes<SVGElement>

export function DockDemo() {
  const [tooltip, setTooltip] = useState<string | null>(null)
  const router = useRouter()

  return (
    <div className="fixed bottom-10 left-0 right-0 flex flex-col items-center z-50 pointer-events-none">
      <Dock direction="middle" iconSize={56} iconMagnification={80} className="pointer-events-auto">

        <DockIcon
          onClick={() => router.push("/")}
          onMouseEnter={() => setTooltip("Home")}
          onMouseLeave={() => setTooltip(null)}
        >
          <Icons.home className="size-7" />
        </DockIcon>

        <DockIcon
          onClick={() => router.push("/experience")}
          onMouseEnter={() => setTooltip("Experience")}
          onMouseLeave={() => setTooltip(null)}
        >
          <Icons.briefcase className="size-7" />
        </DockIcon>

        <DockIcon
          onClick={() => router.push("/projects")}
          onMouseEnter={() => setTooltip("Archive")}
          onMouseLeave={() => setTooltip(null)}
        >
          <Icons.archive className="size-7" />
        </DockIcon>

        <DockIcon
          onClick={() => router.push("/contact")}
          onMouseEnter={() => setTooltip("Contact")}
          onMouseLeave={() => setTooltip(null)}
        >
          <Icons.contact className="size-7" />
        </DockIcon>

      </Dock>

      {/* Tooltip */}
      {tooltip && (
        <span className="absolute -top-8 rounded-md bg-foreground px-2 py-1 text-xs text-background pointer-events-none">
          {tooltip}
        </span>
      )}
    </div>
  )
}

const Icons = {
  home: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  briefcase: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  archive: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 8v13H3V8" />
      <path d="M1 3h22v5H1z" />
      <path d="M10 12h4" />
    </svg>
  ),
  contact: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  ),
}