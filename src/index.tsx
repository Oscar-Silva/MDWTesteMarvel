import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "./commom/theme";
import MainNavigator from "./navigations";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import fonts from "./assets/fonts";

const MainApp = () => {
  const [loadedFonts, error] = useFonts({
    ...fonts,
  });

  if (!loadedFonts) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default MainApp;
