import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  linearBackground: ViewStyle;
  headerContainer: ViewStyle;
  mainWrapper: ViewStyle;
  formWrapper: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  linearBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  headerContainer: {
    flex: 1,
  },
  mainWrapper: {
    flex: 1,
    justifyContent: "flex-start",
  },
  formWrapper: {
    flex: 12,
    justifyContent: "center",
  },
});

export default styles;
