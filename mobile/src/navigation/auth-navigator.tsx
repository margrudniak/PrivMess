import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SignInScreen, SignUpScreen, WelcomeScreen } from 'src/screens/auth';
import { ParamList, Screens } from './screen-params';

export const AuthNavigator = () => {
  const Stack = createStackNavigator<ParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false,
        cardStyle: { backgroundColor: 'transparent' },
        headerShown: false
      }}
      initialRouteName={Screens.Welcome}
    >
      <Stack.Screen name={Screens.Welcome} component={WelcomeScreen} />
      <Stack.Screen name={Screens.SignIn} component={SignInScreen} />
      <Stack.Screen name={Screens.SignUp} component={SignUpScreen} />
    </Stack.Navigator>
  );
};
