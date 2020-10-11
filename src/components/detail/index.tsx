import React from 'react';
import styles from './detail.module.css'

const Detail = ({ item }) => {
    return (
        <div className={styles.detail}>
            <p className={styles.author} data-test="author"> {item.data.author}</p>
            <img className={styles.image} data-test="image" src={item.data?.thumbnail} alt="" />
            <p className={styles.title} data-test="title"> {item.data.title}</p>
        </div>
    )
}

export default Detail;