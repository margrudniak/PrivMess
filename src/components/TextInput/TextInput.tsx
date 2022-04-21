import React, { useEffect } from "react";
import { TextInput as RNTextInput, View } from "react-native";
import { Controller, useController } from "react-hook-form";
import { color, palette, PaletteTypes } from "src/themes";
import { Text } from "../Text/Text";
import styles from "./TextInput.style";
import { TextInputProps } from "./TextInput.types";

export const TextInput = ({
  label,
  inputType,
  notTranslated,
  control,
  rules,
  ...props
}: TextInputProps) => {
  return (
    <Controller
      name={inputType}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <View style={styles.mainWrapper}>
            <Text
              numberOfLines={1}
              textCategory="h4"
              text={label}
              {...{ notTranslated }}
            />
            <RNTextInput
              onChangeText={onChange}
              style={styles.input}
              {...{ onBlur, value }}
              {...props}
            />
            {error && (
              <Text
                textCategory="p1"
                color={color.error}
                text={`form_validation.${error.type}`}
              />
            )}
          </View>
        );
      }}
      {...{ control, rules }}
    />
  );
};
