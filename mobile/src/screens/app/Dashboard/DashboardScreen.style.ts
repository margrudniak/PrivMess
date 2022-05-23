import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  mainWrapper: ViewStyle;
  topContainer: ViewStyle;
  middleContainer: ViewStyle;
  bottomContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  mainWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    borderWidth: 3,
    borderColor: 'red'
  },
  topContainer: {
    flex: 0.75,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'blue'
  },
  middleContainer: {
    flex: 10,
    borderWidth: 1,
    borderColor: 'red'
  },
  bottomContainer: {
    // flex: 1.5,
    borderWidth: 2,
    justifyContent: 'flex-start',
    borderColor: 'green'
  }
});

export default styles;
