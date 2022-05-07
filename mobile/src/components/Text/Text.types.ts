import { TextProps as ReactNativeTextProps } from 'react-native';
import { ColorTypes, PaletteTypes } from 'src/themes';
import { TextStyleProps } from './Text.style';

export interface TextProps extends Omit<ReactNativeTextProps, 'color'> {
  notTranslated?: boolean;
  children?: React.ReactNode;
  text?: string | string[];
  textCategory: TextStyleProps;
  color?: string;
}
