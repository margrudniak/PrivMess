import React from "react";
import { Text as ReactNativeText } from "react-native";
import i18n from "i18n-js";
import { TextProps } from "./Text.types";
import styles from "./Text.style";

export const Text = ({
  notTranslated,
  children,
  text = "",
  textCategory,
  color,
  style,
  ...props
}: TextProps) => {
  const content = notTranslated ? text : i18n.t(text);

  const textColor = color ? { color } : {};

  const textStyle = styles[textCategory] || styles.default;

  const concatanedStyle = [textStyle, textColor, style];

  return (
    <ReactNativeText {...props} style={concatanedStyle}>
      {content}
    </ReactNativeText>
  );
};
