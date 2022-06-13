export interface Post {
  id: number;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetPostResponse extends Array<Post | CreatePostResponse> {}

export interface GetPostRequest {
  userId: number;
  page?: number;
  size?: number;
}

export interface CreatePostResponse {
  data: Post;
}

export interface CreatePostRequest {
  userId: number;
  message: string;
}

export interface RemovePostResponse {
  message: string;
}

export interface RemovePostRequest {
  userId: number;
  postId: number;
}
