import { StyleSheet, ViewStyle } from "react-native";
import { spacing } from "src/themes";

interface Style {
  container: ViewStyle;
}

const baseView: ViewStyle = {
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  borderRadius: 4,
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create<Style>({
  container: {
    alignSelf: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 60,
    // flex: 1,
    // height: 30,
    // width: 30,
  },
});

// A list of preset names.
export type ButtonPresetNames = keyof typeof styles;

export default styles;
