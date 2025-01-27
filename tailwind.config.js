/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import relumeTailwindPreset from "@relume_io/relume-tailwind";
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [relumeTailwindPreset],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
