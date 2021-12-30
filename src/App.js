import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import StockRow from './components/StockRow.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
            <tbody>
              <StockRow ticker="AAPL" />
              <StockRow ticker="GOOG" />
              <StockRow ticker="GME" />
              <StockRow ticker="AMC" />
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
