"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-setup";
import { ScrollReveal } from "./ui/ScrollReveal";

const metrics = [
  { value: 5, suffix: "min", label: "Auditoría completa", sublabel: "Promedio por tienda" },
  { value: 100, suffix: "%", label: "Digital desde el día uno", sublabel: "Cero papel. Cero Excel." },
  { value: 0, suffix: "", label: "Datos al instante", sublabel: "Sin esperar el reporte del viernes", display: "Real-time" },
];

export function Metrics() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Animate counters
    gsap.utils.toArray<HTMLElement>(".metric-value").forEach((el) => {
      const target = parseInt(el.dataset.value || "0", 10);
      const display = el.dataset.display;
      const suffix = el.dataset.suffix || "";

      if (display) {
        el.textContent = display;
        return;
      }

      if (prefersReduced) {
        el.innerHTML = `${target}<span class="text-[0.55em] font-semibold">${suffix}</span>`;
        return;
      }

      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          el.innerHTML = `${Math.round(obj.val)}<span class="text-[0.55em] font-semibold">${suffix}</span>`;
        },
      });
    });

    // Stagger the cards
    if (!prefersReduced) {
      gsap.fromTo(
        ".metric-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-brand-soft py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="metric-card" style={{ opacity: 0 }}>
              <p
                className="metric-value font-display text-[clamp(3rem,6vw,4.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em]"
                data-value={m.value}
                data-suffix={m.suffix}
                data-display={m.display || ""}
              >
                0
              </p>
              <p className="mt-3 font-display text-[0.875rem] font-semibold text-text">{m.label}</p>
              <p className="mt-1 text-[0.8125rem] text-text-secondary">{m.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
