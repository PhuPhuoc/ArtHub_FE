// OurHub.js
import React from 'react';
import './OurHub.css';
import SearchBar from './SearchBar';
import Filters from './Filters';
import TextContainer from './TextContainer';

// SearchBar.js
import React, { useState } from 'react';
import './OurHub.css';

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

export default SearchBar;


const OurHub = () => {
  return (
    <div>
      <SearchBar />
      <Filters />
      <TextContainer />
    </div>
  );
};

export default OurHub;