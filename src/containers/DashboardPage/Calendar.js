import React, { Component } from "react";

import Sidebar from "./ResourceBar/Sidebar";

import "./Calendar.css";

class Calendar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="wrapper-calendar"></div>
        </div>
      </>
    );
  }
}

export default Calendar;
