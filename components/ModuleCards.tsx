"use client";

import { useRef } from "react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { ScoreRing } from "./ui/ScoreRing";

const modules = [
  {
    name: "Control de Calidad",
    description: "Auditorías digitales con puntaje automático por zona. Fotos, checklists y cumplimiento en tiempo real.",
    color: "#00d4a0",
    icon: "✓",
    status: "Disponible",
    featured: true,
  },
  {
    name: "Distribución",
    description: "Cobertura, frecuencia de visita y rutas optimizadas.",
    color: "#f59e0b",
    icon: "📦",
    status: "Próximamente",
  },
  {
    name: "Precios",
    description: "Captura de precios en campo con análisis competitivo.",
    color: "#3b82f6",
    icon: "💲",
    status: "Próximamente",
  },
  {
    name: "Inventario",
    description: "Stock en punto de venta y alertas de quiebre.",
    color: "#a855f7",
    icon: "📊",
    status: "Próximamente",
  },
  {
    name: "Promociones",
    description: "Verificación de ejecución promocional con evidencia.",
    color: "#ef4444",
    icon: "🏷️",
    status: "Próximamente",
  },
  {
    name: "IoT & Sensores",
    description: "Temperatura, apertura de puertas y telemetría en frío.",
    color: "#06b6d4",
    icon: "📡",
    status: "Próximamente",
  },
];

export function ModuleCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="soluciones" className="py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <span className="mb-4 inline-block font-outfit text-sm font-semibold uppercase tracking-wider text-brand-primary">
            La plataforma
          </span>
          <h2 className="max-w-2xl font-outfit text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight">
            Todo lo que necesitas para la ejecución perfecta.
          </h2>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="mt-12 flex gap-5 overflow-x-auto px-6 pb-4 scrollbar-hide lg:pl-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))]"
        style={{ scrollbarWidth: "none" }}
      >
        {modules.map((m, i) => (
          <ScrollReveal key={m.name} delay={i * 0.08}>
            <div
              className={`group shrink-0 rounded-2xl border border-border-default bg-bg-card transition-all hover:-translate-y-1 hover:border-border-hover hover:bg-bg-card-hover ${
                m.featured ? "w-[420px]" : "w-[320px]"
              }`}
            >
              {/* Top accent */}
              <div
                className="h-1 rounded-t-2xl"
                style={{ background: m.color }}
              />

              <div className="p-6">
                {/* Icon + status */}
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                    style={{ background: `${m.color}15` }}
                  >
                    {m.icon}
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      m.status === "Disponible"
                        ? "bg-brand-primary-dim text-brand-primary"
                        : "bg-bg-surface text-text-muted"
                    }`}
                  >
                    {m.status}
                  </span>
                </div>

                <h3 className="mb-2 font-outfit text-lg font-semibold text-text-primary">
                  {m.name}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {m.description}
                </p>

                {/* Featured card mini ring */}
                {m.featured && (
                  <div className="mt-6 flex items-center gap-4 border-t border-border-default pt-6">
                    <ScoreRing score={92} size={64} strokeWidth={5} />
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Puntaje promedio
                      </p>
                      <p className="text-xs text-text-muted">
                        Últimos 30 días
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
