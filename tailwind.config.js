/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lemon: ["Lemon"],
        lobster: ["Lobster"],
        lemonada: ["Lemonada"],
        lexend: ["Lexend Exa"]
      },
      colors: {
        "pink-500": "#F762B2",
        "pink-600": "#FF73AE",
        "pink-700": "#FF4493",
        "pink-400": "#FFDDEB",
        "button-pink": "#FF95C1"
      },
      fontSize: {
        8: "8px",
        10: "10px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        20: "20px",
        26: "26px",
        24: "24px",
        32: "32px",
        34: "34px",
        36: "36px",
        42: "42px",
        48: "48px",
        64: "64px",
      },
      boxShadow: {
        pink: "0 35px 60px -15px rgba(255,68,147,1)",
      },
    },
  },
  plugins: [],
};
