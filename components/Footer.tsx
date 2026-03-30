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
      <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Logo size="sm" />

          <div className="flex flex-wrap gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.8125rem] text-text-muted transition-colors duration-200 hover:text-text-secondary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:hola@baremo.ai"
            className="text-[0.8125rem] text-text-muted transition-colors duration-200 hover:text-text-secondary"
          >
            hola@baremo.ai
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-6 py-4 sm:flex-row lg:px-8">
          <p className="text-[0.75rem] text-text-muted">
            © 2026 Baremo. Hecho en Guatemala.
          </p>
          <p className="text-[0.75rem] italic text-text-muted">
            El estándar ya cambió.
          </p>
        </div>
      </div>
    </footer>
  );
}
