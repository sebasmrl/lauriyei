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
        },

        fadeInDown:{
          '0%': { opacity: '0', transform: 'translateY(-50%)' },
          '100%':{ opacity: '1',  transform: 'translateY(0)' }
        },
        fadeInUp:{
          '0%': { opacity: '0', transform: 'translateY(50%)' },
          '100%':{ opacity: '1',  transform: 'translateY(0)' }
        },

        scaleUpRollback:{
          '0%':{ scale: '1.0' },
          //'40%':{ scale:'0.97' },
          '50%':{ scale:'1.08' },
          '100%':{scale:'1.0'}
        }

        
      },
      animation:{
        'c-fade-in':'fadeIn .8s ease-out',
        'c-fade-in-down': 'fadeInDown .4s ease-out',
        'c-fade-in-up': 'fadeInUp .4s ease-out',
        'c-scale-up-rollback': 'scaleUpRollback .7s ease-out'
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
