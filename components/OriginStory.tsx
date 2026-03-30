"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

export function OriginStory() {
  return (
    <section id="nosotros" className="border-t border-border py-40 lg:py-52">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mx-auto max-w-[640px]">
          <ScrollReveal>
            <p className="text-center text-[0.8125rem] font-medium uppercase tracking-[0.15em] text-accent">
              Nosotros
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="mt-6 text-center font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
              Baremo significa estándar de medición.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="mt-8 text-center text-[1.0625rem] leading-[1.75] text-text-secondary">
              Lo construimos porque la distribución en Latinoamérica merece
              herramientas hechas para su realidad — no adaptaciones de software
              diseñado para otro mercado.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <p className="mt-10 text-center font-display text-[1.125rem] font-semibold text-accent">
              Hecho en Guatemala. Para Latinoamérica.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
