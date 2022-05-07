import React from 'react';
import { Pressable, TextInput as RNTextInput, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { color } from 'src/themes';
import { useTogglePasswordVisibility } from './utils/hooks/useTogglePasswordVisibility';
import { Text } from '../Text/Text';
import { TextInputProps } from './TextInput.types';
import styles from './TextInput.style';

export const TextInput = ({
  label,
  inputType,
  notTranslated,
  control,
  rules,
  ...props
}: TextInputProps) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

  const isPassword = inputType === 'password' || inputType === 'repeatPassword' ? true : false;

  const handleIfSecureText = () => (isPassword && passwordVisibility ? true : false);

  return (
    <Controller
      name={inputType}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
        return (
          <View style={styles.mainWrapper}>
            <Text numberOfLines={1} textCategory="h4" text={label} {...{ notTranslated }} />
            <View style={styles.inputWrapper}>
              <RNTextInput
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onChange}
                secureTextEntry={handleIfSecureText()}
                style={styles.input}
                {...{ onBlur, value }}
                {...props}
              />
              {isPassword && (
                <Pressable onPress={handlePasswordVisibility}>
                  <Ionicons name={rightIcon} size={22} color="#232323" />
                </Pressable>
              )}
            </View>
            {error && (
              <Text
                textCategory="p1"
                color={color.error}
                text={`form_validation.${error.message ? error.message : error.type}`}
              />
            )}
          </View>
        );
      }}
      {...{ control, rules }}
    />
  );
};
