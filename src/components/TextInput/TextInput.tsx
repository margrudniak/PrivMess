import React from "react";
import { TextInput as RNTextInput, View } from "react-native";
import { color, palette, PaletteTypes } from "src/themes";
import { Text } from "../Text/Text";
import styles from "./TextInput.style";
import { TextInputProps } from "./TextInput.types";

export const TextInput = ({
  label,
  notTranslated,
  ...props
}: TextInputProps) => {
  return (
    <View style={styles.mainWrapper}>
      <Text
        numberOfLines={1}
        textCategory="h4"
        text={label}
        color={palette.white as PaletteTypes}
        {...{ notTranslated }}
      />
      <RNTextInput style={styles.input} {...props} />
    </View>
  );
};
