"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

export function OriginStory() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-40">
      {/* Rotating glow orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-rotate-glow h-[500px] w-[500px] rounded-full opacity-30 blur-[100px]" style={{
          background: "radial-gradient(ellipse at center, rgba(0, 212, 160, 0.15), transparent 70%)",
        }} />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-outfit text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-snug">
              Baremo significa estándar de medición.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-[640px] text-lg leading-relaxed text-text-secondary">
              Lo construimos porque la distribución en Latinoamérica merece
              herramientas hechas para su realidad — no adaptaciones de software
              diseñado para otro mercado.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mt-10 font-outfit text-xl font-semibold text-brand-primary">
              Hecho en Guatemala. Para Latinoamérica.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
