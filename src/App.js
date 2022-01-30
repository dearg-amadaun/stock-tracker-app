import React from 'react'

import Header from './components/Header/Header';
import Subheader from './components/Subheader/Subheader';
import ExchangeList from './components/ExchangeList/ExchangeList';
import TopFiveDividendStocksList from './components/TopFiveDividendStocksList/TopFiveDividendStocksList';
import InfoCard from './components/InfoCard/InfoCard';

import { getTopFiveDividendStocks } from './helpers';

import data from './data.js'

import styles from './app.module.css'

function App() {
  return (
    <div className="App">
     <Header />
     <Subheader>
       <ExchangeList exchanges={data.exchanges} />
       <TopFiveDividendStocksList 
        stocks={getTopFiveDividendStocks(data.stocks)} 
        />
        <div className={styles.infoCardContainer}>
          <InfoCard title="Highest divident yield in current year" stock={{ ticker: "VEI", amount: 20}} />
          <InfoCard title="Highest divident yield all time" stock={{ ticker: "VEI", amount: 20}} />
          <InfoCard title="Highest divident yield growth in past 3 years" stock={{ ticker: "VEI", amount: 20}} />
        </div>
     </Subheader>
    </div>
  );
}

export default App;
