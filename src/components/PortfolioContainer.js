import React from 'react';
import StockContainer from './StockContainer';

const PortfolioContainer = ({ portfolio, sellStock }) => {
  return (
    <div>
      <h2>Your Portfolio</h2>
      <StockContainer 
        stocks={portfolio} 
        actionOnStock={sellStock} 
        isPortfolio={true} 
      />
    </div>
  );
};

export default PortfolioContainer;
