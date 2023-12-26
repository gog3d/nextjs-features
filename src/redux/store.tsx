'use client';
import { configureStore } from '@reduxjs/toolkit';
import { cupReducer } from './features/cup';
import { formReducer, } from './features/form';
import { searchReducer, } from './features/search';


export const store = configureStore({
  reducer: {
    cup: cupReducer,
    form: formReducer,
    search: searchReducer
  }
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch