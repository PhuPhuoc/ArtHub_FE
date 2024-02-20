// OurHub.js
import React from 'react';
import './OurHub.css';
import SearchBar from './SearchBar';
import Filters from './Filters';
import TextContainer from './TextContainer';



const TextContainer = () => {
  return (
    <div className="text__container">
      <h1>Our Hub</h1>
      <p>
        Welcome to Our Hub! Here you can find the latest news, updates, and
        events from our community.
      </p>
    </div>
  );
};



const Filters = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterChange = (newFilter) => {
    if (activeFilters.includes(newFilter)) {
      setActiveFilters(activeFilters.filter((item) => item !== newFilter));
    } else {
      setActiveFilters([...activeFilters, newFilter]);
    }
  };

  return (
    <div className="filter__container">
      <button
        className={`filter__button ${activeFilters.includes('filter1') && 'active'}`}
        onClick={() => handleFilterChange('filter1')}
      >
        Filter 1
      </button>
      <button
        className={`filter__button ${activeFilters.includes('filter2') && 'active'}`}
        onClick={() => handleFilterChange('filter2')}
      >
        Filter 2
      </button>
      {/* Add more filter buttons as needed */}
    </div>
  );
};



const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchText);
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
      <button className="search__button" onClick={handleSearch}>
        &#128269; {/* Magnifying glass Unicode character */}
      </button>
    </div>
  );
};



const OurHub = () => {
  return (
    <div>
      <SearchBar />
      <TextContainer />
    </div>
  );
};

export default OurHub;