import type { Config } from "tailwindcss";

const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        primary: "#0A1B33",
        secondary: "#0F2A52",
        accent: "#1E56A0",
        background: "#FFFFFF",
        muted: "#F5F7FA",
        text: "#1F2937",
      },
    },
  },
} satisfies Config;

export default tailwindConfig;