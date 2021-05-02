import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "styled-components/native";
import theme from "./commom/theme";
import Navigator from "./navigations";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import fonts from "./assets/fonts";
import { Provider } from "react-redux";
import store from "./redux";

const MainApp = () => {
  const [loadedFonts, error] = useFonts({
    ...fonts,
  });

  if (!loadedFonts) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default MainApp;
