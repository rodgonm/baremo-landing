"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap-setup";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(container.current.querySelectorAll(".hero-animate"), { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Label fade in
    tl.fromTo(".hero-label", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.1);

    // Split headline into lines with masked reveal
    SplitText.create(".hero-headline", {
      type: "lines",
      mask: "lines",
      linesClass: "overflow-hidden",
      onSplit(self) {
        tl.fromTo(
          self.lines,
          { y: "100%" },
          { y: "0%", duration: 0.9, stagger: 0.1, ease: "power4.out" },
          0.2
        );
      },
    });

    // Subtitle + CTA staggered
    tl.fromTo(".hero-body", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, 0.7);
    tl.fromTo(".hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 0.9);

    // Product visual
    tl.fromTo(
      ".hero-visual",
      { opacity: 0, y: 40, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
      1.0
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-[100dvh] px-8 pt-[72px] lg:px-12">
      <div className="mx-auto flex min-h-[calc(100dvh-72px)] max-w-[1400px] flex-col justify-center">
        <p className="hero-label hero-animate mb-5 font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand" style={{ opacity: 0 }}>
          Retail intelligence platform
        </p>

        <h1 className="hero-headline max-w-[850px] font-display text-[clamp(2.75rem,6.5vw,5.25rem)] font-extrabold leading-[1] tracking-[-0.035em]">
          Tu equipo de campo, midiendo en{" "}
          <span className="text-gradient">tiempo real</span>.
        </h1>

        <p className="hero-body hero-animate mt-7 max-w-[480px] text-[1rem] leading-[1.7] text-text-secondary" style={{ opacity: 0 }}>
          Auditorías de punto de venta que tu equipo completa en 5 minutos.
          Puntajes instantáneos. Dashboards que muestran todo tu territorio
          — sin esperar el reporte del viernes.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contacto"
            className="hero-cta hero-animate cursor-pointer rounded-full bg-text px-7 py-3.5 text-[0.875rem] font-medium text-bg transition-all duration-300 hover:bg-text/85"
            style={{ opacity: 0 }}
          >
            Solicitar Demo
          </a>
          <a
            href="#como-funciona"
            className="hero-cta hero-animate cursor-pointer rounded-full border border-border px-7 py-3.5 text-[0.875rem] font-medium text-text transition-all duration-300 hover:bg-bg-muted"
            style={{ opacity: 0 }}
          >
            Ver cómo funciona
          </a>
        </div>

        {/* Hero visual — product placeholder */}
        <div className="hero-visual mt-16 lg:mt-20" style={{ opacity: 0 }}>
          <div className="placeholder-media aspect-[2.2/1] w-full rounded-2xl">
            <div className="flex h-full items-center justify-center">
              <span className="text-[0.6875rem] uppercase tracking-[0.15em] text-text-muted">
                Video / screenshot del producto
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
