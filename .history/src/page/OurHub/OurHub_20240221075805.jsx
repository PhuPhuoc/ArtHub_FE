import React, { useState } from 'react';
import bird from '../../assets/images/bird.jpg';
import './OurHub.css';

// Define a new Card component
const Card = ({ title, content }) => {
  return (
    <div className="card">
          <h2>{title}</h2>
          <img src={content} alt="Bird" />
        </div>
  );
};

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
    </div>
  );
};

const Filters = ({ activeFilters, handleFilterChange, handleRemoveFilter }) => {
  return (
    <div className="filter__container">
      {['filter 1', 'filter 2', 'filter 3', 'filter 4', 'filter 5', 'filter 6 ', 'filter 7', 'filter 8'].map((filter) => (
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

      {/* Rendering cards */}
      <div className="cards__container">
        {/* Assuming card data is provided as an array */}
        {[
          { title: 'Card 1', content: bird},
          { title: 'Card 2', content: bird},
          { title: 'Card 3', content: bird},
          { title: 'Card 4', content: bird},
          { title: 'Card 5', content: bird},
          { title: 'Card 6', content: {bird},
          { title: 'Card 7', content: {bird},
          { title: 'Card 8', content: {bird},
          { title: 'Card 9', content: bird},
        ].map((card, index) => (
          <Card key={index} title={card.title} content={card.content}/>
        ))}
      </div>
    </div>
  );
};

export default OurHub;
