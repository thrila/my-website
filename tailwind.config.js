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
        "custom-background": "#352F44",
        "button-before": "#B9B4C7",
        "custom-text": '#FAF0E6',
        "hover-color": "#5C5470",
        "card-color": "#5f486b"
      },
      container: {
        center: true,
        padding: '1rem',
        maxWidth: '768px'
      },
      // fontFamily: {
      //   sans: ["Graphik", "sans-serif"],
      //   serif: ["Merriweather", "serif"],
      // },
      fontFamily: {
        sans: ['var(--font-roboto)'],
        serif: ['var(--font-merriweather)'],
        mono: ['var(--font-jetbrains_mono)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
