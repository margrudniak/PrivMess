import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Header, Screen } from 'src/components';
import { color } from 'src/themes';
import styles from './SignInScreen.style';
import { SignInScreenProps } from './SignInScreen.types';

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
