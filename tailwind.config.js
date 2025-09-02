/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#392C56",
        fire:  "#B91C1C",
        sand:  "#F9F3EB",
        ink:   "#111827",
      },
      boxShadow: { card: "0 10px 25px -10px rgba(0,0,0,.25)" },
      borderRadius: { lg: "0.75rem", xl: "1rem" },
      fontFamily: {
        sans: ["Inter","ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Noto Sans","Ubuntu","Cantarell","Helvetica Neue","Arial"],
        heading: ["Playfair Display","ui-serif","Georgia","Cambria","Times New Roman","Times"],
      },
    },
  },
  plugins: [],
};
