"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-setup";

const statements = [
  {
    text: "Tu equipo visita tiendas. Compara de memoria.",
    em: "Reporta en papel.",
  },
  {
    text: "Los datos quedan en WhatsApp y Excel.",
    em: "Nadie los revisa a tiempo.",
  },
  { text: "La oficina central se entera", em: "cuando ya es tarde." },
];

export function PainPoints() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) {
        gsap.set(".pain-statement, .pain-resolve", { opacity: 1, y: 0 });
        return;
      }

      // Each statement reveals with slight parallax
      gsap.utils.toArray<HTMLElement>(".pain-statement").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          },
        );
      });

      // Resolve line
      gsap.fromTo(
        ".pain-resolve",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pain-resolve",
            start: "top 85%",
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-bg-dark py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#555]">
          El problema
        </p>

        <div className="mt-10 space-y-8">
          {statements.map((item, i) => (
            <p
              key={i}
              className="pain-statement max-w-[900px] font-display text-[clamp(1.25rem,3vw,2.5rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-[#555]"
              style={{ opacity: 0 }}
            >
              {item.text} <span className="text-white">{item.em}</span>
            </p>
          ))}
        </div>

        <div
          className="pain-resolve mt-20 flex items-center gap-4"
          style={{ opacity: 0 }}
        >
          <div className="h-px w-12 bg-brand" />
          <p className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-white">
            Eso se acaba hoy.
          </p>
        </div>
      </div>
    </section>
  );
}
