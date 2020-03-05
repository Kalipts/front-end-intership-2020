import React from 'react';
import StyledSearch from './StyledSearch';
import portfolio from '../../images/portfolio-1.svg';

const Search = props => (
  <StyledSearch width="100%">
    <input type="text" placeholder="Search" />
    <img alt="search-icon" src={portfolio} />
  </StyledSearch>
);

export default Search;
