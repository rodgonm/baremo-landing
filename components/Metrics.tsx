"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "./ui/ScrollReveal";

const metrics = [
  { value: 5, suffix: " min", label: "Auditoría completa", color: "text-text-primary" },
  { value: 100, suffix: "%", label: "Digital. Cero papel.", color: "text-text-primary" },
  { value: 0, suffix: "", label: "Datos al instante", color: "text-brand-primary", display: "Tiempo real" },
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
          const duration = 1200;
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

  return (
    <span ref={ref}>
      {display || `${count}${suffix}`}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.1}>
              <div className="text-center">
                <p className={`font-outfit text-[clamp(3rem,6vw,5rem)] font-extrabold leading-none ${m.color}`}>
                  <Counter value={m.value} suffix={m.suffix} display={m.display} />
                </p>
                <p className="mt-3 text-sm text-text-secondary">{m.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
