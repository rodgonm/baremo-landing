"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "./ui/ScrollReveal";

const metrics = [
  { value: 5, suffix: "min", label: "Auditoría completa", sublabel: "Promedio por tienda", bg: "bg-bg-teal" },
  { value: 100, suffix: "%", label: "Digital desde el día uno", sublabel: "Cero papel. Cero Excel.", bg: "bg-bg-blue" },
  { value: 0, suffix: "", label: "Datos al instante", sublabel: "Sin esperar el reporte del viernes", bg: "bg-bg-warm", display: "Real-time" },
];

function Counter({ value, suffix, display }: { value: number; suffix: string; display?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    if (!ref.current || display) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 1000;
          const start = performance.now();
          function animate(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          }
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, display]);

  if (display) return <span ref={ref}>{display}</span>;
  return <span ref={ref}>{count}<span className="text-[0.6em] font-semibold">{suffix}</span></span>;
}

export function Metrics() {
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.08}>
              <div className={`rounded-[16px] ${m.bg} p-8 lg:p-10`}>
                <p className="font-display text-[clamp(3rem,6vw,4.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
                  <Counter value={m.value} suffix={m.suffix} display={m.display} />
                </p>
                <p className="mt-4 text-[0.9375rem] font-medium text-text">{m.label}</p>
                <p className="mt-1 text-[0.8125rem] text-text-muted">{m.sublabel}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
