import React from 'react';
import styles from './detail.module.css'

const Detail = ({ item }) => {
    console.log(item, 'SOY EL ITEM SELECIONADO')
    return (
        <div className={styles.detail}>
            Detail
        </div>
    )
}

export default Detail;