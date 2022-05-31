import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { DismissKeyboard, Screen } from 'src/components';
import { signOutAction, useCreatePostMutation } from 'src/redux/slices';
import { useAppDispatch, useAppSelector } from 'src/utils/hooks';
import styles from './DashboardScreen.style';
import { DashboardScreenProps } from './DashboardScreen.types';
import { MessageInput } from './components';

export const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.userId);

  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleLogout = () => {
    dispatch(signOutAction());
  };

  const handleSendPost = async () => {
    await createPost({ userId, message });
    setMessage('');
  };

  return (
    <Screen keyboardAware style={styles.mainWrapper}>
      <DismissKeyboard>
        <View style={{ flex: 1 }}>
          <View style={styles.topContainer}>
            <Pressable onPress={handleLogout}>
              <MaterialIcons name="logout" size={30} color="black" />
            </Pressable>
          </View>
          <View style={styles.middleContainer}></View>
          <View style={styles.bottomContainer}>
            <MessageInput
              value={message}
              onPress={handleSendPost}
              onChangeText={(text) => setMessage(text)}
            />
          </View>
        </View>
      </DismissKeyboard>
    </Screen>
  );
};
