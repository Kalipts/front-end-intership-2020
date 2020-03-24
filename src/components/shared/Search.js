import React from 'react';
import PropTypes from 'prop-types';

import StyledSearch from './StyledSearch';
import portfolio from '../../images/search.ico';

const Search = props => {
  const { items, onFilterItem } = props;

  const handleInputChange = event => {
    const querry = event.target.value;
    const filterItem = items.filter(
      item => item.name.toLowerCase().indexOf(querry) !== -1,
    );
    onFilterItem(filterItem);
  };
  return (
    <StyledSearch width="100%">
      <input type="text" placeholder="Search" onChange={handleInputChange} />
      <img alt="search-icon" src={portfolio} />
    </StyledSearch>
  );
};

Search.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onFilterItem: PropTypes.func,
};

export default Search;
