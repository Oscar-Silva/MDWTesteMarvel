import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Series from "../screens/Main/Series";

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
      {/* <Stack.Screen
        name={"SeriesAll"}
        component={() => null}
        options={{
          header: () => null,
          title: "Personagens",
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default SeriesNavigator;
