"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";

const capabilities = [
  {
    title: "Funciona sin internet",
    description: "La app completa auditorías offline. Se sincroniza cuando vuelve la señal. Cero datos perdidos.",
    tag: "Offline-first",
  },
  {
    title: "5 minutos por tienda",
    description: "Checklists optimizados y captura rápida. Tu equipo audita más tiendas en menos tiempo, sin capacitación.",
    tag: "Velocidad",
  },
  {
    title: "Reportes por WhatsApp",
    description: "Al completar una auditoría, el supervisor recibe el puntaje por WhatsApp automáticamente. Sin abrir otra app.",
    tag: "Integración",
  },
  {
    title: "Análisis inteligente",
    description: "Detecta patrones, predice caídas de cumplimiento y sugiere acciones correctivas. AI que trabaja con tus datos.",
    tag: "AI",
  },
  {
    title: "Una plataforma, múltiples marcas",
    description: "Cada cliente tiene su espacio aislado. Sus criterios, sus usuarios, sus datos. Escala sin complicaciones.",
    tag: "Multi-tenant",
  },
];

export function Capabilities() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-text-muted">
                Capacidades
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                Diseñado para las realidades del campo.
              </h2>
              <p className="mt-5 text-[1rem] leading-[1.7] text-text-secondary">
                No es otro SaaS genérico adaptado. Cada feature nació de
                un problema real en distribución latinoamericana.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — accordion */}
          <div>
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.03}>
                <div className={`border-t border-border ${i === capabilities.length - 1 ? "border-b" : ""}`}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between py-6 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`inline-block rounded-full px-2.5 py-0.5 text-[0.625rem] font-medium uppercase tracking-wider transition-colors duration-300 ${
                        openIndex === i
                          ? "bg-bg-teal text-teal"
                          : "bg-bg-muted text-text-muted"
                      }`}>
                        {cap.tag}
                      </span>
                      <span className={`font-display text-[1.0625rem] font-semibold transition-colors duration-300 ${
                        openIndex === i ? "text-text" : "text-text-muted"
                      }`}>
                        {cap.title}
                      </span>
                    </div>
                    <svg
                      className={`h-4 w-4 shrink-0 text-text-muted transition-transform duration-300 ${
                        openIndex === i ? "rotate-45" : ""
                      }`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-lg pb-6 pl-0 text-[0.9375rem] leading-[1.75] text-text-secondary">
                          {cap.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
