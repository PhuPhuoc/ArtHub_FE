import React, { useState } from 'react';
import './OurHub.css';

const TextContainer = () => {
  return (
    <div className="text__container__1">
      <h1>Our Hub</h1>
      <p>
        Welcome to Our Hub! Here you can find the latest news, updates, and
        events from our community.
      </p>
    </div>
  );
};

const SearchBar = ({ searchText, setSearchText, handleSearch }) => {
  return (
    <div className="search__container">
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="search__button" onClick={handleSearch}>
        &#128269; {/* Magnifying glass Unicode character */}
      </button>
    </div>
  );
};

const Filters = ({ activeFilters, handleFilterChange, handleRemoveFilter }) => {
  return (
    <div className="filter__container">
      {['filter1', 'filter2', 'filter3', 'filter4', 'filter5'].map((filter) => (
        <button
          key={filter}
          className={`filter__button ${activeFilters.includes(filter) && 'active'}`}
          onClick={() => handleFilterChange(filter)}
        >
          {filter}
          {activeFilters.includes(filter) && (
            <span className="remove__filter" onClick={() => handleRemoveFilter(filter)}>
              
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

const OurHub = () => {
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchText, 'with filter:', filter);
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

  const handleRemoveFilter = (filterToRemove) => {
    setActiveFilters(activeFilters.filter((item) => item !== filterToRemove));
    setFilter('');
  };

  return (
    <div>
      <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
      <TextContainer />
      <Filters
        activeFilters={activeFilters}
        handleFilterChange={handleFilterChange}
        handleRemoveFilter={handleRemoveFilter}
      />
    </div>
  );
};

export default OurHub;
