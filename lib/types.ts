// Core domain types for CareerFit AI.
// These are designed to map cleanly onto a future FastAPI backend.

export type SponsorshipStatus =
  | "sponsorship-likely"
  | "sponsorship-mentioned"
  | "licensed-sponsor"
  | "unknown"

export type SponsorshipConfidence = "high" | "medium" | "low"

export type JobType = "full-time" | "part-time" | "contract" | "permanent"

export type ExperienceLevel = "graduate" | "entry" | "junior" | "mid" | "senior"

export type SkillState = "matched" | "transferable" | "gap"

export interface JobSkill {
  name: string
  state: SkillState
}

export interface TransferableSkill {
  from: string
  to: string
  explanation: string
  evidence: "Resume" | "Skills Profile" | "Roadmap"
}

export interface SkillGap {
  skill: string
  importance: "high" | "medium" | "low"
  why: string
  nextStep: string
}

export interface CareerFitBreakdown {
  skillsMatch: number
  experienceMatch: number
  roleAlignment: number
  locationMatch: number
  sponsorshipSuitability: number
}

export interface SponsorshipEvidence {
  sponsorLicence: boolean
  jobLevelEvidence: boolean
  occupationRelevant: boolean
  salaryThresholdMet: boolean
  salaryValue: string
}

export interface Job {
  id: string
  title: string
  company: string
  location: string
  salary: string
  salaryMin: number
  jobType: JobType
  experienceLevel: ExperienceLevel
  postedDate: string // ISO date
  targetRole: string
  skills: JobSkill[]
  requiredSkills: string[]
  preferredSkills: string[]
  sponsorshipStatus: SponsorshipStatus
  sponsorshipConfidence: SponsorshipConfidence
  sponsorshipEvidence: SponsorshipEvidence
  careerFit: number
  careerFitBreakdown: CareerFitBreakdown
  transferableSkills: TransferableSkill[]
  skillGaps: SkillGap[]
  description: string
  responsibilities: string[]
  recommendation: {
    verdict: string
    detail: string
  }
  source: string
  url: string
}

export type ApplicationStatus =
  | "saved"
  | "applied"
  | "assessment"
  | "interview"
  | "final-interview"
  | "offer"
  | "rejected"
  | "withdrawn"

export interface TimelineEntry {
  status: ApplicationStatus
  date: string | null
  note?: string
}

export interface Application {
  id: string
  jobId: string
  status: ApplicationStatus
  appliedDate: string | null
  resumeVersion: string
  coverLetterVersion: string
  notes: string
  followUpDate: string | null
  timeline: TimelineEntry[]
}
