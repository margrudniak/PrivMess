import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DashboardScreen } from 'src/screens/app';
import { ParamList, Screens } from './screen-params';

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
