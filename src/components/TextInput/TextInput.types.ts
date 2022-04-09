import { TextProps } from "../Text/Text.types";
import { TextInputProps as RNTextInputProps } from "react-native";

export interface TextInputProps extends RNTextInputProps {
  label: TextProps["text"];
  notTranslated?: TextProps["notTranslated"];
}
