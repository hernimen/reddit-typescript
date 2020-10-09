import { Action, Dispatch } from 'redux'
export const FETCH_POSTS_STARTED = 'FETCH_POSTS_STARTED'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'
export const POST_CLICKED = 'POST_CLICKED'
export const POST_DISMISS = 'POST_DISMISS'
export const POSTS_REMOVED = 'POSTS_REMOVED'

export const fetchPosts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(fetchPostsStarted())
    try {
      const response = await fetch(
        // 'https://www.reddit.com/r/redditdev/top.json?limit=30'
        'https://www.reddit.com/r/mac/top.json?limit=20'
      )
      const json = await response.json()
      const posts = json.data.children
      console.log(posts, 'posts')
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
    type: POSTS_REMOVED,
  }
}