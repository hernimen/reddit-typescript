/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Post from '../../components/post/Post';

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
            {posts?.map((post: any, index: number): JSX.Element => {
                const { data } = post
                console.log(data?.thumbnail)
                return <Post
                    title={data.title}
                    key={index}
                    author={data.author}
                    date={data.created_utc}
                    image={data?.thumbnail} />
            })}
        </div>
    )
}