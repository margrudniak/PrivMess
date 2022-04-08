import React from "react";
import { SignInScreenProps } from "./SignInScreen.types";
import styles from "./SignInScreen.style";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "src/themes";

export const SignInScreen = ({}: SignInScreenProps) => {
  return (
    <>
      <LinearGradient
        colors={[color.tertiary, color.tertiaryDarker]}
        style={styles.linearBackground}
      />
    </>
  );
};
