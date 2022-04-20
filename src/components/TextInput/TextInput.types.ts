import { TextProps } from "../Text/Text.types";
import { TextInputProps as RNTextInputProps } from "react-native";
import { Control, FieldErrors, FieldValues } from "react-hook-form";

export interface TextInputProps extends RNTextInputProps {
  label: TextProps["text"];
  notTranslated?: TextProps["notTranslated"];
  control: Control<any>;
  errors: FieldErrors<any>;
}
