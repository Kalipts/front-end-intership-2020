import React, { useState } from "react";

import Filter from "./Filter";
import StyledSidebar from "./StyledSidebar";

function Sidebar() {
  const persons = [
    "Hoang Nguyen",
    "Bao Tran",
    "Dat Nguyen",
    "An Nguyyen",
    "Huy Huynh",
    "An Nguyen",
    "Binh Nguyen",
    "Huong Do",
    "Nhat Anh",
    "Tuyet Tran",
    "Ngoc Dung"
  ];
  return (
    <StyledSidebar>
      <Filter content={persons} />
    </StyledSidebar>
  );
}

export default Sidebar;
