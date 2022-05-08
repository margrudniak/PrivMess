import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Screen, Text } from 'src/components';
import { Screens } from 'src/navigation';
import { useTestGetQuery } from 'src/redux/slices';
import { color } from 'src/themes';
import styles from './WelcomeScreen.style';
import { WelcomeScreenProps } from './WelcomeScreen.types';

export const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  const { data, error } = useTestGetQuery();
  // const onClickLogin = () => testGet();
  const onClickLogin = () => navigation.navigate(Screens.SignIn);
  const onClickRegister = () => navigation.navigate(Screens.SignUp);

  useEffect(() => {
    console.log('error', error);
    console.log('data', data);
  }, [error, data]);

  return (
    <>
      <LinearGradient
        colors={[color.tertiary, color.tertiaryDarker]}
        style={styles.linearBackground}
      />
      <Screen style={styles.mainWrapper}>
        <Button category="primary" textCategory="h3" text={'auth.logIn'} onPress={onClickLogin} />
        <Button
          category="secondary"
          textCategory="h3"
          text={'auth.createNewAccount'}
          onPress={onClickRegister}
        />
      </Screen>
    </>
  );
};
