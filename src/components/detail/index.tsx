import React from 'react';
import styles from './detail.module.css'
import Image from '../image'

const Detail = ({ item }) => {
    return (
        <div className={styles.detail}>
            <p className={styles.author} data-test="author"> {item.data.author}</p>
            <Image className={styles.image} src={item.data?.thumbnail} dataTest="detail" alt="" />
            <p className={styles.title} data-test="title"> {item.data.title}</p>
        </div>
    )
}

export default React.memo(Detail);