"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";

const capabilities = [
  {
    icon: "📶",
    title: "Offline-first",
    description:
      "La app funciona sin conexión. Los datos se sincronizan automáticamente cuando vuelve la señal. Diseñado para la realidad del campo en Latinoamérica.",
  },
  {
    icon: "⚡",
    title: "5 minutos por auditoría",
    description:
      "Checklists optimizados, captura rápida de fotos y flujos intuitivos. Tu equipo audita más tiendas en menos tiempo.",
  },
  {
    icon: "💬",
    title: "WhatsApp integrado",
    description:
      "Reportes automáticos por WhatsApp al completar una auditoría. El supervisor recibe el puntaje sin abrir otra app.",
  },
  {
    icon: "🧠",
    title: "AI que entiende tu operación",
    description:
      "Análisis inteligente que detecta patrones, predice caídas de cumplimiento y sugiere acciones correctivas.",
  },
  {
    icon: "🏢",
    title: "Multi-tenant",
    description:
      "Una plataforma, múltiples marcas. Cada cliente tiene su espacio aislado con sus baremos, usuarios y datos.",
  },
];

export function Capabilities() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <span className="mb-4 inline-block font-outfit text-sm font-semibold uppercase tracking-wider text-brand-primary">
            Capacidades
          </span>
          <h2 className="max-w-2xl font-outfit text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight">
            Diseñado para las realidades del campo.
          </h2>
        </ScrollReveal>

        <div className="mx-auto mt-16 max-w-[800px]">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={i * 0.05}>
              <div className="border-b border-border-default">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center gap-4 py-5 text-left transition-colors hover:text-brand-primary"
                >
                  <span className="text-xl">{cap.icon}</span>
                  <span className="flex-1 font-outfit text-lg font-semibold text-text-primary">
                    {cap.title}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    className="text-xl text-text-muted"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pl-10 text-base leading-relaxed text-text-secondary">
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
