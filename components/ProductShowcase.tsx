"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DashboardMock } from "./ui/DashboardMock";

const callouts = [
  { label: "Mapa en tiempo real", position: "top-[12%] left-[3%]" },
  { label: "Tendencias semana a semana", position: "bottom-[32%] left-[3%]" },
  { label: "Rankings por territorio", position: "top-[12%] right-[3%]" },
  { label: "Reportes con AI", position: "bottom-[8%] right-[3%]" },
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative min-h-[200vh] border-t border-border">
      <div className="sticky top-0 flex min-h-screen items-center py-16">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="relative">
            <DashboardMock />

            {callouts.map((c, i) => {
              const start = 0.15 + i * 0.18;
              return (
                <CalloutLabel
                  key={c.label}
                  label={c.label}
                  position={c.position}
                  progress={scrollYProgress}
                  start={start}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CalloutLabel({
  label,
  position,
  progress,
  start,
}: {
  label: string;
  position: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
}) {
  const opacity = useTransform(progress, [start, start + 0.08], [0, 1]);
  const y = useTransform(progress, [start, start + 0.08], [8, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute ${position} hidden lg:block`}
    >
      <span className="rounded border border-border bg-bg/90 px-3 py-1.5 text-[0.75rem] font-medium text-accent shadow-sm backdrop-blur-sm">
        {label}
      </span>
    </motion.div>
  );
}
