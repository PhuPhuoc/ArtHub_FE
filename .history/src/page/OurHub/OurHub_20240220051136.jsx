const SearchContainer = () => {
  const handleFilterClick = (filter) => {
    // Handle filter click logic here
    console.log(`Clicked filter: ${filter}`);
  };

  return (
    <div className="search__container">
      <input className="search__input" type="text" placeholder="Search" />
      <div className="filter__container">
        <button className="filter__button" onClick={() => handleFilterClick('Filter 1')}>
          Filter 1
        </button>
        <button className="filter__button" onClick={() => handleFilterClick('Filter 2')}>
          Filter 2
        </button>
        <button className="filter__button" onClick={() => handleFilterClick('Filter 3')}>
          Filter 3
        </button>
      </div>
    </div>
  );
};
