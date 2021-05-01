import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "./commom/theme";
import MainNavigator from "./navigations";

const MainApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default MainApp;
