import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Text } from 'src/components';
import { palette } from 'src/themes';
import styles from './PostItem.style';
import { PostItemProps } from './PostItem.types';

export const PostItem = ({ value }: PostItemProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <Text notTranslated color={palette.black} textCategory="h2" text={value} />
    </TouchableWithoutFeedback>
  );
};
