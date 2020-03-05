import React, { useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Profile from './Profile';
import StyledFilter from './Style/StyledFilter';
import { CalendarContext } from '../../../context/Calendar';
import ContainerResource from './Style/ContainerResource';
import SearchBar from './Style/SeachBar';
import ResourceList from './Style/ResourceList';
import ResourceTable from './Style/ResourceTable';

import icon from '../../../images/search.ico';
import { useWindowSize } from '../../../utils/Window';

const Filter = props => {
  const calendarContext = useContext(CalendarContext);
  const { searchResult, updateSearch } = calendarContext;
  const [size] = useWindowSize();
  const { scrollTop } = props;
  const refFilter = useRef(scrollTop);

  useEffect(() => {
    refFilter.current.scrollTop = scrollTop;
    return () => {};
  }, [scrollTop]);
  return (
    <>
      <ContainerResource
        ref={refFilter}
        height={size.height}
        onScroll={e => {
          e.preventDefault();
          refFilter.current.scrollTop = scrollTop;
        }}
      >
        <SearchBar>
          <StyledFilter>
            <input
              type="text"
              placeholder="Search"
              onChange={updateSearch.bind(this)}
            />
            <img alt="search-icon" src={icon} />
          </StyledFilter>
        </SearchBar>
        <ResourceList>
          <ResourceTable numberOfResources={searchResult.length}>
            {searchResult &&
              searchResult.map(item => (
                <Profile
                  resourceId={item._id.toString()}
                  src={item.avatar}
                  name={item.name}
                  key={`${item._id.toString()}`}
                />
              ))}
          </ResourceTable>
        </ResourceList>
      </ContainerResource>
    </>
  );
};
Filter.propTypes = {
  scrollTop: PropTypes.number,
};

export default Filter;
