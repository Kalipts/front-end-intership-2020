import React, { Component } from "react";

import "./Calendar.css";
import "./Sidebar.css";

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
