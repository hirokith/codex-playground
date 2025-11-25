/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: '#2a74ff',
        brandBlueLight: '#3c8aff',
        brandBg: '#f7f8fb',
        cardBorder: '#e1e7f5'
      },
      boxShadow: {
        card: '0 12px 30px rgba(25, 69, 168, 0.12)'
      }
    }
  },
  plugins: []
};
