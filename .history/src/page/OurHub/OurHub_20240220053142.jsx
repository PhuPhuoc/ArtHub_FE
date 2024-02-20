import React, { useState } from 'react';
import './OurHub.css';

const 

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
              {/* In case we need to do something with the filter */}
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
              {/* In case we need to do something with the filter */}
            </span>
          )}
        </button>
        <button
          className={`filter__button ${activeFilters.includes('filter3') && 'active'}`}
          onClick={() => handleFilterChange('filter3')}
        >
          Filter 3
          {activeFilters.includes('filter3') && (
            <span className="remove__filter" onClick={() => handleRemoveFilter('filter3')}>
              {/* In case we need to do something with the filter */}
            </span>
          )}
        </button>
        <button
          className={`filter__button ${activeFilters.includes('filter4') && 'active'}`}
          onClick={() => handleFilterChange('filter4')}
        >
          Filter 4
          {activeFilters.includes('filter4') && (
            <span className="remove__filter" onClick={() => handleRemoveFilter('filter4')}>
              {/* In case we need to do something with the filter */}
            </span>
          )}
        </button>
        <button
          className={`filter__button ${activeFilters.includes('filter5') && 'active'}`}
          onClick={() => handleFilterChange('filter5')}
        >
          Filter 5
          {activeFilters.includes('filter5') && (
            <span className="remove__filter" onClick={() => handleRemoveFilter('filter5')}>
              {/* In case we need to do something with the filter */}
            </span>
          )}
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
    </div>
  );
};

export default OurHub;
