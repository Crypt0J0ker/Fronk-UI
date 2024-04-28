/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      gridTemplateRows: {
        "layout": "auto 1fr auto", 
      },
      fontFamily: {
        'main': ['Alumni Sans'],
        'archivo': ['Archivo',]
        // 'fronk-main': ['Alumni+Sans'],
        // 'main': ['Poppins'],

      },
      colors: {
        "fronk-dark-orange": "#522700",
        "fronk-dark": "#0C0C0C",
        "fronk-green": "#55CF53",
        "fronk-orange": "#E57208",
        'orange-main': '#ED8A00',
        'orange-block': '#E38839',
        'red-block': '#B63330',
        'gray-block': '#1A1A1A',
        'blue-block': '#39CFDF',
        'green-block': '#49B534',
        'green-status': '#00A455',
        // 'orange-status': '#C44F33',
        'white-grad': 'linear-gradient(to right, rgb(55, 65, 81), rgb(0, 0, 0))',
        // 'svg-wallet-connect': '#006FFF',
        // 'test-error': '#DE2216',
        // 'test-done': '#00A455',
      }
    },
  },
  plugins: [
    require("daisyui"),
    require("@designbycode/tailwindcss-text-stroke"),
  ],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}