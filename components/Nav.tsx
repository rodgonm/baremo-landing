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
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg/90 backdrop-blur-2xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-8 lg:px-12">
        <a href="#" className="shrink-0">
          <Logo size="sm" />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(link.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="link-hover text-[0.8125rem] text-text-secondary transition-colors duration-300 hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#contacto"
            className="cursor-pointer rounded-full bg-text px-5 py-2.5 text-[0.8125rem] font-medium text-bg transition-all duration-300 hover:bg-text/85"
          >
            Solicitar Demo
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="cursor-pointer text-[0.8125rem] text-text md:hidden"
            aria-label="Menú"
          >
            {mobileOpen ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-[72px] bg-bg transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1 px-8 pt-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-border py-5 font-display text-[1.75rem] font-semibold text-text"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
