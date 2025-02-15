import { Ovo } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#110001F',
    },
    },
    fontFamily: {
      Outfit: ['Outfit', 'sans-serif'],
      Ovo: ['Ovo', 'serif'],
    },
    screens:{
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    boxShadow: {
      'black' : '4px 4px 0 #000',
      'white' : '4px 4px 0 #fff',
    },
    // gridTemplateColumns: {
    //   'auto': 'repeat(auto-fit, minmax(300px, 1fr))'
    // }
  },
  plugins: [],
};
