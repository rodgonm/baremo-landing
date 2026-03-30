"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DashboardMock } from "./ui/DashboardMock";

const callouts = [
  { label: "Mapa en tiempo real", position: "top-[8%] left-[2%]" },
  { label: "Tendencias semana a semana", position: "bottom-[28%] left-[2%]" },
  { label: "Rankings por territorio", position: "top-[8%] right-[2%]" },
  { label: "Reportes con AI", position: "bottom-[5%] right-[2%]" },
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative min-h-[200vh]">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-brand-soft py-16">
        <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-lg font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              Todo tu campo, en una pantalla.
            </h2>
            <p className="max-w-sm text-[0.875rem] leading-[1.7] text-text-secondary">
              Mapas, tendencias, rankings y reportes inteligentes.
              Sin esperar. Sin Excel.
            </p>
          </div>

          <div className="relative">
            <DashboardMock />
            {callouts.map((c, i) => {
              const start = 0.12 + i * 0.16;
              return (
                <CalloutLabel key={c.label} label={c.label} position={c.position}
                  progress={scrollYProgress} start={start} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CalloutLabel({ label, position, progress, start }: {
  label: string; position: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"]; start: number;
}) {
  const opacity = useTransform(progress, [start, start + 0.06], [0, 1]);
  const y = useTransform(progress, [start, start + 0.06], [6, 0]);

  return (
    <motion.div style={{ opacity, y }} className={`absolute ${position} hidden lg:block`}>
      <span className="rounded-full bg-white/90 px-3 py-1.5 text-[0.6875rem] font-medium text-brand shadow-sm backdrop-blur-sm ring-1 ring-black/5">
        {label}
      </span>
    </motion.div>
  );
}
