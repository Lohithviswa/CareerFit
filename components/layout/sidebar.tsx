"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  LineChart,
  Sparkles,
  TriangleAlert,
  Map,
  FileText,
  Briefcase,
  KanbanSquare,
  Settings,
  Compass,
} from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_SECTIONS: {
  label: string
  items: { href: string; label: string; icon: React.ComponentType<{ className?: string }> }[]
}[] = [
  {
    label: "Career Intelligence",
    items: [
      { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
      { href: "/dashboard/career-analysis", label: "Career Analysis", icon: LineChart },
      { href: "/dashboard/skills", label: "Skills", icon: Sparkles },
      { href: "/dashboard/skill-gaps", label: "Skill Gaps", icon: TriangleAlert },
      { href: "/dashboard/roadmap", label: "Roadmap", icon: Map },
      { href: "/dashboard/resume", label: "Resume", icon: FileText },
    ],
  },
  {
    label: "Jobs & Applications",
    items: [
      { href: "/dashboard/jobs", label: "Jobs", icon: Briefcase },
      { href: "/dashboard/applications", label: "Applications", icon: KanbanSquare },
    ],
  },
  {
    label: "Account",
    items: [{ href: "/dashboard/settings", label: "Settings", icon: Settings }],
  },
]

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === "/dashboard") return pathname === "/dashboard"
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="flex h-16 items-center gap-2.5 border-b border-sidebar-border px-6">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Compass className="size-5" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-sidebar-foreground">CareerFit AI</span>
          <span className="text-xs text-muted-foreground">Career Intelligence</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {NAV_SECTIONS.map((section) => (
          <div key={section.label} className="mb-5">
            <p className="px-3 pb-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
              {section.label}
            </p>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item) => {
                const active = isActive(item.href)
                const Icon = item.icon
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        active
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      <Icon className="size-4 shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
            AM
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium text-sidebar-foreground">Alex Morgan</span>
            <span className="text-xs text-muted-foreground">Data Scientist track</span>
          </div>
        </div>
      </div>
    </div>
  )
}
