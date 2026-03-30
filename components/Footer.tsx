import { Logo } from "./ui/Logo";

const links = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_auto]">
          {/* Logo + tagline */}
          <div>
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-[0.875rem] leading-[1.7] text-text-muted">
              Inteligencia retail para la distribución en Latinoamérica.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-hover text-[0.875rem] text-text-secondary transition-colors duration-300 hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:hola@baremo.ai"
              className="link-hover text-[0.875rem] text-text-secondary transition-colors duration-300 hover:text-text"
            >
              hola@baremo.ai
            </a>
            <span className="text-[0.875rem] text-text-muted">
              Guatemala City, GT
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5 lg:px-12">
          <p className="text-[0.75rem] text-text-muted">
            © 2026 Baremo
          </p>
          <p className="text-[0.75rem] italic text-text-muted">
            El estándar ya cambió.
          </p>
        </div>
      </div>
    </footer>
  );
}
