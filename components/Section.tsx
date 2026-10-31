"use client";
import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

type Props = { id: string; eyebrow: string; title: string; dark?: boolean; children: React.ReactNode };

export default function Section({ id, eyebrow, title, dark, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} id={id} className={`relative py-24 ${dark ? "bg-navy text-white" : ""}`}>
      <div className="mx-auto max-w-6xl px-6">
        <p data-reveal className="eyebrow">{eyebrow}</p>
        <h2 data-reveal className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
