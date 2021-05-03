import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import MainNavigator from "./main";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName={"login"}>
      <Stack.Screen
        name={"login"}
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name={"main"}
        component={MainNavigator}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
