import React from 'react';
import Stock from './Stock';

const StockContainer = ({ stocks, actionOnStock, isPortfolio = false }) => {
  return (
    <div className="stock-container">
      {stocks.map(stock => (
        <div key={stock.ticker}>
          <Stock stock={stock} actionOnStock={actionOnStock} isPortfolio={isPortfolio} />
        </div>
      ))}
    </div>
  );
};

export default StockContainer;
