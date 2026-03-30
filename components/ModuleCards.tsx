"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { ScoreRing } from "./ui/ScoreRing";

const otherModules = [
  { name: "Distribución", description: "Cobertura, frecuencia de visita y rutas optimizadas." },
  { name: "Precios", description: "Captura de precios en campo con análisis competitivo." },
  { name: "Inventario", description: "Stock en punto de venta y alertas de quiebre." },
  { name: "Promociones", description: "Verificación de ejecución promocional con evidencia." },
  { name: "IoT y Sensores", description: "Temperatura, apertura de puertas y telemetría en frío." },
];

export function ModuleCards() {
  return (
    <section id="plataforma" className="py-36 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Left */}
          <ScrollReveal>
            <div>
              <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-text-muted">
                La plataforma
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                Módulos que se adaptan a tu operación.
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-[1.7] text-text-secondary">
                Empieza midiendo la ejecución en punto de venta. Agrega módulos
                conforme crece tu operación — sin cambiar de plataforma.
              </p>

              {/* Featured module */}
              <div className="mt-12 rounded-[8px] border border-border p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-accent">
                      Disponible ahora
                    </span>
                    <h3 className="mt-2 font-display text-[1.5rem] font-semibold">
                      Ejecución en PDV
                    </h3>
                    <p className="mt-2 max-w-sm text-[0.9375rem] leading-[1.7] text-text-secondary">
                      Auditorías digitales con puntaje automático por zona.
                      Fotos, checklists y cumplimiento en tiempo real.
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <ScoreRing score={92} size={100} strokeWidth={5} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={0.15}>
            <div className="lg:pt-24">
              <p className="mb-6 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-text-muted">
                Próximamente
              </p>
              <div className="divide-y divide-border">
                {otherModules.map((m) => (
                  <div key={m.name} className="group cursor-default py-5">
                    <h3 className="font-display text-[1.125rem] font-semibold text-text transition-colors duration-300 group-hover:text-accent">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-[0.875rem] leading-[1.6] text-text-muted">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Platform screenshot placeholder */}
        <ScrollReveal delay={0.1}>
          <div className="mt-24 placeholder-media aspect-[21/9] w-full rounded-[12px]">
            <div className="flex h-full items-center justify-center">
              <span className="text-[0.6875rem] uppercase tracking-[0.15em] text-text-muted">
                Captura de pantalla — plataforma completa
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
