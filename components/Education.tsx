import { GraduationCap } from "lucide-react";
import Section from "./Section";

const education = [
  { degree: "MBA Finance", school: "Kurukshetra University" },
  { degree: "Bachelor of Business Administration (BBA)", school: "Kurukshetra University" },
];

export default function Education() {
  return (
    <Section id="education" eyebrow="06 / Education" title="Education">
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e) => (
          <div key={e.degree} data-reveal className="card flex items-center gap-4 p-6">
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-navy text-snow"><GraduationCap size={22} /></span>
            <div><h3 className="font-semibold text-navy">{e.degree}</h3><p className="text-sm text-muted">{e.school}</p></div>
          </div>
        ))}
      </div>
    </Section>
  );
}
