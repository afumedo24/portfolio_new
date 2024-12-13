/** @type {import('tailwindcss').Config} */

import { transform } from 'typescript';

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        transparent: 'transparent',
        background: "#0C0F0A",
        red: "#FF206E",
        yellow: "#FBFF12",
        turk: "#41EAD4",
        white: "#FFFFFF"

      },
      keyframes: {
        'scale-in-to-top': {
          '0%': {
            transform: 'scaleY(0)',
            'transform-origin': '100% 0%',
            opacity: '1',
          },
          '100%': {
            transform: 'scaleY(1)',
            'transform-origin': '100% 0%',
            opacity: '1',
          },
        },
        'scale-out-to-top': {
          '0%': {
            transform: 'scaleY(1)',
            'transform-origin': '100% 0%',
            opacity: '1',
          },
          '100%': {
            transform: 'scaleY(0)',
            'transform-origin': '100% 0%',
            opacity: '1',
          },
        },
      },
      animation: {
        'menu-open': 'scale-in-to-top 0.3s ease-out',
        'menu-close': 'scale-out-to-top 0.3s ease-in',
      },

    }
  },
  plugins: [],
}
