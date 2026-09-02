/**
 * Service abstractions for CareerFit AI.
 *
 * These are intentionally thin placeholders that currently read from mock data.
 * They define the contract the app depends on so a future FastAPI backend can be
 * dropped in without changing the UI. Planned pipeline:
 *
 *   Job Sources -> Job Collection -> Normalisation -> Deduplication
 *     -> Sponsorship Analysis -> CareerFit Matching -> Job Database -> Frontend
 *
 * No scraping, background workers, or automatic submissions are implemented.
 */

import type { Application, Job, SponsorshipConfidence } from "@/lib/types"
import { MOCK_JOBS } from "@/lib/mock/jobs"
import { MOCK_APPLICATIONS } from "@/lib/mock/applications"

// Simulate async access so call sites already treat this as a network boundary.
function delay<T>(value: T, ms = 0): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms))
}

export const JobService = {
  /** List jobs. Future: GET /jobs with server-side filtering. */
  async list(): Promise<Job[]> {
    return delay(MOCK_JOBS)
  },
  /** Fetch a single job by id. Future: GET /jobs/{id}. */
  async getById(id: string): Promise<Job | undefined> {
    return delay(MOCK_JOBS.find((job) => job.id === id))
  },
}

export const ApplicationService = {
  /** List applications. Future: GET /applications for the current user. */
  async list(): Promise<Application[]> {
    return delay(MOCK_APPLICATIONS)
  },
  /** Fetch a single application. Future: GET /applications/{id}. */
  async getById(id: string): Promise<Application | undefined> {
    return delay(MOCK_APPLICATIONS.find((app) => app.id === id))
  },
}

export const SponsorshipService = {
  /**
   * Returns sponsorship indicators for a job.
   * Future: cross-reference the UK sponsor register + job-level evidence.
   * NOTE: indicators only — never a guarantee of visa sponsorship.
   */
  async analyse(job: Job): Promise<{
    confidence: SponsorshipConfidence
    evidence: Job["sponsorshipEvidence"]
  }> {
    return delay({ confidence: job.sponsorshipConfidence, evidence: job.sponsorshipEvidence })
  },
}

export const JobMatchingService = {
  /**
   * Returns the CareerFit score + breakdown for a job against the user profile.
   * Future: compute from the user's parsed resume and skills profile.
   * NOTE: illustrative score for this prototype — not scientifically validated.
   */
  async score(job: Job): Promise<{ careerFit: number; breakdown: Job["careerFitBreakdown"] }> {
    return delay({ careerFit: job.careerFit, breakdown: job.careerFitBreakdown })
  },
}
