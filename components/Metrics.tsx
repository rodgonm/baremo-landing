"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "./ui/ScrollReveal";

const metrics = [
  { value: 5, suffix: " min", label: "Auditoría completa" },
  { value: 100, suffix: "%", label: "Digital. Cero papel." },
  { value: 0, suffix: "", label: "Datos al instante", display: "Tiempo real" },
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

  return (
    <span ref={ref}>
      {display || `${count}${suffix}`}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="border-t border-border py-28 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.08}>
              <div className="text-center">
                <p className="font-display text-[clamp(3rem,6vw,4.5rem)] font-extrabold leading-none tracking-[-0.03em] text-text">
                  <Counter value={m.value} suffix={m.suffix} display={m.display} />
                </p>
                <p className="mt-3 text-[0.875rem] text-text-secondary">{m.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
