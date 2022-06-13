import { StyleSheet, ViewStyle } from 'react-native';
import { spacing } from 'src/themes';

interface Style {
  linearBackground: ViewStyle;
  mainWrapper: ViewStyle;
  topContainer: ViewStyle;
  middleContainer: ViewStyle;
  bottomContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  linearBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  mainWrapper: {
    flex: 1
  },
  topContainer: {
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: spacing[4]
  },
  middleContainer: {
    flex: 10
  },
  bottomContainer: {
    flex: 1.5,
    padding: spacing[2],
    justifyContent: 'flex-start'
  }
});

export default styles;
