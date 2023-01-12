import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'isLogin',
  storage,
  whitelist: ['isLogin'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: persistedAuthReducer,
  // middleware: d => d({ serializableCheck:  }),
});

export const persistor = persistStore(store);
