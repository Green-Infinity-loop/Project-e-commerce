const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-left": {
          "100%": { transform: "translateX(0)", opacity: "1" },
          "0%": { transform: "translateX(100%)", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        bounce: "bounce 2s linear infinite",
        "slide-left": "slide-left 3s ",
        "fade-in": "fade-in 3s ease-out ",
      },
      fontFamily: {
        font: "Jost",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        header:
          "url('https://img.freepik.com/premium-vector/online-consultation-doctor-concept-medical-diagnostics-internet_162329-437.jpg?w=2000')",
        // header: "url('../image/kk.jpg')",
        bottom: "url('../image/undraw_doctor_kw-5-l.svg')",
        zurag: "url('../image/vacc.png')",
      },
      container: {
        center: true,
        screens: {
          cl: "300px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      colors: {
        main: "#00887A",
      },
    },
  },
  plugins: [],
};
