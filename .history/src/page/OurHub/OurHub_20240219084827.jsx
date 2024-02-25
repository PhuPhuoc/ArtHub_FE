//Import OurHub.css
import './OurHub.css';

import React from 'react';

const SearchContainer = () => {
  return (
    <div className="search__container">
      <p className="search__title">
        Go ahead, hover over search
      </p>
      <input className="search__input" type="text" placeholder="Search" />
    </div>
  );
};


const OurHub = () => {
    return (
        <div>
            <SearchContainer />
            <CreditsContainer />
        </div>
    );
};

export default OurHub;
