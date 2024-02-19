//Import OurHub.css
import './OurHub.css';

import React, { useState } from 'react';

const SearchContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="search__container">
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <div className="tag__container">
        <span className={`tag ${selectedTags.includes('tag1') ? 'selected' : ''}`} onClick={() => handleTagClick('tag1')}>
          Tag 1
        </span>
        <span className={`tag ${selectedTags.includes('tag2') ? 'selected' : ''}`} onClick={() => handleTagClick('tag2')}>
          Tag 2
        </span>
        <span className={`tag ${selectedTags.includes('tag3') ? 'selected' : ''}`} onClick={() => handleTagClick('tag3')}>
          Tag 3
        </span>
      </div>
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
