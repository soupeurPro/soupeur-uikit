import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#2bcc72",
  primaryBright: "#2bcc72",
  primaryDark: "#2bcc72",
  secondary: "#3fb650",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  primary: "#f6c542",
  primaryBright: "#2bcc72",
  primaryDark: "#2bcc72",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#3fb650",
  textDisabled: "#BDC2C4",
  textSubtle: "#3fb650",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#f6c542",
  primary: "#3fb650",
  primaryBright: "#f6c542",
  primaryDark: "#f6c542",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  tertiary: "#353547",
  text: "#f6c542",
  textDisabled: "#666171",
  textSubtle: "#f6c542",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
