import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#FDFDFF',
        foreground: 'var(--foreground)',
        red: {
          200: '#FEF9F9',
          400: '#FFDCD8',
          800: '#EB8F89',
          900: '#DC3E42',
          950: '#9B0606'
        },
      },
    },
  },
  plugins: [],
};
export default config;
