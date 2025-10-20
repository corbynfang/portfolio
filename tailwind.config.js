/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        // Custom dark gradient theme - beginner friendly names
        bg: "#0e1013", // Main background color
        text: "#e4e6eb", // Main text color white-ishgray
        accent: "#4ea1ff", // Blue accent for links
        textmuted: "#262626a0a3a8", // VerySlightly dark graydarker gray for secondary text
      },
      fontFamily: {
        // Custom fonts
        sans: ["Inter", "sans-serif"], // Body text
        mono: ['"JetBrains Mono"', "monospace"], // Code-like text
      },
    },
  },
  plugins: [],
};
