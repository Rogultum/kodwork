import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobScreen from "../screens/JobScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={JobScreen}
        options={{ headerTintColor: "tomato" }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTintColor: "tomato",
        })}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
