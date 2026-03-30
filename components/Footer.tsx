import { Logo } from "./ui/Logo";

const links = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Demo", href: "#demo" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-default">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Logo */}
          <Logo size="sm" />

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text-secondary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="text-sm text-text-muted">
            <a href="mailto:hola@baremo.ai" className="transition-colors hover:text-text-secondary">
              hola@baremo.ai
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-default">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-6 py-4 sm:flex-row">
          <p className="text-xs text-text-muted">
            © 2026 Baremo. Hecho en Guatemala.
          </p>
          <p className="text-xs italic text-brand-primary">
            El estándar ya cambió.
          </p>
        </div>
      </div>
    </footer>
  );
}
