import React from 'react';
import Post from '../item'
import styles from "./list.module.css";

export interface PostProps {
    data: {
        title: string;
        key: number;
        author: string;
        created_utc: number;
        thumbnail?: string;
        id: number;
        num_comments: number;
        clicked: boolean;
        handleClick: (id: number) => void;
        handleDismiss: (id: number) => void;
    }
}

export interface PostsProps {
    posts?: Array<PostProps>
}

const List = ({ items, handleClick, handleDismiss }) => {
    return (
        <div data-test="list" className={styles.list}>
            <h1>Reddit Posts</h1>
            {items.map((item: PostProps) => {
                return (
                    <Post
                        title={item.data.title}
                        key={item.data.id}
                        author={item.data.author}
                        date={item.data.created_utc}
                        image={item.data?.thumbnail}
                        id={item.data.id}
                        clicked={item.data.clicked}
                        handleClick={handleClick}
                        handleDismiss={handleDismiss}
                        comments={item.data.num_comments}
                    />
                )
            })}
        </div>
    )
}

export default React.memo(List);