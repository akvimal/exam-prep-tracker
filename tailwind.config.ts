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
        'bg-primary': '#0f172a',
        'bg-secondary': '#1e293b',
        'bg-card': '#334155',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
        'accent-blue': '#3b82f6',
        'accent-green': '#22c55e',
        'accent-yellow': '#eab308',
        'accent-red': '#ef4444',
        'accent-purple': '#a855f7',
        'accent-orange': '#f97316',
        'accent-cyan': '#06b6d4',
        'accent-pink': '#ec4899',
        'border': '#475569',
      },
    },
  },
  plugins: [],
}
export default config
