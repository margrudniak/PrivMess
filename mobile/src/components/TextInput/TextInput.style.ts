import { StyleSheet, ViewStyle } from "react-native";
import { color, palette, spacing } from "src/themes";

interface Style {
  mainWrapper: ViewStyle;
  inputWrapper: ViewStyle;
  input: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  mainWrapper: {
    padding: spacing[2],
  },
  inputWrapper: {
    backgroundColor: palette.white,
    padding: spacing[3],
    marginVertical: spacing[3],
    borderWidth: 3,
    borderRadius: 10,
    borderColor: color.tertiaryDarker,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  input: {
    width: "90%",
  },
});

export default styles;
