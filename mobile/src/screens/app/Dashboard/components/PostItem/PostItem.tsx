import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Text } from 'src/components';
import { color, palette } from 'src/themes';
import styles from './PostItem.style';
import { PostItemProps } from './PostItem.types';

export const PostItem = ({ value }: PostItemProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View
        style={{
          margin: 10,
          borderRadius: 3,
          borderWidth: 6,
          borderColor: color.secondary,
          alignItems: 'flex-end',
          backgroundColor: color.secondary
        }}
      >
        <Text notTranslated color={palette.black} textCategory="h2" text={value} />
      </View>
    </TouchableWithoutFeedback>
  );
};
