import React, { useState } from 'react';
import './OurHub.css';

const SearchContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchText, 'with filter:', filter);
  };

  return (
    <div className="search__container">
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="filter__container">
        <button
          className={`filter__button ${filter === 'filter1' && 'active'}`}
          onClick={() => handleFilterChange('filter1')}
        >
          Filter 1
        </button>
        <button
          className={`filter__button ${filter === 'filter2' && 'active'}`}
          onClick={() => handleFilterChange('filter2')}
        >
          Filter 2
        </button>
        {/* Add more filter buttons as needed */}
      </div>
    </div>
  );
};

const OurHub = () => {
  return (
    <div>
      <SearchContainer />
      {/* Add other components or content here */}
    </div>
  );
};

export default OurHub;
