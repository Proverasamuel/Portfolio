/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Permite alternância de tema
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
       colors: {
                        primary: '#009CD0',
                        secondary: '#6CBCE1',
                        accent: '#0079A6',
                        dark: '#1a202c'
                    }
    },
  },
  plugins: [],
}

