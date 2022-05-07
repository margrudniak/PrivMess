import React, { useRef } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import { color } from 'src/themes';
import { Screen, Header, TextInput, Button } from 'src/components';
import { SignUpInputsType, SignUpScreenProps } from './SignUpScreen.types';
import { getErrorMessage } from 'src/utils/helpers';
import { useSignUpMutation } from 'src/redux/slices';
import { ErrorType } from 'src/types';
import styles from './SignUpScreen.style';

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const { control, handleSubmit, watch } = useForm<SignUpInputsType>();
  const password = useRef({});
  password.current = watch('password', '');

  const [signUp, { isLoading }] = useSignUpMutation();

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
