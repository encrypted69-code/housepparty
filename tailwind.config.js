/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* white with 10% opacity */
        input: "var(--color-input)", /* white with 10% opacity */
        ring: "var(--color-ring)", /* violet-500 */
        background: "var(--color-background)", /* indigo-950 */
        foreground: "var(--color-foreground)", /* slate-50 */
        primary: {
          DEFAULT: "var(--color-primary)", /* violet-500 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* cyan-500 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-500 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* slate-800 */
          foreground: "var(--color-muted-foreground)", /* slate-300 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* red-500 */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* indigo-900 */
          foreground: "var(--color-popover-foreground)", /* slate-50 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* indigo-900 */
          foreground: "var(--color-card-foreground)", /* slate-50 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* emerald-500 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-500 */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        neon: {
          violet: "var(--color-neon-violet)", /* blueviolet */
          pink: "var(--color-neon-pink)", /* deeppink */
          cyan: "var(--color-neon-cyan)", /* cyan */
          lime: "var(--color-neon-lime)", /* limegreen */
          orange: "var(--color-neon-orange)", /* orangered */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            transform: "scale(1)",
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
          },
          "50%": { 
            transform: "scale(1.05)",
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 10s ease infinite alternate",
      },
      spacing: {
        '13': '3.25rem', /* 52px - Golden ratio spacing */
        '21': '5.25rem', /* 84px - Golden ratio spacing */
        '34': '8.5rem', /* 136px - Golden ratio spacing */
        '55': '13.75rem', /* 220px - Golden ratio spacing */
      },
      boxShadow: {
        'glow-violet': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-violet-strong': '0 0 20px rgba(138, 43, 226, 0.6)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-pink': '0 0 20px rgba(255, 20, 147, 0.3)',
        'glow-lime': '0 10px 25px rgba(37, 211, 102, 0.3)',
        'soft': '0 8px 32px rgba(138, 43, 226, 0.15)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}