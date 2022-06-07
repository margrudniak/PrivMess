import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, ListRenderItemInfo, Pressable, View } from 'react-native';
import { DismissKeyboard, Screen } from 'src/components';
import {
  GetPostResponse,
  Post,
  signOutAction,
  useCreatePostMutation,
  useGetPostsQuery
} from 'src/redux/slices';
import { useAppDispatch, useAppSelector } from 'src/utils/hooks';
import styles from './DashboardScreen.style';
import { DashboardScreenProps } from './DashboardScreen.types';
import { MessageInput } from './components';
import { PostItem } from './components/PostItem/PostItem';

export const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  const [posts, setPosts] = useState<GetPostResponse>([]);
  const [page, setPage] = useState(0);
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.userId);

  const { data: apiPosts, isLoading: isLoadingGetPosts } = useGetPostsQuery({ userId, page });
  const [createPost, { isLoading: isLoadignCreatePos }] = useCreatePostMutation();

  useEffect(() => {
    if (apiPosts) {
      setPosts((prev) => [...prev, ...apiPosts]);
    }
  }, [apiPosts, page]);

  const handleLogout = () => {
    dispatch(signOutAction());
  };

  const handleSendPost = async () => {
    await createPost({ userId, message });
    setMessage('');
  };

  const loadMoreData = async () => {
    setPage((prev) => prev + 1);
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
          <View style={styles.middleContainer}>
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              keyExtractor={(item) => `${item.id}`}
              data={posts}
              renderItem={({ item }: ListRenderItemInfo<Post>) => <PostItem value={item.message} />}
              onEndReached={loadMoreData}
              onEndReachedThreshold={0.1}
            />
          </View>
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
