"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

const modules = [
  {
    name: "Control de Calidad",
    description:
      "Auditorías digitales con puntaje automático por zona. Fotos, checklists y cumplimiento en tiempo real.",
    status: "Disponible",
  },
  {
    name: "Distribución",
    description:
      "Cobertura, frecuencia de visita y rutas optimizadas para cada territorio.",
    status: "Próximamente",
  },
  {
    name: "Precios",
    description:
      "Captura de precios en campo con análisis competitivo automatizado.",
    status: "Próximamente",
  },
  {
    name: "Inventario",
    description:
      "Stock en punto de venta con alertas inteligentes de quiebre.",
    status: "Próximamente",
  },
  {
    name: "Promociones",
    description:
      "Verificación de ejecución promocional con evidencia fotográfica.",
    status: "Próximamente",
  },
  {
    name: "IoT y Sensores",
    description:
      "Temperatura, apertura de puertas y telemetría de equipos en frío.",
    status: "Próximamente",
  },
];

export function ModuleCards() {
  return (
    <section id="plataforma" className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-[0.8125rem] font-medium uppercase tracking-[0.15em] text-accent">
            La plataforma
          </p>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            Todo lo que necesitas para la ejecución perfecta.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 0.05}>
              <div className="flex h-full cursor-default flex-col justify-between bg-bg p-8 transition-colors duration-200 hover:bg-bg-soft">
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {m.status === "Disponible" ? (
                      <span className="text-[0.6875rem] font-medium text-accent">
                        Disponible
                      </span>
                    ) : (
                      <span className="text-[0.6875rem] text-text-muted">
                        Próximamente
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-[1.125rem] font-semibold text-text">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-[1.65] text-text-secondary">
                    {m.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
