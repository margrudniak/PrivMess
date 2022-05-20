import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isSignedIn: boolean;
  userId: number;
  email: string;
  token: string;
}

const initialState: AuthState = {
  isSignedIn: false,
  userId: 0,
  email: '',
  token: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInAction: (
      state,
      {
        payload: { email, userId, token }
      }: PayloadAction<{ email: string; userId: number; token: string }>
    ) => {
      state.isSignedIn = true;
      state.userId = userId;
      state.email = email;
      state.token = token;
    },
    signOutAction: (state) => {
      state.isSignedIn = false;
      state.userId = 0;
      state.email = '';
      state.token = '';
    }
  }
});

export const { signInAction, signOutAction } = authSlice.actions;

export default authSlice.reducer;
