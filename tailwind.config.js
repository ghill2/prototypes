/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // This on its own will generate CSS properties on the fly
  relative: true, // To always resolve paths relative to the tailwind.config.js file, use the object notation for your content configuration and set the relative property to true:
  content: [
    "./views/**/*.{html,js,ejs}",
    "./routes/**/*.{html,js,ejs}",
    "./js/**/*.{html,js,ejs}"
  ],
  purge: [
    "./views/**/*.{html,js,ejs}",
    "./routes/**/*.{html,js,ejs}",
    "./js/**/*.{html,js,ejs}"
  ],
  theme: {
    extend: {
      minWidth: {
        'xxxs': '5rem',
        'xxs': '10rem',
        '24': '6rem',
      },
      maxWidth: {
        'xxxs': '5rem',
        'xxs': '10rem',
        '24': '6rem',
      },
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
}