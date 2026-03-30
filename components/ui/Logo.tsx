export function Logo({
  size = "md",
  variant = "dark",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "dark" | "light";
}) {
  const sizes = {
    sm: "text-[20px]",
    md: "text-[32px]",
    lg: "text-[56px]",
    xl: "text-[80px]",
  };
  const textColor = variant === "dark" ? "text-text-primary" : "text-[#0f172a]";
  const oColor = variant === "dark" ? "#00d4a0" : "#0F6E56";

  return (
    <span
      className={`font-outfit font-extrabold tracking-[-0.03em] leading-none whitespace-nowrap ${sizes[size]} ${textColor}`}
    >
      barem
      <span
        className="relative inline-block font-medium"
        style={{ fontSize: "105%", color: oColor }}
      >
        o
        {/* Top crosshair line */}
        <span
          className="absolute rounded-sm"
          style={{
            width: "0.042em",
            height: "0.136em",
            top: "0.186em",
            left: "calc(50% + 0.017em)",
            transform: "translateX(-50%)",
            background: oColor,
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
            background: oColor,
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
            background: oColor,
          }}
        />
      </span>
    </span>
  );
}
