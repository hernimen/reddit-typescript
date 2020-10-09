export interface initialState {
    postsReducer: {
        posts: [],
        loading: boolean,
        error: Error,
        post: {
            data: {
                id: number;
            }
        }
    }
}

export interface PostsProps {
    posts?: Array<PostProps>
}

export interface PostProps {
    data: {
        title: string;
        key: number;
        author: string;
        created_utc: number;
        thumbnail?: string;
    }
}