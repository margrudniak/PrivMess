import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Screen, Button } from 'src/components';
import { WelcomeScreenProps } from './WelcomeScreen.types';
import styles from './WelcomeScreen.style';
import { color } from 'src/themes';
import { Screens } from 'src/navigation';
import { useTestGetQuery } from 'src/redux/slices';

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
