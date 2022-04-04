import React from "react";
import { Text as ReactNativeText } from "react-native";
import i18n from "i18n-js";
import { TextProps } from "./Text.types";
import styles from "./Text.style";

export const Text = ({
  notTranslated,
  children,
  text = "",
  ...props
}: TextProps) => {
  const content = notTranslated ? text : i18n.t(text);

  return (
    <ReactNativeText {...props} style={styles}>
      {content}
    </ReactNativeText>
  );
};
