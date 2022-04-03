import React from "react";
import { Text as ReactNativeText } from "react-native";
import i18n from "i18n-js";
import { TestProps } from "./Text.types";
import styles from "./Text.style";

export const Test = ({
  notTranslated,
  children,
  text,
  ...props
}: TestProps) => {
  const content = notTranslated ? text : i18n.t(text);

  return (
    <ReactNativeText {...props} style={styles}>
      {content}
    </ReactNativeText>
  );
};
