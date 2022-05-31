import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Pressable, TextInput as RNTextInput, View } from 'react-native';
import styles from './MessageInput.style';
import { MessageInputProps } from './MessageInput.types';

export const MessageInput = ({ value, onPress, onChangeText }: MessageInputProps) => {
  return (
    <View style={styles.inputWrapper}>
      <RNTextInput
        multiline
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <Pressable onPress={onPress}>
        <AntDesign name="rightcircle" size={24} color="black" />
      </Pressable>
    </View>
  );
};
