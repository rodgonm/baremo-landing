"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

export function OriginStory() {
  return (
    <section id="nosotros" className="bg-bg-dark py-36 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <ScrollReveal>
            <div className="placeholder-media aspect-[4/5] overflow-hidden rounded-2xl" style={{ background: '#161616' }}>
              <div className="flex h-full items-center justify-center px-6">
                <span className="text-center text-[0.6875rem] uppercase tracking-[0.15em] text-[#444]">
                  Foto — equipo / Guatemala / campo
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col justify-center lg:py-8">
              <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#555]">
                Nosotros
              </p>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
                Construido para la realidad del campo.
              </h2>
              <div className="mt-8 space-y-5 text-[0.9375rem] leading-[1.8] text-[#888]">
                <p>
                  La distribución en Latinoamérica tiene retos que el software genérico
                  no entiende: conectividad intermitente, miles de puntos de venta con
                  condiciones diferentes, equipos enormes en campo.
                </p>
                <p>
                  Cada decisión de producto la diseñamos pensando en el vendedor
                  que está en la tienda a las 7am con señal intermitente — no en
                  un usuario frente a un monitor con fibra óptica.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                <p className="font-display text-[0.875rem] font-semibold text-white">
                  Hecho en Guatemala. Para Latinoamérica.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
