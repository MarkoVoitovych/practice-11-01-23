import { auth } from 'utils/firebase.config';

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser } from './authSlice';

const provider = new GoogleAuthProvider();

export const authWithGoogle = createAsyncThunk(
  'auth/google',
  async (_, thunkApi) => {
    try {
      const {
        user: { displayName: name, email, photoURL: img },
      } = await signInWithPopup(auth, provider);
      return { name, email, img };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authRefreshUser = createAsyncThunk(
  'auth/refresh',
  (_, thunkApi) => {
    try {
      onAuthStateChanged(auth, user => {
        if (user) {
          thunkApi.dispatch(
            setUser({
              name: user.displayName,
              email: user.email,
              img: user.photoURL,
            })
          );
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      //   return { name, email, img };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
