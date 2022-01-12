import React from 'react'

import styles from './exchangeList.module.css'

export default function ExchangeList(props) {
    const renderListItems = () => {
        return props.exchanges.map(exchange => {
            return <li className={styles.listItem}>
                <div className={styles.name}>{exchange.name}</div>
                <div className={styles.index}>{exchange.index}</div>
                <div className={styles.percentage}>{exchange.change}</div>
            </li>
        })
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Exchanges</h1>
            <ul className={styles.exchangeList}>
                {renderListItems()}
            </ul>
        </div>
    );
};
