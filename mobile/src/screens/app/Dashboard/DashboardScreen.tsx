import React from 'react';
import { Button, Screen } from 'src/components';
import { Screens } from 'src/navigation';
import { signOutAction } from 'src/redux/slices';
import { useAppDispatch } from 'src/utils/hooks';
import styles from './DashboardScreen.style';
import { DashboardScreenProps } from './DashboardScreen.types';

export const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(signOutAction());
  };
  return (
    <Screen style={{ flex: 1, backgroundColor: 'black' }}>
      <Button notTranslated category="secondary" text="logout" onPress={handleLogout} />
    </Screen>
  );
};
