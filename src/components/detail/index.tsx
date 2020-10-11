import React from 'react';
import styles from './detail.module.css'

const Detail = ({ item }) => {
    return (
        <div className={styles.detail}>
            <div className={styles.author} data-test="author"> {item.data.author}</div>
            <img className={styles.image} datat-test="image" src={item.data?.thumbnail} alt="" />
            <div className={styles.title} data-test="title"> {item.data.title}</div>
        </div>
    )
}

export default Detail;