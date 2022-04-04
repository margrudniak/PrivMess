import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "src/components";
import { ButtonProps } from "./Button.types";
import styles from "./Button.style";

export const Button = ({
  children,
  text,
  style,
  notTranslated,
  ...props
}: ButtonProps) => {
  const content = children || (
    <Text numberOfLines={1} {...{ notTranslated, text }} />
  );

  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      {content}
    </TouchableOpacity>
  );
};
