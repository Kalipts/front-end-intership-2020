import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import styled from "styled-components";

const photo = require("../../../images/17.jpg");
const icon = require("../../../images/search.ico");

const StyleFilter = styled.div`
  margin: 2px 0;
  border-bottom: 0.1em solid #e3e3e3;
  & > div > input {
    width: 100px;
    height: 77px;
    font-size: 18px;
    border: none;
    outline: none;
    width: 100px;
    padding: 5px 20px;
  }
`;

const Filter = props => {
  console.log(props.content);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const persons = props.content || [{ name: "", avatar: "" }];
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
      {console.log(props.content)}
      <div className="list-person">
        {searchResults &&
          searchResults.map(item => {
            return (
              <div key={item.name + Math.random()}>
                <Profile src={item.avatar} name={item.name} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Filter;
