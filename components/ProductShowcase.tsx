"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { DashboardMock } from "./ui/DashboardMock";

export function ProductShowcase() {
  return (
    <section className="bg-bg-muted py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <ScrollReveal>
          <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-lg font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              Todo tu campo, en una pantalla.
            </h2>
            <p className="max-w-sm text-[0.9375rem] leading-[1.7] text-text-secondary">
              Mapas en tiempo real, tendencias semanales, rankings por territorio
              y reportes inteligentes. Sin esperar. Sin Excel.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <DashboardMock />
        </ScrollReveal>
      </div>
    </section>
  );
}
