import { PayloadAction, createSlice, nanoid, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit'
import PostType from '../types/post.type'
import http from '../utils/http.post'

interface PostList {
  postList: PostType[]
  editStartPost: PostType | null
  isLoading: boolean
  requestId: null | string
  isLoadingCreate: boolean
}

const initState: PostList = {
  postList: [],
  editStartPost: null,
  isLoading: false,
  requestId: null,
  isLoadingCreate: false
}

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

export const getListPost = createAsyncThunk('post/get_posts_success', async (_, thunkAPI) => {
  const response = await http.get<PostType[]>('posts', {
    signal: thunkAPI.signal
  })
  return response.data
})

export const addPost = createAsyncThunk('post/add_post', async (post: Omit<PostType, 'id'>, thunkAPI) => {
  try {
    const response = await http.post<PostType>('posts', post, {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const startEditPost = createAsyncThunk('post/start_edit_post', async (id: string, thunkAPI) => {
  const response = await http.get<PostType>(`posts/${id}`, {
    signal: thunkAPI.signal
  })
  return response.data
})

export const editPost = createAsyncThunk('post/edit', async (body: PostType, thunkAPI) => {
  try {
    const response = await http.put(`posts/${body.id}`, body, {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const removePost = createAsyncThunk('post/remove', async (id: string, thunkAPI) => {
  const response = await http.delete(`posts/${id}`, {
    signal: thunkAPI.signal
  })
  return response
})

const postReducer = createSlice({
  name: 'post',
  initialState: initState,
  reducers: {
    deletePostAction: (state, action: PayloadAction<string>) => {
      let indexId = state.postList.findIndex((x) => x.id === action.payload)
      if (indexId !== -1) {
        state.postList.splice(indexId, 1)
      }
    },
    startEditAction: (state, action: PayloadAction<string>) => {
      let findItem = state.postList.find((x) => x.id === action.payload)
      if (findItem) {
        state.editStartPost = findItem
      }
    },
    cancelEditAction: (state) => {
      state.editStartPost = null
    },
    editAction: (state, action: PayloadAction<PostType>) => {
      let index = state.postList.findIndex((x) => x.id === action.payload.id)
      state.postList[index] = action.payload
    },
    addPostAction: {
      reducer: (state, action: PayloadAction<PostType>) => {
        state.postList.push(action.payload)
      },
      prepare: (post: Omit<PostType, 'id'>) => {
        return {
          payload: {
            ...post,
            id: nanoid()
          }
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getListPost.fulfilled, (state, action) => {
      state.postList = action.payload
    })
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.postList.push(action.payload)
    })
    builder.addCase(startEditPost.fulfilled, (state, action) => {
      state.editStartPost = action.payload
    })
    builder.addCase(editPost.fulfilled, (state, action) => {
      let index = state.postList.findIndex((x) => x.id === action.payload.id)
      state.postList[index] = action.payload
    })
    builder.addCase(removePost.fulfilled, (state, action) => {
      let idPost = action.meta.arg
      let indexId = state.postList.findIndex((x) => x.id === idPost)
      if (indexId !== -1) {
        state.postList.splice(indexId, 1)
      }
    })
    builder.addMatcher(
      (action): action is PendingAction => action.type.endsWith('/get_posts_success/pending'),
      (state, action) => {
        state.isLoading = true
        state.requestId = action.meta.requestId
      }
    )
    builder.addMatcher(
      (action): action is RejectedAction | FulfilledAction =>
        action.type.endsWith('/get_posts_success/rejected') || action.type.endsWith('/get_posts_success/fulfilled'),
      (state, action) => {
        if (state.isLoading === true && state.requestId === action.meta.requestId) {
          state.isLoading = false
        }
      }
    )
    builder.addMatcher(
      (action): action is PendingAction => action.type.endsWith('/start_edit_post/pending'),
      (state, action) => {
        state.isLoadingCreate = true
        state.requestId = action.meta.requestId
      }
    )
    builder.addMatcher(
      (action): action is RejectedAction | FulfilledAction =>
        action.type.endsWith('/start_edit_post/rejected') || action.type.endsWith('/start_edit_post/fulfilled'),
      (state, action) => {
        if (state.isLoadingCreate === true && state.requestId === action.meta.requestId) {
          state.isLoadingCreate = false
        }
      }
    )
  }
})
export const { deletePostAction, startEditAction, cancelEditAction, addPostAction, editAction } = postReducer.actions
export default postReducer.reducer
// export const addPostAction = createAction('post/add_action', function prepare(post: Omit<PostType, 'id'>) {
//   return {
//     payload: {
//       ...post,
//       id: nanoid()
//     }
//   }
// })

// export const deletePostAction = createAction<String>('post/delete_action')

// export const startEditAction = createAction<String>('post/start_edit_action')

// export const cancelEditAction = createAction('post/cancel_edit_action')

// export const editAction = createAction<PostType>('post/edit_action')

// const postReducer = createReducer(initState, (builder) => {
//   builder.addCase(addPostAction, (state, action) => {
//     state.postList.push(action.payload)
//   })
//   //   redux toolkit su dung immerjs k can phai clone object ms , su dung mute object
//   builder.addCase(deletePostAction, (state, action) => {
//     let indexId = state.postList.findIndex((x) => x.id === action.payload)
//     if (indexId !== -1) {
//       state.postList.splice(indexId, 1)
//     }
//   })

//   builder.addCase(startEditAction, (state, action) => {
//     let findItem = state.postList.find((x) => x.id === action.payload)
//     if (findItem) {
//       state.editStartPost = findItem
//     }
//   })

//   builder.addCase(cancelEditAction, (state) => {
//     state.editStartPost = null
//   })

//   builder.addCase(editAction, (state, action) => {
//     state.postList.map((item, index) => {
//       if (item.id === action.payload.id) {
//         return (state.postList[index] = action.payload)
//       }
//       return item
//     })
//   })

//   builder.addMatcher(
//     (action) => action.type.includes('cancel'),
//     (state, action) => {
//       console.log('123')
//     }
//   )
// })
