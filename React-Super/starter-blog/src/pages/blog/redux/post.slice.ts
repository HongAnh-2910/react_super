import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface TypeStatePost {
  postId: string
}

const initialState: TypeStatePost = {
  postId: ''
}

const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postIdAction: (state, action: PayloadAction<string>) => {
      state.postId = action.payload
    },
    postCancelAction: (state) => {
      state.postId = ''
    }
  }
})
export const { postIdAction, postCancelAction } = postsSlice.actions
export default postsSlice.reducer
