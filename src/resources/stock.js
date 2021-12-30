import { iex }  from '../config/iex.js';

export const stock = {

    latestPrice: (ticker) => {
        const url = `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
        
        const query = fetch(url).then((response) => response.json())
        return query;
    }

};