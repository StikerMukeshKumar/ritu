export type Project = {
  slug: "payments" | "opd" | "inventory";
  title: string; problem: string; solution: string;
  focus: string[]; features: string[]; workflow: string[];
};

// "focus" lists topic areas, not claimed tech. Add real tools/links only when confirmed from the resume.
export const projects: Project[] = [
  {
    slug: "payments",
    title: "Digital Payments Reconciliation",
    problem: "Payment records and transactions need to agree across sources, and mismatches must be found and explained.",
    solution: "A reconciliation workflow that matches payment records against transactions, validates them and surfaces discrepancies for reporting.",
    focus: ["SQL", "Reconciliation", "Validation", "Reporting"],
    features: ["Payment record matching", "Transaction validation", "Discrepancy identification", "Reconciliation reporting"],
    workflow: ["Payment records", "Transactions", "Match & validate", "Discrepancies", "Report"],
  },
  {
    slug: "opd",
    title: "Healthcare OPD Registration & Queue Analytics",
    problem: "Outpatient registration and queue data is hard to read without structured analysis of patient flow.",
    solution: "Analysis of OPD registration data to produce patient queue insights and operational reporting.",
    focus: ["SQL", "Healthcare Data", "Queue Analysis", "Reporting"],
    features: ["Registration data analysis", "Patient queue insights", "Operational reporting"],
    workflow: ["Registrations", "Clean & model", "Queue analysis", "Insights", "Report"],
  },
  {
    slug: "inventory",
    title: "Inventory Management & Stock Replenishment",
    problem: "Teams need to monitor stock levels and know when and what to replenish.",
    solution: "Inventory analysis that monitors stock and generates replenishment insights with supporting reports.",
    focus: ["SQL", "Inventory Analysis", "Stock Monitoring", "Reporting"],
    features: ["Inventory analysis", "Stock monitoring", "Replenishment insights", "Reporting"],
    workflow: ["Inventory data", "Stock levels", "Replenishment logic", "Insights", "Report"],
  },
];
