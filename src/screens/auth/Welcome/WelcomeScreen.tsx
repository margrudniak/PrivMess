import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Screen, Button } from "src/components";
import { WelcomeScreenProps } from "./WelcomeScreen.types";
import styles from "./WelcomeScreen.style";

export const WelcomeScreen = ({}: WelcomeScreenProps) => {
  return (
    <>
      <LinearGradient
        colors={["#404040", "#202020"]}
        style={styles.linearBackground}
      />
      <Screen
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Button
          category="primary"
          textCategory="h3"
          text={"auth.logIn"}
          onPress={() => console.log("test")}
        />
        <Button
          category="secondary"
          textCategory="h3"
          text={"auth.createNewAccount"}
          onPress={() => console.log("test")}
        />
      </Screen>
    </>
  );
};
