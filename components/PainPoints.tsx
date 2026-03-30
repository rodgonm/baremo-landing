"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

const statements = [
  "Tu equipo de campo visita tiendas todos los días. Compara de memoria. Reporta en papel.",
  "Los datos quedan atrapados en WhatsApp y hojas de Excel. Sin historial. Sin tendencias.",
  "La oficina central no sabe qué pasa en campo hasta que es demasiado tarde.",
];

export function PainPoints() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        {statements.map((text, i) => (
          <div key={i} className="py-16 lg:py-24">
            <ScrollReveal>
              <p className="max-w-[900px] font-display text-[clamp(1.5rem,3.5vw,2.75rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-text-muted">
                {text}
              </p>
            </ScrollReveal>
          </div>
        ))}

        <div className="py-16 lg:py-24">
          <ScrollReveal>
            <p className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1] tracking-[-0.04em] text-text">
              Eso cambia hoy.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
