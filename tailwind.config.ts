import type {Config} from 'tailwindcss'

const tailwid_config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      color: {
        'primary': '#1E1E1E',
        'secondary': '#282828',
        'white': '#FFF',
        'gray': '#808080'
      },
      backgroundImage: {
        'banner': "url('/images/banner-pic.png')"
      }
    }
  },
  plugins: [],
}

export default tailwid_config;

