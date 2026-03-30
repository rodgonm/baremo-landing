export function Logo({
  size = "md",
  variant = "light",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "dark" | "light";
}) {
  const sizes = {
    sm: "text-[22px]",
    md: "text-[28px]",
    lg: "text-[56px]",
    xl: "text-[80px]",
  };
  const textColor = variant === "light" ? "text-text" : "text-white";
  const oColor = variant === "light" ? "#00B386" : "#00D4A0";

  return (
    <span
      className={`font-display font-extrabold tracking-[-0.03em] leading-none whitespace-nowrap ${sizes[size]} ${textColor}`}
    >
      barem
      <span
        className="relative inline-block font-medium"
        style={{ fontSize: "105%", color: oColor }}
      >
        o
        <span className="absolute rounded-sm" style={{
          width: "0.042em", height: "0.136em", top: "0.186em",
          left: "calc(50% + 0.017em)", transform: "translateX(-50%)", background: oColor,
        }} />
        <span className="absolute rounded-sm" style={{
          width: "0.042em", height: "0.136em", bottom: "-0.051em",
          left: "calc(50% + 0.017em)", transform: "translateX(-50%)", background: oColor,
        }} />
        <span className="absolute rounded-full" style={{
          width: "0.085em", height: "0.085em", top: "0.627em",
          left: "calc(50% + 0.017em)", transform: "translate(-50%, -50%)", background: oColor,
        }} />
      </span>
    </span>
  );
}
