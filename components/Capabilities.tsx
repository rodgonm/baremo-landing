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
      "Checklists optimizados, captura rápida de fotos y flujos intuitivos. Tu equipo audita más tiendas en menos tiempo, sin capacitación.",
  },
  {
    title: "WhatsApp integrado",
    description:
      "Reportes automáticos por WhatsApp al completar una auditoría. El supervisor recibe el puntaje sin abrir otra app.",
  },
  {
    title: "AI que entiende tu operación",
    description:
      "Análisis inteligente que detecta patrones, predice caídas de cumplimiento y sugiere acciones correctivas antes de que sea tarde.",
  },
  {
    title: "Multi-tenant",
    description:
      "Una plataforma, múltiples marcas. Cada cliente tiene su espacio aislado con sus baremos, usuarios y datos.",
  },
];

export function Capabilities() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-bg-muted py-36 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <ScrollReveal>
          <h2 className="max-w-lg font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Diseñado para las realidades del campo.
          </h2>
        </ScrollReveal>

        <div className="mt-16 max-w-[800px]">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={i * 0.03}>
              <div className={`border-t border-border ${i === capabilities.length - 1 ? "border-b" : ""}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between py-7 text-left"
                >
                  <span
                    className={`font-display text-[1.125rem] font-semibold transition-colors duration-300 ${
                      openIndex === i ? "text-text" : "text-text-muted"
                    }`}
                  >
                    {cap.title}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-text-muted transition-transform duration-300 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
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
                      <p className="max-w-lg pb-7 text-[1rem] leading-[1.75] text-text-secondary">
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
    </section>
  );
}
