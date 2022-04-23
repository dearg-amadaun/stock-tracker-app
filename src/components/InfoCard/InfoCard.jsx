import React from 'react';
import classnames from 'classnames';

import styles from './infoCard.module.css';

export default function InfoCard({ title, stock, darkmode }) {
  const classes = classnames(styles.infoCard, {
    [styles.darkmode]: darkmode
  });
  
  return (
    <div className={classes}>
        <h1 className={styles.header}>{title}</h1>
        <div>
            <p className={styles.paragraph}>{stock.ticker}</p>
            <p className={styles.paragraph}>{stock.amount} NOK</p>
        </div>
    </div>
  );
};
