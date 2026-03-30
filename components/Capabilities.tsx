"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";

const capabilities = [
  {
    title: "Offline-first",
    description:
      "La app funciona sin conexión. Los datos se sincronizan automáticamente cuando vuelve la señal. Diseñado para la realidad del campo en Latinoamérica.",
  },
  {
    title: "5 minutos por auditoría",
    description:
      "Checklists optimizados, captura rápida de fotos y flujos intuitivos. Tu equipo audita más tiendas en menos tiempo.",
  },
  {
    title: "WhatsApp integrado",
    description:
      "Reportes automáticos por WhatsApp al completar una auditoría. El supervisor recibe el puntaje sin abrir otra app.",
  },
  {
    title: "AI que entiende tu operación",
    description:
      "Análisis inteligente que detecta patrones, predice caídas de cumplimiento y sugiere acciones correctivas.",
  },
  {
    title: "Multi-tenant",
    description:
      "Una plataforma, múltiples marcas. Cada cliente tiene su espacio aislado con sus baremos, usuarios y datos.",
  },
];

export function Capabilities() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          {/* Left — heading */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-[0.8125rem] font-medium uppercase tracking-[0.15em] text-accent">
                Capacidades
              </p>
              <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                Diseñado para las realidades del campo.
              </h2>
            </div>
          </ScrollReveal>

          {/* Right — accordion */}
          <div>
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.04}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between py-6 text-left"
                  >
                    <span className="font-display text-[1.0625rem] font-semibold text-text">
                      {cap.title}
                    </span>
                    <svg
                      className={`h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 ${
                        openIndex === i ? "rotate-45" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
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
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[0.9375rem] leading-[1.7] text-text-secondary">
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
