import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: '400px' }, // Custom breakpoint for mobile screens 400px and below
        sm: '640px', // Default Tailwind small screen breakpoint
        md: '768px', // Default Tailwind medium screen breakpoint
        lg: '1024px', // Default Tailwind large screen breakpoint
        xl: '1280px', // Default Tailwind extra large screen breakpoint
        '2xl': '1536px', // Default Tailwind 2x extra large screen breakpoint
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        baseGray: '#161C2D',
        baseBlue: '#3064B6',
        subBlue: '#1358CD',
        input: '#1358CD26',
      },
    },
  },
  plugins: [],
};

export default config;
