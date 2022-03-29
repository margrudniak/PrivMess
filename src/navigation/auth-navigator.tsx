import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ParamList, Screens } from "./screen-params";
import { WelcomeScreen } from "src/screens/auth";

export const AuthNavigator = () => {
  const Stack = createStackNavigator<ParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <Stack.Screen name={Screens.Welcome} component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
