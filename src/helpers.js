import stocks from './data.js'

export const sortStocksByDividendYield = (stocks) => {
    const year = getCurrentYear();

    const sorted = stocks.sort((stockA, stockB) => {
        return stockB.dividends[year] - stockA.dividends[year];
    });

    return sorted
};

export const getTopFiveDividendStocks = (stocks) => {
    const sorted = sortStocksByDividendYield(stocks)
    const year = getCurrentYear();

    return sorted.slice(0, 5).map(stock => {
        return {
            ticker: stock.ticker,
            name: stock.name,
            amount: stock.dividends[year]
        };
    });
};

export const getInfoCardData = (descriptor) => {
    if (descriptor === "growth") {
        return calculateDividendGrowthStock(stocks)
    } else if (descriptor === "yieldcurrent") {
        return calculateDividendStockCurrentYear(stocks)
    } else if (descriptor === "yieldcompounded") {
        return calculateDividendStockCompounded(stocks)
    }
};

const calculateDividendStockCurrentYear = (stocks) => {
    const sorted = sortStocksByDividendYield(stocks);
    const year = getCurrentYear()
    return {
        ticker: sorted[0].ticker,
        amount: sorted[0].dividends[year]
    };
};

export const calculateDividendStockCompounded = (stocks) => {
    const sortedByCompoundedYield = stocks
      .map((stock) => {
        let total =0;
        Object.keys(stock.dividends).forEach(key => {
            total += stock.dividends[key]
        });
        stock.total = total
        return stock
    })
    .sort((stockA, stockB) => {
        return stockB.total - stockA.total
    });

    return {
        ticker: sortedByCompoundedYield[0].ticker,
        amount: sortedByCompoundedYield[0].total,
    };
};

const calculateDividendGrowthStock = () => {

}

export const getCurrentYear = () => {
    const date = new Date ();
    const year = date.getFullYear();

    return year;
};


