"use client";
import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Staggered scroll reveal for [data-reveal] children. Skipped under prefers-reduced-motion; fully cleaned up. */
export function useReveal(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    if (!ref.current) return;
    const mm = gsap.matchMedia(ref.current);
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-reveal]", {
        y: 24, opacity: 0, duration: 0.7, ease: "power2.out", stagger: 0.09, clearProps: "all",
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
    });
    return () => mm.revert();
  }, [ref]);
}
