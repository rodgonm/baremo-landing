"use client";

import { useEffect, useState } from "react";
import { Logo } from "./ui/Logo";

const navLinks = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Nosotros", href: "#nosotros" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 lg:px-8">
        <a href="#" className="shrink-0">
          <Logo size="sm" />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[0.875rem] text-text-secondary transition-colors duration-200 hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contacto"
            className="cursor-pointer rounded-md bg-text px-5 py-2 text-[0.875rem] font-medium text-bg transition-opacity duration-200 hover:opacity-80"
          >
            Solicitar Demo
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex cursor-pointer flex-col gap-[5px] md:hidden"
            aria-label="Menú"
          >
            <span
              className={`block h-[1.5px] w-5 bg-text transition-all duration-200 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-text transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-text transition-all duration-200 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-b border-border bg-bg/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-text-secondary transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
