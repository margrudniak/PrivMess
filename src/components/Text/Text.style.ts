import { StyleSheet, TextStyle } from "react-native";
import { color, typography } from "src/themes";

const base: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 17,
};

interface Style {
  default: TextStyle;
}

const styles = StyleSheet.create<Style>({
  default: base,
});

export type TextStyleProps = keyof typeof styles;

export default styles;
