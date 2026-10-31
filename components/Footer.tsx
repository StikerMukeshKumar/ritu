import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-8 text-center text-sm text-slate-400">
      <p>© {new Date().getFullYear()} {profile.name} · {profile.title}</p>
    </footer>
  );
}
