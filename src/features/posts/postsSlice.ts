import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'

interface PostsState {
  value: number
}

const initialState: PostsState = {
  value: 0
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPosts: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { fetchPosts } = postsSlice.actions

export const getPosts = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(fetchPosts(amount))
  }, 1000)
}

export const selectCount = (state: RootState) => state.counter.value
