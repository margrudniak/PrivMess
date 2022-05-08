import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Header, Screen, TextInput } from 'src/components';
import { Screens } from 'src/navigation';
import { useSignUpMutation, useSignInMutation, signInAction } from 'src/redux/slices';
import { color } from 'src/themes';
import { ErrorType } from 'src/types';
import { getErrorMessage } from 'src/utils/helpers';
import { useAppDispatch } from 'src/utils/hooks';
import styles from './SignUpScreen.style';
import { SignUpInputsType, SignUpScreenProps } from './SignUpScreen.types';

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const { control, handleSubmit, watch } = useForm<SignUpInputsType>();
  const dispatch = useAppDispatch();

  const password = useRef({});
  password.current = watch('password', '');

  const [signUp, { isLoading: isLoadingSignUp }] = useSignUpMutation();
  const [signIn, { isLoading: isLoadingSignIn }] = useSignInMutation();

  const onPressBack = () => navigation.goBack();

  const onSubmit = async (data: SignUpInputsType) => {
    const { repeatPassword, ...inputData } = data;
    try {
      const user = await signUp(inputData).unwrap();
      if (user) {
        showMessage({
          message: user.message,
          type: 'success'
        });
        const userSignedIn = await signIn(inputData).unwrap();
        if (userSignedIn.accessToken && userSignedIn.email) {
          dispatch(signInAction({ email: userSignedIn.email, token: userSignedIn.accessToken }));
          navigation.navigate(Screens.Dashboard);
        }
      }
    } catch (error) {
      showMessage({
        message: getErrorMessage(error as ErrorType),
        type: 'danger'
      });
    }
  };

  const rules = {
    email: {
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'emailFormat'
      }
    },
    password: {
      required: true,
      minLength: {
        value: 8,
        message: 'passwordLength'
      }
    },
    repeatPassword: {
      required: true,
      minLength: {
        value: 8,
        message: 'passwordLength'
      },
      validate: (value: string) => value === password.current || 'passwordsMatch'
    }
  };

  return (
    <>
      <LinearGradient
        colors={[color.tertiary, color.tertiaryDarker]}
        style={styles.linearBackground}
      />
      <Screen keyboardAware style={styles.mainWrapper}>
        <Header left="back" onPressLeft={onPressBack} style={styles.headerContainer} />
        <View style={styles.formWrapper}>
          <TextInput
            notTranslated
            label="E-mail"
            inputType="email"
            rules={rules.email}
            control={control}
          />
          <TextInput
            label="form.password"
            inputType="password"
            rules={rules.password}
            control={control}
          />
          <TextInput
            label="form.repeatPassword"
            inputType="repeatPassword"
            rules={rules.repeatPassword}
            control={control}
          />
          <Button
            category="secondary"
            textCategory="h3"
            text={'form.register'}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </Screen>
    </>
  );
};
