import React from 'react';
import { DismissKeyboard, Screen } from 'src/components';
import { signOutAction } from 'src/redux/slices';
import { useAppDispatch } from 'src/utils/hooks';
import { MessageInput } from './components';
import styles from './DashboardScreen.style';
import { DashboardScreenProps } from './DashboardScreen.types';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

export const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(signOutAction());
  };
  return (
    <Screen keyboardAware style={styles.mainWrapper}>
      <DismissKeyboard>
        <View style={{ flex: 1 }}>
          <View style={styles.topContainer}>
            <Pressable onPress={handleLogout}>
              <MaterialIcons name="logout" size={30} color="black" />
            </Pressable>
          </View>
          <View style={styles.middleContainer}></View>
          <View style={styles.bottomContainer}>
            <MessageInput />
          </View>
        </View>
      </DismissKeyboard>
    </Screen>
  );
};
