import { Control, FieldErrors, UseControllerProps } from 'react-hook-form';
import { TextInputProps as RNTextInputProps } from 'react-native';
import { TextProps } from '../Text/Text.types';

export interface TextInputProps extends RNTextInputProps {
  label: TextProps['text'];
  inputType: string;
  notTranslated?: TextProps['notTranslated'];
  control: Control<any>;
  rules?: UseControllerProps['rules'];
}
