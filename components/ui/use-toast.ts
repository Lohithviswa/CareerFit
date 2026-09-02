"use client"

import * as React from "react"

export type ToastItem = {
  id: string
  title: string
  description?: string
  variant?: "default" | "success" | "destructive"
}

type Listener = (toasts: ToastItem[]) => void

let toasts: ToastItem[] = []
const listeners = new Set<Listener>()

function emit() {
  for (const listener of listeners) listener(toasts)
}

export function toast(input: Omit<ToastItem, "id">) {
  const id = Math.random().toString(36).slice(2)
  toasts = [...toasts, { id, ...input }]
  emit()
  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id)
    emit()
  }, 3500)
}

export function dismissToast(id: string) {
  toasts = toasts.filter((t) => t.id !== id)
  emit()
}

export function useToastStore() {
  const [state, setState] = React.useState<ToastItem[]>(toasts)
  React.useEffect(() => {
    const listener: Listener = (t) => setState(t)
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }, [])
  return state
}
