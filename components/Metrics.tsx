"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "./ui/ScrollReveal";

const metrics = [
  { value: 5, suffix: " min", label: "Auditoría completa", sublabel: "Promedio por tienda" },
  { value: 100, suffix: "%", label: "Digital. Cero papel.", sublabel: "Desde el día uno" },
  { value: 0, suffix: "", label: "Tiempo real", sublabel: "Datos al instante", display: "Real-time" },
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

  return <span ref={ref}>{display || `${count}${suffix}`}</span>;
}

export function Metrics() {
  return (
    <section className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.08}>
              <div className={`${i > 0 ? "md:border-l md:border-border md:pl-12" : ""}`}>
                <p className="font-display text-[clamp(3.5rem,7vw,5.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
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
