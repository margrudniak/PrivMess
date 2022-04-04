import { TextProps as ReactNativeTextProps } from "react-native";

export interface TextProps extends ReactNativeTextProps {
  notTranslated?: boolean;
  children?: React.ReactNode;
  text?: string | string[];
}
