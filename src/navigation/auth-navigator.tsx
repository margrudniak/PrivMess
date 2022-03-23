import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ParamList } from "./screen-params";

export const AuthNavigator = () => {
  const Stack = createStackNavigator<ParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name={Screens.Splash} component={SplashScreen} /> */}
    </Stack.Navigator>
  );
};
