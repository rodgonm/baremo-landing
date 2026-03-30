"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Configura tus baremos",
    description:
      "Define las zonas, criterios y puntajes que importan para tu operación. Cada categoría de producto, cada tipo de tienda, cada región.",
  },
  {
    number: "02",
    title: "Audita con la app",
    description:
      "Tu equipo en campo abre la app, selecciona la tienda y completa la auditoría en menos de 5 minutos. Funciona sin internet.",
  },
  {
    number: "03",
    title: "Puntaje instantáneo",
    description:
      "Al terminar, el vendedor ve el puntaje al instante. Sabe exactamente qué mejorar antes de salir de la tienda.",
  },
  {
    number: "04",
    title: "Monitorea el progreso",
    description:
      "HQ ve todo en tiempo real. Mapas, tendencias, rankings por territorio. Detecta problemas antes de que escalen.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-[0.8125rem] font-medium uppercase tracking-[0.15em] text-accent">
            Cómo funciona
          </p>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            De la tienda al dashboard en 4 pasos.
          </h2>
        </ScrollReveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.06}>
              <div className="flex h-full flex-col bg-bg p-10 transition-colors duration-200 hover:bg-bg-soft">
                <span className="font-display text-[3rem] font-extrabold leading-none text-border-hover">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-[1.25rem] font-semibold text-text">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-[1.7] text-text-secondary">
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
