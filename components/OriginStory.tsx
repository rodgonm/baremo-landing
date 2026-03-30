"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

export function OriginStory() {
  return (
    <section id="nosotros" className="bg-bg-dark py-40 lg:py-56">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Left — image placeholder */}
          <ScrollReveal>
            <div className="placeholder-media aspect-[4/5] rounded-[12px]" style={{ background: '#1a1a1a' }}>
              <div className="flex h-full items-center justify-center px-6">
                <span className="text-center text-[0.6875rem] uppercase tracking-[0.15em] text-[#666]">
                  Foto del equipo / Guatemala
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — text */}
          <ScrollReveal delay={0.12}>
            <div className="flex flex-col justify-center lg:py-12">
              <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-[#666]">
                Nosotros
              </p>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
                Construido para la realidad de Latinoamérica.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.8] text-[#999]">
                La distribución en esta región tiene retos únicos — conectividad
                intermitente, equipos grandes en campo, miles de puntos de venta
                con condiciones diferentes. Las herramientas genéricas no funcionan aquí.
              </p>
              <p className="mt-4 text-[1.0625rem] leading-[1.8] text-[#999]">
                Diseñamos cada decisión de producto pensando en el vendedor que
                está en la tienda a las 7am con señal intermitente, no en un usuario
                sentado frente a un monitor con fibra óptica.
              </p>
              <p className="mt-8 font-display text-[1rem] font-semibold text-white">
                Hecho en Guatemala. Para Latinoamérica.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
