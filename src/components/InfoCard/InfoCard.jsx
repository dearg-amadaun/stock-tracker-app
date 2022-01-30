import React from 'react';

import styles from "./infoCard.module.css";

export default function InfoCard({ title, stock, darkmode }) {
  return (
    <div className={styles.infoCard}>
        <h1 className={styles.header}>{title}</h1>
        <div>
            <p className={styles.paragraph}>{stock.ticker}</p>
            <p className={styles.paragraph}>{stock.amount} NOK</p>
        </div>
    </div>
  );
};
