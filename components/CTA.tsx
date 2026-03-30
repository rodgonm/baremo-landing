"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

export function CTA() {
  return (
    <section id="contacto" className="border-t border-border py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            ¿Listo para dejar
            <br />
            el papel atrás?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-md text-[1.0625rem] leading-[1.7] text-text-secondary">
            Agenda una demo personalizada y descubre cómo Baremo puede
            transformar tu ejecución en punto de venta.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hola@baremo.ai?subject=Demo%20Baremo"
              className="cursor-pointer rounded-md bg-text px-8 py-3 font-display text-[0.9375rem] font-semibold text-bg transition-opacity duration-200 hover:opacity-80"
            >
              Solicitar Demo
            </a>
            <a
              href="https://wa.me/50212345678?text=Hola%2C%20me%20interesa%20una%20demo%20de%20Baremo"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-md border border-border px-8 py-3 font-display text-[0.9375rem] font-semibold text-text transition-colors duration-200 hover:bg-bg-soft"
            >
              WhatsApp
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <p className="mt-8 text-[0.8125rem] text-text-muted">
            hola@baremo.ai
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
