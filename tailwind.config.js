/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        boska: ["Boska", "serif"],
        "general-sans": ["General Sans", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        gray: {
          light: "#f5f5f5",
          medium: "#e5e5e5",
          dark: "#666666",
        },
        accent: "#000000",
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [],
}
