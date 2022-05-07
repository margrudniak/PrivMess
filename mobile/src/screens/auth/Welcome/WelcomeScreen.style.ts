import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

interface Style {
  linearBackground: ViewStyle;
  mainWrapper: ViewStyle;
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
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});

export default styles;
