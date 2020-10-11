import React from 'react';
import Button from '../button';
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
        listRef?: any;
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
            <Button styled={styles.list__loadMore} disabled={loading} dataTest="load-more" onClick={() => handleLoadMorePosts()}>Load more</Button>
            <Button styled={styles.list__remove_button} disabled={loading || !items.length} dataTest="remove-all" onClick={() => handleRemovePosts()}>Dismiss All</Button>
        </div>
    )
}

export default React.memo(List);