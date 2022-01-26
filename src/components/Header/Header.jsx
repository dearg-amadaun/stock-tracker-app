import React from 'react';

import styles from './header.module.css';
import { ReactComponent as Logo }  from '../../assets/icons/show-chart.svg';


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Logo className={styles.logo}/>
                    <span>Stonks</span>
                </div>

                <div className={styles.userContainer}>
                    <div className={styles.user}>B</div>
                    <span>Brendan</span> 
                </div>
            </div>
        </header>
    )
};

