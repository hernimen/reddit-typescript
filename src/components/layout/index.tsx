import React from 'react';
import styles from './layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}

export default Layout;