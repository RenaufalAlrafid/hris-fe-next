import type { Config } from "tailwindcss";

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
      },
      colors: {
        primary: {
            tints: {
                10: "#2691D1",
                20: "#51A7DA",
                30: "#67B2DF",
                40: "#7DBDE3",
                50: "#93C8E8",
                60: "#A8D3ED",
                70: "#BEDEF1",
                80: "#D4E9F6",
                90: "#E9F4FA",
            },
            shades: {
                10: "#2691D1",
                20: "#1E74A7",
                30: "#1B6692",
                40: "#17577D",
                50: "#134969",
                60: "#0F3A54",
                70: "#0B2C3F",
                80: "#081D2A",
                90: "#040F15",
            },
        },
        secondary: {
            tint: {
                10: "#D16626",
                20: "#DA8551",
                30: "#C5D483",
                40: "#E3A37D",
                50: "#E8B393",
                60: "#EDC2A8",
                70: "#F1D1BE",
                80: "#F6E0D4",
                90: "#F7F9ED",
            },
            shades: {
                10: "#D16626",
                20: "#A7521E",
                30: "#92471B",
                40: "#7D3D17",
                50: "#693313",
                60: "#54290F",
                70: "#3F1F0B",
                80: "#2A1408",
                90: "#150A04",
            },
        },
        accent: {
            tint: {
                10: "#059B89",
                20: "#37AFA1",
                30: "#50B9AC",
                40: "#69C3B8",
                50: "#82CDC4",
                60: "#9BD7D0",
                70: "#B4E1DC",
                80: "#CDEBE7",
                90: "#E6F5F3",
            },
            shades: {
                10: "#059B89",
                20: "#047C6E",
                30: "#046D60",
                40: "#035D52",
                50: "#034E45",
                60: "#023E37",
                70: "#022F29",
                80: "#011F1B",
                90: "#01100E",
            },
        },
        text: {
            tint: {
                10: "#475261",
                20: "#6C7581",
                30: "#7E8690",
                40: "#9197A0",
                50: "#A3A9B0",
                60: "#B5BAC0",
                70: "#C8CBD0",
                80: "#DADCDF",
                90: "#EDEEEF",
            },
            shades: {
                10: "#475261",
                20: "#39424E",
                30: "#323944",
                40: "#2B313A",
                50: "#242931",
                60: "#1C2127",
                70: "#15191D",
                80: "#0E1013",
                90: "#07080A",
            },
        },
        neutral: {
            lotion: "#FAFAFA",
            white: "#FFFFFF",
            black: "#000000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
