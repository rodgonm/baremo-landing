"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

export function OriginStory() {
  return (
    <section id="nosotros" className="py-40 lg:py-56">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-text-muted">
            Nosotros
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <ScrollReveal delay={0.08}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              Baremo significa
              <br />
              estándar de medición.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div className="lg:pt-4">
              <p className="text-[1.0625rem] leading-[1.8] text-text-secondary">
                Lo construimos porque la distribución en Latinoamérica merece
                herramientas hechas para su realidad — no adaptaciones de software
                diseñado para otro mercado.
              </p>
              <p className="mt-8 font-display text-[1.0625rem] font-semibold text-text">
                Hecho en Guatemala. Para Latinoamérica.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
