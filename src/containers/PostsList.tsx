/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clickPost, dismissPost, fetchPosts, removePosts } from '../actions/posts-actions';
import { initialState } from '../types';
import List from '../components/list';

interface PostsProps {
    posts?: Array<PostProps>
}

interface PostProps {
    data: {
        title: string;
        key: number;
        author: string;
        created_utc: number;
        thumbnail?: string;
    }
}

export function Posts(): JSX.Element {
    const dispatch = useDispatch();
    // const [lastPost, setLastPost] = useState<any>([])
    // const [currentPosts, setCurrentPosts] = useState([]);
    const { posts, loading, error } = useSelector((state: initialState) => state.postsReducer);

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const handleClick = useCallback((id: number) => {
        dispatch(clickPost(id))
    }, [])

    const handleDismiss = useCallback((id: number) => {
        dispatch(dismissPost(id))
    }, [])

    return (
        <div data-test="posts-component">
            {loading &&
                <div>cargando</div>}
            {!loading && error &&
                <div>Ocurrio un error </div>
            }
            {!error && !loading &&
                <List items={posts} handleClick={handleClick} handleDismiss={handleDismiss} />
            }
            <div onClick={() => dispatch(removePosts())}> REMOVER TODO</div>
        </div>
    )
}