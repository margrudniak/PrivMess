import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { palette } from 'src/themes';
import styles from './Loading.style';

export interface LoadingProps {
  small?: boolean;
  large?: boolean;
}

export const Loading = ({ small, large }: LoadingProps) => {
  const size = small ? 'small' : large ? 'large' : void 0;
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={'red'} />
    </View>
  );
};
