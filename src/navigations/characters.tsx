import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Characters from "../screens/Main/Characters";
import CharactersAll from "../screens/Main/CharactersAll";

const Stack = createStackNavigator();

const CharacterNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"CharactersMain"}>
      <Stack.Screen
        name={"CharactersMain"}
        component={Characters}
        options={{
          header: () => null,
          title: "Personagens",
        }}
      />
      <Stack.Screen
        name={"CharactersAll"}
        component={CharactersAll}
        options={{
          header: () => null,
          title: "Personagens",
        }}
      />
    </Stack.Navigator>
  );
};

export default CharacterNavigator;
