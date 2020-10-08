import { Dispatch } from 'redux'
export const FETCH_POSTS_STARTED = 'FETCH_POSTS_STARTED'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export const fetchPosts = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(fetchPostsStarted())
    try {
      const response = await fetch(
        'https://www.reddit.com/r/redditdev/top.json'
      )
      const json = await response.json()
      const posts = json.data.children
      dispatch(fetchPostsSuccess(posts))
    } catch (error) {
      console.log(error, 'ERROR EN ACTION')
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
