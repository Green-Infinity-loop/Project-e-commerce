/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "font": 'Open Sans',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        header:
          "url('https://img.freepik.com/premium-vector/online-consultation-doctor-concept-medical-diagnostics-internet_162329-437.jpg?w=2000')",
        // header: "url('../image/kk.jpg')",
        bottom: "url('../image/undraw_doctor_kw-5-l.svg')",
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
