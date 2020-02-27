import React, { useState, useEffect } from "react";

import Filter from "./Filter";
import { getResource } from "../../../api/resourceApi";

function Sidebar(props) {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await getResource();
      const result = res.data.resources;
      const personsFilter = result.map(resource => {
        const person = {
          _id: resource._id,
          name: resource.name.first + " " + resource.name.last,
          avatar: resource.avatar
        };
        return person;
      });
      setPersons(personsFilter);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <th>Loading</th>}
      {persons && <Filter content={persons} />}
    </>
  );
}

export default Sidebar;
