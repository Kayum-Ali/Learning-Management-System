/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          mq1325: {
            raw: "screen and (max-width: 1325px)",
          },
          mq800: {
            raw: "screen and (max-width: 800px)",
          },
          mq450: {
            raw: "screen and (max-width: 450px)",
          },
        },
      },
      fontSize: {
        xs: "12px",
        base: "16px",
        inherit: "inherit",
      },
     
    },
    corePlugins: {
      preflight: false,
    },
    plugins: [],
  }