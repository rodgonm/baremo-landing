"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

export function CTA() {
  return (
    <section id="contacto" className="py-36 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            ¿Listo para dejar
            <br />
            el papel atrás?
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <ScrollReveal delay={0.1}>
            <p className="max-w-md text-[1.0625rem] leading-[1.8] text-text-secondary">
              Agenda una demo personalizada y descubre cómo Baremo puede
              transformar tu ejecución en punto de venta.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="mailto:hola@baremo.ai?subject=Demo%20Baremo"
                className="cursor-pointer rounded-[6px] bg-accent px-7 py-3 text-[0.9375rem] font-medium text-white transition-all duration-300 hover:opacity-85"
              >
                Solicitar Demo
              </a>
              <a
                href="https://wa.me/50212345678?text=Hola%2C%20me%20interesa%20una%20demo%20de%20Baremo"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover cursor-pointer text-[0.9375rem] text-text-secondary transition-colors duration-300 hover:text-text"
              >
                WhatsApp
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="lg:pt-2">
              <p className="text-[0.875rem] text-text-muted">Escríbenos directamente</p>
              <a
                href="mailto:hola@baremo.ai"
                className="link-hover mt-2 inline-block font-display text-[1.5rem] font-semibold text-text transition-colors duration-300 hover:text-accent"
              >
                hola@baremo.ai
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
