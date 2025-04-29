import React from 'react';

const Stock = ({ stock, actionOnStock, isPortfolio }) => {
  const handleClick = () => {
    actionOnStock(stock);  // Calls either buy or sell based on where it's being used
  };

  return (
    <div className="stock-item" onClick={handleClick}>
      <h3>{stock.ticker}</h3>
      <p>Price: ${stock.price}</p>
      <p>Type: {stock.type}</p>
      <button>{isPortfolio ? "Sell" : "Buy"}</button>
    </div>
  );
};

export default Stock;
