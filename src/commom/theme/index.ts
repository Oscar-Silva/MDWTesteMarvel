import { DefaultTheme } from "styled-components/native";

interface GradientColor {
  start: string;
  end: string;
}

interface GradientColors {
  secondary: GradientColor;
  secondaryWithOpacity: GradientColor;
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
    secondary: {
      start: "#FF0000",
      end: "#800000",
    },
    secondaryWithOpacity: {
      start: "rgba(255, 0, 0, 1)",
      end: "rgba(128, 0, 0, 0.30)",
    },
  },
};

const theme: Theme = {
  colors,
};

export default theme;
