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
        'white': '#FFF'
      },
      backgroundImage: {
        'banner': "url('/images/banner-pic.png')"
      }
    }
  },
  plugins: [],
}

export default tailwid_config;

