# BAREMO LANDING PAGE — DEFINITIVE BUILD SPECIFICATION
# For Claude Code — Next.js 14 + Tailwind + Framer Motion

---

## PROJECT OVERVIEW

Build the landing page for **Baremo** (baremo.ai) — a retail intelligence platform for Latin American distribution. The design is inspired by https://oneam.it/it/ in terms of quality, motion, and whitespace, but adapted for a SaaS product (not an agency). The page is Spanish-first, dark-themed, and must feel premium.

**Stack:** Next.js 14 App Router, Tailwind CSS, TypeScript, Framer Motion, deployed on Vercel.
**Fonts:** Google Fonts — "Outfit" (display, 300-800) + "DM Sans" (body, 300-500).
**No component libraries.** Custom components only.

---

## DESIGN TOKENS (adapted from oneam.it variables.css)

oneam.it uses: blue primary (#0241E4), purple accent (#7E2EFF), off-black (#00011F), muted gray (#697586), Helvetica Now Pro Display.

**Baremo adaptation:**

```
/* Brand Colors */
--brand-primary: #00d4a0        /* Tropical teal — replaces oneam blue */
--brand-primary-dim: rgba(0, 212, 160, 0.12)
--brand-primary-glow: rgba(0, 212, 160, 0.25)
--brand-accent: #ff6b35         /* Warm orange */
--brand-purple: #a855f7         /* AI/intelligence features */
--brand-blue: #3b82f6           /* IoT module */
--brand-cyan: #06b6d4           /* Secondary tech accent */
--brand-amber: #f59e0b          /* Warnings, distribution module */

/* Backgrounds (dark theme — oneam is light, we invert) */
--bg-deep: #060911              /* Page base */
--bg-card: #0d1117              /* Card/elevated surfaces */
--bg-card-hover: #131a24        /* Card hover state */
--bg-surface: #161d2a           /* Slightly elevated areas */

/* Text */
--text-primary: #f1f5f9         /* White-ish */
--text-secondary: #94a3b8       /* Muted */
--text-muted: #64748b           /* Very muted */

/* Borders */
--border-default: rgba(148, 163, 184, 0.08)
--border-hover: rgba(148, 163, 184, 0.15)

/* Gradients */
--gradient-hero: radial-gradient(ellipse 600px 400px at 30% 40%, rgba(0, 212, 160, 0.06) 0%, transparent 70%), radial-gradient(ellipse 500px 350px at 70% 60%, rgba(168, 85, 247, 0.04) 0%, transparent 70%)
--gradient-text: linear-gradient(135deg, #00d4a0, #06b6d4)
--gradient-section: linear-gradient(253deg, #060911 4%, #0d1a2a 99%)

/* Typography */
--font-display: 'Outfit', sans-serif
--font-body: 'DM Sans', sans-serif

/* Spacing */
--section-padding: 8rem 0
--section-padding-large: 10rem 0
--container-max: 1200px

/* Transitions */
--transition-fast: 0.25s ease-out
--transition-medium: 0.4s ease-in-out
--transition-slow: 0.6s

/* Z-index */
--z-header: 1000
--z-floating: 500
```

---

## ANIMATIONS (adapted from oneam.it animations.css)

| oneam.it Animation | Baremo Equivalent |
|---|---|
| `rotating` (20s linear infinite) — decorative ellipse | Subtle rotating glow orb behind hero and origin story. CSS only |
| `flowingBackground` (8s linear) — gradient text cycle | Apply to "baremo" word in hero. Teal-to-cyan gradient shifts |
| `heroLineReveal` (translateY 110%→0%) — text entrance | Framer Motion `initial={{y:40, opacity:0}} animate={{y:0, opacity:1}}` staggered |
| `loader-fill` — page loader | **Skip.** Speed > ceremony for SaaS |
| Scroll reveals | Framer Motion `whileInView` with `viewport={{once:true, amount:0.2}}`. Default: y:30→0, opacity:0→1, 0.7s cubic-bezier(0.16,1,0.3,1) |

**Baremo-specific animations:**
- Score ring: SVG stroke-dashoffset 364→target, 1.5s ease, on hero load
- Floating cards: CSS `@keyframes float { 0%,100%{translateY(0)} 50%{translateY(-6px)} }` 3s, staggered
- Counter: requestAnimationFrame count-up in metrics section on scroll-enter
- Chart line draw: SVG stroke-dasharray + dashoffset on scroll-enter

---

## SECTION-BY-SECTION SPEC

### SECTION 0: FLOATING ELEMENTS
- **Floating CTA:** Fixed pill, bottom center. "Solicitar Demo". bg: --brand-primary. text: dark. border-radius: 50rem. Outfit 500. Show only after scroll past hero. z-index: 500.
- **WhatsApp:** Fixed bottom-right. White 48px circle. Green icon. box-shadow. z-index: 500.

### SECTION 1: NAV
- Fixed, transparent glass (blur 20px). Solid bg after 100px scroll.
- Left: "baremo." (Outfit 700, 1.5rem, period in teal)
- Center-right: "Soluciones", "Cómo funciona", "Nosotros" (DM Sans, 0.875rem, secondary). Hover underline animation (oneam scaleX pattern).
- Right: "Solicitar Demo" button (teal bg, dark text, 8px radius).
- Height: 64px. Mobile: logo + CTA + hamburger only.

### SECTION 2: HERO (100vh)
- Dark bg + gradient radials + CSS grid pattern overlay (60px lines, 3% opacity, radial mask fade)
- 2-column grid (1fr 1fr desktop, single mobile). Container max-width.
- **Left:** Badge pill "Plataforma AI para retail" (teal dim bg, pulsing dot) → H1 "Cada tienda tiene un baremo. Ahora puedes medirlo." (Outfit 800, clamp 2.5-3.75rem, "baremo" word has gradient text) → Subtitle (DM Sans, 1.125rem, secondary, max-w 480px) → CTA button. Staggered fade-up entrance.
- **Right:** `<ScoreCard />` component — dark card with animated score ring (0→86), zone grid (Enfriador 94, Estantería 88, Exhibición 79, Señalización 72), 2 floating notification cards. Subtle glow shadow.
- Scroll indicator at bottom.

### SECTION 3: MODULE CARDS (horizontal scroll)
- Label: "La plataforma" (teal tag). Heading: "Todo lo que necesitas para la ejecución perfecta."
- Horizontal scroll, 6 cards. Card 1 (Control de Calidad): 420px wide, featured with teal accent, "Disponible" badge, mini score ring. Cards 2-6: 320px, each with module accent color top border, icon, name, one-liner, "Próximamente" badge. Dark cards, 16px radius, hover lift.

### SECTION 4: PAIN POINTS (text storytelling)
- Pure dark bg. 3 large text statements, each ~50vh, scroll-reveal fade-up.
- "El gerente regional visita cada tienda. Compara de memoria. Escribe en papel."
- "Los datos quedan atrapados. Sin historial. Sin tendencias. Sin comparaciones."
- "HQ no sabe qué pasa en campo hasta que es demasiado tarde."
- Transition: "Baremo cambia esto." in teal.
- NO images, NO cards. Just text + space.

### SECTION 5: PRODUCT SHOWCASE (dashboard reveal)
- Sticky section (200vh height, dashboard pinned at top). Dark bg.
- Full-width `<DashboardMock />`: Guatemala map with colored dots + compliance trend line chart (SVG animated) + leaderboard list + bottom stat bar.
- Annotation callouts fade in on scroll progress: "Mapa en tiempo real", "Tendencias semana a semana", "Rankings por territorio", "Reportes con AI".
- Mobile: static (no sticky), dashboard mock + callouts below.

### SECTION 6: HOW IT WORKS (4 alternating blocks)
- 4 blocks, alternating text-left/mock-right. Each: min-height auto, 6rem padding.
- Step number (Outfit 800, 4rem, teal, opacity 0.3) + Title (Outfit 700, 1.75rem) + Description (DM Sans, 1rem, secondary) + Device mock (phone or laptop frame).
  1. "Configura tus baremos" — laptop mock
  2. "Audita con la app" — phone mock
  3. "Puntaje instantáneo" — phone mock
  4. "Monitorea el progreso" — laptop mock
- Scroll-reveal per block.

### SECTION 7: ORIGIN STORY (emotional centerpiece)
- Dark bg + subtle radial teal glow. Padding: 10rem top/bottom.
- Optional: rotating decorative ellipse (adapted from oneam, low opacity).
- Centered text:
  - "Baremo significa estándar de medición." (Outfit 700, clamp 1.75-2.5rem)
  - "Lo construimos porque la distribución en Latinoamérica merece herramientas hechas para su realidad — no adaptaciones de software diseñado para otro mercado." (DM Sans, 1.125rem, secondary, max-w 640px)
  - "Hecho en Guatemala. Para Latinoamérica." (Outfit 600, teal)
- Staggered fade-up entrance. Maximum whitespace.

### SECTION 8: CAPABILITIES (5 expandable items)
- Label: "Capacidades". Heading: "Diseñado para las realidades del campo."
- 5 items, vertically stacked, max-w 800px centered. Each: border-bottom separator, icon + title + description. Expand on click with height animation.
  1. Offline-first
  2. 5 minutos por auditoría
  3. WhatsApp integrado
  4. AI que entiende tu operación
  5. Multi-tenant

### SECTION 9: METRICS (3 big numbers)
- 3-column grid, centered. Numbers: Outfit 800, clamp 3-5rem. Labels: DM Sans, 0.875rem, secondary.
- "5 min" / "Auditoría completa" | "100%" / "Digital. Cero papel." | "Tiempo real" / "Datos al instante" (teal).
- Counter animation on scroll-enter.

### SECTION 10: TRUST SIGNAL
- Centered: "Diseñado para las marcas que mueven Latinoamérica." (Outfit 600, secondary).
- Row of abstract category icons, white, opacity 0.3. Minimal section, 4rem padding.

### SECTION 11: CTA
- Dark bg + teal radial glow (mirrors hero).
- "¿Listo para dejar el papel atrás?" (Outfit 800, clamp 2-2.75rem).
- Subtitle (DM Sans, 1.0625rem, secondary).
- Two buttons: "Solicitar Demo" (teal) + "WhatsApp" (green). Below: "hola@baremo.ai".

### SECTION 12: FOOTER
- Dark, border-top. Logo left, links center, contact right.
- Bottom bar: "© 2026 Baremo. Hecho en Guatemala." left. "El estándar ya cambió." right (teal, italic, optional gradient text animation from oneam).

---

## FILE STRUCTURE

```
baremo-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── ModuleCards.tsx
│   ├── PainPoints.tsx
│   ├── ProductShowcase.tsx
│   ├── HowItWorks.tsx
│   ├── OriginStory.tsx
│   ├── Capabilities.tsx
│   ├── Metrics.tsx
│   ├── TrustSignal.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── FloatingElements.tsx
│   └── ui/
│       ├── Logo.tsx
│       ├── ScoreRing.tsx
│       ├── FloatingCard.tsx
│       ├── DashboardMock.tsx
│       ├── PhoneMock.tsx
│       ├── LaptopMock.tsx
│       ├── GuatemalaMap.tsx
│       └── ScrollReveal.tsx
├── lib/
│   └── animations.ts
├── public/
│   └── icons/
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## BUILD ORDER

1. **Nav + Hero + FloatingElements** → deploy → sales team gets URL
2. **ModuleCards + PainPoints** → product vision + problem framing
3. **ProductShowcase + HowItWorks** → the demo flow
4. **OriginStory + Capabilities** → differentiation + emotion
5. **Metrics + TrustSignal + CTA + Footer** → conversion layer

Ship after step 1. Iterate from there.

---

## LOGO COMPONENT SPECIFICATION

The Baremo logo is a wordmark: "baremo" in Outfit font where the "o" is styled as a target/crosshair. The "o" is a real text character (handles kerning naturally) with CSS pseudo-elements for the crosshair lines and center dot.

**All positioning values use `em` units so the logo scales proportionally at any font-size.**

### Logo.tsx Implementation

```tsx
// components/ui/Logo.tsx
export function Logo({ size = 'md', variant = 'dark' }: { size?: 'sm' | 'md' | 'lg' | 'xl'; variant?: 'dark' | 'light' }) {
  const sizes = { sm: 'text-[20px]', md: 'text-[32px]', lg: 'text-[56px]', xl: 'text-[80px]' };
  const textColor = variant === 'dark' ? 'text-[#f1f5f9]' : 'text-[#0f172a]';
  const oColor = variant === 'dark' ? '#00d4a0' : '#0F6E56';
  
  return (
    <span className={`font-outfit font-extrabold tracking-[-0.03em] leading-none whitespace-nowrap ${sizes[size]} ${textColor}`}>
      barem
      <span className="relative inline-block font-medium" style={{ fontSize: '105%', color: oColor }}>
        o
        {/* Top crosshair line */}
        <span className="absolute rounded-sm" style={{
          width: '0.042em', height: '0.136em', top: '0.186em',
          left: 'calc(50% + 0.017em)', transform: 'translateX(-50%)',
          background: oColor
        }} />
        {/* Bottom crosshair line */}
        <span className="absolute rounded-sm" style={{
          width: '0.042em', height: '0.136em', bottom: '-0.051em',
          left: 'calc(50% + 0.017em)', transform: 'translateX(-50%)',
          background: oColor
        }} />
        {/* Center dot */}
        <span className="absolute rounded-full" style={{
          width: '0.085em', height: '0.085em', top: '0.627em',
          left: 'calc(50% + 0.017em)', transform: 'translate(-50%, -50%)',
          background: oColor
        }} />
      </span>
    </span>
  );
}
```

### Logo Specs (reference values at 56px base)

```
Font: Outfit (Google Fonts)
"barem": weight 800, base font-size (variable)
"o": weight 500, font-size 105% of base
  - Dark bg color: #00d4a0
  - Light bg color: #0F6E56

Crosshair lines (both identical):
  - Width: 0.042em
  - Height: 0.136em
  - Horizontal: left: calc(50% + 0.017em), transform: translateX(-50%)
  - Top line: top: 0.186em
  - Bottom line: bottom: -0.051em

Center dot:
  - Width/height: 0.085em (circle)
  - Position: top: 0.627em
  - Horizontal: same as lines

Letter-spacing: -0.03em
Line-height: 1
white-space: nowrap
```
