import { TextProps } from '../Text/Text.types';
import { TextInputProps as RNTextInputProps } from 'react-native';
import { Control, FieldErrors, UseControllerProps } from 'react-hook-form';

export interface TextInputProps extends RNTextInputProps {
  label: TextProps['text'];
  inputType: string;
  notTranslated?: TextProps['notTranslated'];
  control: Control<any>;
  rules?: UseControllerProps['rules'];
}
