import React, { useState, useContext } from "react";
// import { GlobalContext } from "../context/GlobalState"
import "./Searchbar.css";

const Searchbar = ({ runSearch }) => {
  const [searchWord, setSearchWord] = useState("");
  const [filters, setFilter] = useState({});
  // const { newSearch } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let filtersArray = [];
    // Create an array where we have the filters that are true
    for (const [key, value] of Object.entries(filters)) {
      if (value) {
        filtersArray.push(key);
      }
    }

    console.log(filtersArray);
    console.log(searchWord);

    console.log('url', createUrl(searchWord, filtersArray));
    // newSearch(createUrl(searchWord, filters));
    runSearch(createUrl(searchWord, filtersArray));
    // createUrl(searchWord, filtersArray)
  };

  const handleSelectChange = (e) => {
    // Gets all selected values and puts them into an array
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    console.log(setFilter(value));
  };

  const handleCheckboxChange = (event) => {
    setFilter({...filters, [event.target.name]: event.target.checked});
    console.log("checked items: ", filters);
  }

  const createUrl = (searchWord, filters) => {
    console.log(searchWord);
    console.log(filters);
    let url = `https://api.edamam.com/search?app_id=507c74ab&app_key=e4d64fd5836fb27e09a75f1c81908682&q=bread&health=vegetarian&excluded=flour`;
    

    if (filters.length === 0) {
      url = `https://api.edamam.com/search?app_id=507c74ab&app_key=e4d64fd5836fb27e09a75f1c81908682&q=${searchWord}`;
      // console.log(url);
      return url;
    } else if (searchWord && filters) {
      // If there are multiple filters
      if (filters.length > 1) {
        //   Create multiple queries
        const multipleFilters = filters
          .map((filter) => `&health=${filter}`)
          .join("");
        url = `https://api.edamam.com/search?app_id=507c74ab&app_key=e4d64fd5836fb27e09a75f1c81908682&q=${searchWord}${multipleFilters}`;
        // console.log(url);
        return url;
      }
      //   Only one filter
      if (filters.length === 1) {
        const oneFilter = `$health=${filters}`.toString();
        url = `https://api.edamam.com/search?app_id=507c74ab&app_key=e4d64fd5836fb27e09a75f1c81908682&q=${searchWord}${oneFilter}`;
        return url;
      }
    }
  };

  return (
    <div className="searchbar-container">
      <h1 className="searchbar-title">What to cook today?</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-container">
          
          <input
            type="text"
            
            className="search-input"
            onInput={(e) => setSearchWord(e.target.value)}
            placeholder="Search for a recipe / ingredient..."
            required
          />
        </div>
        {/* <div className="filter-title-container">
          <h2 className="filter-title">Add a filter...</h2>
        </div> */}

        {/* <select name="filters" multiple onChange={(e) => handleSelectChange(e)}>
      <option value="vegan">Vegan</option>
      <option value="vegetarian">Vegetarian</option>
      <option value="sugar-conscious">Sugar conscious</option>
      <option value="peanut-free">Peanut free</option>
      <option value="tree-nut-free">Tree nut free</option>
      <option value="alcohol-free">Alcohol free</option>
    </select> */}
        <div className="filters-container">
          <div className="filter">
            <label>
              <input type="checkbox" className="filter-checkbox" name="vegan" onChange={handleCheckboxChange} />
              <span className="filter-span">Vegan</span>
            </label>
          </div>
          <div className="filter">
            <label>
              <input type="checkbox" className="filter-checkbox" name="vegetarian" onChange={handleCheckboxChange}/>
              <span className="filter-span">Vegetarian</span>
            </label>
          </div>
          <div className="filter">
            <label>
              <input type="checkbox" className="filter-checkbox" name="sugar-conscious" onChange={handleCheckboxChange}/>
              <span className="filter-span">Sugar conscious</span>
            </label>
          </div>
          <div className="filter">
            <label>
              <input type="checkbox" className="filter-checkbox" name="peanut-free" onChange={handleCheckboxChange}/>
              <span className="filter-span">Peanut free</span>
            </label>
          </div>
          <div className="filter">
            <label>
              <input type="checkbox" className="filter-checkbox" name="tree-nut-free" onChange={handleCheckboxChange}/>
              <span className="filter-span">Tree nut free</span>
            </label>
          </div>
          <div className="filter">
            <label>
              <input type="checkbox" className="filter-checkbox" name="alcohol-free" onChange={handleCheckboxChange} />
              <span className="filter-span">Alcohol free</span>
            </label>
          </div>
        </div>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
