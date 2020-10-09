/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clickPost, dismissPost, fetchPosts, removePosts } from '../actions/posts-actions';
import { initialState } from '../types';
import List from '../components/list';
import Detail from '../components/detail';
import Layout from '../components/layout';

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
    const { posts, loading, error, post } = useSelector((state: initialState) => state.postsReducer);

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const handleClick = useCallback((id: number) => {
        // if (post.data && post.data.id !== id) {
        //     console.log('holaaa')
        dispatch(clickPost(id))
        // }
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
                <Layout>
                    <List items={posts} handleClick={handleClick} handleDismiss={handleDismiss} />
                    {post &&
                        <Detail item={post} />
                    }
                </Layout>
            }
            <div onClick={() => dispatch(removePosts())}> REMOVER TODO</div>
        </div>
    )
}