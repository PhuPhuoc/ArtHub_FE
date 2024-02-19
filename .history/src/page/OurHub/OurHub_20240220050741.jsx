//Import OurHub.css
import './OurHub.css';

import React, { useState } from 'react';


const SearchContainer = () => {
  return (
    <div className="search__container">
      <input className="search__input" type="text" placeholder="Search" />
    </div>
  );
};

const SearchTag = ({ tag, onTagClick }) => {
  const handleClick = () => {
    onTagClick(tag);
  };

  return (
    <button className="search-tag" onClick={handleClick}>
      {tag}
    </button>
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
