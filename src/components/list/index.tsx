import React from 'react';
import { useTransition, animated } from 'react-spring';
import Button from '../button';
import Post from '../item'
import styles from "./list.module.css";

interface Data extends Readonly<{
    title: string;
    key: number;
    author: string;
    created_utc: number;
    thumbnail?: string;
    id: number;
    num_comments: number;
    clicked: boolean;
}> { }

interface PostProps extends Readonly<{
    data: Data;
    handleClick: (id: number) => void;
    handleDismiss: (id: number) => void;
    handleRemovePosts: () => void;
    handleLoadMorePosts: () => void;
    listRef?: React.RefObject<HTMLInputElement>;
    isListActive: boolean;
    loading: boolean;
    currentPage: number;
}> { }

const List = ({ items, handleClick, handleDismiss, handleRemovePosts, handleLoadMorePosts, listRef, isListActive, loading, currentPage }) => {
    const transitions = useTransition(items, item => item.data.id, {
        initial: { transform: 'translate3d(0%, 0%,0)' },
        from: { transform: 'translate3d(0%,-100%,0)' },
        enter: { transform: 'translate3d(0%, -10%,0)' },
        leave: { transform: 'translate3d(100%,0%,0)' }
    });

    return (
        <div data-test="list" className={isListActive ? styles.listClosed : styles.list} ref={listRef}>
            <h1>Reddit Posts</h1>
            {transitions.map((transition: { props: {}, item: PostProps }) => {
                return (
                    <animated.div
                        key={transition.item.data.id}
                        style={transition.props}
                    >
                        <Post
                            title={transition.item.data.title}
                            key={transition.item.data.id}
                            author={transition.item.data.author}
                            date={transition.item.data.created_utc}
                            image={transition?.item.data?.thumbnail}
                            id={transition.item.data.id}
                            clicked={transition.item.data.clicked}
                            handleClick={handleClick}
                            handleDismiss={handleDismiss}
                            comments={transition.item.data.num_comments}
                        />
                    </animated.div>
                )
            })}
            <Button styled={styles.list__loadMore} disabled={loading || currentPage === 5} dataTest="load-more" onClick={handleLoadMorePosts}>Load more</Button>
            <Button styled={styles.list__remove_button} disabled={loading || !items.length} dataTest="remove-all" onClick={handleRemovePosts}>Dismiss All</Button>
        </div>
    )
}

export default React.memo(List);