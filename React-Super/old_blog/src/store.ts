import { configureStore } from '@reduxjs/toolkit'
import postReducer from './pages/post.reducer'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: { post: postReducer }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
