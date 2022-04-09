import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  wrapper: ViewStyle;
  leftWrapper: ViewStyle;
  middleWrapper: ViewStyle;
  rightWrapper: ViewStyle;
}

const baseWrapper = {
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create<Style>({
  wrapper: {
    flexDirection: "row",
  },
  leftWrapper: {
    ...baseWrapper,
    flex: 1,
  } as ViewStyle,
  middleWrapper: {
    ...baseWrapper,
    flex: 3,
  } as ViewStyle,
  rightWrapper: {
    ...baseWrapper,
    flex: 1,
  } as ViewStyle,
});

export default styles;
