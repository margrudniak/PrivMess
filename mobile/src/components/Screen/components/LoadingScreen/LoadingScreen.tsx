import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
import styles from './LoadingScreen.style';
import { LoadingScreenProps } from './LoadingScreen.types';

export const LoadingScreen = ({ loading }: LoadingScreenProps) => {
  return (
    <Modal transparent={true} animationType={'none'} visible={loading}>
      <View pointerEvents="none" style={styles.modalBackground}>
        <View pointerEvents="none" style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} />
        </View>
      </View>
    </Modal>
  );
};
