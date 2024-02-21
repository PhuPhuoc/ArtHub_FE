import React, { useState } from 'react';
import './OurHub.css';

const SearchContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleFilterChange = (newFilter) => {
    if (activeFilters.includes(newFilter)) {
      setActiveFilters(activeFilters.filter((item) => item !== newFilter));
      setFilter('');
    } else {
      setActiveFilters([...activeFilters, newFilter]);
      setFilter(newFilter);
    }
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchText, 'with filter:', filter);
  };

  const handleRemoveFilter = (filterToRemove) => {
    setActiveFilters(activeFilters.filter((item) => item !== filterToRemove));
    setFilter('');
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
      <div className="filter__container">
        <button
          className={`filter__button ${activeFilters.includes('filter1') && 'active'}`}
          onClick={() => handleFilterChange('filter1')}
        >
          Filter 1
          {activeFilters.includes('filter1') && (
            <span className="remove__filter" onClick={() => handleRemoveFilter('filter1')}>
              
            </span>
          )}
        </button>
        <button
          className={`filter__button ${activeFilters.includes('filter2') && 'active'}`}
          onClick={() => handleFilterChange('filter2')}
        >
          Filter 2
          {activeFilters.includes('filter2') && (
            <span className="remove__filter" onClick={() => handleRemoveFilter('filter2')}>
              
            </span>
          )}
        </button>
        {/* Add more filter buttons as needed */}
      </div>
      <button onClick={handleSearch}>Search</button>
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