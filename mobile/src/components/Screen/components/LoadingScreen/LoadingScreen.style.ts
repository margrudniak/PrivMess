import { StyleSheet, ViewStyle } from 'react-native';
import { palette } from 'src/themes';

interface Style {
  modalBackground: ViewStyle;
  activityIndicatorWrapper: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: palette.stratos
  },
  activityIndicatorWrapper: {
    backgroundColor: palette.white,
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default styles;
