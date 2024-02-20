//Import OurHub.css
import './OurHub.css';

import React from 'react';

const SearchContainer = () => {
  return (
    <div className="search__container">
      <input className="search__input" type="text" placeholder="Search" />
      <button className="search__button" onClick={() => console.log('Search clicked')}>Search</button>
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
