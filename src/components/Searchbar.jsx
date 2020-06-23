import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState"

const Searchbar = ({ runSearch }) => {
  const [searchWord, setSearchWord] = useState("");
  const [filters, setFilter] = useState([]);
  const { newSearch } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // newSearch(createUrl(searchWord, filters));
    runSearch(createUrl(searchWord, filters));
  };

  const handleSelectChange = (e) => {
    // Gets all selected values and puts them into an array
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setFilter(value);
  };

  const createUrl = (searchWord, filters) => {
    let url = `https://api.edamam.com/search?app_id=507c74ab&app_key=e4d64fd5836fb27e09a75f1c81908682&q=bread&health=vegetarian&excluded=flour`;

    if (searchWord && !filters) {
      url = `https://api.edamam.com/search?app_id=507c74ab&app_key=e4d64fd5836fb27e09a75f1c81908682&q=${searchWord}`;
      return url;
    } else if (searchWord && filters) {
      // If there are multiple filters
      if (filters.length > 1) {
        //   Create multiple queries
        const multipleFilters = filters
          .map((filter) => `&health=${filter}`)
          .join("");
        url = `https://api.edamam.com/search?app_id=507c74ab&app_key=e4d64fd5836fb27e09a75f1c81908682&q=${searchWord}${multipleFilters}`;
        return url;
        
      }
    //   Only one filter
      if (filters.length === 1) {
        const oneFilter = `$health=${filters}`.toString();
        url = `https://api.edamam.com/search?app_id=507c74ab&app_key=e4d64fd5836fb27e09a75f1c81908682&q=${searchWord}${oneFilter}`
        return url;
      }
    } else {
      console.log("missing searchword");
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-bar"
        onInput={(e) => setSearchWord(e.target.value)}
      />
      <select name="filters" multiple onChange={(e) => handleSelectChange(e)}>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="sugar-conscious">Sugar conscious</option>
        <option value="peanut-free">Peanut free</option>
        <option value="tree-nut-free">Tree nut free</option>
        <option value="alcohol-free">Alcohol free</option>
      </select>
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
