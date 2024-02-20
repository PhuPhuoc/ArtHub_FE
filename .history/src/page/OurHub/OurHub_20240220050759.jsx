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

    const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    // Add or remove the clicked tag from selectedTags
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }

    // Perform search based on selected tags
    // You can implement your search functionality here
    // For example:
    // performSearch(selectedTags);
  };

  // Sample array of tags
  const tags = ['React', 'JavaScript', 'Web Design', 'CSS', 'HTML'];

  return (
    <div>
      <h2>Search Tags:</h2>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <SearchTag key={index} tag={tag} onTagClick={handleTagClick} />
        ))}
      </div>
      <div>
        <h3>Selected Tags:</h3>
        <ul>
          {selectedTags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurHub;
