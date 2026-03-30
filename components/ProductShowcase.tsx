"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DashboardMock } from "./ui/DashboardMock";

const callouts = [
  { label: "Mapa en tiempo real", position: "top-[15%] left-[5%]" },
  { label: "Tendencias semana a semana", position: "bottom-[25%] left-[5%]" },
  { label: "Rankings por territorio", position: "top-[15%] right-[5%]" },
  { label: "Reportes con AI", position: "bottom-[25%] right-[5%]" },
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative min-h-[200vh]">
      {/* Sticky wrapper */}
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-16">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="relative">
            <DashboardMock />

            {/* Annotation callouts */}
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
  const y = useTransform(progress, [start, start + 0.08], [10, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute ${position} hidden lg:block`}
    >
      <span className="rounded-lg border border-border-hover bg-bg-deep/90 px-3 py-1.5 text-xs font-medium text-brand-primary backdrop-blur-sm shadow-lg">
        {label}
      </span>
    </motion.div>
  );
}
