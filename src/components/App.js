import React, { useState } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import PortfolioContainer from './PortfolioContainer';

const App = () => {
  const [stocks, setStocks] = useState([]);  // Fetch or define your initial stock list
  const [myPortfolio, setMyPortfolio] = useState([]);

  // Function to buy stock
  const buyStock = (stock) => {
    setMyPortfolio([...myPortfolio, stock]);
  };

  // Function to sell stock
  const sellStock = (stock) => {
    setMyPortfolio(myPortfolio.filter(item => item.ticker !== stock.ticker));
  };

  // Function to sort stocks by ticker
  const sortByTicker = () => {
    setStocks([...stocks].sort((a, b) => a.ticker.localeCompare(b.ticker)));
  };

  // Function to sort stocks by price
  const sortByPrice = () => {
    setStocks([...stocks].sort((a, b) => a.price - b.price));
  };

  // Function to filter stocks by type
  const filterStocksByType = (type) => {
    const filteredStocks = stocks.filter(stock => stock.type === type);
    setStocks(filteredStocks);
  };

  return (
    <div>
      <Header 
        sortByTicker={sortByTicker}
        sortByPrice={sortByPrice}
        filterStocksByType={filterStocksByType}
      />
      <MainContainer 
        stocks={stocks} 
        buyStock={buyStock} 
      />
      <PortfolioContainer 
        portfolio={myPortfolio} 
        sellStock={sellStock} 
      />
    </div>
  );
};

export default App;
