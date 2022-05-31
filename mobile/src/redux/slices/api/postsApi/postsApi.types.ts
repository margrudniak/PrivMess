export interface Post {
  postId: number;
  message: string;
}

export interface GetPostResponse {}

export interface GetPostRequest {
  page: number;
  size: number;
}

export interface CreatePostResponse {
  message: string;
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
