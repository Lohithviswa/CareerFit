import type React from "react"
import { AppStoreProvider } from "@/components/providers/app-store"
import { DashboardShell } from "@/components/layout/dashboard-shell"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppStoreProvider>
      <DashboardShell>{children}</DashboardShell>
    </AppStoreProvider>
  )
}
