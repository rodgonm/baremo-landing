export function FloatingCard({
  icon,
  title,
  subtitle,
  color = "#00d4a0",
  className = "",
}: {
  icon: string;
  title: string;
  subtitle: string;
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-border-default bg-bg-card px-4 py-3 shadow-lg backdrop-blur-sm ${className}`}
    >
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm"
        style={{ background: `${color}20`, color }}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-text-primary">{title}</p>
        <p className="text-xs text-text-muted">{subtitle}</p>
      </div>
    </div>
  );
}
