const colors: Record<
  "green" | "yellow" | "blue" | "grey" | "black" | "white",
  {
    dark?: string;
    base: string;
    medium?: string;
    light?: string;
    lightest?: string;
  }
> = {
  green: {
    dark: "#013B2F",
    base: "#01725C",
    light: "#039578",
  },
  yellow: {
    base: "#F6CC25",
    light: "#FFDE5B",
  },
  blue: {
    base: "#3693C2",
  },
  grey: {
    dark: "#A0A0A0",
    base: "#B4B4B4",
    medium: "#DBDBDB",
    light: "#EAEAEA",
    lightest: "#F6F6F6",
  },
  black: {
    base: "#1C1C1C",
  },
  white: {
    base: "#FFFFFF",
  },
} as const;

export default colors;
