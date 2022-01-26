import React from 'react'

import Header from './components/Header/Header';
import Subheader from './components/Subheader/Subheader';
import ExchangeList from './components/ExchangeList/ExchangeList';
import TopFiveDividendStocksList from './components/TopFiveDividentStocksList/TopFiveDividendStocksList';

import { getTopFiveDividendStocks } from './helpers';

import data from './data.js'

function App() {
  return (
    <div className="App">
     <Header />
     <Subheader>
       <ExchangeList exchanges={data.exchanges} />
       <TopFiveDividendStocksList 
        stocks={getTopFiveDividendStocks(data.stocks)} 
        />
     </Subheader>
    </div>
  );
}

export default App;
