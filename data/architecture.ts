export const architecture = [
  { step: "Data Sources", text: "Operational databases, files and application exports are the raw starting point.", concepts: ["Source profiling", "Schema discovery"] },
  { step: "Data Ingestion", text: "Files and records are landed reliably, in batch or continuously.", concepts: ["Batch loads", "Snowpipe", "File Formats"] },
  { step: "Snowflake Staging", text: "Raw data lands untouched in staging so every load is auditable and replayable.", concepts: ["Stages", "File Formats", "COPY INTO"] },
  { step: "Data Transformation", text: "SQL transformations clean, standardise and join staged data; streams capture changes.", concepts: ["SQL Transformations", "Streams", "Change Data Capture (CDC)"] },
  { step: "Data Modeling", text: "Cleaned data is shaped into models that are simple to query and report on.", concepts: ["Fact & dimension modeling", "Views"] },
  { step: "Data Quality & Validation", text: "Reconciliation and validation checks catch issues before numbers reach reports.", concepts: ["Reconciliation", "Row-level validation", "Null & duplicate checks"] },
  { step: "Analytics & Reporting", text: "Trusted datasets feed dashboards and reports for business decisions.", concepts: ["Reporting", "Business intelligence"] },
];
