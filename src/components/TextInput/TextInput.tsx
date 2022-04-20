import React, { useEffect } from "react";
import { TextInput as RNTextInput, View } from "react-native";
import { useController } from "react-hook-form";
import { color, palette, PaletteTypes } from "src/themes";
import { Text } from "../Text/Text";
import styles from "./TextInput.style";
import { TextInputProps } from "./TextInput.types";

export const TextInput = ({
  label,
  notTranslated,
  control,
  errors,
  ...props
}: TextInputProps) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name: label as string,
  });

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  return (
    <View style={styles.mainWrapper}>
      <Text
        numberOfLines={1}
        textCategory="h4"
        text={label}
        color={palette.white as PaletteTypes}
        {...{ notTranslated }}
      />
      <RNTextInput
        value={field.value}
        onChangeText={field.onChange}
        style={styles.input}
        {...props}
      />
    </View>
  );
};
