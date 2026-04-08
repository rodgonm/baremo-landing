"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-setup";

interface Step {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    id: "ejecucion",
    label: "Ejecución en PDV",
    title: "Control de ejecución en punto de venta",
    description:
      "Auditorías digitales con puntaje automático por zona. Checklists con fotos, cumplimiento en tiempo real y resultados instantáneos para tu equipo en campo.",
    image: "/images/ejecucion.jpg",
  },
  {
    id: "distribucion",
    label: "Distribución",
    title: "Cobertura y rutas optimizadas",
    description:
      "Frecuencia de visita, cobertura por territorio y rutas inteligentes. Asegura que tu equipo llegue a las tiendas correctas, en el momento correcto.",
    image: "/images/distribucion.jpg",
  },
  {
    id: "precios",
    label: "Precios & Inventario",
    title: "Precios competitivos y control de stock",
    description:
      "Captura de precios en campo con análisis competitivo automatizado. Alertas de quiebre de stock en tiempo real para no perder ventas.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop",
  },
  {
    id: "iot",
    label: "IoT & Sensores",
    title: "Telemetría y control de cadena de frío",
    description:
      "Monitoreo de temperatura, apertura de puertas y estado de equipos en frío. Datos de sensores en tiempo real integrados con el resto de tu operación.",
    image: "/images/iot.jpg",
  },
];

const INTERVAL = 6000;

export function FeatureCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(true); // Start paused, wait for scroll
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Auto-cycle — stops on click, restarts on scroll re-enter
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % steps.length);
    }, INTERVAL);
  }, [paused]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, resetTimer]);

  // Restart auto-cycle when user scrolls back to this section
  useGSAP(
    () => {
      if (!containerRef.current) return;
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        onEnter: () => {
          setPaused(false);
        },
        onEnterBack: () => {
          setPaused(false);
          setCurrent(0);
        },
      });
    },
    { scope: containerRef },
  );

  // GSAP animate on step change
  useGSAP(
    () => {
      if (!textRef.current || !imageRef.current) return;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const textEls = textRef.current.querySelectorAll(".carousel-text");
      if (prefersReduced) {
        gsap.set(textEls, { opacity: 1, y: 0 });
      } else {
        gsap.fromTo(
          textEls,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.07,
            ease: "power3.out",
          },
        );
      }

      const img = imageRef.current.querySelector(".carousel-image");
      if (img) {
        if (prefersReduced) {
          gsap.set(img, { opacity: 1, scale: 1 });
        } else {
          gsap.fromTo(
            img,
            { opacity: 0, scale: 0.97 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.55,
              ease: "power3.out",
              delay: 0.08,
            },
          );
        }
      }
    },
    { scope: containerRef, dependencies: [current] },
  );

  const handleStepClick = (idx: number) => {
    if (idx === current) return;
    setPaused(true);
    setCurrent(idx);
  };

  const step = steps[current];

  return (
    <div ref={containerRef} className="flex w-full flex-col gap-8">
      {/* Card */}
      <div className="overflow-hidden rounded-2xl border border-border bg-bg">
        <div className="grid min-h-[380px] lg:grid-cols-[1fr_1.1fr]">
          {/* Left — text */}
          <div
            ref={textRef}
            className="flex flex-col justify-center p-8 lg:p-10"
          >
            <p className="carousel-text font-display text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-brand">
              {step.label}
            </p>
            <h3 className="carousel-text mt-3 font-display text-[1.375rem] font-bold leading-[1.15] tracking-[-0.02em] text-text lg:text-[1.625rem]">
              {step.title}
            </h3>
            <p className="carousel-text mt-3 max-w-md text-[0.875rem] leading-[1.7] text-text-secondary lg:text-[0.9375rem]">
              {step.description}
            </p>
          </div>

          {/* Right — image */}
          <div
            ref={imageRef}
            className="relative min-h-[240px] bg-bg-muted lg:min-h-0"
          >
            <img
              key={step.id}
              src={step.image}
              alt={step.title}
              className="carousel-image h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Step navigation */}
      <nav className="flex justify-center" aria-label="Módulos">
        <div className="flex flex-wrap items-center gap-2">
          {steps.map((s, idx) => {
            const isActive = current === idx;
            const isCompleted = current > idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => handleStepClick(idx)}
                className={`flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 min-h-[44px] text-[0.8125rem] font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-text text-bg"
                    : "bg-bg-muted text-text-secondary hover:bg-border"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.625rem] font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-brand text-white"
                      : isCompleted
                        ? "bg-brand text-white"
                        : "bg-border text-text-muted"
                  }`}
                >
                  {isCompleted ? (
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    idx + 1
                  )}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
