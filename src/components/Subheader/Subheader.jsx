import React from 'react'

import styles from './subheader.module.css'

export default function Subheader(props) {
    return (
        <div className={styles.subheader}>
            <div className={styles.container}>
                {props.children}
            </div>
        </div>
    )
}
