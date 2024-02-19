//Import OurHub.css
import './OurHub.css';

import React from 'react';

const SearchContainer = () => {
  return (
    <div class="search__container">

    <input class="search__input" type="text" placeholder="Search">
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
