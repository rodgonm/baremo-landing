"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

export function PainPoints() {
  return (
    <section className="bg-bg-dark py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-[#555]">
            El problema
          </p>
        </ScrollReveal>

        <div className="mt-10 space-y-6">
          {[
            { text: "Tu equipo visita tiendas. Compara de memoria.", em: "Reporta en papel." },
            { text: "Los datos quedan en WhatsApp y Excel.", em: "Nadie los revisa a tiempo." },
            { text: "La oficina central se entera", em: "cuando ya es tarde." },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p className="max-w-[900px] font-display text-[clamp(1.5rem,3.2vw,2.5rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-[#666]">
                {item.text}{" "}
                <span className="text-white">{item.em}</span>
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-20 flex items-center gap-4">
            <div className="h-px flex-1 max-w-[60px] bg-teal" />
            <p className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-white">
              Eso se acaba hoy.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
