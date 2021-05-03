import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Characters from "../screens/Main/Characters";

const Stack = createStackNavigator();

const CharacterNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"CharactersMain"}
        component={Characters}
        options={{
          header: () => null,
          title: "Personagens",
        }}
      />
    </Stack.Navigator>
  );
};

export default CharacterNavigator;
