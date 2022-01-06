import React from 'react'

import styles from './subheader.module.css'

export default function Subheader(props) {
    return (
        <div class={styles.subheader}>
            <div class={styles.container}>
                {props.children}
            </div>
        </div>
    )
}
