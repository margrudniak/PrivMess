import React from "react";
import { SignUpScreenProps } from "./SignUpScreen.types";
import styles from "./SignUpScreen.style";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "src/themes";

export const SignUpScreen = ({}: SignUpScreenProps) => {
  return (
    <>
      <LinearGradient
        colors={[color.tertiary, color.tertiaryDarker]}
        style={styles.linearBackground}
      />
    </>
  );
};
