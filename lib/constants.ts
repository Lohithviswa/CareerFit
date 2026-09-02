import type {
  ApplicationStatus,
  ExperienceLevel,
  JobType,
  SponsorshipConfidence,
  SponsorshipStatus,
} from "./types"

export const TARGET_ROLES = [
  "Data Scientist",
  "Data Analyst",
  "Data Engineer",
  "Machine Learning Engineer",
  "Software Engineer",
  "AI Engineer",
]

export const SKILL_OPTIONS = [
  "Python",
  "SQL",
  "Machine Learning",
  "Power BI",
  "Java",
  "Azure",
  "AWS",
  "Statistics",
  "NLP",
  "Spark",
]

export const LOCATIONS = [
  "All UK",
  "Edinburgh",
  "Glasgow",
  "London",
  "Manchester",
  "Birmingham",
  "Leeds",
  "Bristol",
  "Remote UK",
]

export const SPONSORSHIP_FILTERS: { value: string; label: string }[] = [
  { value: "all", label: "All" },
  { value: "sponsorship-likely", label: "Sponsorship likely" },
  { value: "sponsorship-mentioned", label: "Sponsorship mentioned" },
  { value: "licensed-sponsor", label: "Licensed sponsor" },
]

export const JOB_TYPES: { value: JobType; label: string }[] = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "permanent", label: "Permanent" },
]

export const EXPERIENCE_LEVELS: { value: ExperienceLevel; label: string }[] = [
  { value: "graduate", label: "Graduate" },
  { value: "entry", label: "Entry level" },
  { value: "junior", label: "Junior" },
  { value: "mid", label: "Mid-level" },
  { value: "senior", label: "Senior" },
]

export const DATE_POSTED_FILTERS = [
  { value: "any", label: "Any time" },
  { value: "1", label: "Today" },
  { value: "3", label: "Last 3 days" },
  { value: "7", label: "Last 7 days" },
  { value: "30", label: "Last 30 days" },
]

export const SPONSORSHIP_STATUS_LABELS: Record<SponsorshipStatus, string> = {
  "sponsorship-likely": "Sponsorship likely",
  "sponsorship-mentioned": "Sponsorship mentioned",
  "licensed-sponsor": "Licensed sponsor",
  unknown: "Sponsorship unclear",
}

export const SPONSORSHIP_CONFIDENCE_LABELS: Record<SponsorshipConfidence, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
}

export const APPLICATION_STATUS_LABELS: Record<ApplicationStatus, string> = {
  saved: "Saved",
  applied: "Applied",
  assessment: "Assessment",
  interview: "Interview",
  "final-interview": "Final Interview",
  offer: "Offer",
  rejected: "Rejected",
  withdrawn: "Withdrawn",
}

// Ordered pipeline used for the Kanban board and timelines.
export const APPLICATION_PIPELINE: ApplicationStatus[] = [
  "saved",
  "applied",
  "assessment",
  "interview",
  "final-interview",
  "offer",
]

export const EXPERIENCE_LABELS: Record<ExperienceLevel, string> = {
  graduate: "Graduate",
  entry: "Entry level",
  junior: "Junior",
  mid: "Mid-level",
  senior: "Senior",
}

export const JOB_TYPE_LABELS: Record<JobType, string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
  permanent: "Permanent",
}
