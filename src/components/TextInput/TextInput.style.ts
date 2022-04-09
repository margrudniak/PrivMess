import { StyleSheet, ViewStyle } from "react-native";
import { palette, spacing } from "src/themes";

interface Style {
  mainWrapper: ViewStyle;
  input: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  mainWrapper: {
    padding: spacing[2],
  },
  input: {
    backgroundColor: palette.white,
    padding: spacing[3],
    marginVertical: spacing[3],
    borderWidth: 1,
    borderRadius: 10,
    borderColor: palette.white,
  },
});

export default styles;
