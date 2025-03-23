import type {Config} from 'tailwindcss'

const tailwid_config: Config = {
  content: [
    './app'
  ],
  theme: {
    extend: {
      color: {
        'primary': '#1E1E1E',
        'secondary': '#282828',
        'white': '#FFF',
        'gray': '#D9D9D9'
      },
      backgroundImage: {
        'banner': "url('/images/banner-pic.png')"
      }
    }
  },
  plugins: [],
}

export default tailwid_config;

