import React, { useState, useEffect } from "react";

import Filter from "./Filter";
import StyledSidebar from "./StyledSidebar";
import { getResource } from "../../../api/resourceApi";

function Sidebar() {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const res = await getResource();
    const result = await res.data.resources;
    const personsFilter = result.map(resource => {
      const person = {
        name: resource.name.first + " " + resource.name.last,
        avatar: resource.avatar
      };
      return person;
    });
    try {
      setPersons(personsFilter);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledSidebar>
      {isLoading && <div>Loading</div>}
      {persons && <Filter content={persons} />}
    </StyledSidebar>
  );
}

export default Sidebar;
