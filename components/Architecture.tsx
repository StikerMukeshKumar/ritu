"use client";
import { useState } from "react";
import Section from "./Section";
import { architecture } from "@/data/architecture";

export default function Architecture() {
  const [i, setI] = useState(2);
  const a = architecture[i];
  return (
    <Section id="architecture" eyebrow="05 / Architecture" title="How I Think About Data Engineering" dark>
      <div className="grid gap-8 lg:grid-cols-2">
        <ol className="space-y-2" data-reveal>
          {architecture.map((s, n) => (
            <li key={s.step}>
              <button onClick={() => setI(n)} aria-pressed={i === n}
                className={`flex w-full items-center gap-4 rounded-xl border px-4 py-3 text-left transition ${i === n ? "border-snow bg-snow/10" : "border-white/10 hover:border-white/30"}`}>
                <span className="font-mono text-xs text-snow">0{n + 1}</span>
                <span className="font-medium">{s.step}</span>
              </button>
              {n < architecture.length - 1 && <div className="ml-6 h-2 w-px bg-snow/40" />}
            </li>
          ))}
        </ol>
        <div data-reveal className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur" aria-live="polite">
          <p className="eyebrow">Stage 0{i + 1}</p>
          <h3 className="mt-2 text-2xl font-semibold">{a.step}</h3>
          <p className="mt-3 text-slate-300">{a.text}</p>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-slate-400">Concepts</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {a.concepts.map((c) => <li key={c} className="rounded-md border border-snow/40 px-2.5 py-1 font-mono text-xs text-snow">{c}</li>)}
          </ul>
          <p className="mt-8 border-t border-white/10 pt-4 text-xs text-slate-500">Architecture concepts and knowledge areas — not a claim of production implementation.</p>
        </div>
      </div>
    </Section>
  );
}
