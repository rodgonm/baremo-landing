"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { FeatureCarousel } from "./ui/FeatureCarousel";

export function ModuleCards() {
  return (
    <section id="plataforma" className="bg-bg-soft py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <ScrollReveal>
          <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand">
            La plataforma
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            Módulos que se adaptan a tu operación.
          </h2>
        </ScrollReveal>

        <div className="mt-14">
          <ScrollReveal delay={0.1}>
            <FeatureCarousel />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
