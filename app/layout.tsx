import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const description =
  "Ritu Arya — Data Analyst and aspiring Snowflake Data Engineer. SQL analysis, data reconciliation, validation and reporting.";

export const metadata: Metadata = {
  title: { default: `${profile.name} | ${profile.title}`, template: `%s | ${profile.name}` },
  description,
  keywords: ["Ritu Arya", "Data Analyst", "Snowflake", "Data Engineer", "SQL", "ETL", "Data Reconciliation"],
  authors: [{ name: profile.name }],
  openGraph: { title: `${profile.name} | ${profile.title}`, description, type: "website", locale: "en_IN" },
  twitter: { card: "summary", title: `${profile.name} | ${profile.title}`, description },
};
export const viewport: Viewport = { themeColor: "#071426" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
