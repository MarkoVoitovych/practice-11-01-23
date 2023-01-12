import { createSlice } from '@reduxjs/toolkit';
import { authWithGoogle } from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
    img: '',
  },
  isLoading: false,
  isLogin: false,
  error: null,
  isFetching: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    fetchingOn: state => {
      state.isFetching = true;
    },
    fetchingOff: state => {
      state.isFetching = false;
    },
  },
  extraReducers: build => {
    build
      .addCase(authWithGoogle.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(authWithGoogle.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.isLogin = true;
        state.user = payload;
      })
      .addCase(authWithGoogle.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;

export const { setUser, fetchingOn, fetchingOff } = authSlice.actions;
