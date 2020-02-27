import React, { useContext } from 'react';

import Profile from './Profile';
import StyledFilter from './Style/StyledFilter';
import { CalendarContext } from '../../../context/Calendar';
import ContainerResource from './Style/ContainerResource';
import SearchBar from './Style/SeachBar';
import ResourceList from './Style/ResourceList';
import ResourceTable from './Style/ResourceTable';
import ResourceBody from './Style/ResourceBody';

import icon from '../../../images/search.ico';

const Filter = props => {
  const calendarContext = useContext(CalendarContext);
  const { searchResult, updateSearch } = calendarContext;

  return (
    <>
      <ContainerResource>
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
          <ResourceTable cellPadding={0} cellSpacing={0}>
            <ResourceBody>
              {searchResult &&
                searchResult.map((item,index) => {
                  return (
                    <>
                      <Profile
                        indexResource={index}
                        src={item.avatar}
                        name={item.name}
                        key={item._id}
                      />
                    </>
                  );
                })}
            </ResourceBody>
          </ResourceTable>
        </ResourceList>
      </ContainerResource>
    </>
  );
};

export default Filter;
