"use client";

import { useRef, useState, useEffect, createContext, ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap-setup";

const STORAGE_KEY = "baremo-splash-played";

export const SplashContext = createContext({ isReady: false });

export function SplashScreen({ children }: { children: ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [skipSplash, setSkipSplash] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setSkipSplash(true);
      setIsReady(true);
      setIsComplete(true);
    }
  }, []);

  useGSAP(
    () => {
      if (skipSplash || isComplete) return;
      if (!overlayRef.current || !svgRef.current || !contentRef.current) return;

      document.body.style.overflow = "hidden";

      const circumference = 2 * Math.PI * 44;
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          setIsReady(true);
          setTimeout(() => setIsComplete(true), 50);
        },
      });

      // ═══════════════════════════════════════════════════════
      // Phase 1: Target acquisition (~0 → 1.5s)
      // ═══════════════════════════════════════════════════════

      // Lines extend outward from center — deliberate, not rushed
      tl.fromTo(
        ".scan-top",
        { attr: { y2: 100 } },
        { attr: { y2: 15 }, duration: 0.7, ease: "power3.out" },
        0,
      );
      tl.fromTo(
        ".scan-bottom",
        { attr: { y2: 100 } },
        { attr: { y2: 185 }, duration: 0.7, ease: "power3.out" },
        0,
      );
      tl.fromTo(
        ".scan-left",
        { attr: { x2: 100 } },
        { attr: { x2: 15 }, duration: 0.7, ease: "power3.out" },
        0.05,
      );
      tl.fromTo(
        ".scan-right",
        { attr: { x2: 100 } },
        { attr: { x2: 185 }, duration: 0.7, ease: "power3.out" },
        0.05,
      );

      // Circle draws in after lines reach full extension
      tl.fromTo(
        ".target-circle",
        { strokeDasharray: circumference, strokeDashoffset: circumference },
        { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" },
        0.5,
      );

      // ═══════════════════════════════════════════════════════
      // Phase 2: Lock on (~1.3 → 2.0s)
      // ═══════════════════════════════════════════════════════

      // Center dot pops in — the "locked" moment
      tl.fromTo(
        ".target-dot",
        { scale: 0, transformOrigin: "center" },
        { scale: 1, duration: 0.3, ease: "back.out(4)" },
        1.3,
      );

      // Lock flash — circle pulses bright then back
      tl.to(
        ".target-circle",
        { stroke: "#00D4A0", strokeWidth: 3, duration: 0.1 },
        1.4,
      );
      tl.to(
        ".target-circle",
        { stroke: "#00B386", strokeWidth: 2, duration: 0.3 },
        1.5,
      );

      // Brief hold — let the locked state register visually
      // (dead time from 1.8 to 2.2)

      // ═══════════════════════════════════════════════════════
      // Phase 3: Morph into the logo "o" (~2.2 → 3.2s)
      // ═══════════════════════════════════════════════════════

      // Horizontal lines fade and retract
      tl.to(
        ".scan-left",
        { attr: { x2: 70 }, opacity: 0, duration: 0.5, ease: "power2.in" },
        2.2,
      );
      tl.to(
        ".scan-right",
        { attr: { x2: 130 }, opacity: 0, duration: 0.5, ease: "power2.in" },
        2.2,
      );

      // Vertical lines contract to tight crosshair proportions
      // These match the logo "o" top/bottom line positions relative to the circle
      tl.to(
        ".scan-top",
        { attr: { y2: 56 }, duration: 0.6, ease: "power2.inOut" },
        2.2,
      );
      tl.to(
        ".scan-bottom",
        { attr: { y2: 144 }, duration: 0.6, ease: "power2.inOut" },
        2.2,
      );

      // Entire SVG shrinks and circle contracts — morphing toward letter scale
      tl.to(
        ".target-circle",
        {
          attr: { r: 30 },
          strokeWidth: 1.5,
          duration: 0.6,
          ease: "power2.inOut",
        },
        2.2,
      );
      tl.to(
        ".target-dot",
        { attr: { r: 3.5 }, duration: 0.6, ease: "power2.inOut" },
        2.2,
      );

      // Cross-dissolve: SVG fades out, real DOM "o" appears at same position
      tl.to(svgRef.current, { opacity: 0, duration: 0.25 }, 2.8);
      tl.fromTo(
        ".splash-logo-o",
        { opacity: 0 },
        { opacity: 1, duration: 0.25 },
        2.8,
      );

      // ═══════════════════════════════════════════════════════
      // Phase 4: Logo text reveal (~3.1 → 3.8s)
      // ═══════════════════════════════════════════════════════

      // "barem" slides in from left
      tl.fromTo(
        ".splash-logo-text",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" },
        3.1,
      );

      // Hold complete logo visible (3.6 → 4.0)

      // ═══════════════════════════════════════════════════════
      // Phase 5: Page reveal (~4.0 → 4.6s)
      // ═══════════════════════════════════════════════════════

      tl.to(
        overlayRef.current,
        { opacity: 0, duration: 0.6, ease: "power2.inOut" },
        4.0,
      );
      tl.set(contentRef.current, { visibility: "visible" }, 3.99);
      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        4.0,
      );
    },
    { scope: overlayRef, dependencies: [skipSplash, isComplete] },
  );

  // Already played — render children directly
  if (skipSplash && isComplete) {
    return (
      <SplashContext.Provider value={{ isReady: true }}>
        {children}
      </SplashContext.Provider>
    );
  }

  const brandColor = "#00B386";

  return (
    <SplashContext.Provider value={{ isReady }}>
      {/* ── Splash overlay ────────────────────────────── */}
      {!isComplete && (
        <div
          ref={overlayRef}
          className="splash-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-bg"
        >
          {/* SVG crosshair — starts centered, morphs to "o" proportions */}
          <svg
            ref={svgRef}
            viewBox="0 0 200 200"
            className="absolute h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] lg:h-[200px] lg:w-[200px]"
            fill="none"
          >
            {/* Scan lines — initial coords set to center (100,100), animated by GSAP */}
            <line
              className="scan-top"
              x1="100"
              y1="100"
              x2="100"
              y2="100"
              stroke={brandColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              className="scan-bottom"
              x1="100"
              y1="100"
              x2="100"
              y2="100"
              stroke={brandColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              className="scan-left"
              x1="100"
              y1="100"
              x2="100"
              y2="100"
              stroke={brandColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              className="scan-right"
              x1="100"
              y1="100"
              x2="100"
              y2="100"
              stroke={brandColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Target circle */}
            <circle
              className="target-circle"
              cx="100"
              cy="100"
              r="44"
              stroke={brandColor}
              strokeWidth="2"
              fill="none"
            />

            {/* Center dot */}
            <circle
              className="target-dot"
              cx="100"
              cy="100"
              r="5"
              fill={brandColor}
              style={{ transformOrigin: "100px 100px" }}
            />
          </svg>

          {/* DOM logo — "o" fades in at center, then "barem" slides in */}
          <div className="absolute flex items-center">
            <span
              className="splash-logo-text font-display text-[32px] sm:text-[48px] font-extrabold leading-none tracking-[-0.03em] text-text lg:text-[64px]"
              style={{ opacity: 0 }}
            >
              barem
            </span>
            {/* The real "o" — exact copy from Logo.tsx with crosshair decorations */}
            <span
              className="splash-logo-o relative inline-block font-display font-medium leading-none tracking-[-0.03em] text-[calc(32px*1.05)] sm:text-[calc(48px*1.05)] lg:text-[calc(64px*1.05)]"
              style={{
                color: brandColor,
                opacity: 0,
              }}
            >
              o{/* Top crosshair line — exact Logo.tsx values */}
              <span
                className="absolute rounded-sm"
                style={{
                  width: "0.042em",
                  height: "0.136em",
                  top: "0.186em",
                  left: "calc(50% + 0.017em)",
                  transform: "translateX(-50%)",
                  background: brandColor,
                }}
              />
              {/* Bottom crosshair line */}
              <span
                className="absolute rounded-sm"
                style={{
                  width: "0.042em",
                  height: "0.136em",
                  bottom: "-0.051em",
                  left: "calc(50% + 0.017em)",
                  transform: "translateX(-50%)",
                  background: brandColor,
                }}
              />
              {/* Center dot */}
              <span
                className="absolute rounded-full"
                style={{
                  width: "0.085em",
                  height: "0.085em",
                  top: "0.627em",
                  left: "calc(50% + 0.017em)",
                  transform: "translate(-50%, -50%)",
                  background: brandColor,
                }}
              />
            </span>
          </div>
        </div>
      )}

      {/* ── Page content — visibility:hidden prevents flash, then GSAP reveals ── */}
      <div
        ref={contentRef}
        data-splash-content
        style={{
          opacity: isComplete ? 1 : 0,
          visibility: isComplete ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </SplashContext.Provider>
  );
}
