export interface SignUpRequest {
  email: string;
  password: string;
}

export interface SignUpResponse {
  message: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  id?: number;
  email?: string;
  accessToken?: string;
  message?: string;
}
