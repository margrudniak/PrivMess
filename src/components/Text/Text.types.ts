import { TextProps as ReactNativeTextProps } from "react-native";
import { TextStyleProps } from "./Text.style";

export interface TextProps extends ReactNativeTextProps {
  notTranslated?: boolean;
  children?: React.ReactNode;
  text?: string | string[];
  textCategory: TextStyleProps;
}
