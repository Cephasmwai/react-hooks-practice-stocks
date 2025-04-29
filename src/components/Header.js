import React from 'react';

const Header = ({ sortByTicker, sortByPrice, filterStocksByType }) => {
  return (
    <header>
      <h1>Stock Market App</h1>
      <button onClick={sortByTicker}>Sort by Ticker</button>
      <button onClick={sortByPrice}>Sort by Price</button>
      <select onChange={(e) => filterStocksByType(e.target.value)}>
        <option value="">Filter by Type</option>
        <option value="tech">Tech</option>
        <option value="health">Health</option>
        <option value="finance">Finance</option>
      </select>
    </header>
  );
};

export default Header;
