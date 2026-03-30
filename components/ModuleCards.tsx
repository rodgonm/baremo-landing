"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

const modules = [
  {
    title: "Ejecución en PDV",
    description: "Auditorías con puntaje automático. Tu vendedor sabe qué mejorar antes de irse de la tienda.",
    badge: "Disponible",
    span: "lg:col-span-2 lg:row-span-2",
    placeholder: "Captura — app móvil mostrando auditoría",
    large: true,
  },
  {
    title: "Dashboard en tiempo real",
    description: "Mapas, rankings, tendencias. Todo tu campo en una pantalla.",
    span: "lg:col-span-1",
    placeholder: "Captura — dashboard ejecutivo",
  },
  {
    title: "Reportes inteligentes",
    description: "Análisis con AI que detecta patrones y sugiere acciones.",
    span: "lg:col-span-1",
    placeholder: "Captura — reporte generado",
  },
  {
    title: "Distribución",
    description: "Cobertura, frecuencia de visita y rutas optimizadas.",
    span: "lg:col-span-1",
    badge: "Próximamente",
  },
  {
    title: "Precios & Inventario",
    description: "Captura de precios competitivos y alertas de quiebre de stock.",
    span: "lg:col-span-1",
    badge: "Próximamente",
  },
  {
    title: "IoT y Sensores",
    description: "Temperatura y telemetría de equipos en frío, en tiempo real.",
    span: "lg:col-span-1",
    badge: "Próximamente",
  },
];

export function ModuleCards() {
  return (
    <section id="plataforma" className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <ScrollReveal>
          <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand">
            La plataforma
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            Módulos que se adaptan a tu operación.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-3 lg:grid-cols-3">
          {modules.map((m, i) => (
            <ScrollReveal key={m.title} delay={i * 0.04}>
              <div
                className={`group cursor-default overflow-hidden rounded-2xl bg-bg-muted transition-all duration-300 hover:bg-brand-soft ${m.span} ${m.large ? "min-h-[380px]" : "min-h-[180px]"} flex flex-col justify-between p-7`}
              >
                <div>
                  {m.badge && (
                    <span className={`mb-3 inline-block font-display text-[0.6875rem] font-semibold uppercase tracking-[0.1em] ${
                      m.badge === "Disponible" ? "text-brand" : "text-text-muted"
                    }`}>
                      {m.badge}
                    </span>
                  )}
                  <h3 className="font-display text-[1.125rem] font-bold text-text">
                    {m.title}
                  </h3>
                  <p className="mt-1.5 max-w-sm text-[0.875rem] leading-[1.6] text-text-secondary">
                    {m.description}
                  </p>
                </div>

                {m.placeholder && (
                  <div className="mt-5 placeholder-media aspect-[16/9] rounded-xl">
                    <div className="flex h-full items-center justify-center px-4">
                      <span className="text-center text-[0.5625rem] uppercase tracking-[0.1em] text-text-muted">
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
