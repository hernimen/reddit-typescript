/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';

export function Posts(): JSX.Element {
    const [posts, setPosts] = useState<any>([])
    // const [lastPost, setLastPost] = useState<any>([])

    const getPosts = async () => {
        try {
            const response = await fetch('https://www.reddit.com/r/redditdev/top.json')
            const json = await response.json();
            const posts = json.data.children;
            console.log(posts)
            setPosts(posts)
        } catch (err) {
            console.log('soy el error', err)
        }
    }

    useEffect(() => {
        getPosts()
        console.log(posts)
    }, [])

    return (
        <div data-test="posts-component">
            <Sidebar posts={posts} />
        </div>
    )
}