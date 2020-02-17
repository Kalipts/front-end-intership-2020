import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import styled from "styled-components";

const photo = require("../../../images/17.jpg");
const icon = require("../../../images/search.ico");

const StyleFilter = styled.div`
  margin: 0 auto;
  border-bottom: 0.1em solid #e3e3e3;
  & > div > input {
    width: 100px;
    height: 40px;
    font-size: 18px;
    border: none;
    outline: none;
    width: 100px;
    padding: 5px 20px;
  }
`;

const Filter = props => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const filteredResults = props.content.filter(item => {
      return item.toLowerCase().indexOf(search) !== -1;
    });
    setSearchResults(filteredResults);
  }, [props.content, search]);

  function updateSearch(event) {
    setSearch(event.target.value.toLowerCase());
  }

  return (
    <>
      <StyleFilter>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search"
            onChange={updateSearch.bind(this)}
          />
          <img src={icon} />
        </div>
      </StyleFilter>
      <div className="list-person">
        {searchResults &&
          searchResults.map(item => {
            return (
              <div key={item + Math.random()}>
                <Profile src={photo} name={item} />
                {console.log(typeof photo)}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Filter;
