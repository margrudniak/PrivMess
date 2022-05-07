import { Platform } from 'react-native';

export const typography = {
  primary: Platform.select({ ios: 'Roboto', android: 'Roboto-Regular' })
};
