import { DefaultTheme } from "styled-components/native";

interface GradientColor {
  start: string;
  end: string;
}

interface GradientColors {
  primaryWithOpacity1: string[];
  secondary: string[];
  secondaryWithOpacity: string[];
  secondaryWithOpacity2: string[];
  secondaryWithOpacity2Inverted: string[];
}

interface Colors {
  primary: string;
  secondary: string;
  terciary: string;
  gradient: GradientColors;
}

interface Theme {
  colors: Colors;
}

const colors: Colors = {
  primary: "#000",
  secondary: "#FF0000",
  terciary: "#FFF",
  gradient: {
    primaryWithOpacity1: [
      "#000",
      "rgba(33,33,33, 0.74)",
      "rgba(128,128,128, 0)",
    ],
    secondary: ["#FF0000", "#800000"],
    secondaryWithOpacity: ["rgba(128, 0, 0, 0.30)", "rgba(250, 0, 0, 1)"],
    secondaryWithOpacity2Inverted: ["rgba(128, 0, 0, 0)", "rgba(250, 0, 0, 1)"],
    secondaryWithOpacity2: ["rgba(250, 0, 0, 1)", "rgba(128, 0, 0, 0)"],
  },
};

const theme: Theme = {
  colors,
};

export default theme;
