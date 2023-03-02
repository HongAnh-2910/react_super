import { configureStore } from '@reduxjs/toolkit'
import { postApi } from 'pages/blog/redux/post.service'
import postSlice from 'pages/blog/redux/post.slice'

export const store = configureStore({
  reducer: {
    post: postSlice,
    [postApi.reducerPath]: postApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
