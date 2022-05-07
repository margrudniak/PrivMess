import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    signIn: (
      state,
      { payload: { email, token } }: PayloadAction<{ email: string; token: string }>
    ) => {
      state.isSignedIn = true;
      state.email = email;
      state.token = token;
    },
    signOut: (state) => {
      state.isSignedIn = false;
      state.email = '';
      state.token = '';
    }
  }
});

export default authSlice.reducer;
