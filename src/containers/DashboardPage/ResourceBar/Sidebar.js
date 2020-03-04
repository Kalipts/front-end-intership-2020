import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Filter from './Filter';
import { getResource } from '../../../api/resourceApi';

function Sidebar(props) {
  const [persons, setPersons] = useState([]);
  const [, setIsLoading] = useState(false);
  const { scrollTop } = props;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await getResource();
      const result = res.data.resources;
      const personsFilter = result.map(resource => {
        const person = {
          _id: resource._id,
          name: `${resource.name.first} ${resource.name.last}`,
          avatar: resource.avatar,
        };
        return person;
      });
      setPersons(personsFilter);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return <>{persons && <Filter scrollTop={scrollTop} content={persons} />}</>;
}
Sidebar.propTypes = {
  scrollTop: PropTypes.number,
};

export default Sidebar;
