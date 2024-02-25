import React, { useState } from 'react';
import './OurHub.css';

const SearchContainer = () => {
  return (
    <div className="search__container">
      <input className="search__input" type="text" placeholder="Search" />
    </div>
  );
};

const SearchTag = ({ tag, isSelected, onTagClick }) => {
  const handleClick = () => {
    onTagClick(tag);
  };

  return (
    <button className={`search-tag ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
      {tag}
    </button>
  );
};

const OurHub = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Sample array of tags
  const tags = ['React', 'JavaScript', 'Web Design', 'CSS', 'HTML'];

  return (
    <div>
      <SearchContainer />
      <div className="tags-container">
        {tags.map((tag, index) => (
          <SearchTag
            key={index}
            tag={tag}
            isSelected={selectedTags.includes(tag)}
            onTagClick={handleTagClick}
          />
        ))}
      </div>
    </div>
  );
};

export default OurHub;
