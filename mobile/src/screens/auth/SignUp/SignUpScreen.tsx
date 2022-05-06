import React from "react";
import { Alert, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useForm } from "react-hook-form";
import { color } from "src/themes";
import { Screen, Header, TextInput, Button } from "src/components";
import { SignUpInputsType, SignUpScreenProps } from "./SignUpScreen.types";
import styles from "./SignUpScreen.style";

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const { control, handleSubmit } = useForm<SignUpInputsType>();

  const onPressBack = () => navigation.goBack();
  const onSubmit = (data) => {
    console.log("done");
  };

  const rules = {
    email: {
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "emailFormat",
      },
    },
    password: {
      required: true,
      minLength: {
        value: 8,
        message: "passwordLength",
      },
    },
    repeatPassword: {
      required: true,
      minLength: {
        value: 8,
        message: "passwordLength",
      },
      validate: {},
    },
  };

  return (
    <>
      <LinearGradient
        colors={[color.tertiary, color.tertiaryDarker]}
        style={styles.linearBackground}
      />
      <Screen keyboardAware style={styles.mainWrapper}>
        <Header
          left="back"
          onPressLeft={onPressBack}
          style={styles.headerContainer}
        />
        <View style={styles.formWrapper}>
          <TextInput
            notTranslated
            label="E-mail"
            inputType="email"
            rules={rules.email}
            {...{ control }}
          />
          <TextInput
            label="form.password"
            inputType="password"
            rules={rules.password}
            {...{ control }}
          />
          <TextInput
            label="form.repeatPassword"
            inputType="repeatPassword"
            rules={rules.password}
            {...{ control }}
          />
          <Button
            category="secondary"
            textCategory="h3"
            text={"form.register"}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </Screen>
    </>
  );
};
