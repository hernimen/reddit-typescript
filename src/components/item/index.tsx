import React from 'react';
import DateParser from '../../utils/dateParser';
import Button from '../button';
import styles from './item.module.css';
import Image from '../image'

interface PostProps extends Readonly<{
    id: number;
    title: string;
    author: string;
    date: number;
    image?: string;
    comments: number;
    clicked: boolean;
    handleClick: (id: number) => void;
    handleDismiss: (id: number) => void;
}> { }

const Item = ({ id, title, author, date, image, comments, clicked, handleClick, handleDismiss }: PostProps) => {
    return (
        <div data-test="post-component" className={styles.item}>
            <div className={styles.item__top}>
                {!clicked &&
                    <div className={styles.item__read} data-test="item-read">
                    </div>
                }
                <p data-test="author" className={styles.item__top__author}>
                    <strong>{author}</strong>
                </p>
                <span data-test="date" className={styles.item__top__date}>
                    {DateParser.parseDateIntoTimeAgo(date)}
                </span>
            </div>
            <div className={styles.item__body}>
                <Image src={image} alt="" dataTest="item" className={styles.item__body__img} onClick={() => handleClick(id)} />
                <p data-test="title" className={styles.item__body__title}>
                    {title}
                </p>
                <div className={styles.gg_chevron_right}></div>
            </div>
            <div className={styles.item__bottom} >
                <Button onClick={() => handleDismiss(id)} dataTest="data">
                    <span className={styles.gg_close_o} >
                    </span>
                    <p> Dismiss Post</p>
                </Button>
                <span data-test="comments" className={styles.item__bottom_comments}>{comments} comments</span>
            </div>
        </div >
    )
}

export default React.memo(Item);