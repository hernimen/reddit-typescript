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
        handleRemovePosts: () => void;
        handleLoadMorePosts: () => void;
        listRef: any;
        isListActive: boolean;
        loading: boolean;
    }
}

export interface PostsProps {
    posts?: Array<PostProps>
}

const List = ({ items, handleClick, handleDismiss, handleRemovePosts, handleLoadMorePosts, listRef, isListActive, loading }) => {
    return (
        <div data-test="list" className={isListActive ? styles.listClosed : styles.list} ref={listRef}>
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
            <button disabled={loading} className={styles.list__loadMore} data-test="load-more" onClick={() => handleLoadMorePosts()}>Load More</button>
            <button disabled={loading || !items.length} className={styles.list__removebar} onClick={() => handleRemovePosts()}>Dismiss All</button>
        </div>
    )
}

export default React.memo(List);