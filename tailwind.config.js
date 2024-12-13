/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'navbar_white': '#f5f2eb',
        'spring_wood': '#f5f2eb',
        'cod_gray' : '#191919',

      },
      padding: {
        navbar: '15px 0px 15px 0',
      },
      backgroundImage: {
        'home_page': "url('/images/KIMMIE/backgrounds/02.png')",
        'transition1': "url('/images/KIMMIE/backgrounds/transition_page.png')",
        'preorder_page': "url('/images/KIMMIE/backgrounds/04.jpg')",
        'newsletter_page': "url('/images/KIMMIE/backgrounds/05.jpg')",
        //'collection_page': "url('/images/KIMMIE')"
        
      },
      fontFamily: {
        archivo: ["var(--font-archivo)"],
        archivo_narrow: ["var(--font-archivo-narrow)"],
      },
      
      

      
    },
  },
  plugins: [],
};
