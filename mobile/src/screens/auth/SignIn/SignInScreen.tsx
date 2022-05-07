import React from 'react';
import { SignInScreenProps } from './SignInScreen.types';
import styles from './SignInScreen.style';
import { LinearGradient } from 'expo-linear-gradient';
import { color } from 'src/themes';
import { Header, Screen } from 'src/components';

export const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const onPressBack = () => navigation.goBack();
  return (
    <>
      <LinearGradient
        colors={[color.tertiary, color.tertiaryDarker]}
        style={styles.linearBackground}
      />
      <Screen style={styles.mainWrapper}>
        <Header left="back" onPressLeft={onPressBack} />
      </Screen>
    </>
  );
};
