/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clickPost, dismissPost, fetchPosts, removePosts } from '../actions/posts-actions';
import { initialState } from '../types';
import List from '../components/list';
import Detail from '../components/detail';
import Layout from '../components/layout';

export function Posts(): JSX.Element {
    const PAGES_LIMIT = 5;
    const listRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const [lastItemId, setLastItemId] = useState('')
    const { posts, loading, error, post } = useSelector((state: initialState) => state.postsReducer);
    const [isListActive, setIsListActive] = useState(false)
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if (currentPage <= PAGES_LIMIT) {
            dispatch(fetchPosts(lastItemId))
            setCurrentPage(currentPage => currentPage + 1)
        }
    }, [lastItemId])

    const handleLoadMorePosts = () => {
        if (posts.length) {
            const postId = posts[posts.length - 1].data.name
            return setLastItemId(postId)
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
        setCurrentPage(0)
    }, [])

    useEffect(() => {
        const handleClickOutsideList = (event: Event) => {
            if (listRef.current && !listRef.current.contains(event.target as HTMLInputElement)) {
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

    return (
        <div data-test="posts-component">
            {error &&
                <div>An error ocurred, please reload the page </div>
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
                        loading={loading}
                        currentPage={currentPage}
                    />
                    {post.data && post.data.id &&
                        <Detail item={post} />
                    }
                </Layout>
            }
        </div>
    )
}