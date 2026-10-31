"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const nodes = ["Data Sources", "Data Ingestion", "Snowflake", "SQL Transformations", "Analytics & Reporting"];
const Y0 = 46, GAP = 78;

export default function PipelineIllustration() {
  const ref = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const mm = gsap.matchMedia(ref.current);
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".pn", { opacity: 0, scale: 0.92, transformOrigin: "50% 50%", duration: 0.6, stagger: 0.15, ease: "power2.out", delay: 0.3 });
      gsap.from(".pl", { opacity: 0, duration: 0.6, stagger: 0.15, delay: 0.5 });
      gsap.utils.toArray<SVGCircleElement>(".dot").forEach((d, i) => {
        gsap.fromTo(d, { attr: { cy: Y0 + i * GAP + 22 }, opacity: 0 },
          { attr: { cy: Y0 + (i + 1) * GAP - 22 }, opacity: 1, duration: 1.4, ease: "none", repeat: -1, delay: i * 0.35, repeatDelay: 0.4 });
      });
      gsap.to(".sf", { opacity: 0.35, duration: 1.8, yoyo: true, repeat: -1, ease: "sine.inOut" });
    });
    return () => mm.revert();
  }, []);

  return (
    <svg ref={ref} viewBox="0 0 360 410" role="img" aria-label="Pipeline: data sources, ingestion, Snowflake, SQL transformations, analytics and reporting" className="w-full max-w-sm">
      {nodes.slice(0, -1).map((_, i) => (
        <g key={i} className="pl">
          <line x1="180" y1={Y0 + i * GAP + 22} x2="180" y2={Y0 + (i + 1) * GAP - 22} stroke="#29B5E8" strokeOpacity=".35" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle className="dot" cx="180" cy={Y0 + i * GAP + 22} r="3.5" fill="#29B5E8" />
        </g>
      ))}
      {nodes.map((n, i) => {
        const y = Y0 + i * GAP, hl = i === 2;
        return (
          <g key={n} className="pn">
            {hl && <rect className="sf" x="40" y={y - 28} width="280" height="56" rx="16" fill="#29B5E8" opacity=".15" />}
            <rect x="52" y={y - 22} width="256" height="44" rx="12" fill={hl ? "#29B5E8" : "rgba(255,255,255,.06)"} stroke={hl ? "#29B5E8" : "rgba(255,255,255,.18)"} />
            <text x="180" y={y + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill={hl ? "#071426" : "#E2E8F0"}>{n}</text>
            <text x="68" y={y + 4} fontSize="10" fill={hl ? "#071426" : "#29B5E8"} fontFamily="monospace">0{i + 1}</text>
          </g>
        );
      })}
    </svg>
  );
}
