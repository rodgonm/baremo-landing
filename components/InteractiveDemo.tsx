"use client";

import dynamic from "next/dynamic";
import { ScrollReveal } from "./ui/ScrollReveal";

const InteractiveMap = dynamic(
  () => import("./ui/InteractiveMap").then((mod) => mod.InteractiveMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[520px] items-center justify-center rounded-2xl bg-[#0d1117]">
        <span className="text-[0.75rem] text-[#555]">Cargando mapa...</span>
      </div>
    ),
  },
);

export function InteractiveDemo() {
  return (
    <section className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-lg font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              Todo tu campo, en una pantalla.
            </h2>
            <p className="max-w-sm text-[0.875rem] leading-[1.7] text-text-secondary">
              Mapas en tiempo real, tendencias, rankings y reportes
              inteligentes. Sin esperar. Sin Excel.
            </p>
          </div>
        </ScrollReveal>

        <InteractiveMap />
      </div>
    </section>
  );
}
