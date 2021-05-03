import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Series from "../screens/Main/Series";
import SeriesAll from "../screens/Main/SeriesAll";

const Stack = createStackNavigator();

const SeriesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"SeriesMain"}>
      <Stack.Screen
        name={"SeriesMain"}
        component={Series}
        options={{
          header: () => null,
          title: "Filmes",
        }}
      />
      <Stack.Screen
        name={"SeriesAll"}
        component={SeriesAll}
        options={{
          header: () => null,
          title: "Todos os personagens",
        }}
      />
    </Stack.Navigator>
  );
};

export default SeriesNavigator;
