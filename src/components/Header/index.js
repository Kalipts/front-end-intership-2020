import React from "react";
import { NavLink } from "react-router-dom";
import StyledHeader from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <li>
        <NavLink to="/">
          <img
            className="test0"
            src={require("../../images/Bitmap.png")}
            alt="ces-logo"
          />
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/project">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/resource">Resources</NavLink>
      </li>
      <li className="user">
        <NavLink to="/" className="active">
          <img
            alt="user-icon"
            className="test1"
            src={require("../../images/Oval.png")}
          />
        </NavLink>
      </li>
    </StyledHeader>
  );
};
export default Header;
