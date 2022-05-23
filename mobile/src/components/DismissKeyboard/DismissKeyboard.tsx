import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export const DismissKeyboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
};
