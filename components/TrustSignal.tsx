"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

const categories = [
  "Bebidas", "Snacks", "Lácteos", "Cuidado personal", "Farmacéutica", "Cerveza", "Licores", "Alimentos",
];

export function TrustSignal() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <p className="text-center font-outfit text-lg font-semibold text-text-secondary">
            Diseñado para las marcas que mueven Latinoamérica.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border-default px-4 py-2 text-sm text-text-muted/50 transition-colors hover:text-text-muted"
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
