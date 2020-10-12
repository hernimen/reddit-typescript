import { Action, Dispatch } from 'redux'
import ApiBridge from '../utils/apiBridge'
export const FETCH_POSTS_STARTED = 'FETCH_POSTS_STARTED'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'
export const POST_CLICKED = 'POST_CLICKED'
export const POST_DISMISS = 'POST_DISMISS'
export const POSTS_REMOVED = 'POSTS_REMOVED'

export const fetchPosts = (lastItemId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(fetchPostsStarted())
    try {
      const response = await ApiBridge.get(
        `https://www.reddit.com/r/mac/top.json`,
        {
          params: {
            limit: 10,
            after: lastItemId,
          }
        }
      )
      const data = await response.data
      const posts = data.data.children
      dispatch(fetchPostsSuccess(posts))
    } catch (error) {
      dispatch(fetchPostsFailure(error))
    }
  }
}

export const fetchPostsStarted = () => {
  return {
    type: FETCH_POSTS_STARTED
  }
}

export const fetchPostsSuccess = (data: any) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data
  }
}

export const fetchPostsFailure = (error: Error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: { error }
  }
}

export const clickPost = (id: number) => {
  return {
    type: POST_CLICKED,
    payload: id
  }
}

export const dismissPost = (id: number) => {
  return {
    type: POST_DISMISS,
    payload: id
  }
}

export const removePosts = () => {
  return {
    type: POSTS_REMOVED
  }
}
