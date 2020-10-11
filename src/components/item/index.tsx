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
    const handleError = (event: any) => {
        event.src = 'https://static.wikia.nocookie.net/dogelore/images/a/a0/Quieres.png/revision/latest/top-crop/width/360/height/450?cb=20190617094240l'
    }

    return (
        <div data-test="post-component" className={styles.item}>
            <div className={styles.item__top}>
                {!clicked &&
                    <div className={styles.item__read} data-test="item-read">
                    </div>
                }
                <span data-test="author" className={styles.item__top__author}>
                    <strong>{author}</strong>
                </span>
                <span data-test="date" className={styles.item__top__date}>
                    {DateParser.parseDateIntoTimeAgo(date)}
                </span>
            </div>
            <div className={styles.item__body}>
                <img src={image} alt="" data-test="image" className={styles.item__body__img} onClick={() => handleClick(id)} onError={handleError} />
                <div data-test="title" className={styles.item__body__title}>
                    {title}
                </div>
                <div className={styles.gg_chevron_right}></div>
            </div>
            <div className={styles.item__bottom} >
                <div onClick={() => handleDismiss(id)} className={styles.item__botto_dissmiss_ctn}>
                    <span className={styles.gg_close_o} >
                    </span>
                    <span> Dismiss Post</span>
                </div>
                <span data-test="comments" className={styles.item__bottom_comments}>{comments} comments</span>
            </div>
        </div>
    )
}

export default React.memo(Item);