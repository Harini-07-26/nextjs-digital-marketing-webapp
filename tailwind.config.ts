import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Text Color Variants (Eg:bg-primary, border-primary, or text-primary)
      colors: {
        primary: 'rgba(62,106,225,1)',
        'primary-hover': 'rgba(52,87,177,1)',
        'primary-soft': '#d5e5f9',
        secondary: 'rgba(244,244,244,1)',
        'secondary-hover': 'rgba(242,242,242,0.65)',
        dark: '#171A20',
        'dark-1': '#181A1F',
        'dark-2': '#212328',
        'dark-3': '#393C41',
        'dark-4': '#3A3C42',
        'dark-5': '#3E4046',
        'dark-6': '#696A6D',
        'dark-7': '#26282D',
        'dark-8': '#444444',
        'dark-9': '#222222',
        'dark-10': '#0B1821',
        'dark-11': '#656469',
        'dark-12': '#838383',
        'dark-13': '#1B1D22',
        'dark-14': '#45484D',
        'dark-15': '#2F3135',
        'dark-16': '#07080C',
        grey: '#5C5E62',
        'grey-1': '#97989A',
        'grey-2': '#e2e3e3',
        'grey-3': '#d2d2d2',
        'grey-4': '#d5d5d5',
        'grey-5': '#A0A3A8',
        'grey-6': '#E0DCDC',
        'grey-7': '#D0D1D2',
        'grey-8': '#98999B',
        'grey-9': '#C6CECE',
        'grey-10': '#C9CACB',
        'grey-11': '#C1C1C1',
        'grey-12': '#A2A3A5',
        'grey-13': '#747679',
        'grey-14': '#D1D1D2',
        light: '#F4F4F4',
        'light-1': '#F2F2F2',
        'light-2': '#EEEEEE',
        'light-3': '#DEDEDE',
        'light-4': '#ABBDEE',
        'light-5': '#D9D9D9',
        'light-6': '#ECF0FC',
        'light-7': '#FAFAFA',
        'light-8': '#E8E9E9',
        'light-9': '#A2A3A6',
        blue: '#3E6AE1',
        'blue-1': '#001650',
        'blue-2': '#558CED',
        red: '#DE4549',
        success: '#1DCD4E',
        'success-2': '#00B733',
        'success-3': '#40A55D',
        error: '#DE4549',
        'error-1': '#FB4545',
        warning: '#FA9E05'
      },
      // Text Color Variants (Eg:text-primary)
      textColor: {
        primary: '#171A20',
        secondary: '#5C5E62',
        'link-primary': '#3E6AE1',
        'link-secondary': '#171A20',
        'link-tertiary': '#FFFFFF'
      },
      // Font Family Variants (Eg:font-gotham-book)
      fontFamily: {
        'gotham-book': ['gotham-book', 'sans-serif'],
        'gotham-medium': ['gotham-medium', 'sans-serif'],
        'gotham-bold': ['gotham-bold', 'sans-serif']
      },
      // Font Size Variants (Eg:text-price)
      fontSize: {
        heading: '40px',
        price: '20px'
      },
      // Placeholder Variants (Eg:placeholder-primary)
      placeholderColor: {
        primary: '#757575'
      },
      // Background Image / Gradient Variants (Eg:bg-gradient-radial)
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-blue':
          'radial-gradient(54.97% 272.54% at 27.36% -134.72%, rgba(108, 148, 255, 0.92) 0%, rgba(0, 0, 0, 0.92) 100%)',
        'gradient-radial-blue-ellipse': 'radial-gradient(ellipse at 50% -50%,#6c94ff 0,#000 100%)'
      },
      // Grid Template Columns (Eg:grid-cols-4col-auto)
      gridTemplateColumns: {
        '4col-auto': 'repeat(4, minmax(0, auto))'
      },
      // Media Queries (Eg:min-sm:className or styles)
      screens: {
        // Max Screen
        'max-sm': { max: '599px' },
        'max-md': { max: '767px' },
        'max-mdx': { max: '899px' },
        'max-lg': { max: '1023px' },
        'max-xl': { max: '1199px' },
        'max-2xl': { max: '1535px' },
        'max-3xl': { max: '1919px' },
        // Min Screen
        'min-sm': { min: '600px' },
        'min-md': { min: '768px' },
        'min-mdx': { min: '900px' },
        'min-lg': { min: '1024px' },
        'min-xl': { min: '1200px' },
        'min-2xl': { min: '1536px' },
        'min-3xl': { min: '1920px' }
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/typography')]
};
export default config;
