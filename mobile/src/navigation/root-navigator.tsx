import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthNavigator } from './auth-navigator';
import { MainNavigator } from './main-navigator';

export type RootParamList = {
  authStack: undefined;
  mainStack: undefined;
};

const Stack = createStackNavigator<RootParamList>();

const RootStack = () => {
  const isSignedIn = false;

  const navigatorComponent = isSignedIn ? MainNavigator : AuthNavigator;
  const navigatorName = isSignedIn ? 'mainStack' : 'authStack';

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name={navigatorName}
        component={navigatorComponent}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer
      //   theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <RootStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';
