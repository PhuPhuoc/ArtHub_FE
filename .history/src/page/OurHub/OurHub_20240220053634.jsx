// OurHub.js
import React from 'react';
import './OurHub.css';
import SearchBar from './SearchBar';
import Filters from './Filters';
import TextContainer from './TextContainer';

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