"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-setup";
import { DashboardMock } from "./ui/DashboardMock";

const callouts = [
  { label: "Mapa en tiempo real", className: "callout-0" },
  { label: "Tendencias semana a semana", className: "callout-1" },
  { label: "Rankings por territorio", className: "callout-2" },
  { label: "Reportes con AI", className: "callout-3" },
];

export function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) {
        gsap.set(".callout-label", { opacity: 1, y: 0 });
        return;
      }

      // Pin the dashboard section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 0.8,
        },
      });

      // Dashboard entrance
      tl.fromTo(
        ".dashboard-mock",
        { opacity: 0.5, y: 30 },
        { opacity: 1, y: 0, duration: 0.3 },
        0,
      );

      // Stagger callout labels
      callouts.forEach((_, i) => {
        tl.fromTo(
          `.callout-${i}`,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.2 },
          0.15 + i * 0.15,
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-brand-soft">
      <div className="flex items-center py-12 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-lg font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              Todo tu campo, en una pantalla.
            </h2>
            <p className="max-w-sm text-[0.875rem] leading-[1.7] text-text-secondary">
              Mapas, tendencias, rankings y reportes inteligentes. Sin esperar.
              Sin Excel.
            </p>
          </div>

          <div className="relative">
            <div className="dashboard-mock">
              <DashboardMock />
            </div>

            {/* Callout labels — positioned over dashboard */}
            <div
              className="callout-label callout-0 absolute left-[2%] top-[8%] hidden lg:block"
              style={{ opacity: 0 }}
            >
              <span className="rounded-full bg-white/90 px-3 py-1.5 text-[0.6875rem] font-medium text-brand shadow-sm backdrop-blur-sm ring-1 ring-black/5">
                {callouts[0].label}
              </span>
            </div>
            <div
              className="callout-label callout-1 absolute bottom-[28%] left-[2%] hidden lg:block"
              style={{ opacity: 0 }}
            >
              <span className="rounded-full bg-white/90 px-3 py-1.5 text-[0.6875rem] font-medium text-brand shadow-sm backdrop-blur-sm ring-1 ring-black/5">
                {callouts[1].label}
              </span>
            </div>
            <div
              className="callout-label callout-2 absolute right-[2%] top-[8%] hidden lg:block"
              style={{ opacity: 0 }}
            >
              <span className="rounded-full bg-white/90 px-3 py-1.5 text-[0.6875rem] font-medium text-brand shadow-sm backdrop-blur-sm ring-1 ring-black/5">
                {callouts[2].label}
              </span>
            </div>
            <div
              className="callout-label callout-3 absolute bottom-[5%] right-[2%] hidden lg:block"
              style={{ opacity: 0 }}
            >
              <span className="rounded-full bg-white/90 px-3 py-1.5 text-[0.6875rem] font-medium text-brand shadow-sm backdrop-blur-sm ring-1 ring-black/5">
                {callouts[3].label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
