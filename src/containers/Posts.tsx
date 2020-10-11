/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clickPost, dismissPost, fetchPosts, removePosts } from '../actions/posts-actions';
import { initialState } from '../types';
import List from '../components/list';
import Detail from '../components/detail';
import Layout from '../components/layout';

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
    const listRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const [lastItemId, setLastItemId] = useState('')
    const { posts, loading, error, post } = useSelector((state: initialState) => state.postsReducer);
    const [isListActive, setIsListActive] = useState(false)

    useEffect(() => {
        dispatch(fetchPosts(lastItemId))
    }, [])

    useEffect(() => {
        const handleClickOutsideList = (event) => {
            if (listRef.current && !listRef.current.contains(event.target)) {//chequear esto
                setIsListActive(true)
                return;
            }
            setIsListActive(false)
        }
        document.addEventListener("mousedown", handleClickOutsideList);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideList);
        };
    }, []);

    const handleLoadMorePosts = () => {
        if (posts.length) {
            setLastItemId(posts[posts.length - 1].data.name)
            dispatch(fetchPosts(posts[posts.length - 1].data.name))
            return
        }
        setLastItemId('')
        dispatch(fetchPosts(lastItemId))
    }

    const handleClick = useCallback((id: number) => {
        if (!post.data || (post.data.id !== id)) {
            dispatch(clickPost(id))
        }
    }, [post.data])

    const handleDismiss = useCallback((id: number) => {
        dispatch(dismissPost(id))
    }, [])

    const handleRemovePosts = useCallback(() => {
        dispatch(removePosts())
    }, [])

    return (
        <div data-test="posts-component">
            {loading &&
                <div>cargando</div>}
            {!loading && error &&
                <div>Ocurrio un error </div>
            }
            {!error &&
                <Layout>
                    <List
                        items={posts}
                        handleClick={handleClick}
                        handleDismiss={handleDismiss}
                        handleRemovePosts={handleRemovePosts}
                        handleLoadMorePosts={handleLoadMorePosts}
                        listRef={listRef}
                        isListActive={isListActive}
                    />
                    {post.data &&
                        <Detail item={post} />
                    }
                </Layout>
            }
        </div>
    )
}