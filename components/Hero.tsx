"use client";

import { useRef, useContext } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap-setup";
import { SplashContext } from "./SplashScreen";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isReady } = useContext(SplashContext);

  useGSAP(
    () => {
      if (!container.current || !isReady) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) {
        gsap.set(container.current.querySelectorAll(".hero-animate"), {
          opacity: 1,
          y: 0,
        });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-label",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.1,
      );

      SplitText.create(".hero-headline", {
        type: "lines",
        mask: "lines",
        linesClass: "overflow-hidden",
        onSplit(self) {
          tl.fromTo(
            self.lines,
            { y: "100%" },
            { y: "0%", duration: 0.9, stagger: 0.1, ease: "power4.out" },
            0.2,
          );
        },
      });

      tl.fromTo(
        ".hero-body",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.7,
      );
      tl.fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        0.9,
      );
      tl.fromTo(
        ".hero-visual",
        { opacity: 0, y: 40, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
        1.0,
      );

      // Video: play once when visible, freeze on last frame, replay on scroll back
      if (videoRef.current) {
        const video = videoRef.current;
        video.loop = false;

        ScrollTrigger.create({
          trigger: video,
          start: "top 90%",
          onEnter: () => {
            video.currentTime = 0;
            video.play();
          },
          onEnterBack: () => {
            video.currentTime = 0;
            video.play();
          },
        });
      }
    },
    { scope: container, dependencies: [isReady] },
  );

  return (
    <section ref={container} className="px-8 pb-12 pt-[72px] lg:px-12 lg:pb-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="pt-[max(2rem,5vh)]">
          <p
            className="hero-label hero-animate mb-4 font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand"
            style={{ opacity: 0 }}
          >
            Retail intelligence platform
          </p>

          <h1 className="hero-headline max-w-[850px] font-display text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold leading-[1] tracking-[-0.035em]">
            Tu equipo de campo, midiendo en{" "}
            <span className="text-gradient">tiempo real</span>.
          </h1>

          <p
            className="hero-body hero-animate mt-6 max-w-[480px] text-[0.9375rem] leading-[1.7] text-text-secondary lg:text-[1rem]"
            style={{ opacity: 0 }}
          >
            Auditorías de punto de venta que tu equipo completa en 5 minutos.
            Puntajes instantáneos. Dashboards que muestran todo tu territorio —
            sin esperar el reporte del viernes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
        </div>

        <div className="hero-visual mt-10 lg:mt-12" style={{ opacity: 0 }}>
          <div className="overflow-hidden rounded-2xl bg-bg-muted lg:max-h-[420px]">
            <video
              ref={videoRef}
              muted
              playsInline
              className="w-full object-cover lg:max-h-[420px]"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
