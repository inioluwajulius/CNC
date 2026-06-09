/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#3d2b23",
        "accent-gold": "#a27764",
        "muted-brown": "#7a6256",
        "bg-luxury": "#ffffff",
        "bg-sand": "#f6f1f0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Bodoni Moda", "serif"],
        "serif-body": ["var(--font-serif-body)", "Lora", "serif"],
        "sans-ui": ["var(--font-sans-ui)", "Inter", "sans-serif"],
        "sans-alt": ["var(--font-sans-alt)", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
