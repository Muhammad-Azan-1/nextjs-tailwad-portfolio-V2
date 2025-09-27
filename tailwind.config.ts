import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode:'class',
  theme: {
    extend: {
      colors: {
        primary: "#fdfdfd",
        secondary: "#333",
        main:'#754ef9',
        borderColor :'rgba(0,0,0,0.09) ',
        borderColor2 :'rgba(255,255,255,0.09) ',


      },
    },

    screens: {
      smx :'400px',
        sm: "640px",   // Small devices
    md: "768px",   // Medium devices
    mdx: "840px", 
    mdx2: "880px",  // Your custom
    lg: "1024px",  // Large devices
    xl: "1280px",  // Extra large
    "2xl": "1536px", // 2x extra large
    }
  },
  plugins: [],
} satisfies Config;
