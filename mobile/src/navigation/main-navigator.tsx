import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamList, Screens } from './screen-params';
import { DashboardScreen } from 'src/screens/app';

export const MainNavigator = () => {
  const Stack = createStackNavigator<ParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        headerShown: false
      }}
    >
      <Stack.Screen name={Screens.Dashboard} component={DashboardScreen} />
    </Stack.Navigator>
  );
};
