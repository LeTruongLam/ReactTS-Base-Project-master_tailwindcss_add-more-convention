import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import colors from 'tailwindcss/colors'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1.5: '1.5px',
      },
    },
    colors: {
      transparent: colors.transparent,
      primary: {
        DEFAULT: '#003459',
        40: '#0078CD',
        60: '#00528C',
        80: '#003459',
      },
      secondary: {
        DEFAULT: '#F7DBA7',
        40: '#FCEED5',
        60: '#F1D092',
        80: '#EEC77E',
      },
      state: {
        pink: '#FF564F',
        green: '#34C759',
        orange: '#FF912C',
        blue: '#00A7E7',
      },
      neutral: {
        DEFAULT: '#FDFDFD',
        10: '#FDFDFD',
        20: '#CCD1D2',
        40: '#99A2A5',
        60: '#667479',
        80: '#242B33',
        100: '#00171F',
      },
    },
  },
  plugins: [animate],
} satisfies Config
