import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"login"}
        component={Login}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
