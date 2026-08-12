import type { Config } from "tailwindcss";

const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        primary: "#0B2341",
        secondary: "#112B4D",
        accent: "#D4A017",
        background: "#FFFFFF",
        muted: "#F5F7FA",
        text: "#1F2937",
      },
    },
  },
} satisfies Config;

export default tailwindConfig;