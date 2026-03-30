"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

const statements = [
  "El gerente regional visita cada tienda. Compara de memoria. Escribe en papel.",
  "Los datos quedan atrapados. Sin historial. Sin tendencias. Sin comparaciones.",
  "HQ no sabe qué pasa en campo hasta que es demasiado tarde.",
];

export function PainPoints() {
  return (
    <section className="border-t border-border">
      {statements.map((text, i) => (
        <div
          key={i}
          className="flex min-h-[45vh] items-center justify-center px-6"
        >
          <ScrollReveal>
            <p className="mx-auto max-w-[700px] text-center font-display text-[clamp(1.375rem,2.8vw,2rem)] font-medium leading-[1.35] tracking-[-0.01em] text-text-secondary">
              {text}
            </p>
          </ScrollReveal>
        </div>
      ))}

      <div className="flex min-h-[35vh] items-center justify-center px-6 pb-20">
        <ScrollReveal>
          <p className="text-center font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.02em] text-text">
            Baremo cambia esto.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
