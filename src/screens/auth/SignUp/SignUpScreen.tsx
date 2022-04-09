import React from "react";
import { SignUpScreenProps } from "./SignUpScreen.types";
import styles from "./SignUpScreen.style";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "src/themes";
import { Header, Screen } from "src/components";

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const onPressBack = () => navigation.goBack();
  return (
    <>
      <LinearGradient
        colors={[color.tertiary, color.tertiaryDarker]}
        style={styles.linearBackground}
      />
      <Screen style={{ flex: 1, borderWidth: 1, borderColor: "red" }}>
        <Header left="back" onPressLeft={onPressBack} />
      </Screen>
    </>
  );
};
