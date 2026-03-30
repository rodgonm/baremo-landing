"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

const statements = [
  "El gerente regional visita cada tienda. Compara de memoria. Escribe en papel.",
  "Los datos quedan atrapados. Sin historial. Sin tendencias. Sin comparaciones.",
  "HQ no sabe qué pasa en campo hasta que es demasiado tarde.",
];

export function PainPoints() {
  return (
    <section className="bg-bg-deep">
      {statements.map((text, i) => (
        <div
          key={i}
          className="flex min-h-[50vh] items-center justify-center px-6"
        >
          <ScrollReveal>
            <p className="max-w-3xl text-center font-outfit text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-snug text-text-secondary">
              {text}
            </p>
          </ScrollReveal>
        </div>
      ))}

      {/* Transition */}
      <div className="flex min-h-[40vh] items-center justify-center px-6">
        <ScrollReveal>
          <p className="text-center font-outfit text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-brand-primary">
            Baremo cambia esto.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
