"use client"

import { CheckCircle2, Info, X, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToastStore, dismissToast } from "./use-toast"

export function Toaster() {
  const toasts = useToastStore()

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[100] flex w-full max-w-sm flex-col gap-2">
      {toasts.map((t) => {
        const Icon = t.variant === "destructive" ? AlertTriangle : t.variant === "success" ? CheckCircle2 : Info
        return (
          <div
            key={t.id}
            role="status"
            className={cn(
              "pointer-events-auto flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-lg",
            )}
          >
            <Icon
              className={cn(
                "mt-0.5 size-5 shrink-0",
                t.variant === "destructive"
                  ? "text-destructive"
                  : t.variant === "success"
                    ? "text-success"
                    : "text-primary",
              )}
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{t.title}</p>
              {t.description ? <p className="mt-0.5 text-sm text-muted-foreground">{t.description}</p> : null}
            </div>
            <button
              onClick={() => dismissToast(t.id)}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Dismiss notification"
            >
              <X className="size-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
