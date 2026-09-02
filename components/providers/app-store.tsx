"use client"

import * as React from "react"
import type { Application, ApplicationStatus, Job } from "@/lib/types"
import { MOCK_JOBS } from "@/lib/mock/jobs"
import { MOCK_APPLICATIONS } from "@/lib/mock/applications"

// Client-side store seeding from mock data. In a future backend this becomes
// SWR-backed data with mutations posting to the FastAPI service.

interface AppStoreValue {
  jobs: Job[]
  applications: Application[]
  savedJobIds: string[]
  isSaved: (jobId: string) => boolean
  toggleSave: (jobId: string) => void
  saveJob: (jobId: string) => void
  createApplication: (jobId: string, resumeVersion: string) => Application
  updateApplicationStatus: (applicationId: string, status: ApplicationStatus) => void
  updateApplication: (applicationId: string, patch: Partial<Application>) => void
  getApplicationByJob: (jobId: string) => Application | undefined
}

const AppStoreContext = React.createContext<AppStoreValue | null>(null)

function isoToday() {
  return new Date().toISOString().slice(0, 10)
}

export function AppStoreProvider({ children }: { children: React.ReactNode }) {
  const [applications, setApplications] = React.useState<Application[]>(MOCK_APPLICATIONS)

  // Saved jobs are derived from applications with a "saved" or later status,
  // but we also track explicit saves that have not become applications yet.
  const [savedJobIds, setSavedJobIds] = React.useState<string[]>(() => {
    const fromApps = MOCK_APPLICATIONS.map((a) => a.jobId)
    return Array.from(new Set(["job-015", "job-004", ...fromApps]))
  })

  const isSaved = React.useCallback((jobId: string) => savedJobIds.includes(jobId), [savedJobIds])

  const saveJob = React.useCallback((jobId: string) => {
    setSavedJobIds((prev) => (prev.includes(jobId) ? prev : [...prev, jobId]))
    setApplications((prev) => {
      if (prev.some((a) => a.jobId === jobId)) return prev
      const newApp: Application = {
        id: `app-${Math.random().toString(36).slice(2, 8)}`,
        jobId,
        status: "saved",
        appliedDate: null,
        resumeVersion: "—",
        coverLetterVersion: "—",
        notes: "",
        followUpDate: null,
        timeline: [{ status: "saved", date: isoToday() }],
      }
      return [...prev, newApp]
    })
  }, [])

  const toggleSave = React.useCallback(
    (jobId: string) => {
      if (savedJobIds.includes(jobId)) {
        setSavedJobIds((prev) => prev.filter((id) => id !== jobId))
      } else {
        saveJob(jobId)
      }
    },
    [savedJobIds, saveJob],
  )

  const createApplication = React.useCallback((jobId: string, resumeVersion: string) => {
    let created: Application
    setApplications((prev) => {
      const existing = prev.find((a) => a.jobId === jobId)
      if (existing) {
        created = {
          ...existing,
          status: "applied",
          appliedDate: isoToday(),
          resumeVersion,
          timeline: existing.timeline.some((t) => t.status === "applied")
            ? existing.timeline
            : [...existing.timeline, { status: "applied", date: isoToday() }],
        }
        return prev.map((a) => (a.jobId === jobId ? created : a))
      }
      created = {
        id: `app-${Math.random().toString(36).slice(2, 8)}`,
        jobId,
        status: "applied",
        appliedDate: isoToday(),
        resumeVersion,
        coverLetterVersion: "—",
        notes: "",
        followUpDate: null,
        timeline: [
          { status: "saved", date: isoToday() },
          { status: "applied", date: isoToday() },
        ],
      }
      return [...prev, created]
    })
    setSavedJobIds((prev) => (prev.includes(jobId) ? prev : [...prev, jobId]))
    // @ts-expect-error assigned synchronously inside setState updater
    return created
  }, [])

  const updateApplicationStatus = React.useCallback((applicationId: string, status: ApplicationStatus) => {
    setApplications((prev) =>
      prev.map((a) => {
        if (a.id !== applicationId) return a
        const alreadyLogged = a.timeline.some((t) => t.status === status)
        return {
          ...a,
          status,
          appliedDate:
            status === "applied" && !a.appliedDate ? isoToday() : a.appliedDate,
          timeline: alreadyLogged ? a.timeline : [...a.timeline, { status, date: isoToday() }],
        }
      }),
    )
  }, [])

  const updateApplication = React.useCallback((applicationId: string, patch: Partial<Application>) => {
    setApplications((prev) => prev.map((a) => (a.id === applicationId ? { ...a, ...patch } : a)))
  }, [])

  const getApplicationByJob = React.useCallback(
    (jobId: string) => applications.find((a) => a.jobId === jobId),
    [applications],
  )

  const value: AppStoreValue = {
    jobs: MOCK_JOBS,
    applications,
    savedJobIds,
    isSaved,
    toggleSave,
    saveJob,
    createApplication,
    updateApplicationStatus,
    updateApplication,
    getApplicationByJob,
  }

  return <AppStoreContext.Provider value={value}>{children}</AppStoreContext.Provider>
}

export function useAppStore() {
  const ctx = React.useContext(AppStoreContext)
  if (!ctx) throw new Error("useAppStore must be used within AppStoreProvider")
  return ctx
}
