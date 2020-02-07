import React, { Component } from "react";

import "../components/Sidebar.css";
import "./Calendar.css";

class Calendar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="sidebar"></div>
          <div className="wrapper-calendar"></div>
        </div>
      </>
    );
  }
}

export default Calendar;
