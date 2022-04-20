import React from "react";
import { Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useForm } from "react-hook-form";
import { color } from "src/themes";
import { Screen, Header, TextInput, Button } from "src/components";
import { SignInInputsType, SignInScreenProps } from "./SignInScreen.types";
import styles from "./SignInScreen.style";

export const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputsType>();

  const onPressBack = () => navigation.goBack();
  const onSubmit = (data) => {
    console.log("done");
  };

  return (
    <>
      <LinearGradient
        colors={[color.tertiary, color.tertiaryDarker]}
        style={styles.linearBackground}
      />
      <Screen style={styles.mainWrapper}>
        <Header left="back" onPressLeft={onPressBack} />
        <TextInput
          notTranslated
          label="E-mail"
          {...register("email", { required: true })}
          {...{ control, errors }}
        />
        <TextInput
          label="form.password"
          {...register("password", { required: true })}
          {...{ control, errors }}
        />
        <Button
          category="secondary"
          textCategory="h3"
          text={"form.register"}
          onPress={handleSubmit(onSubmit)}
        />
      </Screen>
    </>
  );
};
