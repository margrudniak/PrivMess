import React from "react";
import { Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useForm } from "react-hook-form";
import { color } from "src/themes";
import { Screen, Header, TextInput, Button } from "src/components";
import { SignInScreenProps } from "./SignInScreen.types";
import styles from "./SignInScreen.style";

export const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const { control, handleSubmit } = useForm();

  const onPressBack = () => navigation.goBack();
  const onSubmit = (data) => Alert.alert(JSON.stringify(data));

  return (
    <>
      <LinearGradient
        colors={[color.tertiary, color.tertiaryDarker]}
        style={styles.linearBackground}
      />
      <Screen style={styles.mainWrapper}>
        <Header left="back" onPressLeft={onPressBack} />
        <TextInput notTranslated label="E-mail" {...{ control }} />
        <TextInput label="form.password" {...{ control }} />
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
