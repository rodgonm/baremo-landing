"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

const categories = [
  "Bebidas", "Snacks", "Lácteos", "Cuidado personal",
  "Farmacéutica", "Cerveza", "Licores", "Alimentos",
];

export function TrustSignal() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-center text-[0.875rem] text-text-muted">
            Diseñado para las marcas que mueven Latinoamérica.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="cursor-default rounded-full border border-border px-5 py-2 text-[0.8125rem] text-text-muted transition-colors duration-300 hover:border-border-hover hover:text-text-secondary"
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
