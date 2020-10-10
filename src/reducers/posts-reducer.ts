import { AnyAction } from '@reduxjs/toolkit'
import {
  FETCH_POSTS_STARTED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  POST_CLICKED,
  POST_DISMISS,
  POSTS_REMOVED,
  POST_SELECTED
} from '../actions/posts-actions'

const initialState = {
  posts: [],
  loading: false,
  error: null,
  post: {}
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
        posts: state.posts.concat(action.payload),
        error: null
      }
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: null,
        error: action.payload.error
      }
    case POSTS_REMOVED:
      return {
        ...state,
        post: {},
        posts: []
      }
    case POST_DISMISS:
      return {
        ...state,
        posts: state.posts.filter(
          (post: { data: { id: number } }) => post.data.id !== action.payload
        )
      }
    case POST_CLICKED:
      return {
        ...state,
        posts: state.posts.map(
          (post: { data: { id: number; clicked: boolean } }) => {
            if (post.data.id === action.payload && !post.data.clicked) {
              post.data.clicked = true
            }
            return post
          }
        )
      }
    case POST_SELECTED:
      return {
        ...state,
        post: action.payload
      }
    default:
      return state
  }
}

export default PostsReducer
