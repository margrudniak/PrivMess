import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  linearBackground: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  linearBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default styles;
