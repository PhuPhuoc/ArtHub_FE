

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

const CreditsContainer = () => {
  return (
    <div className="credits__container">
      <p className="credits__text">Background color: Pantone Color of the Year 2016 <a href="https://www.pantone.com/color-of-the-year-2016" className="credits__link">Rose Quartz</a></p>
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
