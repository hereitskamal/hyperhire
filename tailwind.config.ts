import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'custom-gray': '#FBFBFB',
        'custom-blue': '#58C4E9',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #749ff7, #a7e9f7, #56a6f7, #766ef7)',
      },
    },
  },
  plugins: [],
};
export default config;
