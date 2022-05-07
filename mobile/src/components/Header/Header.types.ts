import { StyleProp, ViewStyle } from 'react-native';

export interface HeaderProps {
  left?: 'back';
  onPressLeft?: () => void;
  leftStyle?: StyleProp<ViewStyle>;
  middle?: 'logo';
  middleStyle?: StyleProp<ViewStyle>;
  onPressMiddle?: () => void;
  right?: 'profile';
  rightStyle?: StyleProp<ViewStyle>;
  onPressRight?: () => void;
  style?: StyleProp<ViewStyle>;
}
