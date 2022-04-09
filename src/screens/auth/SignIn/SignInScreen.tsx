import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "src/themes";
import { Screen, Header, TextInput } from "src/components";
import { SignInScreenProps } from "./SignInScreen.types";
import styles from "./SignInScreen.style";

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
        <TextInput notTranslated label="E-mail" />
        <TextInput label="form.password" />
      </Screen>
    </>
  );
};
