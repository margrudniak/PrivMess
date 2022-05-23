import React from 'react';
import { Pressable, TextInput as RNTextInput, View } from 'react-native';
import { MessageInputProps } from './MessageInput.types';
import styles from './MessageInput.style';
import { AntDesign } from '@expo/vector-icons';

export const MessageInput = ({}: MessageInputProps) => {
  return (
    <View style={styles.inputWrapper}>
      <RNTextInput multiline autoCapitalize="none" autoCorrect={false} style={styles.input} />
      <Pressable>
        <AntDesign name="rightcircle" size={24} color="black" />
      </Pressable>
    </View>
  );
};
