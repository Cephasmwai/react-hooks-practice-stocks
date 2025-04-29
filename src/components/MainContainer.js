import React from 'react';
import StockContainer from './StockContainer';

const MainContainer = ({ stocks, buyStock }) => {
  return (
    <div>
      <h2>Available Stocks</h2>
      <StockContainer 
        stocks={stocks} 
        actionOnStock={buyStock} 
        isPortfolio={false} 
      />
    </div>
  );
};

export default MainContainer;
