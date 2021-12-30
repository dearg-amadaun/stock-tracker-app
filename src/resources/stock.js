import { iex }  from '../config/iex.js';

export const stock = {

    latestPrice: (ticker, callback) => {
        const url = `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
        
        fetch(url).
        then((response) => response.json())
        .then((data) => {
            const stockData = data [data.length - 1]
            const formattedData= {}
            formattedData.price = stockData.close
            formattedData.date = stockData.date
            formattedData.time = stockData.label

            callback(formattedData)
        })
    }

};