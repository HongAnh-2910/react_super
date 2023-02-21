import { createAction, createReducer } from '@reduxjs/toolkit'
import PostType from '../types/post.type'
import { initStatePostList } from '../constants/initStatePostList'

interface PostList {
  postList: PostType[]
  editStartPost: PostType | null
}

const initState: PostList = {
  postList: initStatePostList,
  editStartPost: null
}

export const addPostAction = createAction<PostType>('post/add_action')

export const deletePostAction = createAction<String>('post/delete_action')

export const startEditAction = createAction<String>('post/start_edit_action')

export const cancelEditAction = createAction('post/cancel_edit_action')

export const editAction = createAction<PostType>('post/edit_action')

const postReducer = createReducer(initState, (builder) => {
  builder.addCase(addPostAction, (state, action) => {
    state.postList.push(action.payload)
  })
  //   redux toolkit su dung immerjs k can phai clone object ms , su dung mute object
  builder.addCase(deletePostAction, (state, action) => {
    let indexId = state.postList.findIndex((x) => x.id === action.payload)
    if (indexId !== -1) {
      state.postList.splice(indexId, 1)
    }
  })

  builder.addCase(startEditAction, (state, action) => {
    let findItem = state.postList.find((x) => x.id === action.payload)
    if (findItem) {
      state.editStartPost = findItem
    }
  })

  builder.addCase(cancelEditAction, (state) => {
    state.editStartPost = null
  })

  builder.addCase(editAction, (state, action) => {
    state.postList.map((item, index) => {
      if (item.id === action.payload.id) {
        return (state.postList[index] = action.payload)
      }
      return item
    })
  })
})
export default postReducer
