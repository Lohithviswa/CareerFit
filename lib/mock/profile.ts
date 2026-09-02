// Mock CareerFit profile data for the existing career-analysis modules.

export const USER_PROFILE = {
  name: "Alex Morgan",
  targetRole: "Data Scientist",
  headline: "Analyst transitioning into data science",
  location: "Edinburgh, UK",
  summary:
    "Analytical professional with a background in reporting and ETL, building toward a data science career with a focus on machine learning and statistical modelling.",
}

export const RESUME_VERSIONS = [
  { id: "cv-ds-v3", name: "Data Scientist CV v3", role: "Data Scientist", updated: "2026-08-30", isDefault: true },
  { id: "cv-da-v2", name: "Data Analyst CV v2", role: "Data Analyst", updated: "2026-08-18" },
  { id: "cv-ai-v1", name: "AI Engineer CV v1", role: "AI Engineer", updated: "2026-08-06" },
  { id: "cv-de-v1", name: "Data Engineer CV v1", role: "Data Engineer", updated: "2026-08-11" },
  { id: "cv-ml-v1", name: "ML Engineer CV v1", role: "Machine Learning Engineer", updated: "2026-08-24" },
]

export const SKILLS_PROFILE = [
  { name: "SQL", level: 90, category: "Core", evidence: "Resume" },
  { name: "Python", level: 82, category: "Core", evidence: "Resume" },
  { name: "ETL", level: 80, category: "Core", evidence: "Resume" },
  { name: "Power BI", level: 78, category: "Analytics", evidence: "Resume" },
  { name: "Machine Learning", level: 62, category: "Emerging", evidence: "Skills Profile" },
  { name: "Statistics", level: 48, category: "Developing", evidence: "Skills Profile" },
  { name: "Azure", level: 40, category: "Developing", evidence: "Skills Profile" },
  { name: "AWS", level: 30, category: "Developing", evidence: "Skills Profile" },
]

export const SKILL_GAPS_PROFILE = [
  {
    skill: "Statistics",
    importance: "high" as const,
    why: "Central to data science roles for modelling, hypothesis testing and interpreting results responsibly.",
    nextStep: "Complete an applied statistics project and add measurable evidence to your portfolio.",
    demandCount: 9,
  },
  {
    skill: "Cloud (Azure / AWS)",
    importance: "high" as const,
    why: "Most target roles expect models to be deployed and scaled in the cloud.",
    nextStep: "Deploy one model end to end and document the architecture.",
    demandCount: 8,
  },
  {
    skill: "Experiment Design",
    importance: "medium" as const,
    why: "Needed to validate model impact through reliable A/B tests.",
    nextStep: "Write up an experiment plan for a past project.",
    demandCount: 4,
  },
  {
    skill: "Spark",
    importance: "medium" as const,
    why: "Required for data engineering and large-scale processing roles.",
    nextStep: "Build a small Spark job on a public dataset.",
    demandCount: 5,
  },
]

export const ROADMAP_STEPS = [
  {
    phase: "Now",
    title: "Strengthen statistics foundations",
    detail: "Complete an applied statistics project focused on hypothesis testing and regression.",
    status: "in-progress" as const,
  },
  {
    phase: "Next",
    title: "Ship a deployed ML project",
    detail: "Deploy a model to Azure or AWS and document the full pipeline in your portfolio.",
    status: "upcoming" as const,
  },
  {
    phase: "Next",
    title: "Add experiment design evidence",
    detail: "Document an A/B test plan and outcomes to demonstrate rigour.",
    status: "upcoming" as const,
  },
  {
    phase: "Later",
    title: "Target senior data science roles",
    detail: "Once cloud and statistics evidence is in place, extend applications to senior roles.",
    status: "upcoming" as const,
  },
]

export const CAREER_ANALYSIS = {
  overallReadiness: 78,
  strengths: [
    "Strong SQL and data preparation foundation backed by resume evidence.",
    "Solid Python scripting that transfers into machine learning workflows.",
    "Clear reporting and stakeholder communication experience.",
  ],
  focusAreas: [
    "Deepen statistics for modelling and interpretation.",
    "Add cloud deployment evidence (Azure or AWS).",
    "Demonstrate experiment design on a real project.",
  ],
  roleAlignment: [
    { role: "Data Analyst", alignment: 88 },
    { role: "Data Scientist", alignment: 78 },
    { role: "Data Engineer", alignment: 71 },
    { role: "Machine Learning Engineer", alignment: 64 },
  ],
}
