import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      screens:{
        'tablet':'588px',
        'movil':'0px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes:{
        fadeIn:{
          '0%': { opacity: '0' },
          '100%':{ opacity: '1' }
        }
      },
      animation:{
        'c-fade-in':'fadeIn .8s ease-out'
      },
      height:{
        'slide': '590px',
        'slide-movil':'300px'
      },
      flexGrow:{
        '2':'2',
        '3':'3'
      }

    },
  },
  plugins: [],
};
export default config;
