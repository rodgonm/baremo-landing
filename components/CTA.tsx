"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

export function CTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-bg-dark py-36 lg:py-48">
      {/* Abstract shape */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[2px]" />

      <div className="relative mx-auto max-w-[1400px] px-8 lg:px-12">
        <ScrollReveal>
          <h2 className="max-w-[700px] font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white">
            Mide lo que importa.
            <br />
            <span className="text-[#555]">Empieza hoy.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <ScrollReveal delay={0.1}>
            <p className="max-w-md text-[1.0625rem] leading-[1.8] text-[#888]">
              20 minutos. Te mostramos la plataforma funcionando con datos de tu
              industria. Sin compromisos, sin slides — solo el producto.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hola@baremo.ai?subject=Demo%20Baremo"
                className="cursor-pointer rounded-full bg-white px-7 py-3.5 text-[0.9375rem] font-medium text-bg-dark transition-all duration-300 hover:bg-white/90"
              >
                Solicitar Demo
              </a>
              <a
                href="https://wa.me/50212345678?text=Hola%2C%20me%20interesa%20una%20demo"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-full border border-[#333] px-7 py-3.5 text-[0.9375rem] font-medium text-white transition-all duration-300 hover:border-[#555]"
              >
                WhatsApp
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="lg:pt-2">
              <p className="text-[0.8125rem] text-[#555]">Escríbenos</p>
              <a
                href="mailto:hola@baremo.ai"
                className="link-hover mt-2 inline-block font-display text-[1.5rem] font-semibold text-white transition-colors duration-300 hover:text-teal"
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
