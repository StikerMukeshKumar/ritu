import { ArrowRight } from "lucide-react";
import Section from "./Section";
import { projects, Project } from "@/data/projects";

function Viz({ kind }: { kind: Project["slug"] }) {
  // Abstract illustrations only — no data values implied.
  const bars = kind === "inventory" ? [70, 52, 38, 24, 60, 30] : kind === "opd" ? [30, 48, 66, 50, 36, 22] : [44, 44, 44, 44, 44, 44];
  return (
    <svg viewBox="0 0 240 110" className="h-full w-full" aria-hidden="true">
      {bars.map((h, i) => (
        <g key={i}>
          <rect x={14 + i * 38} y={100 - h} width="22" height={h} rx="4" fill="#29B5E8" opacity={kind === "inventory" && h < 40 ? 0.35 : 0.85} />
          {kind === "payments" && <rect x={14 + i * 38} y={100 - h - (i % 3 === 1 ? 14 : 0)} width="22" height={i % 3 === 1 ? 10 : 0} rx="3" fill="#F59E0B" />}
        </g>
      ))}
      {kind === "opd" && <polyline points="25,70 63,52 101,34 139,50 177,64 215,78" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity=".7" />}
      {kind === "inventory" && <line x1="8" y1="62" x2="232" y2="62" stroke="#fff" strokeOpacity=".5" strokeDasharray="4 4" />}
    </svg>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="04 / Featured Projects" title="Selected analytics projects">
      <div className="space-y-8">
        {projects.map((p, n) => (
          <article key={p.slug} data-reveal className="card grid overflow-hidden lg:grid-cols-5">
            <div className="grid-bg flex flex-col justify-between bg-navy p-6 text-white lg:col-span-2">
              <p className="font-mono text-xs text-snow">PROJECT 0{n + 1}</p>
              <div className="my-6 h-28"><Viz kind={p.slug} /></div>
              <div className="flex flex-wrap gap-2">
                {p.focus.map((f) => <span key={f} className="rounded-md border border-white/20 px-2 py-0.5 font-mono text-[11px] text-slate-300">{f}</span>)}
              </div>
            </div>
            <div className="p-6 lg:col-span-3 lg:p-8">
              <h3 className="text-xl font-semibold text-navy">{p.title}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div><dt className="font-medium text-ink">Business problem</dt><dd className="text-muted">{p.problem}</dd></div>
                <div><dt className="font-medium text-ink">Solution</dt><dd className="text-muted">{p.solution}</dd></div>
              </dl>
              <ul className="mt-4 grid gap-1.5 text-sm text-muted sm:grid-cols-2">
                {p.features.map((f) => <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-snow" />{f}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-1.5 text-xs" aria-label="Workflow">
                {p.workflow.map((w, i) => (
                  <span key={w} className="flex items-center gap-1.5">
                    <span className="rounded-md bg-paper px-2 py-1 font-mono text-ink ring-1 ring-slate-200">{w}</span>
                    {i < p.workflow.length - 1 && <ArrowRight size={12} className="text-snow" />}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
