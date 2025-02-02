import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#00ffff",
        darkBg: "#131424"
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(0,0,0,1) -5.91%, rgba(0,0,139,1) 111.58%)",      },
    },
  },
  plugins: [],
};
export default config;
