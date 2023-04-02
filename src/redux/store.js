import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from './todos/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistedTodosReducer = persistReducer(
  { storage, key: 'todos-ls', whitelist: ['items'] },
  todosSlice.reducer
);

export const store = configureStore({
  reducer: {
    [todosSlice.name]: persistedTodosReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
