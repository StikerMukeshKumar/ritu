"use client";
import { useState } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Section from "./Section";
import { profile } from "@/data/profile";

export default function Contact() {
  const [status, setStatus] = useState("");
  const field = "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-snow focus:outline-none";

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!profile.email) { setStatus("Direct contact details are being updated — please check back soon."); return; }
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${f.get("name")}`)}&body=${encodeURIComponent(body)}`;
  }

  const links = [
    profile.email && { href: `mailto:${profile.email}`, label: profile.email, Icon: Mail },
    profile.linkedin && { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
    profile.github && { href: profile.github, label: "GitHub", Icon: Github },
    profile.resumeUrl && { href: profile.resumeUrl, label: "Download Resume", Icon: Download },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof Mail }[];

  return (
    <Section id="contact" eyebrow="07 / Contact" title="Let’s talk data" dark>
      <div className="grid gap-10 lg:grid-cols-2">
        <div data-reveal>
          <p className="max-w-md text-slate-300">Open to Snowflake Data Engineer and Data Engineering opportunities. Send a message and I’ll get back to you.</p>
          <ul className="mt-6 space-y-3">
            {links.map(({ href, label, Icon }) => (
              <li key={label}><a href={href} className="inline-flex items-center gap-3 text-slate-200 transition hover:text-snow"><Icon size={18} className="text-snow" />{label}</a></li>
            ))}
          </ul>
        </div>
        <form data-reveal onSubmit={submit} className="space-y-4">
          <label className="block"><span className="sr-only">Name</span><input name="name" required placeholder="Your name" className={field} /></label>
          <label className="block"><span className="sr-only">Email</span><input name="email" type="email" required placeholder="Your email" className={field} /></label>
          <label className="block"><span className="sr-only">Message</span><textarea name="message" required rows={5} placeholder="Message" className={field} /></label>
          <button type="submit" className="rounded-lg bg-snow px-6 py-3 text-sm font-medium text-navy transition hover:bg-white">Send message</button>
          {status && <p role="status" className="text-sm text-slate-300">{status}</p>}
        </form>
      </div>
    </Section>
  );
}
