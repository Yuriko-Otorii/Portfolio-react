/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    fontFamily: {
      'poorStory': ["Poor Story, cursive"],
      'tapestry': ["Tapestry, cursive"]
    },
    extend: {
      backgroundImage: theme => ({
        'lightMode-img': "url('./images/blue-sky.jpg')",
        'darkMode-img': "url('./images/night-sky.jpg')",
        'moon-icon': "url('./images/moon-icon.png')",
        'ts-icon': "url('./images/typescript-icon.png')",
        'resume-img': "url('./images/Resume.png')",
       })
    },
  },
  plugins: [],
}
