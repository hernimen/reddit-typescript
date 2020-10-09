import React from 'react';
import DateParser from '../../utils/dateParser';
import styles from './item.module.css';

interface PostProps {
    id: number;
    title: string;
    author: string;
    date: number;
    image?: string;
    comments: number;
    clicked: boolean;
    handleClick: (id: number) => void;
    handleDismiss: (id: number) => void;
}

const Item = ({ id, title, author, date, image, comments, clicked, handleClick, handleDismiss }: PostProps) => {
    return (
        <div data-test="post-component" className={styles.item}>
            <div className={styles.item__top}>
                {clicked &&
                    <div> FUI CLICKEADO </div>}
                <span data-test="author" className={styles.item__top__author}>
                    <strong>{author}</strong>
                </span>
                <span data-test="date">
                    {DateParser.parseDateIntoTimeAgo(date)}
                </span>
            </div>
            <div className={styles.item__body}>
                <img src={image} alt="" className={styles.item__body__img} onClick={() => handleClick(id)} />
                <div data-test="title">
                    {title}
                </div>
            </div>
            <div className={styles.item__bottom}>
                <div onClick={() => handleDismiss(id)}>Dismiss Post</div>
                <span data-test="comments">{comments} comments</span>
            </div>
        </div>
    )
}

export default React.memo(Item);