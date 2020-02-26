import React, {  useEffect, useContext } from 'react';

import Profile from './Profile';
import StyledFilter from './StyledFilter';
import { CalendarContext } from '../../../context/Calendar';

const icon = require('../../../images/search.ico');

const Filter = props => {
  const calendarContext = useContext(CalendarContext);
  const {searchResult,updateSearch} = calendarContext;

  useEffect(() => {
    
    return () => {
    };
  }, [])

  return (
    <>
      <td
        style={{
          width: '185px',
          verticalAlign: 'top'
        }}
      >
        <div
          style={{
            border: '1px solid #e9e9e9',
            overflow: 'hidden',
            display: 'block'
          }}
        >
          <div
            style={{
              overflow: 'hidden',
              borderBottom: '	border: 1px solid #E1E7ED',
              height: '70px'
            }}
          >
            <StyledFilter>
              <input
                type="text"
                placeholder="Search"
                onChange={updateSearch.bind(this)}
              />
              <img alt="search-icon" src={icon} />
            </StyledFilter>
          </div>
          <div
            style={{
              overflow: 'auto',
              width: '186px'
            }}
          >
            <div style={{ paddingBottom: '0px' }}>
              <table
                cellPadding={0}
                cellSpacing={0}
                style={{
                  width: '100%',
                  margin: '0',
                  padding: '0',
                  borderSpacing: '0',
                  textAlign: 'center'
                }}
              >
                <tbody
                  style={{
                    display: 'table-row-group',
                    verticalAlign: 'middle',
                    borderColor: 'inherit'
                  }}
                >
                  {searchResult &&
                    searchResult.map(item => {
                      return (
                        <div>
                          <Profile
                            src={item.avatar}
                            name={item.name}
                            key={item._id}
                          />
                        </div>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </td>
    </>
  );
};

export default Filter;
