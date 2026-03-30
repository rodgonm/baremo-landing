"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

const modules = [
  {
    title: "Ejecución en PDV",
    description: "Auditorías con puntaje automático. Tu vendedor sabe qué mejorar antes de irse de la tienda.",
    badge: "Disponible",
    bg: "bg-bg-teal",
    span: "lg:col-span-2 lg:row-span-2",
    placeholder: "Captura — app móvil mostrando auditoría en proceso",
    large: true,
  },
  {
    title: "Dashboard en tiempo real",
    description: "Mapas, rankings, tendencias. Todo tu campo en una pantalla.",
    bg: "bg-bg-blue",
    span: "lg:col-span-1",
    placeholder: "Captura — dashboard ejecutivo",
  },
  {
    title: "Reportes inteligentes",
    description: "Análisis con AI que detecta patrones y sugiere acciones.",
    bg: "bg-bg-purple",
    span: "lg:col-span-1",
    placeholder: "Captura — reporte generado",
  },
  {
    title: "Distribución",
    description: "Cobertura, frecuencia de visita y rutas optimizadas.",
    bg: "bg-bg-warm",
    span: "lg:col-span-1",
    badge: "Próximamente",
  },
  {
    title: "Precios & Inventario",
    description: "Captura de precios competitivos y alertas de quiebre de stock.",
    bg: "bg-bg-muted",
    span: "lg:col-span-1",
    badge: "Próximamente",
  },
  {
    title: "IoT y Sensores",
    description: "Temperatura y telemetría de equipos en frío, en tiempo real.",
    bg: "bg-bg-muted",
    span: "lg:col-span-1",
    badge: "Próximamente",
  },
];

export function ModuleCards() {
  return (
    <section id="plataforma" className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-text-muted">
            La plataforma
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Módulos que se adaptan a tu operación.
          </h2>
        </ScrollReveal>

        {/* Bento grid — Notion-inspired mixed sizes */}
        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto]">
          {modules.map((m, i) => (
            <ScrollReveal key={m.title} delay={i * 0.04}>
              <div
                className={`group cursor-default overflow-hidden rounded-[16px] ${m.bg} ${m.span} transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] ${m.large ? "min-h-[400px]" : "min-h-[200px]"} flex flex-col justify-between p-7`}
              >
                <div>
                  {m.badge && (
                    <span className={`mb-3 inline-block text-[0.6875rem] font-medium uppercase tracking-[0.1em] ${
                      m.badge === "Disponible" ? "text-teal" : "text-text-muted"
                    }`}>
                      {m.badge}
                    </span>
                  )}
                  <h3 className="font-display text-[1.25rem] font-semibold text-text">
                    {m.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-[0.9375rem] leading-[1.6] text-text-secondary">
                    {m.description}
                  </p>
                </div>

                {m.placeholder && (
                  <div className="mt-6 placeholder-media aspect-[16/9] rounded-[10px]">
                    <div className="flex h-full items-center justify-center px-4">
                      <span className="text-center text-[0.625rem] uppercase tracking-[0.1em] text-text-muted">
                        {m.placeholder}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
