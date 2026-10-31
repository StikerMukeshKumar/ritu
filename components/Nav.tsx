"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  ["summary", "About"], ["skills", "Skills"], ["experience", "Experience"],
  ["projects", "Projects"], ["architecture", "Architecture"], ["education", "Education"], ["contact", "Contact"],
] as const;

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/85 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-semibold tracking-wide text-white">
          {profile.name.split(" ")[0]}<span className="text-snow">.</span>
        </a>
        <ul className="hidden gap-7 md:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? "true" : undefined}
                className={`text-sm transition-colors ${active === id ? "text-snow" : "text-slate-300 hover:text-white"}`}>{label}</a>
            </li>
          ))}
        </ul>
        <button className="text-white md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/10 bg-navy px-6 py-3 md:hidden">
          {links.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2 text-slate-200">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
