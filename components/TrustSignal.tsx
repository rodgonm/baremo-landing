"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

const categories = [
  "Bebidas",
  "Snacks",
  "Lácteos",
  "Cuidado personal",
  "Farmacéutica",
  "Cerveza",
  "Licores",
  "Alimentos",
];

export function TrustSignal() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-[0.9375rem] text-text-muted">
            Diseñado para las marcas que mueven Latinoamérica.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border px-4 py-1.5 text-[0.8125rem] text-text-muted transition-colors duration-200 hover:text-text-secondary"
              >
                {cat}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
