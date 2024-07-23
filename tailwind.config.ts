import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        Orbitron: ['"Orbitron", sans-serif;'],
        Poppins: ['"Poppins", sans-serif;'],
      },
      lineHeight:{
        sm:"35.8%",
        '6sm':"62.5%",
        'md':"120%",
        lg:"130%",
        xl:"150%",
        xxl:"160%",
      },
      colors:{
        blue:"#3ebfff",
      },
      fontSize:{
           '2xl':'29.59px',
           '3xl':'48px',
           '4xl':'42px',
      },
    },
  },
  plugins: [],
};
export default config;
