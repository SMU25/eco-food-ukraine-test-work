/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cornBanner: "url('src/assets/images/banner/bg.jpg')",
      },
      colors: {
        yellow: {
          light: "#FEDE42",
        },
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      fontSize: {
        25: "25px",
        32: "32px",
        64: "64px",
      },
      lineHeight: {
        1.28: "128%",
      },
      spacing: {
        4.25: "17px",
        20.5: "82px",
        26.5: "106px",
        55: "220px",
        57: "228px",
      },
      minWidth: {
        87: "348px",
      },
      maxWidth: {
        68.75: "275px",
        127.5: "510px",
        360: "1440px",
      },
      // minHeight: {},
      borderRadius: {
        21: "21px",
        32.5: "32.5px",
      },
      screens: {
        default: "0px",
        xs: "450px",
        sm: "720px",
        md: "900px",
        lg: "1076px",
        gl: "1300px",
        xl: "1614px",
      },
    },
  },
  plugins: [],
};
