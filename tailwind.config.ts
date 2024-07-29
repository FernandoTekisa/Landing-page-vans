import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'vans':"url('../public/vans-backgroud.jpg')"
    },
    extend:{

    },
  },
  plugins: [],
};
//'vans':"url('../public/vans-backgroud.jpg')"
export default config;
