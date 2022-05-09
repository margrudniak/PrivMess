import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Header, Screen, TextInput } from 'src/components';
import { signInAction, useSignInMutation } from 'src/redux/slices';
import { color } from 'src/themes';
import { ErrorType } from 'src/types';
import { getErrorMessage } from 'src/utils/helpers';
import { useAppDispatch } from 'src/utils/hooks';
import styles from './SignInScreen.style';
import { SignInInputsType, SignInScreenProps } from './SignInScreen.types';

export const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const { control, handleSubmit, watch } = useForm<SignInInputsType>();
  const dispatch = useAppDispatch();

  const [signIn, { isLoading: isLoadingSignIn }] = useSignInMutation();

  const onSubmit = async (data: SignInInputsType) => {
    try {
      const userSignedIn = await signIn(data).unwrap();
      if (userSignedIn.accessToken && userSignedIn.email) {
        dispatch(signInAction({ email: userSignedIn.email, token: userSignedIn.accessToken }));
      }
    } catch (error) {
      showMessage({
        message: getErrorMessage(error as ErrorType),
        type: 'danger'
      });
    }
  };

  const onPressBack = () => navigation.goBack();

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
    }
  };

  return (
    <>
      <LinearGradient
        colors={[color.tertiary, color.tertiaryDarker]}
        style={styles.linearBackground}
      />
      <Screen keyboardAware style={styles.mainWrapper}>
        <Header left="back" onPressLeft={onPressBack} />
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
