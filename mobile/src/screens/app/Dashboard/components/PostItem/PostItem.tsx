import React from 'react';
import { Text } from 'src/components';
import styles from './PostItem.style';
import { PostItemProps } from './PostItem.types';

export const PostItem = ({ value }: PostItemProps) => {
  return <Text notTranslated textCategory="h2" text={value} />;
};
