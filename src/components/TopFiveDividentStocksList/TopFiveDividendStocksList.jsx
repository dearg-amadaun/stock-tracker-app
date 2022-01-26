import React from 'react';

import styles from './topFiveDividendStocksList.module.css'

export default function TopFiveDividendStocksList(props) {
    const renderListItems = () => {
        return props.stocks.map(stock => {
            return (
                <li className={styles.listItem} key={stock.ticker}>
                    <div>{stock.name}</div>
                    <div>{stock.amount} NOK</div>
                </li>
            );
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Top Five Divident Yield Stocks</h1>
            <ul className={styles.dividendList}>{renderListItems()}</ul>
        </div>
    );
};