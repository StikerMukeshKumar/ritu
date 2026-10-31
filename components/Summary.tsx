import { Check } from "lucide-react";
import Section from "./Section";
import { profile } from "@/data/profile";

export default function Summary() {
  return (
    <Section id="summary" eyebrow="01 / Professional Summary" title="Business-minded analyst, engineering-minded approach">
      <ul className="grid gap-4 md:grid-cols-2">
        {profile.summary.map((s) => (
          <li key={s} data-reveal className="card flex gap-3 p-6">
            <Check className="mt-0.5 shrink-0 text-snow" size={18} />
            <span className="text-muted">{s}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
