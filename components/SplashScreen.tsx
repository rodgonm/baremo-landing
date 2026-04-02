"use client";

import {
  useRef,
  useState,
  useEffect,
  createContext,
  ReactNode,
} from "react";
import { gsap, useGSAP } from "@/lib/gsap-setup";

const STORAGE_KEY = "baremo-splash-played";

export const SplashContext = createContext({ isReady: false });

export function SplashScreen({ children }: { children: ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // Check sessionStorage + reduced motion on mount
  useEffect(() => {
    const hasPlayed = sessionStorage.getItem(STORAGE_KEY) === "1";
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasPlayed || prefersReduced) {
      setShouldAnimate(false);
      setIsReady(true);
      setIsComplete(true);
    }
  }, []);

  useGSAP(() => {
    if (!shouldAnimate || isComplete) return;
    if (!overlayRef.current || !svgRef.current || !logoRef.current || !contentRef.current) return;

    document.body.style.overflow = "hidden";

    const circumference = 2 * Math.PI * 40;
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem(STORAGE_KEY, "1");
        document.body.style.overflow = "";
        setIsReady(true);
        setTimeout(() => setIsComplete(true), 100);
      },
    });

    // ── Phase 1: Crosshair scan ──────────────────────────
    // Lines extend outward from center
    tl.fromTo(".scan-top", { attr: { y2: 100 } }, { attr: { y2: 20 }, duration: 0.4, ease: "power2.out" }, 0);
    tl.fromTo(".scan-bottom", { attr: { y2: 100 } }, { attr: { y2: 180 }, duration: 0.4, ease: "power2.out" }, 0);
    tl.fromTo(".scan-left", { attr: { x2: 100 } }, { attr: { x2: 20 }, duration: 0.4, ease: "power2.out" }, 0);
    tl.fromTo(".scan-right", { attr: { x2: 100 } }, { attr: { x2: 180 }, duration: 0.4, ease: "power2.out" }, 0);

    // Circle draws in
    tl.fromTo(
      ".target-circle",
      { strokeDasharray: circumference, strokeDashoffset: circumference },
      { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" },
      0.25
    );

    // Center dot pops
    tl.fromTo(
      ".target-dot",
      { scale: 0, transformOrigin: "center" },
      { scale: 1, duration: 0.25, ease: "back.out(3)" },
      0.7
    );

    // Lock flash — circle brightens briefly
    tl.to(".target-circle", { stroke: "#00D4A0", duration: 0.08 }, 0.75);
    tl.to(".target-circle", { stroke: "#00B386", duration: 0.15 }, 0.83);

    // ── Phase 2: Morph to logo "o" ───────────────────────
    // Horizontal lines fade out
    tl.to(".scan-left", { opacity: 0, duration: 0.25 }, 1.0);
    tl.to(".scan-right", { opacity: 0, duration: 0.25 }, 1.0);

    // Vertical lines contract to logo proportions
    tl.to(".scan-top", { attr: { y2: 62 }, duration: 0.35, ease: "power2.inOut" }, 1.0);
    tl.to(".scan-bottom", { attr: { y2: 138 }, duration: 0.35, ease: "power2.inOut" }, 1.0);

    // Circle and dot shrink
    tl.to(".target-circle", { attr: { r: 26 }, strokeWidth: 1.5, duration: 0.35, ease: "power2.inOut" }, 1.0);
    tl.to(".target-dot", { attr: { r: 3 }, duration: 0.35, ease: "power2.inOut" }, 1.0);

    // Cross-dissolve: SVG fades out, DOM logo "o" fades in
    tl.to(svgRef.current, { opacity: 0, duration: 0.2 }, 1.3);
    tl.fromTo(".logo-o", { opacity: 0 }, { opacity: 1, duration: 0.2 }, 1.3);

    // ── Phase 3: Logo text ───────────────────────────────
    tl.fromTo(
      ".logo-text",
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
      1.4
    );

    // Brief hold at 1.8

    // ── Phase 4: Page reveal ─────────────────────────────
    tl.to(overlayRef.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 1.9);
    tl.to(contentRef.current, { opacity: 1, duration: 0.5, ease: "power2.inOut" }, 1.9);

  }, { scope: overlayRef, dependencies: [shouldAnimate, isComplete] });

  // If animation was skipped, don't render overlay at all
  if (!shouldAnimate && isComplete) {
    return (
      <SplashContext.Provider value={{ isReady: true }}>
        {children}
      </SplashContext.Provider>
    );
  }

  return (
    <SplashContext.Provider value={{ isReady }}>
      {/* Splash overlay */}
      {!isComplete && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg"
        >
          {/* SVG crosshair target */}
          <svg
            ref={svgRef}
            viewBox="0 0 200 200"
            className="absolute h-[160px] w-[160px] lg:h-[200px] lg:w-[200px]"
            fill="none"
          >
            {/* Scan lines */}
            <line className="scan-top" x1="100" y1="100" x2="100" y2="100"
              stroke="#00B386" strokeWidth="1.5" strokeLinecap="round" />
            <line className="scan-bottom" x1="100" y1="100" x2="100" y2="100"
              stroke="#00B386" strokeWidth="1.5" strokeLinecap="round" />
            <line className="scan-left" x1="100" y1="100" x2="100" y2="100"
              stroke="#00B386" strokeWidth="1.5" strokeLinecap="round" />
            <line className="scan-right" x1="100" y1="100" x2="100" y2="100"
              stroke="#00B386" strokeWidth="1.5" strokeLinecap="round" />

            {/* Target circle */}
            <circle className="target-circle" cx="100" cy="100" r="40"
              stroke="#00B386" strokeWidth="2" fill="none" />

            {/* Center dot */}
            <circle className="target-dot" cx="100" cy="100" r="5"
              fill="#00B386" style={{ transformOrigin: "100px 100px" }} />
          </svg>

          {/* DOM logo — fades in after SVG cross-dissolve */}
          <div ref={logoRef} className="absolute flex items-center">
            {/* "barem" text */}
            <span
              className="logo-text font-display text-[48px] font-extrabold leading-none tracking-[-0.03em] text-text lg:text-[64px]"
              style={{ opacity: 0 }}
            >
              barem
            </span>
            {/* "o" with crosshair decorations */}
            <span
              className="logo-o relative inline-block font-display text-[calc(48px*1.05)] font-medium leading-none tracking-[-0.03em] lg:text-[calc(64px*1.05)]"
              style={{ color: "#00B386", opacity: 0 }}
            >
              o
              <span className="absolute rounded-sm" style={{
                width: "0.042em", height: "0.136em", top: "0.186em",
                left: "calc(50% + 0.017em)", transform: "translateX(-50%)",
                background: "#00B386",
              }} />
              <span className="absolute rounded-sm" style={{
                width: "0.042em", height: "0.136em", bottom: "-0.051em",
                left: "calc(50% + 0.017em)", transform: "translateX(-50%)",
                background: "#00B386",
              }} />
              <span className="absolute rounded-full" style={{
                width: "0.085em", height: "0.085em", top: "0.627em",
                left: "calc(50% + 0.017em)", transform: "translate(-50%, -50%)",
                background: "#00B386",
              }} />
            </span>
          </div>
        </div>
      )}

      {/* Page content — hidden until reveal */}
      <div
        ref={contentRef}
        data-splash-content
        style={{ opacity: isComplete ? 1 : 0 }}
      >
        {children}
      </div>
    </SplashContext.Provider>
  );
}
