import { StyleSheet, TextStyle } from 'react-native';
import { color, typography } from 'src/themes';

const base: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 17
};

interface Style {
  default: TextStyle;
  h0: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  p1: TextStyle;
  p2: TextStyle;
}

const styles = StyleSheet.create<Style>({
  default: base,
  h0: {
    ...base,
    fontSize: 40
  },
  h1: {
    ...base,
    fontSize: 32
  },
  h2: {
    ...base,
    fontSize: 26
  },
  h3: {
    ...base,
    fontSize: 22
  },
  h4: {
    ...base,
    fontSize: 20
  },
  p1: {
    ...base,
    fontSize: 13
  },
  p2: {
    ...base,
    fontSize: 11
  }
});

export type TextStyleProps = keyof typeof styles;

export default styles;
