import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Comics from "../screens/Main/Comics";
import ComicsAll from "../screens/Main/ComicsAll";

const Stack = createStackNavigator();

const ComicsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"SeriesMain"}>
      <Stack.Screen
        name={"ComicsMain"}
        component={Comics}
        options={{
          header: () => null,
          title: "Quadrinhos",
        }}
      />
      <Stack.Screen
        name={"ComicsAll"}
        component={ComicsAll}
        options={{
          header: () => null,
          title: "Todos os Quadrinhos",
        }}
      />
    </Stack.Navigator>
  );
};

export default ComicsNavigator;
