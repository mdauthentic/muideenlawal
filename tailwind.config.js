/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131316",
        foreground: "#9394a1",
        primary: "#f7f8f8",
        cardBg: "hsl(240deg 3% 14% / 90%)",
        accent: "#fe552e",
      },
      backgroundImage: {
        glass: "radial-gradient(ellipse at center,rgba(0,225,244,0.15),hsla(0,0%,100%,0))",
        glassBg: "radial-gradient(98.13% 199.7% at 98.13% 100%, #fe6947, #fd366e 41.6%, #fd366e)"
      },
      boxShadow: {
        btnShadow: ".1875rem .1875rem #2c2c2f, .25rem .1875rem #39393c, .1875rem .25rem #39393c, .125rem .1875rem #39393c, .1875rem .125rem #39393c"
      },
      fontFamily: {
        "funnelSans": ["var(--funnelSans)"],
        "hostGrotesk": ["var(--hostGrotesk)"]
      }
    },
  },
  plugins: [],
}