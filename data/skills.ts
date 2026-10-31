export type SkillGroup = { title: string; icon: "database" | "query" | "code" | "quality" | "tools"; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "Data Engineering", icon: "database", items: ["Snowflake", "ETL / ELT", "Data Pipelines", "Data Ingestion", "Data Transformation", "Data Modeling"] },
  { title: "Database & Querying", icon: "query", items: ["SQL", "Complex Queries", "Joins", "CTEs", "Views", "Query Optimization"] },
  { title: "Programming", icon: "code", items: ["Python", "Data Processing", "Data Validation"] },
  { title: "Data Quality", icon: "quality", items: ["Data Reconciliation", "Data Cleaning", "Data Validation", "Reporting"] },
  // Add only tools that appear on the resume; the card is hidden while this list is empty.
  { title: "Tools & Platforms", icon: "tools", items: [] },
];
