/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        weshare: "url(./assets/images/bg-home.png)",
        footer: "url(./assets/images/bg-footer.png)",
      },
      fontFamily: {
        sansita: ["Sansita Swashed", "cursive"],
        mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
