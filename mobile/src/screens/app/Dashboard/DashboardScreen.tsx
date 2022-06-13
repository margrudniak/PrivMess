import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, Pressable, View } from 'react-native';
import { DismissKeyboard, Screen } from 'src/components';
import {
  GetPostResponse,
  Post,
  signOutAction,
  useCreatePostMutation,
  useLazyGetPostsQuery
} from 'src/redux/slices';
import { useAppDispatch, useAppSelector, useDidUpdateEffect } from 'src/utils/hooks';
import styles from './DashboardScreen.style';
import { DashboardScreenProps } from './DashboardScreen.types';
import { MessageInput } from './components';
import { PostItem } from './components/PostItem/PostItem';
import { color } from 'src/themes';
import { LinearGradient } from 'expo-linear-gradient';

export const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  const [posts, setPosts] = useState<GetPostResponse | Post[]>([]);
  const [page, setPage] = useState(0);
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.userId);
  const [trigger, { data: apiPosts, isLoading: isLoadingGetPosts }] = useLazyGetPostsQuery();
  const [createPost, { isLoading: isLoadignCreatePost }] = useCreatePostMutation();

  useEffect(() => {
    readData();
  }, []);

  useDidUpdateEffect(() => {
    readData();
  }, [page]);

  useEffect(() => {
    if (apiPosts?.length) {
      setPosts((prev) => [...prev, ...apiPosts]);
    }
  }, [apiPosts]);

  const readData = async () => await trigger({ userId, page });

  const handleLogout = () => dispatch(signOutAction());

  const handleSendPost = async () => {
    const post = await createPost({ userId, message }).unwrap();
    if (post) {
      setPosts((prev) => [post, ...prev]);
    }
    setMessage('');
  };

  const loadMoreData = async () => setPage((prev) => prev + 1);

  return (
    <>
      <LinearGradient
        colors={[color.tertiary, color.tertiaryDarker]}
        style={styles.linearBackground}
      />
      <Screen
        keyboardAware
        isLoading={isLoadingGetPosts || isLoadignCreatePost}
        style={styles.mainWrapper}
      >
        <DismissKeyboard>
          <View style={styles.topContainer}>
            <Pressable onPress={handleLogout}>
              <MaterialIcons name="logout" size={30} color="white" />
            </Pressable>
          </View>
          <View style={styles.middleContainer}>
            <FlatList
              keyExtractor={(item) => `${item.id}`}
              data={posts}
              renderItem={({ item }: ListRenderItemInfo<Post>) => <PostItem value={item.message} />}
              onEndReached={loadMoreData}
              onEndReachedThreshold={0.1}
              inverted
            />
          </View>
          <View style={styles.bottomContainer}>
            <MessageInput
              value={message}
              onPress={handleSendPost}
              onChangeText={(text) => setMessage(text)}
            />
          </View>
        </DismissKeyboard>
      </Screen>
    </>
  );
};
