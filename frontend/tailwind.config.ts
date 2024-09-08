import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        btn: '0px 4px 4px 0px #00000040',
      },
      screens: {
        xs: '400px',
      },
      colors: {
        primary: 'var(--primary-clr)',
        secondary: 'var(--secondary-clr)',
        main: 'var(--main-clr)',
        accent: 'var(--accent-clr)',
        auxiliary: 'var(--auxiliary-clr)',
        light: 'var(--light-clr)',
      },
    },
  },
  plugins: [require('@midudev/tailwind-animations')],
};
export default config;
