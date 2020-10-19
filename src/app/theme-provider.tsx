import React, { ReactNode } from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: "#07c",
    lightgray: "#f6f6ff",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
  variants: {},
  text: {},
  buttons: {
    default: {
      color: "white",
      bg: "rgb(153, 153, 153)",
    },
    primary: {
      color: "white",
      bg: "#5d68c4",
    },
    info: {
      color: "white",
      bg: "#2a3155",
    },
    success: {
      color: "white",
      bg: "#519a73",
    },
    warning: {
      color: "white",
      bg: "#ce8a3b",
    },
    danger: {
      color: "white",
      bg: "#ce8a3b",
    },
  },
};

const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);

export default ThemeProvider;
