import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        deepblue: '#1E3A8A',
        gold: '#F59E0B',
        greenbrand: '#10B981',
        terracotta: '#EF4444'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
}
export default config
