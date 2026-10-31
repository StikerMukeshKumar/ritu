import Section from "./Section";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 / Experience" title="Professional experience" dark>
      <ol className="relative ml-3 border-l border-white/15">
        {experience.map((r) => (
          <li key={r.role} data-reveal className="relative pb-12 pl-8 last:pb-0">
            <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-snow bg-navy" />
            <p className="font-mono text-xs text-snow">{r.period}</p>
            <h3 className="mt-1 text-xl font-semibold">{r.role}{r.company && <span className="text-slate-400"> · {r.company}</span>}</h3>
            <p className="mt-2 max-w-2xl text-slate-300">{r.overview}</p>
            <ul className="mt-4 max-w-2xl list-disc space-y-1.5 pl-5 text-sm text-slate-400 marker:text-snow">
              {r.responsibilities.map((x) => <li key={x}>{x}</li>)}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {r.focus.map((f) => <span key={f} className="rounded-md border border-white/15 px-2.5 py-1 font-mono text-xs text-slate-300">{f}</span>)}
            </div>
            <p className="mt-4 max-w-2xl rounded-lg border border-snow/25 bg-snow/5 p-3 text-sm text-slate-200"><span className="font-medium text-snow">Impact: </span>{r.impact}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
