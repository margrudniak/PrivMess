import { StyleSheet, ViewStyle } from 'react-native';
import { color, spacing } from 'src/themes';

interface Style {
  primary: ViewStyle;
  secondary: ViewStyle;
}

const baseView: ViewStyle = {
  borderRadius: 60,
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center'
};

const styles = StyleSheet.create<Style>({
  primary: {
    ...baseView,
    backgroundColor: color.primary
  },
  secondary: {
    ...baseView,
    backgroundColor: color.secondary
  }
});

export type ButtonViewProps = keyof typeof styles;

export default styles;
