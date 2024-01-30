/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': "#7a63f1",
        'secondary-color': "#ebe8fc",
        'text-color': "#a3a3a3",
        'grey-color': "#f4f4f4",
        'white-color': "#f5f4fa",
        'black-color': "#434344"

      }
    },
  },
  plugins: [],
}