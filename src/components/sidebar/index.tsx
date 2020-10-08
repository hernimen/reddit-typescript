import React from 'react';
import Post from '../post';

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

const Sidebar = ({ posts }: PostsProps): JSX.Element => {
    return (
        <div data-test='sidebar'>
            {posts?.map((post: PostProps, index: number) => {
                return (
                    <Post
                        title={post.data.title}
                        key={index}
                        author={post.data.author}
                        date={post.data.created_utc}
                        image={post.data?.thumbnail} />
                )
            })}
        </div>
    )
}

export default Sidebar;