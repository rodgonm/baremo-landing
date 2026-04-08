"use client";

import { useState, useRef, useEffect } from "react";
import { ScrollReveal } from "./ui/ScrollReveal";

const capabilities = [
  {
    title: "Funciona sin internet",
    description:
      "La app completa auditorías offline. Se sincroniza cuando vuelve la señal. Cero datos perdidos.",
  },
  {
    title: "5 minutos por tienda",
    description:
      "Checklists optimizados y captura rápida. Tu equipo audita más tiendas en menos tiempo, sin capacitación.",
  },
  {
    title: "Reportes por WhatsApp",
    description:
      "Al completar una auditoría, el supervisor recibe el puntaje por WhatsApp automáticamente.",
  },
  {
    title: "Análisis inteligente",
    description:
      "Detecta patrones, predice caídas de cumplimiento y sugiere acciones correctivas.",
  },
  {
    title: "Una plataforma, múltiples marcas",
    description:
      "Cada cliente tiene su espacio aislado. Sus criterios, sus usuarios, sus datos.",
  },
];

function AccordionItem({
  cap,
  isOpen,
  onToggle,
}: {
  cap: { title: string; description: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-t border-border last:border-b">
      <button
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between py-6 text-left"
      >
        <span
          className={`font-display text-[1rem] font-semibold transition-colors duration-300 ${
            isOpen ? "text-text" : "text-text-muted"
          }`}
        >
          {cap.title}
        </span>
        <svg
          className={`h-4 w-4 shrink-0 text-text-muted transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={{ height }}
      >
        <p className="max-w-lg pb-6 text-[0.875rem] leading-[1.75] text-text-secondary">
          {cap.description}
        </p>
      </div>
    </div>
  );
}

export function Capabilities() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand">
                Capacidades
              </p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
                Diseñado para las realidades del campo.
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-[1.7] text-text-secondary">
                No es otro SaaS genérico adaptado. Cada feature nació de un
                problema real en distribución latinoamericana.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              {capabilities.map((cap, i) => (
                <AccordionItem
                  key={cap.title}
                  cap={cap}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
