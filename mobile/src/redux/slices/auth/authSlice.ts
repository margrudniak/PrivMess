import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isSignedIn: boolean;
  email: string;
  token: string;
}

const initialState: AuthState = {
  isSignedIn: false,
  email: '',
  token: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInAction: (
      state,
      { payload: { email, token } }: PayloadAction<{ email: string; token: string }>
    ) => {
      state.isSignedIn = true;
      state.email = email;
      state.token = token;
    },
    signOutAction: (state) => {
      state.isSignedIn = false;
      state.email = '';
      state.token = '';
    }
  }
});

export const { signInAction, signOutAction } = authSlice.actions;

export default authSlice.reducer;
