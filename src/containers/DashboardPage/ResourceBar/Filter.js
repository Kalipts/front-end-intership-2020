import React, { useState, useEffect } from "react";

import Profile from "./Profile";
import StyledFilter from "./StyledFilter";

const icon = require("../../../images/search.ico");

const Filter = props => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const persons = props.content;
    const filteredResults = persons.filter(item => {
      return item.name.toLowerCase().indexOf(search) !== -1;
    });
    setSearchResults(filteredResults);
  }, [props.content, search]);

  function updateSearch(event) {
    setSearch(event.target.value.toLowerCase());
  }

  return (
    <>
      <StyledFilter>
        <input
          type="text"
          placeholder="Search"
          onChange={updateSearch.bind(this)}
        />
        <img alt="search-icon" src={icon} />
      </StyledFilter>
      <div className="list-person">
        {searchResults &&
          searchResults.map(item => {
            return (
              <div key={item._id}>
                <Profile src={item.avatar} name={item.name} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Filter;
