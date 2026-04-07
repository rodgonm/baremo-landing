"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap, useGSAP } from "@/lib/gsap-setup";

interface Step {
  id: string;
  label: string;
  title: string;
  description: string;
  images: { src: string; alt: string; className: string }[];
}

const steps: Step[] = [
  {
    id: "ejecucion",
    label: "Ejecución en PDV",
    title: "Control de ejecución en punto de venta",
    description:
      "Auditorías digitales con puntaje automático por zona. Checklists con fotos, cumplimiento en tiempo real y resultados instantáneos para tu equipo en campo.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
        alt: "Ejecución en punto de venta",
        className: "w-[48%] left-[2%] top-[12%]",
      },
      {
        src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop",
        alt: "App móvil de auditoría",
        className: "w-[55%] left-[42%] top-[30%]",
      },
    ],
  },
  {
    id: "distribucion",
    label: "Distribución",
    title: "Cobertura y rutas optimizadas",
    description:
      "Frecuencia de visita, cobertura por territorio y rutas inteligentes. Asegura que tu equipo llegue a las tiendas correctas, en el momento correcto.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        alt: "Mapa de distribución",
        className: "w-[90%] left-[5%] top-[15%]",
      },
    ],
  },
  {
    id: "precios",
    label: "Precios & Inventario",
    title: "Precios competitivos y control de stock",
    description:
      "Captura de precios en campo con análisis competitivo automatizado. Alertas de quiebre de stock en tiempo real para no perder ventas.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        alt: "Análisis de precios",
        className: "w-[52%] left-[0%] top-[18%]",
      },
      {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop",
        alt: "Control de inventario",
        className: "w-[52%] left-[46%] top-[32%]",
      },
    ],
  },
  {
    id: "iot",
    label: "IoT & Sensores",
    title: "Telemetría y control de cadena de frío",
    description:
      "Monitoreo de temperatura, apertura de puertas y estado de equipos en frío. Datos de sensores en tiempo real integrados con el resto de tu operación.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&auto=format&fit=crop",
        alt: "Sensores IoT",
        className: "w-[90%] left-[5%] top-[15%]",
      },
    ],
  },
];

const INTERVAL = 5000;

export function FeatureCarousel() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Auto-cycle
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % steps.length);
    }, INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, resetTimer]);

  // Animate content on step change
  useGSAP(
    () => {
      if (!textRef.current || !imagesRef.current) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // Animate text
      const textEls = textRef.current.querySelectorAll(".carousel-text-item");
      if (prefersReduced) {
        gsap.set(textEls, { opacity: 1, x: 0 });
      } else {
        gsap.fromTo(
          textEls,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            stagger: 0.06,
            ease: "power3.out",
          },
        );
      }

      // Animate images
      const imgs = imagesRef.current.querySelectorAll(".carousel-img");
      if (prefersReduced) {
        gsap.set(imgs, { opacity: 1, scale: 1 });
      } else {
        gsap.fromTo(
          imgs,
          { opacity: 0, scale: 0.92, y: 15 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
          },
        );
      }
    },
    { scope: containerRef, dependencies: [current] },
  );

  const handleStepClick = (idx: number) => {
    if (idx === current) return;
    setCurrent(idx);
  };

  const step = steps[current];

  return (
    <div ref={containerRef} className="flex w-full flex-col gap-10">
      {/* Card */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-bg">
        <div className="flex min-h-[480px] flex-col p-8 lg:p-10">
          {/* Text content */}
          <div
            ref={textRef}
            className="relative z-10 max-w-[55%] lg:max-w-[45%]"
          >
            <p className="carousel-text-item font-display text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-brand">
              {step.label}
            </p>
            <h3 className="carousel-text-item mt-3 font-display text-[1.5rem] font-bold leading-[1.15] tracking-[-0.02em] text-text lg:text-[1.75rem]">
              {step.title}
            </h3>
            <p className="carousel-text-item mt-3 text-[0.875rem] leading-[1.7] text-text-secondary lg:text-[0.9375rem]">
              {step.description}
            </p>
          </div>

          {/* Images */}
          <div ref={imagesRef} className="absolute inset-0">
            {step.images.map((img, i) => (
              <img
                key={`${step.id}-${i}`}
                src={img.src}
                alt={img.alt}
                className={`carousel-img absolute rounded-xl border border-border object-cover shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${img.className}`}
                style={{ userSelect: "none" }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Step navigation */}
      <nav className="flex justify-center" aria-label="Feature steps">
        <div className="flex flex-wrap items-center gap-2">
          {steps.map((s, idx) => {
            const isActive = current === idx;
            const isCompleted = current > idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => handleStepClick(idx)}
                className={`flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-[0.8125rem] font-medium transition-all duration-300 ${
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
