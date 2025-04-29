import React, { useState } from 'react';

const SearchBar = ({ filterStocksBySearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterStocksBySearch(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search for a stock..." 
        value={searchTerm} 
        onChange={handleSearch} 
      />
    </div>
  );
};

export default SearchBar;
