"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

const steps = [
  {
    title: "Configura tus baremos",
    description:
      "Define las zonas, criterios y puntajes que importan para tu operación. Cada categoría de producto, cada tipo de tienda, cada región.",
  },
  {
    title: "Audita con la app",
    description:
      "Tu equipo en campo abre la app, selecciona la tienda y completa la auditoría en menos de 5 minutos. Funciona sin internet.",
  },
  {
    title: "Puntaje instantáneo",
    description:
      "Al terminar, el vendedor ve el puntaje al instante. Sabe exactamente qué mejorar antes de salir de la tienda.",
  },
  {
    title: "Monitorea el progreso",
    description:
      "HQ ve todo en tiempo real. Mapas, tendencias, rankings por territorio. Detecta problemas antes de que escalen.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-36 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-text-muted">
            Cómo funciona
          </p>
          <h2 className="mt-5 max-w-lg font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            De la tienda al dashboard en 4 pasos.
          </h2>
        </ScrollReveal>

        <div className="mt-24 space-y-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.05}>
              <div className="grid items-baseline gap-6 border-t border-border py-10 lg:grid-cols-[80px_1fr_1.2fr] lg:gap-12 lg:py-12">
                {/* Number */}
                <span className="font-display text-[3.5rem] font-extrabold leading-none text-text-faint lg:text-[4.5rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="font-display text-[1.375rem] font-semibold leading-[1.2] text-text lg:text-[1.5rem]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[1rem] leading-[1.7] text-text-secondary">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
