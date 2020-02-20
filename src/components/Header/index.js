import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <ul>
      <li className="logo">
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
          <img className="test1" src={require("../../images/Oval.png")} />
        </NavLink>
      </li>
    </ul>
  );
};
export default Header;
