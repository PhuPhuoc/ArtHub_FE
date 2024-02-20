import React, { useState } from 'react';
import { Col, Card, Avatar } from 'antd';
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
    </div>
  );
};

import React from 'react';
import { Col, Card, Avatar } from 'antd';
import './OurHub.css'; // Make sure to import your CSS file

const { Meta } = Card;

const CustomContainer = () => {
  return (
    <div className="custom__container">
      <Col className="gutter-row" span={6}>
        <Card cover={<img src="your_image_url_here" alt="image" />}>
          <Meta
            style={{ display: "flex", justifyContent: "center" }}
            avatar={
              <Avatar
                className="avatar"
                src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                style={{ cursor: "pointer" }}
              />
            }
            title={
              <span style={{ color: "black", fontSize: "15px" }}>
                Custom Title
              </span>
            }
            description={
              <span style={{ color: "black", fontSize: "12px" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minus eos voluptates, enim officiis tempore esse voluptatem!
                Excepturi rem commodi tempora.
              </span>
            } 
          />
        </Card>
      </Col>
    </div>
  );
};

export default CustomContainer;


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
    </div>
  );
};

export default OurHub;
