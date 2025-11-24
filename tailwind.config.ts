import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "confetti-gif": "url('/confetti.gif')",
        "main-pattern": "url('/images/oAndXPattern.webp')",
      },
      colors: {
        "dark-gray": "#151515",
        "lighter-gray": "#262626ff",
        playerOne: "#3B82F6",
        playerTwo: "#EF4444",
      },
      height: {
        "520": "384px",
      },
      width: {
        "520": "384px",
      },
    },
  },
  plugins: [],
}
export default config
