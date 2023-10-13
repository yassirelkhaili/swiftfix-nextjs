import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
    main: '#094B72',
    defaultText: '#2D2F30',
    whiteText: '#F9F8F9',
    whiteTextAlt: '#F4F5F7',
    brownText: '#4F4F4F',
    greyText: '#6d6d6d',
    greyAlt: '#EEEFF4',
    borderColor: '#2E6687',
    greyShadow: '#D9DBE1',
    subfooterColor: '#004D7B',
    socialsColor: '#195E88',
    altColor: '#33475B',
    backgroundColor: '#F2F7FF',
    whiteColor: '#FFFFFF',
    blackColor: '#151617'
  }
  }
},
  plugins: [],
}
export default config
