"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import PipelineIllustration from "./PipelineIllustration";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const mm = gsap.matchMedia(ref.current);
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-hero]", { y: 32, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", clearProps: "all" });

      // Dark cloudy smoke: slow drifting, breathing layers
      gsap.utils.toArray<HTMLElement>(".smoke").forEach((el, i) => {
        gsap.to(el, {
          x: gsap.utils.random(-140, 140), y: gsap.utils.random(-90, 90),
          scale: gsap.utils.random(1.1, 1.6 as unknown as number),
          rotate: gsap.utils.random(-30, 30),
          opacity: gsap.utils.random(0.5, 0.95),
          duration: gsap.utils.random(10, 18), ease: "sine.inOut", yoyo: true, repeat: -1, delay: i * 0.6,
        });
      });
    });
    return () => mm.revert();
  }, []);

  const btn = "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition";
  return (
    <section id="top" ref={ref} className="relative isolate overflow-hidden bg-gradient-to-b from-[#030a14] via-[#061224] to-[#0a1b30] text-white">
      {/* Dark smoky clouds (no white) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="smoke absolute -left-40 -top-10 h-[34rem] w-[38rem] rounded-full bg-slate-700/50 opacity-70 blur-[130px]" />
        <div className="smoke absolute right-[-6rem] top-0 h-[36rem] w-[36rem] rounded-full bg-blue-900/60 opacity-70 blur-[140px]" />
        <div className="smoke absolute bottom-[-10rem] left-1/4 h-[30rem] w-[44rem] rounded-full bg-slate-800/70 opacity-70 blur-[130px]" />
        <div className="smoke absolute left-1/3 top-1/4 h-80 w-[26rem] rounded-full bg-cyan-900/40 opacity-70 blur-[120px]" />
        <div className="smoke absolute bottom-0 right-1/4 h-72 w-96 rounded-full bg-indigo-950/80 opacity-70 blur-[110px]" />
        <div className="smoke absolute left-0 bottom-1/4 h-64 w-80 rounded-full bg-zinc-800/60 opacity-70 blur-[100px]" />
        {/* soft Snowflake-blue glow behind the pipeline, kept very subtle */}
        <div className="absolute right-[8%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-snow/10 blur-[140px]" />
        {/* dark vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(3,10,20,0.85)_100%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p data-hero className="inline-flex items-center gap-2 rounded-full border border-snow/40 bg-snow/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-sky-200 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-snow shadow-[0_0_10px_#29B5E8]" />
            Data Analyst · Snowflake Data Engineer
          </p>

          <h1 data-hero className="mt-6 text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="block text-white drop-shadow-[0_2px_24px_rgba(255,255,255,0.2)]">RITU</span>
            <span className="block bg-gradient-to-r from-snow via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(41,181,232,0.45)]">
              ARYA
            </span>
          </h1>

          <div data-hero className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-snow to-transparent" />

          <p data-hero className="mt-5 text-xl font-semibold tracking-wide text-snow sm:text-2xl">{profile.title}</p>
          <p data-hero className="mt-4 text-xl font-medium leading-snug text-white sm:text-2xl">{profile.tagline}</p>
          <p data-hero className="mt-4 max-w-xl text-base leading-relaxed text-slate-200">{profile.intro}</p>

          <div data-hero className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-snow text-navy shadow-[0_0_30px_rgba(41,181,232,0.45)] hover:bg-white`}>
              View My Projects <ArrowRight size={16} />
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} download className={`${btn} border border-white/40 bg-white/5 backdrop-blur hover:bg-white/15`}>
                <Download size={16} /> Download Resume
              </a>
            )}
            <a href="#contact" className={`${btn} border border-white/40 bg-white/5 backdrop-blur hover:bg-white/15`}>
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end"><PipelineIllustration /></div>
      </div>
    </section>
  );
}