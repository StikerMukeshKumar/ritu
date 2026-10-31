import { Code2, Database, ShieldCheck, Table2, Wrench } from "lucide-react";
import Section from "./Section";
import { skillGroups } from "@/data/skills";

const icons = { database: Database, query: Table2, code: Code2, quality: ShieldCheck, tools: Wrench };

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 / Technical Skills" title="The toolkit behind reliable data">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.filter((g) => g.items.length).map((g) => {
          const Icon = icons[g.icon];
          return (
            <div key={g.title} data-reveal className="card p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-snow"><Icon size={20} /></span>
                <h3 className="font-semibold text-navy">{g.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((i) => <li key={i} className="rounded-md border border-slate-200 bg-paper px-2.5 py-1 font-mono text-xs text-ink">{i}</li>)}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
