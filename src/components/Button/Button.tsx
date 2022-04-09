import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../Text/Text";
import { ButtonProps } from "./Button.types";
import styles from "./Button.style";

export const Button = ({
  children,
  text,
  category,
  style,
  notTranslated,
  textCategory = "default",
  ...props
}: ButtonProps) => {
  const viewStyle = styles[category] || styles["primary"];

  const content = children || (
    <Text numberOfLines={1} {...{ notTranslated, textCategory, text }} />
  );

  return (
    <TouchableOpacity style={[viewStyle, style]} {...props}>
      {content}
    </TouchableOpacity>
  );
};
