/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        c0: "#FAF0E9",
        c1: "#FAF0E6", //pink
        c2: "#B9B4C7",
        c3: "#5C5470",
        c4: "#352F44", //heading
        c5: "#2F2F44", //subheading
        t1: "#FFE4B5",
        t2: "#F0E6FA", //light blue
        t3: "#FFF8DC", //orange
        t4: "#E6F0FA",
        t5: "#113946",
      },
    },
  },
  plugins: [],
};
