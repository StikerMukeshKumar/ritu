export type Role = {
  role: string; company?: string; period: string; overview: string;
  responsibilities: string[]; focus: string[]; impact: string;
};

// Review wording against the resume before publishing. No metrics are stated on purpose.
export const experience: Role[] = [
  {
    role: "Data Analyst",
    period: "November 2024 – Present",
    overview: "Analyses operational and transactional data to produce validated, decision-ready reporting.",
    responsibilities: [
      "Write SQL queries to extract, join and analyse data from multiple sources.",
      "Reconcile and validate records to identify and explain discrepancies.",
      "Clean and transform data into consistent datasets for reporting.",
      "Prepare reports that make findings easy for business stakeholders to act on.",
    ],
    focus: ["SQL", "Data Reconciliation", "Data Validation", "Reporting"],
    impact: "Gives business teams reliable, validated numbers and a clear view of where data does not agree.",
  },
  {
    role: "Associate Business Analyst",
    company: "OptiMinds",
    period: "August 2023 – October 2024",
    overview: "Supported business analysis work, translating business questions into data-backed answers.",
    responsibilities: [
      "Analysed business data to support requirements and decisions.",
      "Used SQL for data analysis and ad-hoc querying.",
      "Prepared reporting and documentation for stakeholders.",
    ],
    focus: ["Business Analysis", "SQL", "Reporting"],
    impact: "Built the analytical and business-problem-solving foundation that now underpins her data engineering focus.",
  },
];
