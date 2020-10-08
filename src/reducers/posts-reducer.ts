import { AnyAction } from '@reduxjs/toolkit'
import {
  FETCH_POSTS_STARTED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from '../actions/posts-actions'

const initialState = {
  posts: [],
  loading: false,
  error: null
}

const PostsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_POSTS_STARTED:
      return {
        ...state,
        loading: true
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: null
      }
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: null,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default PostsReducer
