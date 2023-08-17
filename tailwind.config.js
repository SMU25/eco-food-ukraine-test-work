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
        gray: {
          light: "#F6F6F6",
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
        2.75: "11px",
        4.25: "17px",
        4.5: "18px",
        7.5: "30px",
        8.5: "34px",
        11: "52px",
        17: "68px",
        18: "72px",
        20.5: "82px",
        22.5: "90px",
        25: "100px",
        26.5: "106px",
        31.5: "126px",
        55: "220px",
        57: "228px",
        98.5: "394px",
      },
      minWidth: {
        87: "348px",
      },
      maxWidth: {
        44.5: "178px",
        60.25: "241px",
        68.75: "275px",
        127.5: "510px",
        131.25: "525px",
        177: "708px",
        360: "1440px",
        "calc-full-minus-18.5": "calc(100% - 74px)",
      },
      minHeight: {
        58: "232px",
      },
      maxHeight: {
        58: "232px",
      },
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
