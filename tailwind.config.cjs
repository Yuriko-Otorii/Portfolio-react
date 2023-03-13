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
      }),
      animation: {
        'upMove': "FrameInAnimation 0.5s forwards",
        'downMove': "FrameOutAnimation 0.5s forwards",
        'floating': "floating 1s infinite ease-in-out .8s alternate",
        'swaing': "swaing 2s linear infinite"
      },
      keyframes: {
        FrameOutAnimation: {
          '0%': { 
            opacity: "1",
            transform: "translateY(0)"
           },
          '100%': { 
            opacity: "0",
            transform: "translateY(-200px)"
           },
        },
        FrameInAnimation: {
          '0%': { 
            opacity: "0",
            transform: "translateY(-200px)"
           },
          '100%': { 
            opacity: "1",
            transform: "translateY(0)"
           },
        },
        floating :{
          "0%": {
            transform: "translate(0, 0)"
          },
          "50%": {
            transform: "translate(0, -7px)"
          },
          "100%": {
            transform: "translate(0, 0)"
          }
        },
        swaing: {
          "0%": {
              transform: "rotate(10deg)"
          },
          "50%": {
              transform: "rotate(-10deg)"
          },
          "100%": {
            transform: "rotate(10deg)"
          }
        }
      }
    },
  },
  plugins: [],
}
